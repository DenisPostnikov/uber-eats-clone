import { View, StyleSheet, ScrollView } from 'react-native'
import React, { useEffect } from 'react'

import { Divider } from '@rneui/themed'
import BouncyCheckbox from 'react-native-bouncy-checkbox'
import { useDispatch, useSelector } from 'react-redux'
import { useIsFocused } from '@react-navigation/native'
import colors from '../../config/colors'

import FoodInfo from './FoodInfo'
import FoodImage from './FoodImage'

export default function MenuItems({
  foods,
  hideCheckbox,
  marginLeft,
  restaurantName,
}) {
  const dispatch = useDispatch()

  const selectItem = (item, checkboxValue) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...item, restaurantName, checkboxValue },
    })
  const cartItems = useSelector(
    (state) => state.cartReducer.selectedItems.items
  )
  const isFoodInCart = (food, cartItems) =>
    Boolean(cartItems.find((item) => item.title === food.title))

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food) => (
        <View key={food.id}>
          <View style={styles.menuItem}>
            {hideCheckbox ? (
              <></>
            ) : (
              <BouncyCheckbox
                fillColor={colors.green}
                isChecked={isFoodInCart(food, cartItems)}
                iconStyle={{ borderRadius: 0 }}
                innerIconStyle={styles.checkbox}
                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
              />
            )}

            <FoodInfo food={food} />
            <FoodImage food={food} marginLeft={marginLeft ? marginLeft : 0} />
          </View>
          <Divider width={0.5} orientation='vertical' />
        </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  checkbox: {
    borderColor: colors.lightGray,
    borderRadius: 0,
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 20,
  },
})
