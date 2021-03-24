import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL

export const getProducts = async () => {
    try {
       const res = await axios.get(`${baseUrl}/products`)
        return res
    } catch (error) {
        console.log(error)
    }
}

export const deleteProduct = async (id) => {
    try {
        const res = await axios.delete(`${baseUrl}/products/${id}`)
        return res
    } catch (error) {
        console.log(error)
    }
}

export const saveProduct = async (productData) => {
    try {
        console.log(productData)
        const formData = new FormData();
        formData.append('name', productData.name)
        formData.append('unitaryPrice', productData.unitaryPrice)
        formData.append('size', productData.size)
        formData.append('description', productData.description)
        formData.append('image', productData.image)

        const response = await axios({
            url: `${baseUrl}/products`,
            method: 'POST',
            data: formData
        })

        return response
    } catch (error) {
        console.log(error)
    }
}

