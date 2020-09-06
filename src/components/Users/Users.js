import React, { useEffect, useState, Fragment } from 'react';
import PropTypes  from 'prop-types';
import {
    List,
    Divider,
    Box,
    CircularProgress
} from "@material-ui/core";
import Pagination from '@material-ui/lab/Pagination';
import { connect } from 'react-redux';
import { getUsers } from '../../actions/users';
import UserItem from './UserItem';
import { usersStyles } from '../styles';

const Users = ({ getUsers, users: {users, loading} }) => {
    const [currentPage, setPage] = useState(1);
    const [userId, setUserId] = useState(0);

    const classNames = usersStyles();
    const USERS_PER_PAGE = 5;
    const totalPages = Math.ceil(users.length / USERS_PER_PAGE);
    const lastUser= currentPage * USERS_PER_PAGE;
    const firstUser = lastUser - USERS_PER_PAGE;
    const currentUsers = users.slice(firstUser, lastUser);

    useEffect(() => {
        getUsers();
    }, [getUsers]);

    const handleChange = (event, value) => {
        setPage(value);
    };

    const handleEditItem = (e, id) => {
        setUserId(id);
    }

    const renderUserItem = () => (
        <Box className={classNames.box}>
            <List dense>
                {
                   currentUsers.map(user => (
                        <UserItem 
                            key={user.id} 
                            user={user}
                            userId={userId}
                            onClick={handleEditItem}
                        />
                    ))
                }
            </List>
            <Divider />
            {renderPagination()}
        </Box>
    );

    const renderPagination = () => {
        return (
            <Box 
                component="span"
                className={classNames.boxPaginator}
            >
                <Pagination 
                    count={totalPages}
                    page={currentPage}
                    onChange={handleChange}
                    defaultPage={1}
                    classes={{ul: classNames.paginator}}
                    variant="outlined" 
                    shape="rounded"
                />
            </Box>
        )
    };

    return (
        <Fragment >
            {
                loading ?
                    <CircularProgress 
                        disableShrink
                        className={classNames.spinner}
                    />
                    :
                    renderUserItem()
            }
        </Fragment>
    )
};

Users.propTypes = {
    getUsers: PropTypes.func.isRequired,
    users: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    users: state.users
});

export default connect(mapStateToProps, { getUsers })(Users);