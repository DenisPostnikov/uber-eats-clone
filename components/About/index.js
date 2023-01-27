import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

export default function About({ route }) {
  const { categories, image, name, price, rating, reviews } = route.params
  const formattedCategories = categories.map((cat) => cat.title).join(' • ')
  const descriptionFormatted = `${formattedCategories} ${
    price ? ' • ' + price : ''
  } • 🎫 • ${rating} ⭐ (${reviews}+)`

  return (
    <View>
      <Image source={{ uri: image }} style={styles.image} />
      <Text style={styles.title}>{name}</Text>
      <Text style={styles.description}>{descriptionFormatted}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  description: {
    marginHorizontal: 15,
    fontWeight: '400',
    fontSize: 15.5,
  },
  image: {
    width: '100%',
    height: 180,
    marginBottom: 10,
  },
  title: {
    marginBottom: 10,
    marginHorizontal: 15,
    fontSize: 29,
    fontWeight: '600',
  },
})
