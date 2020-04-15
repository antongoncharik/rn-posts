import React from 'react';
import { AppearanceProvider } from 'react-native-appearance';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import { Ionicons } from '@expo/vector-icons';

import { MainScreen } from '../screens/MainScreen';
import { PostScreen } from '../screens/PostScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { FavoritesScreen } from '../screens/FavoritesScreen';
import { CreateScreen } from '../screens/CreateScreen';
import { AppHeaderIcon } from '../components/AppHeaderIcon';

const PostStack = createStackNavigator();
const PostStackScreen = (props) => {
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
                                onPress={() => props.navigation.navigate('CreateStackScreen')}
                            />
                        </HeaderButtons>
                    ),
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title='Toggle drawer'
                                iconName='ios-menu'
                                onPress={() => props.navigation.toggleDrawer()}
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
                                    onPress={() => {
                                        props.route.params.toggleFavorite();
                                    }}
                                />
                            </HeaderButtons>
                        )
                    },
                })}
            />
        </PostStack.Navigator>
    );
};

const FavoritesStack = createStackNavigator();
const FavoritesStackScreen = () => {
    return (
        <FavoritesStack.Navigator>
            <FavoritesStack.Screen
                name='FavoritesScreen'
                component={FavoritesScreen}
                options={(props) => ({
                    title: 'Favorites',
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title='Toggle drawer'
                                iconName='ios-menu'
                                onPress={() => props.navigation.toggleDrawer()}
                            />
                        </HeaderButtons>
                    ),
                })}
            />
        </FavoritesStack.Navigator>
    );
};

const AboutStack = createStackNavigator();
const AboutStackScreen = (props) => {
    return (
        <AboutStack.Navigator>
            <AboutStack.Screen
                name='AboutScreen'
                component={AboutScreen}
                options={(props) => ({
                    title: 'About',
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title='Toggle drawer'
                                iconName='ios-menu'
                                onPress={() => props.navigation.toggleDrawer()}
                            />
                        </HeaderButtons>
                    ),
                })}
            />
        </AboutStack.Navigator>
    );
};

const CreateStack = createStackNavigator();
const CreateStackScreen = (props) => {
    return (
        <CreateStack.Navigator>
            <CreateStack.Screen
                name='CreateScreen'
                component={CreateScreen}
                options={(props) => ({
                    title: 'Create',
                    headerLeft: () => (
                        <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
                            <Item
                                title='Toggle drawer'
                                iconName='ios-menu'
                                onPress={() => props.navigation.toggleDrawer()}
                            />
                        </HeaderButtons>
                    ),
                })}
            />
        </CreateStack.Navigator>
    );
};

const PostsTab = createBottomTabNavigator();
const PostsTabScreen = () => {
    return (
        <PostsTab.Navigator>
            <PostsTab.Screen
                name='PostStackScreen'
                component={PostStackScreen}
                options={(props) => ({
                    title: 'Posts',
                    tabBarIcon: info => (
                        <Ionicons name='ios-albums'
                            size={24} />
                    )
                })}
            />
            <PostsTab.Screen
                name='FavoritesStackScreen'
                component={FavoritesStackScreen}
                options={(props) => ({
                    title: 'Favorites',
                    tabBarIcon: info => (
                        <Ionicons name='ios-star'
                            size={24} />
                    )
                })}
            />
        </PostsTab.Navigator>
    );
};

const RootDrawer = createDrawerNavigator();
const RootDrawerScreen = () => {
    return (
        <RootDrawer.Navigator>
            <RootDrawer.Screen
                name='PostsTabScreen'
                component={PostsTabScreen}
                options={(props) => ({
                    drawerLabel: 'Main',
                })}
            />
            <RootDrawer.Screen
                name='CreateStackScreen'
                component={CreateStackScreen}
                options={(props) => ({
                    drawerLabel: 'Create post',
                })}
            />
            <RootDrawer.Screen
                name='AboutStackScreen'
                component={AboutStackScreen}
                options={(props) => ({
                    drawerLabel: 'About',
                })}
            />
        </RootDrawer.Navigator>
    );
};

export const AppNavigation = () => {
    return (
        <AppearanceProvider>
            <NavigationContainer>
                <RootDrawerScreen />
            </NavigationContainer>
        </AppearanceProvider>
    );
};