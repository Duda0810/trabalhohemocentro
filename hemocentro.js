const readline = require ('readline-sync');

//isso é um array
let bancoDeDados = []


function cadastrarDoador(){
    let novoDoador = []
    let nome = readline.question("nome do doador: ");
    let idade = readline.question("idade do doador: ");
    let peso = readline.question("peso do doador: ");
    let tipo = readline.question("tipo sanguíneo do doador: ");
    let data = Number(readline.question("data da última doação do doador: "));

    novoDoador.nome = nome
    novoDoador.idade = idade
    novoDoador.peso = peso
    novoDoador.tipo= tipo
    novoDoador.dataUltimaDoacao = data

    cadastroDoadores.push(novoDoador)
    
}

function listaDoadores(){
    console.log("--------------------\nLISTAGEM DE DOADORES\n:--------------------")
    console.log("NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO")
    console.log("-----------------------------------------------------------------")
    
    for (let i = 0; i < bancoDeDados.length; i++) {
        console.log(`${bancoDeDados[i].nome}, ${bancoDeDados[i].idade}, ${bancoDeDados[i].peso}, ${bancoDeDados[i].tipo}, ${bancoDeDados[i].ultimaDoacao}`)
    }

}

function tipoSanguineo(){
    console.log("--------------------\nBUSCAR DOADORES POR TIPO SANGUÍNEO\n:--------------------")
    let tipoSanguineo = readline.question('tipo sanguíneo:')
    console.log("------------------")
    console.log('RESULTADO DA BUSCA:')
    console.log("------------------")
    console.log("NOME             | IDADE | PESO | TIPO SANGUÍNEO | ÚLTIMA DOAÇÃO")
    console.log("-----------------------------------------------------------------")
    for (let i = 0; i < bancoDeDados.length; i++) {
        if(bancoDeDados === tipoSanguineo){
            console.log(`${bancoDeDados[i].nome}, ${bancoDeDados[i].idade}, ${bancoDeDados[i].peso}, ${bancoDeDados[i].tipo}, ${bancoDeDados[i].ultimaDoacao}`)
        }
    
    }
    console.log("-----------------------------------------------------------------")
}

function buscarPorUltimaDoacao(){
    console.log("--------------------\nBUSCAR DATA DE ULTIMA DOACAO\n:--------------------")
    let data = readline.question('Digite a data desejada:')
    for (let i = 0; i < bancoDeDados.length; i++) {
        if(bancoDeDados.ultimaDoacao.splice(-10) <= data){
            console.log(`${bancoDeDados[i].nome}, ${bancoDeDados[i].idade}, ${bancoDeDados[i].peso}, ${bancoDeDados[i].tipo}, ${bancoDeDados[i].ultimaDoacao}`)
        }

    }
    console.log("-----------------------------------------------------------------")
} 


//função menu
function exibirMenu(){
    console.log('1. cadastrar doador');
    console.log('2. listar doadores');
    console.log('3. buscar doador por tipo sanguíneo');
    console.log('4. buscar dador por data de última doação');
    console.log('5. sair');
}
 function processarEscolha(opcao){
    switch(opcao){
        case '1':
           cadastrarDoador();
            break;
        case '2':
            listaDoadores();
            break;
        case '3':
            tipoSanguineo();
            break;
        case '4':
            buscarPorUltimaDoacao();
            break;
        case '5':
        console.log("sair...");
            return true; //indica que o progam deve ser encerrado
        default:
            console.log("Você escolheu uma opcao inválida. escolha outra opcao válida.")

    }
    return false;
 }

//funcao principal, que executa um while que vai ser smepre true, ou seja, o código vai
//continuar em execução até que apertemos a opção4, que transforma a condição do while em false(!true).

function main(){
    let encerrar = false;

    while(!encerrar) {
        exibirMenu();
        let opcao = readline.question("digite o número da opcao desejada: ");
        encerrar = processarEscolha(opcao);

    }
}
main();
