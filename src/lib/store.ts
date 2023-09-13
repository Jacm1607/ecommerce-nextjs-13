export const getProductStore = () => {
    let product = localStorage.getItem('products')
    return JSON.parse(`${product}`);
}

export const getProductStore1 = () => {
    let product = localStorage.getItem('products')
    JSON.parse(`${product}`);
}

export const  addProductStore = (product:any, q:any) => {
    product.cantidad = q;
    console.log(product)
    let productsStore = getProductStore();
    if (!productsStore) {
        localStorage.setItem('products', '[]')
    }
    const iStore = productsStore.findIndex((productStore:any) => productStore.id === product.id);
    console.log(iStore);
    
    if (iStore !== -1) {
      productsStore[iStore] = product;
    } else {
      productsStore.push(product)
    }
    localStorage.setItem('products', JSON.stringify(productsStore))
}

export const removeProductStore = (idProduct:any) => {
    const products = getProductStore();
    let _product = products.filter((product: any) => product.id != idProduct);
    localStorage.setItem('products', JSON.stringify(_product));
}
