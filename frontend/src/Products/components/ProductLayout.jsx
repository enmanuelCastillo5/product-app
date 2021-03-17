import React, { useState, useEffect } from 'react'
import { Modal, Container } from "react-bulma-components";
import Header from './Header'
import AddButton from "./AddButton";
import Loading from "./Loading";
import ListProduct from "./ListProduct";
import Form from "./Form";
import { getProducts, saveProduct } from "../services";

const ProductLayout = () => {
    const [ isModalOpen, setIsModalOpen] = useState(false);
    const [ isLoading, setIsLoading ] = useState(true);
    const [ products, setProducts ] = useState([]);

    const loadProduct = async () => {
        const response = await getProducts()

        if (response.status === 200) {
            setProducts(response.data)
        }

        setIsLoading(false)
    }
    useEffect(() => {
        loadProduct();
    }, [])

    const handleSubmit = async (data) => {
        await saveProduct(data);
        loadProduct();
        setIsModalOpen(false)
    }

    return (
        <Container>
            <Header title='Products App' />
            <AddButton onClick={() => setIsModalOpen(true)} />
            {
                isLoading && <Loading />
            }

            {
                !isLoading && !products.length ?
                <h2 className='title has-text-centered has-text-danger'>you don't have products</h2>
                : <ListProduct products={products} />
            }

            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Modal.Card>
                    <Modal.Card.Head showClose={false}>
                        <Modal.Card.Title>
                            Add Product
                        </Modal.Card.Title>
                    </Modal.Card.Head>
                    <Modal.Card.Body>
                        <Form handleSubmit={handleSubmit} />
                    </Modal.Card.Body>
                </Modal.Card>

            </Modal>
        </Container>
    )
}

export default ProductLayout
