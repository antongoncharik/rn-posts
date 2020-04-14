import { TOGGLE_FAVORITE, ADD_POST, DELETE_POST } from '../types';

const initialState = {
    allPosts: [],
    bookedPosts: []
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FAVORITE:

            break;

        case ADD_POST:

            break;

        case DELETE_POST:

            break;

        default:
            return state;
            break;
    }
};