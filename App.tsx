import React, { useEffect } from 'react';
import GlobalFont from 'react-native-global-font'
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux'

import { MyTabs } from 'navigation/MainNavigation';
import { store } from 'reducer/store';

const App = () => {

  useEffect(() => {
    GlobalFont.applyGlobal('SFProDisplay-Regular')
  }, [])


  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
