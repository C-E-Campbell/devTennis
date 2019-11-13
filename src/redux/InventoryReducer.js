const initialState = {
  inventory: {},
  cart: [],
  cartTotal: null,
  discountApplied: false
};

export const GET_INVENTORY = "GET_INVENTORY";
export const GET_CART = "GET_CART";
export const CART_TOTAL = "CART_TOTAL";
export const DISCOUNT_APPLIED = "DISCOUNT_APPLIED";
export const DELETE_FROM_CART = "DELETE_FROM_CART";
export const OLD_CART = "OLD_CART";
export const ADD_ONE = "ADD_ONE";
export const SUBTRACT_ONE = "SUBTRACT_ONE";

const inventoryReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_INVENTORY:
      return {
        ...state,
        inventory: payload
      };
    case GET_CART:
      return {
        ...state,
        cart: [...state.cart, payload]
      };
    case OLD_CART:
      return {
        ...state,
        cart: payload
      };
    case DELETE_FROM_CART:
      return {
        ...state,
        cart: payload
      };
    case CART_TOTAL:
      return {
        ...state,
        cartTotal: payload
      };
    case DISCOUNT_APPLIED:
      return {
        ...state,
        discountApplied: true
      };
    case ADD_ONE:
      const thisItem = state.cart.findIndex(item => {
        return item.item_id === Number(payload);
      });
      const newObj = state.cart[thisItem];
      newObj.quantity += 1;
      return {
        ...state
      };
    case SUBTRACT_ONE:
      const thisItem1 = state.cart.findIndex(item => {
        return item.item_id === Number(payload);
      });
      const newObj1 = state.cart[thisItem1];
      newObj1.quantity -= 1;
      return {
        ...state
      };
    default:
      return state;
  }
};

export default inventoryReducer;
