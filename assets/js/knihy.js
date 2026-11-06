const bookRecords = [
  ["Isaac Asimov", "Nadace"],
  ["Isaac Asimov", "Nadace a říše"],
  ["Isaac Asimov", "Druhá Nadace"],
  ["Isaac Asimov", "Na hranicích Nadace"],
  ["Frank Herbert", "Duna"],
  ["Frank Herbert", "Spasitel Duny"],
  ["Frank Herbert", "Děti Duny"],
  ["Frank Herbert", "Božský imperátor Duny"],
  ["Frank Herbert", "Kacíři Duny"],
  ["Frank Herbert", "Kapitula: Duna"],
  ["J. R. R. Tolkien", "Netvoři a Kritikové"],
  ["J. R. R. Tolkien", "Silmarillion"],
  ["J. R. R. Tolkien", "Húrinovy děti"],
  ["J. R. R. Tolkien", "Beren a Lúthien"],
  ["J. R. R. Tolkien", "Pád Gondolinu"],
  ["J. R. R. Tolkien", "Pád Númenoru"],
  ["J. R. R. Tolkien", "Hobit aneb cesta tam a zase zpátky"],
  ["J. R. R. Tolkien", "Pán prstenů - Společenstvo prstenu"],
  ["J. R. R. Tolkien", "Pán prstenů - Dvě věže"],
  ["J. R. R. Tolkien", "Pán prstenů - Návrat krále"],
  ["J. R. R. Tolkien", "Nedokončené příběhy"],
  ["J. R. R. Tolkien", "Příběhy z čarovné říše"],
  ["G. R. R. Martin", "Hra o trůny"],
  ["G. R. R. Martin", "Rytíř sedmi království"],
  ["Ernest Cline", "Ready player one"],
  ["Douglas Adams", "Stopařův průvodce galaxií"],
  ["Arthur C. Clarke", "Setkání s rámou"],
  ["Ray Bradbury", "451 stupňů Fahrenheita"],
  ["Ray Bradbury", "Marťanská kronika"],
  ["Ray Bradbury", "Ilustrovaný muž"],
  ["Ray Bradbury", "Zlatá jablka sluneční"],
  ["Ray Bradbury", "Sem přichází něco zlého"],
  ["Ray Bradbury", "Pampeliškové víno"],
  ["Ray Bradbury", "Kaleidoskop"],
  ["Orson Scott Card", "Enderova hra"],
  ["Cormac McCarthy", "Cesta"],
  ["Cormac McCarthy", "Tahle země není pro starý"],
  ["Anthony Burgess", "Mechanický pomeranč"],
  ["Jules Verne", "Ocelové město"],
  ["Jules Verne", "Dva roky prázdnin"],
  ["Rudyard Kipling", "Stateční kapitáni"],
  ["Daniel Defoe", "Robinson Crusoe"],
  ["Ernest Hemingway", "Komu zvoní hrana"],
  ["Oscar Wilde", "Obraz Doriana Graye"],
  ["James Clavell", "Král Krysa"],
  ["Mika Waltari", "Egypťan Sinuhet"],
  ["Henryk Sienkiewicz", "Quo Vadis"],
  ["Erich Maria Remarque", "Na západní frontě klid"],
  ["Pierre Boulle", "Most přes řeku kwai"],
  ["Mario Puzo", "Kmotr"],
  ["Paulo Coelho", "Alchymista"],
  ["Francis Scott Fitzgerald", "Velký Gatsby"],
  ["William Golding", "Pán Much"],
  ["Albert Camus", "Myth of Sisyphus"],
  ["Albert Camus", "Cizinec"],
  ["Albert Camus", "Mor"],
  ["Albert Camus", "První člověk"],
  ["Albert Camus", "Pád"],
  ["Madeline Miller", "Achilleova píseň"],
  ["Stephen King", "Řbitov Zviřátek"],
  ["Stephen King", "Osvícení"],
  ["Simone de Beauvoir", "Nerozlučné"],
  ["J. D. Salinger", "Kdo chytá v žitě"],
  ["John Steinbeck", "Na východ od ráje"],
  ["John Steinbeck", "Hrozny hněvu"],
  ["John Steinbeck", "Pláň Tortilla"],
  ["John Steinbeck", "Na Plechárně"],
  ["Antoine de Saint-Exupéry", "Moje planeta"],
  ["Jack Kerouac", "Na cestě"],
  ["Liou Cch’-sin", "Problém tří těles"],
  ["Liou Cch’-sin", "Temný les"],
  ["Liou Cch’-sin", "Vzpomínka na zemi"],
  ["Harper Lee", "To Kill a Mockingbird"],
  ["Franz Kafka", "Proměna a jiné povídky"],
  ["Franz Kafka", "Proces"],
  ["Franz Kafka", "Zámek"],
  ["William Shakespeare", "Večer tříkrálový aneb cokoliv chcete"],
  ["Christopher Paolini", "Eragon"],
  ["Jack London", "Tulák po hvězdách"],
  ["Margaret Atwood", "Příběh služebnice"],
  ["Milan Kundera", "Nesmrtelnost"],
  ["Karel Čapek", "Hovory s T. G. Masarykem"],
  ["Lev Nikolajevič Tolstoj", "Anna Karenina"],
  ["Fjodor Michajlovič Dostojevskij", "Zločin a trest"],
  ["Miguel de Cervantes Saavedra", "Důmyslný rytíř Don Quijote de la Mancha"],
  ["Gabriel García Márquez", "Sto roků samoty"],
  ["William Styron", "Sophiina volba"],
  ["Richard P. Feynman", "To snad nemyslíte vážně!"],
  ["Jane Austen", "Pýcha a předsudek"],
  ["Robert Graves", "Já, Claudius"],
  ["Alan Marshall", "Už zase skáču přes kaluže"],
  ["Mary Shelley", "Frankenstein"],
  ["H. P. Lovecraft", "Spisy 1"],
  ["H. P. Lovecraft", "Spisy 2"],
  ["H. P. Lovecraft", "Spisy 3 díl 1"],
  ["H. P. Lovecraft", "Spisy 3 díl 2"],
  ["H. P. Lovecraft", "Spisy 4"],
  ["Umberto Eco", "Jméno růže"],
  ["Isaac Asimov", "Já, robot"],
  ["Aldous Huxley", "Konec civilizace"],
  ["Alistair MacLean", "Let do nebezpečí"],
  ["Daniel Keyes", "Růže pro Algernon"],
  ["Andrzej Sapkowski", "Zaklínač 1"]
];

