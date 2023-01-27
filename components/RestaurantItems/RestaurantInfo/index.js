import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../../config/colors'

export default function RestaurantInfo({ title, rating }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.time}>30-45 • min</Text>
      </View>
      <View style={styles.rating}>
        <Text>{rating}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rating: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 30,
    height: 30,
    backgroundColor: colors.gray,
    borderRadius: 15,
  },
  title: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  time: {
    fontSize: 13,
    color: colors.darkGray,
  },
})
