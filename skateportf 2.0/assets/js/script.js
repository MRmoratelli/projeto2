const logo = document.getElementById("logo");
setTimeout(() => {
  logo.innerHTML =
    '<img height="100" src="./assets/img/skatelogo.webp" alt="logo" />';
}, 6000);

const load = document.getElementById("load");
setTimeout(() => {
  load.style.display = "none";
}, 4000);

const four = document.getElementById("four");
class ListSkt {
  constructor(img, nome, descricao) {
    this.img = img;
    this.nome = nome;
    this.descricao = descricao;
  }
}
//  novoskate() {
//   return console.log(this.nome);
// }

const listSkt = {
  0: new ListSkt(
    "./assets/imgcard/Bob_Burnquist_card.webp",
    "Bob Burnquist",
    "10 de outubro de 1976, RJ, Brasil"
  ),
  1: new ListSkt(
    "./assets/imgcard/tony-halk-card.webp",
    "Tony Halk",
    "12 de maio de 1968, CA, EUA."
  ),
  2: new ListSkt(
    "./assets/imgcard/rodney-mullen-card.webp",
    "Rodney Mullen",
    "17 de agosto de 1966, FL, EUA."
  ),
  3: new ListSkt(
    "./assets/imgcard/steve-cab-card.webp",
    "Steve Caballero",
    "8 de novembro de 1964, CA, EUA."
  ),
  4: new ListSkt(
    "./assets/imgcard/christian-hosoi-card.webp",
    "Christian Hosoi",
    "5 de outubro de 1967, CA, EUA."
  ),
  5: new ListSkt(
    "./assets/imgcard/danny-way-card.webp",
    "Danny Way",
    "15 de abril de 1974, OR, EUA."
  ),
  6: new ListSkt(
    "./assets/imgcard/Mike-Vallely-card.webp",
    "Mike Vallely",
    "29 de junho de 1970, NJ, EUA."
  ),
  7: new ListSkt(
    "./assets/imgcard/sandro-dias-card.webp",
    "Sandro Dias",
    "18 de abril de 1975, SP, Brasil."
  ),
  8: new ListSkt(
    "./assets/imgcard/Andrew-Reynolds-card.jpg",
    "Andrew Reynolds",
    "13 de junho de 1964, FL, EUA."
  ),
  9: new ListSkt(
    "./assets/imgcard/lance-mountain-card.webp",
    "Lance Mountain",
    "6 de junho de 1978, CA, EUA."
  ),
  10: new ListSkt(
    "./assets/imgcard/pedro-barros-card.webp",
    "Pedro Barros",
    "16 de março de 1995, SC, Brasil."
  ),
  11: new ListSkt(
    "./assets/imgcard/nyjah-houston-card.webp",
    "Nyjah Huston",
    "30 de novembro de 1994, CA, EUA."
  ),
  12: new ListSkt(
    "./assets/imgcard/Shane-ONeill-card.jpg",
    "Shane O'Neill",
    "3 de janeiro de 1990, MEL, Austrália."
  ),
  13: new ListSkt(
    "./assets/imgcard/bucky-lasek-card.webp",
    "Bucky Lasek",
    "3 de dezembro de 1972, MD, Austrália."
  ),
  14: new ListSkt(
    "./assets/imgcard/luan-oliveira-card.webp",
    "Luan de Oliveira",
    "22 de setembro de 1990, RS, Brasil."
  ),
  15: new ListSkt(
    "./assets/imgcard/mark-gonzales-card.webp",
    "Mark Gonzales",
    "1 de junho de 1968, CA, EUA."
  ),
};

for (const item of Object.keys(listSkt)) {
  const div = document.createElement("div");
  div.innerHTML = ` 
    <div class="col" id="${listSkt[item].nome}">
    <div class="card my-card" id="${listSkt[item].nome}" data-bs-toggle="modal" data-bs-target="#staticBackdrop"" onclick="teste(event)" >
     <img id="${listSkt[item].nome}" class="card-img-top img-card" src="${listSkt[item].img}" />
      <div class="card-body" id="${listSkt[item].nome}">
      <p id="${listSkt[item].nome}" class="card-text"><strong>${listSkt[item].nome},</strong> ${listSkt[item].descricao}</p> 
      </div>
    </div>
  </div>
    `;
  four.appendChild(div);
}

