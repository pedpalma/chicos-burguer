// Imports
import "../assets/css/css_components/Footer.css";
import logo from "../assets/img/logo4.png"
import banner from "../assets/img/banner.png"

function Footer() {
    return (
        <div>
            <footer className="footer" style={{backgroundImage: `url(${banner})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat",}}>
                {/* Logo no rodapé */}
                <img src={logo} title="Site da Jessica's Studio" className="logo_footer"
                />

                {/* Contatos com ícones */}
                <p>
                    Faça seu pedido!
                    <a href="https://wa.me/5511983881471">
                        <i className="fa fa-whatsapp"></i> (11)98388-1471
                    </a>{" "}
                    |
                    <a href="https://instagram.com/hb_palma">
                        <i className="fa fa-instagram"></i>@hb_palma
                    </a>
                </p>
            </footer>
        </div>
    )
}
export default Footer;
