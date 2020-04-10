import React, { useState } from 'react';
import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { BookedScreen } from '../screens/BookedScreen';
import { CreateScreen } from '../screens/CreateScreen';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

const PostStack = createStackNavigator();

const PostStackScreen = () => {
    return (
        <PostStack.Navigator
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
            <PostStack.Screen
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
            <PostStack.Screen
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
        </PostStack.Navigator>
    );
};

const BookedStack = createStackNavigator();

const BookedStackScreen = () => {
    return (
        <BookedStack.Navigator>

            {/* <Stack.Screen
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
            /> */}

            <BookedStack.Screen
                name='AboutScreen'
                component={AboutScreen}
                options={(props) => ({
                    title: 'AboutScreen',
                })}
            />

            <BookedStack.Screen
                name='BookedScreen'
                component={BookedScreen}
                options={(props) => ({
                    title: 'BookedScreen',
                })}
            />

        </BookedStack.Navigator>
    );
};

const RootTab = createBottomTabNavigator();

const RootTabScreen = () => {
    return (
        <RootTab.Navigator
            tabBarOptions={{
                activeTintColor: 'red'
            }}
        >
            <RootTab.Screen
                name='Post'
                component={PostStackScreen}
                options={(props) => ({
                    title: 'Post',
                    tabBarIcon: info => (
                        <Ionicons name='ios-albums'
                            size={25} />
                    )
                })}
            />
            <RootTab.Screen
                name='Booked'
                component={BookedStackScreen}
                options={(props) => ({
                    title: 'Booked',
                    tabBarIcon: info => (
                        <Ionicons name='ios-star'
                            size={25} />
                    )
                })}
            />
        </RootTab.Navigator>
    );
};

export const AppNavigation = () => {
    const [isDarkTheme, setIsDarkTheme] = useState(false);
    const scheme = useColorScheme();

    return (
        <AppearanceProvider>
            <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
                <RootTabScreen />
            </NavigationContainer>
        </AppearanceProvider>
    );
};