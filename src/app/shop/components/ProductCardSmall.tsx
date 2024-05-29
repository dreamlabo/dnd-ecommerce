import Image from "next/image"
import Link from "next/link"
import { FaCircleArrowRight } from "react-icons/fa6";
import style from "@/app/shop/shop.module.css"

type ProductCardSmallProps = {
  productName: string;
  productDescription: string;
  productPrice: number;
  productImageUrl: string;
  productId: string;
  manufacturer: string;
}

export default function ProductCardSmall({productName, productDescription, productPrice, productImageUrl, productId, manufacturer}: ProductCardSmallProps) {
  return (
    <div className={style.product_card_small_wrapper}>
      {/* card */}
      <div className={style.product_card_small_container}>
        <Image
        className={style.product_image}
        src={productImageUrl}
        alt={productName}
        width={150}
        height={150}/>

        <div className={style.card_small__text_container}>
          <div>
            <h2 className={style.card_small__title}>{productName}</h2>
            <span className={style.small_card__manufacturer}>by Dragonfire Forge</span>
          </div>

          <p className={style.card_small__description}>{productDescription}</p>
          <div className={style.card_small__btm_container}>
            <span className={style.card_small__price}>{productPrice?.toLocaleString()} gp</span>
            <Link className={style.card_small__link_wrapper}
              href={`/shop/category/weapons/${productId}`}>
                <span>More Info</span>
                <div className={style.card_small__icon}>
                <FaCircleArrowRight />
                </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
