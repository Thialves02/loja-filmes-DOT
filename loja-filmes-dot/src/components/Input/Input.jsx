import React from 'react'
import { InputContainer } from './style'
import { Field, ErrorMessage } from 'formik'
import InputMask from 'react-input-mask';

export default function Input({ name, label, type, mask, ...rest }) {
    return (
        <InputContainer {...rest}>
            <Field name={name} type={type}>
                {({ field, form, meta }) => (
                    <InputMask
                        {...field}
                        mask={mask}
                        type="text"
                        required
                    />
                )}
            </Field>
            <label htmlFor={name}>{label}</label>
            <ErrorMessage
                component="span"
                name={name}
            />
        </InputContainer>
    )
}
