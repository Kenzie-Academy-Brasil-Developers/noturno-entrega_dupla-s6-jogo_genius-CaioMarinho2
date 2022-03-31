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
const textoMeio=document.createElement('p')
textoMeio.innerText='Seja bem vindo'
textoMeio.className='textodomeio'
const meio= document.getElementById('meio')
meio.appendChild(textoMeio)
//TESTE

function alterarTexto(filho,txt){
    filho.innerText= txt;
}

let array = [1,3,4]

const botaoIniciar = document.createElement('button')
botaoIniciar.innerText= 'Iniciar'
botaoIniciar.id = "idBotaoIniciar"
botaoIniciar.className = 'classeBotao'
botaoIniciar.addEventListener('click', iniciar)
meio.appendChild(botaoIniciar)

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// funções do mecanismo de trocar ID
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
        padronizarId(numeroBotao)},2000)
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
 function iniciar(churros) {
console.log(churros)
    
    
     
    //esconder botaoIniciar
    meio.removeChild(botaoIniciar)

    //Textos iniciais apagando e reescrevendo
    setTimeout( ()=> textoMeio.innerText = 'Prepare-se e boa sorte',1500)
    
    
    //txt pedindo atenção aos botões ascendendo
    setTimeout( ()=> textoMeio.innerText = 'Preste atenção na sequência',1500)
    
    
    
    
    
    let placar = 0
    let valores= [1,2,3,4]
    let numeroAleatorio = 0
    
    //jogo começa de fato
    //utilizar um número em cada botão, quando um número daquele botão aparecer ele deverá ascender
   /* numeroAleatorio = botoes();
    valores.push(numeroAleatorio);
     */
   for(let z = 0; z <= 5; z++){
    
    
    ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //Iniciar sequencia dos botões ascendendo todos dentro do array
    for(let i=0; i < valores.length; i++){
        
        setTimeout(()=>{piscar(valores[i])},1000*i)
        /* ( ()=>analisarSelecionarId(valores[i]),2000 ) */

    }
        
    
    }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //aparecer txt 'Sua vez! Repita a sequência na ordem correta!'
        setTimeout( ()=> textoMeio.innerText = 'Sua vez! Repita a sequência na ordem correta!',1100*valores.length)
        
        
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        //clicar e alterar cor e tamanho baseado no valor passado
        let repeticoes = 1
        /* for(let indice2=0; indice2 < valores.length; indice2++){
            repeticoes +=1
            setTimeout(()=> {piscar(valores[indice2])},500*repeticoes)
        } */
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////        
        //aumentar pontuação a cada acerto 
        if(placar > maiorPontuacao){maiorPontuacao = placar}

        //novos numeros aleatórios
            numeroAleatorio = botoes()
        //caso o número do botao clicado seja o mesmo do último ítem valores -> adicionar novo número aleatório em valores
            valores.push(numeroAleatorio)
        
    //jogo finaliza
    // excluir o que existe no meio
    meio.removeChild(textoMeio)
    

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
    // aparecer botão recomeçar
    
        const botaoRecomecar = document.createElement('button')
        botaoRecomecar.className = 'classeBotao'
        botaoRecomecar.id = 'botaoRecomeçar'
        botaoRecomecar.innerText = 'Recomeçar'
        botaoRecomecar.addEventListener('click', ()=>{
         iniciar()
        })
        meio.appendChild(botaoRecomecar)

    
    
    
}

