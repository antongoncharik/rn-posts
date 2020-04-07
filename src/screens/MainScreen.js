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
    const handlerOpenPost = (id) => {
        props.navigation.navigate('PostScreen', { id, deletePost: handlerDeletePost })
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item }) => <Post id={item.id}
                    openPost={handlerOpenPost} />}
                keyExtractor={item => item.id}
            />
        </View>
    );
};

MainScreen.navigationOptions = {
    headerRight: <Text>egwgw</Text>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});