// CONFIGURAÇÃO DOS CANVAS

const canvas1 = document.getElementById("canvas1");
const canvas2 = document.getElementById("canvas2");

const ctx1 = canvas1.getContext("2d");
const ctx2 = canvas2.getContext("2d");

// FUNÇÕES PARA DESENHAR

// Desenha quadrados ou retângulos
function desenhar_quadrado(ctx, x, y, largura, altura, cor) {
    ctx.fillStyle = cor;
    ctx.fillRect(x, y, largura, altura);
}

// Desenha linhas entre dois pontos
function desenhar_linha(ctx, x1, y1, x2, y2, cor, espessura) {
    ctx.beginPath();
    ctx.strokeStyle = cor;
    ctx.lineWidth = espessura;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
}

// Desenha arcos ou círculos
function desenhar_arco(ctx, x, y, raio, inicio, fim, cor, preencher) {
    ctx.beginPath();
    ctx.arc(x, y, raio, inicio, fim);

    if (preencher) {
        ctx.fillStyle = cor;
        ctx.fill();
    } else {
        ctx.strokeStyle = cor;
        ctx.lineWidth = 1;
        ctx.stroke();
    }

    ctx.closePath();
}

// Escreve textos na área de desenho
function escrever(ctx, texto, x, y, cor, tamanho) {
    ctx.fillStyle = cor;
    ctx.font = tamanho + "px Arial";
    ctx.textAlign = "center";
    ctx.fillText(texto, x, y);
}

// Desenha triângulos, utilizada para o telhado
function desenhar_triangulo(ctx, x1, y1, x2, y2, x3, y3, cor) {
    ctx.beginPath();
    ctx.fillStyle = cor;
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.lineTo(x3, y3);
    ctx.closePath();
    ctx.fill();
}


// PRIMEIRO DESENHO - FORMAS GEOMÉTRICAS

// Texto
escrever(ctx1, "Canvas", 150, 50, "black", 20);

// Quadrados superiores
desenhar_quadrado(ctx1, 0, 0, 50, 50, "blue");
desenhar_quadrado(ctx1, 250, 0, 50, 50, "red");

// Retângulos laterais
desenhar_quadrado(ctx1, 0, 120, 30, 60, "cyan");
desenhar_quadrado(ctx1, 270, 135, 30, 30, "cyan");

// Quadrado vermelho central
desenhar_quadrado(ctx1, 110, 150, 40, 40, "red");

// Formas amarelas inferiores
desenhar_quadrado(ctx1, 0, 240, 30, 60, "yellow");
desenhar_quadrado(ctx1, 30, 270, 30, 30, "yellow");

// Formas pretas inferiores
desenhar_quadrado(ctx1, 270, 240, 30, 60, "black");
desenhar_quadrado(ctx1, 240, 270, 30, 30, "black");

// Arco superior esquerdo externo
desenhar_arco(ctx1, 150, 150, 80, Math.PI, 1.25 * Math.PI, "green", false);

// Arco superior interno completo
desenhar_arco(ctx1, 150, 150, 60, Math.PI, 2 * Math.PI, "green", false);

// Arco superior direito externo
desenhar_arco(ctx1, 150, 150, 80, 1.75 * Math.PI, 2 * Math.PI, "green", false);

// Linhas diagonais
desenhar_linha(ctx1, 50, 50, 150, 150, "blue", 1);
desenhar_linha(ctx1, 250, 50, 150, 150, "red", 1);

// Círculo superior com contorno azul
desenhar_arco(ctx1, 150, 115, 15, 0, 2 * Math.PI, "cyan", true);
desenhar_arco(ctx1, 150, 115, 15, 0, 2 * Math.PI, "blue", false);

// Linha horizontal verde
desenhar_linha(ctx1, 0, 150, 300, 150, "green", 1);

// Linha vertical cinza
desenhar_linha(ctx1, 150, 190, 150, 260, "gray", 1);

// Círculo amarelo esquerdo
desenhar_arco(ctx1, 70, 220, 15, 0, 2 * Math.PI, "yellow", true);
desenhar_arco(ctx1, 70, 220, 15, 0, 2 * Math.PI, "green", false);

// Círculo amarelo direito
desenhar_arco(ctx1, 220, 220, 15, 0, 2 * Math.PI, "yellow", true);
desenhar_arco(ctx1, 220, 220, 15, 0, 2 * Math.PI, "green", false);

// Arco inferior esquerdo: raio 80
desenhar_arco(ctx1, 150, 300, 80, Math.PI, 1.5 * Math.PI, "green", false);

// Arco inferior direito: raio 60
desenhar_arco(ctx1, 150, 300, 60, 1.5 * Math.PI, 2 * Math.PI, "green", false);

// Semicírculo inferior ciano
desenhar_arco(ctx1, 150, 300, 40, Math.PI, 2 * Math.PI, "cyan", true);
desenhar_arco(ctx1, 150, 300, 40, Math.PI, 2 * Math.PI, "green", false);


// SEGUNDO DESENHO - CASA E PAISAGEM

// Fundo verde claro
desenhar_quadrado(ctx2, 0, 0, 300, 300, "#8FFDD4");

// Sol amarelo
desenhar_arco(ctx2, 225, 75, 37.5, 0, 2 * Math.PI, "#FCFF2D", true);

// Chão cinza
desenhar_quadrado(ctx2, 0, 225, 300, 75, "gray");

// Casa - paredes
desenhar_quadrado(ctx2, 112.5, 150, 75, 75, "#86471A");

// Casa - telhado
desenhar_triangulo(ctx2, 112.5, 150, 150, 112.5, 187.5, 150, "#F5694D");

// Casa - janelas
desenhar_quadrado(ctx2, 120, 165, 22, 22.5, "#47BDFD");
desenhar_quadrado(ctx2, 157.5, 165, 22, 22.5, "#47BDFD");

// Casa - porta
desenhar_quadrado(ctx2, 142.5, 187.5, 15, 37.5, "#624423");

// Árvore esquerda - tronco
desenhar_quadrado(ctx2, 37.5, 180, 15, 45, "#86471A");

// Árvore esquerda - copa
desenhar_arco(ctx2, 45, 172.5, 22.5, 0, 2 * Math.PI, "#318A26", true);

// Árvore direita - tronco
desenhar_quadrado(ctx2, 262.5, 210, 15, 52.5, "#86471A");

// Árvore direita - copa
desenhar_arco(ctx2, 270, 210, 22.5, 0, 2 * Math.PI, "#318A26", true);

// Área azul inferior esquerda - retângulos
desenhar_quadrado(ctx2, 0, 225, 37.5, 75, "#458EFC");
desenhar_quadrado(ctx2, 0, 262.5, 112.5, 37.5, "#458EFC");

// Curva superior esquerda da área azul
desenhar_arco(ctx2, 0, 225, 37.5, 0, 2 * Math.PI, "#458EFC", true);

// Curva inferior direita da área azul
desenhar_arco(ctx2, 112.5, 300, 37.5, Math.PI, 2 * Math.PI, "#458EFC", true);
