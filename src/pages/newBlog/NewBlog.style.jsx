import styled from 'styled-components';
import newBlogBG from '../../assets/newBlogBG.jpg';

export const Container = styled.div`
    height: calc(100% - 3rem);

    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url(${newBlogBG});
    background-position: center;
    background-size: cover;
    @media (max-width: 560px) {
        height: 100%;
    }
`;
export const CardContainer = styled.div`
    border: 1px solid #ccc;
    border-radius: 1rem;
    padding: 1.5rem;
    width: 90%;

    display: flex;
    flex-direction: column;
    background-color: transparent;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    row-gap: 0.4rem;
`;
export const H2 = styled.h2`
    text-align: center;
    padding-bottom: 1.5rem;
`;
