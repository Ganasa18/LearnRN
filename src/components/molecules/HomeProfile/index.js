import {StyleSheet, Text, View, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import {profileDummy} from '../../../assets';
import {getData} from '../../../utils';
import {API_HOST} from '../../../config';

const HomeProfile = () => {
  const [photo, setPhoto] = useState(profileDummy);
  useEffect(() => {
    getData('userProfile').then((res) => {
      const photoData = {uri: `${API_HOST.storage}/${res.profile_photo_path}`};
      setPhoto(photoData);
    });
  }, []);

  return (
    <View style={styles.profileContainer}>
      <View>
        <Text style={styles.appName}>Food Market</Text>
        <Text style={styles.desc}>Lets get some food</Text>
      </View>
      <Image style={styles.profile} source={photo} />
    </View>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
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
});
