import axios from "axios";
const baseUrl = process.env.REACT_APP_BASE_URL

export const getProducts = async () => {
    try {
       const res = await axios.get(`${baseUrl}/products`)
       console.log(res.data)
        return res
    } catch (error) {
        console.log(error)
    }
}

