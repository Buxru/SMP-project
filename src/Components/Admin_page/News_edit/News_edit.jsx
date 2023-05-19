import React, {useState} from 'react';
import Side_bar from "../Side_bar/Side_bar";
import "./News_edit.css"
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {grey} from '@mui/material/colors';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {Button} from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import TabPanel from '@mui/lab/TabPanel';
import {TabContext} from "@mui/lab";
import Wysywig from "../React_quill/React_quill";


const News_edit = () => {
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
                <News/>
            </div>
        </div>
    );
};

const News = () => {
    const [value, setValue] = useState(0);
    const info = [
        {
            ID: 1,
            genre: 'politics',
            hotTitle: 'Lorem ipsum',
            title: 'dolor sit amet, consectetur adipiscing elit',
            timeAgo: '3  дня назад',
            admin: 'Pylay',
            visible: true
        },
        {
            ID: 2,
            genre: 'education',
            hotTitle: 'Lorem ipsum',
            title: 'dolor sit amet, consectetur adipiscing elit',
            timeAgo: '3  дня назад',
            admin: 'Pokora',
            visible: false
        },
        {
            ID: 3,
            genre: 'job',
            hotTitle: 'Lorem ipsum',
            title: 'dolor sit amet, consectetur adipiscing elit',
            timeAgo: '3  дня назад',
            admin: 'Pylay',
            visible: true
        }
    ]
    const [visible, setVisible] = useState(info)
    const getVisible = (key) => {
        const id = key - 1;
        const updatedNews = [...visible];
        updatedNews[id].visible = !updatedNews[id].visible
        setVisible(updatedNews);
        //Отправить на сервер
    }
    const getColor = (genre) => {
        switch (genre) {
            case 'politics':
                return {color: '#0400B8'};
            case 'job':
                return {color: '#A94E3A'};
            case 'education':
                return {color: '#00A67E'};
            case 'healthcare':
                return {color: '#FF6A6A'};
        }
    }

    return (
        <div className="admin_news">
            <div className="news_edit_name">
                Новини
            </div>
            <div className="news_tabs">
                <TabContext value={value}>
                    <Tabs
                        TabIndicatorProps={{sx: {backgroundColor: '#F8C100'}}}
                        sx={{
                            "& button:hover": {color: 'white'},
                            "& button.Mui-selected": {color: 'white'},
                        }}
                        value={value}
                        onChange={(e, val) => setValue(val)}
                        aria-label="basic tabs example">
                        <Tab disableRipple='true' className="news_list" label="Керування новинами" sx={{
                            fontSize: 20,
                            color: grey[100],
                            textTransform: "none",
                            paddingLeft: 0,
                            paddingBottom: 0
                        }}/>
                        <Tab disableRipple='true' className="edit_news" label="Додати новину" sx={{
                            fontSize: 20,
                            color: grey[100],
                            textTransform: "none",
                            paddingLeft: 0,
                            paddingBottom: 0
                        }}/>
                    </Tabs>
                    <TabPanel value={0} className="TabPanel_news">
                        <div className="news_container">
                            {info.map((element) =>
                                <div className="news" key={element.ID}>

                                    <div className="news_genre" style={getColor(element.genre)}>
                                        {element.genre}
                                    </div>
                                    <div className="news_edit_info">
                                        <div className="edit_news_info">
                                            <span className="ID">#{element.ID}</span><span
                                            className="dash"> - </span><span
                                            className="news_edit_hot_title">{element.hotTitle}</span><span
                                            className="news_edit_title"> {element.title}</span>
                                        </div>
                                        <div className="hidden_eye">
                                            <Button disableRipple='true' onClick={() => getVisible(element.ID)}>
                                                {visible.find((item) => item.ID === element.ID)?.visible ? (
                                                    <VisibilityIcon sx={{color: grey[900], width: 58, height: 50}}/>
                                                ) : (
                                                    <VisibilityOffIcon sx={{color: grey[900], width: 58, height: 50}}/>
                                                )}
                                            </Button>
                                        </div>
                                    </div>
                                    <div className="news_edit_bottom">
                                        <div className="news_edit_admin">
                                            <span className="edited_by_admin">Редаговано адміном</span> <span
                                            className="admin_span">{element.admin}</span>
                                        </div>
                                        <div className="edit_and_time">
                                            <Button disableRipple='true' sx={{color: grey[900], height: 42, width: 20}}>
                                                <EditIcon sx={{height: 42, width: 30}}/>
                                            </Button>
                                            {element.timeAgo}
                                        </div>
                                    </div>

                                </div>
                            )}
                        </div>
                    </TabPanel>
                    <TabPanel value={1}>
                        <div className="news_edit_inputs">
                            <div className="news_edit_first_row">
                                <div className="news_edit_type">
                                    <span>Тип новини</span>
                                    <br/>
                                    <select className="news_type" id="news_type">
                                        <option value="Головна">Головна</option>
                                        <option value="Звичайна">Звичайна</option>
                                    </select>
                                </div>
                                <div className="news_edit_genre">
                                    <span>Жанр</span>
                                    <br/>
                                    <select className="news_genre" id="news_genre">
                                        <option value="politics">politics</option>
                                        <option value="education">education</option>
                                        <option value="healthcare">healthcare</option>
                                        <option value="job">job</option>
                                    </select>
                                </div>
                            </div>
                            <div className="news_edit_second_row">
                                <div className="news_edit_hot_title">
                                    <span>Горяча назва</span>
                                    <br/>
                                    <input type="text"/>
                                </div>
                                <div className="news_edit_title">
                                    <span>Заголовок</span>
                                    <br/>
                                    <input type="text"/>
                                </div>
                            </div>
                            <div className="news_edit_third_row">
                                <span>Короткий опис</span>
                                <br/>
                                <textarea rows="5"></textarea>
                            </div>
                        </div>
                        <div className="news_edit_wysywig">
                            <span className="news_edit_wysywig_span">Пост новини</span>
                            <br/>
                            <Wysywig/>
                        </div>
                    </TabPanel>
                </TabContext>

            </div>


        </div>
    );
}


export default News_edit;
