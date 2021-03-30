import React from 'react'
import { DataGrid } from '@material-ui/data-grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      '& > *': {
        margin: theme.spacing(1),
        width: theme.spacing(100),
        height: theme.spacing(60),
      },
    },
  }));

const columns = [
    { field: 'email', headerName: 'Email', width: 150 },
    { field: 'firstName', headerName: 'First name', width: 130 },
    { field: 'lastName', headerName: 'Last name', width: 130 },
    {
      field: 'annotations',
      headerName: 'Annotations',
      type: 'number',
      width: 150,
    },
    {
      field: 'role',
      headerName: 'Role',
      sortable: false,
      width: 160,
      valueGetter: (params) =>
        `${params.getValue('firstName') || ''} ${params.getValue('lastName') || ''}`,
    },
  ];
  

  const rows = [
    { id: 1, email: 'bogiatzi@tcd.ie', lastName: 'Snow', firstName: 'Jon', annotations: 35 },
    { id: 2, email: 'bogiatzi@tcd.ie',lastName: 'Lannister', firstName: 'Cersei', annotations: 42 },
    { id: 3, email: 'bogiatzi@tcd.ie',lastName: 'Lannister', firstName: 'Jaime', annotations: 45 },
    { id: 4, email: 'bogiatzi@tcd.ie',lastName: 'Stark', firstName: 'Arya', annotations: 16 },
    { id: 5, email: 'bogiatzi@tcd.ie',lastName: 'Targaryen', firstName: 'Daenerys', annotations: null },
    { id: 6, email: 'bogiatzi@tcd.ie',lastName: 'Melisandre', firstName: null, annotations: 150 },
    { id: 7, email: 'bogiatzi@tcd.ie',lastName: 'Clifford', firstName: 'Ferrara', annotations: 44 },
    { id: 8, email: 'bogiatzi@tcd.ie',lastName: 'Frances', firstName: 'Rossini', annotations: 36 },
  ];

  let newUser = {
    id: 9,
    email: "test@gmail.com",
    lastName: "testLast",
    firstName : "testFirst",
    annotations :5
   };
   
  rows.push(newUser);
 

const AdminDasboard = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            
              <Paper elevation={3}>
              
      <DataGrid rows={rows} columns={columns} pageSize={10} checkboxSelection />
      </Paper>
    </div>
    )
}

export default AdminDasboard
