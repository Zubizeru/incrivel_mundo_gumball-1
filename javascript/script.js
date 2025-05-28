const buttons = document.querySelectorAll("produtos-item");
const image = document.querySelector("imagem-personagem");

buttons.forEach((btn) => {
    buttons.addEventListener("click", (e) => {
        console.log(e);

    buttons.forEach((btn) => 
        btn.querySelector(".produtos-item").classList.remove("ativado")
    );

    const button = e.target;
    const id = button.getAttribute("id");
    button.querySelector(".produtos-item").classList.add("ativado");
    image.setAttribute("src", `/img/incrivel mundo de gumball/${id}.jpg`);
    
 });
});