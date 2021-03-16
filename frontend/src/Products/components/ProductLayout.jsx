import React, { useState } from 'react'
import { Modal } from "react-bulma-components";
import Header from './Header'
import AddButton from "./AddButton";
import ListProduct from "./ListProduct";
import Form from "./Form";

const ProductLayout = () => {
    const [ isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <Header title='Products App' />
            <AddButton onClick={() => setIsModalOpen(true)} />
            <ListProduct />
            <Modal show={isModalOpen} onClose={() => setIsModalOpen(false)}>
                <Modal.Card>
                    <Modal.Card.Head showClose={false}>
                        <Modal.Card.Title>
                            Add Product
                        </Modal.Card.Title>
                    </Modal.Card.Head>
                    <Modal.Card.Body>
                        <Form />
                    </Modal.Card.Body>
                </Modal.Card>

            </Modal>
        </>
    )
}

export default ProductLayout