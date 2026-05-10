// ═══════════════════════════════════════════════════════════════
// CARDS DATABASE — edit this file to add/remove/change cards
// Format guide at bottom of file
// ═══════════════════════════════════════════════════════════════

const DB = {

  // ── VOCABULARY NOUNS & PREPOSITIONS ────────────────────────────
  // g: 'm' = masculine, 'f' = feminine, 'pm' = plural masc, 'pf' = plural fem
  // noArticle: true = no un/le forms (prepositions, adverbs)
  // pluralOnly: true = only des/les forms
  // vowelStart: true = uses l' instead of le/la
  vocab: [
    // Prepositions (no article)
    {base:'sous',            enBase:'under / beneath',        g:null, noArticle:true},
    {base:'sur',             enBase:'on / on top of',         g:null, noArticle:true},
    {base:'devant',          enBase:'in front of',            g:null, noArticle:true},
    {base:'derrière',        enBase:'behind',                 g:null, noArticle:true},
    {base:'dans',            enBase:'in / inside',            g:null, noArticle:true},

    // Masculine nouns
    {base:'calendrier',      enBase:'calendar',               g:'m'},
    {base:'bac à recyclage', enBase:'recycling bin',          g:'m'},
    {base:'tableau',         enBase:'board / chalkboard',     g:'m'},
    {base:'bureau',          enBase:'desk',                   g:'m'},
    {base:'parapluie',       enBase:'umbrella',               g:'m'},
    {base:'manteau',         enBase:'coat',                   g:'m'},
    {base:'sac à dos',       enBase:'backpack',               g:'m'},
    {base:'sac à main',      enBase:'purse / handbag',        g:'m'},
    {base:'cellulaire',      enBase:'cell phone',             g:'m'},
    {base:'étui à crayons',  enBase:'pencil case',            g:'m'},
    {base:'stylo',           enBase:'pen',                    g:'m'},
    {base:'cahier',          enBase:'notebook',               g:'m'},
    {base:'guichet',         enBase:'counter / wicket',       g:'m'},

    // Masculine vowel-start (l' article)
    {base:'ordinateur',      enBase:'computer',               g:'m', vowelStart:true},
    {base:'ascenseur',       enBase:'elevator',               g:'m', vowelStart:true},
    {base:'accueil',         enBase:'reception / front desk', g:'m', vowelStart:true},
    {base:'abreuvoir',       enBase:'water fountain',         g:'m', vowelStart:true},
    {base:'éclair',          enBase:'lightning',              g:'m', vowelStart:true},
    {base:'hiver',           enBase:'winter',                 g:'m', vowelStart:true},
    {base:'été',             enBase:'summer',                 g:'m', vowelStart:true},
    {base:'automne',         enBase:'autumn / fall',          g:'m', vowelStart:true},

    // Feminine nouns
    {base:'poubelle',        enBase:'garbage can',            g:'f'},
    {base:'chaise',          enBase:'chair',                  g:'f'},
    {base:'lampe',           enBase:'lamp',                   g:'f'},
    {base:'affiche',         enBase:'poster',                 g:'f'},
    {base:'plante',          enBase:'plant',                  g:'f'},
    {base:'porte',           enBase:'door',                   g:'f'},
    {base:'fenêtre',         enBase:'window',                 g:'f'},
    {base:'imprimante',      enBase:'printer',                g:'f'},
    {base:'souris',          enBase:'mouse',                  g:'f'},
    {base:'veste',           enBase:'jacket',                 g:'f'},
    {base:'étagère',         enBase:'shelf',                  g:'f'},
    {base:'table',           enBase:'table',                  g:'f'},
    {base:'efface',          enBase:'eraser',                 g:'f'},
    {base:'montre',          enBase:'watch',                  g:'f'},
    {base:'tablette électronique', enBase:'electronic tablet',g:'f'},
    {base:'température',     enBase:'temperature',            g:'f'},
    {base:'météo',           enBase:'forecast',               g:'f'},
    {base:'saison',          enBase:'season',                 g:'f'},
    {base:'pluie',           enBase:'rain',                   g:'f'},
    {base:'neige',           enBase:'snow',                   g:'f'},
    {base:'tempête',         enBase:'storm',                  g:'f'},
    {base:'glace',           enBase:'ice',                    g:'f'},

    // Feminine vowel-start
    {base:'efface',          enBase:'eraser',                 g:'f', vowelStart:true},

    // Masculine (non-vowel) weather/nav
    {base:'soleil',          enBase:'sun',                    g:'m'},
    {base:'vent',            enBase:'wind',                   g:'m'},
    {base:'nuage',           enBase:'cloud',                  g:'m'},
    {base:'brouillard',      enBase:'fog',                    g:'m'},
    {base:'givre',           enBase:'frost',                  g:'m'},
    {base:'tonnerre',        enBase:'thunder',                g:'m'},
    {base:'printemps',       enBase:'spring',                 g:'m'},
    {base:'degré',           enBase:'degree',                 g:'m'},

    // Nav adverbs (no article)
    {base:'gauche',          enBase:'left',                   g:null, noArticle:true},
    {base:'droite',          enBase:'right',                  g:null, noArticle:true},
    {base:'en face',         enBase:'across / facing',        g:null, noArticle:true},
    {base:'à côté',          enBase:'beside / next to',       g:null, noArticle:true},
    {base:'au bout',         enBase:'at the end',             g:null, noArticle:true},
    {base:'loin',            enBase:'far',                    g:null, noArticle:true},
    {base:'près',            enBase:'near / close',           g:null, noArticle:true},
    {base:'au-dessus',       enBase:'above / over',           g:null, noArticle:true},

    // Plural only
    {base:'clés',            enBase:'keys',                   g:'pf', pluralOnly:true},
    {base:'livres',          enBase:'books',                  g:'pm', pluralOnly:true},
    {base:'souliers',        enBase:'shoes',                  g:'pm', pluralOnly:true},
    {base:'lunettes',        enBase:'glasses',                g:'pf', pluralOnly:true},
    {base:'crayons',         enBase:'pencils',                g:'pm', pluralOnly:true},
    {base:'dictionnaires',   enBase:'dictionaries',           g:'pm', pluralOnly:true},
    {base:'feuilles',        enBase:'sheets of paper',        g:'pf', pluralOnly:true},
    {base:'escaliers',       enBase:'stairs',                 g:'pm', pluralOnly:true},
  ],

  // ── STATIC PHRASE CARDS ────────────────────────────────────────
  // g: null for phrases (no gender background)
  phrases: [
    // Greetings
    {fr:'Allô !',                              en:"Hi! / Hey!",                       cat:'greet'},
    {fr:'Bonjour',                             en:"Good morning",                     cat:'greet'},
    {fr:'Bonsoir',                             en:"Good evening",                     cat:'greet'},
    {fr:'Bonne nuit',                          en:"Good night",                       cat:'greet'},
    {fr:'Comment allez-vous ?',                en:"How are you? (formal)",            cat:'greet'},
    {fr:'Comment ça va ?',                     en:"How are you? (informal)",          cat:'greet'},
    {fr:'Ça va bien',                          en:"I'm doing well",                   cat:'greet'},
    {fr:'Pas pire',                            en:"Not bad / Pretty good",            cat:'greet'},
    {fr:'Et toi ? / Et vous ?',                en:"And you? (informal / formal)",     cat:'greet'},
    {fr:"Je m'appelle…",                       en:"My name is…",                      cat:'greet'},
    {fr:'Enchanté(e)',                         en:"Nice to meet you",                 cat:'greet'},
    {fr:'À plus tard',                         en:"See you later",                    cat:'greet'},
    {fr:'À demain',                            en:"See you tomorrow",                 cat:'greet'},
    {fr:'Bonne journée',                       en:"Have a good day",                  cat:'greet'},
    {fr:'Bonne soirée',                        en:"Have a good evening",              cat:'greet'},
    {fr:"S'il vous plaît / S'il te plaît",     en:"Please (formal / informal)",       cat:'greet'},
    {fr:'Merci',                               en:"Thank you",                        cat:'greet'},
    {fr:'De rien / Bienvenue',                 en:"You're welcome",                   cat:'greet'},
    {fr:'Je ne comprends pas',                 en:"I don't understand",               cat:'greet'},
    // Weather phrases
    {fr:'Quel temps fait-il ?',                en:"What's the weather like?",         cat:'weather'},
    {fr:'Il fait beau',                        en:"It's nice out",                    cat:'weather'},
    {fr:'Il fait froid',                       en:"It's cold",                        cat:'weather'},
    {fr:'Il fait chaud',                       en:"It's hot",                         cat:'weather'},
    {fr:'Il pleut',                            en:"It's raining",                     cat:'weather'},
    {fr:'Il neige',                            en:"It's snowing",                     cat:'weather'},
    {fr:'Il fait du vent / Il vente',          en:"It's windy",                       cat:'weather'},
    {fr:'Il est nuageux',                      en:"It's cloudy",                      cat:'weather'},
    {fr:'Il fait soleil',                      en:"It's sunny",                       cat:'weather'},
    {fr:'Il fait frette / Il gèle',            en:"It's freezing",                    cat:'weather'},
    {fr:"Il y a une tempête",                  en:"There's a storm",                  cat:'weather'},
    {fr:"Il fait beau aujourd'hui",            en:"The weather is nice today",        cat:'weather'},
    // Nav phrases
    {fr:"L'ascenseur est à gauche",            en:"The elevator is to the left",      cat:'nav'},
    {fr:'Les escaliers sont à droite',         en:"The stairs are to the right",      cat:'nav'},
    {fr:"L'accueil est tout droit",            en:"The reception is straight ahead",  cat:'nav'},
    {fr:'La sortie est au bout',               en:"The exit is at the end",           cat:'nav'},
    {fr:"La salle de bain est près d'ici",     en:"The bathroom is nearby",           cat:'nav'},
    {fr:"C'est en face de l'ascenseur",        en:"It's across from the elevator",    cat:'nav'},
    {fr:"C'est à côté des escaliers",          en:"It's next to the stairs",          cat:'nav'},
    {fr:"C'est au-dessus du guichet",          en:"It's above the counter",           cat:'nav'},
    {fr:"C'est loin d'ici",                    en:"It's far from here",               cat:'nav'},
  ],

  // ── JOB / PROFESSION VOCAB ─────────────────────────────────────
  // Gendered pairs are separate cards (separate probabilities)
  jobs: [
    {fr:"un infirmier (m)",     en:"a nurse (male)",              g:'m'},
    {fr:"une infirmière (f)",   en:"a nurse (female)",            g:'f'},
    {fr:"un médecin (m)",       en:"a doctor (male)",             g:'m'},
    {fr:"une médecin (f)",      en:"a doctor (female)",           g:'f'},
    {fr:"un professeur (m)",    en:"a teacher (male)",            g:'m'},
    {fr:"une professeure (f)",  en:"a teacher (female)",          g:'f'},
    {fr:"un étudiant (m)",      en:"a student (male)",            g:'m'},
    {fr:"une étudiante (f)",    en:"a student (female)",          g:'f'},
    {fr:"un ingénieur (m)",     en:"an engineer (male)",          g:'m'},
    {fr:"une ingénieure (f)",   en:"an engineer (female)",        g:'f'},
    {fr:"un avocat (m)",        en:"a lawyer (male)",             g:'m'},
    {fr:"une avocate (f)",      en:"a lawyer (female)",           g:'f'},
    {fr:"un comptable (m)",     en:"an accountant (male)",        g:'m'},
    {fr:"une comptable (f)",    en:"an accountant (female)",      g:'f'},
    {fr:"un cuisinier (m)",     en:"a cook (male)",               g:'m'},
    {fr:"une cuisinière (f)",   en:"a cook (female)",             g:'f'},
    {fr:"un serveur (m)",       en:"a server (male)",             g:'m'},
    {fr:"une serveuse (f)",     en:"a server (female)",           g:'f'},
    {fr:"un directeur (m)",     en:"a manager (male)",            g:'m'},
    {fr:"une directrice (f)",   en:"a manager (female)",          g:'f'},
    {fr:"un développeur (m)",   en:"a developer (male)",          g:'m'},
    {fr:"une développeuse (f)", en:"a developer (female)",        g:'f'},
    {fr:"un policier (m)",      en:"a police officer (male)",     g:'m'},
    {fr:"une policière (f)",    en:"a police officer (female)",   g:'f'},
  ],

  // ── ADAPTIVE SENTENCE DATA ─────────────────────────────────────
  // These are used by the generator functions in index.html
  // Edit these arrays to change what appears in adaptive sentences

  nationalities: [
    {fr_m:'canadien',    fr_f:'canadienne',   en:'Canadian'},
    {fr_m:'américain',   fr_f:'américaine',   en:'American'},
    {fr_m:'québécois',   fr_f:'québécoise',   en:'Québécois'},
    {fr_m:'français',    fr_f:'française',    en:'French'},
    {fr_m:'mexicain',    fr_f:'mexicaine',    en:'Mexican'},
    {fr_m:'anglais',     fr_f:'anglaise',     en:'English'},
    {fr_m:'italien',     fr_f:'italienne',    en:'Italian'},
    {fr_m:'espagnol',    fr_f:'espagnole',    en:'Spanish'},
    {fr_m:'japonais',    fr_f:'japonaise',    en:'Japanese'},
    {fr_m:'chinois',     fr_f:'chinoise',     en:'Chinese'},
    {fr_m:'brésilien',   fr_f:'brésilienne',  en:'Brazilian'},
    {fr_m:'haïtien',     fr_f:'haïtienne',    en:'Haitian'},
  ],

  jobs_adaptive: [
    {fr_m:'infirmier',    fr_f:'infirmière',    en_m:'a nurse',          en_f:'a nurse'},
    {fr_m:'médecin',      fr_f:'médecin',       en_m:'a doctor',         en_f:'a doctor'},
    {fr_m:'professeur',   fr_f:'professeure',   en_m:'a teacher',        en_f:'a teacher'},
    {fr_m:'étudiant',     fr_f:'étudiante',     en_m:'a student',        en_f:'a student'},
    {fr_m:'ingénieur',    fr_f:'ingénieure',    en_m:'an engineer',      en_f:'an engineer'},
    {fr_m:'avocat',       fr_f:'avocate',       en_m:'a lawyer',         en_f:'a lawyer'},
    {fr_m:'cuisinier',    fr_f:'cuisinière',    en_m:'a cook',           en_f:'a cook'},
    {fr_m:'serveur',      fr_f:'serveuse',      en_m:'a server',         en_f:'a server'},
    {fr_m:'développeur',  fr_f:'développeuse',  en_m:'a developer',      en_f:'a developer'},
    {fr_m:'directeur',    fr_f:'directrice',    en_m:'a manager',        en_f:'a manager'},
    {fr_m:'comptable',    fr_f:'comptable',     en_m:'an accountant',    en_f:'an accountant'},
    {fr_m:'policier',     fr_f:'policière',     en_m:'a police officer', en_f:'a police officer'},
  ],

  dir_places: [
    {fr:"L'ascenseur",      fr_v:'est',   en:'The elevator',        en_v:'is'},
    {fr:"L'accueil",        fr_v:'est',   en:'The reception',       en_v:'is'},
    {fr:'Le guichet',       fr_v:'est',   en:'The counter',         en_v:'is'},
    {fr:'Les escaliers',    fr_v:'sont',  en:'The stairs',          en_v:'are'},
    {fr:'La sortie',        fr_v:'est',   en:'The exit',            en_v:'is'},
    {fr:'La salle de bain', fr_v:'est',   en:'The bathroom',        en_v:'is'},
    {fr:"L'abreuvoir",      fr_v:'est',   en:'The water fountain',  en_v:'is'},
    {fr:'La porte',         fr_v:'est',   en:'The door',            en_v:'is'},
    {fr:'Le bureau',        fr_v:'est',   en:'The office',          en_v:'is'},
    {fr:'La cafétéria',     fr_v:'est',   en:'The cafeteria',       en_v:'is'},
  ],

  dir_directions: [
    {fr:'à gauche',     en:'to the left'},
    {fr:'à droite',     en:'to the right'},
    {fr:'tout droit',   en:'straight ahead'},
    {fr:'au bout',      en:'at the end'},
    {fr:'en face',      en:'across / facing'},
    {fr:'à côté',       en:'next to'},
    {fr:'au-dessus',    en:'above'},
    {fr:"près d'ici",   en:'nearby'},
    {fr:'en bas',       en:'downstairs / below'},
    {fr:'en haut',      en:'upstairs / above'},
  ],

  obj_items: [
    {fr:"le cahier",        en:"the notebook"},
    {fr:"le stylo",         en:"the pen"},
    {fr:"l'efface",         en:"the eraser"},
    {fr:"l'étui à crayons", en:"the pencil case"},
    {fr:"le livre",         en:"the book"},
    {fr:"la lampe",         en:"the lamp"},
    {fr:"la chaise",        en:"the chair"},
    {fr:"le bureau",        en:"the desk"},
    {fr:"la table",         en:"the table"},
    {fr:"l'ordinateur",     en:"the computer"},
    {fr:"la souris",        en:"the mouse"},
    {fr:"le sac à dos",     en:"the backpack"},
    {fr:"la poubelle",      en:"the garbage can"},
    {fr:"le tableau",       en:"the board"},
    {fr:"la chaise",        en:"the chair"},
    {fr:"le manteau",       en:"the coat"},
  ],

  price_items: [
    {fr:'Le café',          en:'The coffee'},
    {fr:'Le thé',           en:'The tea'},
    {fr:'Le repas',         en:'The meal'},
    {fr:'Le billet',        en:'The ticket'},
    {fr:'Le livre',         en:'The book'},
    {fr:'Le stylo',         en:'The pen'},
    {fr:'Le café au lait',  en:'The café au lait'},
    {fr:'La bière',         en:'The beer'},
    {fr:'Le sandwich',      en:'The sandwich'},
    {fr:'La pizza',         en:'The pizza'},
    {fr:'Le jus',           en:'The juice'},
    {fr:'L\'eau',           en:'The water'},
  ],

  qty_items: [
    {fr:'étudiants',        en:'students'},
    {fr:'personnes',        en:'people'},
    {fr:'chaises',          en:'chairs'},
    {fr:'livres',           en:'books'},
    {fr:'élèves',           en:'students'},
    {fr:'professeurs',      en:'teachers'},
    {fr:'enfants',          en:'children'},
    {fr:'adultes',          en:'adults'},
    {fr:'tables',           en:'tables'},
  ],
};

// ═══════════════════════════════════════════════════════════════
// FORMAT GUIDE
// ═══════════════════════════════════════════════════════════════
//
// VOCAB ENTRY:
//   {base:'mot', enBase:'word', g:'m'|'f'|'pm'|'pf'|null,
//    noArticle:true,   ← for prepositions/adverbs (no un/le)
//    pluralOnly:true,  ← for words that only appear plural
//    vowelStart:true}  ← uses l' instead of le/la
//
// PHRASE ENTRY:
//   {fr:'French phrase', en:'English phrase', cat:'greet'|'weather'|'nav'}
//
// JOB ENTRY:
//   {fr:'un avocat (m)', en:'a lawyer (male)', g:'m'}
//   {fr:'une avocate (f)', en:'a lawyer (female)', g:'f'}
//
// ADAPTIVE LISTS (nationalities, jobs_adaptive, etc.):
//   Just add/edit objects in those arrays — generators use them automatically
//
// CATEGORY VALUES: 'vocab' | 'nav' | 'greet' | 'weather' | 'jobs' | 'adaptive'
