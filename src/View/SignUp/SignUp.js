import React, { useState } from 'react'
import "./SignUp.css";
import gambar1 from '../../Assets/Img/Rectangle 62.png'
import { Link } from 'react-router-dom';

export const SignUp = () => {

    let axios = require('axios');

    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [Host, setHost] = useState(process.env.REACT_APP_HOST)

    const handleChange = (event) => {
        if (event.target.id === "email") {
            setEmail(event.target.value)
        } else {
            setPassword(event.target.value)
        }
    }

    const onSubmit = () => {
        let data = JSON.stringify({
            "email": Email,
            "password": Password,
        });

        var config = {
            method: 'post',
            url: `${Host}/admin/auth/register`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(response);
                alert(response.data.message)
            })
            .catch(function (error) {
                console.log(error);
            });

    }
    return (
        <div>
            <div className="container-login">
                <div className="gbrMobil"> </div>

                <div className="field-login">
                    <img src={gambar1} />
                    <h1>Create New Account</h1>

                    <div className="container">
                        <p>Email</p>
                        <input onChange={(e) => { handleChange(e) }}
                            className="inputlogin" id="email" type="text"
                            placeholder="Contoh: johndee@gmail.com" name="uname" required />

                        <p>Password</p>
                        <input onChange={(e) => { handleChange(e) }}
                            className="inputlogin" id="password" type="password"
                            placeholder="6+ karakter" name="psw" required />

                        <div className="halaman">
                            <button className="buttonlogin" onClick={() => { onSubmit() }}>Sign Up</button>
                        </div>

                        <div>
                            Already havean account?
                            <Link to="/login">Login</Link>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
