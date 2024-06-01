import Image from "next/image";
import style from '../../../shop.module.css';
import ProductCardVerticalSmall from "@/app/shop/components/ProductCardVerticalSmall";
import {getProductById} from '../../../../../fakeData/helperFunctions/helperFunctions'
import {getProductsByManufacturer} from '../../../../../fakeData/helperFunctions/helperFunctions'
import ProductPurchaseCard from "@/app/shop/components/ProductPurchaseCard";

export default function ProductPage({params}) {

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
                                quantity={product.quantity}/>
            </div>
        </section>
        <section className="py-12">
            <h2 className={style.more_items_by__title}><span>More Items by </span><span className={style.more_items_by__manufacturer}>{product.manufacturer}</span></h2>
            <div className={style.more_items_by__cards_container}>
                {renderProductCardsVerticalSmall()}
            </div>
        </section>
    </main>
  )
}
