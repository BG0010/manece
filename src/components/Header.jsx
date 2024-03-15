import React from 'react'
import Logo from "../assets/Logo.svg"

export default function Header() {
  return (
    <header>
        <div className="barra">
            <ul>
                <li><img src={Logo} alt="Logo do site"/></li>
                <li><button>login or signup</button></li>
            </ul>
        </div>
    </header>
  )
}
