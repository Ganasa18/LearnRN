import {StyleSheet, Text, View, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  Button,
  Gap,
  Header,
  ItemListFood,
  ItemValue,
  Loading,
} from '../../components';
import {foodDummy1} from '../../assets';
import Axios from 'axios';
import {API_HOST} from '../../config';
import {getData} from '../../utils';
import {WebView} from 'react-native-webview';

const OrderSummary = ({navigation, route}) => {
  const {item, transaction, userProfile} = route.params;
  const [token, setToken] = useState('');
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [paymentUrl, setPaymentUrl] = useState('https://google.com/');

  useEffect(() => {
    getData('token').then((res) => {
      console.log('token', res);
      setToken(res.value);
    });
  }, []);

  const onCheckOut = () => {
    const data = {
      food_id: item.id,
      user_id: userProfile.id,
      quantity: transaction.totalItem,
      total: transaction.total,
      status: 'PENDING',
    };

    Axios.post(`${API_HOST.url}/checkout`, data, {
      headers: {
        Authorization: token,
      },
    })
      .then((res) => {
        console.log('checkout success: ', res.data);
        setIsPaymentOpen(true);
        setPaymentUrl(res.data.data.payment_url);
      })
      .catch((err) => {
        console.log('err: ', err);
      });

    // navigation.replace('OrderSuccess')
  };

  const onNavChange = (state) => {
    console.log('nav: ', state);
    const urlSuccess =
      'http://example.com/?order_id=4&status_code=201&transaction_status=pending';
    const titleWeb = 'Example Domain';
    if (state.title === titleWeb) {
      navigation.replace('OrderSuccess');
    }
  };

  if (isPaymentOpen) {
    return (
      <>
        <Header title="Payment" onBack={() => setIsPaymentOpen(false)} />
        <WebView
          source={{uri: paymentUrl}}
          onNavigationStateChange={(state) => onNavChange(state)}
          startInLoadingState={true}
          renderLoading={() => <Loading />}
        />
      </>
    );
  }
  return (
    <ScrollView vertical showsHorizontalScrollIndicator={false}>
      <Header
        title="Payment"
        subtitle={'You deserve better meal'}
        onBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood
          type={'order-sumarry'}
          name={item.name}
          price={item.price}
          items={transaction.totalItem}
          image={{uri: item.picturePath}}
        />
        <Text>Detail Transaction</Text>
        <ItemValue
          label={item.name}
          value={transaction.totalPrice}
          type="currency"
        />
        <ItemValue
          label={'Driver'}
          value={transaction.driver}
          type="currency"
        />
        <ItemValue label={'Tax 10%'} value={transaction.tax} type="currency" />
        <ItemValue
          type="currency"
          label={'Total Price'}
          value={transaction.total}
          color={'#1ABC9C'}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label={'Name'} value={userProfile.name} />
        <ItemValue label={'Phone No.'} value={userProfile.phoneNumber} />
        <ItemValue label={'Address'} value={userProfile.address} />
        <ItemValue label={'House No.'} value={userProfile.houseNumber} />
        <ItemValue label={'City'} value={userProfile.city} />
      </View>
      <View style={styles.button}>
        <Button text={'Checkout Now'} onPress={onCheckOut} />
      </View>
      <Gap height={40} />
    </ScrollView>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 16,
    marginTop: 24,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Poppins-Regular',
    marginBottom: 10,
    color: '#020202',
  },

  button: {
    paddingHorizontal: 24,
    marginVertical: 24,
  },
});
