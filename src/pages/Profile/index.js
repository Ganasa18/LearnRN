import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import {profileDummy} from '../../assets';
import {ProfileTabSection} from '../../components';

const Profile = () => {
  return (
    <View style={styles.page}>
      <View style={styles.profileDetail}>
        <View style={styles.photo}>
          <View style={styles.borderPhoto}>
            <Image style={styles.photoContainer} source={profileDummy} />
          </View>
        </View>
        <Text style={styles.name}>Angga Risky</Text>
        <Text style={styles.email}>wepanda@gmail.com</Text>
      </View>
      <View style={styles.content}>
        <ProfileTabSection />
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  profileDetail: {
    backgroundColor: 'white',
    paddingBottom: 26,
  },
  content: {
    flex: 1,
    marginTop: 24,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    textAlign: 'center',
  },
  email: {
    fontFamily: 'Poppins-Light',
    fontSize: 13,
    color: '#8D92A3',
    textAlign: 'center',
  },
  photo: {
    alignItems: 'center',
    marginTop: 26,
    marginBottom: 16,
    backgroundColor: 'white',
  },
  borderPhoto: {
    borderWidth: 1,
    borderColor: '#8D92A3',
    width: 110,
    height: 110,
    borderRadius: 110,
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },

  photoContainer: {
    width: 90,
    height: 90,
    borderRadius: 90,
    backgroundColor: '#F0F0F0',
    padding: 24,
  },
});
