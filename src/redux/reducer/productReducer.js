import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const ProductSlice = createSlice({
  name: "product",
  initialState: initialState,
  reducers: {
    addProduct: (state, action) => {
      let { quantity, ...rest } = action.payload;
      if (state.find((item) => item["rest"].id == rest.id)) {
        const matchIndex = state.findIndex(
          (item) => item["rest"].id == rest.id
        );
        state[matchIndex].quantity += quantity;
      } else {
        state.push({ rest, quantity });
      }
    },
    removeProduct: (state, action) => {
      const matchIndex = state.findIndex(
        (item) => item["rest"].id == action.payload['rest'].id
      );   
       if(action.payload.quantity > 0 ){
       state[matchIndex].quantity -=1;
      }

    },
  },
});

export const { addProduct, removeProduct } = ProductSlice.actions;
export default ProductSlice.reducer;
