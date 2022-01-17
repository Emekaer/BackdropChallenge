import React, { useEffect } from 'react';

import GlobalFont from 'react-native-global-font'
import { View, Text } from 'react-native';



const App = () => {

  useEffect(() => {
    GlobalFont.applyGlobal('SFPRODISPLAYREGULAR')
  }, [])


  return (
    <View style={{ backgroundColor: "white", flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontWeight: "bold" }}>Backdrop</Text>
    </View>
  );
};

export default App;
