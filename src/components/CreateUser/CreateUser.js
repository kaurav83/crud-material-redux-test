import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Typography, Box, TextareaAutosize, Button, Input } from '@material-ui/core';
import { connect } from 'react-redux';
import { createUserStyles } from '../styles';
import { addUser } from '../../actions/users';
import { lastItemCollection } from '../../utils/findLastItem';

const CreateUser = ({addUser, users}) => {
    const classNames = createUserStyles();
    const [state, setData] = useState({id: 0, name: "", surname: "", desc: ""});
    const [errorText, setErrorText] = useState(false);

    useEffect(() => {
        const lastUser = users.length ? lastItemCollection(users) : {id: 0};
        const setId = Number(lastUser.id) + 1;

        setData(prevState => ({
            ...prevState, id: setId
        }));
    }, [users]);

    useEffect(() => {
        const {name, surname, desc} = state;
        if (name.length && surname.length && desc.length) {
            setErrorText(false)
        }
    }, [state]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        
        setData(prevState => ({
            ...prevState, [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (state.name.length && state.surname.length && state.desc.length) {
            addUser(state);
            setData({id: 0, name: "", surname: "", desc: ""})
            setErrorText(false)
        } else {
            setErrorText(true)
        }
    }

    return (
        <Box className={classNames.boxCreateUser}>
            <Typography variant="h4" align="center" gutterBottom>
                Создать пользователя
            </Typography>
            <form onSubmit={handleSubmit}>
                <Box className={classNames.boxFields}>
                    <Box>
                        <Input
                            type="text"
                            value={state.name} 
                            onChange={handleChange} 
                            placeholder="Имя"
                            name="name"
                            className={classNames.fields}                    
                        /> 
                    </Box>
                    <Box>
                        <Input
                            type="text"
                            value={state.surname}
                            onChange={handleChange}
                            placeholder="Фамилия"
                            name="surname"
                            className={classNames.fields}
                        />
                    </Box>
                    <Box>
                        <TextareaAutosize
                            type="text"
                            value={state.desc}
                            rowsMin={4}
                            aria-label="maximum height"
                            placeholder="О себе"
                            onChange={handleChange}
                            name="desc"
                            className={classNames.textArea}
                        />
                    </Box>
                    {
                        errorText ?
                            <Typography 
                                variant="caption" 
                                align="left" 
                                gutterBottom
                                className={classNames.errorText}
                            >
                                Все поля должны быть заполнены
                            </Typography>
                            :
                            null
                    }
                </Box>
                <Button 
                    type="submit" 
                    variant="contained"
                    className={classNames.button}
                >Создать</Button>
            </form>
        </Box>
    )
};

CreateUser.propTypes = {
    addUser: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
}

const mapStateToProps = (state) => {
    return {
        users: state.users.users
    }
}

export default connect(mapStateToProps, { addUser })(CreateUser);
