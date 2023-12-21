import React from 'react'
import '../css/login.css'

export default function Login() {
  return (
    <>
    <form action="login_process.php" method="post">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required/>

        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required/>

        <button type="submit">Login</button>
    </form>
    </>
  )
}