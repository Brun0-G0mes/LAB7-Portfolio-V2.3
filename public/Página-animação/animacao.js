
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Tamanho do quadrado
let tamanho = 40;

// Posição inicial
let x = 130;
let y = 130;

// Função responsável por desenhar
function desenhar() {
    ctx.clearRect(0, 0, 300, 300);

    ctx.fillStyle = "blue";
    ctx.fillRect(x, y, tamanho, tamanho);
}

// Função responsável pelo movimento
canvas.addEventListener("mousemove", function(evento) {

    // Posição do mouse em relação ao canvas
    let posicao = canvas.getBoundingClientRect();

    let mouseX = evento.clientX - posicao.left;
    let mouseY = evento.clientY - posicao.top;

    // Centralizar o mouse no quadrado
    x = mouseX - tamanho / 2;
    y = mouseY - tamanho / 2;

    // Impedir que o quadrado saia do canvas
    if (x < 0) {
        x = 0;
    }

    if (y < 0) {
        y = 0;
    }

    if (x > canvas.width - tamanho) {
        x = canvas.width - tamanho;
    }

    if (y > canvas.height - tamanho) {
        y = canvas.height - tamanho;
    }

    desenhar();
});

// Desenho inicial
desenhar();
