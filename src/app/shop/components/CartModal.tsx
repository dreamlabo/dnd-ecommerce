'use client'
import { useState } from "react";
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";

import CartProductCard from "./cart/CartProductCard";
import {userCart} from "../../../fakeData/userData/userData"

type CartModalProps = {
    isOpen: boolean;
    handleCloseModal: () => void;
}

export default function CartModal({isOpen, handleCloseModal}: CartModalProps) {
    // if(!isOpen) {
    //     return null;
    // }

    const [reRender, setReRender] = useState(false);
    const [isCartEmpty, setIsCartEmpty] = useState(false)
    const removeFromCart = (id: string) => {
        const indexToRemove = userCart.findIndex(item => item.productId === id)
        
        if(indexToRemove !== -1) {
            userCart.splice(indexToRemove, 1);
            setReRender(!reRender)  
        }

        if (userCart.length < 1) {
            // handleCloseModal();
            setIsCartEmpty(true);
        }
    }

    const handleCartItemQuantityUpdate = (itemId: string,  updatedQuantity: number ) => {
        userCart.map(item => {
            console.log(item.productId === itemId)
            if (item.productId === itemId) {
               item.quantityInCart = updatedQuantity;
            }
        })
        setReRender(!reRender)
        console.log(userCart)
    }

    const renderCartProductCards = () => {
        userCart.sort((first, second) => second.dateAddedToCart - first.dateAddedToCart)
        return userCart.map(product => {
            return (
                <CartProductCard  key={product.productId}
                id={product.productId}
                    imageUrl={product.imageUrl}
                    name={product.productName}
                    quantity={product.quantityInCart}
                    price={product.productPrice}
                    manufacturer={product.manufacturer}
                    updateItemQuantity={handleCartItemQuantityUpdate}
                    removeFromCart={removeFromCart}
                />
            )
        })
    }

    const renderItemAmount = () => {
        const totalItemsInCart = userCart.reduce((totalItems, item) => 
            totalItems + item.quantityInCart, 0
        )

        if(totalItemsInCart === 0) {
            return "Your Cart"
        }

        if(totalItemsInCart === 1) {
            return `${totalItemsInCart} item`;
        } else {
            return `${totalItemsInCart} items`;
        }  
    }

    const getSubtotalOfItems = () => {
        const subTotal = userCart.reduce((total, item) => total + (item.quantityInCart * item.productPrice) , 0)
        return subTotal.toLocaleString()
    }

    return (
        <>
            <div onClick={handleCloseModal} className="modal_overlay"></div>
            <div role="dialog" aria-modal="true" className="modal-wrapper">
                {isCartEmpty ? 
                    (
                        <div className="modal_container">
                            <div className="flex justify-between items-center cart_top_container">
                                <span className="cart_header__items" >{renderItemAmount()}</span>
                                <button onClick={handleCloseModal} className="modal_btn__close"><IoCloseOutline /></button>
                            </div>
                            <div className="modal_container__cart_empty">
                                <p >Your cart is empty</p>
                                <button>Continue Shopping</button>
                            </div>
                          
                        </div>
                    )
                    : 
                    (<div className="modal_container">
                        <div className="flex justify-between items-center cart_top_container">
                            <span className="cart_header__items" >{renderItemAmount()}</span>
                            <button onClick={handleCloseModal} className="modal_btn__close"><IoCloseOutline /></button>
                        </div>
        
                        <div className="cart_products_container">
                            {renderCartProductCards()}
                        </div>
                        <div className="cart_bottom_wrapper">
                            <div className="w-full">
                                <p className="cart_bottom_subtotal__container" >
                                    <span>Subtotal</span>
                                    <span>{getSubtotalOfItems()} gp</span>
                                </p>
                                <Link className="cart_btn__checkout" href="/">Checkout</Link>
                            </div>
                        </div>
                    </div>
                    )
                }  
            </div>   
        </>
    )
}
