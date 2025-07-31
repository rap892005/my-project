import React, { createContext, useReducer } from 'react';
import { cartReducer } from './cartReducer';

export const CartContext = createContext();

const initialState = { cartItems: [] };

const CartContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    const addProduct = (product) => {
        dispatch({ type: 'ADD', payload: product });
    };

    const removeProduct = (productId) => {
        dispatch({ type: 'REMOVE', payload: { id: productId } });
    };

    const incrementQuantity = (productId) => {
        dispatch({ type: 'INCQTY', payload: { id: productId } });
    };

    const decrementQuantity = (productId) => {
        dispatch({ type: 'DECQTY', payload: { id: productId } });
    };

    const clearCart = () => {
        dispatch({ type: 'CLEAR' });
    };

    const contextValue = {
        cartItems: state.cartItems,
        addProduct,
        removeProduct,
        incrementQuantity,
        decrementQuantity,
        clearCart,
        cartItemCount: state.cartItems.reduce((total, item) => total + item.quantity, 0),
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
