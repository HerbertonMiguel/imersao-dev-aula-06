function exibiJogadoresNaTela(jogadores) {
  var elemento = ""
  for (var i = 0; i < jogadores.length; i++) {
    elemento +=  "<tr><td>" + jogadores[i].nome + "</td>"
    elemento += "<td>" + jogadores[i].vitorias + "</td>"
    elemento += "<td>" + jogadores[i].empates + "</td>"
    elemento += "<td>" + jogadores[i].derrotas + "</td>"
    elemento += "<td>" + jogadores[i].pontos + "</td>"
    elemento += "<td><button onClick='adicionarVitoria("+ i +")'>Vitória</button></td>"
    elemento += "<td><button onClick='adicionarEmpate("+ i +")'>Empate</button></td>"
    elemento += "<td><button onClick='adicionarDerrota("+ i +")'>Derrota</button></td>"
    elemento += "</tr>"
  }
  
  var tabelasJogadores = document.getElementById("tabelaJogadores")
  tabelasJogadores.innerHTML = elemento
}

exibiJogadoresNaTela(jogadores)

function adicionarVitoria(i){
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibiJogadoresNaTela(jogadores)

}

function adicionarEmpate(i){
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibiJogadoresNaTela(jogadores)

}

function adicionarDerrota(i){
  var jogador = jogadores[i]
  jogador.derrotas++
  jogador.pontos = calculaPontos(jogador)
  exibiJogadoresNaTela(jogadores)

}