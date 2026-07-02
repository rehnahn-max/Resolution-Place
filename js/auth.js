import { auth } from "./firebase.js";

import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

/* =========================
   LOGIN
========================= */

window.login = async function () {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {

        await signInWithEmailAndPassword(auth, email, password);

        alert("Login realizado com sucesso!");

        window.location.href = "index.html";

    } catch (error) {

        alert("Erro no login: " + error.message);

    }
};

/* =========================
   CADASTRO
========================= */

window.cadastrar = async function () {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {

        await createUserWithEmailAndPassword(auth, email, password);

        alert("Conta criada com sucesso!");

        window.location.href = "index.html";

    } catch (error) {

        alert("Erro no cadastro: " + error.message);

    }
};

/* =========================
   ESTADO DO USUÁRIO
========================= */

onAuthStateChanged(auth, (user) => {

    if (user) {
        console.log("Usuário logado:", user.email);
    } else {
        console.log("Nenhum usuário logado");
    }

});