const expertBookRecords = [
  ["Testovací autor", "TEST: Ukázková kniha"],
  ["Jan Burian", "Cesty starověkých civilizací"],
  ["Pavel Bělina a spol.", "Dějiny zemí Koruny české 1."],
  ["Pavel Bělina a spol.", "Dějiny zemí Koruny české 2."],
  ["Zdeněk V. Špinar", "Kniha o pravěku"],
  ["Kolektiv autorů", "Encyklopedie Bible"],
  ["C. A. Burland", "Amerika před Kolumbem"],
  ["S. G. Morley", "Mayové"],
  ["Emil Loubal", "T. G. Masaryk a tělesná výchova"],
  ["Petr Dvořák, David Peroutka, Ondřej Tomala", "Modality v analytické metafyzice"],
  ["Jean-Luc Nancy", "Vetřelec"],
  ["Filip Tvrdý", "Turingův test"],
  ["Immanuel Kant", "Základy metafyziky mravů"],
  ["John Stuart Mill", "O svobodě myšlení a slova"],
  ["Kolektiv autorů", "60 let filosofického časopisu"],
  ["Ludwig Wittgenstein", "Tractatus logico-philosophicus"],
  ["Ludwig Wittgenstein", "Filosofická zkoumání"],
  ["Jean-Jacques Rousseau", "Rozprava o nerovnosti; O společenské smlouvě"],
  ["Neznámo", "Bible"],
  ["Platón", "Symposion"],
  ["Aristotelés", "Etika Níkomachova"],
  ["Henri Bergson", "Smích"],
  ["Simone de Beauvoir", "Druhé pohlaví"],
  ["Carl Menger", "Zásady ekonomie"],
  ["Ludwig von Mises", "Liberalismus"],
  ["Ludwig von Mises", "Socialismus"],
  ["Ludwig von Mises", "Lidské jednání"],
  ["Ludwig von Mises", "Hospodářská politika"],
  ["Ludwig von Mises", "Teorie peněz a úvěru"],
  ["Ludwig von Mises", "Byrokracie"],
  ["Friedrich August von Hayek", "Osudová domýšlivost"],
  ["Friedrich August von Hayek", "Právo, zákonodárství a svoboda"],
  ["Friedrich August von Hayek", "Cesta do otroctví"],
  ["Friedrich August von Hayek", "Soukromé peníze"],
  ["Adam Smith", "Bohatství národů"],
  ["Milton Friedman", "Kapitalismus a svoboda"],
  ["Milton a Rose Friedmanovi", "Svoboda volby"],
  ["Murray N. Rothbard", "Etika svobody"],
  ["Murray N. Rothbard", "Manifest svobody"],
  ["Murray N. Rothbard", "Ekonomie státních zásahů"],
  ["Murray N. Rothbard", "Peníze v rukou státu"],
  ["Murray N. Rothbard", "Zásady ekonomie"],
  ["Frederic Bastiat", "Petice za zákaz slunce a jiné absurdity ekonomie"],
  ["David Boaz", "Liberalismus v teorii a politice"],
  ["Henry Hazlitt", "Ekonomie v jedné lekci"],
  ["Dominik Stroukal", "Bitcoin a jiné kryptopeníze budoucnosti"],
  ["Bruno Leoni", "Svoboda a zákon"],
  ["Timofej Kožuchov", "Umění debatovat"],
  ["Sogjal Rinpočhe", "Tibetská kniha o životě a smrti"],
  ["Arno Anzenbacher", "Úvod do filosofie"],
  ["Simon Singh", "Kniha kódů a šifer"],
  ["Filip Titlbach", "Byli jsme tu vždycky"],
  ["Pavel Tigrid", "Kapesní průvodce inteligentní ženy po vlastním osudu"],
  ["Ján Praško, Pavel Doubek, Erik Herman, Jiří Hovorka", "Bipolární porucha a její léčba"],
  ["Tomáš Garrigue Masaryk", "Ideály humanitní"],
  ["Tomáš Garrigue Masaryk", "Česká otázka"],
  ["Friedrich Nietzsche", "Tak pravil Zarathustra"],
  ["Graham Macbeth", "Velký obrazový atlas automobilů"]
];

