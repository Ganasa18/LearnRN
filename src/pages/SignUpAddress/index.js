import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React from 'react';
import {Header, Gap, TextInput, Button, Select} from '../../components';
import {useForm} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import Axios from 'axios';
import {showMessage, hideMessage} from 'react-native-flash-message';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Bandung',
  });

  // const dispatch = useDispatch();
  const registerReducer = useSelector((state) => state.registerReducer);

  const onSubmit = () => {
    console.log('form ', form);

    // dispatch({type: 'SET_ADDRESS', value: form});

    const data = {
      ...form,
      ...registerReducer,
    };

    console.log('data Register: ', data);
    Axios.post('https://ea21-103-138-49-72.ap.ngrok.io/api/register', data)
      .then((res) => {
        // console.log('data success: ', res.data);
        showToast('Register Success', 'success');
        navigation.replace('SuccessSignUp');
      })
      .catch((err) => {
        // console.error('sign up error: ', err.response.data.message);
        showToast(err?.response?.data?.message);
      });
  };

  const showToast = (message, type) => {
    showMessage({
      message,
      type: type === 'success' ? 'success' : 'danger',
      backgroundColor: type === 'success' ? '#1ABC9C' : '#D9435E',
    });
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          title={'Address'}
          subtitle={'Make sure it’s valid'}
          onBack={() => {}}
        />
        <View style={styles.container}>
          <TextInput
            label={'Phone No.'}
            placeholder={'Type your phone number'}
            value={form.phoneNumber}
            onChangeText={(value) => setForm('phoneNumber', value)}
          />
          <Gap height={16} />
          <TextInput
            label={'Address'}
            placeholder={'Type your address'}
            value={form.address}
            onChangeText={(value) => setForm('address', value)}
          />
          <Gap height={16} />
          <TextInput
            label={'House No.'}
            placeholder={'Type your house number'}
            value={form.houseNumber}
            onChangeText={(value) => setForm('houseNumber', value)}
          />
          <Gap height={16} />
          <Select
            label="City"
            value={form.city}
            onSelectChange={(value) => setForm('city', value)}
          />
          <Gap height={24} />
          <Button text={'Sign Up Now'} onPress={onSubmit} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;

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
