/*constante cerecebendo o id do formulario */
const form = document.getElementById('form-atividade');
//constantes recendo img de aprovado e reprovado 
const imgAprovado = '<img src="./images/aprovado.png"alt="Emoje festejando"/>';
const imgReprovado = '<img src="./images/reprovado.png"alt="Emoje decepcionado"/>';
//constantes como arry 
const atividade = [];
const notas = [];
// constantes que recebem a tag span de resultado aprovado ou reprovado 
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';

//constante nota minima recebem oq o cliente vai digitar como numero flutuante 
const notaMinima = parseFloat(prompt("Digita a Nota Minima:"));

//variavel linhas recebendo vazio 
let linhas = '';
/*adicionando o envendo subimit retirando a animação da pagina*/
form.addEventListener('submit', function(e){
    e.preventDefault();
    /*quando o evento subimit for chamado ira chamar o evento adiciona linhas */
    adicionaLinha();
    //quando o evento subimit for chamado ira chamar o evento atualiza tabelas
    atualizaTabela();

    atualizaMediaFinal();
});

/*função responsavel por adicionar linha */
function adicionaLinha (){
    /*constantes recebendo os ids dos inputs nome atividade e nota atividade */
    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputeNotaAtividade = document.getElementById('nota-atividade');
// verifição para saber se a atividade que o cliente ta colocando ja foi inclida ou nao se nao continua o sistema 
    if (atividade.includes(inputNomeAtividade.value)){
        alert(`A atividade: ${inputNomeAtividade.value} ja foi inserida`);
    }else{
    //aqui os arrys vai puchar os valores das variaveis inputes nome atividade e nota atividade 
    atividade.push(inputNomeAtividade.value);
    //recebendo o valor como numero flutuante usando o parseFlout
    notas.push(parseFloat(inputeNotaAtividade.value));

    /*variavel linha recebe o tr do html depois concatena com o td nomeatividade e
    depois concatena com o td notaatividade e testando se o input nota atividade for 
    maior ou igual a 7 usando ? como if e : como else retornando as variaveis img aprovado e reprovado
    e por fim fichando o tr*/
    let linha = '<tr>';
    linha += `<td>${inputNomeAtividade.value}</td>`;
    linha += `<td>${inputeNotaAtividade.value}</td>`;
    //aqui o cliente vai digitar a nota minima que precisa para fazer todo o resto do codigo 
    linha += `<td>${inputeNotaAtividade.value >= notaMinima ? imgAprovado : imgReprovado}</td>`;
    linha += `</tr>`;

    //variavel linhas concatena com variavel linha
    linhas += linha;
    }

    

    //zerando os campos a pos os uso 
    inputNomeAtividade.value = '';
    inputeNotaAtividade.value = '';
}
/*função responsavel por atualizar a tabela*/
function atualizaTabela (){
        /*constante recebendo o seletor tbody e corpotabela recebe um atributo html linhas*/
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
}

function atualizaMediaFinal(){
    //constante media final recebe a função calCulaMediaFinal
    const mediaFinal = calCulaMediaFinal();
    //chamando os elemento por id media fical valor e resultado do html
    document.getElementById('media-final-valor').innerHTML = mediaFinal;
    /*media final resultado recebe um elementohtml e variavel media final
    e fazendo o teste se media final for maior ou igual a 7 aprovado se nao reprovado restornando as constantes span*/
    //aqui o cliente vai digitar a nota minima que precisa para fazer todo o resto do codigo 
    document.getElementById('media-fical-resultado').innerHTML = mediaFinal >= notaMinima ? spanAprovado : spanReprovado;
}

function calCulaMediaFinal(){
        //Esse código está calculando a soma do array de notas.
        let somaDasNotas = 0;

        for (let i = 0; i < notas.length; i++) {
            somaDasNotas += notas[i];
        }
        // a constantes recebe a variavel soma das notas dividido por valor colocado na variavel notas usando notas.length 
        return somaDasNotas / notas.length;
}