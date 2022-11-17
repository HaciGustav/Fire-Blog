import styled from 'styled-components';

export const CardContainer = styled.div`
    display: flex;
    border-bottom: 1px solid #ddd;
    column-gap: 2rem;
    padding-bottom: 1rem;
`;
export const CardInfo = styled.div`
    display: flex;
    flex-direction: column;
    row-gap: 0.5rem;
`;
export const CardHeader = styled.div`
    display: flex;
    align-items: center;
    column-gap: 0.5rem;
    margin-top: 1rem;
`;
export const Date = styled.span`
    color: #aaa;
    font-size: 0.9rem;
    font-weight: 300;
`;
export const Author = styled.span`
    font-size: 0.9rem;
`;

export const Avatar = styled.img`
    vertical-align: middle;
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
`;
export const Title = styled.h3``;
export const Img = styled.img`
    width: 7.5rem;
    align-self: center;
`;

export const Overview = styled.p`
    @media (max-width: 560px) {
        display: none;
    }
`;
export const Tags = styled.div`
    display: flex;
    margin: 1rem 0;
    column-gap: 0.5rem;
`;
export const Tag = styled.span`
    font-size: 0.8rem;
    padding: 0.3rem 0.4rem;
    background-color: #eee;
    border-radius: 1rem;
`;
