import React , {useState} from "react";
import '../css/loginForm.css'

export default function RegisterForm( props: {registerFunction: (registerInfo: { username: string; password: string; }, event: React.FormEvent<HTMLFormElement>) => void, error: string}) {

    const [registerInfo, setRegisterInfo] = useState({username: "", password: ""});

    function submitHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        props.registerFunction(registerInfo, event);
    }

    function renderErrorMessage() {
        return(
            <div className="errorMessage">
                {props.error}
            </div>
        );
    }

    return (
        <div className="form">
            <div>
                <h2 id="formTitle">Register to Test</h2>
                {(props.error !== "") ? renderErrorMessage() : ""}
            </div>
            <form onSubmit={submitHandler}>
                <div>
                    <input className="input-container"
                           type="text"
                           name="username"
                           placeholder="Username"
                           required
                           onChange={e => setRegisterInfo({...registerInfo, username: e.target.value})}
                           value = {registerInfo.username}
                    />
                </div>
                <div>
                    <input
                        className="input-container"
                        type="password"
                        name="password"
                        placeholder="Password"
                        required
                        onChange={e => setRegisterInfo({...registerInfo, password: e.target.value})}
                        value = {registerInfo.password}
                    />
                </div>
                <div>
                    <input
                        className="button-container"
                        type="submit"
                        name="register"
                        value="Register"
                    />
                </div>
            </form>
        </div>
    );
}