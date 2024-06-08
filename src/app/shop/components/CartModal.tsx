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

    const [reRender, setReRender] = useState(false)

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
                />
            )
        })
    }

    const renderItemAmount = () => {
        const totalItemsInCart = userCart.reduce((totalItems, item) => 
            totalItems + item.quantityInCart, 0
        )

        if(totalItemsInCart < 1) return null

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
                    <div className="modal_container">
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
            </div>
        </>
    )
}