const bookGenreGroups = {
  general: {
    "Sci-fi a dystopie": [
      "Isaac Asimov", "Frank Herbert", "Ernest Cline", "Douglas Adams",
      "Arthur C. Clarke", "Ray Bradbury", "Orson Scott Card", "Anthony Burgess",
      "Liou Cch’-sin", "Margaret Atwood", "Aldous Huxley"
    ],
    "Fantasy": ["J. R. R. Tolkien", "G. R. R. Martin", "Christopher Paolini", "Andrzej Sapkowski"],
    "Dobrodružná literatura": ["Jules Verne", "Rudyard Kipling", "Daniel Defoe", "Jack London", "Alistair MacLean"],
    "Krimi a thriller": ["Mario Puzo"],
    "Horor": ["Stephen King", "H. P. Lovecraft", "Mary Shelley"],
    "Eseje a vzpomínky": ["Richard P. Feynman", "Karel Čapek"]
  },
  expert: {
    "Ekonomie a politická teorie": [
      "Carl Menger", "Adam Smith", "Ludwig von Mises", "Friedrich August von Hayek",
      "Milton Friedman", "Milton a Rose Friedmanovi", "Murray N. Rothbard",
      "Frederic Bastiat", "David Boaz", "Henry Hazlitt", "Dominik Stroukal", "Bruno Leoni"
    ],
    "Filosofie": [
      "Petr Dvořák, David Peroutka, Ondřej Tomala", "Jean-Luc Nancy", "Filip Tvrdý",
      "Immanuel Kant", "John Stuart Mill", "Ludwig Wittgenstein", "Jean-Jacques Rousseau",
      "Platón", "Aristotelés", "Henri Bergson", "Simone de Beauvoir", "Arno Anzenbacher",
      "Friedrich Nietzsche", "Tomáš Garrigue Masaryk"
    ],
    "Historie": [
      "Jan Burian", "Pavel Bělina a spol.", "Zdeněk V. Špinar", "C. A. Burland",
      "S. G. Morley", "Emil Loubal"
    ],
    "Náboženství a spiritualita": ["Neznámo", "Sogjal Rinpočhe"],
    "Společnost a psychologie": [
      "Timofej Kožuchov", "Filip Titlbach", "Pavel Tigrid",
      "Ján Praško, Pavel Doubek, Erik Herman, Jiří Hovorka"
    ],
    "Věda a příručky": ["Simon Singh", "Graham Macbeth"]
  }
};

const bookGenreOverrides = {
  "general:Cesta": "Sci-fi a dystopie",
  "general:Komu zvoní hrana": "Válečná literatura",
  "general:Obraz Doriana Graye": "Literární klasika",
  "general:Egypťan Sinuhet": "Historický román",
  "general:Quo Vadis": "Historický román",
  "general:Na západní frontě klid": "Válečná literatura",
  "general:Most přes řeku kwai": "Válečná literatura",
  "general:Alchymista": "Filosofická fikce",
  "general:Velký Gatsby": "Literární klasika",
  "general:Pán Much": "Literární klasika",
  "general:Cizinec": "Filosofická fikce",
  "general:Mor": "Filosofická fikce",
  "general:První člověk": "Filosofická fikce",
  "general:Pád": "Filosofická fikce",
  "general:Achilleova píseň": "Mýtická a historická fikce",
  "general:Nerozlučné": "Literární klasika",
  "general:Kdo chytá v žitě": "Literární klasika",
  "general:Na východ od ráje": "Literární klasika",
  "general:Hrozny hněvu": "Literární klasika",
  "general:Pláň Tortilla": "Literární klasika",
  "general:Na Plechárně": "Literární klasika",
  "general:Moje planeta": "Eseje a vzpomínky",
  "general:Na cestě": "Beatnická literatura",
  "general:Proměna a jiné povídky": "Literární klasika",
  "general:Proces": "Literární klasika",
  "general:Zámek": "Literární klasika",
  "general:Večer tříkrálový aneb cokoliv chcete": "Drama a divadelní hry",
  "general:Nesmrtelnost": "Filosofická fikce",
  "general:Anna Karenina": "Literární klasika",
  "general:Důmyslný rytíř Don Quijote de la Mancha": "Literární klasika",
  "general:Sto roků samoty": "Magický realismus",
  "general:Sophiina volba": "Válečná literatura",
  "general:Pýcha a předsudek": "Literární klasika",
  "general:Já, Claudius": "Historický román",
  "general:Už zase skáču přes kaluže": "Eseje a vzpomínky",
  "general:Jméno růže": "Historická detektivka",
  "general:Růže pro Algernon": "Sci-fi a dystopie",
  "general:Zločin a trest": "Literární klasika",
  "general:Myth of Sisyphus": "Filosofie",
  "general:Tahle země není pro starý": "Krimi a thriller",
  "general:Netvoři a Kritikové": "Eseje a vzpomínky",
  "general:Král Krysa": "Válečná literatura",
  "general:To Kill a Mockingbird": "Literární klasika",
  "expert:TEST: Ukázková kniha": "Ostatní",
  "expert:Encyklopedie Bible": "Náboženství a spiritualita",
  "expert:60 let filosofického časopisu": "Filosofie",
  "expert:Umění debatovat": "Společnost a psychologie",
  "expert:Kniha kódů a šifer": "Věda a příručky",
  "expert:Velký obrazový atlas automobilů": "Věda a příručky"
};

function getBookGenre(collection, author, title) {
  const override = bookGenreOverrides[`${collection}:${title}`];
  if (override) return override;

  const genreGroups = bookGenreGroups[collection];
  const genre = Object.entries(genreGroups).find(([, authors]) => authors.includes(author));
  return genre?.[0] || (collection === "general" ? "Literární fikce" : "Filosofie");
}

