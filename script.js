function mostrarMensagem() {
  document.getElementById("resultado").innerHTML = "Bem-vindo à GamesZone! Prepare-se para explorar o mundo dos videogames.";
}

function listarProdutos() {
  const jogos = ["The Last of Us", "God of War", "FIFA 24", "Zelda", "Elden Ring"];
  let lista = "<strong>Jogos disponíveis:</strong><ul>";
  jogos.forEach(jogo => {
    lista += `<li>${jogo}</li>`;
  });
  lista += "</ul>";
  document.getElementById("resultado").innerHTML = lista;
}

function calcularDesconto() {
  const precoOriginal = 300;
  const desconto = 0.20;
  const precoFinal = precoOriginal * (1 - desconto);
  document.getElementById("resultado").innerHTML = `Preço com 20% de desconto: R$ ${precoFinal.toFixed(2)}`;
}
