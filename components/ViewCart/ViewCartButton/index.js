import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

import colors from '../../../config/colors'

export default function index({ onPressButton, title, totalUSD }) {
  return (
    <TouchableOpacity onPress={onPressButton} style={styles.button}>
      <View style={{ flex: 1 }}></View>
      <Text style={[styles.title]}>{title}</Text>
      <Text style={[styles.title, { textAlign: 'right' }]}>{totalUSD}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    alignSelf: 'center',
    width: 300,
    padding: 13,
    backgroundColor: colors.black,
    borderRadius: 30,
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: colors.white,
  },
})
