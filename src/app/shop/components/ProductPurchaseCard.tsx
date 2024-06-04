'use client'
import style from '../shop.module.css';
import { use, useState } from 'react';
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

type ProductPurchaseCardProps = {
    price: number;
    quantityInStock: number;
    handleAddToCart: () => void;
}

export default function ProductPurchaseCard({price, quantityInStock, handleAddToCart } : ProductPurchaseCardProps) {
    const MAX_SELECT_ELEMENTS = 20;
  
    const [purchaseQuantity, setPurchaseQuantity] = useState(1);
    // const [subTotal, setSubtotal] = useState(price)

    const LOW_STOCK_THRESHOLD = 3;

    const handleSelectOnChange = (event: React.FormEvent<HTMLSelectElement>) => {
        event.preventDefault();
        setPurchaseQuantity(parseInt(event.currentTarget.value))
    }

    const renderSubTotal = () => {
            return (purchaseQuantity * price).toLocaleString();
    }

    const renderCorrectItemString = () => {
            return purchaseQuantity > 1 ? "items" : "item"
    }

    const renderOptions = () => {
        const maxOptions = Math.min(quantityInStock, MAX_SELECT_ELEMENTS)
        const options = [];
        for(let i = 1; i <= maxOptions; i++) {
            options.push(<option key={i} value={i}>{i}</option>)
        }
        return options;
    }
    
    const renderInStock = () => {
        if (quantityInStock === 0) {
            return (
                <>
                    <span className={style.quantity_status_out_of_stock}>Currently unavailable.</span>
                    <div className={style.checkbox_container}>
                        <input className={style.checkbox_notify} type="checkbox" id="notifyInStock" name="notifyInStock" />
                        <label className={style.checkbox_notify__label} htmlFor="notifyInStock">Notify me when it is back in stock.</label>
                    </div>
                    <button className={style.product_add_to_wish_list_btn}>Add to Wish List</button>
                </>
            )
        }
        else if(quantityInStock <= LOW_STOCK_THRESHOLD && quantityInStock > 0) {
            return (
                <span className={style.quantity_status_low}>Only {quantityInStock} left in stock - order soon.</span>
            )
        }
        else {
            return (
                <span className={style.quantity_status_in_stock}>In stock</span>
            )
        }
    }

  return (
    <div className={style.product_purchase__container}>
        {quantityInStock > 0 && 
                <span className={style.product_price}>{price?.toLocaleString()} gp</span>
        }
        {renderInStock()}
        {quantityInStock > 0 &&
                    <div>
                        <div className="py-2">
                            <label className={style.product_quantity__label} htmlFor="">Quantity:</label>
                            <select className={style.product_quantity__select} defaultValue={purchaseQuantity}  onChange={handleSelectOnChange} name="cart_quantity" id="">
                                {renderOptions()}
                            </select>
                        </div>
                        <div className="py-2">
                            <span className={style.product_subtotal__label}>Subtotal ({purchaseQuantity} {renderCorrectItemString()}):</span><span className={style.product_subtotal__amount}>{renderSubTotal()}gp</span>
                        </div>
                        <div className="pt-2 pb-1">
                            <div className={style.product_purchase_details__container}>
                                <span className={style.product_purchase__icon}><IoMdCheckmarkCircleOutline /></span>
                                <span className={style.product_purchase_details}>Money Back Guarantee</span>
                            </div>
                            <div className={style.product_purchase_details__container}>
                                <span className={style.product_purchase__icon}><IoShieldCheckmarkOutline /></span>
                                <span className={style.product_purchase_details}>12 Month Limited Warranty</span>
                            </div>
                        </div>
                        <div className="pt-4">
                            <button onClick={handleAddToCart} className={style.product_add_to_cart_btn}>Add to Cart</button>
                            <button className={style.product_add_to_wish_list_btn}>Add to Wish List</button>
                        </div>
                    </div>
        }
    </div>
  )
}
