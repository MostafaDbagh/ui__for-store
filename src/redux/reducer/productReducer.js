import { createSlice } from '@reduxjs/toolkit';



const initialState = []

const ProductSlice = createSlice({
  name: 'product',
  initialState:initialState,
  reducers: {
    addProduct: (state,action) =>{
        state.push(action.payload)
    },
  },
});

export const { addProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
