// Imports
import "../assets/css/css_components/Header.css";
import logo from "../assets/img/logo3.png";

// Function do Header
function Header() {
    return (
        <header>
            <div class="divHeader">
                {/* Logo */}
                <img src={logo} alt="Site do Chico" class="logo" />
                {/* Menu nav */}
                <nav class="nav-box">
                    {/* Indices do menu nav */}
                    <ul class="nav-list">
                        <li><a href="index.html" class="nav-item">Home</a></li>
                        <li><a href="produtos.html" class="nav-item">Produtos</a></li>
                        <li><a href="contatos.html" class="nav-item">Contato</a></li>
                        <li><a href="pedidos.html" class="nav-item">Pedidos</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;