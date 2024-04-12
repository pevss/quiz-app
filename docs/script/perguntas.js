"use strict";

export const perguntasObj = [
    {
        pergunta: "Qual o nome desse personagem?",
        alternativa0: "<span>A.</span> Fred Flinstone",
        alternativa1: "<span>B.</span> Fred Flintstone",
        alternativa2: "<span>C.</span> Fred Flinston",
        alternativa3: "<span>D.</span> Fred Desimpedidos",
        resposta: 1,
        imagem: "1.jpg"
    },
    {
        pergunta: "Qual o médico do cu?",
        alternativa0: "<span>A.</span> Culogista",
        alternativa1: "<span>B.</span> Coloproctologista",
        alternativa2: "<span>C.</span> Gastroenterologista",
        alternativa3: "<span>D.</span> Urologista",
        resposta: 1,
        imagem: "2.jpg"
    },
    {
        pergunta: "Qual desses animais não é ruminante?",
        alternativa0: "<span>A.</span> Girafa",
        alternativa1: "<span>B.</span> Antílope",
        alternativa2: "<span>C.</span> Rinoceronte",
        alternativa3: "<span>D.</span> Alce",
        resposta: 2,
        imagem: "3.jpg"
    },
    {
        pergunta: "Quem foi o primeiro imperador romano?",
        alternativa0: "<span>A.</span> Augusto",
        alternativa1: "<span>B.</span> Júlio César",
        alternativa2: "<span>C.</span> Nero",
        alternativa3: "<span>D.</span> Tibério",
        resposta: 0,
        imagem: "4.jpg"
    },
    {
        pergunta: "Qual o tipo de bacon ideal para fazer uma massa Carbonara?",
        alternativa0: "<span>A.</span> Lombo canadense",
        alternativa1: "<span>B.</span> Pancetta",
        alternativa2: "<span>C.</span> Guanciale",
        alternativa3: "<span>D.</span> Toucinho curado",
        resposta: 2,
        imagem: "5.jpg"
    },
    {
        pergunta: "Qual o nome do álbum lançado pela cantora Luísa Sonza em 2023?",
        alternativa0: "<span>A.</span> Trap The Fato",
        alternativa1: "<span>B.</span> Doce 22",
        alternativa2: "<span>C.</span> Escândalo Íntimo",
        alternativa3: "<span>D.</span> Pandora",
        resposta: 2,
        imagem: "6.jpg"
    },
    {
        pergunta: "Qual das alternativas abaixo não é uma cidade do egito?",
        alternativa0: "<span>A.</span> Cairo",
        alternativa1: "<span>B.</span> New Cairo City",
        alternativa2: "<span>C.</span> Alexandria",
        alternativa3: "<span>D.</span> Riad",
        resposta: 3,
        imagem: "7.jpg"
    },
    {
        pergunta: "Qual cientista é creditado pela invenção do motor de indução eletromagnética?",
        alternativa0: "<span>A.</span> Sadi Carnot",
        alternativa1: "<span>B.</span> Benjamin Franklin",
        alternativa2: "<span>C.</span> Michael Faraday",
        alternativa3: "<span>D.</span> Nikolas Tesla",
        resposta: 3,
        imagem: "8.jpg"
    },
    {
        pergunta: "Quantos cromossomos tem uma pessoa com síndrome de down?",
        alternativa0: "<span>A.</span> 44",
        alternativa1: "<span>B.</span> 45",
        alternativa2: "<span>C.</span> 47",
        alternativa3: "<span>D.</span> 48",
        resposta: 2,
        imagem: "9.jpg"
    },
    {
        pergunta: "No filme Os Incríveis, como se chama a esposa do personagem Gelado?",
        alternativa0: "<span>A.</span> Bebel",
        alternativa1: "<span>B.</span> Maria",
        alternativa2: "<span>C.</span> Beca",
        alternativa3: "<span>D.</span> Mel",
        resposta: 3,
        imagem: "10.jpg"
    },
    {
        pergunta: "Que bandeira é essa?",
        alternativa0: "<span>A.</span> Bandeira da Armênia",
        alternativa1: "<span>B.</span> Bandeira da Polissexualidade",
        alternativa2: "<span>C.</span> Bandeira do Poliamor",
        alternativa3: "<span>D.</span> Bandeira do Sudão do Sul",
        resposta: 2,
        imagem: "11.jpg"
    },
    {
        pergunta: "Qual o verdadeiro nome do Espantalho, vilão do Batman?",
        alternativa0: "<span>A.</span> Waylon Jones",
        alternativa1: "<span>B.</span> Jonathan Crane",
        alternativa2: "<span>C.</span> Oswald Chesterfield Cobblepot",
        alternativa3: "<span>D.</span> Jervis Tetch",
        resposta: 1,
        imagem: "12.jpg"
    },
    {
        pergunta: "Em 2015, qual era o carro mais rápido do GTA V?",
        alternativa0: "<span>A.</span> T20",
        alternativa1: "<span>B.</span> Zentorno",
        alternativa2: "<span>C.</span> Osiris",
        alternativa3: "<span>D.</span> Adder",
        resposta: 0,
        imagem: "13.gif"
    },
    {
        pergunta: "Qual destes famosos não esteve presente na Farofa da Gkay 2023?",
        alternativa0: "<span>A.</span> Kéfera",
        alternativa1: "<span>B.</span> Fiuk",
        alternativa2: "<span>C.</span> Gabi Luthai",
        alternativa3: "<span>D.</span> Malu Borges",
        resposta: 0,
        imagem: "14.jpg"
    },
    {
        pergunta: "Quem foi nomeado o MVP da NBA em 2014?",
        alternativa0: "<span>A.</span> Kaká do Milan",
        alternativa1: "<span>B.</span> Russell Westbrook",
        alternativa2: "<span>C.</span> Kevin Durant",
        alternativa3: "<span>D.</span> LeBron James",
        resposta: 2,
        imagem: "15.jpg"
    },
    {
        pergunta: "Em 2012, quem foi escolhido como o 25º maior brasileiro de todos os tempos?",
        alternativa0: "<span>A.</span> Oswaldo Cruz",
        alternativa1: "<span>B.</span> Neymar",
        alternativa2: "<span>C.</span> Silas Malafaia",
        alternativa3: "<span>D.</span> Dilma Rousseff",
        resposta: 0,
        imagem: "16.jpg"
    },
    {
        pergunta: "(Unespar 2015) Um dos textos mais importantes da história da filosofia que trata do tema da moral e da ética é a Ética a Nicômaco, de Aristóteles.\nNesta obra, o pensador analisa a natureza e o caráter das ações humanas e, ao final, sugere que há um bem supremo, que é a finalidade última das ações humanas. Este bem supremo é:",
        alternativa0: "<span>A.</span> Justiça",
        alternativa1: "<span>B.</span> Felicidade",
        alternativa2: "<span>C.</span> Virtude",
        alternativa3: "<span>D.</span> Liberdade",
        resposta: 1,
        imagem: "17.jpg"
    },
    {
        pergunta: "Qual o MBTI do Jimin do BTS?",
        alternativa0: "<span>A.</span> ISFP",
        alternativa1: "<span>B.</span> INTP",
        alternativa2: "<span>C.</span> ENFJ",
        alternativa3: "<span>D.</span> ESTP",
        resposta: 2,
        imagem: "18.jpg"
    },
    {
        pergunta: "Onde nasceu o explorador Marco Polo?",
        alternativa0: "<span>A.</span> Florença, Itália",
        alternativa1: "<span>B.</span> Gênova, Itália",
        alternativa2: "<span>C.</span> Veneza, Itália",
        alternativa3: "<span>D.</span> Valeta, Malta",
        resposta: 2,
        imagem: "19.jpg"
    },
    {
        pergunta: "Qual é o nome do baterista da Penguin Band, do Club Penguin?",
        alternativa0: "<span>A.</span> Stompin' Bob",
        alternativa1: "<span>B.</span> Petey K",
        alternativa2: "<span>C.</span> Franky",
        alternativa3: "<span>D.</span> G Billy",
        resposta: 3,
        imagem: "20.jpg"
    },
];

export const perguntasReservasObj = [
    {
        pergunta: "Calcule o valor do cateto b no triângulo a seguir:",
        alternativa0: "<span>A.</span> 6",
        alternativa1: "<span>B.</span> 8",
        alternativa2: "<span>C.</span> 12",
        alternativa3: "<span>D.</span> 14",
        resposta: 0,
        imagem: "extra-1.jpg"
    },
    {
        pergunta: "Qual alternativa apresenta uma oração subordinada substantiva predicativa?",
        alternativa0: "<span>A.</span> Quero que você me mame.",
        alternativa1: "<span>B.</span> Os homens que dão o cu tendem a ser gays.",
        alternativa2: "<span>C.</span> Meu desejo é que você dê a bunda.",
        alternativa3: "<span>D.</span> Ele é viado tal qual o amigo é.",
        resposta: 2,
        imagem: "extra-2.jpg"
    },
    {
        pergunta: "Qual a tradução dessa palavra chinesa para o português?",
        alternativa0: "<span>A.</span> Sexo",
        alternativa1: "<span>B.</span> Vagina",
        alternativa2: "<span>C.</span> Ânus",
        alternativa3: "<span>D.</span> Pênis",
        resposta: 1,
        imagem: "extra-3.jpg"
    },
];
