"use client"
import { createContext, useEffect, useState } from "react";

export const ViewedContext = createContext({
    items: [],
    addViewed: () => { },
    removeViewed: () => { },
    deleteViewed: () => { }
});

export function ViewedProvider({ children }) {

    const [viewedProducts, setViewedProducts] = useState([]);

    function addViewed(id, product) {
        const existingIndex = viewedProducts.findIndex(item => item.id === id);
    
        if (existingIndex !== -1) {
            // If the product already exists, move it to the front
            const existingProduct = viewedProducts[existingIndex];
            const newViewedProducts = [
                existingProduct,
                ...viewedProducts.slice(0, existingIndex),
                ...viewedProducts.slice(existingIndex + 1)
            ];
            setViewedProducts(newViewedProducts);
        } else {
            // If the product doesn't exist, add it to the front
            const newViewedProducts = [{ product }, ...viewedProducts];
            setViewedProducts(newViewedProducts);
        }
    }
    

    function removeViewed(id) {
        const newViewedProducts = viewedProducts.filter(item => item.id !== id);
        setViewedProducts(newViewedProducts);
    }

    function deleteViewed(id) {
        setViewedProducts([]);
    }

    useEffect(() => {
        const viewedProducts = JSON.parse(localStorage.getItem("views"))
        if (viewedProducts && viewedProducts.length > 0) {
            setViewedProducts(viewedProducts)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("views", JSON.stringify(viewedProducts))
    }, [viewedProducts])


    const contextValue = {
        items: viewedProducts,
        addViewed,
        removeViewed,
        deleteViewed
    };


    return (
        <ViewedContext.Provider value={contextValue}>
            {children}
        </ViewedContext.Provider>
    );
}

export default ViewedProvider;
