import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TextInput, TouchableWithoutFeedback, ScrollView, Keyboard, Button } from 'react-native';

export const CreateScreen = () => {
    const [inputValue, setInputValue] = useState('');

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
                        onPress={() => console.log(12)}
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
        padding: 10,
        marginBottom: 10,
    },
});