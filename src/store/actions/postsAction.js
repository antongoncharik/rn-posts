import { TOGGLE_FAVORITE, ADD_POST, DELETE_POST } from '../types';

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