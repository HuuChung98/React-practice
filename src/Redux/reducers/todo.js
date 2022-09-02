import * as actionTypes from "../constants/todo"

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
        // Pending: set Loading thanh true
        case actionTypes.GET_TODOS_PENDING: {
            return {...state, isLoading: true};
        }
        // sau khi call API thanh cong, action ==> FULLFILDED, set Loading tro lai ve false va cap nhat data
        case actionTypes.GET_TODOS_FULLFILLED: {
            return {...state,
            isLoading: false,
            todos: action.data, // data tu API 
             };
        }
        // Neu call API fail ==> REJECTED
        // Loading tro ve false
        // Va set error tu API
        case actionTypes.GET_TODOS_REJECTED: {
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }
        }
        
        case actionTypes.CHANGE_SEARCH: {
            return { ...state, search: action.data}
        }
    
        default:
            return state;
    }
};

export default todoReducer;