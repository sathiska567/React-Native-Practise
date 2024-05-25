import { Animated, Image, StyleSheet, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import logo from '../assets/images/logo.png';

const SplashScreenPage = () => {
  const width = useRef(new Animated.Value(280)).current; // Initial width value

  // Start animation on mount
  useEffect(() => {
    Animated.timing(width, {
      toValue: 400, // Animate width to 380
      duration: 1000, // Duration of animation in milliseconds
      useNativeDriver: false, // Width animation does not support native driver
    }).start();
  }, [width]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={logo}
        style={[
          styles.image,
          {
            width: width, // Animated width
            transform: [
              { rotate: '-30deg' }
            ],
          },
        ]}
      />
    </View>
  );
}

export default SplashScreenPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#Fe001a',
  },
  image: {
    height: 200,
  }
});
