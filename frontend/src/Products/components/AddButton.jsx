import React from 'react'
import { Section, Container, Button } from 'react-bulma-components'
const AddButton = ({ onClick }) => {
    return (
        <Section>
            <Container>
                <div className="is-pulled-right">
                <Button onClick={onClick} color='primary'>Add</Button>
                </div>
            </Container>
        </Section>
    )
}

export default AddButton
