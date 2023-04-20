import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  let LoginUsername =sessionStorage.getItem("loginUsername")
  console.log({LoginUsername})

  return (
    <div>
        <h1>Đây là Home</h1>
        <Link to={`/delete/${LoginUsername}`}>削除</Link>
        <Link to="/logout">ログアウト</Link>
    </div>
  )
}

export default Home