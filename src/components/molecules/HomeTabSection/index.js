import React, {useEffect, useState} from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {foodDummy1, foodDummy2, foodDummy3, foodDummy4} from '../../../assets';
import ItemListFood from '../ItemListFood';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {getFoodDataByType} from '../../../redux/action';

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
  const {newTaste} = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoodDataByType('new_food'));
  }, []);
  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {newTaste.map((item) => {
        return (
          <ItemListFood
            key={item.id}
            rating={item.rate}
            type={'product'}
            price={item.price}
            name={item.name}
            image={{uri: item.picturePath}}
            onPress={() => navigation.navigate('FoodDetail', item)}
          />
        );
      })}
    </View>
  );
};

const Popular = () => {
  const navigation = useNavigation();
  const {popular} = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoodDataByType('popular'));
  }, []);

  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {popular.map((item) => {
        return (
          <ItemListFood
            key={item.id}
            rating={item.rate}
            type={'product'}
            price={item.price}
            name={item.name}
            image={{uri: item.picturePath}}
            onPress={() => navigation.navigate('FoodDetail', item)}
          />
        );
      })}
    </View>
  );
};

const Recomended = () => {
  const navigation = useNavigation();
  const {recommended} = useSelector((state) => state.homeReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getFoodDataByType('recommended'));
  }, []);

  return (
    <View style={{paddingTop: 8, paddingHorizontal: 24}}>
      {recommended.map((item) => {
        return (
          <ItemListFood
            key={item.id}
            rating={item.rate}
            type={'product'}
            price={item.price}
            name={item.name}
            image={{uri: item.picturePath}}
            onPress={() => navigation.navigate('FoodDetail', item)}
          />
        );
      })}
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
