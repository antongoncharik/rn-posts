import React, { useState } from 'react';
import { Button, Image, View, Alert, StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export const PhotoPicker = (props) => {
    const [image, setImage] = useState(null);

    const getPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA, Permissions.CAMERA_ROLL);
        if (status !== 'granted') {
            Alert.alert('Sorry, we need camera permissions to make this work!');
            return false;
        }
        return true;
    };

    const takePhoto = async () => {
        const hasRight = getPermission();
        if (!hasRight) {
            return;
        }

        try {
            let result = await ImagePicker.launchCameraAsync({
                quality: 1,
                allowsEditing: false,
                aspect: [16, 9]
            });
            if (!result.cancelled) {
                setImage(result.uri);
                props.takePhoto(result.uri);
                console.log(result.uri)
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View style={styles.container}>
            <Button title='Take photo' onPress={takePhoto} />
            {image && <Image source={{ uri: image }} style={styles.image} />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 200,
    },
});