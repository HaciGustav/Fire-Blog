import styled from 'styled-components';
import profileBG from '../../assets/profileBG.jpg';

export const Container = styled.div`
    height: calc(100% - 3rem);
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${profileBG});
    background-position: center;
    background-size: cover;
`;

export const ProfileCard = styled.div`
    background-color: #0000006a;
    border: 1px solid #0000007b;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem 2rem;
    row-gap: 1rem;
`;
export const Avatar = styled.img`
    vertical-align: middle;
    width: 120px;
    height: 120px;
    border-radius: 50%;
`;
export const Name = styled.h4`
    color: #ccc;
`;
export const Email = styled.p`
    text-align: center;
    color: #ccc;
`;
