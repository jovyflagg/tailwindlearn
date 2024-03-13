"use client"
import React, { useContext } from "react";
import styles from "./productDetailsPage.module.css";
import RecentlyViewed from "@/components/RecentlyViewed";
import { ViewedContext } from "@/context/ViewedContext";
import { CartContext } from "@/context/CartContext";
import Button from "@/components/Button";

const ProductDetails = ({ params }) => {
  const { id } = params;
  console.log(id)
  const selected = useContext(ViewedContext);
  const cart = useContext(CartContext);
  const product = selected.items.find((product) => (product.id === id));
  console.log(product)
  return (
    <>

      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.productImageWrapper}>
            <div className={styles.mainImage}>
              <img
                src="https://placehold.co/320x320/darkblue/orange"
                alt=""
              />

            </div>
            {/* <div className={styles.carouselImages}></div> */}
          </div>
          <div className={styles.productDetailsWrapper}>
            Description: {product.product.description}
            <div className={styles.primaryDetailsWrapper}>
              <div className={styles.title}>

              </div>
              <div className={styles.subtitle}></div>
              <div className={styles.price}>
                Price: ${product.product.price}
              </div>
            </div>
            {/* cta stands for call-to-action e.g. add to cart, add to favorites */}
            <div className={styles.cta}>
          
              <button onClick={() => cart.addOneToCart(id,product)} className="text-black" >Add to cart</button>
              {/* 1-quantity counter, 2-Add to cart button  and/or add to favorites button*/}
            </div>
            <div className={styles.secondaryDetailsWrapper}>
              {/* accordion style */}
              <div className={styles.productDescription}>
                highlights in bullet points
                <h1>Product {product.product.name} </h1>
                 <p>Title: {product.product.name}</p> 
                <p>Price: {product.product.price}</p>
              </div>
              <div className={styles.productSpecs}></div>
              <div className={styles.shippingAndReturns}></div>
              <div className={styles.reviews}></div>
            </div>
          </div>
        </div>
        <div className={styles.bottomSection}>
          <div className={styles.suggestions}></div>
          <div className={styles.recentlyViewed}></div>
        </div>
      </div>
      <RecentlyViewed />
    </>
  );
};

export default ProductDetails;
