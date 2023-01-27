import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../../config/colors'

export default function HeaderButton({ text, activeTab, setActiveTab }) {
  return (
    <View>
      <TouchableOpacity onPress={() => setActiveTab(text)}>
        <View
          style={[
            styles.wrapper,
            {
              backgroundColor: activeTab === text ? colors.black : colors.white,
            },
          ]}
        >
          <Text
            style={[
              styles.title,
              { color: activeTab === text ? colors.white : colors.black },
            ]}
          >
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 30,
  },
  title: {
    fontSize: 15,
    fontWeight: '900',
  },
})
