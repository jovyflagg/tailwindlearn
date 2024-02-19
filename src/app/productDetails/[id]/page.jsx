"use client"

import React from "react";
import styles from "./productDetailsPage.module.css";
import { useRouter } from "next/navigation";

const ProductDetails = ({params}) => {
    const router = useRouter();
    const {id, image, name, price} = params;
  return (
    <>
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
                <h1>Title </h1>
                <p>Id: {id}</p>
                <p>Title: {name}</p>
                <p>Price: {price}</p>
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
    </>
  );
};

export default ProductDetails;
