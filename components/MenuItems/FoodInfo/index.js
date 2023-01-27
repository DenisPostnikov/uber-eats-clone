import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

export default function FoodInfo({ food }) {
  const { title, description, price } = food
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text>{description}</Text>
      <Text>{price}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    justifyContent: 'space-evenly',
    marginRight: 10,
  },
  title: {
    fontSize: 19,
    fontWeight: '600',
  },
})
