// Seleciona todas as divs de personagens usando a classe .produtos-item
const buttons = document.querySelectorAll(".produtos-item");
// Seleciona a imagem principal que será trocada
const image = document.querySelector("#imagem-personagem");
// Seleciona o elemento de texto onde a descrição do personagem será exibida
const texto = document.querySelector("#texto-personagem");

// Objeto com as descrições de cada personagem
const descricoes = {
    anais: "Anais é a irmã mais nova, super inteligente e madura para sua idade. Apesar de ser pequena, sempre tenta manter a ordem na família, mesmo que raramente seja ouvida.",
    gumball: "Gumball é o protagonista travesso e criativo. Sempre se mete em confusões com suas ideias malucas, mas tem um grande coração e muita imaginação.",
    darwin: "Darwin é o melhor amigo e irmão adotivo de Gumball. Otimista, leal e sensível, está sempre pronto para ajudar e embarcar nas aventuras mais absurdas.",
    nicole: "Nicole é a mãe dedicada e trabalhadora. Determinada e protetora, faz de tudo para manter a família unida, mesmo enfrentando muitos desafios.",
    ricardo: "Ricardo é o pai divertido e atrapalhado. Apesar de preguiçoso e um pouco infantil, ama muito sua família e sempre tenta ajudar do seu jeito."
};

// Define o texto e imagem padrão
const imagemPadrao = "img/familia.png";
const textoPadrao = "Clique em um personagem para ver sua descrição!";

// Inicializa com a descrição e imagem padrão
texto.textContent = textoPadrao;
image.setAttribute("src", imagemPadrao);

// Para cada botão/personagem...
buttons.forEach((btn) => {
    // Adiciona um evento de clique
    btn.addEventListener("click", (e) => {
        e.stopPropagation(); // Impede que o clique propague para o document

        // Remove a classe 'ativado' de todos os personagens
        buttons.forEach((b) => b.classList.remove("ativado"));

        // Adiciona a classe 'ativado' ao personagem clicado
        btn.classList.add("ativado");

        // Pega o id do personagem clicado (anais, gumball, etc)
        const id = btn.getAttribute("id");

        // Troca a imagem principal para a imagem do personagem clicado
        image.setAttribute("src", `img/${id}.jpg`);
        // Atualiza o texto com a descrição do personagem
        texto.textContent = descricoes[id] || "Descrição não disponível.";
    });
});

// Ao clicar fora das divs de personagem, remove ativado e volta ao padrão
document.addEventListener("click", (e) => {
    // Verifica se o clique foi fora de qualquer .produtos-item
    if (![...buttons].some(btn => btn.contains(e.target))) {
        buttons.forEach((b) => b.classList.remove("ativado"));
        image.setAttribute("src", imagemPadrao);
        texto.textContent = textoPadrao;
    }
});