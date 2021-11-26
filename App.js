import React, { useState } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import Rating from './components/Rating';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [rating, setRating] = useState(0);
  return (
    <View style={styles.container}>
      <Rating rating={rating} onFinishRating={setRating}/>
      <Text>{rating}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
});
