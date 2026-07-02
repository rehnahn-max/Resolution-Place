console.log("Resolution Place com sucesso 🚀");

/* =====================================================
   BOTÃO VOLTAR AO TOPO
===================================================== */

const btnTopo = document.getElementById("btnTopo");

if (btnTopo) {

    window.addEventListener("scroll", () => {
        btnTopo.style.display = window.scrollY > 300 ? "flex" : "none";
    });

    btnTopo.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

}

/* =====================================================
   BUSCA SIMPLES (FRONT - temporário)
===================================================== */

const searchForm = document.querySelector(".search-box");

if (searchForm) {
    searchForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const input = searchForm.querySelector("input");
        const query = input.value.trim();

        if (query === "") return;

        alert("Você pesquisou por: " + query);

        // FUTURO: busca real no Firebase
    });
}

/* =====================================================
   EFEITO DO HEADER NO SCROLL
===================================================== */

const header = document.querySelector(".header");

if (header) {

    window.addEventListener("scroll", () => {
        header.style.boxShadow =
            window.scrollY > 50
                ? "0 6px 20px rgba(0,0,0,.15)"
                : "0 8px 20px rgba(0,0,0,.08)";
    });

}
/* =====================================================
   FUTURO: PRODUTOS DINÂMICOS FIREBASE
===================================================== */

function fetchProdutos() {
    // aqui vai o Firebase depois
}
