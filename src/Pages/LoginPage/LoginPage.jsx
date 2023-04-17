import React, { useState } from 'react'

const LoginPage = ({setUser}) => {

  const [login, setLogin] = useState({
    user:null
  })

  function handleLogin(e){
    e.preventDefault()
    setUser(login)
  }

  function handleInput (e){
    setLogin({
      ...login,
      [e.target.name] : e.target.value
    })
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin} >
      <label >Login</label>
      <input onChange={handleInput} type="text" name='user' value={login.username} />

      </form>
    </div>
  )
}

export default LoginPage