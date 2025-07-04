
function boasVindas() {
  alert("Bem-vindo à Loja de Jogos! Aproveite sua visita.");
}

function numeroSecreto() {
  const numeroSecreto = 7;
  let chute = parseInt(prompt("Adivinhe o número secreto entre 1 e 10:"));

  if (chute === numeroSecreto) {
    alert("Parabéns! Você acertou o número secreto!");
  } else {
    alert("Errou! O número secreto era " + numeroSecreto + ".");
  }
}

function jogoDaMedia() {
  let nota1 = parseFloat(prompt("Digite a primeira nota:"));
  let nota2 = parseFloat(prompt("Digite a segunda nota:"));
  let media = (nota1 + nota2) / 2;

  if (media >= 6) {
    alert("Média: " + media.toFixed(2) + " - Aprovado!");
  } else {
    alert("Média: " + media.toFixed(2) + " - Reprovado.");
  }
}
