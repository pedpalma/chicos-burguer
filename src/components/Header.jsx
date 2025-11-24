// Imports
import "../assets/css/css_components/Header.css";
import logo from "../assets/img/logo3.png";
import React, {useState} from "react";

// Function do Header
function Header() {
    const [open, setOpen] = useState(false)
    return (
            <div class="divHeader">
                <img src={logo} alt="Site do Chico" className="logo" />
                    <nav className={`nav-links ${open ? "active" : ""}`}>
                        <ul className="nav-list">
                            <li><a href="index.html" class="nav-item">Home</a></li>
                            <li><a href="produtos.html" class="nav-item">Produtos</a></li>
                            <li><a href="contatos.html" class="nav-item">Contato</a></li>
                            <li><a href="pedidos.html" class="nav-item">Pedidos</a></li>
                        </ul>
                    </nav>
                        <button className="menu-btn" onClick={() => setOpen(!open)}>
                        {open ? <span className="menu-icon open">{"\u2715"}</span> : <span className="menu-icon close">{"\u2630"}</span>}
                        </button>

                        {open && <div className="overlay" onClick={() => setOpen(false)}></div>}
            </div>
    )
}

export default Header;