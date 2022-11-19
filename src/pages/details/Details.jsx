import { Box, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthProvider';
import { deleteArticle, getArticle } from '../../helpers/firebase';
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
    Tag,
    Tags,
} from './Details.style';

const Details = () => {
    const [article, setArticle] = useState({});
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getArticle(id, setArticle);
    }, []);

    const { currentUser } = useAuthContext();

    const { email } = currentUser;
    const { date, title, imgURL, text, author, tags } = article;

    return (
        <Container>
            <Header>
                <Avatar
                    src={'https://www.w3schools.com/howto/img_avatar.png'}
                />
                <HeaderInfo>
                    <Author>{author}</Author>
                    <Date>{date}</Date>
                </HeaderInfo>
            </Header>
            <H1>{title}</H1>

            <Img src={imgURL} />
            <Tags>
                {tags?.map((tag, i) => (
                    <Tag key={i}>{tag.tag}</Tag>
                ))}
            </Tags>
            <Article>{text}</Article>

            {author == email && (
                <Box
                    sx={{
                        display: ' flex',
                        justifyContent: 'center',
                        columnGap: '1rem',
                    }}>
                    <Button
                        variant="contained"
                        onClick={() => navigate(`/edit/${id}`)}>
                        Update
                    </Button>
                    <Button
                        onClick={() => deleteArticle(id, navigate)}
                        variant="contained"
                        sx={{ backgroundColor: '#f00' }}>
                        Delete
                    </Button>
                </Box>
            )}
        </Container>
    );
};

export default Details;
