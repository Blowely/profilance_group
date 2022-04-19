import "./newsPageStyle.scss";
import {NewsItem} from "./NewsItem/NewsItem";
import {useState} from "react";
import Fuse from "fuse.js";
import {useDispatch, useSelector} from "react-redux";
import logo from "../../../img/header/logo.svg";
import {Link} from "react-router-dom";

export const NewsPage = () => {
    const news = useSelector((state) => state.news.news);
    const approvedNews = useSelector((state) => state.news.approved_news);
    const login = useSelector((state) => state.login.login);

    const allNews = news.concat(approvedNews);
    const handledNews = login === 'admin' ? allNews : approvedNews

    const [state, setState] = useState('');
    const [data, setData] = useState(handledNews);

    const fuse = new Fuse(handledNews, {
        keys: ["title", "text"]
    });

    const matches = [];

    const inputHandler = (e) => {
        setState(e.target.value);
        const result = fuse.search(e.target.value);
        if (!result.length) {
            setData([]);
        } else {
            result.forEach(({item}) => {
                matches.push(item);
            });
            console.log('matches = ',matches);
            setData(matches);
        }
    }

    return (
        <>
            <input type="text" onChange={inputHandler} className="input-search" placeholder="Поиск"/>
            {login && <Link to={"/add"} className="add-notice-btn item-link-button">Добавить новость</Link>}
            <div className="news-page">
                {!state && (login === 'admin' ? news : []).map((item) => {
                    return <NewsItem id={item.id} title={item.title} text={item.text} date={item.date}/>
                })}
                {!state && approvedNews.map((item) => {
                    return <NewsItem is_approved={item.is_approved} id={item.id} title={item.title} text={item.text} date={item.date}/>
                })}

                {state && data.map((item) => {
                    return <NewsItem is_approved={item.is_approved} id={item.id} title={item.title} text={item.text} date={item.date}/>
                })}
            </div>
        </>
    )
}