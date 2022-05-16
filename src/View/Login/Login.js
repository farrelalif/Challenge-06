import React, { useState } from 'react'
import "./Login.css";
import gambar1 from '../../Assets/Img/Rectangle 62.png'
import GoogleButton from 'react-google-button';
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  
  let axios = require('axios');
  let navigate = useNavigate();

  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [Host, setHost] = useState(process.env.REACT_APP_HOST)

  const handleChange = (event) => {
    if (event.target.id === "email") {
      setEmail(event.target.value)
    } else {
      setPassword(event.target.value)
    }

    // console.log(event)
    // console.log(event.target.value)
    // console.log(event.target.id, "ini email")
  }

  const handleSubmit = () => {
    let data ={
      "email": Email,
      "password": Password,
    };

    var config = {
      method: 'post',
      url: `${Host}/admin/auth/login`,
      headers: {
        'Content-Type': 'application/json'
      },
      data: data
    };

    axios(config)
      .then(function (response) {
        console.log(response)
        sessionStorage.setItem("Token", response.data)
        console.log(JSON.stringify(response.data));
        navigate(`/landingcar`)
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
          <h1>Welcome</h1>

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
              <button className="buttonlogin" onClick={() => { handleSubmit() }}>Login</button>
            </div>

            <GoogleButton className="googlebutton"></GoogleButton>

          </div>
        </div>
      </div>
    </div>
  )
}
