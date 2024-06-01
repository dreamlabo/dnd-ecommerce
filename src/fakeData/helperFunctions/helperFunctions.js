import {productsData} from '../productsData'

export function getProductById(id){
    const product = productsData.find(product => product.productId === id)
    return product;
}

export function getProductsByManufacturer(manufacturedBy, id) {
    const MAX_ITEMS_TO_RETURN = 4
    
    const productsByManufacturer = productsData.filter(product => (
        product.manufacturer === manufacturedBy && product.productId !== id
    )).slice(0, MAX_ITEMS_TO_RETURN)
          
    return productsByManufacturer;
}

export function getProductsByType(productCategory) {
    console.log(productCategory)
    const productsByType = productsData.filter(product => (
        console.log(product.category),
        product.category === productCategory
    ));

    return productsByType;
}
