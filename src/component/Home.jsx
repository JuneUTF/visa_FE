import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  let LoginUsername =sessionStorage.getItem("loginUsername")
  console.log({LoginUsername})

  return (
    <div>
        <h1>Đây là Home</h1>
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
    </div>
  )
}

export default Home