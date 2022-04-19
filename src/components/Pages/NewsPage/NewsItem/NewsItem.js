import "../newsPageStyle.scss";
import {useDispatch, useSelector} from "react-redux";
import {approveNewsAction, removeNewsAction} from "../../../../store/newsReducer";

export const NewsItem = (props) => {
    const dispatch = useDispatch();
    const news = useSelector((state) => state.news.news);
    const login = useSelector((state) => state.login.login) || "гость";

    const approveNews = () => {
        console.log('props.id = ', props.id);
        dispatch(approveNewsAction(props.id))
    }

    const removeNews = () => {
        console.log('sad');
        dispatch(removeNewsAction({id: props.id, is_approved: props.is_approved}))
    }

    return (
        <div className="news-page__item">
            <div>{props.title}</div>
            <br/>
            <div>{props.text}</div>
            <br/>
            <div>{props.date}</div>
            {login === 'admin' &&
                <div>
                    {!props.is_approved && <button onClick={approveNews}>Одобрить</button>}
                    <button onClick={removeNews}>Удалить</button></div>
            }
        </div>
    )
}