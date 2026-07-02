/* =======================================================
   Resolution Place
   app.js
   Base de funcionalidades do site
======================================================= */

/* =========================
   BOTÃO VOLTAR AO TOPO
========================= */

const btnTopo = document.getElementById("btnTopo");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        btnTopo.style.display = "flex";
    } else {
        btnTopo.style.display = "none";
    }

});

btnTopo.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* =========================
   BUSCA SIMPLES (FRONT)
========================= */

const searchForm = document.querySelector(".search-box");

if (searchForm) {

    searchForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const input = searchForm.querySelector("input");

        const query = input.value.trim();

        if (query === "") return;

        alert("Você pesquisou por: " + query);

        // Futuramente aqui entra a busca real no Firebase
    });

}

/* =========================
   EFEITO SIMPLES NO HEADER
========================= */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {
        header.style.boxShadow = "0 6px 20px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "0 8px 20px rgba(0,0,0,.08)";
    }

});

/* =========================
   PREPARAÇÃO PARA PRODUTOS DINÂMICOS
========================= */

/*
    Aqui no futuro vamos puxar produtos do Firebase:

    - produtos em destaque
    - produtos recentes
    - produtos perto do usuário

    Exemplo:

    fetchProdutos()
*/

console.log("Resolution Place carregado com sucesso 🚀");

import { db } from "./firebase.js";

import {
    collection,
    getDocs,
    query,
    orderBy
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

/* =========================
   CARREGAR PRODUTOS
========================= */

const listaProdutos = document.getElementById("listaProdutos");

async function carregarProdutos() {

    if (!listaProdutos) return;

    listaProdutos.innerHTML = "<p>Carregando anúncios...</p>";

    try {

        const q = query(
            collection(db, "anuncios"),
            orderBy("createdAt", "desc")
        );

        const querySnapshot = await getDocs(q);

        listaProdutos.innerHTML = "";

        querySnapshot.forEach((doc) => {

            const data = doc.data();

            const card = document.createElement("div");

            card.classList.add("produto-card");

            card.innerHTML = `
                
                <img src="${data.imageURL}" alt="Produto">

                <div class="produto-info">

                    <h3>${data.titulo}</h3>

                    <p class="preco">R$ ${data.preco}</p>

                    <p class="cidade">
                        📍 ${data.cidade}
                    </p>

                    <div class="score">
                        <span>Resolution Score</span>
                        <strong>${data.score}%</strong>
                    </div>

                    <a href="produto.html?id=${doc.id}" class="btn-card">
                        Ver Produto
                    </a>

                </div>

            `;

            listaProdutos.appendChild(card);

        });

    } catch (error) {

        console.error(error);

        listaProdutos.innerHTML = "<p>Erro ao carregar produtos</p>";

    }

}

/* =========================
   INICIAR
========================= */

carregarProdutos();