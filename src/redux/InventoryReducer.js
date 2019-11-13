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
        cart: [...state.cart, Number(payload)]
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
    default:
      return state;
  }
};

export default inventoryReducer;
