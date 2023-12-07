import { combineReducers ,configureStore,getDefaultMiddleware } from '@reduxjs/toolkit';
import productReducer from '../redux/reducer/productReducer';
import { persistReducer,persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 



const persistConfig = {
  key: 'root', 
  storage, 
  
};

const rootReducer = combineReducers({
  product: productReducer,

});

 const persistedReducer = persistReducer(persistConfig, rootReducer);

 export const store = configureStore({
  reducer: persistedReducer,
});
export const persistor = persistStore(store);
