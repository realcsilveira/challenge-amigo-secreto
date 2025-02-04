//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
// app.js

// Array para armazenar os participantes
let participantes = [];

// Função para adicionar um amigo à lista
function adicionarAmigo() {
    const inputAmigo = document.getElementById('amigo');
    const nomeAmigo = inputAmigo.value.trim();

    if (nomeAmigo === '') {
        alert('Por favor, digite um nome válido.');
        return;
    }

    if (participantes.includes(nomeAmigo)) {
        alert('Este nome já foi adicionado!');
        return;
    }

    // Adiciona o nome ao array de participantes
    participantes.push(nomeAmigo);

    // Limpa o campo de input
    inputAmigo.value = '';

    // Atualiza a lista de participantes na tela
    atualizarListaAmigos();
}

// Função para atualizar a lista de participantes na tela
function atualizarListaAmigos() {
    const listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ''; // Limpa a lista antes de atualizar

    participantes.forEach((nome) => {
        const itemLista = document.createElement('li');
        itemLista.textContent = nome;
        listaAmigos.appendChild(itemLista);
    });
}

// Função para sortear os amigos
function sortearAmigo() {
    if (participantes.length < 2) {
        alert('Adicione pelo menos 2 participantes para sortear!');
        return;
    }

    // Embaralha a lista de participantes
    const participantesEmbaralhados = embaralharArray([...participantes]);

    // Cria os pares de Amigo Secreto
    const pares = new Map();

    for (let i = 0; i < participantesEmbaralhados.length; i++) {
        const doador = participantesEmbaralhados[i];
        const receptor = participantesEmbaralhados[(i + 1) % participantesEmbaralhados.length];
        pares.set(doador, receptor);
    }

    // Exibe o resultado na tela
    exibirResultado(pares);
}

// Função para embaralhar um array (algoritmo Fisher-Yates)
function embaralharArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Função para exibir o resultado do sorteio
function exibirResultado(pares) {
    const resultado = document.getElementById('resultado');
    resultado.innerHTML = ''; // Limpa o resultado anterior

    pares.forEach((receptor, doador) => {
        const itemResultado = document.createElement('li');
        itemResultado.textContent = `${doador} ➔ ${receptor}`;
        resultado.appendChild(itemResultado);
    });
}