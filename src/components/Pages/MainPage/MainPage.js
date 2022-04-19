import "../../../App.scss"
import {useSelector} from "react-redux";

export const MainPage = () => {
    const login = useSelector((state) => state.login.login) || "гость";

    return (
        <div className={"body-wrapper"}>
            <div className="body">
                <h3>Привет, {login}</h3>
            </div>
        </div>
    )
}