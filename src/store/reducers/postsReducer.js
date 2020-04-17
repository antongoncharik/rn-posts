import { TOGGLE_FAVORITE, ADD_POST, DELETE_POST } from '../types';

const initialState = {
    posts: [
        {
            id: '1',
            img: 'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg',
            text: 'Awesome text for post 1',
            date: new Date().toJSON(),
            booked: true
        },
        {
            id: '2',
            img: 'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg',
            text: 'Awesome text for post 2',
            date: new Date().toJSON(),
            booked: true
        },
        {
            id: '3',
            img: 'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg',
            text: 'Awesome text for post 3',
            date: new Date().toJSON(),
            booked: false
        },
        {
            id: '4',
            img: 'https://cdn.londonandpartners.com/visit/general-london/areas/river/76709-640x360-houses-of-parliament-and-london-eye-on-thames-from-above-640.jpg',
            text: 'Awesome text for post 4',
            date: new Date().toJSON(),
            booked: false
        },
        {
            id: '5',
            img: 'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg',
            text: 'Awesome text for post 5',
            date: new Date().toJSON(),
            booked: false
        }
    ],
};

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
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