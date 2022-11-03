import {StyleSheet, StatusBar, Text, View} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import {WORDS} from './constants/constants';
import Page from './components/Page';

const ScrollingScreen = () => {
  const translateX = useSharedValue(0);
  const scrollHandler = useAnimatedScrollHandler(e => {
    translateX.value = e.contentOffset.x;
  });
  return (
    <>
      <StatusBar backgroundColor={'transparent'} translucent />
      <Animated.ScrollView
        horizontal
        pagingEnabled
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}>
        {WORDS.map((item, index) => {
          return (
            <Page
              key={index.toString()}
              index={index}
              title={item}
              translateX={translateX}
            />
          );
        })}
      </Animated.ScrollView>
    </>
  );
};

export default ScrollingScreen;

const styles = StyleSheet.create({});
