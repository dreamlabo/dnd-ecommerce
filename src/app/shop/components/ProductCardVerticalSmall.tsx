import Image from "next/image";
import Link from "next/link";
import { FaCircleArrowRight } from "react-icons/fa6";
import Dagger from "../../../../public/weapons/dnd-dagger-1.jpg"
import style from "../shop.module.css"
type ProductCardVerticalSmallProps = {
    id: string;
    imageUrl: string;
    name: string;
    description: string;
    price: number;
    category: string;
    manufacturer: string;
}

export default function ProductCardVerticalSmall({id, imageUrl, name, description, price, category}: ProductCardVerticalSmallProps ) {
  return (
        <div className={style.vertical_product_card}>
            <Image
            src={imageUrl}
            alt=""
            height={300}
            width={300}/>
            <div className={style.vertical_product_card__info_wrapper}>
                <h3 className={style.vertical_product_card__name}>{name}</h3>
                <p className={style.vertical_product_card__description}>{description}</p>
                <div  className={style.vertical_product_card__bottom} >
                    <span className={style.vertical_product_card__price} >{price}gp</span>
                    <Link
                        className={style.vertical_product_card__link}
                        href={`/shop/category/${category}/${id}`}>
                        <FaCircleArrowRight />
                    </Link>
                </div>
            </div>
        </div> 
  )
}
