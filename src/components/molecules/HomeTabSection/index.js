import React, {useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {foodDummy1, foodDummy2, foodDummy3, foodDummy4} from '../../../assets';
import ItemListFood from '../ItemListFood';
import {useNavigation} from '@react-navigation/native';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      width: '15%',
      marginLeft: '4%',
    }}
    style={{
      backgroundColor: 'white',
      elevation: 0,
      shadowOpacity: 0,
      borderBottomColor: '#F2F2F2',
      borderBottomWidth: 1,
    }}
    tabStyle={{width: 'auto'}}
    renderLabel={({route, focused, color}) => (
      <Text
        style={{
          fontFamily: 'Poppin-Medium',
          color: focused ? '#020202' : '#8D92A3',
        }}>
        {route.title}
      </Text>
    )}
  />
);

const NewTaste = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        rating={4}
        type={'product'}
        price={'2.000.000'}
        name={'Sop Bumil'}
        image={foodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        rating={4}
        type={'product'}
        price={'2.000.000'}
        name={'Sop Bumil'}
        image={foodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        rating={4}
        type={'product'}
        price={'2.000.000'}
        name={'Sop Bumil'}
        image={foodDummy3}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        rating={4}
        type={'product'}
        price={'2.000.000'}
        name={'Sop Bumil'}
        image={foodDummy4}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        rating={4}
        type={'product'}
        price={'2.000.000'}
        name={'Sop Bumil'}
        image={foodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        rating={4}
        type={'product'}
        price={'2.000.000'}
        name={'Sop Bumil'}
        image={foodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};

const Recomended = () => {
  const navigation = useNavigation();
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      <ItemListFood
        rating={4}
        type={'product'}
        price={'2.000.000'}
        name={'Sop Bumil'}
        image={foodDummy1}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        rating={4}
        type={'product'}
        price={'2.000.000'}
        name={'Sop Bumil'}
        image={foodDummy2}
        onPress={() => navigation.navigate('FoodDetail')}
      />
      <ItemListFood
        rating={4}
        type={'product'}
        price={'2.000.000'}
        name={'Sop Bumil'}
        image={foodDummy4}
        onPress={() => navigation.navigate('FoodDetail')}
      />
    </View>
  );
};

const initialLayout = {width: Dimensions.get('window').width};

const HomeTabSection = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recomended'},
  ]);

  const renderScene = SceneMap({
    1: NewTaste,
    2: Popular,
    3: Recomended,
  });
  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{backgroundColor: 'white'}}
    />
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({});
