import React, { Fragment } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Divider from "@material-ui/core/Divider";
import Users from './Users/Users';
import CreateUser from './CreateUser/CreateUser';

const Layout = () => {

    return (
        <Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <CreateUser />
                <Divider />
                <Users />
            </Container>
        </Fragment>
    )
};

export default Layout;