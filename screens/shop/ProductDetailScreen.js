import React from "react";
import {Text, View, StyleSheet, ScrollView, Image, Button} from "react-native";
import {useSelector, useDispatch} from "react-redux";
import * as cartAction from "../../store/actions/cart";

const ProductDetailScreen = (props) => {
  const params = props.route?.params ? props.route.params : {};
  const productID = params.productId;
  console.log(productID);
  const product = useSelector((state) =>
    state.products.availableProducts.find((prod) => prod.id === productID)
  );
  const dispatch = useDispatch();
  return (
    <ScrollView>
      <Image style={styles.image} source={{uri: product.imageUrl}} />
      <View style={styles.actions}>
        <Button
          title="add to Cart"
          onPress={() => {
            dispatch(cartAction.addToCart(product));
          }}
        />
      </View>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 300,
    width: "100%",
  },
  actions: {
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  price: {
    color: "#888",
    textAlign: "center",
  },
  description: {
    paddingHorizontal: 10,
    textAlign: "center",
  },
});

export const screenOptions = (navData) => {
  return {
    headerTitle: navData.route.params.productTitle,
  };
};

export default ProductDetailScreen;
