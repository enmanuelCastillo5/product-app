import React, { useState, useRef } from 'react'
import { Form as BulmaForm, Button } from "react-bulma-components";

const { Field, Control, Label, Input } = BulmaForm

const Form = () => {
    const [ formValues, setFormValues ] = useState({
        name: '',
        unitaryPrice: '',
        size: '',
        description: ''
    })

    const inputFileRef = useRef()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormValues({ ...formValues, [name]: value })

    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formValues);
        console.log(inputFileRef.current.files)
    }

    return (
        <form onSubmit={handleSubmit}>
            <Field>
                <Label>Name</Label>
                <Control>
                    <Input
                        placeholder='enter your name'
                        name='name'
                        value={formValues.name}
                        onChange={handleChange} />
                </Control>
            </Field>

            <Field>
                <Label>Unitary Price</Label>
                <Control>
                    <Input
                        type='number'
                        placeholder='Unitary Price'
                        name='unitaryPrice'
                        value={formValues.unitaryPrice}
                        onChange={handleChange} />
                </Control>
            </Field>

            <Field>
                <Label>Size</Label>
                <Control>
                    <Input
                        type='number'
                        placeholder='enter your Size'
                        name='size'
                        value={formValues.size}
                        onChange={handleChange} />
                </Control>
            </Field>

            <Field>
                <Label>Description</Label>
                <Control>
                    <Input
                        placeholder='enter your Description'
                        name='description'
                        value={formValues.description}
                        onChange={handleChange} />
                </Control>
            </Field>

            <Field>
                <Label>Image</Label>
                <Control>
                    <input ref={inputFileRef} className='has-text-danger' type="file"/>
                </Control>
            </Field>

            <Button type='submit' color='success'>Save</Button>
        </form>
    )
}

export default Form
