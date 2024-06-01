'use client'
import style from '../shop.module.css';
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

type ProductPurchaseCardProps = {
    price: number;
    quantity: number;
}

export default function ProductPurchaseCard({price, quantity} : ProductPurchaseCardProps) {
const LOW_STOCK_THRESHOLD = 3;

    const renderInStock = () => {
        if (quantity === 0) {
            return (
                <>
                    <span className={style.quantity_status_out_of_stock}>Currently unavailable.</span>
                    <div className={style.checkbox_container}>
                        {/* <input className={style.checkbox_notify_i} type="checkbox" id="notifyInStock" name="notifyInStock" /> */}
                        <input className={style.checkbox_notify} type="checkbox" id="notifyInStock" name="notifyInStock" />
                        <label className={style.checkbox_notify__label} htmlFor="notifyInStock">Notify me when it is back in stock.</label>
                    </div>
                    <button className={style.product_add_to_wish_list_btn}>Add to Wish List</button>
                </>
            )
        }
        else if(quantity <= LOW_STOCK_THRESHOLD && quantity > 0) {
            return (
                <span className={style.quantity_status_low}>Only {quantity} left in stock - order soon.</span>
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
        {quantity > 0 && 
                <span className={style.product_price}>{price?.toLocaleString()} gp</span>
        }
        {renderInStock()}
        {quantity > 0 &&
                    <div>
                        <div className="py-2">
                            <label className={style.product_quantity__label} htmlFor="">Quantity:</label>
                            <select className={style.product_quantity__select} name="" id="">
                                <option className={style.product_quantity__option} value="">1</option>
                                <option value="">2</option>
                                <option value="">3</option>
                                <option value="">4</option>
                            </select>
                        </div>
                        <div className="py-2">
                            <span className={style.product_subtotal__label}>Subtotal (1 item):</span><span className={style.product_subtotal__amount}>750gp</span>
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
                            <button className={style.product_add_to_cart_btn}>Add to Cart</button>
                            <button className={style.product_add_to_wish_list_btn}>Add to Wish List</button>
                        </div>
                    </div>
        }
    </div>
  )
}
