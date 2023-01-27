import { View, Image, StyleSheet } from 'react-native'
import React from 'react'

export default function FoodImage({ marginLeft, food }) {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: food.image }}
        style={[styles.image, { marginLeft: marginLeft }]}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 8,
  },
})
