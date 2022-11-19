import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from '../../components/blogCard/BlogCard';
import { useAuthContext } from '../../context/AuthProvider';
import { useDataContext } from '../../context/DataProvider';
import { getAllArticles } from '../../helpers/firebase';
import { Container, NewBlog } from './Dashboard.style';

const Dashboard = () => {
    const { currentUser } = useAuthContext();
    const [articles, setArticles] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        getAllArticles(setArticles);
    }, []);

    return (
        <Container>
            {currentUser && (
                <NewBlog onClick={() => navigate('/post')}>New</NewBlog>
            )}
            {articles?.map((article) => {
                return <BlogCard key={article?.id} article={article} />;
            })}
        </Container>
    );
};

export default Dashboard;
