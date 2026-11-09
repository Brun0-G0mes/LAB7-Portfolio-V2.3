// Gera um único número de 0 a 99 ao carregar a página.
let numeroSecreto = Math.floor(Math.random() * 100);

// A função é executada quando o botão é clicado.
function ChecarPalpite() {
    let palpite = document.getElementById("palpiteInput").value;

    if (palpite === "" || !Number.isInteger(Number(palpite)) ||
        Number(palpite) < 0 || Number(palpite) > 99) {
        document.getElementById("resultado").innerHTML =
            "Digite um número inteiro entre 0 e 99!";

    } else if (Number(palpite) > numeroSecreto) {
        document.getElementById("resultado").innerHTML =
            "O número secreto é MENOR que seu palpite!";

    } else if (Number(palpite) < numeroSecreto) {
        document.getElementById("resultado").innerHTML =
            "O número secreto é MAIOR que seu palpite!";

    } else {
        document.getElementById("resultado").innerHTML =
            "Parabéns! Você acertou o número secreto!";

        document.getElementById("resultado").style.setProperty(
            "background-color", "green"
        );
    }
}
