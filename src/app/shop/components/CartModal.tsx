'use client'
import Link from "next/link";
import { IoCloseOutline } from "react-icons/io5";
import Image from "next/image";
import Sword from '../../assets/images/weapons/dnd-sword-1.jpg'

type CartModalProps = {
    isOpen: boolean;
    handleCloseModal: () => void;

}
export default function CartModal({isOpen, handleCloseModal}: CartModalProps) {
  if(!isOpen) {
    return null;
  }
    return (
    <>
    <div onClick={handleCloseModal} className="modal_overlay"></div>
    <div role="dialog" aria-modal="true" className="modal-wrapper">
        <div className="modal_container">
            <div className="flex justify-between items-center cart_top_container">
                <span className="cart_header__items" >5 Items</span>
                <button onClick={handleCloseModal} className="modal_btn__close"><IoCloseOutline /></button>
            </div>
            <div className="cart_products_container">
                <div className="cart_product_card">
                    <Image 
                        src={Sword}
                        alt="product-name"
                        height={125}
                        width={125}
                    />
                    <div className="w-full flex flex-col" >
                        <div className="flex justify-between align-start max-[300px]:flex-wrap" >
                            <div>
                                <span className="cart_company">Dragonfire Forge</span>
                                <h2 className="cart_Product__name">Emberfang Blade</h2>
                            </div>
                            <button className="cart_btn__remove">Remove</button>   
                        </div>
                        <div className="cart_product_bottom_container">
                            <div>
                                <label className="cart_label__quantity" htmlFor="">Quantity</label>
                                <select className="cart_quantity__select" name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                            <p className="cart_price_of_product" >750gp</p>
                        </div>
                    </div>
                </div>
                <div className="cart_product_card">
                    <Image 
                        src={Sword}
                        alt="product-name"
                        height={125}
                        width={125}
                    />
                    <div className="w-full flex flex-col" >
                        <div className="flex justify-between align-start max-[300px]:flex-wrap" >
                            <div>
                                <span className="cart_company">Dragonfire Forge</span>
                                <h2 className="cart_Product__name">Emberfang Blade</h2>
                            </div>
                            <button className="cart_btn__remove">Remove</button>   
                        </div>
                        <div className="cart_product_bottom_container">
                            <div>
                                <label className="cart_label__quantity" htmlFor="">Quantity</label>
                                <select className="cart_quantity__select" name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                            <p className="cart_price_of_product" >750gp</p>
                        </div>
                    </div>
                    
                </div>
                <div className="cart_product_card">
                    <Image 
                        src={Sword}
                        alt="product-name"
                        height={125}
                        width={125}
                    />
                    <div className="w-full flex flex-col" >
                        <div className="flex justify-between align-start max-[300px]:flex-wrap" >
                            <div>
                                <span className="cart_company">Dragonfire Forge</span>
                                <h2 className="cart_Product__name">Emberfang Blade</h2>
                            </div>
                            <button className="cart_btn__remove">Remove</button>   
                        </div>
                        <div className="cart_product_bottom_container">
                            <div>
                                <label className="cart_label__quantity" htmlFor="">Quantity</label>
                                <select className="cart_quantity__select" name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                            <p className="cart_price_of_product" >750gp</p>
                        </div>
                    </div>
                    
                </div>
                <div className="cart_product_card">
                    <Image 
                        src={Sword}
                        alt="product-name"
                        height={125}
                        width={125}
                    />
                    <div className="w-full flex flex-col" >
                        <div className="flex justify-between align-start max-[300px]:flex-wrap" >
                            <div>
                                <span className="cart_company">Dragonfire Forge</span>
                                <h2 className="cart_Product__name">Emberfang Blade</h2>
                            </div>
                            <button className="cart_btn__remove">Remove</button>   
                        </div>
                        <div className="cart_product_bottom_container">
                            <div>
                                <label className="cart_label__quantity" htmlFor="">Quantity</label>
                                <select className="cart_quantity__select" name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                            <p className="cart_price_of_product" >750gp</p>
                        </div>
                    </div>
                    
                </div>
                <div className="cart_product_card">
                    <Image 
                        src={Sword}
                        alt="product-name"
                        height={125}
                        width={125}
                    />
                    <div className="w-full flex flex-col" >
                        <div className="flex justify-between align-start max-[300px]:flex-wrap" >
                            <div>
                                <span className="cart_company">Dragonfire Forge</span>
                                <h2 className="cart_Product__name">Emberfang Blade</h2>
                            </div>
                            <button className="cart_btn__remove">Remove</button>   
                        </div>
                        <div className="cart_product_bottom_container">
                            <div>
                                <label className="cart_label__quantity" htmlFor="">Quantity</label>
                                <select className="cart_quantity__select" name="" id="">
                                    <option value="">1</option>
                                    <option value="">2</option>
                                    <option value="">3</option>
                                </select>
                            </div>
                            <p className="cart_price_of_product" >750gp</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="cart_bottom_wrapper">
               <div className="w-full">
                    <p className="cart_bottom_subtotal__container" >
                        <span>Subtotal</span>
                        <span>1,200gp</span>
                    </p>
                    <Link className="cart_btn__checkout" href="/">Checkout</Link>
                </div>
            </div>

        </div>

        
    </div>
    </>
  )
}
