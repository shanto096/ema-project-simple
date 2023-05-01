import { getShoppingCart } from "../Component/fakeDb/FakeDb";

const loder = async() => {
    const loderProduct = await fetch("https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json");
    const product = await loderProduct.json()


    const storeCart = getShoppingCart();
    const saveCart = [];
    for (const id in storeCart) {
        const addProduct = product.find(pd => pd.id === id)
        if (addProduct) {
            const quantity = storeCart[id]
            addProduct.quantity = quantity;
            saveCart.push(addProduct)

        }
    }
    return saveCart
}

export default loder;