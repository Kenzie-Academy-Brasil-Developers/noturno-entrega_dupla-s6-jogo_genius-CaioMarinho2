
// Variaveis  
    let valores= []
    let clicadosVazio= []
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

function piscarValores (){
    valores.forEach(element => {
        piscar(valores[index])
    });
}

function piscarComClick (numeroBotao){
    setTimeout(()=>{
        analisarSelecionarId(numeroBotao)},10);

    setTimeout(()=> {
        padronizarId(numeroBotao)},400)
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
botaoVerde.name= 1
botaoVermelho.id= 'redButton'
botaoVermelho.name= 2
botaoVerde.className= 'topButtons'
botaoVermelho.className= 'topButtons'

botaoAmarelo.id= 'yellowButton'
botaoAmarelo.name= 3
botaoAzul.id= 'blueButton'
botaoAzul.name= 4
botaoAmarelo.className= 'botonButtons'
botaoAzul.className= 'botonButtons'

botaoVerde.innerText='Verde'
botaoAzul.innerText='Azul'
botaoAmarelo.innerText='Amarelo'
botaoVermelho.innerText='Vermelho'

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
/* botaoIniciar.addEventListener('click', setTimeout(()=> {meio.removeChild(botaoIniciar)},10)) */
        /*  ()=>{/* esconder botaoIniciar } */
meio.appendChild(botaoIniciar)

////////////Inicio do jogo//////////
 function iniciar() {
    
    
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
             /*  ( ()=>analisarSelecionarId(valores[i]),2000 ) */
            }
        }
        // excluir o que existe no meio
        /* setTimeout( ()=> {meio.removeChild(textoMeio)},5700) */
        //aparecer txt 'Sua vez! Repita a sequência na ordem correta!'
        setTimeout( ()=>{interacaoMeioDoJogo()} ,4800+1100*valores.length)

    }   
    
     
    
    function interacaoMeioDoJogo() {
        
        let clicados = []
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
        
        let contador1 = 1
        for(let c = 0; c < contador1; c++){
            console.log(valores)
            
            const jogo= document.getElementById('jogo')
            
            
            
            jogo.addEventListener('click',function (e){
                const convertendo= Number( e.target.name)
                
                clicados.push(convertendo)
                
                
                
            //piscar quando clicar
            if(e.target === botaoVerde){ piscarComClick(1)}
            if(e.target=== botaoVermelho){ piscarComClick(2)}
            if(e.target === botaoAmarelo){ piscarComClick(3)}
            if(e.target=== botaoAzul){ piscarComClick(4)}
                
        if(clicados.length === valores.length && clicados.every((item,index) => item === valores[index])){
            valores.push(Math.floor(Math.random()*4)+1)   
            placar+=1
            if(maiorPontuacao < placar){maiorPontuacao = placar}    
            meio.innerText= 'Aguarde a próxima sequência!'
            iniciar();
                    
        }if(clicados.length === valores.length && clicados.every((item,index) => item !== valores[index])){
            final()
                    
        }
       
        
    })}
    
    //jogo finaliza
     
}
    
    
function final(){
  const frasesMeio= document.getElementsByClassName('frasemeio')
  /*  meio.removeChild(frasesMeio)  */
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
        ///////////////////////////////////Zerar todas as variáveis menos maiorPontuacao ///////////////////////////////////////////////////////////
          
            let valores= [];
            let clicadosVazio= [];
            let numeroAleatorio = criarNumeroAleatório();
            let maiorPontuacao = 0;
            let placar = 0;
            valores.push(numeroAleatorio);
            let botoesClicados = [];
        })
        botaoRecomecar.addEventListener('click', ()=>{
         ////////////////////////////////////Colocar a função inicio no final para recomeçar o jogo//////////////////////////////////////////
         iniciar})
        
        meio.appendChild(botaoRecomecar)
}