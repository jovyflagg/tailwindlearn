"use client"
import { createContext, useState } from "react";

// Here is your application state
export const CartContext = createContext({
    items: [],
    getProductQuantity: () => { },
    addOneToCart: () => { },
    removeOneFromCart: () => { },
    deleteFromCart: () => { },
    getTotalCost: () => { }
});

export function CartProvider({ children }) {

    const [cartProducts, setCartProducts] = useState([]);
    
    function getProductQuantity(id) {
        const quantity = cartProducts.find(product => product.id === id)?.quantity;
        
        if (quantity === undefined) {
            return 0;
        }

        return quantity;
    }

    function addOneToCart(id, product) {
        
        const quantity = getProductQuantity(id);
        if (quantity === 0) { // product is not in cart
            setCartProducts(
                [
                    ...cartProducts,
                    {
                        id,
                        name: product.name,
                        application_price: product.price,
                        price: product.default_price,
                        quantity: 1,
                    }
                ]
            )
        } else { // product is in cart

            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id                                // if condition
                            ? { ...product, quantity: product.quantity + 1 } // if statement is true
                            : product                                        // if statement is false
                )
            )
        }
    }

    function removeOneFromCart(id) {
        const quantity = getProductQuantity(id);

        if (quantity === 1) {
            deleteFromCart(id);
        } else {
            setCartProducts(
                cartProducts.map(
                    product =>
                        product.id === id                                // if condition
                            ? { ...product, quantity: product.quantity - 1 } // if statement is true
                            : product                                        // if statement is false
                )
            )
        }
    }

    function deleteFromCart(id) {
     
        setCartProducts(
            cartProducts =>
                cartProducts.filter(currentProduct => {
                    return currentProduct.id !== id;
                })
        )
    }

    function getTotalCost() {
        
        let totalCost = 0;


        cartProducts.map((product) => {
           return totalCost += product.application_price * product.quantity;
        });
        return totalCost;
    }


    const contextValue = {
        items: cartProducts,
        getProductQuantity,
        addOneToCart,
        removeOneFromCart,
        deleteFromCart,
        getTotalCost
    }

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;