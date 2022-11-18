import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Author,
    Avatar,
    CardContainer,
    CardHeader,
    CardInfo,
    Date,
    Img,
    Overview,
    Tag,
    Tags,
    Title,
} from './BlogCard.style';

const BlogCard = ({ article }) => {
    const { author, imgURL, text, likes, title, date, tags, id } = article;
    const navigate = useNavigate();
    return (
        <div onClick={() => navigate(`/details/${id}`)}>
            <CardHeader>
                <Avatar
                    src={
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiN-GI6m2DnQonY8yV4IMpStO5d498r3Ac9FNQcwmG&s'
                    }
                />
                <Author>{author}</Author>
                <Date>{date}</Date>
            </CardHeader>
            <CardContainer>
                <CardInfo>
                    <Title>{title}</Title>
                    <Overview>{text}</Overview>
                    <Tags>
                        <Tag>JavaScript</Tag>
                        <Tag>React</Tag>
                    </Tags>
                </CardInfo>
                <Img src={imgURL} />
            </CardContainer>
        </div>
    );
};
export default BlogCard;
