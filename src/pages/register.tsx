import React, {useState} from "react";
import RegisterForm from "../components/registerForm";
import axios from "axios";

export default function Register() {

    const [error, setError] = useState("");

    function RegisterFunction(registerInfo: { username: string; password: string; }, event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        axios.post("http://localhost:8080/register",
            null,
            {params: {
                username: registerInfo.username,
                password: registerInfo.password
            }})
            .then(function (response) {
                alert("User successfully registered!");
                console.log(response);
            })
            .catch(function (response) {
                setError("There was an error!");
                console.log(response);
            });
    }

    return (
        <div className="RegisterPage">
            <RegisterForm
                registerFunction={RegisterFunction}
                error={error}
            />
        </div>
    );
}