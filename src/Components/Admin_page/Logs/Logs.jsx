import React, {useState} from 'react';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import './Logs.css';
import {Button, List, ListItem, ThemeProvider} from "@mui/material";
import {grey, purple} from '@mui/material/colors';
import {yellow} from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import Side_bar from "../Side_bar/Side_bar";



const Logs = () => {
    const user_info = {
        name: 'Никита',
        surname: 'Покора',
        avatar: 'https://s6.stc.all.kpcdn.net/afisha/msk/wp-content/uploads/sites/5/2023/01/kadr-iz-filma-avatar-put-vody.jpg',
        rang: 'Адмін'
    }
    return (
            <div className="home">
                <Side_bar user_info={user_info}/>
                <div className="home_page_container">
                    <LogsHeader/>
                    <LogsTable/>
                </div>
            </div>
    );
};

const LogsHeader = () => {


    return (
        <>
            <div className="logs_head">
                <div className="searching_area">
                    <Button  className="logs_search_btn" sx={{width: 42, height: 51}}>
                        <SearchIcon sx={{width: 42, height: 35, color: grey[400]}}/>
                    </Button>
                    <input style={{fontSize: '16px'}} placeholder="Пошук за ключовою назвою..."/>
                </div>
                <div className="download_logs">
                    <Button sx={{width: 238, height: 51, borderColor: "#A78F00"}}>
                        <DownloadIcon sx={{width: 42, height: 33}}/>
                        Завантажити логи
                    </Button>
                </div>
            </div>
        </>
    );
}

const LogsTable = () => {
    const logs = [
        {
            ID: 1,
            IP: "192.168.20.25",
            firstEnter: "2021-05-01",
            lastEnter: "2021-05-05",
            login: "Pylay",
            role: "Адмін"
        },
        {
            ID: 1,
            IP: "192.168.20.25",
            firstEnter: "2021-05-01",
            lastEnter: "2021-05-05",
            login: "Pylay",
            role: "Адмін"
        },
        {
            ID: 1,
            IP: "192.168.20.25",
            firstEnter: "2021-05-01",
            lastEnter: "2021-05-05",
            login: "Pylay",
            role: "Адмін"
        },
        {
            ID: 1,
            IP: "192.168.20.25",
            firstEnter: "2021-05-01",
            lastEnter: "2021-05-05",
            login: "Pylay",
            role: "Адмін"
        }
    ];

    const [sort, setSort] = useState(false);
    const clickedSort = () => {
        setSort(!sort);
    }


    const theme = createTheme({
        components: {
            MuiButton: {
                styleOverrides: {
                    outlined: {
                        border: '2px solid #A78F00',
                        minWidth: 467,
                        minHeight: 51,
                        borderRadius: 6,
                        borderColor: '#A78F00',

                        '&:hover': {
                            border: '2px solid #A78F00',
                            minWidth: 467,
                            minHeight: 51,
                            borderRadius: 6,
                            borderColor: '#A78F00',
                            filter: 'brightness(90%)',
                            boxShadow: '0px 0 10px #A78F00',
                        },
                    },
                },
            },
        },
    });
    return (
        <>
            <ThemeProvider theme={theme}>
            <div className="logs_area">
                <div className="top_logs">

                    <div>
                        Користувачі сайту
                    </div>

                    <Button onClick={clickedSort} variant="outlined" className="StyledButton" sx={{color: grey[300], '&:hover': {bgcolor: '#1A1A1A'}}}>
                        Відсортувати за

                        <KeyboardArrowDownIcon sx={{height: 40, width: 40}} id={sort ? "sortOpen" : "sortClose"}/>
                    </Button>
                </div>
                {sort && (
                    <div className="sort_area" id={sort ? "twisted" : "deployed"}>
                        <ul className="sort_table">
                            <li className="sort_li"><button>ID</button></li>
                            <li className="sort_li"><button>First Enter</button></li>
                            <li className="sort_li"><button>Last Enter</button></li>
                        </ul>
                    </div>
                )}
                <div className="logs_header">
                    <List className="Ul">
                        <ListItem className="Li">ID</ListItem>
                        <ListItem className="Li">IP</ListItem>
                        <ListItem className="Li">First Enter</ListItem>
                        <ListItem className="Li">Last Enter</ListItem>
                        <ListItem className="Li">Login</ListItem>
                        <ListItem className="Li">Role</ListItem>
                    </List>
                </div>
                <div className="logs_table">
                    {logs.map((log, index) => (
                        <div key={index} className="logs_row">
                            <div className="logs_cell">{log.ID}</div>
                            <div className="logs_cell">{log.IP}</div>
                            <div className="logs_cell">{log.firstEnter}</div>
                            <div className="logs_cell">{log.lastEnter}</div>
                            <div className="logs_cell">{log.login}</div>
                            <div className="logs_cell">{log.role}</div>
                        </div>
                    ))}
                </div>
            </div>
            </ThemeProvider>
        </>
    );
};

export default Logs;
