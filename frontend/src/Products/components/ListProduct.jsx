import React from 'react'
import { Card, Columns, Content, Heading, Button } from "react-bulma-components";
import { deleteProduct } from "../services";
const ListProduct = ({ products }) => {

    const deleteClick = async (id, name) => {
        console.log(`${id}: ${name}`)
        await deleteProduct(id)
    }
    return (
        <Columns>
        {
            products.map(({name, size, unitaryPrice, description, imgUrl, _id }) => (
                <Columns.Column key={_id} size={3}>
                <Card>
                    <Card.Image src={imgUrl} size='16by9' />
                    <Card.Content>
                        <Content>
                            <Heading>{name}</Heading>
                            <Heading size={4} subtitle>Price: {unitaryPrice}</Heading>
                            <Heading size={6} subtitle>Size: {size}</Heading>
                            <p>
                                {description}
                            </p>
                            <Button onClick={() => deleteClick(_id, name)} color='danger'>Delete</Button>
                        </Content>
                    </Card.Content>
                </Card>
                </Columns.Column>
            ))
        }
        </Columns>
    )
}

export default ListProduct
