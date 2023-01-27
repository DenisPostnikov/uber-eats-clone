import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { Ionicons, AntDesign } from 'react-native-vector-icons'

import colors from '../../config/colors'

export default function SearchBar({ cityHandler }) {
  const [searchCity, setSearchCity] = useState('')

  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder='Search'
        query={{
          key: 'GOOGLE_MAP_APIKEY',
          language: 'en',
        }}
        renderLeftButton={() => (
          <View style={styles.wrapLeftIcon}>
            <Ionicons name='location-sharp' size={24} />
          </View>
        )}
        renderRightButton={() => (
          <TouchableOpacity onPress={() => cityHandler(searchCity)}>
            <View style={styles.wrapRightIcon}>
              <AntDesign
                name='clockcircle'
                size={11}
                style={styles.rightIcon}
              />
              <Text>Search</Text>
            </View>
          </TouchableOpacity>
        )}
        styles={{
          textInput: {
            marginTop: 7,
            fontWeight: '700',
            backgroundColor: colors.gray,
            borderRadius: 20,
          },
          textInputContainer: {
            flexDirection: 'row',
            alignItems: 'center',
            backgroundColor: colors.gray,
            borderRadius: 50,
          },
        }}
        textInputProps={{
          onChangeText: (text) => setSearchCity(text),
        }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 15,
  },
  rightIcon: {
    marginRight: 6,
  },
  wrapLeftIcon: {
    marginLeft: 10,
  },
  wrapRightIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 8,
    padding: 9,
    backgroundColor: colors.white,
    borderRadius: 30,
  },
})
