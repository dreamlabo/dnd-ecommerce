import style from '@/app/shop/shop.module.css'
import ProductCardSmall from '../../components/ProductCardSmall'

import {weaponsData} from "../../../../fakeData/weaponsData"

export default function ShopCategory({params}) {

    const renderCards = weaponsData.map(weapon => {
        return (
            <ProductCardSmall key={weapon.id} 
                productId={weapon.productId}
                productName={weapon.productName}
                productDescription={weapon.productDescription}
                productImageUrl={weapon.productImageUrl}
                productPrice={weapon.productPrice}
                manufacturer={weapon.manufacturer}
            />
        )
    })

  return (
    <div className={style.section_wrapper}>
        <section className={style.section_container}>
            <div className={style.heading_container}>
                <h1>Weapons</h1>
            </div>
            <div className={style.product_cards_small__wrapper}>
                {renderCards}
            </div>
        </section>
    </div>
  )
}
