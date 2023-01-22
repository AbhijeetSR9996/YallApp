import { Image, StyleSheet, Text, View, Dimensions, } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('screen');

const SlideItem = ({ item }) => {

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
        <Image source={item.img} resizeMode='contain' style={styles.image} />
        <Text style={styles.description}>{item.subdesc}</Text>
        <Text style={styles.price}>{item.fulldesc}</Text>
      </View>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
  },
  image: {
    flex: 0.6,
  },
  content: {
    flex: 0.4,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    color: '#000000',
    top: 10
  },
  description: {
    fontSize: 15,
    marginVertical: 12,
    color: '#000000',
    bottom: 40
  },
  price: {
    fontSize: 12,
    color: '#000000',
    bottom: 50
  },
});