const bookContent = {
  "general-451-stupnu-fahrenheita": {
    cover: "../assets/images/book-covers/451StupnuFahrenheita.jpeg"
  },
  "general-bozsky-imperator-duny": {
    cover: "../assets/images/book-covers/BožškýImperátorDuny.jpeg"
  },
  "general-cesta": {
    cover: "../assets/images/book-covers/Cesta.jpeg"
  },
  "general-deti-duny": {
    cover: "../assets/images/book-covers/DětiDuny.jpeg"
  },
  "general-druha-nadace": {
    cover: "../assets/images/book-covers/DruháNadace.jpeg"
  },
  "general-duna": {
    cover: "../assets/images/book-covers/Duna.jpeg"
  },
  "general-enderova-hra": {
    cover: "../assets/images/book-covers/EnderovaHra.jpeg"
  },
  "general-ilustrovany-muz": {
    cover: "../assets/images/book-covers/IlustrovanýMuž.jpeg"
  },
  "general-kaciri-duny": {
    cover: "../assets/images/book-covers/KacířiDuny.jpeg"
  },
  "general-kaleidoskop": {
    cover: "../assets/images/book-covers/Kaleidoskop.jpeg"
  },
  "general-kapitula-duna": {
    cover: "../assets/images/book-covers/Kapitula:Duny.jpeg"
  },
  "general-martanska-kronika": {
    cover: "../assets/images/book-covers/MarťanskáKronika.jpeg"
  },
  "general-mechanicky-pomeranc": {
    cover: "../assets/images/book-covers/MechanickýPomeranč.jpeg"
  },
  "general-na-hranicich-nadace": {
    cover: "../assets/images/book-covers/NaHranicíchNadace.jpeg"
  },
  "general-nadace": {
    cover: "../assets/images/book-covers/Nadace.jpeg"
  },
  "general-nadace-a-rise": {
    cover: "../assets/images/book-covers/NadaceARíše.jpeg"
  },
  "general-pampeliskove-vino": {
    cover: "../assets/images/book-covers/PampeliškovéVíno.jpeg"
  },
  "general-pribeh-sluzebnice": {
    cover: "../assets/images/book-covers/PříběhSlužebnice.jpeg"
  },
  "general-problem-tri-teles": {
    cover: "../assets/images/book-covers/ProblémTříTěles.jpeg"
  },
  "general-ready-player-one": {
    cover: "../assets/images/book-covers/ReadyPlayerOne.jpeg"
  },
  "general-sem-prichazi-neco-zleho": {
    cover: "../assets/images/book-covers/SemPřicházíNěcoZlého.jpeg"
  },
  "general-setkani-s-ramou": {
    cover: "../assets/images/book-covers/SetkáníSRámou.jpeg"
  },
  "general-spasitel-duny": {
    cover: "../assets/images/book-covers/SpasitelDuny.jpeg"
  },
  "general-stoparuv-pruvodce-galaxii": {
    cover: "../assets/images/book-covers/StopařůvPrůvodceGalaxií.jpeg"
  },
  "general-tahle-zeme-neni-pro-stary": {
    cover: "../assets/images/book-covers/TahleZeměNeníProStarý.jpeg"
  },
  "general-temny-les": {
    cover: "../assets/images/book-covers/TemnýLes.jpeg"
  },
  "general-vzpominka-na-zemi": {
    cover: "../assets/images/book-covers/VzpomínkaNaZemi.jpeg"
  },
  "general-zlata-jablka-slunecni": {
    cover: "../assets/images/book-covers/ZlatáJablkaSluneční.jpeg"
  },
  "general-jmeno-ruze": {
    cover: "../assets/images/book-covers/JménoRůže.jpeg"
  },
  "general-ja-robot": {
    cover: "../assets/images/book-covers/JáRobot.jpeg"
  },
  "general-konec-civilizace": {
    cover: "../assets/images/book-covers/KonecCivilizace.jpeg"
  },
  "general-let-do-nebezpeci": {
    cover: "../assets/images/book-covers/LetDoNebezpečí.jpeg"
  },
  "general-ruze-pro-algernon": {
    cover: "../assets/images/book-covers/RůžeProAlgeron.jpeg"
  },
  "general-zaklinac-1": {
    cover: "../assets/images/book-covers/Zaklínač1.jpeg"
  },
  "general-beren-a-luthien": {
    cover: "../assets/images/book-covers/BerenALuthién.jpeg"
  },
  "general-hobit-aneb-cesta-tam-a-zase-zpatky": {
    cover: "../assets/images/book-covers/Hobit.jpeg"
  },
  "general-hra-o-truny": {
    cover: "../assets/images/book-covers/HraOTrůny.jpeg"
  },
  "general-hurinovy-deti": {
    cover: "../assets/images/book-covers/HúrinovyDěti.jpeg"
  },
  "general-nedokoncene-pribehy": {
    cover: "../assets/images/book-covers/NedokončenéPříběhy.jpeg"
  },
  "general-netvori-a-kritikove": {
    cover: "../assets/images/book-covers/NetvořiAKritikové.jpeg"
  },
  "general-pad-gondolinu": {
    cover: "../assets/images/book-covers/PádGondolinu.jpeg"
  },
  "general-pad-numenoru": {
    cover: "../assets/images/book-covers/PádNúmenoru.jpeg"
  },
  "general-pan-prstenu-dve-veze": {
    cover: "../assets/images/book-covers/PánPrstenůDvěVěže.jpeg"
  },
  "general-pan-prstenu-navrat-krale": {
    cover: "../assets/images/book-covers/PánPrstenůNávratKrále.jpeg"
  },
  "general-pan-prstenu-spolecenstvo-prstenu": {
    cover: "../assets/images/book-covers/PánPrstenůSpolečenstvoPrstenu.jpeg"
  },
  "general-pribehy-z-carovne-rise": {
    cover: "../assets/images/book-covers/PříběhyZčarovnéříše.jpeg"
  },
  "general-rytir-sedmi-kralovstvi": {
    cover: "../assets/images/book-covers/RytířSedmiKrálovství.jpeg"
  },
  "general-silmarillion": {
    cover: "../assets/images/book-covers/Silmarillion.jpeg"
  },
  "general-anna-karenina": {
    cover: "../assets/images/book-covers/AnnaKarenina.jpeg"
  },
  "general-dumyslny-rytir-don-quijote-de-la-mancha": {
    cover: "../assets/images/book-covers/DůmyslnýRytířDonQuijote.jpeg"
  },
  "general-eragon": {
    cover: "../assets/images/book-covers/Eragon.jpeg"
  },
  "general-hovory-s-t-g-masarykem": {
    cover: "../assets/images/book-covers/HovorySTGM.jpeg"
  },
  "general-pycha-a-predsudek": {
    cover: "../assets/images/book-covers/PýchaAPředsudek.jpeg"
  },
  "general-sto-roku-samoty": {
    cover: "../assets/images/book-covers/StoRokůSamoty.jpeg"
  },
  "general-to-snad-nemyslite-vazne": {
    cover: "../assets/images/book-covers/ToSnadNemyslíteVážně.jpeg"
  },
  "general-uz-zase-skacu-pres-kaluze": {
    cover: "../assets/images/book-covers/UžZaseSkáčuPřesKaluže.jpeg"
  },
  "general-zlocin-a-trest": {
    cover: "../assets/images/book-covers/ZločinATrest.jpeg"
  },
  "general-achilleova-pisen": {
    cover: "../assets/images/book-covers/AchilleovaPíseň.jpeg"
  },
  "general-alchymista": {
    cover: "../assets/images/book-covers/Alchymista.jpeg"
  },
  "general-cizinec": {
    cover: "../assets/images/book-covers/Cizinec.jpeg"
  },
  "general-dva-roky-prazdnin": {
    cover: "../assets/images/book-covers/DvaRokyPrázdnin.jpeg"
  },
  "general-egyptan-sinuhet": {
    cover: "../assets/images/book-covers/EgypťanSinuhet.jpeg"
  },
  "general-ja-claudius": {
    cover: "../assets/images/book-covers/JáClaudius.jpeg"
  },
  "general-kmotr": {
    cover: "../assets/images/book-covers/Kmotr.jpeg"
  },
  "general-kral-krysa": {
    cover: "../assets/images/book-covers/KrálKrysa.jpeg"
  },
  "general-moje-planeta": {
    cover: "../assets/images/book-covers/MojePlaneta.jpeg"
  },
  "general-mor": {
    cover: "../assets/images/book-covers/Mor.jpeg"
  },
  "general-na-ceste": {
    cover: "../assets/images/book-covers/NaCestě.jpeg"
  },
  "general-na-plecharne": {
    cover: "../assets/images/book-covers/NaPlechárně.jpeg"
  },
  "general-na-vychod-od-raje": {
    cover: "../assets/images/book-covers/NaVýchodOdRáje.jpeg"
  },
  "general-nerozlucne": {
    cover: "../assets/images/book-covers/Nerozlučné.jpeg"
  },
  "general-nesmrtelnost": {
    cover: "../assets/images/book-covers/Nesmrtelnost.jpeg"
  },
  "general-obraz-doriana-graye": {
    cover: "../assets/images/book-covers/ObrazDorianaGraye.jpeg"
  },
  "general-ocelove-mesto": {
    cover: "../assets/images/book-covers/OcelovéMěsto.jpeg"
  },
  "general-osviceni": {
    cover: "../assets/images/book-covers/Osvícení.jpeg"
  },
  "general-proces": {
    cover: "../assets/images/book-covers/Proces.jpeg"
  },
  "general-promena-a-jine-povidky": {
    cover: "../assets/images/book-covers/ProměnaAJinéPovídky.jpeg"
  },
  "general-prvni-clovek": {
    cover: "../assets/images/book-covers/Prvníčlověk.jpeg"
  },
  "general-pad": {
    cover: "../assets/images/book-covers/Pád.jpg"
  },
  "general-pan-much": {
    cover: "../assets/images/book-covers/PánMuch.jpeg"
  },
  "general-quo-vadis": {
    cover: "../assets/images/book-covers/QuoVadis.jpeg"
  },
  "general-rbitov-zviratek": {
    cover: "../assets/images/book-covers/RbitovZviřátek.jpeg"
  },
  "general-robinson-crusoe": {
    cover: "../assets/images/book-covers/RobinsonCrusoe.jpeg"
  },
  "general-statecni-kapitani": {
    cover: "../assets/images/book-covers/StatečníKapitáni.jpeg"
  },
  "general-tulak-po-hvezdach": {
    cover: "../assets/images/book-covers/TulákPoHvězdách.jpeg"
  },
  "general-velky-gatsby": {
    cover: "../assets/images/book-covers/VelkýGatsby.jpeg"
  },
  "general-vecer-trikralovy-aneb-cokoliv-chcete": {
    cover: "../assets/images/book-covers/VečerTříkrálový.jpeg"
  },
  "general-zamek": {
    cover: "../assets/images/book-covers/Zámek.jpeg"
  },
  "general-spisy-1": {
    cover: "../assets/images/book-covers/HPLovercraftSpisy1.jpeg"
  },
  "general-spisy-2": {
    cover: "../assets/images/book-covers/HPLovercraftSpisy2.jpeg"
  },
  "general-spisy-3-dil-1": {
    cover: "../assets/images/book-covers/HPLovercraftSpisy3_1.jpeg"
  },
  "general-spisy-3-dil-2": {
    cover: "../assets/images/book-covers/HPLovercraftSpisy3_2.jpeg"
  },
  "general-spisy-4": {
    cover: "../assets/images/book-covers/HPLovercraftSpisy4.jpeg"
  },
  "general-kdo-chyta-v-zite": {
    cover: "../assets/images/book-covers/KdoChytáVZivotě.jpeg"
  },
  "general-komu-zvoni-hrana": {
    cover: "../assets/images/book-covers/KomuZnovíHrana.jpeg"
  },
  "general-plan-tortilla": {
    cover: "../assets/images/book-covers/PláňTortila.jpeg"
  },
  "general-to-kill-a-mockingbird": {
    cover: "../assets/images/book-covers/Ptáček.jpeg"
  },
  "expert-test-ukazkova-kniha": {
    review: "Lorem ipsum dolor sit amet consectetur adipiscing elit. Pretium tellus duis convallis tempus leo eu aenean. Iaculis massa nisl malesuada lacinia integer nunc posuere. Conubia nostra inceptos himenaeos orci varius natoque penatibus. Nulla molestie mattis scelerisque maximus eget fermentum odio. Blandit quis suspendisse aliquet nisi sodales consequat magna. Ligula congue sollicitudin erat viverra ac tincidunt nam. Velit aliquam imperdiet mollis nullam volutpat porttitor ullamcorper. Dui felis venenatis ultrices proin libero feugiat tristique. Cubilia curae hac habitasse platea dictumst lorem ipsum. Sem placerat in id cursus mi pretium tellus. Fringilla lacus nec metus bibendum egestas iaculis massa. Taciti sociosqu ad litora torquent per conubia nostra. Ridiculus mus donec rhoncus eros lobortis nulla molestie. Mauris pharetra vestibulum fusce dictum risus blandit quis. Finibus facilisis dapibus etiam interdum tortor ligula congue. Justo lectus commodo augue arcu dignissim velit aliquam. Primis vulputate ornare sagittis vehicula praesent dui felis. Senectus netus suscipit auctor curabitur facilisi cubilia curae. Quisque faucibus ex sapien vitae pellentesque sem placerat."
  },
  "expert-bible": {
    cover: "../assets/images/book-covers/Bible.jpeg"
  },
  "expert-byrokracie": {
    cover: "../assets/images/book-covers/Byrokracie.jpg"
  },
  "expert-byli-jsme-tu-vzdycky": {
    cover: "../assets/images/book-covers/ByliJsmeTuVždycky.jpeg"
  },
  "expert-druhe-pohlavi": {
    cover: "../assets/images/book-covers/DruhéPohlaví.jpeg"
  },
  "expert-etika-nikomachova": {
    cover: "../assets/images/book-covers/EtikaNikomachova.jpeg"
  },
  "expert-filosoficka-zkoumani": {
    cover: "../assets/images/book-covers/FilosofickáZkoumání.jpeg"
  },
  "expert-tibetska-kniha-o-zivote-a-smrti": {
    cover: "../assets/images/book-covers/KnihaOŽivotěASmrti.jpeg"
  },
  "expert-o-svobode-mysleni-a-slova": {
    cover: "../assets/images/book-covers/OSvobodeMysleniASlova.jpeg"
  },
  "expert-rozprava-o-nerovnosti-o-spolecenske-smlouve": {
    cover: "../assets/images/book-covers/RozpravaONerovnostiASpolecenskeSmlouve.jpeg"
  },
  "expert-smich": {
    cover: "../assets/images/book-covers/Smích.jpeg"
  },
  "expert-symposion": {
    cover: "../assets/images/book-covers/Symposión.jpeg"
  },
  "expert-tak-pravil-zarathustra": {
    cover: "../assets/images/book-covers/TakPravilZarathustra.jpeg"
  },
  "general-myth-of-sisyphus": {
    cover: "../assets/images/book-covers/TheMythOfSysiphus.jpeg"
  },
  "expert-tractatus-logico-philosophicus": {
    cover: "../assets/images/book-covers/TractatusLogicoPhiloshophicus.jpeg"
  },
  "expert-turinguv-test": {
    cover: "../assets/images/book-covers/TuringůvTest.jpeg"
  },
  "expert-umeni-debatovat": {
    cover: "../assets/images/book-covers/UměníDebatovat.jpeg"
  },
  "expert-uvod-do-filosofie": {
    cover: "../assets/images/book-covers/UvodDoFilosofie.jpeg"
  },
  "expert-vetrelec": {
    cover: "../assets/images/book-covers/Vetřelec.jpeg"
  },
  "expert-zaklady-metafyziky-mravu": {
    cover: "../assets/images/book-covers/ZákladyMetafyzikyMravů.jpeg"
  },
  "expert-petice-za-zakaz-slunce-a-jine-absurdity-ekonomie": {
    cover: "../assets/images/book-covers/AbsurdityZaZákazSlunce.jpeg"
  },
  "expert-bitcoin-a-jine-kryptopenize-budoucnosti": {
    cover: "../assets/images/book-covers/Bitcoin.jpeg"
  },
  "expert-bohatstvi-narodu": {
    cover: "../assets/images/book-covers/BohatstvíNárodů.jpg"
  },
  "expert-cesta-do-otroctvi": {
    cover: "../assets/images/book-covers/CestaDoOtroctví.jpeg"
  },
  "expert-ekonomie-statnich-zasahu": {
    cover: "../assets/images/book-covers/EkonomieStátníchZásahů.jpeg"
  },
  "expert-ekonomie-v-jedne-lekci": {
    cover: "../assets/images/book-covers/EkonomieVJednéLekci.jpeg"
  },
  "expert-etika-svobody": {
    cover: "../assets/images/book-covers/EtikaSvobody.jpeg"
  },
  "expert-hospodarska-politika": {
    cover: "../assets/images/book-covers/HospodářskáPolitika.jpeg"
  },
  "expert-kapitalismus-a-svoboda": {
    cover: "../assets/images/book-covers/KapitalismusASvoboda.jpeg"
  },
  "expert-liberalismus-v-teorii-a-politice": {
    cover: "../assets/images/book-covers/Liberalismus.jpeg"
  },
  "expert-liberalismus": {
    cover: "../assets/images/book-covers/LiberalismusMises.jpeg"
  },
  "expert-lidske-jednani": {
    cover: "../assets/images/book-covers/LidskéJednání.jpeg"
  },
  "expert-manifest-svobody": {
    cover: "../assets/images/book-covers/ManifestSvobody.jpeg"
  },
  "expert-osudova-domyslivost": {
    cover: "../assets/images/book-covers/OsudováDomýšlivost.jpeg"
  },
  "expert-penize-v-rukou-statu": {
    cover: "../assets/images/book-covers/PenízeVRukouStátu.jpeg"
  },
  "expert-pravo-zakonodarstvi-a-svoboda": {
    cover: ""
  },
  "expert-socialismus": {
    cover: "../assets/images/book-covers/Socialismus.jpeg"
  },
  "expert-soukrome-penize": {
    cover: "../assets/images/book-covers/SoukroméPeníze.jpg"
  },
  "expert-svoboda-volby": {
    cover: "../assets/images/book-covers/SvobodaVolby.jpeg"
  },
  "expert-teorie-penez-a-uveru": {
    cover: "../assets/images/book-covers/TeoriePenězAÚvěru.jpeg"
  },
  "expert-zasady-ekonomie": {
    cover: "../assets/images/book-covers/ZásadyEkonomie.jpeg"
  },
  "expert-zasady-ekonomie-2": {
    cover: "../assets/images/book-covers/ZásadyEkonomieRothbard.jpeg"
  },
  "expert-svoboda-a-zakon": {
    cover: "../assets/images/book-covers/PrávoASvoboda.jpeg"
  },
  "expert-amerika-pred-kolumbem": {
    cover: "../assets/images/book-covers/AmerikaPředKolumbem.jpeg"
  },
  "expert-velky-obrazovy-atlas-automobilu": {
    cover: "../assets/images/book-covers/Auta.jpeg"
  },
  "expert-bipolarni-porucha-a-jeji-lecba": {
    cover: "../assets/images/book-covers/BipolárníPorucha.jpeg"
  },
  "expert-ceska-otazka": {
    cover: "../assets/images/book-covers/českáOtázka.jpeg"
  },
  "expert-dejiny-zemi-koruny-ceske-1": {
    cover: "../assets/images/book-covers/DějinyZemíKorunyčeské1.jpeg"
  },
  "expert-dejiny-zemi-koruny-ceske-2": {
    cover: "../assets/images/book-covers/DějinyZemíKorunyčeské2.jpeg"
  },
  "expert-encyklopedie-bible": {
    cover: "../assets/images/book-covers/EncyklopedieBible.jpeg"
  },
  "expert-idealy-humanitni": {
    cover: "../assets/images/book-covers/IdeályHumanitní.jpeg"
  },
  "expert-kapesni-pruvodce-inteligentni-zeny-po-vlastnim-osudu": {
    cover: "../assets/images/book-covers/KapesníPrůvodceInteligentníženypovlastnímosudu.jpeg"
  },
  "expert-kniha-o-praveku": {
    cover: "../assets/images/book-covers/KnihaOPravěku.jpeg"
  },
  "expert-kniha-kodu-a-sifer": {
    cover: "../assets/images/book-covers/KnihaKódůAšifer.jpeg"
  },
  "expert-mayove": {
    cover: "../assets/images/book-covers/Mayové.jpeg"
  },
  "expert-t-g-masaryk-a-telesna-vychova": {
    cover: "../assets/images/book-covers/T_G_Masaryk_TělesnáVýchova.jpeg"
  },
};

