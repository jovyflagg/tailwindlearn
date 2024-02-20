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
        const newViewedProducts = [...viewedProducts];
        const existingIndex = newViewedProducts.findIndex(item => item.id === id);

        if (existingIndex !== -1) {
            newViewedProducts.splice(existingIndex, 1);
        }

        newViewedProducts.unshift({ id, product });
        setViewedProducts(newViewedProducts);
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
