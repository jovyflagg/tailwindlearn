"use client"

import React, { useContext } from "react";
import styles from "./productDetailsPage.module.css";
import RecentlyViewed from "@/components/RecentlyViewed";
import { ViewedContext } from "@/context/ViewedContext";

const ProductDetails = ({ params }) => {
  const { id } = params;
  const selected = useContext(ViewedContext);
  const products = selected.items.find((product) => (product.id === id));
  
  return (
    <>
      {JSON.stringify(products.product.name)}
      <div className={styles.container}>
        <div className={styles.topSection}>
          <div className={styles.productImageWrapper}>
            <div className={styles.mainImage}></div>
            {/* <div className={styles.carouselImages}></div> */}
          </div>
          <div className={styles.productDetailsWrapper}>
            <div className={styles.primaryDetailsWrapper}>
              <div className={styles.title}></div>
              <div className={styles.subtitle}></div>
              <div className={styles.price}></div>
            </div>
            {/* cta stands for call-to-action e.g. add to cart, add to favorites */}
            <div className={styles.cta}>

              {/* 1-quantity counter, 2-Add to cart button  and/or add to favorites button*/}
            </div>
            <div className={styles.secondaryDetailsWrapper}>
              {/* accordion style */}
              <div className={styles.productDescription}>
                highlights in bullet points
                <h1>Title {products.product.name} </h1>
                <p>Id: {id}</p>
                {/* <p>Title: {name}</p>
                <p>Price: {price}</p> */}
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
