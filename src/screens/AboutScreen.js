import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const AboutScreen = (props) => {
    return (
        <View style={styles.container}>
            <Text>Version 1.0.0</Text>
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