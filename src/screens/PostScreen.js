import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Button, Image, ScrollView } from 'react-native';
import { useSelector } from 'react-redux';

export const PostScreen = (props) => {
    const data = useSelector(state => state.posts.posts);

    const post = data.find(item => item.id === props.route.params.id);

    const booked = post ? post.booked : null;

    useEffect(() => {
        if (post) {
            props.navigation.setParams({ booked });
        }
    }, [booked]);

    if (!post) {
        return null;
    }

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