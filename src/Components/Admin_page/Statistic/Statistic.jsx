import React from 'react';
import './Statistic.css';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import PersonIcon from '@mui/icons-material/Person';
import PostAddIcon from '@mui/icons-material/PostAdd';
import Side_bar from "../Side_bar/Side_bar";
import {yellow} from '@mui/material/colors';

const Statistic = () => {
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
                <Cards/>
            </div>
        </div>
    );
};

const Cards = () => {
    const cards_info = [
        {
            name: "Кількість відвідувачів",
            icon: <PeopleAltIcon sx={{width: 130, height: 130, color: yellow[700]}}/>,
            value: 321
        },
        {
            name: "Кількість користувачів",
            icon: <PersonIcon sx={{width: 130, height: 130, color: yellow[700]}}/>,
            value: 110
        },
        {
            name: "Кількість постів",
            icon: <PostAddIcon sx={{width: 130, height: 130, color: yellow[700]}}/>,
            value: 112
        }
    ]
    return (
        <>
            <div className="card_area">
                {cards_info.map((element, index) =>
                    <div className="card" key={index}>
                        <div className="head">
                            {element.name}
                        </div>
                        <div className="card_inside">
                            {element.icon}
                            {element.value}
                        </div>
                    </div>
                )}
            </div>
            <div className="chart">

            </div>
        </>
    );
}

export default Statistic;
