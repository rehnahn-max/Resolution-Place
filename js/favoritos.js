import { db, auth } from "./firebase.js";

import {
    collection,
    getDocs,
    query,
    where
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const container = document.getElementById("listaFavoritos");

async function carregarFavoritos() {

    if (!auth.currentUser) {
        container.innerHTML = "<p>Faça login para ver favoritos</p>";
        return;
    }

    const q = query(
        collection(db, "favoritos"),
        where("userId", "==", auth.currentUser.uid)
    );

    const snapshot = await getDocs(q);

    container.innerHTML = "";

    snapshot.forEach((doc) => {

        const data = doc.data();

        const card = document.createElement("div");

        card.classList.add("produto-card");

        card.innerHTML = `
            <p>Produto salvo: ${data.produtoId}</p>
        `;

        container.appendChild(card);

    });

}

carregarFavoritos();