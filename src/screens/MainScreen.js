import React, { useEffect } from 'react';
import { Alert, ActivityIndicator, View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import { PostsList } from '../components/PostsList';
import { deletePost, toggleFavorite, loadPosts } from '../store/actions/postsAction';

export const MainScreen = (props) => {
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

    const handlerToggleFavorite = (id, booked) => {
        dispatch(toggleFavorite(id, booked));
    };

    const handlerOpenPost = (id, booked, date) => {
        props.navigation.navigate('PostScreen', { id, deletePost: handlerDeletePost, booked, date, toggleFavorite: handlerToggleFavorite })
    };

    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch])

    const posts = useSelector(state => state.posts.posts)
    const loading = useSelector(state => state.posts.loading)

    if (loading) {
        return (
            <View style={styles.center}>
                <ActivityIndicator color={'#8b008b'} />
            </View>
        )
    }

    return (
        <PostsList data={posts}
            openPost={handlerOpenPost} />
    )
};

const styles = StyleSheet.create({
    center: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }
  })