import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const MainScreen = (props) => {
    return (
        <View style={styles.container}>
            <Button
                title="Go to Post"
                onPress={() => props.navigation.navigate('PostScreen')}
            />
            <Text>MainScreen</Text>
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