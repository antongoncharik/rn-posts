import React from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { PostsList } from '../components/PostsList';
import { deletePost } from '../store/actions/postsAction';
import { toggleFavorite } from '../store/actions/postsAction';

export const FavoritesScreen = (props) => {
    const data = useSelector(state => state.posts.posts);

    const dispatch = useDispatch();

    const handlerDeletePost = (id) => {
        Alert.alert(
            'Delete post',
            'Are you sure you want to delete the post?',
            [
                {
                    text: 'Cancel',
                    style: 'cancel'
                },
                {
                    text: 'Delete',
                    style: 'destructive',
                    onPress: () => {
                        dispatch(deletePost(id));
                        props.navigation.navigate('MainScreen');
                    }
                }
            ],
            { cancelable: false }
        )
    };

    const handlerToggleFavorite = (id) => {
        dispatch(toggleFavorite(id));
    };

    const handlerOpenPost = (id, booked, date) => {
        props.navigation.navigate('PostScreen', { id, deletePost: handlerDeletePost, booked, date, toggleFavorite: handlerToggleFavorite })
    };

    return (
        <PostsList data={data.filter(item => item.booked)}
            openPost={handlerOpenPost} />
    )
};