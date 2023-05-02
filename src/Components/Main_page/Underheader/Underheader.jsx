import React from 'react';
import './Underheader.css';
import {Button, List, ListItem, ThemeProvider} from "@mui/material";
import { createTheme } from '@mui/material/styles';
import {grey} from "@mui/material/colors";
import './../Partition_news/Partition_news';

const theme = createTheme({
    status: {
        danger: '#e53e3e',
    },
    palette: {
        clicked_icon: {
            main: '#000000',
            darker: '#666666',
        },
    },
});
const MyComponent = () => {
    return (
        <ThemeProvider theme={theme}>
        <div className="underheader">
            <div className="container">
                <List className="Ul" sx={{maxWidth: 1116, height: 50}}>

                    <ListItem className="Li"><Button className="Underheader_A" sx={{width: 279, height: 50, color: grey[100]}} >Політика</Button></ListItem>
                    <ListItem className="Li"><Button className="Underheader_A" sx={{width: 279, height: 50, color: grey[100]}}>Освіта</Button></ListItem>
                    <ListItem className="Li"><Button className="Underheader_A" sx={{width: 279, height: 50, color: grey[100]}}>Охорона здоров'я</Button></ListItem>
                    <ListItem className="Li"><Button className="Underheader_A" sx={{width: 279, height: 50, color: grey[100]}} >Праця</Button></ListItem>
                </List>
            </div>
        </div>
        </ThemeProvider>
    );
};



export default MyComponent;
