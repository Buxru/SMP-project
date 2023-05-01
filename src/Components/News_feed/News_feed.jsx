import React from 'react';
import './News_feed.css';
import {Image, Title} from "@mui/icons-material";

const News_feed = () => {
    return (

        <div className="news_feed">
            <div className="container">
                <Main_news/>
                <Last_news/>
            </div>

        </div>
    );
};
const Main_news = () => {
    const Main_news = {
        image: require('./../../assets/News_feed/main_news.svg').default,
        genre: 'some genre',
        hotTitle: 'some hot title',
        title: 'title',
        description: 'ajgjudshgfuigbdsufigbhdishgyug dushgsgdufgdnsuig dfs igldbnlfus igbsd g uf i bisd gifsdgnliuf sdbngifu dbglsf if',
        time: '5 хв тому'
    }
    return (
        <div className="main_news">
            <div className="main_news_img">
                <img src={Main_news.image} alt="main_news_img"/>
            </div>
            <div className="genre">{Main_news.genre}</div>
            <div className="news_name">
                <span>{Main_news.hotTitle}</span> {Main_news.title}
            </div>
            <div className="news_description">
                {Main_news.description}
            </div>
            <div>
                <h6>{Main_news.time}</h6>
            </div>

        </div>
    );
}
const Last_news = () => {
    const news_last = [
        {
            HotTitle: 'Lorem ipsum',
            Title: 'dolor sit amet, consectetur adipisicing elit.',
            Image: require('./../../assets/News_feed/main_news.svg').default,
            Time: '3 minutes'
        }, {
            HotTitle: 'Lorem ipsum',
            Title: 'dolor sit amet, consectetur adipisicing elit.',
            Image: require('./../../assets/News_feed/last_news_2.svg',).default,
            Time: '3 minutes'
        }, {
            HotTitle: 'Lorem ipsum',
            Title: 'dolor sit amet, consectetur adipisicing elit.',
            Image: require('./../../assets/News_feed/last_news_3.svg',).default,
            Time: '3 minutes'
        }, {
            HotTitle: 'Lorem ipsum',
            Title: 'dolor sit amet, consectetur adipisicing elit.',
            Image: require('./../../assets/News_feed/last_news_4.svg',).default,
            Time: '3 minutes'
        }

    ];
    return (
        <>
            {news_last.map((element, index) => (
                <div className="last_news" key={index}>
                    <div className="news_name">
                        <span>{element.HotTitle}</span> {element.Title}
                        <br/>
                        <br/>
                        <div>
                            <h6>{element.Time}</h6>
                        </div>


                    </div>
                    <div className="last_news_img">
                        <img src={element.Image} alt="last_news_1"/>
                    </div>
                    {index < 3 && (
                        <div className="line_last_news" style={{position: "relative", marginTop: "20px"}}></div>
                    )}
                </div>
            ))}
        </>
    );


}
export default News_feed;
