import { View, Text, StyleSheet, Dimensions, Modal } from 'react-native'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import firebase from '../../firebaseConfig'
import LottieView from 'lottie-react-native'

import colors from '../../config/colors'

import ViewCartButton from './ViewCartButton'
import OrderItem from '../OrderItem'

export default function ViewCart({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false)
  const [loading, setLoading] = useState(false)

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

  const addOrderToFireBase = () => {
    const db = firebase.firestore()

    setLoading(true)

    db.collection('orders')
      .add({
        items: items,
        restaurantName: restaurantName,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      })
      .then(() => {
        setTimeout(() => {
          setLoading(false)
          navigation.navigate('OrderCompleted')
        }, 2500)
      })
  }

  const onPressCheckoutButton = () => {
    setModalVisible(false)
    addOrderToFireBase()
  }

  const checkoutModalContent = () => {
    return (
      <View style={styles.modalContainer}>
        <View style={styles.modalCheckoutContainer}>
          <Text style={styles.restaurantName}>{restaurantName}</Text>

          {items.map((item) => (
            <OrderItem key={item.id} item={item} />
          ))}

          <View style={styles.subtotalContainer}>
            <Text style={styles.subtotalText}>Subtotal</Text>
            <Text>{totalUSD}</Text>
          </View>

          <View style={styles.wrapperButton}>
            <ViewCartButton
              onPressButton={() => onPressCheckoutButton()}
              title='Checkout'
              totalUSD={totalUSD}
            />
          </View>
        </View>
      </View>
    )
  }

  return (
    <>
      <Modal
        animationType='slide'
        onRequestClose={() => setModalVisible(false)}
        transparent={true}
        visible={modalVisible}
      >
        {checkoutModalContent()}
      </Modal>

      {total ? (
        <View style={styles.container}>
          <ViewCartButton
            onPressButton={() => setModalVisible(true)}
            title='View Cart'
            totalUSD={totalUSD}
          />
        </View>
      ) : (
        <></>
      )}

      {loading ? (
        <View style={styles.shadow}>
          <LottieView
            style={{ height: 200 }}
            source={require('../../assets/animations/scanner.json')}
            autoPlay
            speed={0.5}
          />
        </View>
      ) : (
        <></>
      )}
    </>
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
  container: {
    position: 'absolute',
    bottom: Dimensions.get('window').height * 0.03,
    zIndex: 999,
    width: '100%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)',
  },
  modalCheckoutContainer: {
    height: 500,
    padding: 16,
    backgroundColor: colors.white,
    borderWidth: 1,
  },
  restaurantName: {
    marginBottom: 10,
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 18,
  },
  subtotalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  subtotalText: {
    fontWeight: '600',
    fontSize: 15,
    textAlign: 'left',
  },
  shadow: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: '100%',
    backgroundColor: colors.black,
    opacity: 0.6,
  },
  title: {
    flex: 1,
    fontSize: 20,
    color: colors.white,
  },
  wrapperButton: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
})
