
// Variaveis  
    let valores= []
    let numeroAleatorio = criarNumeroAleatório()
    let maiorPontuacao = 0
    let placar = 0
    valores.push(numeroAleatorio);
    let botoesClicados = []

    




/////////Funções de mecanismo////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// funções do mecanismo de trocar ID ou voltar Id
function padronizarId (numeroBotao){
        if(numeroBotao === 1){  botaoVerde.id= 'greenButton'}
        if(numeroBotao === 2){  botaoVermelho.id= 'redButton'}
        if(numeroBotao === 3){  botaoAmarelo.id= 'yellowButton'}
        if(numeroBotao === 4){  botaoAzul.id= 'blueButton'}
    }

function analisarSelecionarId (numeroBotao){
    if(numeroBotao === 1){  botaoVerde.id= 'greenButtonSelect'}
    if(numeroBotao === 2){  botaoVermelho.id= 'redButtonSelect'}
    if(numeroBotao === 3){  botaoAmarelo.id= 'yellowButtonSelect'}
    if(numeroBotao === 4){  botaoAzul.id= 'blueButtonSelect'}
}


function piscar (numeroBotao){
    setTimeout(()=>{
        analisarSelecionarId(numeroBotao)},1000);

    setTimeout(()=> {
        padronizarId(numeroBotao)},1600)
}


function clicaMudarId(numeroBotao){
    botaoVerde.addEventListener('click',analisarSelecionarId(numeroBotao))
    botaoVermelho.addEventListener('click',analisarSelecionarId(numeroBotao))
    botaoAmarelo.addEventListener('click',analisarSelecionarId(numeroBotao))
    botaoAzul.addEventListener('click',analisarSelecionarId(numeroBotao))
} 

    //Função de criar número aleatório
    function criarNumeroAleatório(){
        return Math.floor(Math.random()*4)+1
        }
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //Construção do HTML
//construir botões coloridos
const botaoVerde=document.createElement('button');
const botaoVermelho=document.createElement('button');
const botaoAmarelo=document.createElement('button');
const botaoAzul=document.createElement('button');

const superiores= document.getElementById('botõesSuperior')
const inferiores= document.getElementById('botõesInferiores')

botaoVerde.id= 'greenButton'
botaoVerde.tagName= 1
botaoVermelho.id= 'redButton'
botaoVermelho.tagName= 2
botaoVerde.className= 'topButtons'
botaoVermelho.className= 'topButtons'

botaoAmarelo.id= 'yellowButton'
botaoAmarelo.tagName= 3
botaoAzul.id= 'blueButton'
botaoAzul.tagName= 4
botaoAmarelo.className= 'botonButtons'
botaoAzul.className= 'botonButtons'


superiores.appendChild(botaoVerde)
superiores.appendChild(botaoVermelho)
inferiores.appendChild(botaoAmarelo)
inferiores.appendChild(botaoAzul)

//Construir o meio entre os botões coloridos e texto inicial
const textoMeio=document.createElement('p')
textoMeio.innerText='Seja bem vindo'
textoMeio.className='textodomeio'
const meio= document.getElementById('meio')
meio.appendChild(textoMeio)
// Construir botão iniciar
const botaoIniciar = document.createElement('button')
botaoIniciar.innerText= 'Iniciar'
botaoIniciar.id = "idBotaoIniciar"
botaoIniciar.className = 'classeBotao'
botaoIniciar.addEventListener('click', iniciar)
meio.appendChild(botaoIniciar)

////////////Inicio do jogo//////////
 function iniciar() {
    //esconder botaoIniciar
    meio.removeChild(botaoIniciar)
    //Textos iniciais apagando e reescrevendo
    setTimeout( ()=> {textoMeio.innerText = 'Prepare-se e boa sorte'},1900)
    //txt pedindo atenção aos botões ascendendo
    setTimeout( ()=> {textoMeio.innerText = 'Preste atenção na sequência'},3900)
    //jogo começa de fato
    //utilizar um número em cada botão, quando um número daquele botão aparecer ele deverá ascender
    
    //Iniciar sequencia dos botões ascendendo todos dentro do array
    setTimeout(()=> PiscaRepetidor(),4100)
    function PiscaRepetidor(){
        for(let i=0; i < valores.length; i++){
            setTimeout(()=>{piscar(valores[i])},1000*i)
            ( ()=>analisarSelecionarId(valores[i]),2000 )
        }
    }
    //aparecer txt 'Sua vez! Repita a sequência na ordem correta!'
     setTimeout( ()=>{interacaoMeioDoJogo()} ,5200+1100*valores.length)
}   

