import React from 'react';
import Main_news_img from './../../assets/News_feed/main_news.svg'
import Last_news_img1 from './../../assets/News_feed/last_news_1.svg'
import Last_news_img2 from './../../assets/News_feed/last_news_2.svg'
import Last_news_img3 from './../../assets/News_feed/last_news_3.svg'
import Last_news_img4 from './../../assets/News_feed/last_news_4.svg'

const News_feed = () => {
    return (

        <div className="news_feed">
            <div className="container">

            </div>
        </div>
    );
};
const Main_news = () => {
    return (

    );
}
const Last_news = () => {
    const news_last = [
        {
            Title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aliquid assumenda atque aut autem beatae culpa dignissimos doloribus est eum eveniet hic ipsum mollitia nesciunt nulla officiis possimus provident quasi quod ratione recusandae temporibus, tenetur unde vel voluptas voluptatibus.',
            Image: 'this image',
            Time: this
        },
        {
            Title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aliquid assumenda atque aut autem beatae culpa dignissimos doloribus est eum eveniet hic ipsum mollitia nesciunt nulla officiis possimus provident quasi quod ratione recusandae temporibus, tenetur unde vel voluptas voluptatibus.',
            Image: 'this image',
            Time: this
        },
        {
            Title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aliquid assumenda atque aut autem beatae culpa dignissimos doloribus est eum eveniet hic ipsum mollitia nesciunt nulla officiis possimus provident quasi quod ratione recusandae temporibus, tenetur unde vel voluptas voluptatibus.',
            Image: 'this image',
            Time: this
        },
        {
            Title: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
            Description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad aliquid assumenda atque aut autem beatae culpa dignissimos doloribus est eum eveniet hic ipsum mollitia nesciunt nulla officiis possimus provident quasi quod ratione recusandae temporibus, tenetur unde vel voluptas voluptatibus.',
            Image: 'this image',
            Time: this
        }
    ];
    return (
        <div className="last_news">
            {
                news_last.map((element, index) =>(
                <div key={index}>
                {element.text}
            </div>
                ))}
        </div>
    );
}
export default News_feed;
