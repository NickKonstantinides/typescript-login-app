import React, {useState} from "react";
import LoginForm from "../components/loginForm";
import {useNavigate} from "react-router-dom";

export default function Login() {

    const navigate = useNavigate();

    const userDatabase = [
        {
            name: "adminUser",
            info: {
                username: "admin",
                password: "pass"
            }
        },
        {
            name: "rickroll",
            info: {
                username: "rick",
                password: "roll"
            }
        }
    ];

    const [user, setUser] = useState("");
    const [error, setError] = useState("");

    const LoginFunction = (loginInfo: { username: string; password: string; }) => {
        const userData = userDatabase.find(validUser => {
            return(validUser.info.username === loginInfo.username);
        });
        if (!userData || !(userData.info.username === loginInfo.username && userData.info.password === loginInfo.password)) {
            setError("Invalid Username or Password");
        } else {
            setUser(loginInfo.username);
            console.log(user);
            if (userData.info.username === "rick") {
                window.location.replace("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
            }
            navigate("/todo");
        }
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