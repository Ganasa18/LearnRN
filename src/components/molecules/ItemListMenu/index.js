import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {IcForward} from '../../../assets';

const ItemListMenu = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.label}>{text}</Text>
        <IcForward />
      </View>
    </TouchableOpacity>
  );
};

export default ItemListMenu;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 7,
  },

  label: {
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    color: '#020202',
  },
});
