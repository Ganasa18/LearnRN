import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

const Button = ({color, text, textColor, onPress}) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container(color)}>
        <Text style={styles.text(textColor)}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: (color) => ({
    backgroundColor: !color ? '#FFC700' : color,
    padding: 12,
    borderRadius: 8,
  }),
  text: (textColor) => ({
    color: !textColor ? '#020202' : textColor,
    fontSize: 14,
    fontFamily: 'Poppins-Medium',
    alignItems: 'center',
    textAlign: 'center',
  }),
});
