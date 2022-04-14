import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import useForm from '../../utils/useForm';
import Axios from 'axios';

const SignIn = ({navigation}) => {
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  const [form, setForm] = useForm({
    email: '',
    password: '',
  });

  const onSubmit = () => {
    console.log('form ', form);
    //  Axios.post('https://13ce-36-90-210-52.ap.ngrok.io/api/login', form)
    Axios.post('http://192.168.101.48:8000/api/login', form)
      .then((res) => {
        console.log('success', res);
      })
      .catch((err) => {
        console.log('error', err);
      });
  };

  return (
    <View style={styles.page}>
      <Header title={'Sign In'} subtitle={'Find Best Food for your meal'} />
      <View style={styles.container}>
        <TextInput
          label={'Email Address'}
          placeholder={'Type your email address'}
          value={form.email}
          onChangeText={(value) => setForm('email', value)}
        />
        <Gap height={16} />
        <TextInput
          label={'Password'}
          placeholder={'Type your password'}
          value={form.password}
          onChangeText={(value) => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={24} />
        <Button text={'Sign In'} onPress={onSubmit} />
        <Gap height={12} />
        <Button
          onPress={() => navigation.navigate('SignUp')}
          text={'Create New Account'}
          color={'#8D92A3'}
          textColor={'#FFF'}
        />
      </View>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
});
