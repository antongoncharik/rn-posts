import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';

import { AppNavigation } from './src/navigation/AppNavigation';
import { initialLoad } from './src/intialLoad';

export default function App() {
  const [isReady, setIsReady] = useState(false);
  const [isLight, setIsLight] = useState(true);
  console.log(isLight)

  if (!isReady) {
    return (
      <AppLoading
        startAsync={initialLoad}
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err)}
      />
    )
  }

  return <AppNavigation isLight={isLight} setIsLight={setIsLight}/>
};
