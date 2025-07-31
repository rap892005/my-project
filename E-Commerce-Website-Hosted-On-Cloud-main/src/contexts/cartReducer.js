export const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD": {
      // Check if the product is already in the cart
      const index = state.cartItems.findIndex((x) => x.id === action.payload.id);

      // If the item doesn't exist, add it with quantity 1
      if (index === -1) {
        return {
          ...state,
          cartItems: [...state.cartItems, { ...action.payload, quantity: 1 }],
        };
      } else {
        // If the item exists, increase its quantity by 1
        const updatedCart = state.cartItems.map((item) => 
          item.id === action.payload.id 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
        return {
          ...state,
          cartItems: updatedCart,
        };
      }
    }

    case "REMOVE": {
      // Filter out the item from the cart
      return {
        ...state,
        cartItems: state.cartItems.filter((item) => item.id !== action.payload.id),
      };
    }

    case "DECQTY": {
      const index = state.cartItems.findIndex((x) => x.id === action.payload.id);
      if (index !== -1 && state.cartItems[index].quantity > 1) {
        const updatedCart = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
        return {
          ...state,
          cartItems: updatedCart,
        };
      }
      return state;
    }

    case "INCQTY": {
      const index = state.cartItems.findIndex((x) => x.id === action.payload.id);
      if (index !== -1) {
        const updatedCart = state.cartItems.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          ...state,
          cartItems: updatedCart,
        };
      }
      return state;
    }

    case "CLEAR": {
      // Clear all items from the cart
      return {
        ...state,
        cartItems: [],
      };
    }

    default:
      return state;
  }
};
