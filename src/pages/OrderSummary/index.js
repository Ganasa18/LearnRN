import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Button, Header, ItemListFood, ItemValue} from '../../components';
import {foodDummy1} from '../../assets';

const OrderSummary = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Payment"
        subtitle={'You deserve better meal'}
        onBack={() => {}}
      />
      <View style={styles.container}>
        <Text style={styles.label}>Item Ordered</Text>
        <ItemListFood items={14} image={foodDummy1} />
        <Text>Detail Transaction</Text>
        <ItemValue label={'Cherry Healthy'} value={'IDR 18.390.000'} />
        <ItemValue label={'Driver'} value={'IDR 50.000'} />
        <ItemValue label={'Tax 10%'} value={'IDR 1.800.390'} />
        <ItemValue
          label={'Total Price'}
          value={'IDR 390.803.000'}
          color={'#1ABC9C'}
        />
      </View>
      <View style={styles.container}>
        <Text style={styles.label}>Deliver to:</Text>
        <ItemValue label={'Name'} value={'Angga Risky'} />
        <ItemValue label={'Phone No.'} value={'0822 0819 9688'} />
        <ItemValue label={'Address'} value={'Setra Duta Palima'} />
        <ItemValue label={'House No.'} value={'A5 Hook'} />
        <ItemValue label={'City'} value={'Bandung'} />
      </View>
      <View style={styles.button}>
        <Button
          text={'Checkout Now'}
          onPress={() => navigation.replace('OrderSuccess')}
        />
      </View>
    </View>
  );
};

export default OrderSummary;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
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
