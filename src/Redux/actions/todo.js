import axios from 'axios';

const getTodos = async () => {
    try {
        // dua API vao day
        // Call API
        const { data } = await axios.get("https://62528e0f69af39728b501bf1.mockapi.io/chung/products");
        // ==> Thanh cong
        dispatch({ type: "GET_TODOS", data});
    } catch (error) {
        console.log(error);
    }
};