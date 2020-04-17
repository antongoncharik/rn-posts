import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Image, TextInput, TouchableWithoutFeedback, ScrollView, Keyboard, Button } from 'react-native';

import { addPost } from '../store/actions/postsAction';

export const CreateScreen = (props) => {
    const [inputValue, setInputValue] = useState('');

    const dispatch = useDispatch();

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <Text style={styles.text}>Create new post</Text>
                    <Image source={
                        { uri: 'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg' }
                    }
                        style={styles.image} />
                    <TextInput value={inputValue}
                        onChangeText={value => setInputValue(value)}
                        placeholder='Enter the post'
                        style={styles.input}
                        multiline />
                    <Button title='Create'
                        onPress={() => {
                            dispatch(addPost({ text: inputValue }));
                            setInputValue('');
                            props.navigation.navigate('MainScreen');
                        }}
                        style={styles.button} />
                </View>
            </TouchableWithoutFeedback>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontFamily: 'openSans-bold',
        fontSize: 18,
    },
    image: {
        width: 250,
        height: 250,
    },
    input: {
        width: '70%',
        borderBottomWidth: 2,
        padding: 4,
        marginBottom: 10,
    },
    button: {
        width: '100%',
    },
});