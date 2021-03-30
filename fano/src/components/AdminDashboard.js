import React from 'react'
import Users from './Admin_components/Admin_usersTable';
import Grid from '@material-ui/core/Grid';

const AdminDasboard = () => {
    return (
        <div>
            <Grid>
            <Users/>
            </Grid>
             
        </div>
    )
}

export default AdminDasboard
