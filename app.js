let amigos = [];

function adicionarAmigo() {
    const amigo = document.getElementById("amigo").value.trim(); // utilizei o trim para remover espaços em brancos .trim() 
    if (amigo === "") {
        alert("Por favor, insira um nome.");
        return;
    }
    amigos.push(amigo);
    document.getElementById("amigo").value = "";
    atualizarLista(); // Atualiza a lista sempre que um amigo é adicionado
}

function atualizarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;

        // Botão de remover
        const removerButton = document.createElement("button");
        removerButton.textContent = "Remover";
        removerButton.addEventListener("click", () => {
            removerAmigo(amigo);
        });
        li.appendChild(removerButton);

        lista.appendChild(li);
    });
}

function removerAmigo(amigo) {
    const index = amigos.indexOf(amigo);
    if (index > -1) { // Verifica se o amigo está na lista
        amigos.splice(index, 1);
    }
    atualizarLista();
}

function sortearAmigo() {
    const resultado = document.getElementById("resultado");
    if (amigos.length === 0) {
        resultado.innerHTML = "Nenhum amigo disponível para ser sorteado.";
        return; // Parar a execução se nenhuma amigo estiver na lista
    }
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceAleatorio];
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}

