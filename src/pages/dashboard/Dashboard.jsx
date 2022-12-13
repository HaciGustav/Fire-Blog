import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ArticleSearch from '../../components/ArticleSearch';
import BlogCard from '../../components/blogCard/BlogCard';
import { useAuthContext } from '../../context/AuthProvider';
import { useDataContext } from '../../context/DataProvider';
import { getAllArticles, getUser } from '../../helpers/firebase';
import { Container, NewBlog } from './Dashboard.style';

const Dashboard = () => {
    const { currentUser, setUser } = useAuthContext();
    const [articles, setArticles] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const { email } = currentUser;

    useEffect(() => {
        getAllArticles(setArticles);
    }, []);
    useEffect(() => {
        getUser(email, setUser);
    }, []);

    const isSearched = (item) =>
        item?.title?.toLowerCase().includes(searchValue.toLowerCase()) ||
        searchValue.length === 0;

    return (
        <Container>
            <ArticleSearch
                articles={articles}
                setSearchValue={setSearchValue}
                searchValue={searchValue}
            />
            {articles
                ?.filter((item) => isSearched(item))
                .map((article) => {
                    return <BlogCard key={article?.id} article={article} />;
                })}
        </Container>
    );
    // <Container>
    //     {articles?.map((article) => {
    //         return <BlogCard key={article?.id} article={article} />;
    //     })}
    // </Container>
};

export default Dashboard;
