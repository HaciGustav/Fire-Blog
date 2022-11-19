import styled from 'styled-components';

export const Nav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-inline: 1rem;
    height: 3rem;
    background-color: #36465d;
`;
export const Ul = styled.ul`
    display: flex;
    column-gap: 0.5rem;
    align-items: center;
    @media (max-width: 560px) {
        display: none;
    }
`;
export const Li = styled.li`
    list-style-type: none;
    padding: 0.5rem 0;
    cursor: pointer;
`;

export const Menu = styled.ul`
    display: flex;
    flex-direction: column;
    background-color: #eee;
    padding: 0.5rem;
    border-radius: 0.5rem;
    position: absolute;
    right: 0;
    display: none;
`;
export const Arrow = styled.span`
    position: absolute;
    top: -14px;
    right: 5px;
    border: 0.5rem solid;
    border-color: transparent transparent #eee transparent;
`;
export const MenuItem = styled.li`
    list-style-type: none;
    padding: 0.4rem;
    cursor: pointer;
`;
export const MenuWrap = styled.div`
    position: relative;
    border: 2px solid red;
    display: none;
    &:hover ${Menu} {
        display: block;
    }
    @media (max-width: 560px) {
        display: inline;
    }
`;
export const Logo = styled.span`
    background-color: red;
    display: flex;
    align-items: center;
    cursor: pointer;
`;
export const Avatar = styled.img`
    vertical-align: middle;
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    cursor: pointer;
`;
export const DisplayName = styled.span`
    margin-right: 5px;
    font-weight: 500;
`;
