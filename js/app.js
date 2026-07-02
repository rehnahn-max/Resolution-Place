console.log("Resolution Place com sucesso 🚀");

/* =====================================================
   BOTÃO VOLTAR AO TOPO
===================================================== */

const btnTopo = document.getElementById("btnTopo");

if (btnTopo) {
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
        if (window.scrollY > 50) {
            header.style.boxShadow = "0 6px 20px rgba(0,0,0,.15)";
        } else {
            header.style.boxShadow = "0 8px 20px rgba(0,0,0,.08)";
        }
    });
}

/* =====================================================
   FUTURO: PRODUTOS DINÂMICOS FIREBASE
===================================================== */

function fetchProdutos() {
    // aqui vai o Firebase depois
}
