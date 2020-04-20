import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

import { Post } from '../components/Post';

export const PostsList = (props) => {
    if (!props.data.length) {
        return (
            <View style={styles.container}>
                <Text>No posts</Text>
            </View>
        );
    }

    return (
        <View style={styles.container}>
            <FlatList
                keyExtractor={item => item.id}
                data={props.data}
                renderItem={({ item }) => <Post id={item.id}
                    openPost={props.openPost} />}
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