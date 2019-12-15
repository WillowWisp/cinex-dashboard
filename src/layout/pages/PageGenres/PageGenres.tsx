import React, { useEffect, useState } from 'react';

// Misc
import * as genreAPI from '../../../api/genreAPI';

// Interface
import { Genre } from '../../../interfaces/genre';

// Component
// import FilterListIcon from '@material-ui/icons/FilterList';
// import IconButton from '@material-ui/core/IconButton';
import MaterialTable, { Column } from 'material-table';
// import Paper from '@material-ui/core/Paper';
// import Table from '@material-ui/core/Table';
// import TableBody from '@material-ui/core/TableBody';
// import TableCell from '@material-ui/core/TableCell';
// import TableContainer from '@material-ui/core/TableContainer';
// import TableHead from '@material-ui/core/TableHead';
// import TableRow from '@material-ui/core/TableRow';
// import Toolbar from '@material-ui/core/Toolbar';
// import Tooltip from '@material-ui/core/Tooltip';
// import Typography from '@material-ui/core/Typography';

// Class
// import classes from './PageGenres.module.scss';

function PageGenres() {
  // const [columns, setColumns] = useState<Array<Column<Genre>>>([
  //   { title: 'Id', field: 'id' },
  //   { title: 'Name', field: 'name' },
  // ]);
  const [genres, setGenres] = useState<Array<Genre>>([]);
  
  const columns: Array<Column<Genre>> = [
    { title: 'Id', field: 'id', editable: 'never', cellStyle: {width: '300px'} },
    { title: 'Name', field: 'name' },
  ]

  useEffect(() => {
    genreAPI.getAllGenres()
      .then(response => {
        setGenres(response.data);
      })
      .catch(err => {
        console.log(err);
      })
  });

  // const onRowAdd = (newData: Genre): Promise<any> => {
  //   console.log('add');
  //   console.log(newData);

  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve();
  //     }, 3000);
  //   });
  // }
  
  // const onRowUpdate = (newData: Genre, oldData?: Genre): Promise<any> => {
  //   console.log('update');
  //   console.log(newData);
  //   console.log(oldData);

  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve();
  //     }, 3000);
  //   });
  // }
  
  // const onRowDelete = (dataToDelete: Genre): Promise<any> => {
  //   console.log('delete');
  //   console.log(dataToDelete);

  //   return new Promise(resolve => {
  //     setTimeout(() => {
  //       resolve();
  //     }, 3000);
  //   });
  // }

  const onUpdateClick = (event: any, genre: Genre | Genre[]) => {
    console.log('update');
    console.log(genre);
  }
  
  const onDeleteClick = (event: any, genre: Genre | Genre[]) => {
    console.log('delete');
    console.log(genre);
  }

  return (
    <div>
      {/* <Toolbar className={classes['table-top']}>
        <Typography variant="h6">
          Genres
        </Typography>
        <Tooltip title="Filter list">
          <IconButton aria-label="filter list">
            <FilterListIcon />
          </IconButton>
        </Tooltip>
      </Toolbar> */}

      {/* <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className={classes['custom-header-cell']}>Id</TableCell>
              <TableCell className={classes['custom-header-cell']}>Name</TableCell>
              <TableCell className={classes['custom-header-cell']}>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {genres.map(genre => (
              <TableRow key={genre.name}>
                <TableCell>{genre.id}</TableCell>
                <TableCell>{genre.name}</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer> */}

      <MaterialTable
        title="Genres"
        columns={columns}
        data={genres}
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
        ]}
        // editable={{
        //   onRowAdd: newData => onRowAdd(newData),
        //   onRowUpdate: (newData, oldData) => onRowUpdate(newData, oldData),
        //   onRowDelete: dataToDelete => onRowDelete(dataToDelete),
        // }}
      />
    </div>
  );
}

export default PageGenres;