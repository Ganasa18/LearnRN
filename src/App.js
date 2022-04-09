import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import {SplashScreen} from './pages';

const App = () => {
  return (
    <>
      <NavigationContainer>
        <SplashScreen />
      </NavigationContainer>
    </>
  );
};

export default App;
