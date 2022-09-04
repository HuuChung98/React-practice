import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    colors: [],
};

const colorSlice = createSlice(
    {
        name: "color",
        initialState,
        reducers: {
            addColor(state, action) {
                const colors = [...state.colors, action.payload];
                return {...state, colors};
            },
            removeColor(state, action) {
                const colors = state.colors.filter((color) => color !== action.payload);
                return {...state, colors};
            },
        },
    }

);

export const { addColor, removeColor } = colorSlice.actions;

export default colorSlice.reducer;

