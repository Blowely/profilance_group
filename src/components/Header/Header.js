import "../../App.scss"
import logo from '../../img/header/logo.svg';
import {Link} from "react-router-dom";
import {turnOnAuthPopup} from "../../store/authPopupReducer";
import {useDispatch, useSelector} from "react-redux";
import {logoutAction} from "../../store/authLoginReducer";

export const Header = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.login.login);

    const authHandler = () => {
        if (isAuth) {
            dispatch(logoutAction());
        } else {
            dispatch(turnOnAuthPopup());
        }
    }

    return (
        <div className={"header-wrapper"}>
            <div className="header">
                <Link to={"/"} className="header__item item-link"><img src={logo} alt=""/></Link>
                <Link to={"/news"} className="header__item item-link">Новости</Link>
                <div className="header__item item-link" onClick={authHandler}>{isAuth ? "Выход" : "Вход"}</div>
            </div>
        </div>
    )
}