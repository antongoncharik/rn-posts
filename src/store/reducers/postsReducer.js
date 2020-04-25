import { LOAD_POSTS, TOGGLE_FAVORITE, ADD_POST, DELETE_POST } from '../types';

const initialState = {
    posts: [],
    loading: true,
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_POSTS:
            return (
                {
                    posts: action.payload,
                    loading: false,
                }
            )
            break;
        case TOGGLE_FAVORITE:
            return (
                {
                    posts: state.posts.map(item => {
                        if (item.id === action.payload.id) {
                            return (
                                {
                                    ...item, booked: !item.booked
                                }
                            )
                        }
                        return item;
                    })
                }
            )
            break;
        case ADD_POST:
            return (
                {
                    posts: [...state.posts, action.payload]
                }
            )
            break;
        case DELETE_POST:
            return (
                {
                    posts: state.posts.filter(item => item.id !== action.payload)
                }
            )
            break;
        default:
            return state;
            break;
    }
};