import React from 'react';
import './Side_bar.css';
import {Button, ThemeProvider} from "@mui/material";
import logo from './../../../assets/Header/logo.svg';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import Avatar from "@mui/material/Avatar";
import {Link} from 'react-router-dom';
import {StaticRouter} from "react-router-dom/server";


const SideBar = ({user_info}) => {
    return (
            <div className="side_bar_space">
                <AppBar user_info={user_info}/>
                <ManagmentBar/>
                <BottomBar/>
            </div>
    );
};

const AppBar = ({user_info}) => {
    return(
        <div className="app_bar_container">
            <div className="logo_div">
                <img src={logo} alt="logo_icon"/>
            </div>
            <div className="admin_profile">
                <Avatar sx={{
                    width: 109,
                    height: 110,
                    border: '5px solid #FFFFFF'}}></Avatar>
                <span className='admin_name'>{user_info.name} {user_info.surname}</span>
                <br/>
                <span className='admin_rang'>{user_info.rang}</span>
            </div>
        </div>
    );
}

const ManagmentBar = () => {
    return(
        <div className="managment_bar_container">
                <Link to="/admin/statistic">
                <Button variant="contained" sx={{
                    height: 74,
                    width: 320,
                    bgcolor: '#1A1A1A',
                    '&:hover': {bgcolor: '#444444'}
                    }}>
                    <SignalCellularAltIcon sx={{
                        width: 35,
                        height: 74,
                        color: '#F8C100'}}/>
                    <span>Статистика</span>
                </Button>
                 </Link>
                <Link to="/admin/news_edit">
                <Button variant="contained" sx={{
                    height: 74,
                    width: 320,
                    bgcolor: '#1A1A1A',
                    '&:hover': {bgcolor: '#444444'}}}>
                    <RemoveRedEyeIcon sx={{width: 35,
                        height: 74,
                        color: '#F8C100'}}/>
                    <span>Новини</span>
                </Button>
                </Link>
                <Link to="/admin/users">
                <Button variant="contained" sx={{
                    height: 74,
                    width: 320,
                    bgcolor: '#1A1A1A',
                    '&:hover': {bgcolor: '#444444'}}}>
                    <PeopleAltIcon sx={{
                        width: 35,
                        height: 74,
                        color: '#F8C100'}}/>
                    <span>Користувачі</span>
                </Button>
                </Link>
                <Link to="/admin/profile">
                <Button variant="contained" sx={{
                    height: 74,
                    width: 320,
                    bgcolor: '#1A1A1A',
                    '&:hover': {bgcolor: '#444444'}}}>
                    <SettingsIcon sx={{
                        width: 35,
                        height: 74,
                        color: '#F8C100'}}/>
                    <span>Профіль</span>
                </Button>
                </Link>
        </div>
    );
}

const BottomBar = () => {
    return(
        <div className="exit_btn">
            <Link to="/">
            <Button variant="contained" sx={{
                height: 74,
                width: 320,
                bgcolor: '#1A1A1A',
                '&:hover': {bgcolor: '#444444'}}}>
                <ExitToAppIcon sx={{
                    width: 35,
                    height: 74,
                    color: '#F8C100'}}/>
                <span>Вихід</span>
            </Button>
            </Link>
        </div>
    );
}

export default SideBar;
