import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Logo from '../../assets/Header/logo.svg';
import './Header.css';
import { yellow } from '@mui/material/colors';
import {Button, ThemeProvider} from "@mui/material";
import { createTheme } from '@mui/material/styles';
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
    return (
        <ThemeProvider theme={theme}>
        <div className="header">
                <div className="header_container">
                    <div className="menu_logo_search_icon">
                        <Button className = "menu_icon" color="clicked_icon">
                            <MenuOpenIcon sx={{color: yellow[600], width: 40, height: 40}}/>
                        </Button>
                        <Button className="search_icon" color="clicked_icon">
                            <SearchIcon sx={{color: yellow[600], width: 40, height: 40}}/>
                        </Button>
                    </div>
                    <div className="logo_icon">
                        <img src={Logo} alt="Logo_icon"/>
                    </div>
                    <div className="profile_icon_div">
                    <Button className="profile_icon" color="clicked_icon">
                        <AccountCircleIcon sx={{color: yellow[600], width: 40, height: 40}}/>
                    </Button>
                    </div>
            </div>
        </div>
        </ThemeProvider>
    );
};

export default Header;