const modal = document.getElementById("modal");
const listHist = [
  {
    titulo: "Bob Burnquist",
    descricao: {
      imgSrc: "./assets/imgcard/Bob_Burnquist_card.webp",
      sobre:
        "Bob Burnquist é a maior lenda do skate vertical brasileiro, e o maior recordista de todos os tempos em X-Games (27 medalhas). Robert Dean Silva Burnquist nasceu no Rio de Janeiro em 10 de outubro de 1976, mais cresceu em São Paulo, onde conheceu o skate.",

      bio: "Bob Burnquist é filho de mãe brasileira e pai americano, originário da Califórnia, Bob nasceu no Rio de Janeiro mas se criou em São Paulo. Na infância, recusou uma medalha quando o time de futebol do qual era goleiro reserva ganhou um campeonato, porque não tinha contribuído para a vitória. Em entrevista à revista Trip, ele diria mais tarde que 'Nada contra esporte coletivo, mas ali eu vi que precisava de um que dependesse de mim. Se eu perdesse, era culpa minha; se eu ganhasse, o mérito era só meu'. Ganhou seu primeiro skate aos onze anos e estreou em competições aos treze anos. Ele revolucionou o mundo do skate, 'inventando' um jeito novo de andar de skate, com as bases dos pés trocadas, chamado de switch. Assim, se o skatista anda com o pé direito na frente, invertia o pé e andava com o esquerdo. Ganhou primeiro lugar nos X Games de 2001, quando realizou um número importante de novas manobras, batendo o skatista americano Bucky Lasek. Habilidoso em todas as modalidades, Bob tem mais destaque principalmente no Vert e MegaRamp. Em 2010 foi o primeiro skatista a conseguir fazer a manobra fakie (Switch com a base nollie) 900º na Megarrampa. Bob é personagem de vários jogos eletrônicos de PlayStation e Game Boy, além de estar presente no novo game da franquia Tony Hawks, lançado em 4 de setembro de 2020. Foi o primeiro skatista a conseguir fazer a manobra fakie (Switch com a base nollie) 900º na Megarrampa, manobra que até agora só ele concretizou. É octacampeão da Megarampa. Vive desde 1995 nos Estados Unidos, em San Diego, na Califórnia. Seu primeiro relacionamento foi com a americana Jen O'Brien, com quem tem uma filha chamada Lotus. Já com a brasileira Verônica Nachard, Bob tem uma filha chamada Jasmyn Verônica acusa Bob de espancamentos e cárcere privado, sendo noticiado em toda a mídia. Em dezembro de 2021, Verônica Nachard, ex esposa de Bob entrou com uma ação na justiça pedindo a prisão do skatista, por falta de pagamento da pensão alimentícia e por abandono afetivo, já que Bob não vê a própria filha a anos, e a criança está bloqueada em todas as redes sociais do pai. Yasmyn Burnquist foram as redes sociais implorar a visita do pai, a menor afirma que não tem o telefone do pai, nem sabe onde ele reside. Enquanto Bob desfruta de uma mansão com 6 suítes no condomínio Interlagos de Itaúna, Barra da Tijuca, a sua filha mora em Jacarepaguá, em uma quitinete de habitação popular de 35 M2. Informação que pode ser checada na internet. Em 2016 casou-se com juvira Maristela Guimarães Zanini-sem profissão, natural de Vila Valqueire. Juvira mesmo sendo uma milionária, proprietária de avião, helicóptero e da megarampa na Califórnia, a Sra Burnquist teve a discrepância de receber o auxílio emergencial destinado às famílias necessitadas de baixa renda. Em maio de 2020, com os propósitos de inspirar, educar e transformar, inaugurou o Instituto Bob Burnquist. As ações do IBB ocorrem em parceria com projetos sociais ligados ao skate espalhados pelo Brasil.",

      flag: "",
      link: "https://www.youtube.com/watch?v=aI_vlp-FdBw",
    },
  },
  {
    titulo: "Tony Halk",
    descricao: {
      imgSrc: "./assets/imgcard/tony-halk-card.webp",
      sobre:
        "Anthony Frank Hawk, mais conhecido como Tony Hawk, é um skatista de base goofy de grande destaque na modalidade vertical do esporte radical, um dos fundadores da marca Birdhouse Skateboards e o primeiro atleta a realizar a manobra 900°. Por fim, muito conhecido por dar nome a franquia de jogos digitais, Tony Hawk's, originalmente desenvolvido pela Neversoft",
      bio: "Apresentando grande habilidade desde jovem, Tony Hawk torna-se profissional aos quatorze anos (nesta época o necessário para se tornar profissional era apenas entrar em um campeonato profissional, ao contrário dos padrões atuais em que se necessita de patrocínio de uma companhia de skate). Com seu primeiro skate, fabricado pela No Rules, o atleta conquista seu primeiro título, em 1980. Em 1999, após onze tentativas mal sucedidas, o atleta realizou o primeiro giro de 900 graus completos em pleno X Games e ganhou o prêmio na competição de melhor manobra. Logo em seguida se aposenta oficialmente para dedicar sua vida a divulgação do esporte[8]. No mesmo ano, a empresa de desenvolvimento de jogos de computador, Neversoft, aproveita o estouro de popularidade do atleta e o convida para dar nome ao seu novo jogo que então foi chamado de Tony Hawk's Pro Skater. Hawk se tornou um nome comercial, aparecendo em uma série de comerciais para uma variedade de companhias, incluindo a Apple Computer e a Domino's Pizza. Também figurou em diversos filmes e animações, como Jackass - The Movie e The Simpsons. Com a criação da Tony Hawk Foundation, Hawk tem trabalhado para retribuir ao desporto que o esporte radical tanto lhe deu. Criada para promover e financiar pistas públicas em comunidades carentes, a fundação distribuiu mais de um milhão de dólares para entidades sem fim lucrativo construírem parques e pistas por todo os Estados Unidos. ",
      flag: "",
      link: "https://www.youtube.com/watch?v=8Zx7fFFfPis",
    },
  },
  {
    titulo: "Rodney Mullen",
    descricao: {
      imgSrc: "./assets/imgcard/rodney-mullen-card.webp",
      sobre:
        "John Rodney Mullen, mais conhecido como Rodney Mullen, é um skatista atualmente aposentado dos Estados Unidos, considerado por muitos o melhor do mundo na modalidade street além de ser um dos mais influentes na história do esporte e terceiro mais rico do mesmo. Foi inventor de icônicas manobras como Kickflip ou apenas Flip, 360 Flip, Heelflip, Casper Flip, Laser Flip e outros. É creditado como o inventor de mais de 39 manobras diferentes, o Kickflip acidentalmente em 1983, o Heelflip, o 360 Flip e Impossible. Mullen é creditado em vários vídeos de skate e lançou uma autobiografia",
      bio: "Apesar de achar uma atividade perigosa e ser contrário à ideia de seu filho andar de skate, o pai de Rodney (que era médico) lhe comprou um skate quando ele tinha dez anos, com a condição de que ele sempre usasse equipamento de proteção. Sua mãe sempre o deu apoio e o motivou, e após nove meses, Mullen, ganhou seu primeiro patrocínio da Island Surf Shop. Rodney alcançou o primeiro lugar na primeira competição em que participou (o evento Freestyle Masculino em Kona, Estados Unidos) e imediatamente foi notado por Bruce Walker e passou a ser patrocinado pela Walker Skateboards. Durante os três anos seguintes, monkey, macaco, ou como queira chamar, alcançaria mais de trinta vitórias, a maioria na região da Flórida. Tendo Barry Zaritsky como técnico, Rodney entrou em um radical regime de treinamento para derrotar o campeão mundial Steve Rocco no Oasis Pro de 1980. Mullen então se juntou à lendária companhia de skate Powell Peralta e virou membro da Bones Brigade, alcançando o nível de skatista profissional. Em 1989, Mullen deixou a Powell Peralta e se tornou sócio de Steve Rocco na World Industries, mantendo seu nível profissional como um skatista da companhia. Deixou de competir modalidade freestyle em 1990, Rodney havia vencido 34 das 35 competições em que havia participado nos últimos dez anos, e essa é a mais bem-sucedida marca na história de competições do skate. Mullen foi campeão mundial oito vezes, mas devido ao fato de que ele realizava manobras que ninguém conseguia, e sempre terminava em primeiro lugar, os competidores começaram a competir pelo segundo lugar apenas, já que a primeiro posição era sempre de Rodney, e isso foi desanimando todo mundo e as competições da modalidade freestyle basicamente acabaram de vez.",
      flag: "",
      link: "https://www.youtube.com/watch?v=1U-cgn3cEGA",
    },
  },
  {
    titulo: "Steve Caballero",
    descricao: {
      imgSrc: "./assets/imgcard/steve-cab-card.webp",
      sobre:
        "Steve Caballero (San José, Califórnia), é um skatista profissional norte-americano nascido na decada de 60'. ",
      bio: "Considerado um dos maiores nomes deste esporte e dono de estilo inigualável, foi integrante da lendária equipe Bones Brigade da Powell Peralta. Steve possui um estilo limpo, muito suave, executando as manobras sem trancos e raramente erra. Skatista versátil, domina como poucos o halfpipe, o banks, o bowl, as miniramps e o street style. Além de skate, gosta também de tocar guitarra, andar de moto, dedicar-se a sua filha Kayala e curtir sua mulher Sue. Tem uma banda que se chama The Faction. Seu som preferido é o punk rock. Segundo ele, suas melhores manobras são o Slide e os High Air. Ele também é muito amigo da banda Millencolin, e essa banda faz parte da sua trilha sonora no game Tony Hawk's Pro Skater 2.Foi o inventor de alguns truques de (skate) como: o (Caballerial Impossible),(Caballerial Flip) e (Full Cab) ou (Caballerial)",
      flag: "",
      link: "https://www.youtube.com/watch?v=3mAJ0taa2zg",
    },
  },
  {
    titulo: "Christian Hosoi",
    descricao: {
      imgSrc: "./assets/imgcard/christian-hosoi-card.webp",
      sobre:
        "Christian Hosoi Rosha, é um skatista profissional americano. Ele também era conhecido pelos apelidos de 'Cristo' e 'Holmes'. Junto com Tony Hawk, ele foi o melhor e mais popular skatista da década de 1980. É casado com Jennifer Lee e tem dois filhos, Rhythm Hosoi (de um relacionamento anterior) e Classic Hosoi. Ele atualmente mora em Huntington Beach, Califórnia.",
      bio: "Hosoi começou a andar de skate por volta dos sete ou oito anos com lendas do skate como Shogo Kubo, Tony Alva, Stacy Peralta e Jay Adams. Seu pai, Ivan “Pops” Hosoi, tornou-se gerente do Marina Del Rey Skatepark. Christian deixou a escola e passou seu tempo lá, o que lhe permitiu desenvolver rapidamente suas habilidades. Em 1979, como amador, Hosoi foi patrocinado por Powell Peralta. Ele deixou Powell Peralta um ano depois porque eles não permitiram que ele se tornasse profissional e se juntou à Dogtown Skateboards. Dogtown faliu logo depois, tornando-se profissional aos 14 anos com os Sims Skateboards. Christian Hosoi emergiu como um dos principais competidores em inclinações, ao lado de profissionais como Steve Caballero, Mike McGill, Lester Kasai e Mark 'Gator' Rogowski. Uma possível rivalidade com Tony Hawk surgiu. Isso provavelmente devido ao contraste de seus dois estilos de skate e seu modo de vida: Hosoi, conhecido por seu talento e seu estilo gracioso, Hawk por sua habilidade técnica e seus 'truques'. Hosoi inventa o Christ Air e o Rocket Air, e era famoso por atirar antenas enormes, a certa altura ele foi o recordista mundial. Espectadores de skate vertical aumentaram em popularidade com preços correspondentes. Isso, combinado com os vistos da Converse, Swatch e Jimmy'z, além de receber um modelo de roda profissional, os Hosoi Rocket II OGs através dos Speed wheels da Santa Cruz, rendeu a Hosoi mais dinheiro do que isso que ele sempre sonhou. Em 1984, ele formou sua própria empresa, Hosoi Skates, primeiro distribuída pela Skull Skates, depois pela NHS-INC. O conselho provou ser tão popular que foi falsificado. Quando a patinação de rua começou a surgir em meados da década de 1980, Hosoi também provou ser uma ameaça, vencendo as competições de verde e de rua na Lotte Cup no Japão em 1989.",
      flag: "",
      link: "https://www.youtube.com/watch?v=ovrV8BH2vhA",
    },
  },
  {
    titulo: "Danny Way",
    descricao: {
      imgSrc: "./assets/imgcard/danny-way-card.webp",
      sobre:
        "Danny Way nasceu em 1974 em Portland e participou de seu primeiro campeonato quando tinha apenas 11 anos. Em 1989, teve conheceu finalmente o lugar mais algo do pódio, em competição de vertical. Estava apenas no meio da adolescência e já indicava o futuro promissor e a carreira que construiria.",
      bio: "Skatista completo, Danny andava em todos os tipos de obstáculos e logo ganhou notoriedade por suas habilidades. Em 1991, ainda antes de atingir a maioridade, ganhou o cobiçado prêmio de skatista do ano entregue pela revista 'Thrasher'. Repetiu o feito em 2004, se tornando um dos raros skatistas que levaram o 'bicampeonato'. Ao lado de outras lendas, revolucionou o skate com o lançamento do vídeo “Questionable” (1992), da lendária marca Plan B, que entregou todo um novo universo de manobras e possibilidades nunca antes vistas. Ao lado de gente como Colin McKay, Matt Hensley, Mike Carroll, Pat Duffy, Rodney Mullen e Sal Barbier, ficou eternizada pra sempre sua contribuição pra evolução do esporte. 'Foi o vídeo de skate mais importante da era moderna', afirma. Sempre na busca de seus limites, em 1994 Danny sofreu uma grave lesão no pescoço enquanto surfava com amigos. Ficou sem saber se voltaria com alguma sequela do acidente. Mas depois de um longo tempo de recuperação, retornou com vontade de ir ainda mais longe. Um dos feitos dessa volta foi a quebra do recorde de maior aéreo em um half-pipe, atingindo 3,60 metros. Além disso, se tornou o primeiro skatista a dropar de um helicóptero para dentro de um half. Em 2002, concretizou o sonho de construir uma pista de skate de proporções inimagináveis, hoje conhecida como megarrampa e apresentou ao mundo a novidade realizando o recorde de aéreo mais distante, 19 metros, e de aéreo mais alto, 5 metros (acima). Ainda em 2003 foi lançado o “DC vídeo”, produção que chocou a indústria do skate, com uma equipe de elite apresentando manobras inovadoras e Danny Way fecha o vídeo com chave de ouro com uma vídeo-parte na megarrampa, realizando manobras nunca antes imaginadas em cima do skate. Com o intermédio de Danny, em 2004 os X Games introduziram pela primeira vez uma nova modalidade do skate em suas disputas, o Big Air, competição realizada na megarrampa. Na estreia, o americano levou o ouro e ainda quebrou o próprio recorde de distância com a marca de 24 metros.",
      flag: "",
      link: "https://www.youtube.com/watch?v=zF3Uf482G7E",
    },
  },
  {
    titulo: "Mike Vallely",
    descricao: {
      imgSrc: "./assets/imgcard/Mike-Vallely-card.webp",
      sobre:
        "Mike Vallely (pronuncia-se Val-ey-lee), a.k.a. Mike V, é um skatista profissional, ator, dublê, lutador de luta livre, jogador de hóquei e músico. Desde janeiro de 2014, é vocalista da banda de punk rock, Black Flag. Nasceu em Edison, New Jersey. Tem um irmão mais velho, Joe, e uma irmã mais nova, Amy. Jogou na liga júnior de beisebol até os 14 anos, em 1984, quando descobriu o skate e o punk rock. ",
      bio: "Começou pedindo o skate emprestado de um amigo, até que, no natal de 1984, seus pais, Art e Mary Vallely, lhe deram um skate profissional da Sims, Jeff Phillip. Além do street, Mike também praticou vertical, começando na pista Tom Groholski e em Barn, ambas localizadas em New Jersey. Andou também no famoso pico de New York, o Brooklyn Banks. Em 1986, Mike mudou-se com a família para Virginia Beach, Virgínia. Logo fez amizades e entrou numa equipe local chamada Subculture, da área de Kampsville. Participou de campeonatos de street e vertical. Na primavera de 86, houve um campeonato de skate profissional em Mount Trashmore, e enquanto Mike andava num estacionamento ao lado acabou chamando a atenção de Neil Blender do alto do Half Pipe. Lance Mountain e Stacy Peralta ficaram surpresos ao vê-lo andar. Lance, então, deu-lhe um skate novo, e, depois de uma improvisada demonstração, foi oferecido a Mike um patrocínio amador pela Powell Peralta. Atualmente, mora em Long Beach, Califórnia. Em 2008, Vallely veio ao Brasil para filmar Drive, uma série do programa Fuel TV, e, em sua visita, conheceu Sandro Soares (Testinha), da Unidade Ferraz de Vasconcelos da Fundação CASA, captando imagens e histórias do Skate nacional. Além do Black Flag, Mike Vallely é vocalista da banda de hardcore punk 'Revolution Mother', mas atualmente encontram-se em hiato.",
      flag: "",
      link: "https://www.youtube.com/watch?v=WXHWiFYZ9dk&t=2s",
    },
  },
  {
    titulo: "Sandro Dias",
    descricao: {
      imgSrc: "./assets/imgcard/sandro-dias-card.webp",
      sobre:
        "Sandro Dias, também conhecido como Mineirinho, é um skatista brasileiro. Skatista profissional desde 1995, começou a andar dez anos antes. É considerado o “Rei do 540” e foi o terceiro skatista no mundo a acertar a manobra 900°, além de ser o primeiro a voltá-la durante sua linha em uma competição. Sandro também é hexacampeão mundial pela World Cup Skateboarding (2003, 2004, 2005, 2006, 2007 e 2011), tricampeão europeu (2001, 2003 e 2005) e medalha de ouro dos X Games de Los Angeles (2006).",
      bio: "O início de Sandro “Mineirinho” no skate foi curioso. Por volta de 1985, o atleta pegava o skate do irmão de um amigo de infância emprestado, colocava um pneu de carro em cima e descia a ladeira da garagem de seu prédio sentado. Pouco depois, às vésperas do natal, Sandro pediu um skate para o seu pai. Quando ganhou o presente, começou a se interessar mais e a frequentar diariamente uma pista – ou melhor, um halfpipe de madeira – que alguns skatistas construíram no fundo de uma loja perto da casa dele (Força Local). Após alguns meses, participou do seu primeiro campeonato na categoria iniciante. Na prefeitura municipal de Santo André, local que abrigou o evento, ele era o atleta mais novo da competição e terminou em oitavo. A experiência adquirida em mais alguns campeonatos e a evolução técnica deram a Sandro Dias condições de conquistar o primeiro título cedo. Em 1988, aos 13, foi campeão brasileiro de street iniciante. De sobra, ainda fez a sua primeira viagem internacional naquele ano. Foi para os Estados Unidos, onde andou e conheceu algumas pistas de skate. Em 1989, na Alemanha, disputou o seu primeiro campeonato internacional. Apesar de ainda ser amador no Brasil, competiu como profissional e terminou em 31º. Depois disso, Sandro continuou competindo no Brasil como amador, mas o skate começou a sumir no início da década de 1990 com a crise econômica no Brasil; assim, os eventos e as melhores pistas que na época eram particulares foram se acabando. Com isso, foi obrigado a se distanciar do skate competitivo e só andava por lazer numa pista pública que existia em Santo André, sua cidade natal. Em 1995, depois de alguns anos sem frequentar eventos de skate, ficou sabendo que iria acontecer um campeonato profissional de Vertical (halfpipe) em uma feira de esportes no Shopping Center Norte, em São Paulo. Foi até lá para assistir, mas levou também o seu equipamento. O que Sandro imaginava foi além, pois acabou participando e terminando na quinta colocação. Empolgado pelo resultado, não parou mais de acompanhar os eventos e treinar. Nos dois anos seguintes foi competir na Europa, e em 1997 foi pela primeira vez ao Slam City Jam, em Vancouver, no Canadá. A partir de 1998 começou a frequentar mais eventos nos Estados Unidos. Em 1999, também participou pela primeira vez dos X Games e dos Gravity Games, considerados os mais importantes do circuito Mundial, e terminou a temporada entre os top 20. Em 2000, participou de mais eventos nos Estados Unidos e na Europa. Novamente disputou os X Games e os Gravity Games, e fechou o ano entre os top 10. Em 2001, a evolução no ranking continuou. Competiu em praticamente todos os eventos WCS pelo mundo, ganhou a última etapa, terminou o ano entre os cinco melhores e foi campeão do circuito Europeu. No ano de 2002, o brasileiro novamente participou de todas as etapas do circuito Mundial, ganhou alguns campeonatos, se deu bem em vários, participou mais uma vez dos X Games e dos Gravity Games e terminou o ano em quarto colocado no ranking mundial.",
      flag: "",
      link: "https://www.youtube.com/watch?v=11IhwqRkdG4",
    },
  },
  {
    titulo: "Andrew Reynolds",
    descricao: {
      imgSrc: "./assets/imgcard/Andrew-Reynolds-card.jpg",
      sobre:
        "Andrew Reynolds é um skatista profissional americano conhecido por co-fundador da Baker Skateboards em 2000 com o artista Jay Strickland. Ele agora é o único proprietário da Baker Skateboard. Reynolds estabeleceu a Bakerboys Distribution com Erik Ellington e Jim Greco em 2007.",
      bio: "Reynolds começou a andar de skate aos nove anos. Ele se tornou profissional apenas em 1996 e depois se tornou conhecido, principalmente através do vídeo de Birdhouse ( The End ) e foi nomeado pela revista americana Thrasher 'Skater of The Year' (SOTY) em 1998. Amigável apelidado de Turtle Boy, ele costuma passar seu tempo nas ruas de Los Angeles , com outros membros de sua equipe. Seus truques favoritos são o Kickflip , o Frontside flip, o 360 frontside e o cabalerial. Entre outras coisas, Reynolds fez Kickflip (primeira tentativa) e Backside Heelflip sobre os 5 quarteirões de Bercy . Ele também acertou seu Frontside flip sobre os 4 blocos Bercy (primeira tentativa) da primeira tentativa durante a demonstração Emerica em6 de maio de 2007, ele também devolveu um traseiro 360 no mesmo local desde então. Ele é finalmente o mestre indiscutível do shifty flip que ele entrou com facilidade nos 4 grandes blocos de Macba em Barcelona . Ele também e acima de tudo colocou um flip back e um front flip em Wallenberg. Andrew Reynolds é chamado de The Boss nos círculos de skate, apelido que ele deu a um de seus sapatos em seu ex-patrocinador Emerica . Andrew mostra um estilo incomparável. É ao mesmo tempo leve, elegante, elegante e ao mesmo tempo rigoroso. Ele é um dos skatistas mais perfeccionistas, começando seus 3.6 costas 5 blocos 4 vezes 'porque eu pareço um dançarino no ar' não é pouca coisa. Ele sofre de Transtorno Obsessivo-Compulsivo (TOC), o que significa que muitas vezes repete algumas ações diferentes (por exemplo: tocar uma parede, perguntar se as câmeras estão prontas) André é um dos pioneiros da nova escola , ele introduziu o street style, foi um dos primeiros a ter a ideia de pular blocos em 360º. Ele está atualmente na Baker Skateboards , Independent Truck Company , Spitfire , Vans (ele estava anteriormente na Emerica Shoes ), Altamont Apparel, Nixon e Active Skateshop. Recentemente, ele participou do vídeo Emerica Stay Gold, um dos maiores de todos os tempos. Andrew Reynolds também criou uma marca de roupas ( Altamont Apparel ) e uma marca de pranchas ( Baker Skateboards ). Andrew Reynolds gosta de colecionar joias e diamantes, tocar violão e fazer pequenas montagens de vídeo. Ele faz parte do grupo musical The Goat & The Occasional Others ao lado de seu colega skatista profissional Kevin Spanky Long.",
      flag: "",
      link: "https://www.youtube.com/watch?v=xdWLCtcukJw",
    },
  },
  {
    titulo: "Lance Mountain",
    descricao: {
      imgSrc: "./assets/imgcard/lance-mountain-card.webp",
      sobre:
        "Robert Lance Mountain é um skatista norte-americano, natural de Pasadena, Califórnia. É um cristão. Ele é casado com Yvette Loveless e tem um filho, Ronald Cyril Lance Mountain.",
      bio: "katista profissional que ganhou destaque durante o apogeu do esporte na década de 1980. Ele é bem conhecido por ser um membro da equipe de skate Bones Brigade, e frequentemente é creditado a inventar o fingerboard. Ele foi patrocinado pela Variflex em 1981 antes de ingressar para Powell Peralta, um ano depois, onde formou uma forte amizade com Stacy Peralta, líder da equipe e diretor da série de vídeos Bones Brigade. Apresentou a abertura dos videos 411VM (411 Skate Vídeo Magazine), após a venda da marca ele saiu para montar sua empresa The Firm.",
      flag: "",
      link: "https://www.youtube.com/watch?v=3-elyk3TKdo",
    },
  },
  {
    titulo: "Pedro Barros",
    descricao: {
      imgSrc: "./assets/imgcard/pedro-barros-card.webp",
      sobre:
        "Pedro Barros é um skatista brasileiro, medalhista olímpico e apontado por muitos como o sucessor de Sandro Dias e Bob Burnquist sendo o principal representante do país na modalidade Bowl.",
      bio: "Criado no Rio Tavares, bairro onde hoje desenvolve diversos projetos sociais, o skatista começou a chamar atenção e deixar sua marca na história do skate desde cedo. Com 14 anos subiu pela primeira vez ao pódio em uma edição dos X Games em Los Angeles na modalidade Skate Vertical Amador, o que seria apenas o começo de uma relação de sucesso com os jogos, onde veio a conquistar diversas medalhas em futuras edições o configurando assim como um dos skatistas mais bem sucedidos de todos os tempos. Em 2021, juntamente com os skatistas Luiz Francisco e Pedro Quintas, integrou a primeira delegação masculina de skate park do Brasil nos Jogos Olímpicos de Verão em Tóquio, edição onde a modalidade fez sua estreia em olimpíadas. Com uma nota de 77,14 na fase de classificação, avançou para a final na quarta colocação. Na final da modalidade completou uma volta com pontuação de 86,14 pontos, nota que lhe rendeu a segunda colocação e a medalha de prata na modalidade. ",
      flag: "",
      link: "https://www.youtube.com/watch?v=QYALCa0xgg0",
    },
  },
  {
    titulo: "Nyjah Huston",
    descricao: {
      imgSrc: "./assets/imgcard/nyjah-houston-card.webp",
      sobre:
        "Nyjah Huston (Davis, Califórnia, 30 de novembro de 1994) é um skatista profissional estadunidense. Um dos mais vitoriosos da atualidade: É o maior campeão da Street League Skateboarding (SLS), possui 7 medalhas de ouro nos X Games e um título no tradicional campeonato de Tampa. ",
      bio: "Conquistou sete medalhas de ouro, duas de prata e uma de bronze. O americano encontra-se invicto no SKB Street, desde 2013. Nyjah venceu sua primeira Street League aos 15 anos, na sua estréia como skatista profissional. Hoje é o atleta mais vitorioso da SLS, com 3 conquistas consecutivas (2012-2014). Na última edição, desbancado pelo brasileiro Luan de Oliveira, ficou em segundo lugar. ",
      flag: "",
      link: "https://www.youtube.com/watch?v=0_IRcOvvuKw",
    },
  },
  {
    titulo: "Shane O'Neill",
    descricao: {
      imgSrc: "./assets/imgcard/Shane-ONeill-card.jpg",
      sobre:
        "Shane O'Neill (nascido em 3 de janeiro de 1990) é um skatista profissional australiano de Melbourne , Victoria . Shane é um membro do SLS '9 Club', o que significa que ele conseguiu um truque na competição da Street League que os juízes pontuaram uma média de 9 ou melhor. O truque de Shane foi um switchstance Switch 360 double kickflip. Em 2016 Shane ganhou uma medalha de prata nos X Games em Oslo . ",
      bio: "Em 2021, O'Neill se classificou para os Jogos Olímpicos de Tóquio de 2020 na competição de skate de rua . Ele competiu no evento de rua masculino nas Olimpíadas de Tóquio de 2020 . Ele ficou em décimo sexto nas eliminatórias e, portanto, não competiu nas finais. Shane O'Neill é patrocinado desde os 14 anos. Ele é patrocinado pela Nike SB , Thunder Trucks, Villager, Diamond Supply & Co. e Spitfire Wheels . O'Neill foi anteriormente patrocinado pela Primitive Skateboarding e pela Skate Mental. Em 8 de junho de 2018, O'Neill anunciou através de seu Instagram que deixaria a Primitive para iniciar sua própria empresa de skate. Em 5 de maio de 2019, O'Neill anunciou via Instagram que sua nova empresa se chamava April Skateboards a partir de 2021, a equipe é composta por Shane O'Neill, Guy Mariano, Yuto Horigome e Diego Najera. ",
      flag: "",
      link: "https://www.youtube.com/watch?v=F1sjuey25ug",
    },
  },
  {
    titulo: "Bucky Lasek",
    descricao: {
      imgSrc: "./assets/imgcard/bucky-lasek-card.webp",
      sobre:
        "Lasek começou a andar de skate com 12 anos, logo após ter sua bicicleta roubada. Depois de competir em alguns eventos amadores, ele rapidamente foi notado pelos caçadores de talentos de Powell Peralta, em 1987.",
      bio: "Hoje, Lasek é considerado como um dos skatistas de vertical mais consistente do esporte. Ele frequentemente realiza manobras inovadoras e técnicas e as completa com singular regularidade. Uma de suas manobras 'assinatura' realizada em competições é a Heelflip Frontside Gay Twist and Switch Frontside 540. Ele também é o único skatista a girar seu skate para um invert (Heelflip Frontside Invert), e o único a fazer um 720 e aterrissar de costas (forward-to-fakie Indy 720, conhecido como ‘MacKenzie’). Até 2011, Bucky Lasek havia ganhado quatorze medalhas nos X Games, incluindo seis de ouro. Em 2004 também conquistou títulos como Vans Triple Crown, Gravity Games, e o Slam City Jam. Atualmente reside em Carlsbad, Califórnia, com sua mulher e dois filhos, Paris e Devin.  ",
      flag: "",
      link: "https://www.youtube.com/watch?v=k-NdFzk6F0E",
    },
  },
  {
    titulo: "Luan de Oliveira",
    descricao: {
      imgSrc: "./assets/imgcard/luan-oliveira-card.webp",
      sobre:
        "Luan Vilanova de Oliveira mais conhecido como Luan Oliveira (Porto Alegre, 22 de setembro de 1990) é um skatista profissional brasileiro e um dos mais influentes skatistas da sua geração de skaters no Brasil.",
      bio: "Em sua primeira participação nos Street League no skate street (já tinha participado dos X Games no skate real street), Luan conseguiu a segunda colocação. Na primeira linha da disputa, Luan estava praticamente sem chance de classificação, quando em sua última volta, acertou uma linha composta de: nollie backside flip seguido de um extenso frontside flip sobre o corrimão, o que o ajudou a garantir sua vaga na grande final ao lado de Nyjah Huston, Ryan Decenzo, Ryan Sheckler e Chaz Ortiz. Na grande final, Luan não conseguiu sair melhor que Nyjah Huston e ficou com o segundo lugar, já a terceira colocação ficou com Ryan Sheckler. Em 2015, Luan inicia o ano ganhando o Tampa Pro (um dos mais tradicionais campeonatos de skate street) pela segunda vez, após isso venceu também a segunda etapa da Street League, em Los angeles, e na terceira etapa em New Jersey, conquistou o bi-campeonato, com Nyjah Huston em segundo e o brasileiro estreante Kelvin Hoefler em terceiro. ",
      flag: "",
      link: "https://www.youtube.com/watch?v=UU_aEfsQ9hU",
    },
  },
  {
    titulo: "Mark Gonzales",
    descricao: {
      imgSrc: "./assets/imgcard/mark-gonzales-card.webp",
      sobre:
        "Mark Gonzales (1 de junho de 1968) é um skatista e artista norte-americano. Também chamado de 'Gonz' e 'The Gonz', é conhecido como o pioneiro da modalidade street skateboarding e foi considerado o skatista mais influente de todos os tempos pela revista Transworld Skateboarding em dezembro de 2011.",
      bio: "Gonzales entered the skateboarding scene at the age of thirteen in South Gate, California, U.S. At the age of fifteen, as Tommy Guerrero and Natas Kaupas were developing their own styles of progressive street skating around the same time, Gonzales adopted a more modern, innovative approach to skateboarding in a street context (subsequently dubbed 'street skateboarding'). He was featured on the cover of Thrasher magazine's November 1984 issue riding a board from the Alva company, his board sponsor at the time, while performing a trick known as a 'beanplant'.",
      flag: "",
      link: "https://www.youtube.com/watch?v=yR_R6xUIC7g",
    },
  },
];

