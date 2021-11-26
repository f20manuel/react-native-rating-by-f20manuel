import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Rating({
  rating = 0,
  ratingCount = 5,
  onFinishRating = () => {},
  icon = 'star',
  emptyIcon = 'star-o',
  color = '#F9BB01',
  emptyColor = '#F9BB01',
  size = 32,
}) {
  const [stars, setStars] = useState([]);

  const renderStars = useCallback(() => {
    let _stars = [];

    for (let i = 0; i < ratingCount; i++) {
      _stars.push({
        icon: (
          <Icon
            name={i < rating ? icon : emptyIcon}
            size={size}
            color={i < rating ? color : emptyColor}
            style={styles.icon}
          />
        ),
      });
    }

    setStars(_stars);
  }, [ratingCount, rating, icon, emptyIcon, size, color, emptyColor]);

  useEffect(() => {
    renderStars();
  }, [renderStars]);

  return (
    <View style={styles.container}>
      {stars.map((star, index) => (
        <TouchableOpacity key={index} onPress={() => onFinishRating(index + 1)}>
          {star.icon}
        </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    marginHorizontal: 4,
  },
});
