import React, { useEffect, useState, FunctionComponent } from 'react';

// Misc
import * as roomAPI from '../../../api/roomAPI';
import * as screenTypeAPI from '../../../api/screenTypeAPI';

// Interface
import { Room } from '../../../interfaces/room';
import { ScreenType } from '../../../interfaces/screenType';

// Component
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import MaterialTable, { Column, MTableAction } from 'material-table';

// Custom Component
import DialogAddOrEditRoom from './components/DialogAddOrEditRoom';
import DialogYesNo from '../../../components/DialogYesNo';

// Class
// import classes from './PageRooms.module.scss';

const PageRooms: FunctionComponent = () => {
  const [rooms, setRooms] = useState<Array<Room>>([]);
  const [screenTypeList, setScreenTypeList] = useState<Array<ScreenType>>([]); // Naming convention: use abcList for non-primary array 
  const [isTableLoading, setIsTableLoading] = useState(false);
  // Add or edit Dialog
  const [isDialogAddOrEditOpen, setIsDialogAddOrEditOpen] = useState(false);
  const [roomToEdit, setRoomToEdit] = useState<Room | null>(null);
  // Delete Dialog
  const [roomIdToDelete, setRoomIdToDelete] = useState(''); // TODO: Find out if we need to make this a state
  const [isDialogDeleteOpen, setIsDialogDeleteOpen] = useState(false);
  const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  
  const columns: Array<Column<Room>> = [
    { title: 'Id', field: 'id', editable: 'never', cellStyle: {width: '300px'} },
    { title: 'Name', field: 'name' },
    {
      title: 'Screen types',
      field: 'screenTypes',
      render: (rowData) => {
        const screenTypesDisplay = rowData.screenTypes.map(screenType => screenType.name).join(', ');
        return (<span>{screenTypesDisplay}</span>)
      }
    },
    { title: 'Seats per row', field: 'totalSeatsPerRow', cellStyle: {width: '200px'} },
    { title: 'Total rows', field: 'totalRows', cellStyle: {width: '200px'} },
  ]

  useEffect(() => {
    getAllRooms();
    getScreenTypeList();
  }, []);

  const getAllRooms = () => {
    setIsTableLoading(true);
    roomAPI.getAllRooms()
      .then(response => {
        setIsTableLoading(false);
        setRooms(response.data);
      })
      .catch(err => {
        setIsTableLoading(false);
        console.log(err);
      })
  }

  const getScreenTypeList = () => {
    screenTypeAPI.getAllScreenTypes()
      .then(response => {
        setScreenTypeList(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  }

  const onAddClick = () => {
    setIsDialogAddOrEditOpen(true);
  }

  const onUpdateClick = (event: any, room: any) => {
    setRoomToEdit(room);
    setIsDialogAddOrEditOpen(true);
  }
  
  const onDeleteClick = (event: any, room: any) => {
    setRoomIdToDelete(room.id);
    setIsDialogDeleteOpen(true);
  }

  const deleteRoom = (id: string) => {
    setIsLoadingDelete(true);
    roomAPI.deleteRoom(id)
      .then((response) => {
        setIsLoadingDelete(false);
        closeDialogDelete();
        getAllRooms();
      })
      .catch((err) => {
        setIsLoadingDelete(false);
        console.log(err);
      })
  }

  const closeDialogDelete = () => {
    setIsDialogDeleteOpen(false);
    setRoomIdToDelete('');
  }

  return (
    <div>
      <MaterialTable
        title="Rooms"
        isLoading={isTableLoading}
        columns={columns}
        data={rooms}
        options={{
          headerStyle: {
            backgroundColor: '#009be5',
            color: '#fff',
          },
          rowStyle: {
            backgroundColor: '#eee',
          },
        }}
        actions={[
          { icon: 'edit', tooltip: 'Edit', onClick: (event, rowData) => onUpdateClick(event, rowData) },
          { icon: 'delete', tooltip: 'Delete', onClick: (event, rowData) => onDeleteClick(event, rowData) },
          { icon: 'add', tooltip: 'Add', onClick: () => {}, isFreeAction: true }, // Will be overrided right below
        ]}
        components={{
          Action: prevProps => {
            if (prevProps.action.icon === 'add') {
              // Override 'add' Action
              return <Button variant="contained" color="primary" startIcon={<AddIcon />} style={{marginLeft: '20px'}} onClick={() => onAddClick()}>Add Room</Button>;
            }

            return <MTableAction {...prevProps} />
          }
        }}
      />

      <DialogAddOrEditRoom
        roomToEdit={roomToEdit}
        isOpen={isDialogAddOrEditOpen}
        screenTypeList={screenTypeList}
        onClose={() => {
          setIsDialogAddOrEditOpen(false);

          // setTimeout temp fix: transition (animation) doesn't catch up on setRoomToEdit(null)
          // TODO: Fix this
          setTimeout(() => {
            setRoomToEdit(null);
          }, 150);
        }}
        onSave={() => {
          setIsDialogAddOrEditOpen(false);

          // setTimeout temp fix: transition (animation) doesn't catch up on setRoomToEdit(null)
          // TODO: Fix this
          setTimeout(() => {
            setRoomToEdit(null);
          }, 150);

          getAllRooms();
        }}
      />

      <DialogYesNo
        isOpen={isDialogDeleteOpen}
        isLoadingYes={isLoadingDelete}
        onYes={() => {deleteRoom(roomIdToDelete);}}
        onNo={() => {closeDialogDelete();}}
        onClose={() => {closeDialogDelete();}}
      />
    </div>
  );
}

export default PageRooms;