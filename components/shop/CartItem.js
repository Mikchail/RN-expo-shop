import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartItem = props => {
  console.log(props.title);
  return (
    <View style={styles.cartItem}>
      <View style={styles.itemData}>
        <Text style={styles.quantity}>{props.amount} </Text>
        <Text style={styles.mainText}>{props.title}</Text>
      </View>
      <View style={styles.itemData}>
        <Text style={styles.mainText}>${props.sum.toFixed(2)}</Text>
        {props.deleteable && <TouchableOpacity onPress={props.onRemove} style={styles.deleteButton}>
          <Ionicons
            name={Platform.OS === 'android' ? 'md-trash' : 'ios-trash'}
            size={23}
            color="red"
          />
        </TouchableOpacity>}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    padding: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20
  },
  itemData: {
    flexDirection: 'row',
    alignItems: 'center',

  },
  quantity: {
    color: '#888',
    fontSize: 16
  },
  mainText: {
    fontSize: 16,
    maxWidth: 160,

  },
  deleteButton: {
    marginLeft: 20
  }
});

export default CartItem;
