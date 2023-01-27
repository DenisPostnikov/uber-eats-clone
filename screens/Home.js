import { ActivityIndicator, View, StyleSheet, ScrollView } from 'react-native'
import React, { useState, useEffect } from 'react'

import { Divider } from '@rneui/themed'
import colors from '../config/colors'

import Screen from '../components/Screen'
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar'
import Categories from '../components/Categories'
import RestaurantItems from '../components/RestaurantItems'
import { localRestaurants } from '../components/RestaurantItems'
import BottomTabs from '../components/BottomTabs'

const YELP_API_KEY =
  'U1XbLBLv5TkDub3_JZNN4EiyGpFUlDk3H-iDbUXHz2ISgmr8O0O2L8itFTKTo99yN0S20A58hpobE5Cy2M8D6U-J4xv3Odpb0wQRpdDICGx1qEgaSjQVCWdAVjPFY3Yx'

export default function Home({ navigation }) {
  const [loading, setLoading] = useState(true)
  const [restaurantData, setRestaurantData] = useState(localRestaurants)
  const [city, setCity] = useState('San Francisco')
  const [activeTab, setActiveTab] = useState('Delivery')

  const getRestaurantsFromYelp = () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`

    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    }

    return fetch(yelpUrl, apiOptions)
      .then((res) => res.json())
      .then((json) =>
        setRestaurantData(
          json.businesses.filter((business) =>
            business.transactions.includes(activeTab.toLowerCase())
          )
        )
      )
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    getRestaurantsFromYelp()
  }, [city, activeTab])

  return (
    <Screen style={{ backgroundColor: colors.gray }}>
      <View style={styles.container}>
        <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
        <SearchBar cityHandler={setCity} />
      </View>

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
      >
        <Categories />

        {loading ? (
          <View style={styles.spinner}>
            <ActivityIndicator color={colors.darkGray} size='large' />
          </View>
        ) : (
          <RestaurantItems
            navigation={navigation}
            style={{ backgroundColor: 'yellow' }}
            restaurantData={restaurantData}
          />
        )}
      </ScrollView>

      <Divider width={1} />
      <BottomTabs />
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 5,
    padding: 15,
    backgroundColor: colors.white,
  },
  spinner: {
    flex: 1,
    justifyContent: 'center',
  },
})
