import React from 'react';
import { View, Text, StyleSheet, Button, FlatList, Alert } from 'react-native';

import { Post } from '../components/Post';
import { DATA } from '../data';

export const MainScreen = (props) => {
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
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item.id}
                data={DATA}
                renderItem={({ item }) => <Post id={item.id}
                    openPost={handlerOpenPost} />}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});