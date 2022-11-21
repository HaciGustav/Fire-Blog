import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BlogCard from '../../components/blogCard/BlogCard';
import { useAuthContext } from '../../context/AuthProvider';
import { useDataContext } from '../../context/DataProvider';
import { getAllArticles, getUser } from '../../helpers/firebase';
import { Container, NewBlog } from './Dashboard.style';

const Dashboard = () => {
    const { currentUser, setUser } = useAuthContext();
    const [articles, setArticles] = useState([]);
    const { email } = currentUser;
    const navigate = useNavigate();

    useEffect(() => {
        getAllArticles(setArticles);
    }, []);
    useEffect(() => {
        getUser(email, setUser);
    }, []);

    return (
        <Container>
            {articles?.map((article) => {
                return <BlogCard key={article?.id} article={article} />;
            })}
        </Container>
    );
};

export default Dashboard;
