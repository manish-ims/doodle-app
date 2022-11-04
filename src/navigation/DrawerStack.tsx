import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import ChatHeadScreen from '../screens/chat_head/ChatHead';
import ScrollingScreen from '../screens/scrolling_screen/ScrollingScreen';
import {DrawerStackParams} from './types/types';

const {Navigator, Screen} = createDrawerNavigator<DrawerStackParams>();
const DrawerStack = () => {
  return (
    <Navigator screenOptions={{headerShown: false}}>
      <Screen
        name="chat_head_screen"
        options={{title: 'Chat Head'}}
        component={ChatHeadScreen}
      />
      <Screen
        name="scrolling_screen"
        options={{title: 'Scrollable Pages'}}
        component={ScrollingScreen}
      />
    </Navigator>
  );
};

export default DrawerStack;
