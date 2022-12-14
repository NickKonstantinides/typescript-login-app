import React , {useState} from "react";
import '../css/loginForm.css'
import {useNavigate} from "react-router-dom";

export default function LoginForm( props: {loginFunction: (loginInfo: { username: string; password: string; }) => void, error: string}) {

    const [loginInfo, setLoginInfo] = useState({username: "", password: ""});

    const navigate = useNavigate();

    function submitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        props.loginFunction(loginInfo);
    }

    function renderErrorMessage() {
        return(
            <div className="errorMessage">
                {props.error}
            </div>
        );
    }

    function gotoHome() {
        navigate("/");
    }

    return (
        <div className="form">
            <div>
                <button
                    className="gotoHome"
                    onClick={gotoHome}
                >
                    &#8249;
                </button>
            </div>
            <div>
                <h2 id="formTitle">Login to Test</h2>
                {(props.error !== "") ? renderErrorMessage() : ""}
            </div>
            <form onSubmit={submitHandler}>
                <div>
                    <input className="input-container"
                           type="text"
                           name="username"
                           placeholder="Username"
                           required
                           onChange={e => setLoginInfo({...loginInfo, username: e.target.value})}
                           value = {loginInfo.username}
                    />
                </div>
                <div>
                    <input
                        className="input-container"
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        onChange={e => setLoginInfo({...loginInfo, password: e.target.value})}
                        value = {loginInfo.password}
                    />
                </div>
                <div>
                    <input
                        className="button-container"
                        type="submit"
                        name="login"
                        value="Login"
                    />
                </div>
            </form>
        </div>
    );
}