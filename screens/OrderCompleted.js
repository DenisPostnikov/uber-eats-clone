import React, { useState, useEffect } from 'react'
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import LottieView from 'lottie-react-native'
import { FontAwesome5 } from 'react-native-vector-icons'
import firebase from '../firebaseConfig'

import Screen from '../components/Screen'
import MenuItems from '../components/MenuItems'
import colors from '../config/colors'

export default function OrderCompleted({ navigation }) {
  const [lastOrder, setLastOrder] = useState({
    items: [
      {
        title: 'Bologna',
        description: 'With butter lettuce, tomato and sauce bechamel',
        price: '$13.50',
        image:
          'https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg',
      },
    ],
  })
  const dispatch = useDispatch()
  const { items, restaurantName } = useSelector(
    (state) => state.cartReducer.selectedItems
  )
  const total = items
    .map((item) => Number(item.price.replace('$', '')))
    .reduce((prev, curr) => prev + curr, 0)
  const totalUSD = total.toLocaleString('en', {
    style: 'currency',
    currency: 'USD',
  })

  useEffect(() => {
    const db = firebase.firestore()
    const unsubscribe = db
      .collection('orders')
      .orderBy('createdAt', 'desc')
      .limit(1)
      .onSnapshot((snapshot) => {
        snapshot.docs.map((doc) => {
          setLastOrder(doc.data())
        })
      })

    return () => unsubscribe()
  }, [])

  return (
    <Screen style={{ backgroundColor: colors.white }}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.icon}>
        <FontAwesome5 name={'window-close'} size={30} />
      </TouchableOpacity>

      <View style={styles.container}>
        <LottieView
          style={styles.animationWrap}
          source={require('../assets/animations/check-mark.json')}
          autoPlay
          speed={0.5}
          loop={false}
        />
        <Text style={styles.info}>
          Your order at {restaurantName} has been placed for {totalUSD}
        </Text>
        <ScrollView>
          <MenuItems
            foods={lastOrder.items}
            hideCheckbox={true}
            marginLeft={10}
          />
          <LottieView
            style={styles.secondAnimationWrap}
            source={require('../assets/animations/cooking.json')}
            autoPlay
            speed={0.5}
          />
        </ScrollView>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  animationWrap: {
    height: 100,
    alignSelf: 'center',
    marginBottom: 30,
  },
  container: {
    alignItems: 'center',
    height: '100%',
    margin: 15,
  },
  icon: {
    alignSelf: 'flex-end',
    marginTop: 10,
    marginRight: 15,
  },
  info: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  secondAnimationWrap: {
    height: 200,
    alignSelf: 'center',
  },
})
