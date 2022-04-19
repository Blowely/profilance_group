import "./AuthPageStyles.scss";
import {turnOffAuthPopup} from "../../../store/authPopupReducer";
import {useDispatch} from "react-redux";
import closeIcon from "../../../img/auth/closeIcon.png";
import {authenticationUser, loginAction} from "../../../store/authLoginReducer";
import {useState} from "react";
import {putNotifyAction} from "../../../store/notifyResultReducer";

export const AuthPage = () => {
    const [login, setLogin] = useState('');
    const [pass, setPass] = useState('');

    const dispatch = useDispatch();

    const closeAuthPopupHandler = () => {
        dispatch(turnOffAuthPopup());
    }

    const onChangeInputHandler = (e) => {
        switch (e.target.type) {
            case 'email': return setLogin(e.target.value);
            case 'password': return setPass(e.target.value);
            default: return;
        }
    }

    const submitData = () => {
        if (!login || !pass) {
            dispatch(putNotifyAction("Заполните все поля"));
            return;
        }

        const isAuth = authenticationUser({login: login, password: pass});

        if (isAuth) {
            dispatch(loginAction(login));
            dispatch(putNotifyAction("Вы успешно авторизированны"));
            dispatch(turnOffAuthPopup())
        } else {
            dispatch(putNotifyAction("Неправильный логин или пароль"))
        }
    }

    return (
        <div className="popup">
            <div className="container">
                <div className="left">
                    <div className="login">Login</div>
                    <div className="eula">By logging in you agree to the ridiculously long terms that you didn't
                        bother to read
                    </div>
                </div>
                <div className="right">
                    <img style={{width: "30px", height: "30px", float:"right", cursor:"pointer"}}
                         src={closeIcon}
                         alt=""
                         onClick={closeAuthPopupHandler}
                    />
                    <div className="form">
                        <label htmlFor="email">login</label>
                        <input type="email" id="email" onChange={onChangeInputHandler}/>
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={onChangeInputHandler}/>
                        <input type="submit" id="submit" value="Submit" onClick={submitData}/>
                    </div>
                </div>
            </div>
        </div>
    )
}