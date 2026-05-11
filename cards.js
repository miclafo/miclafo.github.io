// ═══════════════════════════════════════════════════════════════
// CARDS DATABASE
// ═══════════════════════════════════════════════════════════════
//
// NEXT AVAILABLE ID: 185
//
// ID RULES — read before editing:
//   • Never change or reuse an existing id — ever
//   • New cards always use the next available id above
//   • Update the NEXT AVAILABLE ID comment when you add cards
//   • To remove a card: add disabled:true (do NOT delete the entry)
//   • You can freely edit base, enBase, en, fr, g, cat, etc.
//     without losing progress — only the id is the stable key
//
// ═══════════════════════════════════════════════════════════════

const DB = {

  // ── VOCABULARY NOUNS & PREPOSITIONS ──────────────────────────
  // g: 'm' = masculine, 'f' = feminine, 'pm' = plural masc, 'pf' = plural fem
  // noArticle:true  = prepositions/adverbs — shown without article
  // pluralOnly:true = only appears as des/les (no singular form)
  // vowelStart:true = uses l' instead of le/la
  // disabled:true   = hidden from deck but id is reserved
  vocab: [
    // Prepositions (no article)
    {id:1,  base:'sous',            enBase:'under / beneath',        g:null, noArticle:true},
    {id:2,  base:'sur',             enBase:'on / on top of',         g:null, noArticle:true},
    {id:3,  base:'devant',          enBase:'in front of',            g:null, noArticle:true},
    {id:4,  base:'derrière',        enBase:'behind',                 g:null, noArticle:true},
    {id:5,  base:'dans',            enBase:'in / inside',            g:null, noArticle:true},

    // Masculine nouns
    {id:6,  base:'calendrier',      enBase:'calendar',               g:'m'},
    {id:7,  base:'bac à recyclage', enBase:'recycling bin',          g:'m'},
    {id:8,  base:'tableau',         enBase:'board / chalkboard',     g:'m'},
    {id:9,  base:'bureau',          enBase:'desk',                   g:'m'},
    {id:10, base:'parapluie',       enBase:'umbrella',               g:'m'},
    {id:11, base:'manteau',         enBase:'coat',                   g:'m'},
    {id:12, base:'sac à dos',       enBase:'backpack',               g:'m'},
    {id:13, base:'sac à main',      enBase:'purse / handbag',        g:'m'},
    {id:14, base:'cellulaire',      enBase:'cell phone',             g:'m'},
    {id:15, base:'étui à crayons',  enBase:'pencil case',            g:'m'},
    {id:16, base:'stylo',           enBase:'pen',                    g:'m'},
    {id:17, base:'cahier',          enBase:'notebook',               g:'m'},
    {id:18, base:'guichet',         enBase:'counter / wicket',       g:'m'},

    // Masculine vowel-start (l' article)
    {id:19, base:'ordinateur',      enBase:'computer',               g:'m', vowelStart:true},
    {id:20, base:'ascenseur',       enBase:'elevator',               g:'m', vowelStart:true},
    {id:21, base:'accueil',         enBase:'reception / front desk', g:'m', vowelStart:true},
    {id:22, base:'abreuvoir',       enBase:'water fountain',         g:'m', vowelStart:true},
    {id:23, base:'éclair',          enBase:'lightning',              g:'m', vowelStart:true},
    {id:24, base:'hiver',           enBase:'winter',                 g:'m', vowelStart:true},
    {id:25, base:'été',             enBase:'summer',                 g:'m', vowelStart:true},
    {id:26, base:'automne',         enBase:'autumn / fall',          g:'m', vowelStart:true},

    // Feminine nouns
    {id:27, base:'poubelle',        enBase:'garbage can',            g:'f'},
    {id:28, base:'chaise',          enBase:'chair',                  g:'f'},
    {id:29, base:'lampe',           enBase:'lamp',                   g:'f'},
    {id:30, base:'affiche',         enBase:'poster',                 g:'f'},
    {id:31, base:'plante',          enBase:'plant',                  g:'f'},
    {id:32, base:'porte',           enBase:'door',                   g:'f'},
    {id:33, base:'fenêtre',         enBase:'window',                 g:'f'},
    {id:34, base:'imprimante',      enBase:'printer',                g:'f'},
    {id:35, base:'souris',          enBase:'mouse',                  g:'f'},
    {id:36, base:'veste',           enBase:'jacket',                 g:'f'},
    {id:37, base:'étagère',         enBase:'shelf',                  g:'f'},
    {id:38, base:'table',           enBase:'table',                  g:'f'},
    {id:39, base:'efface',          enBase:'eraser',                 g:'f'},
    {id:40, base:'montre',          enBase:'watch',                  g:'f'},
    {id:41, base:'tablette électronique', enBase:'electronic tablet',g:'f'},
    {id:42, base:'température',     enBase:'temperature',            g:'f'},
    {id:43, base:'météo',           enBase:'forecast',               g:'f'},
    {id:44, base:'saison',          enBase:'season',                 g:'f'},
    {id:45, base:'pluie',           enBase:'rain',                   g:'f'},
    {id:46, base:'neige',           enBase:'snow',                   g:'f'},
    {id:47, base:'tempête',         enBase:'storm',                  g:'f'},
    {id:48, base:'glace',           enBase:'ice',                    g:'f'},

    // Feminine vowel-start
    {id:49, base:'efface',          enBase:'eraser',                 g:'f', vowelStart:true, disabled:true}, // duplicate of id:39, kept for id reservation

    // Masculine weather/nav (non-vowel)
    {id:50, base:'soleil',          enBase:'sun',                    g:'m'},
    {id:51, base:'vent',            enBase:'wind',                   g:'m'},
    {id:52, base:'nuage',           enBase:'cloud',                  g:'m'},
    {id:53, base:'brouillard',      enBase:'fog',                    g:'m'},
    {id:54, base:'givre',           enBase:'frost',                  g:'m'},
    {id:55, base:'tonnerre',        enBase:'thunder',                g:'m'},
    {id:56, base:'printemps',       enBase:'spring',                 g:'m'},
    {id:57, base:'degré',           enBase:'degree',                 g:'m'},

    // Nav adverbs (no article)
    {id:58, base:'gauche',          enBase:'left',                   g:null, noArticle:true},
    {id:59, base:'droite',          enBase:'right',                  g:null, noArticle:true},
    {id:60, base:'en face',         enBase:'across / facing',        g:null, noArticle:true},
    {id:61, base:'à côté',          enBase:'beside / next to',       g:null, noArticle:true},
    {id:62, base:'au bout',         enBase:'at the end',             g:null, noArticle:true},
    {id:63, base:'loin',            enBase:'far',                    g:null, noArticle:true},
    {id:64, base:'près',            enBase:'near / close',           g:null, noArticle:true},
    {id:65, base:'au-dessus',       enBase:'above / over',           g:null, noArticle:true},

    // Plural only
    {id:66, base:'clés',            enBase:'keys',                   g:'pf', pluralOnly:true},
    {id:67, base:'livres',          enBase:'books',                  g:'pm', pluralOnly:true},
    {id:68, base:'souliers',        enBase:'shoes',                  g:'pm', pluralOnly:true},
    {id:69, base:'lunettes',        enBase:'glasses',                g:'pf', pluralOnly:true},
    {id:70, base:'crayons',         enBase:'pencils',                g:'pm', pluralOnly:true},
    {id:71, base:'dictionnaires',   enBase:'dictionaries',           g:'pm', pluralOnly:true},
    {id:72, base:'feuilles',        enBase:'sheets of paper',        g:'pf', pluralOnly:true},
    {id:73, base:'escaliers',       enBase:'stairs',                 g:'pm', pluralOnly:true},
  ],

  // ── STATIC PHRASE CARDS ───────────────────────────────────────
  phrases: [
    // Greetings
    {id:101, fr:'Allô !',                           en:"Hi! / Hey!",                    cat:'greet'},
    {id:102, fr:'Bonjour',                          en:"Good morning",                  cat:'greet'},
    {id:103, fr:'Bonsoir',                          en:"Good evening",                  cat:'greet'},
    {id:104, fr:'Bonne nuit',                       en:"Good night",                    cat:'greet'},
    {id:105, fr:'Comment allez-vous ?',             en:"How are you? (formal)",         cat:'greet'},
    {id:106, fr:'Comment ça va ?',                  en:"How are you? (informal)",       cat:'greet'},
    {id:107, fr:'Ça va bien',                       en:"I'm doing well",                cat:'greet'},
    {id:108, fr:'Pas pire',                         en:"Not bad / Pretty good",         cat:'greet'},
    {id:109, fr:'Et toi ? / Et vous ?',             en:"And you? (informal / formal)",  cat:'greet'},
    {id:110, fr:"Je m'appelle…",                    en:"My name is…",                   cat:'greet'},
    {id:111, fr:'Enchanté(e)',                      en:"Nice to meet you",              cat:'greet'},
    {id:112, fr:'À plus tard',                      en:"See you later",                 cat:'greet'},
    {id:113, fr:'À demain',                         en:"See you tomorrow",              cat:'greet'},
    {id:114, fr:'Bonne journée',                    en:"Have a good day",               cat:'greet'},
    {id:115, fr:'Bonne soirée',                     en:"Have a good evening",           cat:'greet'},
    {id:116, fr:"S'il vous plaît / S'il te plaît",  en:"Please (formal / informal)",    cat:'greet'},
    {id:117, fr:'Merci',                            en:"Thank you",                     cat:'greet'},
    {id:118, fr:'De rien / Bienvenue',              en:"You're welcome",                cat:'greet'},
    {id:119, fr:'Je ne comprends pas',              en:"I don't understand",            cat:'greet'},

    // Weather phrases
    {id:120, fr:'Quel temps fait-il ?',             en:"What's the weather like?",      cat:'weather'},
    {id:121, fr:'Il fait beau',                     en:"It's nice out",                 cat:'weather'},
    {id:122, fr:'Il fait froid',                    en:"It's cold",                     cat:'weather'},
    {id:123, fr:'Il fait chaud',                    en:"It's hot",                      cat:'weather'},
    {id:124, fr:'Il pleut',                         en:"It's raining",                  cat:'weather'},
    {id:125, fr:'Il neige',                         en:"It's snowing",                  cat:'weather'},
    {id:126, fr:'Il fait du vent / Il vente',       en:"It's windy",                    cat:'weather'},
    {id:127, fr:'Il est nuageux',                   en:"It's cloudy",                   cat:'weather'},
    {id:128, fr:'Il fait soleil',                   en:"It's sunny",                    cat:'weather'},
    {id:129, fr:'Il fait frette / Il gèle',         en:"It's freezing",                 cat:'weather'},
    {id:130, fr:"Il y a une tempête",               en:"There's a storm",               cat:'weather'},
    {id:131, fr:"Il fait beau aujourd'hui",         en:"The weather is nice today",     cat:'weather'},

    // Nav phrases
    {id:132, fr:"L'ascenseur est à gauche",         en:"The elevator is to the left",   cat:'nav'},
    {id:133, fr:'Les escaliers sont à droite',      en:"The stairs are to the right",   cat:'nav'},
    {id:134, fr:"L'accueil est tout droit",         en:"The reception is straight ahead",cat:'nav'},
    {id:135, fr:'La sortie est au bout',            en:"The exit is at the end",        cat:'nav'},
    {id:136, fr:"La salle de bain est près d'ici",  en:"The bathroom is nearby",        cat:'nav'},
    {id:137, fr:"C'est en face de l'ascenseur",     en:"It's across from the elevator", cat:'nav'},
    {id:138, fr:"C'est à côté des escaliers",       en:"It's next to the stairs",       cat:'nav'},
    {id:139, fr:"C'est au-dessus du guichet",       en:"It's above the counter",        cat:'nav'},
    {id:140, fr:"C'est loin d'ici",                 en:"It's far from here",            cat:'nav'},
  ],

  // ── JOB / PROFESSION VOCAB ────────────────────────────────────
  // Gendered pairs = separate cards with separate probabilities
  jobs: [
    {id:151, fr:"un infirmier (m)",     en:"a nurse (male)",              g:'m'},
    {id:152, fr:"une infirmière (f)",   en:"a nurse (female)",            g:'f'},
    {id:153, fr:"un médecin (m)",       en:"a doctor (male)",             g:'m'},
    {id:154, fr:"une médecin (f)",      en:"a doctor (female)",           g:'f'},
    {id:155, fr:"un professeur (m)",    en:"a teacher (male)",            g:'m'},
    {id:156, fr:"une professeure (f)",  en:"a teacher (female)",          g:'f'},
    {id:157, fr:"un étudiant (m)",      en:"a student (male)",            g:'m'},
    {id:158, fr:"une étudiante (f)",    en:"a student (female)",          g:'f'},
    {id:159, fr:"un ingénieur (m)",     en:"an engineer (male)",          g:'m'},
    {id:160, fr:"une ingénieure (f)",   en:"an engineer (female)",        g:'f'},
    {id:161, fr:"un avocat (m)",        en:"a lawyer (male)",             g:'m'},
    {id:162, fr:"une avocate (f)",      en:"a lawyer (female)",           g:'f'},
    {id:163, fr:"un comptable (m)",     en:"an accountant (male)",        g:'m'},
    {id:164, fr:"une comptable (f)",    en:"an accountant (female)",      g:'f'},
    {id:165, fr:"un cuisinier (m)",     en:"a cook (male)",               g:'m'},
    {id:166, fr:"une cuisinière (f)",   en:"a cook (female)",             g:'f'},
    {id:167, fr:"un serveur (m)",       en:"a server (male)",             g:'m'},
    {id:168, fr:"une serveuse (f)",     en:"a server (female)",           g:'f'},
    {id:169, fr:"un directeur (m)",     en:"a manager (male)",            g:'m'},
    {id:170, fr:"une directrice (f)",   en:"a manager (female)",          g:'f'},
    {id:171, fr:"un développeur (m)",   en:"a developer (male)",          g:'m'},
    {id:172, fr:"une développeuse (f)", en:"a developer (female)",        g:'f'},
    {id:173, fr:"un policier (m)",      en:"a police officer (male)",     g:'m'},
    {id:174, fr:"une policière (f)",    en:"a police officer (female)",   g:'f'},
  ],

  // ── ADAPTIVE SENTENCE DATA ─────────────────────────────────────
  // These lists feed the adaptive generators — no IDs needed here
  // since adaptive cards are generated fresh and not persisted individually.
  // Edit freely.

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
    {fr:"le manteau",       en:"the coat"},
  ],

  price_items: [
    {fr:'Le café',         en:'The coffee'},
    {fr:'Le thé',          en:'The tea'},
    {fr:'Le repas',        en:'The meal'},
    {fr:'Le billet',       en:'The ticket'},
    {fr:'Le livre',        en:'The book'},
    {fr:'Le stylo',        en:'The pen'},
    {fr:'Le café au lait', en:'The café au lait'},
    {fr:'La bière',        en:'The beer'},
    {fr:'Le sandwich',     en:'The sandwich'},
    {fr:'La pizza',        en:'The pizza'},
    {fr:'Le jus',          en:'The juice'},
    {fr:"L'eau",           en:'The water'},
  ],

  qty_items: [
    {fr:'étudiants',   en:'students'},
    {fr:'personnes',   en:'people'},
    {fr:'chaises',     en:'chairs'},
    {fr:'livres',      en:'books'},
    {fr:'élèves',      en:'students'},
    {fr:'professeurs', en:'teachers'},
    {fr:'enfants',     en:'children'},
    {fr:'adultes',     en:'adults'},
    {fr:'tables',      en:'tables'},
  ],
};

