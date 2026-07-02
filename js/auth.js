/* =======================================================
   Resolution Place
   auth.js
   Login e Cadastro (base local - futuro Firebase)
======================================================= */

/* =========================
   LOGIN
========================= */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        if (!email || !password) return;

        // FUTURO: Firebase Auth
        console.log("Login:", email);

        alert("Login realizado com sucesso (simulação)");

        window.location.href = "index.html";

    });

}

/* =========================
   CADASTRO
========================= */

const registerForm = document.getElementById("registerForm");

if (registerForm) {

    registerForm.addEventListener("submit", (e) => {

        e.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const city = document.getElementById("city").value;

        if (!name || !email || !password || !city) return;

        // FUTURO: Firebase Auth + Firestore
        console.log("Cadastro:", { name, email, city });

        alert("Conta criada com sucesso (simulação)");

        window.location.href = "login.html";

    });

}