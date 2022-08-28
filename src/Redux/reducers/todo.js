// co 2 thanh phan  

const initialState = {
    todos: [],
    search: "",
    filter: "all",
};

// Reducer 
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "GET_TODOS": {
            return {...state, todos: action.data};
        }
    
        default:
            return state;
    }
};

export default todoReducer;