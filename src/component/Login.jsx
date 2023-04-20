import axios from 'axios';
import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useNavigate  } from "react-router-dom";
// import { Jwt } from 'jsonwebtoken';

function Login() {
  // 変数の設定
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [messenger, setMessenger] = useState("");
  const navigate  = useNavigate ();
  // タイトルはSUBMITとしてクリック
  const loginSubmit = (e) => {
    e.preventDefault();
    const item = {username,password};
    axios.post('http://localhost:8080/login',item, {
      headers: {
        'Content-Type': 'application/json'
      }})
      .then(response => {
        if (response.data.status === "DEFEATED") {
          setMessenger("ユーザー名またはパスワードが間違います。");
        }else{
          console.log(response.data)
          sessionStorage.setItem("loginUsername", response.data.username);
          setMessenger("");
          navigate("/mypage");
        }
      })
    .catch(error => {
      // setMessenger("ユーザー名またはパスワードが間違います。")
    });
  };

    
  return (
    <div className='login'>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <form id="loginform" onSubmit={loginSubmit}>
              <div className="form-group">
                <label className='my-2'>ユーザー名</label>
                <input
                  type="text"
                  className="form-control my-2"
                  id="usernameInput"
                  name="usernameInput"
                  aria-describedby="usernameHelp"
                  placeholder="ユーザー名を入力してください"
                  onChange={(event) => setUsername(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label className='my-2'>パスワード</label>
                <input
                  type="password"
                  className="form-control my-2"
                  id="exampleInputPassword1"
                  placeholder="パスワードを入力してください"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className='form-group text-danger my-2'>
                <p>{messenger}</p>
              </div>
              <button type="submit" className="btn btn-primary my-2">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    <Link to="/">Home</Link>
    <Link to="/login">Login</Link>
    </div>
  )
}

export default Login