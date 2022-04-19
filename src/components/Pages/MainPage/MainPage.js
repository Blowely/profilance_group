import "../App.css"

export const Body = () => {
    const login = "" || "гость";
    return (
        <div className={"body-wrapper"}>
            <div className="body">
                Привет, {login}
            </div>
        </div>
    )
}