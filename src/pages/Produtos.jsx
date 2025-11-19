import React, { useEffect } from "react";
import "../assets/css/css_pages/Produtos.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";

// Imagens
import aborgue1 from "../assets/img/aborgue1.png";
import aborgue1_1 from "../assets/img/aborgue1.1.png";
import aborgue1_2 from "../assets/img/aborgue1.2.png";

import aborgue2 from "../assets/img/aborgue2.png";
import aborgue2_1 from "../assets/img/aborgue2.1.png";
import aborgue2_2 from "../assets/img/aborgue2.2.png";

import aborgue3 from "../assets/img/aborgue3.png";
import aborgue3_1 from "../assets/img/aborgue3.1.png";
import aborgue3_2 from "../assets/img/aborgue3.2.png";

import aborgue4 from "../assets/img/aborgue4.png";
import aborgue4_1 from "../assets/img/aborgue4.1.png";
import aborgue4_2 from "../assets/img/aborgue4.2.png";

import aborgue5 from "../assets/img/aborgue5.png";
import aborgue5_1 from "../assets/img/aborgue5.1.png";
import aborgue5_2 from "../assets/img/aborgue5.2.png";

import aborgue6 from "../assets/img/aborgue6.png";
import aborgue6_1 from "../assets/img/aborgue6.1.png";
import aborgue6_2 from "../assets/img/aborgue6.2.png";

import cebola from "../assets/img/cebola.png";
import cebola2 from "../assets/img/cebola2.png";
import cebola3 from "../assets/img/cebola3.png";

import batata from "../assets/img/batata.png";
import batata2 from "../assets/img/batata2.png";
import batata3 from "../assets/img/batata3.png";

import dadosdetapioca from "../assets/img/dadosdetapioca.png";
import dadosdetapioca2 from "../assets/img/dadosdetapioca2.png";
import dadosdetapioca3 from "../assets/img/dadosdetapioca3.png";

function Produtos() {

  const data = new Date();

  const dia = [
    "Domingo",
    "Segunda-Feira",
    "Terça-Feira",
    "Quarta-Feira",
    "Quinta-Feira",
    "Sexta-Feira",
    "Sábado",
  ];

  const mes = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const produtos = [
    {
      id: 1,
      nome: "Clássico Chico Smash Burger",
      descricao:
        "Dois smash burgers de 120g no pão de brioche, queijo cheddar, maionese caseira, cebola caramelizada",
      preco: "R$ 29,90",
      imagens: [aborgue1, aborgue1_1, aborgue1_2],
    },
    {
      id: 2,
      nome: "Chico's Bacon Churrasco",
      descricao:
        "Um burger alto de 220g Angus no pão de brioche, queijo gruyere, molho agridoce picante e bacon crispy",
      preco: "R$ 39,90",
      imagens: [aborgue2, aborgue2_1, aborgue2_2],
    },
    {
      id: 3,
      nome: "Chico's Salada Master",
      descricao:
        "Um burger alto de 190g Angus no pão de brioche, queijo Prato, maionese picante e Mix de saladas",
      preco: "R$ 32,90",
      imagens: [aborgue3, aborgue3_1, aborgue3_2],
    },
    {
      id: 4,
      nome: "Chico's Australiano",
      descricao:
        "Dois smash burgers de 120g no pão australiano, creme de queijo cheddar, bacon crispy",
      preco: "R$ 39,90",
      imagens: [aborgue4, aborgue4_1, aborgue4_2],
    },
    {
      id: 5,
      nome: "Chico's Frango Brabo",
      descricao:
        "Um peito de frango empanado de 200g no pão de francês redondo, queijo Prato, maionese ácida e Mix de saladas",
      preco: "R$ 29,90",
      imagens: [aborgue5, aborgue5_1, aborgue5_2],
    },
    {
      id: 6,
      nome: "Chico's Master Fish",
      descricao:
        "Um filé de peixe empanado de 150g no pão de brioche, queijo Prato, maionese Tártaro e Mix de saladas",
      preco: "R$ 34,90",
      imagens: [aborgue6, aborgue6_1, aborgue6_2],
    },
    {
      id: 7,
      nome: "Chico's Cebola Cabulosa",
      descricao:
        "Porção de anéis de cebola empanada com maionese de alho",
      preco: "R$ 19,90",
      imagens: [cebola, cebola2, cebola3],
    },
    {
      id: 8,
      nome: "Chico's Batata Bolada",
      descricao:
        "Porção de batatas com cheddar e bacon temperada com o segredo da casa",
      preco: "R$ 19,90",
      imagens: [batata, batata2, batata3],
    },
    {
      id: 9,
      nome: "Chico's Dadinhos Maldosos",
      descricao: "Porção de dadinhos de tapioca fritos com geleia de pimenta",
      preco: "R$ 14,90",
      imagens: [dadosdetapioca, dadosdetapioca2, dadosdetapioca3],
    },
  ];

  function abrirDetalhes(nome, imagens, descricao) {
    const url = `/pop_produto.html?nomeProd=${encodeURIComponent(nome)}
      &imagemProd=${encodeURIComponent(JSON.stringify(imagens))}
      &descricaoProd=${encodeURIComponent(descricao)}`;

    window.open(url, "_blank", "width=600,height=500");
  }

  const hojeTexto = `${dia[data.getDay()]}, ${data.getDate()} de ${
    mes[data.getMonth()]
  } de ${data.getFullYear()}`;

  return (
    <>
      <Header />

      <main>
        <section className="secao-produtos">
          <h1 className="produtos-titulo">Nossos Produtos</h1>
          <p className="relogio">{hojeTexto}</p>

          <div className="info-produtos">
            <h2>Atendemos via delivery e retirada no local 🚀</h2>
            <p>Explore nosso cardápio de lanches artesanais e porções especiais.</p>
            <p>Sabores exclusivos que vão conquistar seu paladar! 🍔🔥</p>
          </div>
        </section>

        <div className="container">
          {produtos.map((p) => (
            <div
              key={p.id}
              className="card"
              onClick={() => abrirDetalhes(p.nome, p.imagens, p.descricao)}
            >
              <img src={p.imagens[0]} alt={p.nome} className="img-card" />
              <h3>{p.nome}</h3>
              <p>{p.descricao}</p>
              <span>{p.preco}</span>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </>
  );
}

export default Produtos;
