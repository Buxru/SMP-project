import React from 'react';
import Side_bar from "../Side_bar/Side_bar";
import "./HomeAdmin.css"
import Logs from "../Logs/Logs";

const HomeAdmin = () => {
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
            </div>
        </div>
    );
};

export default HomeAdmin;