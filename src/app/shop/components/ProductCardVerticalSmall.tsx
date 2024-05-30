import Image from "next/image";
import Link from "next/link";
import { FaCircleArrowRight } from "react-icons/fa6";
import Dagger from "../../../../public/weapons/dnd-dagger-1.jpg"
import style from "../shop.module.css"
type ProductCardVerticalSmallProps = {
    productId: string;
    imageUrl: string;
    productName: string;
    productDescription: string;
    productPrice: number;
    productType: string;
    productManufacturer: string;
}

export default function ProductCardVerticalSmall(props: ProductCardVerticalSmallProps ) {
  return (
   
        <div className={style.vertical_product_card}>
            <Image
            src={Dagger}
            alt=""
            height={300}
            width={300}/>
            <div className={style.vertical_product_card__info_wrapper}>
                <h3 className={style.vertical_product_card__name}>Shadowstrike Dagger</h3>
                <p className={style.vertical_product_card__description}>A sleek and deadly weapon, perfect for rogues and assassins.</p>
                <div  className={style.vertical_product_card__bottom} >
                    <span className={style.vertical_product_card__price} >750gp</span>
                    <Link
                        className={style.vertical_product_card__link}
                        href="">
                        <FaCircleArrowRight />
                    </Link>
                </div>
            </div>
        </div>
   
  )
}
