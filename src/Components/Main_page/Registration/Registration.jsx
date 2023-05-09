import React, {useState} from 'react';
import Logo from '../../../assets/Header/logo.svg'
import {Button, Checkbox, ThemeProvider} from "@mui/material";
import {yellow} from "@mui/material/colors";
import {grey} from "@mui/material/colors";
import CloseIcon from '@mui/icons-material/Close';
import {createTheme} from "@mui/material/styles";
import './Registration.css'
import {bgcolor} from "@mui/system";

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    }, palette: {
        clicked_icon: {
            main: '#fbbe00', darker: '#fbbe00',
        }
    }
});

const Registration = (props) => {
    const [checked, setChecked] = useState(false);
    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('E-mail не може бути пустим');
    const [name, setName] = useState('');
    const [nameError, setNameError] = useState("Ім'я не може бути пустим");
    const [surname, setSurname] = useState('');
    const [surnameError, setSurnameError] = useState('Прізвище не може бути пустим');
    const [date, setDate] = useState('');
    const [dateError, setDateError] = useState('Дата народження не може бути пустим');
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('Пароль не може бути пустим');
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [nameDirty, setNameDirty] = useState(false);
    const [surnameDirty, setSurnameDirty] = useState(false);
    const [dateDirty, setDateDirty] = useState(false);
    const handleCheckboxChange = (event) => {
        setChecked(event.target.checked);
    };
    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^((([0-9A-Za-z]{1}[-0-9A-z\.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я\.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}\.){1,2}[-A-Za-z]{2,})$/u;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Неккоректный e-mail');
            if (!e.target.value) setEmailError("e-mail не може бути порожнім");
        } else setEmailError('');
    }
    const nameHandler = (e) => {
        setName(e.target.value)
        if (!e.target.value) {
            setNameError("Ім'я не може бути порожнім")
        } else setNameError("");
    }
    const surnameHandler = (e) => {
        setSurname(e.target.value)
        if (!e.target.value) {
            setSurnameError("Прізвище не може бути порожнім")
        } else setSurnameError("");
    }
    const dateHandler = (e) => {
        setDate(e.target.value)
        if (!e.target.value) {
            setDateError("Дата не може бути пустою")
        } else setDateError("");
    }
    const passwordHandler = (e) => {
        setPassword(e.target.value);
        // const re = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;
        // if(!re.test(String(e.target.value).toLowerCase()))
        if (e.target.value.length < 5) {
            setPasswordError('Пароль занадто короткий');
            if (!e.target.value) setPasswordError("Пароль не може бути пустим");
        } else setPasswordError('');
    }
    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
            case 'name':
                setNameDirty(true)
                break
            case 'surname':
                setSurnameDirty(true)
                break
            case 'date':
                setDateDirty(true)
                break

        }
    }

    return (<>
        {props.open ? <form action="src/Components/Main_page/Registration/Registration">
                <ThemeProvider theme={theme}>
                    <div className="blur_reg" onClick={props.closeWindow}></div>
                    <div className="Registration">
                        <div className="top_part">
                            <div className="Registration_area">
                                <div className="logo_login">
                                    <img src={Logo} alt="Logo_icon"/>
                                </div>
                                <Button onClick={props.closeWindow} className="close_btn" color="clicked_icon"
                                        sx={{color: yellow[600], width: 30, height: 50}}>
                                    <CloseIcon className="close_icon"
                                               sx={{color: yellow[600], width: 30, height: 30}}/>
                                </Button>
                            </div>
                        </div>
                        <div className="tip_reg">
                            Реєстрація акаунту
                        </div>

                        <form>
                            <div className="forma">
                                {(emailDirty && emailError) &&
                                    <div className='space_error' style={{color: 'red'}}>{emailError}</div>
                                }
                                    <input onChange={e => emailHandler(e)} value={email}
                                           onBlur={e => blurHandler(e)} name='email' style={{fontSize: '16px'}}
                                           placeholder="e-mail"/>
                                {(nameDirty && nameError) &&
                                    <div className='space_error' style={{color: 'red'}}>{nameError}</div>}
                                    <input onChange={e => nameHandler(e)} onBlur={e => blurHandler(e)}
                                           name='name'
                                           style={{fontSize: '16px'}}
                                           placeholder="Ім'я"/>
                                {(surnameDirty && surnameError) &&
                                    <div className='space_error' style={{color: 'red'}}>{surnameError}</div>}
                                    <input onChange={e => surnameHandler(e)} onBlur={e => blurHandler(e)}
                                           name='surname' style={{fontSize: '16px'}}
                                           placeholder="Прізвище"/>
                                    <select className="user_sex" id="user_sex">
                                        <option value="Чоловіча">Чоловіча</option>
                                        <option value="Жіноча">Жіноча</option>
                                        <option value="Інше">Інше</option>
                                    </select>
                                {(dateDirty && dateError) &&
                                    <div className='space_error' style={{color: 'red'}}>{dateError}</div>}
                                <input onChange={e => dateHandler(e)} onBlur={e => blurHandler(e)}
                                       name='date'
                                       type="date"
                                       style={{fontSize: '16px'}} placeholder="Дата народження"
                                className="user_date"/>
                                {(passwordDirty && passwordError) &&
                                    <div className='space_error' style={{color: 'red'}}>{passwordError}</div>}
                                <input onChange={e => passwordHandler(e)} value={password}
                                       onBlur={e => blurHandler(e)} name='password' type="password"
                                       style={{fontSize: '16px'}} placeholder="Пароль"/>
                            </div>
                            <br/>

                            {checked ? null :
                                <div className="error">
                                    Необхідно погодитися з умовами користування
                                </div>}
                            <br/>
                            <div className="acception">
                                <div className="checkbox">
                                    <Checkbox
                                        color="clicked_icon"
                                        checked={checked}
                                        onChange={handleCheckboxChange}
                                        label="Погоджуюся з умовами користування"
                                        sx={{'& .MuiSvgIcon-root': {fontSize: 28}, color: yellow[600]}}
                                    />
                                    <span>Погоджуюся з <a>умовами користування сайтом “Блискавка правди”</a></span>
                                </div>
                                <br/>
                                <br/>
                            </div>
                            <div className="login_div">
                                <Button className="login_btn"
                                        sx={{color: grey[100], bgcolor: yellow[700], '&:hover': {bgcolor: '#a78200'}}}>
                                    Зареєструватися
                                </Button>
                            </div>
                        </form>
                    </div>
                </ThemeProvider>
            </form>
            : null}

    </>);
};

export default Registration;
