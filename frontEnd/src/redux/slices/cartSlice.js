import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    items: [],
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {

        addToCart(state, action) {
            const product = action.payload
            const existingProduct = state.items.find(
                item => item._id === product._id
            )
            if (existingProduct) {
                if (existingProduct.quantity < existingProduct.stock) {
                existingProduct.quantity += 1;
                }
            } else {
                state.items.push({
                    ...product,
                    quantity: 1
                })
            }
        },

        removeFromCart(state, action) {
            const id = action.payload
            state.items = state.items.filter((item) => item._id !== id)
        },

        increaseQuantity(state, action) {
            const id = action.payload; 
            const existingProduct = state.items.find((item) => item._id === id)
            if (existingProduct) {
                if (existingProduct.quantity < existingProduct.stock) {
                existingProduct.quantity += 1;
                }
            }
        },

        decreaseQuantity(state, action) {
            const id = action.payload;
            const existingProduct = state.items.find((item) => item._id === id)

            if (existingProduct) {
                if (existingProduct.quantity > 1) {
                existingProduct.quantity -= 1;
                } else {
                state.items = state.items.filter((item) => item._id !== id)
                }
            }
        },

        clearCart(state) {
            state.items = []
        }

    }
});

export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart
} = cartSlice.actions

export default cartSlice.reducer