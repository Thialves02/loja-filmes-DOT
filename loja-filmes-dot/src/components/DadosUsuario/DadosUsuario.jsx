import React, { useContext } from 'react'
import Input from '../../components/Input/Input'
import { cpf } from 'cpf-cnpj-validator';
import { Formik, Form } from 'formik'
import * as yup from 'yup'
import { InputsContainer } from './style';
import { Context } from '../../context/CtxApp';

export default function DadosUsuario() {
    const { finalizaCompra, setDadosUsuario, dadosUsuario } = useContext(Context)

    const validacaoInputs = yup.object().shape({
        CPF: yup.string().required("O seu CPF é obrigatório").test(
            'testar-cpf', 'CPF inválido', (CPF) => validarCPF(CPF)
        ),
        nome: yup.string().required("O seu Nome é obrigatório"),
        celular: yup.string().required("O seu Celular é obrigatório"),
        email: yup.string().email('Email inválido').required("O seu Email é obrigatório"),
        cep: yup.string().required("O seu CEP é obrigatório"),
        endereco: yup.string().required("O seu Endereço é obrigatório"),
        cidade: yup.string().required("A sua Cidade é obrigatório"),
        estado: yup.string().required("O seu Estado é obrigatório"),
    })

    const validarCPF = (num) => {
        return cpf.isValid(num);
    }

    const salvaInfoUsuario = (formValues) => {
        setDadosUsuario(formValues.nome)
    }

    return (
        <InputsContainer>
            <h1>Finalizar Compra</h1>
            <Formik
                initialValues={{
                    nome: '',
                    CPF: '',
                    celular: '',
                    email: '',
                    cep: '',
                    endereco: '',
                    cidade: '',
                    estado: ''
                }}
                onSubmit={(values, { resetForm }) => {
                    console.log(values)
                    salvaInfoUsuario(values)
                    resetForm({ values: '' })
                }}
                validationSchema={validacaoInputs}
            >
                <Form>
                    <Input
                        label={'Nome Completo'}
                        name={'nome'}
                        type={'text'}
                        className={'grande'}
                    />
                    <Input
                        label={'CPF'}
                        name={'CPF'}
                        type={'text'}
                        className={'medio'}
                        mask={"999.999.999-99"}
                    />
                    <Input
                        label={'Celular'}
                        name={'celular'}
                        type={'text'}
                        className={'medio'}
                        mask={"(99) 99999-9999"}
                    />
                    <Input
                        label={'E-mail'}
                        name={'email'}
                        type={'text'}
                        className={'grande'}
                    />
                    <Input
                        label={'CEP'}
                        name={'cep'}
                        type={'text'}
                        className={'pequeno'}
                        mask={'99999-999'}
                    />
                    <Input
                        label={'Endereço'}
                        name={'endereco'}
                        type={'text'}
                        className={'semi-grande'}
                    />
                    <Input
                        label={'Cidade'}
                        name={'cidade'}
                        type={'text'}
                        className={'medio'}
                    />
                    <Input
                        label={'Estado'}
                        name={'estado'}
                        type={'text'}
                        className={'medio'}
                    />
                    <button type='submit' ref={finalizaCompra}></button>
                </Form>
            </Formik>
        </InputsContainer>
    )
}
