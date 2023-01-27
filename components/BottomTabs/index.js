import { View, StyleSheet } from 'react-native'
import React from 'react'

import BottomTab from './BottomTab'

const tabs = [
  {
    id: 1,
    title: 'Home',
    iconName: 'home',
  },
  {
    id: 2,
    title: 'Browse',
    iconName: 'search',
  },
  {
    id: 3,
    title: 'Grocery',
    iconName: 'shopping-bag',
  },
  {
    id: 4,
    title: 'Orders',
    iconName: 'receipt',
  },
  {
    id: 5,
    title: 'Account',
    iconName: 'user',
  },
]

export default function BottomTabs() {
  return (
    <View style={styles.container}>
      {tabs.map((tab) => (
        <BottomTab icon={tab.iconName} key={tab.id} title={tab.title} />
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingHorizontal: 30,
  },
})
