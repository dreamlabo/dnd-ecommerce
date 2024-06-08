'use client'
import Image from "next/image"
import { useState } from 'react';

type CartProductCardProps = {
    id: string;
    imageUrl: string;
    name: string;
    manufacturer: string,
    price: number;
    quantity: number;
    updateItemQuantity: (id: string, updatedQuantity: number) => void,
    removeFromCart: (id: string) => void,
}

export default function CartProductCard({id, imageUrl, name, manufacturer, price, quantity, updateItemQuantity, removeFromCart } : CartProductCardProps) {
  const [purchaseQuantity, setPurchaseQuantity] = useState(quantity);

  const updateQuantity = (event: React.FormEvent<HTMLSelectElement>) => {
        event.preventDefault();
        setPurchaseQuantity(parseInt(event.currentTarget.value));
        updateItemQuantity(id, parseInt(event.currentTarget.value));
  }
    return (
    <div className="cart_product_card">
                    <Image 
                        src={imageUrl}
                        alt="product-name"
                        height={125}
                        width={125}
                    />
                    <div className="w-full flex flex-col" >
                        <div className="flex justify-between align-start max-[300px]:flex-wrap" >
                            <div>
                                <span className="cart_company">{manufacturer}</span>
                                <h2 className="cart_Product__name">{name}</h2>
                            </div>
                            <button onClick={() => {removeFromCart(id)}} className="cart_btn__remove">Remove</button>   
                        </div>
                        <div className="cart_product_bottom_container">
                            <div>
                                <label className="cart_label__quantity" htmlFor="">Quantity</label>
                                <select defaultValue={purchaseQuantity} onChange={updateQuantity} className="cart_quantity__select" name="" id="">
                                    <option value={1}>1</option>
                                    <option value={2}>2</option>
                                    <option value={3}>3</option>
                                    <option value={4}>4</option>
                                    <option value={5}>5</option>
                                </select>
                            </div>
                            <p className="cart_price_of_product" >{price?.toLocaleString()} gp</p>
                        </div>
                    </div>
                </div>
  )
}