console.log(listHist[0].titulo);

function teste(element) {
  const divhist = document.createElement("div");
  divhist.setAttribute("id", "five");

  for (const itens of Object.keys(listHist)) {
    listHist[itens].titulo === element.path[2].id
      ? (divhist.innerHTML = ` 

<div class="modal-header" >

<h5 class="modal-title" id="exampleModalLabel">Skateboard</h5>
<button onclick="limpaModal()" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
</div>
<div class="modal-body" >

 <div class="modalll">

 <img width="100%" src="${listHist[itens].descricao.imgSrc}" alt="Skater ${listHist[itens].titulo}">
 <p> ${listHist[itens].descricao.sobre} </p>
 </div>
 <div class="histskt">
   <h6>Biografia de ${listHist[itens].titulo} </h6>
    <p>${listHist[itens].descricao.bio}</p>
   <div >
        <h6>Video Part</h6>
        <div><a href="${listHist[itens].descricao.link}" target="_blank" >
        <i class="fa-brands fa-youtube"></i></a></div>
        

   </div>
</div>
</div>
<div class="modal-footer">
<button onclick="limpaModal()" type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> 
</div>
`)
      : "";
  }

  modal.appendChild(divhist);
}

function limpaModal() {
  const five = document.getElementById("five");
  five.remove();
  console.log("skate for life");
}

