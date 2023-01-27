import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import { FontAwesome5 } from 'react-native-vector-icons'

export default function BottomTab({ icon, title }) {
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <FontAwesome5 name={icon} size={25} style={styles.icon} />
        <Text>{title}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
})
