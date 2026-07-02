
import { db, storage, auth } from "./firebase.js";

import {
    collection,
    addDoc,
    serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

import {
    ref,
    uploadBytes,
    getDownloadURL
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

/* =========================
   FORMULÁRIO
========================= */

const form = document.getElementById("formAnuncio");

if (form) {

    form.addEventListener("submit", async (e) => {

        e.preventDefault();

        const titulo = document.getElementById("titulo").value;
        const preco = document.getElementById("preco").value;
        const descricao = document.getElementById("descricao").value;
        const categoria = document.getElementById("categoria").value;
        const cidade = document.getElementById("cidade").value;
        const estadoProduto = document.getElementById("estadoProduto").value;
        const imagem = document.getElementById("imagem").files[0];

        try {

            /* =========================
               UPLOAD DE IMAGEM
            ========================= */

            let imageURL = "";

            if (imagem) {

                const imageRef = ref(storage, `produtos/${Date.now()}_${imagem.name}`);

                await uploadBytes(imageRef, imagem);

                imageURL = await getDownloadURL(imageRef);

            }

            /* =========================
               SALVAR NO FIRESTORE
            ========================= */

            await addDoc(collection(db, "anuncios"), {

                titulo,
                preco,
                descricao,
                categoria,
                cidade,
                estadoProduto,
                imageURL,

                score: Math.floor(Math.random() * 30) + 70,

                createdAt: serverTimestamp()

            });

            alert("Anúncio publicado com sucesso!");

            window.location.href = "index.html";

        } catch (error) {

            console.error(error);

            alert("Erro ao publicar anúncio: " + error.message);

        }

    });

}