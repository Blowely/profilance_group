import {useState} from "react";
import {useDispatch} from "react-redux";
import {addNewsAction} from "../../../store/newsReducer";

export const AddPage = () => {
    const dispatch = useDispatch();

    const [title, setTitle] = useState('');
    const [text, setText] = useState('');

    const inputHandler = (e) => {
        switch (e.target.name) {
            case "title": setTitle(e.target.value); break;
            case "text": setText(e.target.value); break;
            default: return;
        }
    }

    const addNews = () => {
        dispatch(addNewsAction({title: title, text: text}))
    }

    return (
        <>
            <br/>
            <h2>Добавление новости</h2>
            <input type="text" name="title" onChange={inputHandler} className="input-form" placeholder="Название"/>
            <input type="text" name="text" onChange={inputHandler} className="input-form" placeholder="Описание"/>
            <button onClick={addNews} className="add-notice-btn item-link-button">Добавить новость</button>
        </>
    )
}