const collectionInfo = {
  general: {
    title: "Inventář neodborné literatury",
    records: bookRecords
  },
  expert: {
    title: "Inventář odborné literatury",
    records: expertBookRecords
  }
};

function slugifyBook(title) {
  return title
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

const books = Object.entries(collectionInfo).flatMap(([collection, info]) => {
  const idCounts = new Map();
  return info.records.map(([author, title]) => {
    const baseId = `${collection}-${slugifyBook(title)}`;
    const occurrence = idCounts.get(baseId) || 0;
    idCounts.set(baseId, occurrence + 1);
    const id = occurrence === 0 ? baseId : `${baseId}-${occurrence + 1}`;
    const content = bookContent[id] || {};
    return {
      id,
      collection,
      author,
      title,
      genre: getBookGenre(collection, author, title),
      cover: content.cover || "",
      review: content.review || ""
    };
  });
});

let currentCollection = "general";
let currentGenre = "all";

function renderBookGenres() {
  const selector = document.getElementById("book-genre");
  const genreCounts = new Map();

  books.filter((book) => book.collection === currentCollection).forEach((book) => {
    genreCounts.set(book.genre, (genreCounts.get(book.genre) || 0) + 1);
  });

  if (!genreCounts.has(currentGenre)) currentGenre = "all";
  selector.replaceChildren();

  const allOption = document.createElement("option");
  allOption.value = "all";
  allOption.textContent = `Všechny žánry (${[...genreCounts.values()].reduce((sum, count) => sum + count, 0)})`;
  selector.append(allOption);

  [...genreCounts.entries()].sort(([genreA], [genreB]) => genreA.localeCompare(genreB, "cs"))
    .forEach(([genre, count]) => {
      const option = document.createElement("option");
      option.value = genre;
      option.textContent = `${genre} (${count})`;
      selector.append(option);
    });

  selector.value = currentGenre;
}

function makeBookLink(book) {
  const link = document.createElement("a");
  link.href = `./kniha.html?book=${encodeURIComponent(book.id)}`;
  link.textContent = book.title;
  return link;
}

function renderBookCatalogue(query = "") {
  const catalogue = document.getElementById("book-catalogue");
  const count = document.getElementById("book-count");
  const info = collectionInfo[currentCollection];
  const normalizedQuery = query.trim().toLocaleLowerCase("cs");
  const collectionBooks = books.filter((book) => book.collection === currentCollection);
  const genreBooks = currentGenre === "all"
    ? collectionBooks
    : collectionBooks.filter((book) => book.genre === currentGenre);
  const matches = genreBooks.filter((book) =>
    `${book.title} ${book.author}`.toLocaleLowerCase("cs").includes(normalizedQuery)
  );
  const authorGroups = new Map();

  document.getElementById("book-collection-title").textContent = info.title;
  const dateContainer = document.getElementById("book-collection-date");
  const dateEmphasis = document.createElement("em");
  dateContainer.hidden = !info.date;
  if (info.date) {
    dateEmphasis.textContent = info.date;
    dateContainer.replaceChildren(dateEmphasis);
  } else {
    dateContainer.replaceChildren();
  }

  matches.forEach((book) => {
    if (!authorGroups.has(book.author)) authorGroups.set(book.author, []);
    authorGroups.get(book.author).push(book);
  });

  catalogue.replaceChildren();
  count.textContent = `Zobrazeno ${matches.length} z ${genreBooks.length} knih`;

  authorGroups.forEach((authorBooks, author) => {
    const section = document.createElement("section");
    section.className = "book-author";

    const heading = document.createElement("h2");
    heading.textContent = author;
    section.append(heading);

    const list = document.createElement("ul");
    list.className = "book-list";
    authorBooks.forEach((book) => {
      const item = document.createElement("li");
      item.append(makeBookLink(book));
      list.append(item);
    });
    section.append(list);
    catalogue.append(section);
  });

  if (matches.length === 0) {
    const empty = document.createElement("p");
    empty.textContent = "V této sbírce a žánru se nenašla žádná odpovídající kniha.";
    catalogue.append(empty);
  }
}

function renderBookDetail(book) {
  const heading = document.getElementById("book-title");
  const detail = document.getElementById("book-detail");
  const author = document.getElementById("book-author");
  const coverFrame = document.getElementById("book-cover");
  const review = document.getElementById("book-review-content");

  if (!book) {
    document.title = "Kniha nenalezena – Knihovna";
    heading.textContent = "Kniha nenalezena";
    detail.hidden = true;
    document.getElementById("book-not-found").hidden = false;
    return;
  }

  document.title = `${book.title} – Knihovna`;
  heading.textContent = book.title;
  author.textContent = book.author;
  document.getElementById("book-collection").textContent = collectionInfo[book.collection].title;
  document.getElementById("book-detail-genre").textContent = `Žánr: ${book.genre}`;
  coverFrame.replaceChildren();

  if (book.cover) {
    const image = document.createElement("img");
    image.src = book.cover;
    image.alt = `Obálka knihy ${book.title}`;
    coverFrame.append(image);
  } else {
    const placeholder = document.createElement("span");
    placeholder.className = "book-cover-empty";
    placeholder.textContent = "Fotografie obálky bude doplněna";
    coverFrame.append(placeholder);
  }

  review.replaceChildren();
  const paragraphs = book.review.trim().split(/\n\s*\n/).filter(Boolean);
  if (paragraphs.length) {
    paragraphs.forEach((text) => {
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
      review.append(paragraph);
    });
  } else {
    const placeholder = document.createElement("p");
    placeholder.className = "book-review-empty";
    placeholder.textContent = "Recenze zatím není napsaná.";
    review.append(placeholder);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const search = document.getElementById("book-search");
  if (search) {
    const genreSelector = document.getElementById("book-genre");
    renderBookGenres();
    renderBookCatalogue();
    search.addEventListener("input", () => renderBookCatalogue(search.value));
    genreSelector.addEventListener("change", () => {
      currentGenre = genreSelector.value;
      renderBookCatalogue(search.value);
    });

    document.querySelectorAll("[data-book-collection]").forEach((tab) => {
      tab.addEventListener("click", () => {
        currentCollection = tab.dataset.bookCollection;
        renderBookGenres();
        document.querySelectorAll("[data-book-collection]").forEach((otherTab) => {
          const isSelected = otherTab === tab;
          otherTab.classList.toggle("is-active", isSelected);
          otherTab.setAttribute("aria-selected", String(isSelected));
        });
        renderBookCatalogue(search.value);
      });
    });
  }

  if (document.getElementById("book-detail")) {
    const requestedId = new URLSearchParams(window.location.search).get("book");
    renderBookDetail(books.find((book) => book.id === requestedId));
  }
});