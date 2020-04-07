import React, { useState } from 'react';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Button } from 'react-native';

import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { BookedScreen } from '../screens/BookedScreen';
import { CreateScreen } from '../screens/CreateScreen';

const Stack = createStackNavigator();

const StackNavigation = () => {
    return (
        <Stack.Navigator
        // screenOptions={{
        //     headerStyle: {
        //         backgroundColor: '#f4511e',
        //     },
        //     headerTintColor: '#fff',
        //     headerTitleStyle: {
        //         fontWeight: 'bold',
        //         fontSize: 24,
        //     },
        // }}
        >
            <Stack.Screen
                name='MainScreen'
                component={MainScreen}
                options={{
                    title: 'Main',
                    headerRight: () => (
                        <>
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color='red'
                        />
                        <Button
                            onPress={() => alert('This is a button!')}
                            title="Info"
                            color='red'
                        />
                        </>
                    ),
                }}
            />
            <Stack.Screen
                name='PostScreen'
                component={PostScreen}
                options={{ title: 'Post' }}
            />
            <Stack.Screen
                name='AboutScreen'
                component={AboutScreen}
                options={{ title: 'About' }}
            />
            <Stack.Screen
                name='BookedScreen'
                component={BookedScreen}
                options={{ title: 'Booked' }}
            />
            <Stack.Screen
                name='CreateScreen'
                component={CreateScreen}
                options={{ title: 'Create' }}
            // options={({ route }) => ({ title: route.params.name })}

            />
        </Stack.Navigator>
    );
};

export const AppNavigation = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const scheme = useColorScheme();

    return (
        <AppearanceProvider>
            <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
                <StackNavigation />
            </NavigationContainer>
        </AppearanceProvider>
    );
};