function interacaoMeioDoJogo() {
    const repitaSequencia=document.createElement('p')
    const ordemCorreta= document.createElement('p')

    textoMeio.innerText = 'Sua vez!'
    repitaSequencia.innerText='Repita a sequência na'
    ordemCorreta.innerText='ordem correta!'
    repitaSequencia.className= 'frasemeio'
    ordemCorreta.className='frasemeio'


    meio.appendChild(repitaSequencia)
    meio.appendChild(ordemCorreta)
    
    



    
    //Adicionar Função de botoes coloridos clicaveis
    //colocar um for aqui baseado em valores para funcionar com os botoes
    /*
    let contador1 = 1
    for(let c = 0; c < contador1; c++){

        

        document.addEventListener('click',function (e){

        //piscar quando clicar
        if(e.target.name === botaoVerde){ piscar(1)}
        if(e.target.name === botaoVermelho){ piscar(2)}
        if(e.target.name === botaoAmarelo){ piscar(3)}
        if(e.target.name === botaoAzul){ piscar(4)}
        
        if(//Verificar se o botão clicado está na posição valores[c]
            e.target.tagName === valores[c]){ 
                // se clicado nos botões corretos aumenta placar
                plcar+=1}

        //////////////se o botão clicado for o mesmo que valores[i] então contador1+=1 caso contrario parar código e ir para final()///////
        if(e.target.tagName === valores[i]){ 
                contador1+=1
            
            }else{final()}
        
    }
     
    }) 
    



    ///////////////caso o array criado com todos os botões iniciados seja igual ao array valores adicione no número aleatório a valores////////////////

        if(botoesClicados === valores // Talvez tenha que dar split para tirar de array e transformar em string sendo que só assim a comparação dará certo){
        //novos numeros aleatórios
            numeroAleatorio = criarNumeroAleatório()
        }
    //////////////apos terminar o for caso o array criado com todos os botões clicados seja igual ao array valores: mostrar a mensagem "É isso ai! Aguarde a próxima sequência!" e  retorne a função iniciar////////////////////////
        if(botoesClicados === valores // Talvez tenha que dar split para tirar de array e transformar em string sendo que só assim a comparação dará certo){
        //novos numeros aleatórios
            meio.innerText= 'É isso ai! Aguarde a próxima sequência!'
            setTimeOut(iniciar(),1500)
        }
    */
    //jogo finaliza
    // excluir o que existe no meio
/*     meio.removeChild(textoMeio) */
}        
    
    
function final(){
  const frasesMeio= document.getElementsByClassName('frasemeio')
   meio.removeChild(frasesMeio)
    //mostrar texto 'Que pena'
        const txtFinal1=document.createElement('p')
        txtFinal1.innerText='Que pena!'
        meio.appendChild(txtFinal1)
    //mostrar placar 'Você conseguiu ${placar}'
        const txtFinal2=document.createElement('p')
        txtFinal2.innerText=`Você conseguiu: ${placar}`
        txtFinal2.className='textoDoFinal'
        meio.appendChild(txtFinal2)
    //mostrar maior pontuação 'Maior pontuação: ${maiorPontuacao}'
        const txtFinal3=document.createElement('p')
        txtFinal3.innerText=`Maior pontuação: ${maiorPontuacao}`
        txtFinal3.className='textoDoFinal'
        meio.appendChild(txtFinal3)
    //mostrar texto 'A sequência está errada. Tente outra vez!'
        const txtFinal4=document.createElement('p')
        txtFinal4.innerText='A sequência está errada. Tente outra vez!'
        txtFinal4.id='sequenciaErrada'
        txtFinal4.className='textoDoFinal'
        meio.appendChild(txtFinal4)
    
    
    /////////////////////////////////Fazer todos os botões piscarem 3 vezes e apenas depois fazer aparecer o botão recomeçar////////////////////////
        // aparecer botão recomeçar
    
    
        const botaoRecomecar = document.createElement('button')
        botaoRecomecar.className = 'classeBotao'
        botaoRecomecar.id = 'botaoRecomeçar'
        botaoRecomecar.innerText = 'Recomeçar'
        botaoRecomecar.addEventListener('click', ()=>{
         iniciar()
         ////////////////////////////////////Colocar a função inicio no final para recomeçar o jogo//////////////////////////////////////////
         ///////////////////////////////////Zerar todas as variáveis menos maiorPontuacao ///////////////////////////////////////////////////////////
        })
        meio.appendChild(botaoRecomecar)
}