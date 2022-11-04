import {NavigationContainer} from '@react-navigation/native/';
import React from 'react';
import DrawerStack from './src/navigation/DrawerStack';

const App = () => {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
};

export default App;
