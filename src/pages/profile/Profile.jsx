import React, { useEffect, useState } from 'react';
import { BiRightArrow } from 'react-icons/bi';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../context/AuthProvider';
import { getAllArticles, userArticles } from '../../helpers/firebase';
import RegisterCard from '../../assets/RegisterCard.jpg';
import {
    Article,
    Articles,
    Avatar,
    Container,
    Email,
    H5,
    Name,
    ProfileCard,
    UserInfo,
} from './Profile.style';

const Profile = () => {
    const [articles, setArticles] = useState([]);

    const { currentUser } = useAuthContext();
    const { email } = currentUser;

    const navigate = useNavigate();

    useEffect(() => {
        userArticles(email, setArticles);
    }, []);

    return (
        <Container>
            <ProfileCard>
                <UserInfo>
                    <Avatar src={RegisterCard} />
                    <div>
                        <H5>User Name</H5>
                        <Name>
                            ⚜{' '}
                            {currentUser?.displayName
                                ? currentUser.displayName
                                : currentUser?.email}
                        </Name>
                        <H5>Email</H5>
                        <Email>⚜ {currentUser?.email}</Email>
                    </div>
                </UserInfo>

                <Articles>
                    {articles.length &&
                        articles.map((item) => (
                            <Article
                                key={item?.id}
                                onClick={() =>
                                    navigate(`/details/${item?.id}`)
                                }>
                                <BiRightArrow color="#36465d" /> {item.title}
                            </Article>
                        ))}
                </Articles>
                {!articles.length && (
                    <h2 style={{ textAlign: 'center', color: '#ccc' }}>
                        {' '}
                        You Don't Have Any Article!!
                    </h2>
                )}
            </ProfileCard>
        </Container>
    );
};

export default Profile;
