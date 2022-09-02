import { GET_TODOS } from "../constants/todo"

// co 2 thanh phan  

const initialState = {
    todos: [],
    search: "",
    filter: "all",
    isLoading: false, // loading flag: Hien thi loading khi call API 
    error: null, // nhan loi tu API
};

// Reducer 
const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_TODOS: {
            return {...state, todos: action.data};
        }

        case "CHANGE_SEARCH": {
            return { ...state, search: action.data}
        }
    
        default:
            return state;
    }
};

export default todoReducer;