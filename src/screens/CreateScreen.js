import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { View, Text, StyleSheet, Image, TextInput, TouchableWithoutFeedback, ScrollView, Keyboard, Button } from 'react-native';

import { addPost } from '../store/actions/postsAction';
import { PhotoPicker } from '../components/PhotoPicker';

export const CreateScreen = (props) => {
    const [inputValue, setInputValue] = useState('');
    const [image, setImage] = useState(null);

    const dispatch = useDispatch();

    const handlerTakePhoto = uriImage => {
        setImage(uriImage);
    };

    return (
        <ScrollView>
            <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
                <View style={styles.container}>
                    <Text style={styles.text}>Create new post</Text>
                    <Image source={{ uri: image }}
                        style={styles.image} />
                    <TextInput value={inputValue}
                        onChangeText={value => setInputValue(value)}
                        placeholder='Enter the post'
                        style={styles.input}
                        multiline />
                    {!!image && !!inputValue && <View style={styles.button}><Button title='Create'
                        onPress={() => {
                            dispatch(addPost({ text: inputValue, img: image, date: new Date().toJSON(), booked: false }));
                            setInputValue('');
                            props.navigation.navigate('MainScreen');
                        }}
                    /></View>}
                    <PhotoPicker takePhoto={handlerTakePhoto} />
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
        marginBottom: 5,
    },
});