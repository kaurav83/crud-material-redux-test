import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import DeleteIcon from '@material-ui/icons/Delete';
import { blue } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import PublishIcon from '@material-ui/icons/Publish';
import {
    ListItem,
    Box,
    Typography,
    TextareaAutosize,
    Tooltip
} from "@material-ui/core";
import { deleteUser, editUser } from '../../actions/users';
import { userItemStyles } from '../styles';

const UserItem = ({user, deleteUser, editUser, userId, onClick}) => {
    const classNames = userItemStyles();
    const [userDesc, setDesc] = useState("");
    const [errorSubmit, setError] = useState(false);
    const [showEditField, setEditField] = useState(false)

    const handleChange = (e) => {
        setDesc(e.target.value);
        if (e.target.value.length) {
            setError(false);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (userDesc.length) {
            setDesc("");
            editUser(user.id, {name: user.name, surname: user.surname, desc: userDesc});
            setEditField(false);
        } else {
            setError(true);
        }
    }

    const handleClickEdit = (e) => {
        onClick(e, user.id);
        setEditField(true);
    }

    return (
        <ListItem className={classNames.item}>
            <Box className={classNames.firstRow}>
               <Typography component="div">
                    <Box fontWeight="fontWeightBold">
                        {user.name}&nbsp;
                    </Box>
                </Typography>
                <Typography component="div">
                    <Box fontWeight="fontWeightBold">
                        {user.surname}
                    </Box>
                </Typography>
                <Box onClick={() => deleteUser(user.id)} style={{marginLeft: "auto"}}>
                    <Tooltip title="Удалить пользователя">
                        <DeleteIcon style={{ color: blue[800], cursor: "pointer"}} />
                    </Tooltip>
                </Box>
            </Box>
            <Box className={classNames.secondRow}>
                {
                    (userId === user.id) && showEditField ?
                        <Box style={{width: "100%"}}>
                        <form onSubmit={handleSubmit} className={classNames.form}>
                            <TextareaAutosize
                                type="text"
                                value={userDesc}
                                rowsMin={4}
                                aria-label="maximum height"
                                placeholder="О себе"
                                onChange={handleChange}
                                name="desc"
                                className={classNames.textarea}
                            />
                            <button type="submit" className={classNames.button}>
                                <Tooltip title="Опубликовать">
                                    <PublishIcon
                                        style={{ color: blue[500], cursor: "pointer"}} 
                                    />
                                </Tooltip>
                            </button>
                            {
                                errorSubmit ?
                                    <Typography 
                                        variant="caption"
                                        style={{
                                            position: "absolute", 
                                            color: "tomato", 
                                            left: "0", 
                                            bottom: "0",
                                            transform: "translate(0, 25%)"
                                        }}
                                    >Поле обязательно для заполнения</Typography>
                                    :
                                    null
                            }
                        </form>
                        </Box>
                        :
                        <Typography>{user.desc}</Typography>
                }
                {
                    !showEditField ?
                        <Tooltip title="Редактировать описание пользователя">
                            <EditIcon 
                                style={{ color: blue[500], cursor: "pointer"}} 
                                onClick={(e) => handleClickEdit(e)}    
                            />
                        </Tooltip>
                        :
                        null
                }
            </Box>
        </ListItem>
    )
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired,
    deleteUser: PropTypes.func.isRequired,
    editUser: PropTypes.func.isRequired,
    userId: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
}

export default connect(null, { deleteUser, editUser })(UserItem);