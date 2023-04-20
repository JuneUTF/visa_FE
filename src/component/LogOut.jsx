import React from 'react'

function LogOut() {
    sessionStorage.removeItem("loginUsername");
  return (
    <div>LogOut OK</div>
  )
}

export default LogOut