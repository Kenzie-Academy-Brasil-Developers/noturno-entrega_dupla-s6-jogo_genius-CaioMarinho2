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




function botoes(){
    return Math.floor(Math.random()*4)+1
    }

maiorPontuacao = 0
 function iniciar() {
    //esconder botaoIniciar
    meio.removeChild(botaoIniciar)

    //Textos iniciais apagando e reescrevendo
    /* setTimeout(alterarInserirTexto(meio,textomeio,"Prepare-se e boa sorte"),5000) */
    setTimeout(()=>{
        alterarInserirTexto(meio,textomeio,"Prepare-se e boa sorte")
    },3000)
    

    
    
    
    //txt pedindo atenção aos botões ascendendo
    /*
    setTimeout(()=>{
        alterarInserirTexto(meio,textomeio,"Preste atenção na sequência")
    },5000)

    placar = 0
    Valores= []
    numeroAleatorio = 0
    
    //jogo começa de fato
    
        
    //utilizar um número em cada botão, quando número daquele botão aparecer ele deverá ascender
    let numeroAleatorio = botoes();
    valores.push(numeroAleatorio);
    
    for(let indice = 0; indice = valores.length; indice++){
        
        //iniciar sequencia dos botões ascendendo todos dentro do array
        /* if(n === 1){  botaoVerde.id= 'greenButton:hover'  }
        if(n === 2){  botaoVerde.id= 'botaoVermelho.id= 'redButton:hover' }
        if(n === 3){  botaoVerde.id= botaoVerde.className= 'topButtons:hover'  }
        if(n === 4){  botaoVerde.id= botaoVermelho.className= 'topButtons:hover'  } 








        //aparecer txt 'Sua vez! Repita a sequência na ordem correta!'
        setTimeout(()=>{
            alterarInserirTexto(meio,textomeio,"Sua vez! Repita a sequência na ordem correta!")
        },5000)

        
        
        //aumentar pontuação a cada acerto 
        if(placar > maiorPontuacao){maiorPontuacao = placar}

        //novos numeros aleatórios
            let numeroAleatorio = botoes()
        //caso o número do botao clicado seja o mesmo do último ítem valores -> adicionar novo número aleatório em valores
            valores.push(numeroAleatorio)
        
    }
    
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
    
    
    


    */

    
    

}

