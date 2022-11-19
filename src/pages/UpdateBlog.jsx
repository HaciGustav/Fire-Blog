import { LoadingButton } from '@mui/lab';
import { TextField } from '@mui/material';
import { Formik } from 'formik';
import React, { useEffect, useState } from 'react';
import { getArticle, updateArticle } from '../helpers/firebase';
import { CardContainer, Container, Form, H2 } from './newBlog/NewBlog.style';
import * as yup from 'yup';
import { useNavigate, useParams } from 'react-router-dom';
const formSchema = yup.object().shape({
    title: yup.string().max(100),
    url: yup.string(),
    text: yup.string(),
});

const UpdateBlog = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [article, setArticle] = useState({});

    useEffect(() => {
        getArticle(id, setArticle);
    }, []);

    const { title, imgURL, text, tags } = article;
    console.log(article);
    return (
        <Container>
            <CardContainer>
                <H2>⚜ Update ⚜</H2>
                <Formik
                    // initialValues={article}
                    initialValues={{
                        title: `${title}`,
                        url: '',
                        text: '',
                        tag1: '',
                        tag2: '',
                        tag3: '',
                    }}
                    validationSchema={formSchema}>
                    {({
                        values,
                        handleChange,
                        handleBlur,
                        errors,
                        touched,
                    }) => {
                        return (
                            <Form>
                                <TextField
                                    id="title"
                                    name="title"
                                    type="text"
                                    value={values.title}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    label="Article Title"
                                    variant="filled"
                                    error={
                                        touched.title && Boolean(errors.title)
                                    }
                                    helperText={touched.title && errors.title}
                                />
                                <TextField
                                    id="url"
                                    name="url"
                                    value={values.url}
                                    onChange={handleChange}
                                    label="Image URL"
                                    variant="filled"
                                    error={touched.url && Boolean(errors.url)}
                                    helperText={touched.url && errors.url}
                                />
                                <TextField
                                    id="text"
                                    label="Article"
                                    name="text"
                                    value={values.text}
                                    onChange={handleChange}
                                    multiline
                                    rows={10}
                                    variant="filled"
                                    error={touched.text && Boolean(errors.text)}
                                    helperText={touched.text && errors.text}
                                />
                                <div
                                    style={{
                                        display: 'flex',
                                        justifyContent: 'space-evenly',
                                        rowGap: '0.5rem',
                                        flexWrap: 'wrap',
                                    }}>
                                    <TextField
                                        id="tag1"
                                        name="tag1"
                                        value={values.tag1}
                                        onChange={handleChange}
                                        label="tag..."
                                        variant="filled"
                                    />
                                    <TextField
                                        id="tag2"
                                        name="tag2"
                                        value={values.tag2}
                                        onChange={handleChange}
                                        label="tag..."
                                        variant="filled"
                                    />
                                    <TextField
                                        id="tag3"
                                        name="tag3"
                                        value={values.tag3}
                                        onChange={handleChange}
                                        label="tag..."
                                        variant="filled"
                                    />
                                </div>
                                {console.log(values)}
                                <LoadingButton
                                    sx={{
                                        marginTop: '0.5rem',
                                        backgroundColor: '#36465d',
                                        width: '50%',
                                        margin: 'auto',
                                    }}
                                    loadingPosition="center"
                                    type="submit"
                                    variant="contained"
                                    onClick={(e) => {
                                        updateArticle(e, id, values);
                                    }}>
                                    Update
                                </LoadingButton>
                            </Form>
                        );
                    }}
                </Formik>
            </CardContainer>
        </Container>
    );
};

export default UpdateBlog;

// <Formik
//                     initialValues={{
//                         title: '',
//                         url: '',
//                         text: '',
//                         tag1: '',
//                         tag2: '',
//                         tag3: '',
//                     }}
//                     validationSchema={formSchema}>
//                     {({
//                         values,
//                         handleChange,
//                         handleBlur,
//                         errors,
//                         touched,
//                     }) => {
//                         return (
//                             <Form>
//                                 <TextField
//                                     id="title"
//                                     name="title"
//                                     type="text"
//                                     value={values.title}
//                                     onChange={handleChange}
//                                     onBlur={handleBlur}
//                                     label="Article Title"
//                                     variant="filled"
//                                     error={
//                                         touched.title && Boolean(errors.title)
//                                     }
//                                     helperText={touched.title && errors.title}
//                                     required
//                                 />
//                                 <TextField
//                                     id="url"
//                                     name="url"
//                                     value={values.url}
//                                     onChange={handleChange}
//                                     label="Image URL"
//                                     variant="filled"
//                                     error={touched.url && Boolean(errors.url)}
//                                     helperText={touched.url && errors.url}
//                                 />
//                                 <TextField
//                                     id="text"
//                                     label="Article"
//                                     name="text"
//                                     value={values.text}
//                                     onChange={handleChange}
//                                     multiline
//                                     rows={10}
//                                     variant="filled"
//                                     error={touched.text && Boolean(errors.text)}
//                                     helperText={touched.text && errors.text}
//                                     required
//                                 />
//                                 <div
//                                     style={{
//                                         display: 'flex',
//                                         justifyContent: 'space-evenly',
//                                         rowGap: '0.5rem',
//                                         flexWrap: 'wrap',
//                                     }}>
//                                     <TextField
//                                         id="tag1"
//                                         name="tag1"
//                                         value={values.tag1}
//                                         onChange={handleChange}
//                                         label="tag..."
//                                         variant="filled"
//                                     />
//                                     <TextField
//                                         id="tag2"
//                                         name="tag2"
//                                         value={values.tag2}
//                                         onChange={handleChange}
//                                         label="tag..."
//                                         variant="filled"
//                                     />
//                                     <TextField
//                                         id="tag3"
//                                         name="tag3"
//                                         value={values.tag3}
//                                         onChange={handleChange}
//                                         label="tag..."
//                                         variant="filled"
//                                     />
//                                 </div>

//                                 <LoadingButton
//                                     sx={{
//                                         marginTop: '0.5rem',
//                                         backgroundColor: '#36465d',
//                                         width: '50%',
//                                         margin: 'auto',
//                                     }}
//                                     loadingPosition="center"
//                                     type="submit"
//                                     variant="contained"
//                                     onClick={(e) => {
//                                         values.title &&
//                                             values.text &&
//                                             addArticle(e, values, navigate);
//                                     }}>
//                                     Send Article
//                                 </LoadingButton>
//                             </Form>
//                         );
//                     }}
//                 </Formik>

{
    /* <Form>
                    <TextField 
                        id="title"
                        label="Article Title"
                        variant="filled"
                    />
                    <TextField id="url" label="Image URL" variant="filled" />
                    <TextField
                        id="article"
                        label="Article"
                        multiline
                        rows={15}
                        variant="filled"
                    />
                    <LoadingButton
                        sx={{
                            marginTop: '0.5rem',
                            backgroundColor: '#36465d',
                            width: '50%',
                            margin: 'auto',
                        }}
                        loadingPosition="center"
                        variant="contained">
                        Update
                    </LoadingButton>
                </Form> */
}
