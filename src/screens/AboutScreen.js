import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export const AboutScreen = (props) => {
    // console.log(props)
    return (
        <View style={styles.container}>
            {/* <Button
                title="Go to About"
                onPress={() => }
            /> */}
            <Text>AboutScreen</Text>
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