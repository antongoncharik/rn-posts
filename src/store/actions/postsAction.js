import { LOAD_APP, TOGGLE_FAVORITE, ADD_POST, DELETE_POST } from '../types';

export const loadApp = (data) => {
    return ({
        type: LOAD_APP,
        payload: data,
    })
};

export const toggleFavorite = (data) => {
    return ({
        type: TOGGLE_FAVORITE,
        payload: data,
    })
};

export const addPost = (data) => {
    return ({
        type: ADD_POST,
        payload: { text: data.text },
    })
};

export const deletePost = (data) => {
    return ({
        type: DELETE_POST,
        payload: data,
    })
};