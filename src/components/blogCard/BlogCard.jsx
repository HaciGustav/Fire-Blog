import React from 'react';
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

const BlogCard = () => {
    return (
        <>
            <CardHeader>
                <Avatar
                    src={
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiN-GI6m2DnQonY8yV4IMpStO5d498r3Ac9FNQcwmG&s'
                    }
                />
                <Author>author authorovic</Author>
                <Date>Oct 8</Date>
            </CardHeader>
            <CardContainer>
                <CardInfo>
                    <Title>How does NodeJS handle multiple requests?</Title>
                    <Overview>
                        NodeJS Hello Readers , There's a lot of confusion out
                        there about concurrency and parallelism. Some people use
                        the terms interchangeably, but they actually refer to
                        two different things.
                    </Overview>
                    <Tags>
                        <Tag>JavaScript</Tag>
                        <Tag>React</Tag>
                    </Tags>
                </CardInfo>
                <Img
                    src={
                        'https://miro.medium.com/max/640/1*NCnxWDRt28DuWV2djn2enw.webp'
                    }
                />
            </CardContainer>
        </>
    );
};
export default BlogCard;
