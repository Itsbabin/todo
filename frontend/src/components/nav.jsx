import React from 'react'
import { Link } from "react-router-dom";
import '../css/nav.css'

export default function Nav() {
    var login = "login"
  return (
    <>
    <nav>
        <div className="logo"></div>
        <div className="options">
            <Link to="/login">login</Link>
        </div>
    </nav>
    </>
  )
}
