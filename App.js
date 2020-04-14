import React, { useState } from 'react';
import { AppLoading } from 'expo';
import { Provider } from 'react-redux';

import { AppNavigation } from './src/navigation/AppNavigation';
import { initialLoad } from './src/intialLoad';
import store from './src/store';

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

  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  )
};
