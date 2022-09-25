export async function loadProducts() {
    const res = await fetch('https://bench-api-backend.herokuapp.com/products')
    const data = await res.json()

    return data
}

export const getPaths = async () => {
    const res = await fetch('https://bench-api-backend.herokuapp.com/products')
    const data = res.json()

    return data
}

export const getProductDetails = async (context) => {
    const id = context.params.id
    const res = await fetch(`https://bench-api-backend.herokuapp.com/products/${id}`)
    const data = await res.json()

    return data
}