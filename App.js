import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AppLoading } from 'expo';

import { AppNavigation } from './src/navigation/AppNavigation';
import { initialLoad } from './src/intialLoad';

export default function App() {
  const [isReady, setIsReady] = useState(false);

  if (!isReady) {
    return (
      <AppLoading
        startAsync={initialLoad}
        onFinish={() => setIsReady(true)}
        onError={err => console.log(err)}
      />
    )
  }

  return <AppNavigation />
};
