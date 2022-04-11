import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import {
  foodDummy1,
  foodDummy2,
  foodDummy3,
  foodDummy4,
  profileDummy,
} from '../../assets';
import {FoodCard, Gap} from '../../components';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

const renderTabBar = (props) => (
  <TabBar
    {...props}
    indicatorStyle={{
      backgroundColor: '#020202',
      height: 3,
      width: '15%',
      marginLeft: '4%',
    }}
    style={{backgroundColor: 'pink'}}
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

const FirstRoute = () => <View style={{backgroundColor: '#ff4081', flex: 1}} />;

const SecondRoute = () => (
  <View style={{backgroundColor: '#673ab7', flex: 1}} />
);

const ThirdRoute = () => <View style={{backgroundColor: '#673a22', flex: 1}} />;

const initialLayout = {width: Dimensions.get('window').width};

const Home = () => {
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: '1', title: 'New Taste'},
    {key: '2', title: 'Popular'},
    {key: '3', title: 'Recomended'},
  ]);

  const renderScene = SceneMap({
    1: FirstRoute,
    2: SecondRoute,
    3: ThirdRoute,
  });

  return (
    <View style={styles.page}>
      <View style={styles.profileContainer}>
        <View>
          <Text style={styles.appName}>Food Market</Text>
          <Text style={styles.desc}>Lets get some food</Text>
        </View>
        <Image style={styles.profile} source={profileDummy} />
      </View>
      <View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <View style={styles.foodCardContainer}>
            <Gap width={24} />
            <FoodCard image={foodDummy1} />
            <FoodCard image={foodDummy2} />
            <FoodCard image={foodDummy3} />
            <FoodCard image={foodDummy4} />
          </View>
        </ScrollView>
      </View>
      <View style={styles.tabContainer}>
        <TabView
          renderTabBar={renderTabBar}
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  profileContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 24,
    backgroundColor: 'white',
  },
  appName: {
    fontSize: 22,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
  },
  desc: {
    fontSize: 14,
    fontFamily: 'Poppins-Light',
    color: '#8D92A3',
  },
  profile: {
    width: 50,
    height: 50,
    borderRadius: 8,
  },
  foodCardContainer: {
    flexDirection: 'row',
    marginVertical: 24,
  },
  tabContainer: {
    flex: 1,
  },
});
