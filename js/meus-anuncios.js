import { db, auth } from "./firebase.js";

import {
    collection,
    getDocs,
    query,
    where,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const container = document.getElementById("meusAnuncios");

async function carregarMeusAnuncios() {

    if (!auth.currentUser) {
        container.innerHTML = "<p>Faça login para ver seus anúncios</p>";
        return;
    }

    const q = query(
        collection(db, "anuncios"),
        where("userId", "==", auth.currentUser.uid)
    );

    const snapshot = await getDocs(q);

    container.innerHTML = "";

    snapshot.forEach((item) => {

        const data = item.data();

        const card = document.createElement("div");

        card.classList.add("produto-card");

        card.innerHTML = `
            
            <img src="${data.imageURL}" />

            <div class="produto-info">

                <h3>${data.titulo}</h3>

                <p class="preco">R$ ${data.preco}</p>

                <button class="btn-card" onclick="deletar('${item.id}')">
                    Excluir
                </button>

            </div>

        `;

        container.appendChild(card);

    });

}

window.deletar = async function(id) {

    await deleteDoc(doc(db, "anuncios", id));

    alert("Anúncio removido!");

    location.reload();

};

carregarMeusAnuncios();