const infos = [
  {
    titulo: "anos60",
    informacoes:
      "-Tony Halk- -Rodney Mullen- -Steve Caballero- -Christian Hosoi- -Andrew Reynolds- -Mark Gonzales.",
    ano: "1960",
  },
  {
    titulo: "anos70",
    informacoes:
      "-Bob Burnquist- -Danny Way- -Mike Vallely- -sandro Dias- -Lance Mountain- -Bucky Lasek.",
    ano: "1970",
  },
  {
    titulo: "anos80",
    informacoes: "anos 80",
    ano: "1980",
  },
  {
    titulo: "anos90",
    informacoes:
      "-Pedro Barros- -Nyjah Huston- -Shane O'Neill- -Luan de Oliveira.",
    ano: "1990",
  },
];
const ul = document.getElementById("xxxx");
for (const item of Object.keys(infos)) {
  const li = document.createElement("li");
  li.innerHTML = ` 
  <button
  id="${infos[item].titulo}"
  
  type="button"
  class="btn pops"
  data-bs-content="${infos[item].informacoes}"
  data-bs-toggle="popover"
  data-bs-placement="bottom"
  data-bs-trigger="focus"
>
  ${infos[item].ano}"
</button>
    `;
  ul.appendChild(li);
}
const popoverTriggerList = document.querySelectorAll(
  '[data-bs-toggle="popover"]'
);
const popoverList = [...popoverTriggerList].map(
  (popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl)
);

const imgCarrossel = {
  0: {
    img: "assets/imgcard/Andrew-reynolds-card.jpg",
  },
  1: {
    img: "assets/imgcard/Andrew-reynolds-card.jpg",
  },
  2: {
    img: "assets/imgcard/Andrew-reynolds-card.jpg",
  },
  3: {
    img: "assets/imgcard/Bob_burnquist_card.webp",
  },
  4: {
    img: "assets/imgcard/Bob_burnquist_card.webp",
  },
  5: {
    img: "assets/imgcard/Bob_burnquist_card.webp",
  },
  6: {
    img: "assets/imgcard/pedro-barros-card.webp",
  },
  7: {
    img: "assets/imgcard/pedro-barros-card.webp",
  },
  8: {
    img: "assets/imgcard/pedro-barros-card.webp",
  },
};

const carrosselDinamico = document.getElementById("carrosselDinamico");
for (const itens of Object.keys(imgCarrossel)) {
  const divcarrossel = document.createElement("div");

  divcarrossel.innerHTML = `
   <img style="width:100px; margin: auto" src="${imgCarrossel[itens].img}">
  `;
  carrosselDinamico.appendChild(divcarrossel);
}

$("#carrosselDinamico").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 3,
});
