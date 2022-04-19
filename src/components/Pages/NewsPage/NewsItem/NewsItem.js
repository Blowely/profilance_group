import "./newsPageStyle.css";

export const NewsItem = (props) => {

    return (
        <div className="news-page__item">
            <div>{props.title}</div>
            <br/>
            <div>{props.text}</div>
            <br/>
            <div>{props.date}</div>
        </div>
    )
}