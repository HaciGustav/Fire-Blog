import React from 'react';
import {
    Arrow,
    Li,
    Logo,
    Menu,
    MenuItem,
    MenuWrap,
    Nav,
    Ul,
} from './Navbar.style';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    return (
        <Nav>
            <Logo>H.World</Logo>
            <MenuWrap>
                <MenuIcon />
                <Menu>
                    <Arrow></Arrow>
                    <MenuItem>Login</MenuItem>
                    <MenuItem>Register</MenuItem>
                </Menu>
            </MenuWrap>
            <Ul>
                <Li>Login</Li>
                <Li>Register</Li>
            </Ul>
        </Nav>
    );
};

export default Navbar;
