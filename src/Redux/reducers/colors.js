
const initialState = {
    colors: []
};

const colorReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_COLOR": {
            const colors = [...state.colors, action.data];
            return {...state, colors};
        }
        case "REMOVE_COLOR": {
            const colors = state.colors.filter((color) => color !== action.data);
            return {...state, colors};
            
        }
        default:
            return state;
    }
}

export default colorReducer;