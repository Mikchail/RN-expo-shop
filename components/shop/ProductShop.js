import React from 'react'
import { Text, View, StyleSheet, Image, Button, TouchableOpacity, TouchableNativeFeedback } from 'react-native'


const ProductShop = (props) => {
  const { price, title, image, onSelect } = props
  return (
    <TouchableNativeFeedback onPress={onSelect} useForeground>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image style={styles.image} source={{ uri: image }} />
        </View>
        <View style={styles.detail}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.price}>${price.toFixed(2)}</Text>
        </View>
        <View style={styles.actions}>
          {props.children}
        </View>
      </View>
    </TouchableNativeFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 300,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    shadowOpacity: 0.26,
    elevation: 5,
    borderRadius: 10,
    margin: 20,
    backgroundColor: 'white'
  },
  imageContainer: {
    height: '60%',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    overflow: 'hidden'
  },
  image: {
    width: '100%',
    height: '100%'
  },
  detail: {
    alignItems: 'center',
    padding: 15,

    height: '15%'
  },
  title: {
    fontSize: 18,
    paddingBottom: 3
  },
  price: {
    color: '#888'
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '25%',
    padding: 20,
  }
})

export default ProductShop