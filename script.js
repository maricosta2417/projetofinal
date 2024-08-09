const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que é inteligência artificial?",
        alternativas: [
            {
                texto: "Um campo de estudo multidiciplinar que abrange varias areas do conhecimanto.",
                afirmacao: "Sim, pois e o meion tecnologico mais utilizado pela sociedade."
            },
            {
                texto: "E um meio tecnologico pouco conhecido pela populacao atual.",
                afirmacao: "Nao, pois atualmente a inteligencia artificial esta crescendo muito"
            }
        ]
    },
    {

        enunciado: "Onde a inteligência artificial está sendo usada?",
        alternativas: [
            {
                texto: "Fotos, sistemas de trânsito, dispositivos médicos.",
                afirmacao:"Sim, os meios digitais sao utilizados em todos os meios digitais citados a cima."
            },
            {
                texto: "Não está sendo usada.",
                afirmacao: "Nao, pois a inteligencia artificial e utilizada em um grande todo dos meios digitais."
            }

        ]
    },
    {
        enunciado: "A inteligência artificial tem mais pontos positivos ou negativos em relação a sociedade?",
        alternativas: [
            {
                texto: "positivos ",
                afirmacao: "Nao, pois possui muitos pontos negativos tambem."
            },
            {
                texto:"negativos",
                afirmacao: "Nao, pois possui muitos pontos positivos. tambem"
            },
            {
                texto: "Apresenta pontos negativos e positivos, o que interfere nesse fator, é a forma em que e para que é usada.",
                afirmacao: "Sim, pois o fator de como ela e usada interfere muitos nesses dois pontos."
            }  
        ]
    },
    {
        enunciado: "A inteligência artificial, futuramente, será capaz de executar as mesmas tarefas que um cérebro humano?",
        alternativas: [
            {
                texto: "Talvez",
                afirmacao: "Sim, pois com sua evolucao a IA talvez conseguira alcancar a capacidade de um cerebro humano."
                
            },
            {
                texto:"Não, pois a mesma não possuí evolução o sufiente para executar determinadas tarefas.",
                 afirmacao: "Nao, pois talvez com evolucoes futuras  IA podera conseguira alcancar essas tarefas."
            },
            {
                texto: "Sim, a IA poderá futuramente executar qualquer tarefa que um cérebro humano também consegue, mas os avanços nesses aspectos estão lentos.",
                afirmacao: "Nao, pois esses dados ainda estao em estudo."
            }
        ]
    },
    {
        enunciado: "Quais os beneficios da inteligencia artificial?",
        alternativas: [
            {
                texto: "Autoatendimento eficiente, conteúdo personalizado, respostas rápidas, segurança e melhora na experiência do cliente.",
                afirmacao: "Sim, pois o IA e capaz de proporcionar tudo isso."
            },
            {
                texto: "Não há beneficios.",
                afirmacao: "Nao,pois ha sim muitos beneficios."
            }
        ]
    }
    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta(){
    if (atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativa = document.createElement("button");
        botaoAlternativa.textContent = alternativa.texto;
        botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativa);
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();