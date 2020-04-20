import { LOAD_APP, TOGGLE_FAVORITE, ADD_POST, DELETE_POST } from '../types';

const initialState = {
    posts: [],
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOAD_APP:
            return (
                state
            )
            break;
        case TOGGLE_FAVORITE:
            return (
                {
                    posts: state.posts.map(item => {
                        if (item.id === action.payload) {
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
                    posts: [...state.posts, {
                        id: Date.now().toString(),
                        img: 'https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832__340.jpg',
                        text: action.payload.text,
                        date: new Date().toJSON(),
                        booked: false
                    }]
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