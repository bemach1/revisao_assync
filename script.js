/* DESAFIO DO AMOR:
    1 - RECEBA DOIS NOMES DE PESSOAS E DEVOLVA A INFORMAÇÃO DE QUÃO 
    COMPATÍVEL É O "AMOR" ENTRE ESSAS PESSOAS. 
    CLARO QUE NÃO PRECISAMOS RELEMBRAR QUE É APENAS PARA FINS DIDÁTICOS E 
    ESSES DADOS NÃO REPRESENTAM A REALIDADE

    2 - EMBORA TENHA UMA BASE MONTADA, O ALGORITMO PRECISA DE MELHORIAS, 
    POIS OS DADOS ESTÃO FIXOS NAS CHAMADAS DE API.

    3 - OUTRA MELHORA NECESSÁRIA É DIVIDIR AS RESPONSABILIDADES DESSE CÓDIGO E 
    TORNÁ-LO MAIS RESILIENTE. 
*/

// /* Criando uma interface no próprio node module para fazer a comunicação com o prompt */
const readline = require('readline')
const readLinePrompt = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})
// Criando variavel para receber nome
readLinePrompt.question('Digite o nome da primeira pessoa:', name => {
  readLinePrompt.question('Digite o nome da segunda pessoa:', otherName => {
    getPercentegeLove(name, otherName)
    readLinePrompt.close()
  })
})

// Tratando resposta para o usuário
function responseUser(data){
    // Criando um novo objeto
    let newData = {
        name:data.fname,
        loveName: data.sname,
        percent: Number(data.percentage)
    }
    // Exibindo objeto tratado
    console.log(newData)
}

// Chamar a API que tras o percentual de compatibilidade
function getPercentegeLove (name, loveName) {
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
    `https://love-calculator.p.rapidapi.com/getPercentage?sname=${name}&fname=${loveName}`,
    options
  )
    .then(response => response.json())
    .then(response => responseUser(response))
    .catch(err => console.error(err))
}

// Chamada sem usar prompt 
// getPercentegeLove('Cleyton','Camila')
// getPercentegeLove('Renato','Ana Claudia')