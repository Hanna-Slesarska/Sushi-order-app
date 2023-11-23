import { createSlice } from '@reduxjs/toolkit'

export const sushiSlice = createSlice({
    name: 'sushi',
    initialState: {
        selectedCategory: "All types"
    },
    reducers: {
        filterCategory: (state, action) => {
            state.selectedCategory = action.payload;
        }
    }
})

export const {filterCategory } = sushiSlice.actions;
export const getSelectedCategory = state => state.sushi.selectedCategory;
export default sushiSlice.reducer