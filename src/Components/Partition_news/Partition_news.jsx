import React from 'react';
import './Partition_news.css';

const Partition_news = () => {


    return (
        <>
            <OnePartition/>
            <OnePartition/>
            <OnePartition/>
            <OnePartition/>
        </>
    );
};
const OnePartition = () => {
    return (
        <>
            <Partition_genre/>
            <div className="partition_news">
                <div className="container">
                    <Big_partition_news/>
                </div>
            </div>
        </>
    );
}
const Partition_genre = () => {
    const partitionGenre = {
        genre: 'some genre'
    }
    return (
        <div className="partition">
            <div className="container">
                <div className="partition_line_top"></div>
                <div className="partition_name">{partitionGenre.genre}</div>
                <div className="line"></div>
            </div>
        </div>
    );
}
const Big_partition_news = () => {
    const bigPartitionNews = [
        {
            image: require('./../../assets/News_feed/main_news.svg').default,
            genre: 'some genre',
            hotTitle: 'some hot title',
            title: 'title',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aliquid assumendptatibus.',
            time: '3 хв тому'
        },
        {
            image: require('./../../assets/News_feed/main_news.svg').default,
            genre: 'some genre',
            hotTitle: 'some hot title',
            title: 'title',
            description: 'Lorem ipsum dolor sit ametel voluptas voluptatibus.',
            time: '3 хв тому'
        }
    ]
    return (
        <>
            {bigPartitionNews.map((element, index) =>
                <div className="big_partition_news" key={index}>
                    <div className="big_partition_news_img">
                        <img src={element.image} alt="main_news_img"/>
                    </div>
                    <div className="genre">{element.genre}</div>
                    <div className="big_partition_news_name">
                        <span>{element.hotTitle}</span> {element.title}
                    </div>
                    <div className="big_partition_news_description">
                        {element.description}
                    </div>
                    <div>
                        <h6>{element.time}</h6>
                    </div>
                </div>
            )}
            <Small_partition_news/>
        </>
    );
}


const Small_partition_news = () => {
    const smallPartitionNews = [
        {
            hotTitle: 'some hot title',
            title: 'title',
            image: require('./../../assets/News_feed/main_news.svg').default,
            time: '3 хв тому'
        },
        {
            hotTitle: 'some hot title',
            title: 'title',
            image: require('./../../assets/News_feed/main_news.svg').default,
            time: '3 хв тому'
        },
        {
            hotTitle: 'some hot title',
            title: 'title',
            image: require('./../../assets/News_feed/main_news.svg').default,
            time: '3 хв тому'
        },
        {
            hotTitle: 'some hot title',
            title: 'title',
            image: require('./../../assets/News_feed/main_news.svg').default,
            time: '3 хв тому'
        }
    ]
    return (
        <>
            {smallPartitionNews.map((element, index) =>
                <div className="small_partition_news">
                    <div className="small_partition_news_name">
                        <span>{element.hotTitle}</span> {element.title}
                        <div><h6>{element.time}</h6></div>
                    </div>
                    <div className="small_partition_news_img">
                        <img src={element.image} alt="small_partition_news_img"/>

                    </div>
                    {index < 3 && <div className="line"></div>}
                </div>

            )}
        </>
);








}


export default Partition_news;
