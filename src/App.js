import React from 'react';
import Header from "./Components/Main_page/Header/header";
import Underheader from "./Components/Main_page/Underheader/Underheader";
import News_feed from "./Components/Main_page/News_feed/News_feed";
import Partition_news from "./Components/Main_page/Partition_news/Partition_news";
import Footer from "./Components/Main_page/Footer/Footer";
import Registration from "./Components/Registration/Registration";


function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <Underheader/>
                <News_feed/>
                <Partition_news/>
                <Registration/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
