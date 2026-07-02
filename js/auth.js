import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

/* =========================
   LOGIN
========================= */

async function login() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {

        await signInWithEmailAndPassword(auth, email, password);

        alert("Login realizado com sucesso!");

        window.location.href = "index.html";

    } catch (error) {

        alert("Erro no login: " + error.message);

    }
}

/* =========================
   CADASTRO
========================= */

async function cadastrar() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {

        await createUserWithEmailAndPassword(auth, email, password);

        alert("Conta criada com sucesso!");

        window.location.href = "index.html";

    } catch (error) {

        alert("Erro no cadastro: " + error.message);

    }
}

/* =========================
   EXPOR NO WINDOW (ESSENCIAL)
========================= */

window.login = login;
window.cadastrar = cadastrar;
