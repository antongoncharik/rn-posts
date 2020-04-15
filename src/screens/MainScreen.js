import React from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { PostsList } from '../components/PostsList';

export const MainScreen = (props) => {
    const data = useSelector(state => state.posts.posts);

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
                    onPress: () => { }
                }
            ],
            { cancelable: false }
        )
    };

    const handlerOpenPost = (id, booked, date, toggleFavorite) => {
        props.navigation.navigate('PostScreen', { id, deletePost: handlerDeletePost, booked, date, toggleFavorite })
    };

    return (
        <PostsList data={data}
            openPost={handlerOpenPost} />
    )
};