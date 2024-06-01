import style from './shop.module.css';
import Link from "next/link"
import Image from 'next/image';
import Weapons from '../assets/images/main/dnd-weapons-store-1.png'
export default function Shop() {
  return (
    <div className={style.section_wrapper}>
        <section className={style.section_container}>
            <div className={style.heading_container}>
                <h1 className=''>Categories</h1>
            </div>
            <div className={style.cards_container}>
                
                <Link className={style.card_container} href="/shop/category/weapons">
                    <Image  className={style.image}
                    src={Weapons}
                    alt="" 
                    width={300}
                    height={300}/>
                    <span>Weapons</span>
                </Link>

                <Link 
                href="/shop/category/equipment"
                className={style.card_container}>
                    <Image  className={style.image}
                    src={Weapons}
                    alt="" 
                    width={300}
                    height={300}/>
                    <span>Equipment</span>
                </Link>
                {/* <Link className={style.card_container} href="/">
                    <Image  className={style.image}
                    src={Weapons}
                    alt="" 
                    width={300}
                    height={300}/>
                    <span>Equipment</span>
                </Link> */}

            </div>
            
            </section>
    </div>
    
  )
}

