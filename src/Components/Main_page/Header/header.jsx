import React, {useState} from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import './Header.css';
import { yellow } from '@mui/material/colors';
import {Button, ThemeProvider} from "@mui/material";
import { createTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';
import Login from "../Login/Login";
import Logo from '../../../assets/Header/logo.svg';
import Registration from "../Registration/Registration";
import AccessibleForwardIcon from '@mui/icons-material/AccessibleForward';
import {Link} from "react-router-dom";


const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        clicked_icon: {
            main: '#B8B8B8',
            darker: '#B8B8B8',
        }
    }
});

const Header = () => {
    const [isButtonClicked, setIsButtonClicked] = useState(false);
    const handleClick = () => {
        setIsButtonClicked(!isButtonClicked);
    };
    return (
        <>
            <ThemeProvider theme={theme}>
                <div className="header">
                    <div className="header_container">
                        <div className="menu_logo_search_icon">
                            <Tooltip title="Інтерактивне меню">
                                <Button className = "menu_icon" color="clicked_icon">
                                    <MenuOpenIcon sx={{color: yellow[600], width: 40, height: 40}}/>
                                </Button>
                            </Tooltip>
                            <Tooltip title="Пошук новини">
                                <Button className="search_icon" color="clicked_icon" onClick = {handleClick}>
                                    <SearchIcon sx={{color: yellow[600], width: 40, height: 40}}/>
                                </Button>
                            </Tooltip>

                        </div>
                        <div className="logo_icon">
                            <img src={Logo} alt="Logo_icon"/>
                        </div>
                        <div className="profile_icon_div">
                            <Profile/>
                        </div>

                    </div>
                </div>
            </ThemeProvider>
            <Search clicked = {isButtonClicked}/>
        </>
    );
};

const Search = ({clicked}) => {
    return (
        <div className={clicked ? 'block-active searching_area' : 'block-inactive searching_area'}>
            <div className="searching_space">
                <div className="space"></div>
                <input style={{ fontSize: '16px' }} placeholder="Яку новину бажаєте знайти?"/>
                <div className="searching_button">
                    <Button className="search" style={{ backgroundColor: "#DDAC00", color: "clicked_icon"}} >
                        Пошук
                    </Button>
                </div>
            </div>
        </div>
    );
};

const Profile = () => {
    const user_info = {
        name: 'Никита',
        surname: 'Покора',
        avatar: 'https://s6.stc.all.kpcdn.net/afisha/msk/wp-content/uploads/sites/5/2023/01/kadr-iz-filma-avatar-put-vody.jpg'
    }
    const [anchorEl, setAnchorEl] = useState(false);
    const [isLoginOpen, setLogin] = useState(false);
    const [isRegisterOpen, setRegister] = useState(false);
    const open = anchorEl;
    const handleClick = (event) => {
        event.preventDefault();
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(false);
    };
    const handleLoginOpen = () => {
        setLogin(true);
    }
    const handleLoginClose = () => {
        setLogin(false);
    }
    const handleRegisterOpen = () => {
        setRegister(true);
    }
    const handleRegisterClose = () => {
        setRegister(false);
    }
    const [checked, setChecked] = useState(false);
    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
    };

    const logged_in = true;
    const [isAdmin, setIsAdmin] = useState(false);
    const profile_menu_color = "444445";
    return(    <>
            <Login open={isLoginOpen} closeWindow={handleLoginClose} />
            <Registration open={isRegisterOpen} closeWindow={handleRegisterClose}/>
            <Box sx={{ display: 'flex', alignItems: 'center',    textAlign: 'center' }}>
                <Tooltip title="Профіль">
                    <Button
                        sx={{color: yellow[600], width: 70, height: 70}}
                        className="profile_icon"
                        onClick={handleClick}
                        size="small"
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                    >
                        <Avatar sx={{ width: 50, height: 50 }} src={user_info.avatar}></Avatar>
                    </Button>
                </Tooltip>
            </Box>
            {logged_in? <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            bgcolor: "#242526",
                            overflow: "visible",
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: '#999999',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={handleClick} sx={{color: "#F2F2F2"}}>
                        <Avatar src={user_info.avatar}/> Профіль
                    </MenuItem>
                    <Divider />
                    <MenuItem onClick={handleClose} sx={{color: "#F2F2F2"}}>
                        <ListItemIcon >
                            <Settings fontSize="small" sx={{color: "#FFC700"}}/>
                        </ListItemIcon>
                        Налаштування
                    </MenuItem>
                    <Link to="/admin">
                    <MenuItem onClick={handleClose} sx={{color: "#F2F2F2"}}>

                        <ListItemIcon >

                            <AccessibleForwardIcon fontSize="small" sx={{color: "#FFC700"}}/>

                        </ListItemIcon>

                        Адмін панель
                    </MenuItem>
                    </Link>

                    <MenuItem onClick={handleClose} sx={{color: "#F2F2F2"}}>
                        <ListItemIcon>
                            <Logout fontSize="small" sx={{color: "#FFC700"}}/>
                        </ListItemIcon>
                        Вийти з аккаунту
                    </MenuItem>
                </Menu>



                : <Menu
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            bgcolor: "#242526",
                            overflow: "visible",
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: '#C60801',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={handleLoginOpen} sx={{color: "#F2F2F2"}}>
                        <ListItemIcon >
                            <LoginIcon fontSize="small" sx={{color: "#FFC700"}}/>
                        </ListItemIcon>
                        Увійти
                    </MenuItem>
                    <MenuItem onClick={handleRegisterOpen} sx={{color: "#F2F2F2"}}>
                        <ListItemIcon>
                            <PersonAddIcon fontSize="small" sx={{color: "#FFC700"}}/>
                        </ListItemIcon>
                        Зареєструватися
                    </MenuItem>
                </Menu>
            }

        </>
    );
}


export default Header;
