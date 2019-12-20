import React, { useState, FunctionComponent, useEffect } from 'react';

// Misc
import * as roomAPI from '../../../../api/roomAPI';

// Interface
import { Room, RoomInput } from '../../../../interfaces/room';
import { ScreenType } from '../../../../interfaces/screenType';

// Component
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormLabel from '@material-ui/core/FormLabel';
import TextField from '@material-ui/core/TextField';

interface IOptionScreenType {
  screenType: ScreenType,
  isSelected: boolean,
}

interface IDialogAddOrEditRoomProps {
  roomToEdit: Room | null, // null: DialogAdd. not null: DialogEdit
  isOpen: boolean,
  screenTypeList: ScreenType[],
  onClose: Function, // Call this to close Dialog
  onSave: Function, // Call this to close Dialog & refresh table
}

const DialogAddOrEditRoom: FunctionComponent<IDialogAddOrEditRoomProps> = (props) => {
  const [roomInput, setRoomInput] = useState<RoomInput>({ name: '', clusterId: '5dc77c3f06e6b13dc44b6cac', screenTypeIds: [], totalRows: 0, totalSeatsPerRow: 0 });
  const [isLoadingSave, setIsLoadingSave] = useState(false);

  // TODO: clean these up: create a component "CheckboxGroup" that take directly an array of string as a props
  const [screenTypeOptions, setScreenTypeOptions] = useState<Array<IOptionScreenType>>([]); // For checkboxes
  // useEffect below: watch screenTypeOptions state changed
  useEffect(() => {
    // Whenever screenTypeOptions changed (= checkboxes changed), update roomInput.screenTypeIds
    const screenTypeIdsSelected = screenTypeOptions
      .filter(screenTypeOption => {
        return screenTypeOption.isSelected === true;
      })
      .map(screenTypeOption => {
        return screenTypeOption.screenType.id;
      });
    setRoomInput({ ...roomInput, screenTypeIds: screenTypeIdsSelected });
    // Comment below is there to disable a stupid linter warning
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [screenTypeOptions]);

  const onDialogEnter = () => {
    if (!props.roomToEdit) {
      setRoomInput({ name: '', clusterId: '5dc77c3f06e6b13dc44b6cac', screenTypeIds: [], totalRows: 0, totalSeatsPerRow: 0 });
    } else {
      setRoomInput({
        name: props.roomToEdit.name,
        clusterId: '5dc77c3f06e6b13dc44b6cac',
        screenTypeIds: props.roomToEdit.screenTypes.map(screenType => screenType.id),
        totalRows: props.roomToEdit.totalRows,
        totalSeatsPerRow: props.roomToEdit.totalSeatsPerRow,
      });
    }
    
    initScreenTypeOptionsValue();
  }

  const onDialogClose = () => {
    props.onClose();
  }

  const onDialogSave = () => {
    setIsLoadingSave(true);
    if (!props.roomToEdit) {
      // Add Room
      roomAPI.addRoom(roomInput)
        .then(response => {
          setIsLoadingSave(false);
          console.log(response);
          props.onSave();
        })
        .catch(err => {
          setIsLoadingSave(false);
          console.log(err);
        })
    } else {
      // Update Room
      roomAPI.updateRoom(props.roomToEdit.id, roomInput)
        .then(response => {
          setIsLoadingSave(false);
          console.log(response);
          props.onSave();
        })
        .catch(err => {
          setIsLoadingSave(false);
          console.log(err);
        })
    }
  }

  const initScreenTypeOptionsValue = () => {
    const tmpScreenTypeOptions = props.screenTypeList.map(screenType => {
      let isScreenTypeSelected = false;

      if (!props.roomToEdit) {
        isScreenTypeSelected = false;
      } else {
        // Check if
        isScreenTypeSelected = props.roomToEdit.screenTypes.map(currentScreenType => currentScreenType.id).includes(screenType.id);
      }

      return {
        screenType: screenType,
        isSelected: isScreenTypeSelected,
      };
    })
    setScreenTypeOptions(tmpScreenTypeOptions);
  }

  const renderScreenTypeCheckboxes = () => {
    return (
      <FormGroup style={{marginLeft: 10, marginBottom: 20,}}>
        <FormLabel>Screen types:</FormLabel>
        <div style={{display: 'flex',}}>
          {screenTypeOptions.map(screenTypeOption => (
            <FormControlLabel
              key={screenTypeOption.screenType.id}
              control={
                <Checkbox
                  checked={screenTypeOption.isSelected}
                  onChange={(event, checked) => {
                    const tmpScreenTypeOptions = [...screenTypeOptions];
                    const foundIndex = tmpScreenTypeOptions.findIndex(x => x.screenType.id === screenTypeOption.screenType.id);
                    tmpScreenTypeOptions[foundIndex] = {...screenTypeOption, isSelected: checked };
                    setScreenTypeOptions(tmpScreenTypeOptions);
                  }}
                  color="primary"
                />
              }
              label={screenTypeOption.screenType.name}
              style={{flex: 1}}
            />
          ))}
        </div>
      </FormGroup>
    )
  }

  return (
    <Dialog open={props.isOpen} onEnter={() => onDialogEnter()} onClose={() => onDialogClose()}>
      <DialogTitle id="form-dialog-title">{!props.roomToEdit ? `Add Room` : `Edit Room: ${props.roomToEdit.name}`}</DialogTitle>
      <DialogContent dividers>
        <DialogContentText>
          Please fill those fields below to continue.
        </DialogContentText>
        <TextField
          required
          label="Room name"
          style={{ margin: 10, marginBottom: 20, }}
          placeholder="Sci-Fi"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true, }}
          variant="outlined"
          value={roomInput.name}
          onChange={(event) => {setRoomInput({...roomInput, name: event.target.value })}}
        />
        {renderScreenTypeCheckboxes()}
        <TextField
          required
          label="Seats per row"
          type="number"
          style={{ margin: 10, marginBottom: 20, }}
          placeholder="8"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true, }}
          variant="outlined"
          value={roomInput.totalSeatsPerRow}
          onChange={(event) => {setRoomInput({...roomInput, totalSeatsPerRow: event.target.value ? parseInt(event.target.value) : 0 })}}
        />
        <TextField
          required
          label="Total rows"
          type="number"
          style={{ margin: 10, marginBottom: 20, }}
          placeholder="10"
          fullWidth
          margin="normal"
          InputLabelProps={{ shrink: true, }}
          variant="outlined"
          value={roomInput.totalRows}
          onChange={(event) => {setRoomInput({...roomInput, totalRows: event.target.value ? parseInt(event.target.value) : 0 })}}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => onDialogClose()} color="primary">
          Cancel
        </Button>
        <div style={{position: 'relative'}}>
          {/* Extra <div> is for loading */}
          <Button onClick={() => onDialogSave()} color="primary" variant="contained" disabled={isLoadingSave}>
            Save
          </Button>
          {isLoadingSave ? <CircularProgress size={24} className="circular-center-size-24px" /> : null}
        </div>
      </DialogActions>
    </Dialog>
  );
}

export default DialogAddOrEditRoom;