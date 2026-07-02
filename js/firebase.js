/* =======================================================
   Resolution Place
   firebase.js
   Configuração base do Firebase
======================================================= */

/*
    1. Você vai precisar criar um projeto no Firebase:
       https://console.firebase.google.com
*/

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

/* =========================
   CONFIGURAÇÃO (SUBSTITUA)
========================= */

const firebaseConfig = {

    apiKey: "SUA_API_KEY",
    authDomain: "SEU_PROJETO.firebaseapp.com",
    projectId: "SEU_PROJECT_ID",
    storageBucket: "SEU_PROJETO.appspot.com",
    messagingSenderId: "XXXXXXX",
    appId: "XXXXXXX"

};

/* =========================
   INICIALIZAÇÃO
========================= */

const app = initializeApp(firebaseConfig);

/* =========================
   SERVIÇOS
========================= */

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

console.log("🔥 Firebase conectado com sucesso");

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAMmqsg-ip3Hd5s7VC_Rc-UfSBMtgx0sfw",
  authDomain: "resolution-place.firebaseapp.com",
  projectId: "resolution-place",
  storageBucket: "resolution-place.firebasestorage.app",
  messagingSenderId: "818743274229",
  appId: "1:818743274229:web:357e2e5c0d8d450fcff3bc",
  measurementId: "G-5XJKSFBQ3R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
import { db } from "./firebase.js";
import { auth } from "./firebase.js";

await addDoc(collection(db, "anuncios"), {

    titulo,
    preco,
    descricao,
    categoria,
    cidade,
    estadoProduto,
    imageURL,

    userId: auth.currentUser ? auth.currentUser.uid : null,

    score: Math.floor(Math.random() * 30) + 70,

    createdAt: serverTimestamp()
});