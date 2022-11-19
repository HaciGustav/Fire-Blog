import React from 'react';
import {
    Arrow,
    Avatar,
    DisplayName,
    Li,
    Logo,
    Menu,
    MenuItem,
    MenuWrap,
    Nav,
    Ul,
} from './Navbar.style';
import MenuIcon from '@mui/icons-material/Menu';
import { useAuthContext } from '../../context/AuthProvider';
import { useNavigate } from 'react-router-dom';
import RegisterCard from '../../assets/RegisterCard.jpg';
import { logout } from '../../helpers/firebase';
const Navbar = () => {
    const { currentUser } = useAuthContext();
    const { displayName, photoUrl } = currentUser;
    const userName = displayName
        ? displayName[0].toUpperCase() +
          displayName.slice(1, displayName.length)
        : 'User';
    const navigate = useNavigate();
    return (
        <Nav>
            <Logo onClick={() => navigate('/')}>H.World</Logo>

            {!currentUser && (
                <>
                    <MenuWrap>
                        <MenuIcon />
                        <Menu>
                            <Arrow></Arrow>
                            <MenuItem onClick={() => navigate('/login')}>
                                Login
                            </MenuItem>
                            <MenuItem onClick={() => navigate('/register')}>
                                Register
                            </MenuItem>
                        </Menu>
                    </MenuWrap>
                    <Ul>
                        <Li onClick={() => navigate('/login')}>Login</Li>
                        <Li onClick={() => navigate('/register')}>Register</Li>
                    </Ul>
                </>
            )}
            {currentUser && (
                <div>
                    <DisplayName>{userName}</DisplayName>
                    <Avatar
                        src={photoUrl ? photoUrl : RegisterCard}
                        onClick={() => logout()}
                    />
                </div>
            )}
        </Nav>
    );
};

export default Navbar;
