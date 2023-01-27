import { Image, View, Text, ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../config/colors'

const items = [
  {
    id: 1,
    image: require('../../assets/images/shopping-bag.png'),
    text: 'Pick-up',
  },
  {
    id: 2,
    image: require('../../assets/images/soft-drink.png'),
    text: 'Soft Drinks',
  },
  {
    id: 3,
    image: require('../../assets/images/bread.png'),
    text: 'Bakery Items',
  },
  {
    id: 4,
    image: require('../../assets/images/fast-food.png'),
    text: 'Fast Foods',
  },
  {
    id: 5,
    image: require('../../assets/images/deals.png'),
    text: 'Deals',
  },
  {
    id: 6,
    image: require('../../assets/images/coffee.png'),
    text: 'Coffee & Tea',
  },
  {
    id: 7,
    image: require('../../assets/images/desserts.png'),
    text: 'Desserts',
  },
]

export default function Categories() {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item) => (
          <View key={item.id} style={styles.wrapper}>
            <Image source={item.image} style={styles.image} />
            <Text style={styles.text}>{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    paddingVertical: 10,
    paddingLeft: 20,
    backgroundColor: colors.white,
  },
  image: {
    width: 50,
    height: 40,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 13,
    fontWeight: '900',
  },
  wrapper: {
    alignItems: 'center',
    marginRight: 20,
  },
})
