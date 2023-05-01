import React from 'react';
import Header from "./Components/Header/header";
import Underheader from "./Components/Underheader/Underheader";
import News_feed from "./Components/News_feed/News_feed";
import Partition_news from "./Components/Partition_news/Partition_news";
import Footer from "./Components/Footer/Footer";


function App() {
    return (
        <div className="App">
            <div className="wrapper">
                <Header/>
                <Underheader/>
                <News_feed/>
                <Partition_news/>
                <Footer/>
            </div>
        </div>
    );
}

export default App;
