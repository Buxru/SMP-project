import React from 'react';
import Header from "./Components/Main_page/Header/header";
import Underheader from "./Components/Main_page/Underheader/Underheader";
import News_feed from "./Components/Main_page/News_feed/News_feed";
import Partition_news from "./Components/Main_page/Partition_news/Partition_news";
import Footer from "./Components/Main_page/Footer/Footer";
import Registration from "./Components/Registration/Registration";
import MyRouter from "./Components/Router/MyRouter";


function App() {
    return (
        <div className="App">
                <MyRouter/>
        </div>
    );
}

export default App;
