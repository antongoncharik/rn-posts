import React from 'react';
import { Alert } from 'react-native';

import { PostsList } from '../components/PostsList';
import { DATA } from '../data';

export const FavoritesScreen = (props) => {
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
    const handlerOpenPost = (id, booked, date) => {
        props.navigation.navigate('PostScreen', { id, deletePost: handlerDeletePost, booked, date })
    };

    return (
        <PostsList data={DATA.filter(item => item.booked)}
            openPost={handlerOpenPost} />
    )
};