import {weaponsData} from '../weaponsData'

export function getProductById(id){
    const product = weaponsData.find(weapon => weapon.productId === id)
    return product;

}