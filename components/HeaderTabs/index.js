import { View, StyleSheet } from 'react-native'
import React from 'react'

import HeaderButton from '../HeaderButton'

export default function HeaderTabs({ activeTab, setActiveTab }) {
  return (
    <View style={styles.container}>
      <HeaderButton
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        text='Delivery'
      />
      <HeaderButton
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        text='Pickup'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
})
