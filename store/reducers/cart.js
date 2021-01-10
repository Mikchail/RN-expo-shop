import CartItem from '../../models/Cart'
import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/cart'
import { ADD_ORDER } from '../actions/orders'

const initialState = {
  items: {},
  totalAmount: 0
}


export default (state = initialState, action) => {

  switch (action.type) {
    case ADD_TO_CART:
      const addedProduct = action.product
      const priceProduct = addedProduct.price
      const titleProduct = addedProduct.title
      let productToCart;
      if (state.items[addedProduct.id]) {
        productToCart = new CartItem(
          state.items[addedProduct.id].amount + 1,
          priceProduct, titleProduct,
          state.items[addedProduct.id].sum + priceProduct)

      } else {
        productToCart = new CartItem(1, priceProduct, titleProduct, priceProduct)

      }
      return {
        ...state,
        items: {
          ...state.items,
          [addedProduct.id]: productToCart
        },
        totalAmount: state.totalAmount + priceProduct
      }
    case REMOVE_FROM_CART:
      const selectedCartItem = state.items[action.pid];
      const currentQty = selectedCartItem.amount;
      let updatedCartItems;
      if (currentQty > 1) {
        // need to reduce it, not erase it
        const updatedCartItem = new CartItem(
          selectedCartItem.amount - 1,
          selectedCartItem.price,
          selectedCartItem.title,
          selectedCartItem.sum - selectedCartItem.price
        );
        updatedCartItems = { ...state.items, [action.pid]: updatedCartItem };
      } else {
        updatedCartItems = { ...state.items };
        delete updatedCartItems[action.pid];
      }
      return {
        ...state,
        items: updatedCartItems,
        totalAmount: state.totalAmount - selectedCartItem.price
      };
    case ADD_ORDER:
      return initialState
    default:
      return state
  }

}
