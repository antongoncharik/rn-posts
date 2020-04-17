import React from 'react';
import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

export const Post = (props) => {
    const data = useSelector(state => state.posts.posts);

    const post = data.find(item => item.id === props.id);

    return (
        <TouchableOpacity activeOpacity={0.7}
            onPress={() => props.openPost(props.id, post.booked, post.date)}>
            <View style={styles.container}>
                <ImageBackground source={{ uri: post.img }} style={styles.image}>
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>{new Date(post.date).toLocaleDateString()}</Text>
                    </View>
                </ImageBackground>
            </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
    },
    image: {
        flex: 1,
        width: '100%',
        height: 200,
    },
    textContainer: {
        width: Dimensions.get('window').width - 20,
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)'
    },
    text: {
        color: '#fff',
        fontFamily: 'openSans-bold',
        fontSize: 14,
    }
});