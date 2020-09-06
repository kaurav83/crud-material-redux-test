import api from '../utils/api';
import {
    GET_USERS,
    CREATE_USER,
    EDIT_USER,
    DELETE_USER,
    USER_ERROR
} from './types';

export const getUsers = () => async dispatch => {
    try {
        const res = await api.get('/users');

        dispatch({
            type: GET_USERS,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: USER_ERROR,
            payload: err.message
        })
    }
};

export const addUser = formData => async dispatch => {
    try {
        const res = await api.post('/users', formData);

        dispatch({
            type: CREATE_USER,
            payload: res.data
        });
    } catch (err) {
        dispatch({
            type: USER_ERROR,
            payload: err.message
        });
    }
};

export const deleteUser = id => async dispatch => {
    try {
        await api.delete(`/user/${id}`);

        dispatch({
            type: DELETE_USER,
            payload: id
        });
    } catch (err) {
        dispatch({
            type: USER_ERROR,
            payload: err.message
        })
    }
};

export const editUser = (id, formData) => async dispatch => {
    try {
        const res = await api.put(`/user/${id}`, formData);

        dispatch({
            type: EDIT_USER,
            payload: { id, user: res.data }
        });
    } catch (err) {
        dispatch({
            type: USER_ERROR,
            payload: err.message
        });
    }
};