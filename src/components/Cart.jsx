import { Button, Form, Row, Col } from 'react-bootstrap';
import { CartContext } from "@/context/CartContext";
import { useContext } from "react";
import constants from '@/utils/constants';

function CartProduct({ product }) {

    const cart = useContext(CartContext);

    return (
        <>
            <h3>{product.name}</h3>
            <p>{product.quantity} total</p>
            <p>${(product.quantity * product.application_price).toFixed(2)}</p>
            <Form as={Row}>
                <Col sm="12">
                    <Button sm="4" onClick={() => cart.addOneToCart(product.id, product)} >{constants.application.product.plus}</Button>
                    <Button sm="4" onClick={() => cart.removeOneFromCart(product.id)}   >{constants.application.product.minus}</Button>
                    <Button sm="4" variant="danger" onClick={() => cart.deleteFromCart(product.id)}>{constants.application.removeFromCart}</Button>
                </Col>
            </Form>
            <hr></hr>
        </>
    )
}

export default CartProduct;