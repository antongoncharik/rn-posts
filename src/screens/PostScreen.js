import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const PostScreen = (props) => {
    return (
        <View>
            <Button
                title="Go to About"
                onPress={() => props.navigation.navigate('AboutScreen')}
            />

            <Text>PostScreen</Text>
        </View>
    );
};