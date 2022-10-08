import React, { Component } from 'react'
import ProductDetail from './ProductDetail'
// import ProductItem from './ProductItem'
import ProductList from './ProductList'
import Cart from './Cart'

class ProductCart extends Component {
    constructor() {
        super()

        this.state = {
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
            selectedProduct: null,
            // Danh sách sản phẩm tong giỏ hàng 
            carts: [],
        }
    }
    // cài đặt 1 function callback ở component cha  và truyền xuống component con thông qua prosp
    handSelect = (product) => {
        // product từ component con truyền lên  
        console.log(product);
        // Kiểm tra xem sản phẩm xem đã tồn tại trong giỏ hàng hay chưa 
        this.setState({
            selectedProduct: product
        })

    }

    handleAddtoCart = (product) => {
        console.log(product);
        const isExisted = this.state.carts.findIndex(item => item.id === product.id) !== -1;
        if (isExisted) {
            // sản phẩm đã tồn tại 
            const carts = this.state.carts.map((item) => {
                if (item.id === product.id) {
                    return { ...item, quantity: item.quantity + 1 }
                }
                return item;
            })
            this.setState({ carts });
        }
        else {
            // Sản phẩm chưa tồn tại
            const carts = [...this.state.carts, { ...product, quantity: 1 }];
            this.setState(
                {
                    carts
                }
            );
        }
    }

    handleChangeQuantity = (product, type) => {
        console.log(product, type);
        const item = this.state.carts.find((item) => item.id === product.id);

        if (item.quantity === 1 && type === "decrease") {
            const carts = this.state.carts.filter((item) => item.id !== product.id);
            this.setState({ carts });
            return;
        }
        const carts = this.state.carts.map((item) => {
            if (item.id === product.id) {
                const quantity =
                    type === "increase" ? item.quantity + 1 : item.quantity - 1;
                return { ...item, quantity };
            }
            return item;
        });
        this.setState({ carts });
    }

    handleDeleteItem = (productId) => {
        console.log(productId);
        const carts = this.state.carts.filter((item) => item.id !== productId);
        this.setState({ carts });
    }
    render() {
        const { products } = this.state;
        return (
            <div className='container'>
                <div className='d-flex justify-content-between align-items-center'>
                    <h1>DANH SÁCH SẢN PHẨM</h1>
                    <Cart carts={this.state.carts}
                        onChangeQuantity={this.handleChangeQuantity}
                        onDeleteItem={this.handleDeleteItem}
                    />
                </div>


                <ProductList products={products} onSelect={this.handSelect} onAddtoCart={this.handleAddtoCart} />

                {/* CHI TIẾT SANRPHAAMR  */}
                <ProductDetail product={this.state.selectedProduct} />
            </div>
        )
    }
}

export default ProductCart