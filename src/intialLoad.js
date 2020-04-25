import * as Font from 'expo-font';

import { DB } from './db';

export const initialLoad = async () => {
    try {
        await Font.loadAsync({
            'openSans-bold': require('../assets/fonts/OpenSans-Bold.ttf'),
            'openSans-regular': require('../assets/fonts/OpenSans-Regular.ttf'),
        })
        await DB.init();
        console.log('DB connected');
    } catch (error) {
        console.log('Error', error);
    }
};