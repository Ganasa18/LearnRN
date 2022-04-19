import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Rating from '../Rating';
import Number from '../Number';

const ItemListFood = ({
  image,
  onPress,
  items,
  rating,
  price,
  type,
  name,
  date,
  status,
}) => {
  const renderContent = () => {
    switch (type) {
      case 'product':
        // item list product
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Number number={price} style={styles.subTitle} />
            </View>
            <Rating number={rating} />
          </>
        );
      case 'order-sumarry':
        // item order-sumarry

        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Number number={price} style={styles.subTitle} />
            </View>
            <Text style={styles.items}>{items} items</Text>
          </>
        );

      case 'in-progress':
        // item in-progress
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <View style={styles.row}>
                <Text style={styles.subTitle}>{items} items </Text>
                <View style={styles.dot} />
                <Number number={price} style={styles.subTitle} />
              </View>
            </View>
          </>
        );

      case 'past-orders':
        // item past orderItems
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <View style={styles.row}>
                <Text style={styles.subTitle}>{items} items </Text>
                <View style={styles.dot} />
                <Number number={price} style={styles.subTitle} />
              </View>
            </View>
            <View>
              <Text style={styles.date}>{date}</Text>
              <Text style={styles.status}>{status}</Text>
            </View>
          </>
        );
      default:
        // item product
        return (
          <>
            <View style={styles.content}>
              <Text style={styles.title}>{name}</Text>
              <Number number={price} style={styles.subTitle} />
            </View>
            <Rating />
          </>
        );
    }
  };

  return (
    <TouchableOpacity activeOpacity={0.7} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />
        {renderContent(type)}
        {/* <View style={styles.content}>
          <Text style={styles.title}>Soup Bumil</Text>
          {inProgress ? (
            <Text style={styles.subTitle}>
              {orderItems} items . IDR {totalOrder}
            </Text>
          ) : (
            <Text style={styles.subTitle}>IDR 289.000</Text>
          )}
        </View>
        {items && !rating && <Text style={styles.items}>{items} items</Text>}
        {rating && !items && <Rating />} */}
      </View>
    </TouchableOpacity>
  );
};

export default ItemListFood;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    // paddingRight: 20,
    paddingVertical: 8,
    alignItems: 'center',
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 8,
    overflow: 'hidden',
    marginRight: 12,
  },
  content: {
    flex: 1,
  },
  title: {
    color: '#020202',
    fontFamily: 'Poppins-Regular',
    fontSize: 16,
  },
  subTitle: {
    fontFamily: 'Poppins-Regular',
    fontSize: 13,
    color: '#8D92A3',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: 3,
    height: 3,
    borderRadius: 3,
    backgroundColor: '#8D92A3',
    marginHorizontal: 4,
  },
  items: {
    fontSize: 13,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },

  date: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#8D92A3',
  },

  status: {
    fontSize: 10,
    fontFamily: 'Poppins-Regular',
    color: '#D9435E',
  },
});
