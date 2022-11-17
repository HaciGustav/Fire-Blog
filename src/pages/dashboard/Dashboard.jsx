import React from 'react';
import BlogCard from '../../components/blogCard/BlogCard';
import { Container } from './Dashboard.style';

const Dashboard = () => {
    return (
        <Container>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </Container>
    );
};

export default Dashboard;
