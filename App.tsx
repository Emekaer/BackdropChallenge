import React, { useEffect } from 'react';
import GlobalFont from 'react-native-global-font'
import { NavigationContainer } from '@react-navigation/native';

import { MyTabs } from 'navigation/MainNavigation';

const App = () => {

  useEffect(() => {
    GlobalFont.applyGlobal('SFProDisplay-Regular')
  }, [])


  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
};

export default App;
