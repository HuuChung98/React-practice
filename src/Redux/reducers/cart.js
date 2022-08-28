
// tạo init stata 
const initialState = {
    products: [
        {
            id: 1,
            name: "Iphone 13",
            display: "Super Retina XDR OLED, 120Hz, 6.7 inches, 1284 x 2778 pixels",
            os: "iOS 15",
            camera: "12 MP, f/1.5, 26mm (wide), 1.9µm, dual pixel PDAF, sensor-shift OIS",
            memory: "6GB 256GB",
            rom: "128 GB",
            price: 31000000,
            image: "https://cdn.tgdd.vn/Products/Images/42/223602/iphone-13-midnight-2-600x600.jpg"
        },
        {
            id: 2,
            name: "Samsung galaxy S22 Ultra",
            display: "Dynamic AMOLED 2X, 120Hz, 6.1 inches, 1080 x 2340 pixels",
            os: "Android 12, One UI 4.1",
            camera: "50 MP, f/1.8, 23mm (wide), 1/1.56, 1.0µm, Dual Pixel PDAF, OIS",
            memory: "12GB 256GB",
            rom: "128 GB",
            price: 32000000,
            image: "https://cdn.tgdd.vn/Files/2021/12/06/1402535/galaxys22ultra_3_1280x720-800-resize.jpg"
        },
        {
            id: 3,
            name: "Oppo Find X5 Pro",
            display: "LTPO2 AMOLED, 120 Hz, 6.7 inches, 1440 x 3216 pixels",
            os: "Android 12, ColorOS 12.1",
            camera: "50 MP, f/1.7, 25mm (wide), 1/1.56, 1.0µm, multi-directional PDAF, OIS (3-axis sensor-shift, 2-axis lens-shift)",
            memory: "12GB 256GB",
            rom: "64 GB",
            price: 34000000,
            image: "https://cdn.pocket-lint.com/r/s/1200x/assets/images/159952-phones-news-oppo-find-x5-pro-renders-image1-p8ufbrezxs.jpg"
        }
    ],
    carts: [],
}

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TO_CART": {
            const product  = action.data;
            // Kiểm tra xem sản phẩm đã tồn tại trong giỏ hàng hay chưa? 
            const index = state.carts.findIndex((item) => item.id === product.id);
            // Nếu chưa tồn tại trong giỏ hàng 
            if( index === -1) {
                const carts = [...state.carts, {...product, quantity: 1}];
                return {...state, carts};
            }

            // Đã tồn tại trong giỏ hàng 
            const carts = state.carts.map((item) => {
                return item.id === product.id
                ? { ...item, quantity: item.quantity + 1}: item
            });
            return {...state, carts};
        
        }
        default:
            return state;
    }
};
export default cartReducer;