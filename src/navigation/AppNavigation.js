import React, { useState } from 'react';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { BookedScreen } from '../screens/BookedScreen';
import { CreateScreen } from '../screens/CreateScreen';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

const Tab = createBottomTabNavigator();

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
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title='Take photo'
                                iconName='ios-camera'
                                onPress={() => console.log('Press photo')}
                            />
                        </HeaderButtons>
                    ),
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title='Toggle drawer'
                                iconName='ios-menu'
                                onPress={() => console.log('Press menu')}
                            />
                        </HeaderButtons>
                    ),
                }}
            />
            <Stack.Screen
                name='PostScreen'
                component={PostScreen}
                options={(props) => ({
                    title: `Post from ${new Date(props.route.params.date).toLocaleDateString()}`,
                    headerRight: () => {
                        const booked = props.route.params.booked;
                        const iconName = booked ? 'ios-star' : 'ios-star-outline';
                        return (
                            <HeaderButtons HeaderButtonComponent={AppHeaderIcon} >
                                <Item
                                    title='Booked'
                                    iconName={iconName}
                                    onPress={() => console.log('Press photo')}
                                />
                            </HeaderButtons>
                        )
                    },
                })}

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