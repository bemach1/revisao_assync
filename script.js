/* DESAFIO DO AMOR:
    1 - RECEBA DOIS NOMES DE PESSOAS E DEVOLVA A INFORMAÇÃO DE QUÃO COMPATÍVEL É O "AMOR" ENTRE ESSAS PESSOAS. 
    CLARO QUE NÃO PRECISAMOS RELEMBRAR QUE É APENAS PARA FINS DIDÁTICOS E ESSES DADOS NÃO REPRESENTAM A REALIDADE

    2 - EMBORA TENHA UMA BASE MONTADA, O ALGORITMO PRECISA DE MELHORIAS, POIS OS DADOS ESTÃO FIXOS NAS CHAMADAS DE API.

    3 - OUTRA MELHORA NECESSÁRIA É DIVIDIR AS RESPONSABILIDADES DESSE CÓDIGO E TORNÁ-LO MAIS RESILIENTE. 
*/

console.log(
  'Desafio do amor, vamos ver o quanto a pessoa que você gosta é compatível contigo, baseado em dados que não são reais é óbvio!'
)

/* Montando um header da chamada */
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '8c9be406admshb0776c6ae330811p16cea1jsn8b7a905d9627',
    'X-RapidAPI-Host': 'love-calculator.p.rapidapi.com'
  }
}

/* Fazendo a chamada da API */
fetch(
  'https://love-calculator.p.rapidapi.com/getPercentage?sname=Cleyton&fname=Camila',
  options
)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err))
