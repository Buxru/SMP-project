import React, {useState} from 'react';
import './login.css'
import Logo from '../../../assets/Header/logo.svg'
import {Button, Checkbox, ThemeProvider} from "@mui/material";
import {yellow} from "@mui/material/colors";
import {grey} from "@mui/material/colors";
import CloseIcon from '@mui/icons-material/Close';
import {createTheme} from "@mui/material/styles";

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        clicked_icon: {
            main: '#fbbe00',
            darker: '#fbbe00',
        }
    }
});
const Login = (props) => {

    const [checked, setChecked] = useState(false);
    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
    };

    return (
        <>
            {props.open ? <form action="src/Components/Main_page/Login/Login.jsx">
                    <ThemeProvider theme={theme}>
                        <div className="blur" onClick={props.closeWindow}></div>
                        <div className="login">
                            <div className="login_area">
                                <div className="top_part">
                                    <img src={Logo} alt="Logo_icon"/>
                                    <Button className="close_btn" color="clicked_icon" onClick={props.closeWindow}
                                            sx={{color: yellow[600], width: 30, height: 50}}>
                                        <CloseIcon className="close_icon" sx={{color: yellow[600], width: 30, height: 30}}/>
                                    </Button>
                                </div>
                                <div className="tip_log">
                                    Вхід до аккаунту
                                </div>
                                <div className="forma">
                                <form>
                                    <input style={{fontSize: '16px'}} placeholder="e-mail"/>
                                    <br/>
                                    <input type="password" style={{fontSize: '16px'}} placeholder="Пароль"/>
                                </form>
                                </div>
                                <div className="acception">
                                    <Checkbox
                                        color="clicked_icon"
                                        checked={checked}
                                        onChange={handleCheckboxChange}
                                        label="Запам'ятати мене"
                                        sx={{'& .MuiSvgIcon-root': {fontSize: 28}, color: yellow[600]}}
                                    />
                                    <span>Запам'ятати мене</span>
                                </div>
                                <div className="login_div">
                                <Button className="login_btn"
                                        sx={{color: grey[100], bgcolor: yellow[700], '&:hover': {bgcolor: '#a78200'}}}>
                                    Увійти
                                </Button>
                                </div>
                                <div className="statement">
                                    <span>Не маєте аккаунту? <a href="src/Components/Main_page/Login/login#Login.jsx">Зареєструйтесь</a></span>
                                    <br/>
                                    <span><a href="src/Components/Main_page/Login/login#Login.jsx">Забули логін або пароль?</a></span>
                                </div>
                            </div>
                        </div>
                    </ThemeProvider>
                </form>
                : null}
        </>
    );
};

export default Login;