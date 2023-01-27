import { View, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import colors from '../../config/colors'

import RestaurantImage from './RestaurantImage'
import RestaurantInfo from './RestaurantInfo'

export const localRestaurants = [
  {
    id: 1,
    name: 'Beachside Bar',
    image_url:
      'https://static.onecms.io/wp-content/uploads/sites/9/2020/04/24/ppp-why-wont-anyone-rescue-restaurants-FT-BLOG0420.jpg',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Benihana',
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Cafe', 'Bar'],
    price: '$$',
    reviews: 1244,
    rating: 3.7,
  },
  {
    id: 3,
    name: "India's Grill",
    image_url:
      'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGludGVyaW9yfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80',
    categories: ['Indian', 'Bar'],
    price: '$$',
    reviews: 700,
    rating: 4.9,
  },
]

export default function RestaurantItems({ navigation, restaurantData }) {
  const onPress = (restaurant) => {
    navigation.navigate('RestaurantDetail', {
      name: restaurant.name,
      image: restaurant.image_url,
      price: restaurant.price,
      reviews: restaurant.review_count,
      rating: restaurant.rating,
      categories: restaurant.categories,
    })
  }

  return (
    <View style={styles.container}>
      {restaurantData.map((restaurant) => (
        <TouchableOpacity
          activeOpacity={1}
          key={restaurant.id}
          onPress={() => onPress(restaurant)}
        >
          <View style={styles.restaurant}>
            <RestaurantImage image={restaurant.image_url} />
            <RestaurantInfo
              rating={restaurant.rating}
              title={restaurant.name}
            />
          </View>
        </TouchableOpacity>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {},
  restaurant: {
    marginBottom: 10,
    padding: 15,
    backgroundColor: colors.white,
  },
})
