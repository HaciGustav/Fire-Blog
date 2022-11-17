import { Box, Button } from '@mui/material';
import React from 'react';
import {
    Article,
    Author,
    Avatar,
    Container,
    Date,
    H1,
    Header,
    HeaderInfo,
    Img,
} from './Details.style';

const Details = () => {
    return (
        <Container>
            <Header>
                <Avatar
                    src={'https://www.w3schools.com/howto/img_avatar.png'}
                />
                <HeaderInfo>
                    <Author>Haci Gustave</Author>
                    <Date>Oct 31</Date>
                </HeaderInfo>
            </Header>
            <H1>React props and state, What are they?</H1>
            <Img src={'https://miro.medium.com/max/1100/0*THv5dSjWd1morrKI'} />
            <Article>
                You tried vanilla Javascript to make your website as dynamic as
                possible. But you secretly wished there was a better way to do
                it. You got tired of appending children, creating classes, and
                having an overall sense of redundancy. Then one day after class,
                you heard the cool kids talking about something called the React
                library in the back alley. They told you how you can write HTML
                inside Js and then insert your component into your web
                application. It sounded fun and you wanted to give it try.
            </Article>
            <Box
                sx={{
                    display: ' flex',
                    justifyContent: 'center',
                    columnGap: '1rem',
                }}>
                <Button variant="contained">Update</Button>
                <Button variant="contained" sx={{ backgroundColor: '#f00' }}>
                    Delete
                </Button>
            </Box>
        </Container>
    );
};

export default Details;
