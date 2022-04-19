import "../App.css"
import logo from '../img/header/logo.svg';

export const Header = () => {

    return (
        <div className={"header-wrapper"}>
            <div className="header">
                <div className="header__item item-link"><img src={logo} alt=""/></div>
                <div className="header__item item-link">Новости</div>
                <div className="header__item item-link">Вход</div>
            </div>
        </div>
    )
}