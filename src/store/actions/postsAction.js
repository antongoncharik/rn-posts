import { TOGGLE_FAVORITE, ADD_POST, DELETE_POST } from '../types';

export const toggleFavorite = (data) => {
    return ({
        type: TOGGLE_FAVORITE,
        payload: data,
    })
};

export const addPost = (payload) => {
    return ({
        type: ADD_POST,
        payload: data,
    })
};

export const deletePost = (payload) => {
    return ({
        type: DELETE_POST,
        payload: data,
    })
};