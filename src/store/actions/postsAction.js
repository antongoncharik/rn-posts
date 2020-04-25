import * as FileSystem from 'expo-file-system'

import { LOAD_POSTS, TOGGLE_FAVORITE, ADD_POST, DELETE_POST } from '../types';
import { DB } from '../../db';

export const loadPosts = data => async dispatch => {
    const posts = await DB.getPosts();

    dispatch({
        type: LOAD_POSTS,
        payload: posts
    })
};

export const toggleFavorite = (id, booked) => async dispatch => {
    await DB.updatePost(id, booked);

    dispatch({
        type: TOGGLE_FAVORITE,
        payload: { id, booked },
    })
};

export const addPost = post => async dispatch => {
    const fileName = post.img.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName;

    try {
        await FileSystem.moveAsync({
            to: newPath,
            from: post.img
        })
    } catch (e) {
        console.log('Error:', e);
    }

    const payload = { ...post, img: newPath };
    const id = await DB.createPost(payload);

    payload.id = id;

    dispatch({
        type: ADD_POST,
        payload
    })
};

export const deletePost = data => async dispatch => {
    await DB.removePost(data);

    dispatch({
        type: DELETE_POST,
        payload: data,
    })
};