// ═══════════════════════════════════════════════════════════════
// FORMAT GUIDE
// ═══════════════════════════════════════════════════════════════
//
// ADDING NEW CARDS:
//   1. Use the next available id shown at the top of this file
//   2. Increment the NEXT AVAILABLE ID comment
//   3. Never reuse or change an existing id
//
// TO REMOVE A CARD:
//   Add disabled:true — do NOT delete the entry or reuse its id
//   Example: {id:6, base:'calendrier', ..., disabled:true}
//
// VOCAB ENTRY:
//   {id:N, base:'mot', enBase:'word', g:'m'|'f'|'pm'|'pf'|null,
//    noArticle:true,    ← prepositions/adverbs (no un/le forms)
//    pluralOnly:true,   ← only appears as des/les
//    vowelStart:true,   ← uses l' instead of le/la
//    disabled:true}     ← hidden but id reserved
//
// PHRASE ENTRY:
//   {id:N, fr:'French phrase', en:'English phrase',
//    cat:'greet'|'weather'|'nav', disabled:true}
//
// JOB ENTRY:
//   {id:N, fr:'un avocat (m)', en:'a lawyer (male)', g:'m'}
//   {id:N, fr:'une avocate (f)', en:'a lawyer (female)', g:'f'}
//
// ADAPTIVE LISTS (nationalities, jobs_adaptive, dir_places, etc.):
//   No IDs needed — edit freely, changes take effect immediately
//
// CATEGORY VALUES: 'vocab' | 'nav' | 'greet' | 'weather' | 'jobs' | 'adaptive'
