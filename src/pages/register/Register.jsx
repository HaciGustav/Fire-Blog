import React from 'react';
import { CardContainer, CardImg, Container, Form } from '../login/Login.style';
import loginCard from '../../assets/loginCard.jpg';
import { TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import { FcGoogle } from 'react-icons/fc';
import { Formik } from 'formik';
import * as yup from 'yup';
import RegisterCard from '../../assets/RegisterCard.jpg';

const loginSchema = yup.object().shape({
    email: yup.string().email().required(),
    password: yup
        .string()
        .required()
        .min(8)
        .max(16)
        .matches(/\d+/)
        .matches(/[a-z]/)
        .matches(/[A-Z]/)
        .matches(/[!,?{}><%&$#£+-.]+/),
    passwordConfirm: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Passwords must match'),
});

const Register = () => {
    return (
        <Container>
            <CardContainer>
                <CardImg src={RegisterCard} />

                <Formik
                    initialValues={{
                        email: '',
                        password: '',
                        passwordConfirm: '',
                    }}
                    validationSchema={loginSchema}>
                    {({
                        values,
                        isSubmitting,
                        handleChange,
                        handleBlur,
                        touched,
                        errors,
                    }) => (
                        <Form>
                            <TextField
                                type={'email'}
                                id="email"
                                label="Email"
                                variant="standard"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                error={touched.email && Boolean(errors.email)}
                                helperText={touched.email && errors.email}
                            />
                            <TextField
                                type={'password'}
                                id="password"
                                label="Password"
                                variant="standard"
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={
                                    touched.password && Boolean(errors.password)
                                }
                                helperText={touched.password && errors.password}
                            />
                            <TextField
                                type={'password'}
                                id="passwordConfirm"
                                label="Password"
                                variant="standard"
                                value={values.passwordConfirm}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={
                                    touched.passwordConfirm &&
                                    Boolean(errors.passwordConfirm)
                                }
                                helperText={
                                    touched.passwordConfirm &&
                                    errors.passwordConfirm
                                }
                            />
                            <LoadingButton
                                sx={{ marginTop: '0.5rem' }}
                                loadingPosition="center"
                                variant="contained">
                                Register
                            </LoadingButton>
                            <LoadingButton
                                sx={{ backgroundColor: '#000' }}
                                loadingPosition="center"
                                variant="contained">
                                <FcGoogle /> Continue With Google
                            </LoadingButton>
                        </Form>
                    )}
                </Formik>
            </CardContainer>
        </Container>
    );
};
export default Register;
