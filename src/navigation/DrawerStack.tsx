import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import ChatHeadScreen from '../screens/chat_head/ChatHead';
import PinchKaisaScreen from '../screens/pinch_kaisa/PinchKaisaScreen';
import ScrollingScreen from '../screens/scrolling_screen/ScrollingScreen';
import ThemeChangerScreen from '../screens/theme_changer/ThemeChangerScreen';
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
      <Screen
        name="pinch_kaisa_screen"
        options={{title: 'Pinch Kaisa'}}
        component={PinchKaisaScreen}
      />
      <Screen
        name="theme_changer_screen"
        options={{title: 'Theme Changer'}}
        component={ThemeChangerScreen}
      />
    </Navigator>
  );
};

export default DrawerStack;
