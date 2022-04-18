import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Button, Gap, Header, Select, TextInput} from '../../components';
import {setLoading, signUpAction} from '../../redux/action';
import {useForm} from '../../utils';

const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    phoneNumber: '',
    address: '',
    houseNumber: '',
    city: 'Bandung',
  });

  const dispatch = useDispatch();
  const {registerReducer, photoReducer} = useSelector((state) => state);

  const onSubmit = () => {
    // dispatch({type: 'SET_ADDRESS', value: form});

    const data = {
      ...form,
      ...registerReducer,
    };
    dispatch(setLoading(true));
    dispatch(signUpAction(data, photoReducer, navigation));

    // Axios.post('http://192.168.101.48:8000/api/register', data)
    //   .then((res) => {
    //     console.log('data success: ', res.data);

    //     if (photoReducer.isUploadPhoto) {
    //       const photoForUpload = new FormData();
    //       photoForUpload.append('file', photoReducer);

    //       Axios.post(
    //         'http://192.168.101.48:8000/api/user/photo',
    //         photoForUpload,
    //         {
    //           headers: {
    //             Authorization: `${res?.data?.data.token_type} ${res?.data?.data.access_token}`,
    //             'Content-Type': 'multipart/form-data',
    //           },
    //         },
    //       )
    //         .then((resUpload) => {
    //           console.log('upload success: ', resUpload);
    //         })
    //         .catch((err) => {
    //           console.log('error: ', err?.response);
    //           showMessage('Upload photo tidak berhasil');
    //         });
    //     }

    //     dispatch(setLoading(false));
    //     showMessage('Register Success', 'success');
    //     navigation.replace('SuccessSignUp');
    //   })
    //   .catch((err) => {
    //     // console.log('sign up error: ', err.response.data);
    //     dispatch(setLoading(false));
    //     showMessage(err?.response?.data?.message);
    //   });
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          title={'Address'}
          subtitle={'Make sure it’s valid'}
          onBack={() => navigation.goBack()}
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
