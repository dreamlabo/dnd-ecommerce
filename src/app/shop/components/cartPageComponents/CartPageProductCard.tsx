'use client'
import style from '@/app/shop/shop.module.css'
import Image from 'next/image'
import dagger from '../../../assets/images/weapons/dnd-sword-1.jpg'
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

import { useState } from "react"

export default function CartPageProductCard() {
  return (
    <article className={style.cartPage__product_card}>
                        {/* <div className={style.cartPage__product_card__image}> */}
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
                                        <p>1,800gp</p>
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
                    </article>
  )
}
