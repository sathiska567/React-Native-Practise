import React from 'react';
import { View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Assuming you want to use FontAwesome icons

const RatingIcon = ({ filled }) => {
  return (
    <View>
      {filled ? (
        <Icon name="star" size={30} color="gold" />
      ) : (
        <Icon name="star-o" size={30} color="gold" />
      )}
    </View>
  );
};

export default RatingIcon;
