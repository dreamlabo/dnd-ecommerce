import Image from "next/image";

import Dagger from "../../../../../../public/weapons/dnd-dagger-1.jpg";
import style from '../../../shop.module.css';
import { IoShieldCheckmarkOutline } from "react-icons/io5";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import ProductCardVerticalSmall from "@/app/shop/components/ProductCardVerticalSmall";


import {getProductById} from '../../../../../fakeData/helperFunctions/helperFunctions'
export default function ProductPage({params}) {

    const product = getProductById(params.productId);
    console.log(product)

    

  return (
    <main className={style.section_container}>
        <section className={style.two_col_grid}>
        <div className={style.product_title_container__mobile}>
                    <span className={style.product_manufacturer}>{product.manufacturer}</span>
                    <h1 className={style.product_name}>{product.productName}</h1>
                </div>
            <div className={style.product_image_container}>
                <Image className={style.product_image}
                src={product.productImageUrl}
                alt=""
                height={350}
                width={350}/>
            </div>
            <div className={style.inner_grid}>
                <div className={style.product_title_container}>
                    <span className={style.product_manufacturer}>{product.manufacturer}</span>
                    <h1 className={style.product_name}>{product.productName}</h1>
                </div>

                <div className={style.prod_description_section}>
                    <p className={style.product_description}>
                        The Shadowstrike Dagger is a sleek and 
                        deadly weapon, perfect for rogues and 
                        assassins. Crafted from obsidian and 
                        enchanted with shadow magic, its blade 
                        absorbs light, making it nearly invisible 
                        in darkness. The hilt is wrapped in dark 
                        leather, providing a comfortable and 
                        secure grip. This dagger grants a +1 
                        bonus to attack rolls and deals an 
                        additional 1d4 necrotic damage on a 
                        successful hit. Silent and swift, the 
                        Shadowstrike Dagger is the ultimate tool 
                        for those who move unseen and strike 
                        without warning.
                    </p>
                </div>

                <div className={style.prod_features_section}>
                    <h2 className={style.product_features_title}>Features</h2>
                    <ul className={style.product_features_list}>
                        <li><span className={style.product_features_list__prefix}>Enchanted Obsidian Blade:</span><span className={style.product_features_list__postfix}> Forged from rare obsidian and imbued with shadow magic, the blade absorbs light and remains nearly invisible in darkness, enhancing stealth.</span></li>
                        <li><span className={style.product_features_list__prefix}>Enhanced Attack Bonus:</span><span className={style.product_features_list__postfix}> Provides a +1 bonus to attack rolls, increasing your chances of landing a successful hit.</span></li>
                        <li><span className={style.product_features_list__prefix}>Necrotic Damage:</span><span className={style.product_features_list__postfix}> Deals an additional 1d4 necrotic damage on a successful hit, sapping the life force of your enemies.</span></li>
                        <li><span className={style.product_features_list__prefix}>Ergonomic Leather Hilt:</span><span className={style.product_features_list__postfix}> Wrapped in dark leather for a comfortable and secure grip, ensuring precise control during combat.</span></li>
                        <li><span className={style.product_features_list__prefix}>Lightweight Design:</span><span className={style.product_features_list__postfix}> Easy to conceal and quick to draw, perfect for rogues, assassins, and those who prefer agility and speed in combat.</span></li>
                        <li><span className={style.product_features_list__prefix}>Silent Strikes:</span><span className={style.product_features_list__postfix}> Designed for silent and swift attacks, ideal for those who need to move unseen and strike without warning.</span></li>
                        <li><span className={style.product_features_list__prefix}>Exquisite Craftsmanship:</span><span className={style.product_features_list__postfix}> Handcrafted at Dragonfire Forge, renowned for its unparalleled quality and attention to detail.</span></li>
                    </ul>
                </div>
            
           
                <div className={style.product_purchase__container}>
                    <span className={style.product_price}>{product.productPrice?.toLocaleString()} gp</span>
                    <span className={style.product_status}>In Stock</span>
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
                        <button className={style.product_add_to_wish_list_btn}> Add to Wish List</button>
                    </div>
                </div>
            </div>
          

        </section>
        <section className="py-12">
            <h2 className={style.more_items_by__title}><span>More Items by </span><span className={style.more_items_by__manufacturer}>Dragonfire Forge</span></h2>
            <div className={style.more_items_by__cards_container}>
                <ProductCardVerticalSmall/>
                <ProductCardVerticalSmall/>
                <ProductCardVerticalSmall/>
                <ProductCardVerticalSmall/>
            </div>
        </section>
    </main>
  )
}
