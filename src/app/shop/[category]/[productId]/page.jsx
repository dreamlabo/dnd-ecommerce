'use client'
import { use, useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import style from '../../shop.module.css';
import ProductCardVerticalSmall from "@/app/shop/components/ProductCardVerticalSmall";
import {getProductById} from '../../../../fakeData/helperFunctions/helperFunctions'
import {getProductsByManufacturer} from '../../../../fakeData/helperFunctions/helperFunctions'
import ProductPurchaseCard from "@/app/shop/components/ProductPurchaseCard";
import CartModal from "../../components/CartModal";

export default function ProductPage({params}) {

    const [isCartModalOpen, setIsCartModalOpen] = useState(false);
   

    const product = getProductById(params.productId);
    const productsByManufacturer = getProductsByManufacturer(product.manufacturer, product.productId);
    console.log(productsByManufacturer.length);

    const renderFeatures = () => {
        return product.productDetails.map((detail, index) => {
            const detailParts = detail.split(/:(.*)/);
            return (<li key={index}><span className={style.product_features_list__prefix}>{detailParts[0]}: </span><span className={style.product_features_list__postfix}> {detailParts[1] || ''}</span></li>)
        })
    }

    const renderProductCardsVerticalSmall = () => {
        return productsByManufacturer.map((product) => {
            return (<ProductCardVerticalSmall key={product.name} 
                        id={product.productId}
                        imageUrl={product.productImageUrl}
                        name={product.productName}
                        description={product.productDescription}
                        price={product.productPrice}
                        category={product.category}
                 />)
        })
    }

    const handleAddToCart = () => {
        setIsCartModalOpen(true);
    }

    const handleCloseModal = () => {
        setIsCartModalOpen(false);
    }

  return (
    <main className={style.section_container}>
            <nav>
                <ol className={style.breadcrumbContainer}>
                    <li className={style.list_item}><Link className={style.breadcrumb_link} href="/shop"><span>Shop</span></Link></li>
                    <li className={style.list_item}><Link className={style.breadcrumb_link}href={`/shop/${product.category}`}>{product.category}</Link></li>
                    {/* <li className={style.list_item}>{product.productName}</li> */}
                </ol>
            </nav>
        <section className={style.two_col_grid}>
            <div className={style.product_title_container__mobile}>
                    <span className={style.product_manufacturer}>{product.manufacturer}</span>
                    <h1 className={style.product_name}>{product.productName}</h1>
                </div>
            <div className={style.product_image_container}>
                <Image className={style.product_image}
                src={product.productImageUrl}
                alt={product.productName}
                height={350}
                width={350}
                priority={true}/>
            </div>
            <div className={style.inner_grid}>
                <div className={style.product_title_container}>
                    <span className={style.product_manufacturer}>{product.manufacturer}</span>
                    <h1 className={style.product_name}>{product.productName}</h1>
                </div>
                <div className={style.prod_description_section}>
                    <p className={style.product_description}>
                        {product.productFullDescription}
                    </p>
                </div>
                <div className={style.prod_features_section}>
                    <h2 className={style.product_features_title}>Features</h2>
                    <ul className={style.product_features_list}>
                        {renderFeatures()}
                    </ul>
                </div>
                <ProductPurchaseCard price={product.productPrice}
                                quantityInStock={product.quantityInStock}
                                handleAddToCart={handleAddToCart}/>
            </div>
        </section>
        <section className="py-12">
            <h2 className={style.more_items_by__title}><span>More Items by </span><span className={style.more_items_by__manufacturer}>{product.manufacturer}</span></h2>
            <ul className={style.more_items_by__cards_container}>
                {renderProductCardsVerticalSmall()}
            </ul>
        </section>
        <CartModal isOpen={isCartModalOpen}
                     handleCloseModal={handleCloseModal} />
     
    </main>
  )
}
