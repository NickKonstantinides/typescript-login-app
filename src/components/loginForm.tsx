import React , {useState} from "react";
import '../css/loginForm.css'

export default function LoginForm(loginFunction: Function, error: string) {

    const [loginInfo, setLoginInfo] = useState({username: "", password: ""});

    function submitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        loginFunction(loginInfo);
    }

    function renderErrorMessage() {
        return(
            <div className="errorMessage">
                {error}
            </div>
        );
    }

    return (
        <div className="form">
            <div>
                <h2 id="formTitle">Login to Test</h2>
                {(error !== "") ? renderErrorMessage() : ""}
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