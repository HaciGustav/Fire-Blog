import styled from 'styled-components';

export const Container = styled.div`
    justify-content: center;
    align-items: center;
    position: absolute;

    z-index: 5;
`;

export const GridContainer = styled.div`
    position: absolute;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* border: 2px solid red; */
    justify-content: center;
    align-items: center;
    padding: 2rem 1rem;
    gap: 1rem;
    background-color: #ffffff76;
    border-radius: 2rem;
    max-height: 60vh;
    overflow: auto;

    display: ${({ isShown }) => (isShown ? 'grid' : 'none')};

    animation: ${({ isShown }) => isShown && 'slideIn 0.5s ease-in-out'};

    @keyframes slideIn {
        from {
            transform: translateY(-150%);
        }
        to {
            transform: translateY(0);
        }
    }
`;
export const Avatar = styled.img`
    width: 10rem;
    height: 10rem;
    vertical-align: middle;
    border-radius: 50%;
    margin: auto;
    cursor: pointer;
`;

export const CloseBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    right: 5px;
    top: 5px;
    background-color: transparent;
    border: 1px solid #0000006a;
    border-radius: 5px;
    padding: 5px;
    cursor: pointer;
`;
