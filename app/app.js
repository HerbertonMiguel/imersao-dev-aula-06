var rafa = {nome: "rafa", vitorias: 2, empates: 3, derrotas: 4, pontos:0}
var paulo = {nome: "paulo", vitorias: 3, empates: 4, derrotas: 5, pontos:0}
var gui = {nome: "gui", vitorias: 3, empates: 4, derrotas: 5, pontos:0}

rafa.pontos = calculaPontos(rafa);
rafa.pontos = calculaPontos(paulo);
rafa.pontos = calculaPontos(gui);

function calculaPontos(jogador){
  var pontos = jogador.vitorias * 3 + jogador.empates

  return pontos
}

var jogadores = [rafa, paulo, gui]
