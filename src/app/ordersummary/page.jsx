"use client"
import { Button } from 'react-bootstrap';
import { useState, useContext } from 'react';
import { CartContext } from "@/context/CartContext";
import CartProduct  from '@/components/Cart';
import { loadStripe } from "@stripe/stripe-js";
import styles from "./ordersummary.module.css";


const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const OrderSummary = () => {
    let stripePromise;
    const [stripeError, setStripeError] = useState(null);
    const cart = useContext(CartContext);

    const getStripe = async () => {
        if (!stripePromise) {
            stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);
        }
        return stripePromise;
    };

    const goToCheckoutPage = async () => {

        const checkoutOptions = {
            lineItems: cart.items.map(({ price, quantity }) => ({
                price,
                quantity
            })),
            mode: "payment",
            successUrl: `${window.location.origin}/success`,
            cancelUrl: `${window.location.origin}/cancel`
        };

        const stripe = await getStripe();
        const { error } = await stripe.redirectToCheckout(checkoutOptions);

        if (error) setStripeError(error.message);
    };

    if (stripeError) alert(stripeError);

    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);
    return (

        <div className={styles.links}>


            <p className="modal-title">Shopping Cart</p>


            {productsCount > 0 ?
                <>
                    <p className="cart-description">Your Cart:</p>

                    {cart.items.map((currentProduct) => (
                        <CartProduct key={currentProduct.id} product={currentProduct} className="product-item" />
                    ))}

                    <h1 className="total-cost">Total: {cart.getTotalCost()}</h1>
                    <h1 className="total-cost">Total: {cart.getTotalCost().toFixed(2)}</h1>

                    <Button variant="success" onClick={goToCheckoutPage} className="checkout-btn">
                        Checkout
                    </Button>
                </>
                :
                <h1 className="empty-cart-message">Your Cart is Empty!</h1>
            }


        </div>
    );
};

// export default Navbar;
export default OrderSummary;


// function OrderSummary({ product }) {

//     const cart = useContext(CartContext);

//     return (
//         <>
//             <title>{constants.pages.orderSummary}</title>
//             <div>{constants.pages.orderSummary}</div>
//             <h3>{product?.name}</h3>
//             <p>{product?.quantity} total</p>
//             <p>${(product?.quantity * product?.application_price).toFixed(2)}</p>
//             <Form as={Row}>
//                 <Col sm="12">
//                     <Button sm="4" onClick={() => cart.addOneToCart(product?.id, product)} >{constants.application.product?.plus}</Button>
//                     <Button sm="4" onClick={() => cart.removeOneFromCart(product?.id)}   >{constants.application.product?.minus}</Button>
//                     <Button sm="4" variant="danger" onClick={() => cart.deleteFromCart(product?.id)}>{constants.application.removeFromCart}</Button>
//                 </Col>
//             </Form>
//             <hr></hr>
//         </>
//     )
// }

// export default OrderSummary;
