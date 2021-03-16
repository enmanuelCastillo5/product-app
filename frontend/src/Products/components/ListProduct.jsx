import React, { useState, useEffect } from 'react'
import Loading from "./Loading";
import { getProducts } from "../services";


const ListProduct = () => {
    const [ isLoading, setIsLoading ] = useState(true);
    const [ products, setProducts ] = useState([]);

    useEffect(() => {
        const loadProduct = async () => {
            const response = await getProducts()

            if (response.status === 200) {
                setProducts(response.data)
            }

            setIsLoading(false)
        }
        loadProduct();
    }, [])

    if (isLoading) {
        return <Loading />
    }

    if (!products.length) {
        return <h2 className='title has-text-centered has-text-danger'>you don't have products</h2>
    }
    return (
        <h3 className='title has-text-centered has-text-primary'>Mostrar productos</h3>
    )
}

export default ListProduct
