import React from 'react';
import Header from "./Header/header";
import Underheader from "./Underheader/Underheader";
import News_feed from "./News_feed/News_feed";
import Partition_news from "./Partition_news/Partition_news";
import Registration from "./Registration/Registration";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";

const MainPage = () => {
    return (
            <div className="wrapper">
                <Header/>
                <Underheader/>
                <News_feed/>
                <Partition_news/>
                <Footer/>
            </div>
    );
};

export default MainPage;
