import "../assets/css/css_pages/Index.css";
import Header from "../components/Header";
import banner from "../assets/img/bannerChicosAborgue.png";
import sobre_nos from "..//assets/img/sobreNos.png";
import logo from "../assets/img/logo.png";
import Footer from "../components/Footer";


function Index(){
    return(
    <>
    <head>
        {/* <!-- Ícones do WhatsApp e Instagram --> */}
        <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css" rel="stylesheet"></link>
        {/* <!-- BOOSTSTRAP --> */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-sRIl4kxILFvY47J16cr9ZwB07vP4J8+LH7qKQnuqkuIAvNWLzeN8tE5YBujZqJLB" crossorigin="anonymous"></link>
        {/* <!-- Título da aba do navegador --> */}
        <title>Home</title>
        {/* <!-- Ícone da aba do navegador --> */}
        <link rel="shortcut icon" src={logo} type="image/x-icon"></link>
    </head>
    <body>    
        <Header />
        {/* SOBRE NOS/IMG BACKGROUND */}
        <div className="about-section" style={{backgroundImage: `url(${banner})`}}>
            <div className="about-content">
                <h2 class="about-title">Sobre nós</h2> 
                <p class="about-text">
                A <span class="highlight accent">Chico's Burguer</span> nasceu de um sonho simples, mas saboroso:
                deixar o <span class="highlight">estômago e o bolso</span> dos nossos clientes felizes.
                Tudo começou com <span class="highlight">Chico e seus amigos</span>, que sempre compartilharam a
                <span class="highlight glow">paixão por boa comida</span> e pela ideia de empreender com propósito.
                Juntos, decidiram criar um lugar onde o <span class="highlight underline">sabor gourmet</span>
                encontrasse <span class="highlight accent">preços acessíveis</span>, sem abrir mão da <span class="highlight">qualidade</span>.
                </p>

                <p class="about-text">
                Cada hambúrguer que sai da nossa chapa carrega <span class="highlight">dedicação, criatividade</span>
                e aquele <span class="highlight glow">toque caseiro</span> que faz toda a diferença.
                Na <span class="highlight accent">Chico's Burguer</span>, acreditamos que
                <span class="highlight strong">comer bem não precisa custar caro</span> — e é isso que entregamos todos os dias:
                delícias que cabem no seu gosto e no seu bolso.
                </p>
            </div>
        </div>
        {/* Seção: Mapa do Estabelecimento */}
        <section className="mapaGeral">
        <h2 className="titulo_sobrenos">Nosso Estabelecimento</h2>
        <p>Veja abaixo como nos encontrar!</p>

            {/* Mapa do Google Maps */}
            <div className="centralizar">
            <iframe
                className="mapaGeral"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.128082572564!2d-46.47815392378616!3d-23.63558366432492!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce68f78142e075%3A0x784e890dd965893f!2sR.%20Vicente%20Celestino%2C%201163%20-%20Jardim%20Sonia%20Maria%2C%20Mau%C3%A1%20-%20SP%2C%2009380-415!5e0!3m2!1spt-BR!2sbr!4v1743198480825!5m2!1spt-BR!2sbr"
                width="900"
                height="400"
                style={{ border: 0 }}  
                allowFullScreen=""  
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
        </section>
        {/* <!-- Seção: Produtos Oferecidos --> */}
        <section className="nossosprodutos">
            <h2>Nossos Produtos</h2>
            {/* <!-- Lista com ícones --> */}
            <div className="div_nossosprodutos">
                <ul className="lista">
                    <li>🍔 Lanches;</li>
                    <li>🍟 Porções;</li>
                    <li>🥤 Bebidas;</li>
                    <li>🍬 Sobremesas;</li>
                </ul>
                {/* <!-- Imagem ilustrativa dos produtos --> */}
                <img src={sobre_nos} className="img_nossosprodutos" />
            </div>
        </section>
        <div>
            <iframe
                className="div_video"
                width="560"
                height="315"
                src="https://www.youtube.com/embed/B8gyW3N3eGY?si=72YOhGqRRG_ZI0PT"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                style={{ borderRadius: "25px" }}
            ></iframe>
        </div>
        <Footer />
    </body>
    </>
    )
}

export default Index;

