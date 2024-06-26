import style from '@/app/shop/shop.module.css'
import Link from 'next/link';
import ProductCardSmall from '../components/ProductCardSmall'

import {getProductsByType} from "../../../fakeData/helperFunctions/helperFunctions"

export default function ShopCategory({params}) {
    const productsToDisplay =  getProductsByType(params.category);
    console.log(params.category)

    const renderCards = productsToDisplay.map(product => {
        return (
            <ProductCardSmall key={product.id + "_" + product.name} 
                productId={product.productId}
                productName={product.productName}
                productDescription={product.productDescription}
                productImageUrl={product.productImageUrl}
                productPrice={product.productPrice}
                manufacturer={product.manufacturer}
            />
        )
    })

  return (
    <div className={style.section_wrapper}>
        <section className={style.section_container}>
            <nav>
                <ol className={style.breadcrumbContainer}>
                    <li><Link className={style.breadcrumb_link}href="/shop">Shop</Link></li>
                </ol>
            </nav>
            <div className={style.heading_container}>
                <h1>{params.category}</h1>
            </div>
            <ul className={style.product_cards_small__wrapper}>
                {renderCards}
            </ul>
        </section>
    </div>
  )
}