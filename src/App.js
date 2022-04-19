import {useDispatch, useSelector} from "react-redux";
import "./App.scss";
import {Header} from "./components/Header/Header";
import {MainContent} from "./components/MainContent/MainContent";
import {BrowserRouter} from "react-router-dom";
import {AuthPage} from "./components/Pages/AuthPage/AuthPage";
import {cleanNotifyAction} from "./store/notifyResultReducer";

function App() {
    const dispatch = useDispatch();
    const isDisplayAuthPopup = useSelector((state) => state.display_auth_popup.display_auth_popup);
    const resultNotify = useSelector((state) => state.notify.notify);

    const showResultNotify = () => {
        setTimeout(() => dispatch(cleanNotifyAction()), 2000);
        return (
          <div className="notify">
              {resultNotify}
          </div>  
        );
    }

    const darkBackground = isDisplayAuthPopup ? "dark-background" : "";

    return (
        <div className="App">
            <BrowserRouter>
                <div className={darkBackground} />

                {isDisplayAuthPopup &&
                    <AuthPage/>
                }

                {resultNotify &&
                    showResultNotify()
                }

                <Header />
                <MainContent />
            </BrowserRouter>
        </div>
    );
}

export default App;
