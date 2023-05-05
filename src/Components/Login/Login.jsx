import React, {useState} from 'react';
import Logo from '../../assets/Header/logo.svg'
import {Button, Checkbox, ThemeProvider} from "@mui/material";
import {yellow} from "@mui/material/colors";
import {grey} from "@mui/material/colors";
import CloseIcon from '@mui/icons-material/Close';
import {createTheme} from "@mui/material/styles";
import './Registration.css'

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

const Registration = () => {
    const [checked, setChecked] = useState(false);
    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
    };
    return (
        <>
            <ThemeProvider theme={theme}>
                <div className="blur_reg"></div>
                <div className="Registration">
                    <div className="Registration_area">
                        <div className="logo_login">
                            <img src={Logo} alt="Logo_icon"/>
                            <Button className="close_btn" color="clicked_icon"
                                    sx={{color: yellow[600], width: 30, height: 50}}>
                                <CloseIcon className="close_icon" sx={{color: yellow[600], width: 30, height: 30}}/>
                            </Button>
                        </div>
                        <div className="tip_reg">
                            Реєстрація акаунту
                        </div>
                        <div className="e-mail_reg">
                            <input style={{fontSize: '16px'}} placeholder="e-mail"/>
                        </div>
                        <div className="user_name">
                            <input style={{fontSize: '16px'}} placeholder="Ім'я"/>
                        </div>
                        <div className="user_surname">
                            <input style={{fontSize: '16px'}} placeholder="Прізвище"/>
                        </div>
                        <div className="user_sex_div">
                            <select className="user_sex" id="user_sex">
                                <option value="Чоловіча">Чоловіча</option>
                                <option value="Жіноча">Жіноча</option>
                                <option value="Інше">Інше</option>
                            </select>
                        </div>
                        <div className="user_date">
                            <input type="date" style={{fontSize: '16px'}} placeholder="Дата народження"/>
                        </div>
                        <div className="password_reg">
                            <input type="password" style={{fontSize: '16px'}} placeholder="Пароль"/>
                        </div>
                        <br/>
                        {checked ? null :
                            <div className="error">
                                Необхідно погодитися з умовами користування
                            </div>
                        }
                        <br/>
                        <div className="acception">
                            <div className="checkbox">
                                <Checkbox
                                    color="clicked_icon"
                                    checked={checked}
                                    onChange={handleCheckboxChange}
                                    label="Запам'ятати мене"
                                    sx={{'& .MuiSvgIcon-root': {fontSize: 28}, color: yellow[600]}}
                                />
                                <span>Погоджуюся з <a>умовами користування сайтом “Блискавка правди”</a></span></div>
                            <br/>
                            <br/>
                            <div className="login_div">
                                <Button className="login_btn"
                                        sx={{color: grey[100], bgcolor: yellow[700]}}>
                                    Увійти
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </ThemeProvider>
        </>
    );
};

export default Registration;
