import React from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

export const PostScreen = (props) => {
    const data = useSelector(state => state.posts.posts);

    const post = data.find(item => item.id === props.route.params.id);

    return (
        <ScrollView style={styles.container}>
            <Image style={styles.image}
                source={{ uri: post.img }}
            />
            <View style={styles.textContainer}>
                <Text style={styles.text}>{post.text}</Text>
            </View>
            <Button title='Delete'
                onPress={() => props.route.params.deletePost(props.route.params.id)} />
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 10,
    },
    image: {
        width: '100%',
        height: 200,
    },
    textContainer: {
        alignItems: 'center',
    },
    text: {
        fontFamily: 'openSans-regular',
    }
});