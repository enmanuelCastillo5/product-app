import React from 'react'
import { Card, Columns, Content, Heading } from "react-bulma-components";

const ListProduct = ({ products }) => {
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
