Quem quer ser um bêbado
===

Eu e meus amigos estavam tendo ideias de maneiras diferentes de fazer o outro beber até que chegamos a esse jogo. 

Conceito do jogo
---

O jogo é jogado por duas pessoas e uma plateia. Um jogador é o "apresentador" e a outra é o jogador. O papel do apresentador é montar uma lista de 20 perguntas com 4 respostas cada e o jogador deverá respondê-las.

Caso o jogador acerte a pergunta, o apresentador deverá tomar um shot, caso contrário o jogador deverá tomar esse shot.

  Nota: Inicialmente, o jogo seria feito com o google slides, mas eu como um bom apirante a programador pensei "Por que eu mesmo não codifico isso? Com certeza eu consigo.".

Requisitos
---

- Criar suspense na hora de aparecer as perguntas.
  
- Contador de shots par ambos os jogadores.

- Contador de perguntas.

- Poderes interativos: Perguntar a plateia, ligar para alguém, remover duas alternativas escolhida pelo aprensentador e pular pergunta.

Desenvolvimento
---

O processo de desenvolvimento foi bem divertido, criar a lógica de acertos e erros e mostra-lá de forma visual foi bem interessante.

Os poderes foram a parte mais legal de se pensar, tirando "Perguntar a plateia" e "Ligar para alguém" que não tem nenhum efeito no sistema, descobrir como remover duas alternativas e em seguida fazer com que os elementos do DOM delas aparecessem de novo foi bem interessante. Outra legal foi fazer com que o poder de pular a pergunta não interferisse do contador nem na proxima pergunta. Para fazer com que isso funcionasse corretamente, decidi fazer com que o sistema girasse em torno de dois arrays ("perguntas" e "perguntasReserva"), e então ele alternaria entre os dois conforme o jogador fosse pulando perguntas.

Conclusão
---

O jogo foi um sucesso, rimos, o jogador bebeu 17 shots e capotou logo em seguida kkkkkk. Experiência bastante divertida, recomendo para qualquer um que chegar a ver esse reposiório.

Agora falando de aspectos mais técnicos, desenvolver esse jogo foi bastante desafiador, existem muitos estados possíveis para o jogo, muitas interações estranhas que aconteciam com as animações do css, o timing do aparecimento das alternativas e perguntas demorou para ser refinado, etc. Mas acima de tudo, eu persisti, li diversos fóruns e consegui um resultado satisfatório em todos os aspectos. Para mim esse código está a prova de balas e roda até se eu apagar ele todo.

  Observações: O jogo foi criado para ser jogado em uma televisão, por isso a falta de responsividade (se o jogo chamar atenção de mais pessoas prentendo fazer a interface dele ser responsiva).
  Caro recrutador, as perguntas não foram feitas por mim, qualquer coisa estranha que você ver não reflete a minha personalidade kkkkkkkk.
