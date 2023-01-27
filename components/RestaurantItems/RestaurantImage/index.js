import { View, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import { MaterialCommunityIcons } from 'react-native-vector-icons'
import colors from '../../../config/colors'

export default function RestaurantImage({ image }) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: image }} style={styles.image} />
      <TouchableOpacity>
        <View style={styles.wrapper}>
          <MaterialCommunityIcons
            color={colors.white}
            name='heart-outline'
            size={25}
          />
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 180,
  },
  wrapper: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
})
