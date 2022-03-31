const botaoVerde=document.createElement('button');
const botaoVermelho=document.createElement('button');
const botaoAmarelo=document.createElement('button');
const botaoAzul=document.createElement('button');

const superiores= document.getElementById('botõesSuperior')
const inferiores= document.getElementById('botõesInferiores')

botaoVerde.id= 'greenButton'
botaoVermelho.id= 'redButton'
botaoVerde.className= 'topButtons'
botaoVermelho.className= 'topButtons'

botaoAmarelo.id= 'yellowButton'
botaoAzul.id= 'blueButton'
botaoAmarelo.className= 'botonButtons'
botaoAzul.className= 'botonButtons'


superiores.appendChild(botaoVerde)
superiores.appendChild(botaoVermelho)
inferiores.appendChild(botaoAmarelo)
inferiores.appendChild(botaoAzul)

//TESTE
const textomeio=document.createElement('p')
textomeio.innerText='Seja bem vindo'
textomeio.className='textodomeio'
const meio= document.getElementById('meio')
meio.appendChild(textomeio)
//TESTE


function removerChild(parent,child){
    parent.removerChild(child)
}

 function alterarInserirTexto(parent,filho,txt){
    parent.removeChild(filho)
    const child = document.createElement('p')
    child.innerText= txt
    parent.appendChild(child)
 }


const botaoIniciar = document.createElement('button')
botaoIniciar.innerText= 'Iniciar'
botaoIniciar.id = "idBotaoIniciar"
botaoIniciar.removeId
botaoIniciar.addEventListener('click', function() {
    iniciar()
})
meio.appendChild(botaoIniciar)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// funções do mecanismo de trocar ID
function padronizarId (numeroBotao){
    if(numeroBotao === 1){botaoVerde.id= 'greenButton'}
    if(numeroBotao === 2){botaoVermelho.id= 'redButton'}
    if(numeroBotao === 3){botaoAmarelo.id= 'yellowButton'}
    if(numeroBotao === 4){botaoAzul.id= 'blueButton'}
}

function analisarSelecionarId (numeroBotao){
        if(numeroBotao === 1){  botaoVerde.id= 'greenButtonSelect'}
        if(numeroBotao === 2){  botaoVermelho.id= 'redButtonSelect'}
        if(numeroBotao === 3){  botaoAmarelo.id= 'yellowButtonSelect'}
        if(numeroBotao === 4){  botaoAzul.id= 'blueButtonSelect'} 
    }

function clicaMudarId(numeroBotao){
    botaoVerde.addEventListener('click',analisarSelecionarId(numeroBotao))
    botaoVermelho.addEventListener('click',analisarSelecionarId(numeroBotao))
    botaoAmarelo.addEventListener('click',analisarSelecionarId(numeroBotao))
    botaoAzul.addEventListener('click',analisarSelecionarId(numeroBotao))
} 
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


function botoes(){
    return Math.floor(Math.random()*4)+1
    }

maiorPontuacao = 0

//Inicio do jogo
 function iniciar() {
    //esconder botaoIniciar
    meio.removeChild(botaoIniciar)

    //Textos iniciais apagando e reescrevendo
    /* setTimeout(alterarInserirTexto(meio,textomeio,"Prepare-se e boa sorte"),5000) */
    setTimeout(()=>{
        alterarInserirTexto(meio,textomeio,"Prepare-se e boa sorte")
    },3000)
    

    
    
    
    //txt pedindo atenção aos botões ascendendo
    
    setTimeout(()=>{
        alterarInserirTexto(meio,textomeio,"Preste atenção na sequência")
    },5000)

    placar = 0
    Valores= []
    numeroAleatorio = 0
    
    //jogo começa de fato
    //utilizar um número em cada botão, quando um número daquele botão aparecer ele deverá ascender
    numeroAleatorio = botoes();
    valores.push(numeroAleatorio);
    

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //iniciar sequencia dos botões ascendendo todos dentro do array
        for(let repeticao2=0; repeticao2 < valores.length; repeticao2++){
            setTimeout(()=>{
                analisarSelecionarId(valores[indice1])},5000)
            
            setTimeout(()=> {
                padronizarId(valores[indice1])},5000)
        }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //aparecer txt 'Sua vez! Repita a sequência na ordem correta!'
        setTimeout(()=>{
            alterarInserirTexto(meio,textomeio,"Sua vez! Repita a sequência na ordem correta!")
        },5000)

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //clicar e alterar cor e tamanho baseado no valor passado
        for(let repeticao3=0; repeticao3 < valores.length; repeticao3++){
            setTimeout(()=>{
                clicaMudarId(valores[repeticao3])},5000)

            setTimeout(()=> {
                padronizarId(valores[indice1])},5000)
        }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////        
        //aumentar pontuação a cada acerto 
        if(placar > maiorPontuacao){maiorPontuacao = placar}

        //novos numeros aleatórios
            let numeroAleatorio = botoes()
        //caso o número do botao clicado seja o mesmo do último ítem valores -> adicionar novo número aleatório em valores
            valores.push(numeroAleatorio)
        

    
    //jogo finaliza

    removeChild(meio,textomeio)

    //mostrar texto 'Que pena'
        const txtFinal1=document.createElement('p')
        txtFinal1.innerText='Que pena'
        txtFinal1.className='textodomeio'
    //mostrar placar 'Você conseguiu ${placar}'
        const txtFinal2=document.createElement('p')
        txtFinal2.innerText='Você conseguiu ${placar}'
        txtFinal2.className='textodomeio'
    //mostrar maior pontuação 'Maior pontuação: ${maiorPontuacao}'
        const txtFinal3=document.createElement('p')
        txtFinal3.innerText='Maior pontuação: ${maiorPontuacao}'
        txtFinal3.className='textodomeio'
    //mostrar texto 'A sequência está errada. Tente outra vez!'
        const txtFinal4=document.createElement('p')
        textomeio.innerText='Seja bem vindo'
        extomeio.className='textodomeio'
    // aparecer botão recomeçar
        const botaoRecomecar = document.createElement('button')
        botaoRecomecar.innerText = 'Recomeçar'
        botaoRecomecar.addEventListener('click', function() {
         iniciar()
        })
        meio.appendChild(botaoRecomecar)
    
    
    


   

    
    

}

