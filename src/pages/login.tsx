import React, {useState} from "react";
import LoginForm from "../components/loginForm";
import {useNavigate} from "react-router-dom";
import axios from "axios";

export default function Login() {

    const navigate = useNavigate();

    const [user, setUser] = useState("");
    const [error, setError] = useState("");

    const LoginFunction = (loginInfo: { username: string; password: string; }) => {
        axios.post("http://localhost:8080/login",
            null,
            {
                params: {
                    username: loginInfo.username,
                    password: loginInfo.password
                }
            })
            .then(function (response) {
                if (!response.data || !(response.data.username === loginInfo.username && response.data.password === loginInfo.password)) {
                    setError("Invalid Username or Password");
                } else {
                    setUser(loginInfo.username);
                    console.log(user);
                    if (response.data.username === "rick") {
                        window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
                    }
                    navigate("/todo");
                }
            })
            .catch(function (response) {
                setError("There was an error!");
                console.log(response);
            });
    };

    return (
        <div className="LoginPage">
            <LoginForm
                loginFunction={LoginFunction}
                error={error}
            />
        </div>
    );
}