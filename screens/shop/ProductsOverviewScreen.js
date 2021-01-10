import React from 'react';
import { Button, FlatList, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';

import * as cartAction from '../../store/actions/cart'

import ProductShop from '../../components/shop/ProductShop'
import HeaderButton from '../../components/UI/HeaderButton';

const ProductsOverviewScreen = props => {
  const products = useSelector(state => state.products.availableProducts);
  const dispatch = useDispatch();
  const selectItemHandler = (id, title) => {
    props.navigation.navigate('ProductDetail', {
      productId: id,
      productTitle: title
    });
  };
  return (
    <FlatList
      data={products}
      keyExtractor={item => item.id}
      renderItem={itemData => <ProductShop
        price={itemData.item.price}
        title={itemData.item.title}
        image={itemData.item.imageUrl}
        onSelect={() => {
          selectItemHandler(itemData.item.id, itemData.item.title)
        }}
        onToCartView={() => {

        }}
      >
        <Button title="View Detail" onPress={() => {
          selectItemHandler(itemData.item.id, itemData.item.title)
        }} />
        <Button title="To Cart" onPress={() => { dispatch(cartAction.addToCart(itemData.item)) }} />
      </ProductShop>}
    />
  );
};

ProductsOverviewScreen.navigationOptions = navData => {
  return {
    headerTitle: 'All Products',
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName={Platform.OS === 'android' ? 'md-menu' : 'ios-menu'}
          onPress={() => {
            navData.navigation.toggleDrawer();
          }}
        />
      </HeaderButtons>
    ),
    headerRight: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Cart"
          iconName={Platform.OS === 'android' ? 'md-cart' : 'ios-cart'}
          onPress={() => {
            navData.navigation.navigate('Cart');
          }}
        />
      </HeaderButtons>
    )
  };
};

export default ProductsOverviewScreen;
