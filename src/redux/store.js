import { configureStore } from '@reduxjs/toolkit'
import sushi from './sushiSlice'
import cart from './CartSlice'

export const store = configureStore({
    reducer: {
        sushi,
        cart 
    },
  })