import React from 'react';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { BookedScreen } from '../screens/BookedScreen';
import { CreateScreen } from '../screens/CreateScreen';

const Stack = createStackNavigator();

const StackNavigation = (props) => {
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
                options={{ title: 'Main' }}
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
                initialParams={{ setIsLight: props.setIsLight }}
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
                
            />
        </Stack.Navigator>
    );
};

export const AppNavigation = (props) => {
    const scheme = useColorScheme('dark');

    return (
        <AppearanceProvider>
            <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
                <StackNavigation props={props}/>
            </NavigationContainer>
        </AppearanceProvider>
    );
};