
import React, { useState } from 'react';
import 'react-native-gesture-handler'
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';

import productsReducer from './store/reducers/products';
import cartReducer from './store/reducers/cart';
import ordersReducer from './store/reducers/orders';
import ShopNavigator from './navigation/ShopNavigator';
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  orders: ordersReducer,
});

const store = createStore(rootReducer);

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);
  const fetchFont = () => {
    return Font.loadAsync({
      Ionicons: require('./node_modules/@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/Ionicons.ttf'),
    });
  };
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => {
          setFontLoaded(true);
        }}
      />
    );
  }
  return (
    <Provider store={store}>
      <ShopNavigator />
    </Provider>
  );
}
