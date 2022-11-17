import { LoadingButton } from '@mui/lab';
import { TextField } from '@mui/material';
import React from 'react';
import { CardContainer, Container, Form, H2 } from './newBlog/NewBlog.style';

const UpdateBlog = () => {
    return (
        <Container>
            <CardContainer>
                <H2>⚜ Update ⚜</H2>
                <Form>
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
                </Form>
            </CardContainer>
        </Container>
    );
};

export default UpdateBlog;
