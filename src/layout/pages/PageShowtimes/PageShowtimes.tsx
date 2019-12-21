import React, { useEffect, useState, FunctionComponent } from 'react';

// Misc
import * as showtimeAPI from '../../../api/showtimeAPI';
import * as screenTypeAPI from '../../../api/screenTypeAPI';

// Interface
import { Showtime } from '../../../interfaces/showtime';
import { ScreenType } from '../../../interfaces/screenType';

// Component
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import MaterialTable, { Column, MTableAction } from 'material-table';

// Custom Component
// import DialogAddOrEditShowtime from './components/DialogAddOrEditShowtime';
import DialogYesNo from '../../../components/DialogYesNo';

// Class
// import classes from './PageShowtimes.module.scss';

// const PageShowtimes: FunctionComponent = () => {
//   const [showtimes, setShowtimes] = useState<Array<Showtime>>([]);
//   const [screenTypeList, setScreenTypeList] = useState<Array<ScreenType>>([]); // Naming convention: use abcList for non-primary array 
//   const [isTableLoading, setIsTableLoading] = useState(false);
//   // Add or edit Dialog
//   const [isDialogAddOrEditOpen, setIsDialogAddOrEditOpen] = useState(false);
//   const [showtimeToEdit, setShowtimeToEdit] = useState<Showtime | null>(null);
//   // Delete Dialog
//   const [showtimeIdToDelete, setShowtimeIdToDelete] = useState(''); // TODO: Find out if we need to make this a state
//   const [isDialogDeleteOpen, setIsDialogDeleteOpen] = useState(false);
//   const [isLoadingDelete, setIsLoadingDelete] = useState(false);
  
//   const columns: Array<Column<Showtime>> = [
//     // { title: 'Id', field: 'id', editable: 'never', cellStyle: {width: '300px'} },
//     { title: 'Title', field: 'title', cellStyle: {width: '300px'} },
//     {
//       title: 'Genres',
//       field: 'genres',
//       render: (rowData) => {
//         const genresDisplay = rowData.genres.map(genre => genre.name).join(', ');
//         return (<span>{genresDisplay}</span>)
//       }
//     },
//     {
//       title: 'Screen types',
//       field: 'screenTypes',
//       render: (rowData) => {
//         const screenTypesDisplay = rowData.screenTypes.map(screenType => screenType.name).join(', ');
//         return (<span>{screenTypesDisplay}</span>)
//       }
//     },
//     {
//       title: 'Directors',
//       field: 'directors',
//       render: (rowData) => {
//         const directorsDisplay = rowData.directors.join(', ');
//         return (<span>{directorsDisplay}</span>)
//       }
//     },
//     {
//       title: 'Actors',
//       field: 'actors',
//       render: (rowData) => {
//         const actorsDisplay = rowData.actors.map(actor => actor.name).join(', ');
//         return (<span>{actorsDisplay}</span>)
//       }
//     },
//     { title: 'Country', field: 'country', cellStyle: {width: '200px'} },
//     { title: 'Released', field: 'released', cellStyle: {width: '200px'} },
//     { title: 'End at', field: 'endAt', cellStyle: {width: '200px'} },
//     { title: 'Duration', field: 'runtime', cellStyle: {width: '200px'} },
//     {
//       title: 'Poster',
//       field: 'poster',
//       render: (rowData) => {
//         return (<span><img src={rowData.poster} alt={rowData.title} style={{height: 150, width: 'auto'}} /></span>)
//       }
//     },
//     {
//       title: 'Rated',
//       field: 'rated',
//       render: (rowData) => {
//         return (<span>{rowData.rated.name}</span>)
//       }
//     },
//   ]

//   useEffect(() => {
//     getAllShowtimes();
//     getScreenTypeList();
//   }, []);

//   const getAllShowtimes = () => {
//     setIsTableLoading(true);
//     showtimeAPI.getAllShowtimes()
//       .then(response => {
//         setIsTableLoading(false);
//         setShowtimes(response.data);
//       })
//       .catch(err => {
//         setIsTableLoading(false);
//         console.log(err);
//       })
//   }

//   const getScreenTypeList = () => {
//     screenTypeAPI.getAllScreenTypes()
//       .then(response => {
//         setScreenTypeList(response.data);
//       })
//       .catch(err => {
//         console.log(err);
//       })
//   }

//   const onAddClick = () => {
//     setIsDialogAddOrEditOpen(true);
//   }

//   const onUpdateClick = (event: any, showtime: any) => {
//     setShowtimeToEdit(showtime);
//     setIsDialogAddOrEditOpen(true);
//   }
  
//   const onDeleteClick = (event: any, showtime: any) => {
//     setShowtimeIdToDelete(showtime.id);
//     setIsDialogDeleteOpen(true);
//   }

//   const deleteShowtime = (id: string) => {
//     setIsLoadingDelete(true);
//     showtimeAPI.deleteShowtime(id)
//       .then((response) => {
//         setIsLoadingDelete(false);
//         closeDialogDelete();
//         getAllShowtimes();
//       })
//       .catch((err) => {
//         setIsLoadingDelete(false);
//         console.log(err);
//       })
//   }

//   const closeDialogDelete = () => {
//     setIsDialogDeleteOpen(false);
//     setShowtimeIdToDelete('');
//   }

//   return (
//     <div>
//       <MaterialTable
//         title="Showtimes"
//         isLoading={isTableLoading}
//         columns={columns}
//         data={showtimes}
//         options={{
//           headerStyle: {
//             backgroundColor: '#009be5',
//             color: '#fff',
//           },
//           rowStyle: {
//             backgroundColor: '#eee',
//           },
//         }}
//         actions={[
//           { icon: 'edit', tooltip: 'Edit', onClick: (event, rowData) => onUpdateClick(event, rowData) },
//           { icon: 'delete', tooltip: 'Delete', onClick: (event, rowData) => onDeleteClick(event, rowData) },
//           { icon: 'add', tooltip: 'Add', onClick: () => {}, isFreeAction: true }, // Will be overrided right below
//         ]}
//         components={{
//           Action: prevProps => {
//             if (prevProps.action.icon === 'add') {
//               // Override 'add' Action
//               return <Button variant="contained" color="primary" startIcon={<AddIcon />} style={{marginLeft: '20px'}} onClick={() => onAddClick()}>Add Showtime</Button>;
//             }

//             return <MTableAction {...prevProps} />
//           }
//         }}
//       />

//       <DialogAddOrEditShowtime
//         showtimeToEdit={showtimeToEdit}
//         isOpen={isDialogAddOrEditOpen}
//         screenTypeList={screenTypeList}
//         onClose={() => {
//           setIsDialogAddOrEditOpen(false);

//           // setTimeout temp fix: transition (animation) doesn't catch up on setShowtimeToEdit(null)
//           // TODO: Fix this
//           setTimeout(() => {
//             setShowtimeToEdit(null);
//           }, 150);
//         }}
//         onSave={() => {
//           setIsDialogAddOrEditOpen(false);

//           // setTimeout temp fix: transition (animation) doesn't catch up on setShowtimeToEdit(null)
//           // TODO: Fix this
//           setTimeout(() => {
//             setShowtimeToEdit(null);
//           }, 150);

//           getAllShowtimes();
//         }}
//       />

//       <DialogYesNo
//         isOpen={isDialogDeleteOpen}
//         isLoadingYes={isLoadingDelete}
//         onYes={() => {deleteShowtime(showtimeIdToDelete);}}
//         onNo={() => {closeDialogDelete();}}
//         onClose={() => {closeDialogDelete();}}
//       />
//     </div>
//   );
// }

// export default PageShowtimes;