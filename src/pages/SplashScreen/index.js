import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Logo} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Logo />
      <View style={{height: 38}} />
      <Text style={styles.text}>Food Market</Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC700',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#020202',
    fontSize: 32,
    fontFamily: 'Poppins-Medium',
  },
});
