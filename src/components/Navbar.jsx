"use client"
import React, { useState, useContext, useEffect } from "react";
import 'flowbite-react';
import { CartContext } from "@/context/CartContext";
import { loadStripe } from "@stripe/stripe-js";
import { FaShoppingCart } from 'react-icons/fa'
import Link from "next/link";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const Navbar = () => {
  let stripePromise;
  const [stripeError, setStripeError] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility
  const cart = useContext(CartContext);

  useEffect(() => {
    // Initialize Flowbite dropdown
    const dropdowns = document.querySelectorAll('[data-collapse-toggle]');
    dropdowns.forEach(dropdown => {
      dropdown.addEventListener('click', () => {
        const target = dropdown.getAttribute('aria-controls');
        const targetElement = document.getElementById(target);
        targetElement.classList.toggle('hidden');
        targetElement.classList.toggle('block');
      });
    });
  }, []);



  if (stripeError) alert(stripeError);

  const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <img
            src="/"
            className="h-8"
            alt="Logo goes here"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            LoveLily
          </span>
        </a>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen ? "true" : "false"} // Set aria-expanded based on menu state
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Render menu based on state */}
        {isMenuOpen && (
          <div className="w-full md:block md:w-auto" id="navbar-default">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li
                onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
                className="block py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white md:dark:text-blue-500"
                aria-current="page"
              >
                <Link href="/" >
                  Home
                </Link>
              </li>
              <li
                onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent" >
                <Link href="/" >
                  About Us
                </Link>
              </li>
              <li
                onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                <Link href="/ordersummary" >
                  Order Summary
                </Link>
              </li>
              <li
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {productsCount > 0 ? (
                  <Link
                    onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
                    href="/ordersummary" >
                    <FaShoppingCart />
                  </Link>
                ) : null}
              </li>
              <li
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
              >
                {productsCount > 0 ? (

                  <Link

                    href="/ordersummary" >
                    {productsCount}
                  </Link>
                ) : null}
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
