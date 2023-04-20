import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

function DeleteUser() {
  // useParamsを通じてusernameが取り
  let LoginUsername =sessionStorage.getItem("loginUsername")
  const [userData,setUserData] = useState([]);
  const {username} = useParams();
  useEffect(()=>{
  axios.get("http://localhost:8080/delete/"+{LoginUsername,username})
  .then(response =>{
    setUserData(response.data[0]);
  })
  .catch(error =>{
    console.log(error)
  })
 },[1])
 const deleteAPI =(e)=>{

  e.preventDefault();
  axios.post("http://localhost:8080/delete/",{username},
  {
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response =>{
      console.log(response)
  })
  .catch(error =>{
    console.log(error)
  })
 }

      if(userData===undefined){
        return(
          <>
          <h1>ユーザー名が存じませんません</h1>
          </>
        )
      }else{
        return(
          <>
          <h1>{userData.username}</h1>
      <table>
        <tr>
          <td>ユーザー名：</td>
          <td>{userData.username}</td>
        </tr>
        <tr>
          <td>ビザID：：</td>
          <td>{userData.visa_id}</td>
        </tr>
        <tr>
          <td>名前：</td>
          <td>{userData.name}</td>
        </tr>
        <tr>
          <td>生年月日：</td>
          <td>{userData.birthday}</td>
        </tr>
        <tr>
          <td>性別：</td>
          <td>{userData.sex}</td>
        </tr>
        <tr>
          <td>国籍：</td>
          <td>{userData.country}</td>
        </tr>
        <tr>
          <td>住所：</td>
          <td>{userData.address}</td>
        </tr>
       <tr>
          <td>ビザ期限：</td>
          <td >{userData.visa_date}</td>
        </tr>
        <tr>
          <td>在留資格：</td>
          <td >{userData.visa_type}</td>
        </tr>
      </table>
      <button type='submit' onClick={deleteAPI}>削除</button>
          </>
        )
      }
}

export default DeleteUser