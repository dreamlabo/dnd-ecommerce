'use client'
import style from '@/app/shop/shop.module.css'
import {userCart} from "../../../fakeData/userData/userData"
import Image from 'next/image'
import dagger from '../../assets/images/weapons/dnd-sword-1.jpg'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

import CartPageProductCard from '../components/cartPageComponents/CartPageProductCard';

export default function Cart() {
    console.log("cart", userCart)

    const renderProducts = () => {
        return userCart.map(cartItem => {
           
            return <CartPageProductCard key={cartItem.productId}/>
        })

    }
    
  return (
    <main>
        <div className={style.section_container}>
            <div className={style.cart_title_section}>
                <div>
                    <h1>Your shopping cart</h1>
                    <span className={style.cart_subheading} >(9 items)</span>
                </div>
                <div className={style.subtotal_container__mobile}>
                    <span className={style.subtotal_amount}>3,615 gp</span>
                    <span className={style.cart_subheading}>Subtotal</span>
                </div>
            </div>
            <div className={style.checkout_btn__wrapper}>
                <a className={style.btn__continue_shopping} href="">Continue shopping</a>
                <a className={style.btn__checkout} href="">Checkout</a>
            </div>

            <div className={style.cart__wrapper}>
                <div className={style.items_wrapper}>
                    <div className={style.items__header}>
                        <h2>Items</h2>
                    </div>
                {renderProducts()}
                    {/* <article className={style.cartPage__product_card}>
                        <div className={style.image_wrapper}>
                            <Image
                            src={dagger}
                            alt=''
                            width={400} 
                            height={400}/>
                        </div>
                        <div className={style.cartPage__product__inner_grid}>
                            <div className='flex flex-col justify-between'>
                                <div className={style.cartPage__product_card_title}>
                                    <p className={style.cartPage__product_card_title__manufacturer}>Dragonfire Forge</p>
                                    <h3>Emberfang Blade</h3>
                                </div>
                                <div>
                                    <div className={style.cartPage_card__unit_price}>
                                        <h4>Price:</h4>
                                        <p>1,200gp</p>
                                    </div>
                                    <div className={style.btn_inc_dec_quantity__wrapper}>
                                        <button className={style.btn_decrease_quantity}><FaMinus /></button>
                                        <input className={style.input_quantity} type="number" />
                                        <button className={style.btn_increase_quantity}><FaPlus /></button>
                                    </div>
                                </div>
                            </div>
                            <div className={style.cartPage__product__inner_grid__rt_col} >
                                <button className={style.cartPage_btn__remove}>remove</button>
                                <div className={style.cartPage__product_card__subtotal} >
                                    <span>Subtotal</span>
                                    <span>3,600gp</span>
                                </div>
                            </div>
                        </div>
                    </article> */}
                    {/* <article className={style.cartPage__product_card}>
                        <div className={style.image_wrapper}>
                            <Image
                            src={dagger}
                            alt=''
                            width={150} 
                            height={150}/>
                           
                        </div>
                        <div className={style.cartPage__product__inner_grid}>
                            <div className='flex flex-col justify-between'>
                                <div className={style.cartPage__product_card_title}>
                                    <p className={style.cartPage__product_card_title__manufacturer}>Dragonfire Forge</p>
                                    <h3>Emberfang Blade</h3>
                                </div>
                                <div>
                                    <div className={style.cartPage_card__unit_price}>
                                        <h4>Price:</h4>
                                        <p>1,200gp</p>
                                    </div>
                                    <div className={style.btn_inc_dec_quantity__wrapper}>
                                        <button className={style.btn_decrease_quantity}><FaMinus /></button>
                                        <input className={style.input_quantity} type="number" />
                                        <button className={style.btn_increase_quantity}><FaPlus /></button>
                                    </div>
                                </div>
                            </div>
                            <div className={style.cartPage__product__inner_grid__rt_col} >
                                <button className={style.cartPage_btn__remove}>remove</button>
                                <div className={style.cartPage__product_card__subtotal} >
                                    <span>Subtotal</span>
                                    <span>3,600gp</span>
                                </div>
                            </div>
                        </div>
                    </article> */}
                    {/* <article className={style.cartPage__product_card}>
                        <div className={style.image_wrapper}>
                            <Image
                            src={dagger}
                            alt=''
                            width={150} 
                            height={150}/>
                        </div>
                        <div className={style.cartPage__product__inner_grid}>
                            <div className='flex flex-col justify-between'>
                                <div className={style.cartPage__product_card_title}>
                                    <p className={style.cartPage__product_card_title__manufacturer}>Dragonfire Forge</p>
                                    <h3>Emberfang Blade</h3>
                                </div>
                                <div>
                                    <div className={style.cartPage_card__unit_price}>
                                        <h4>Price:</h4>
                                        <p>1,200gp</p>
                                    </div>
                                    <div className={style.btn_inc_dec_quantity__wrapper}>
                                        <button className={style.btn_decrease_quantity}><FaMinus /></button>
                                        <input className={style.input_quantity} type="number" />
                                        <button className={style.btn_increase_quantity}><FaPlus /></button>
                                    </div>
                                </div>
                            </div>
                            <div className={style.cartPage__product__inner_grid__rt_col} >
                                <button className={style.cartPage_btn__remove}>remove</button>
                                <div className={style.cartPage__product_card__subtotal} >
                                    <span>Subtotal</span>
                                    <span>3,600gp</span>
                                </div>
                            </div>
                        </div>
                    </article> */}
                </div>
                <div className={style.cart_summary__wrapper}>
                    <div className={style.items__header}>
                        <h2>Order Summary</h2>
                    </div>
                    <div className={style.order_summary__container}>
                        <div className={style.order_summary__flex_container}  >
                            <h3>Subtotal</h3>
                            <p>3,600 gp</p>
                        </div>
                        <div className={style.order_summary__flex_container}>
                            <h3>Arcane Fee</h3>
                            <p>15 gp</p>
                        </div>
                        <div className={style.order_summary__flex_container}>
                            <h3>Order Total</h3>
                            <p>3,615 gp</p>
                        </div>
                        <button className={style.btn__checkout}>Checkout</button>
                    </div>
                </div>
            </div>
        </div>

    </main>
  )
}
