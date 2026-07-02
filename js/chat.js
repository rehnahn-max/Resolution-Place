import { db, auth } from "./firebase.js";

import {
    collection,
    addDoc,
    query,
    orderBy,
    onSnapshot,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

/* =========================
   PEGAR ID DO PRODUTO
========================= */

const urlParams = new URLSearchParams(window.location.search);
const produtoId = urlParams.get("produto");

const chatBox = document.getElementById("chatBox");
const form = document.getElementById("chatForm");

/* =========================
   ENVIAR MENSAGEM
========================= */

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    const mensagem = document.getElementById("mensagem").value;

    if (!mensagem) return;

    await addDoc(collection(db, "chats"), {

        produtoId: produtoId,
        mensagem: mensagem,

        userId: auth.currentUser ? auth.currentUser.uid : "anon",

        createdAt: serverTimestamp()

    });

    document.getElementById("mensagem").value = "";

});

/* =========================
   CARREGAR CHAT EM TEMPO REAL
========================= */

const q = query(
    collection(db, "chats"),
    orderBy("createdAt")
);

onSnapshot(q, (snapshot) => {

    chatBox.innerHTML = "";

    snapshot.forEach((doc) => {

        const data = doc.data();

        if (data.produtoId !== produtoId) return;

        const msg = document.createElement("div");

        msg.classList.add("chat-msg");

        msg.innerHTML = `
            <p><strong>${data.userId === auth.currentUser?.uid ? "Você" : "Usuário"}:</strong> ${data.mensagem}</p>
        `;

        chatBox.appendChild(msg);

    });

});