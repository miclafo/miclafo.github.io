// ═══════════════════════════════════════════════════════════════
// CARDS DATABASE
// ═══════════════════════════════════════════════════════════════
//
// NEXT AVAILABLE ID: 366
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
    {id:1, added:'2025-05-10',  base:'sous',            enBase:'under / beneath',        g:null, noArticle:true},
    {id:2, added:'2025-05-10',  base:'sur',             enBase:'on / on top of',         g:null, noArticle:true},
    {id:3, added:'2025-05-10',  base:'devant',          enBase:'in front of',            g:null, noArticle:true},
    {id:4, added:'2025-05-10',  base:'derrière',        enBase:'behind',                 g:null, noArticle:true},
    {id:5, added:'2025-05-10',  base:'dans',            enBase:'in / inside',            g:null, noArticle:true},

    // Masculine nouns
    {id:6, added:'2025-05-10',  base:'calendrier',      enBase:'calendar',               g:'m'},
    {id:7, added:'2025-05-10',  base:'bac à recyclage', enBase:'recycling bin',          g:'m'},
    {id:8, added:'2025-05-10',  base:'tableau',         enBase:'board / chalkboard',     g:'m'},
    {id:9, added:'2025-05-10',  base:'bureau',          enBase:'desk',                   g:'m'},
    {id:10, added:'2025-05-10', base:'parapluie',       enBase:'umbrella',               g:'m'},
    {id:11, added:'2025-05-10', base:'manteau',         enBase:'coat',                   g:'m'},
    {id:12, added:'2025-05-10', base:'sac à dos',       enBase:'backpack',               g:'m'},
    {id:13, added:'2025-05-10', base:'sac à main',      enBase:'purse / handbag',        g:'m'},
    {id:14, added:'2025-05-10', base:'cellulaire',      enBase:'cell phone',             g:'m'},
    {id:15, added:'2025-05-10', base:'étui à crayons',  enBase:'pencil case',            g:'m'},
    {id:16, added:'2025-05-10', base:'stylo',           enBase:'pen',                    g:'m'},
    {id:17, added:'2025-05-10', base:'cahier',          enBase:'notebook',               g:'m'},
    {id:18, added:'2025-05-10', base:'guichet',         enBase:'counter / wicket',       g:'m'},

    // Masculine vowel-start (l' article)
    {id:19, added:'2025-05-10', base:'ordinateur',      enBase:'computer',               g:'m', vowelStart:true},
    {id:20, added:'2025-05-10', base:'ascenseur',       enBase:'elevator',               g:'m', vowelStart:true},
    {id:21, added:'2025-05-10', base:'accueil',         enBase:'reception / front desk', g:'m', vowelStart:true},
    {id:22, added:'2025-05-10', base:'abreuvoir',       enBase:'water fountain',         g:'m', vowelStart:true},
    {id:23, added:'2025-05-10', base:'éclair',          enBase:'lightning',              g:'m', vowelStart:true},
    {id:24, added:'2025-05-10', base:'hiver',           enBase:'winter',                 g:'m', vowelStart:true},
    {id:25, added:'2025-05-10', base:'été',             enBase:'summer',                 g:'m', vowelStart:true},
    {id:26, added:'2025-05-10', base:'automne',         enBase:'autumn / fall',          g:'m', vowelStart:true},

    // Feminine nouns
    {id:27, added:'2025-05-10', base:'poubelle',        enBase:'garbage can',            g:'f'},
    {id:28, added:'2025-05-10', base:'chaise',          enBase:'chair',                  g:'f'},
    {id:29, added:'2025-05-10', base:'lampe',           enBase:'lamp',                   g:'f'},
    {id:30, added:'2025-05-10', base:'affiche',         enBase:'poster',                 g:'f'},
    {id:31, added:'2025-05-10', base:'plante',          enBase:'plant',                  g:'f'},
    {id:32, added:'2025-05-10', base:'porte',           enBase:'door',                   g:'f'},
    {id:33, added:'2025-05-10', base:'fenêtre',         enBase:'window',                 g:'f'},
    {id:34, added:'2025-05-10', base:'imprimante',      enBase:'printer',                g:'f'},
    {id:35, added:'2025-05-10', base:'souris',          enBase:'mouse',                  g:'f'},
    {id:36, added:'2025-05-10', base:'veste',           enBase:'jacket',                 g:'f'},
    {id:37, added:'2025-05-10', base:'étagère',         enBase:'shelf',                  g:'f'},
    {id:38, added:'2025-05-10', base:'table',           enBase:'table',                  g:'f'},
    {id:39, added:'2025-05-10', base:'efface',          enBase:'eraser',                 g:'f'},
    {id:40, added:'2025-05-10', base:'montre',          enBase:'watch',                  g:'f'},
    {id:41, added:'2025-05-10', base:'tablette électronique', enBase:'electronic tablet',g:'f'},
    {id:42, added:'2025-05-10', base:'température',     enBase:'temperature',            g:'f'},
    {id:43, added:'2025-05-10', base:'météo',           enBase:'forecast',               g:'f'},
    {id:44, added:'2025-05-10', base:'saison',          enBase:'season',                 g:'f'},
    {id:45, added:'2025-05-10', base:'pluie',           enBase:'rain',                   g:'f'},
    {id:46, added:'2025-05-10', base:'neige',           enBase:'snow',                   g:'f'},
    {id:47, added:'2025-05-10', base:'tempête',         enBase:'storm',                  g:'f'},
    {id:48, added:'2025-05-10', base:'glace',           enBase:'ice',                    g:'f'},

    // Feminine vowel-start
    {id:49, added:'2025-05-10', base:'efface',          enBase:'eraser',                 g:'f', vowelStart:true, disabled:true}, // duplicate of id:39, kept for id reservation

    // Masculine weather/nav (non-vowel)
    {id:50, added:'2025-05-10', base:'soleil',          enBase:'sun',                    g:'m'},
    {id:51, added:'2025-05-10', base:'vent',            enBase:'wind',                   g:'m'},
    {id:52, added:'2025-05-10', base:'nuage',           enBase:'cloud',                  g:'m'},
    {id:53, added:'2025-05-10', base:'brouillard',      enBase:'fog',                    g:'m'},
    {id:54, added:'2025-05-10', base:'givre',           enBase:'frost',                  g:'m'},
    {id:55, added:'2025-05-10', base:'tonnerre',        enBase:'thunder',                g:'m'},
    {id:56, added:'2025-05-10', base:'printemps',       enBase:'spring',                 g:'m'},
    {id:57, added:'2025-05-10', base:'degré',           enBase:'degree',                 g:'m'},

    // Nav adverbs (no article)
    {id:58, added:'2025-05-10', base:'gauche',          enBase:'left',                   g:null, noArticle:true},
    {id:59, added:'2025-05-10', base:'droite',          enBase:'right',                  g:null, noArticle:true},
    {id:60, added:'2025-05-10', base:'en face',         enBase:'across / facing',        g:null, noArticle:true},
    {id:61, added:'2025-05-10', base:'à côté',          enBase:'beside / next to',       g:null, noArticle:true},
    {id:62, added:'2025-05-10', base:'au bout',         enBase:'at the end',             g:null, noArticle:true},
    {id:63, added:'2025-05-10', base:'loin',            enBase:'far',                    g:null, noArticle:true},
    {id:64, added:'2025-05-10', base:'près',            enBase:'near / close',           g:null, noArticle:true},
    {id:65, added:'2025-05-10', base:'au-dessus',       enBase:'above / over',           g:null, noArticle:true},

    // Plural only
    {id:66, added:'2025-05-10', base:'clés',            enBase:'keys',                   g:'pf', pluralOnly:true},
    {id:67, added:'2025-05-10', base:'livres',          enBase:'books',                  g:'pm', pluralOnly:true},
    {id:68, added:'2025-05-10', base:'souliers',        enBase:'shoes',                  g:'pm', pluralOnly:true},
    {id:69, added:'2025-05-10', base:'lunettes',        enBase:'glasses',                g:'pf', pluralOnly:true},
    {id:70, added:'2025-05-10', base:'crayons',         enBase:'pencils',                g:'pm', pluralOnly:true},
    {id:71, added:'2025-05-10', base:'dictionnaires',   enBase:'dictionaries',           g:'pm', pluralOnly:true},
    {id:72, added:'2025-05-10', base:'feuilles',        enBase:'sheets of paper',        g:'pf', pluralOnly:true},
    {id:73, added:'2025-05-10', base:'escaliers',       enBase:'stairs',                 g:'pm', pluralOnly:true},
  ],

  // ── STATIC PHRASE CARDS ───────────────────────────────────────
  phrases: [
    // Greetings
    {id:101, added:'2025-05-10', fr:'Allô !',                           en:"Hi! / Hey!",                    cat:'greet'},
    {id:102, added:'2025-05-10', fr:'Bonjour',                          en:"Good morning",                  cat:'greet'},
    {id:103, added:'2025-05-10', fr:'Bonsoir',                          en:"Good evening",                  cat:'greet'},
    {id:104, added:'2025-05-10', fr:'Bonne nuit',                       en:"Good night",                    cat:'greet'},
    {id:105, added:'2025-05-10', fr:'Comment allez-vous ?',             en:"How are you? (formal)",         cat:'greet'},
    {id:106, added:'2025-05-10', fr:'Comment ça va ?',                  en:"How are you? (informal)",       cat:'greet'},
    {id:107, added:'2025-05-10', fr:'Ça va bien',                       en:"I'm doing well",                cat:'greet'},
    {id:108, added:'2025-05-10', fr:'Pas pire',                         en:"Not bad / Pretty good",         cat:'greet'},
    {id:109, added:'2025-05-10', fr:'Et toi ? / Et vous ?',             en:"And you? (informal / formal)",  cat:'greet'},
    {id:110, added:'2025-05-10', fr:"Je m'appelle…",                    en:"My name is…",                   cat:'greet'},
    {id:111, added:'2025-05-10', fr:'Enchanté(e)',                      en:"Nice to meet you",              cat:'greet'},
    {id:112, added:'2025-05-10', fr:'À plus tard',                      en:"See you later",                 cat:'greet'},
    {id:113, added:'2025-05-10', fr:'À demain',                         en:"See you tomorrow",              cat:'greet'},
    {id:114, added:'2025-05-10', fr:'Bonne journée',                    en:"Have a good day",               cat:'greet'},
    {id:115, added:'2025-05-10', fr:'Bonne soirée',                     en:"Have a good evening",           cat:'greet'},
    {id:116, added:'2025-05-10', fr:"S'il vous plaît / S'il te plaît",  en:"Please (formal / informal)",    cat:'greet'},
    {id:117, added:'2025-05-10', fr:'Merci',                            en:"Thank you",                     cat:'greet'},
    {id:118, added:'2025-05-10', fr:'De rien / Bienvenue',              en:"You're welcome",                cat:'greet'},
    {id:119, added:'2025-05-10', fr:'Je ne comprends pas',              en:"I don't understand",            cat:'greet'},

    // Weather phrases
    {id:120, added:'2025-05-10', fr:'Quel temps fait-il ?',             en:"What's the weather like?",      cat:'weather'},
    {id:121, added:'2025-05-10', fr:'Il fait beau',                     en:"It's nice out",                 cat:'weather'},
    {id:122, added:'2025-05-10', fr:'Il fait froid',                    en:"It's cold",                     cat:'weather'},
    {id:123, added:'2025-05-10', fr:'Il fait chaud',                    en:"It's hot",                      cat:'weather'},
    {id:124, added:'2025-05-10', fr:'Il pleut',                         en:"It's raining",                  cat:'weather'},
    {id:125, added:'2025-05-10', fr:'Il neige',                         en:"It's snowing",                  cat:'weather'},
    {id:126, added:'2025-05-10', fr:'Il fait du vent / Il vente',       en:"It's windy",                    cat:'weather'},
    {id:127, added:'2025-05-10', fr:'Il est nuageux',                   en:"It's cloudy",                   cat:'weather'},
    {id:128, added:'2025-05-10', fr:'Il fait soleil',                   en:"It's sunny",                    cat:'weather'},
    {id:129, added:'2025-05-10', fr:'Il fait frette / Il gèle',         en:"It's freezing",                 cat:'weather'},
    {id:130, added:'2025-05-10', fr:"Il y a une tempête",               en:"There's a storm",               cat:'weather'},
    {id:131, added:'2025-05-10', fr:"Il fait beau aujourd'hui",         en:"The weather is nice today",     cat:'weather'},

    // Nav phrases
    {id:132, added:'2025-05-10', fr:"L'ascenseur est à gauche",         en:"The elevator is to the left",   cat:'nav'},
    {id:133, added:'2025-05-10', fr:'Les escaliers sont à droite',      en:"The stairs are to the right",   cat:'nav'},
    {id:134, added:'2025-05-10', fr:"L'accueil est tout droit",         en:"The reception is straight ahead",cat:'nav'},
    {id:135, added:'2025-05-10', fr:'La sortie est au bout',            en:"The exit is at the end",        cat:'nav'},
    {id:136, added:'2025-05-10', fr:"La salle de bain est près d'ici",  en:"The bathroom is nearby",        cat:'nav'},
    {id:137, added:'2025-05-10', fr:"C'est en face de l'ascenseur",     en:"It's across from the elevator", cat:'nav'},
    {id:138, added:'2025-05-10', fr:"C'est à côté des escaliers",       en:"It's next to the stairs",       cat:'nav'},
    {id:139, added:'2025-05-10', fr:"C'est au-dessus du guichet",       en:"It's above the counter",        cat:'nav'},
    {id:140, added:'2025-05-10', fr:"C'est loin d'ici",                 en:"It's far from here",            cat:'nav'},
  ],

  // ── JOB / PROFESSION VOCAB ────────────────────────────────────
  // Gendered pairs = separate cards with separate probabilities
  jobs: [
    {id:151, added:'2025-05-10', fr:"un infirmier",     en:"a nurse (male)",              g:'m'},
    {id:152, added:'2025-05-10', fr:"une infirmière",   en:"a nurse (female)",            g:'f'},
    {id:153, added:'2025-05-10', fr:"un médecin",       en:"a doctor (male)",             g:'m'},
    {id:154, added:'2025-05-10', fr:"une médecin",      en:"a doctor (female)",           g:'f'},
    {id:155, added:'2025-05-10', fr:"un enseignant",        en:"a teacher (male)",            g:'m'},
    {id:156, added:'2025-05-10', fr:"une enseignante",      en:"a teacher (female)",          g:'f'},
    {id:157, added:'2025-05-10', fr:"un étudiant",      en:"a student (male)",            g:'m'},
    {id:158, added:'2025-05-10', fr:"une étudiante",    en:"a student (female)",          g:'f'},
    {id:159, added:'2025-05-10', fr:"un ingénieur",     en:"an engineer (male)",          g:'m'},
    {id:160, added:'2025-05-10', fr:"une ingénieure",   en:"an engineer (female)",        g:'f'},
    {id:161, added:'2025-05-10', fr:"un avocat",        en:"a lawyer (male)",             g:'m'},
    {id:162, added:'2025-05-10', fr:"une avocate",      en:"a lawyer (female)",           g:'f'},
    {id:163, added:'2025-05-10', fr:"un comptable",     en:"an accountant (male)",        g:'m'},
    {id:164, added:'2025-05-10', fr:"une comptable",    en:"an accountant (female)",      g:'f'},
    {id:165, added:'2025-05-10', fr:"un cuisinier",     en:"a cook (male)",               g:'m'},
    {id:166, added:'2025-05-10', fr:"une cuisinière",   en:"a cook (female)",             g:'f'},
    {id:167, added:'2025-05-10', fr:"un serveur",       en:"a server (male)",             g:'m'},
    {id:168, added:'2025-05-10', fr:"une serveuse",     en:"a server (female)",           g:'f'},
    {id:169, added:'2025-05-10', fr:"un directeur",     en:"a manager (male)",            g:'m'},
    {id:170, added:'2025-05-10', fr:"une directrice",   en:"a manager (female)",          g:'f'},
    {id:171, added:'2025-05-10', fr:"un développeur",   en:"a developer (male)",          g:'m'},
    {id:172, added:'2025-05-10', fr:"une développeuse", en:"a developer (female)",        g:'f'},
    {id:173, added:'2025-05-10', fr:"un policier",      en:"a police officer (male)",     g:'m'},
    {id:174, added:'2025-05-10', fr:"une policière",    en:"a police officer (female)",   g:'f'},
  ],


  // ── VERB INFINITIVES ──────────────────────────────────────────
  // These appear as standalone vocab cards (to go = aller etc.)
  verbs: [
    // Irregular verbs
    {id:185, added:'2025-05-10', fr:'aller',    en:'to go',              cat:'irregular'},
    {id:186, added:'2025-05-10', fr:'devoir',   en:'to have to / must',  cat:'irregular'},
    {id:187, added:'2025-05-10', fr:'pouvoir',  en:'to be able to / can',cat:'irregular'},

    // Regular verbs
    {id:188, added:'2025-05-10', fr:'arriver',  en:'to arrive',           cat:'regular'},
    {id:189, added:'2025-05-10', fr:'boire',    en:'to drink',             cat:'regular'},
    {id:190, added:'2025-05-10', fr:'manger',   en:'to eat',               cat:'regular'},
    {id:191, added:'2025-05-10', fr:'dormir',   en:'to sleep',             cat:'regular'},
    {id:192, added:'2025-05-10', fr:'écrire',   en:'to write',             cat:'regular'},
    {id:193, added:'2025-05-10', fr:'écouter',  en:'to listen (to)',       cat:'regular'},
    {id:194, added:'2025-05-10', fr:'fumer',    en:'to smoke',             cat:'regular'},
    {id:195, added:'2025-05-10', fr:'lire',     en:'to read',              cat:'regular'},
    {id:196, added:'2025-05-10', fr:'texter',   en:'to text',              cat:'regular'},
  ],

  // ── PERMISSION PHRASES (static cards) ────────────────────────
  permission: [
    {id:197, added:'2025-05-10', fr:'Je peux…',                en:'I can… / I am able to…',          cat:'irregular'},
    {id:198, added:'2025-05-10', fr:'Puis-je… ?',              en:'May I…? (formal)',                 cat:'irregular'},
    {id:199, added:'2025-05-10', fr:'Est-ce que je peux… ?',   en:'Can I…? (informal)',               cat:'irregular'},
    {id:200, added:'2025-05-10', fr:"C'est possible de… ?",    en:'Is it possible to…?',             cat:'irregular'},
    {id:201, added:'2025-05-10', fr:"C'est permis de… ?",      en:'Is it allowed / permitted to…?',  cat:'irregular'},
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
    {fr_m:'enseignant',   fr_f:'enseignante',   en_m:'a teacher',        en_f:'a teacher'},
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
  // ── TRAVEL VOCAB ──────────────────────────────────────────────
  travel: [
    // Transport
    {id:202, added:'2025-05-13', fr:'le métro',          en:'the metro / subway',      g:'m', cat:'travel'},
    {id:203, added:'2025-05-13', fr:'un métro',          en:'a metro / subway',        g:'m', cat:'travel'},
    {id:204, added:'2025-05-13', fr:'un autobus',        en:'a bus',                   g:'m', cat:'travel'},
    {id:205, added:'2025-05-13', fr:"un arrêt",         en:'a stop',                  g:'m', cat:'travel'},
    {id:206, added:'2025-05-13', fr:'une station',       en:'a station',               g:'f', cat:'travel'},
    {id:207, added:'2025-05-13', fr:'un billet',         en:'a ticket',                g:'m', cat:'travel'},
    {id:208, added:'2025-05-13', fr:'une correspondance',en:'a transfer / connection', g:'f', cat:'travel'},
    {id:209, added:'2025-05-13', fr:'un aller-retour',   en:'a return ticket',         g:'m', cat:'travel'},
    {id:210, added:'2025-05-13', fr:'une voiture',       en:'a car',                   g:'f', cat:'travel'},
    {id:211, added:'2025-05-13', fr:'un vélo',           en:'a bicycle',               g:'m', cat:'travel'},
    {id:212, added:'2025-05-13', fr:'un avion',          en:'a plane',                 g:'m', cat:'travel'},
    {id:213, added:'2025-05-13', fr:"un aéroport",      en:'an airport',              g:'m', cat:'travel'},
    {id:214, added:'2025-05-13', fr:'un taxi',           en:'a taxi',                  g:'m', cat:'travel'},
    // Hotel
    {id:215, added:'2025-05-13', fr:'une chambre',       en:'a room',                  g:'f', cat:'travel'},
    {id:216, added:'2025-05-13', fr:'une réservation',   en:'a reservation',           g:'f', cat:'travel'},
    {id:217, added:'2025-05-13', fr:"un étage",         en:'a floor / storey',        g:'m', cat:'travel'},
    {id:218, added:'2025-05-13', fr:'une clé',           en:'a key',                   g:'f', cat:'travel'},
    {id:219, added:'2025-05-13', fr:'un lit',            en:'a bed',                   g:'m', cat:'travel'},
    {id:220, added:'2025-05-13', fr:'une salle de bain', en:'a bathroom',              g:'f', cat:'travel'},
    {id:221, added:'2025-05-13', fr:'le déjeuner',       en:'breakfast / lunch',       g:'m', cat:'travel'},
    {id:222, added:'2025-05-13', fr:'le wifi',           en:'wifi',                    g:'m', cat:'travel'},
    {id:223, added:'2025-05-13', fr:"un hôtel",         en:'a hotel',                 g:'m', cat:'travel'},
    // Buildings & places
    {id:224, added:'2025-05-13', fr:"une école",        en:'a school',                g:'f', cat:'travel'},
    {id:225, added:'2025-05-13', fr:"un hôpital",       en:'a hospital',              g:'m', cat:'travel'},
    {id:226, added:'2025-05-13', fr:'une pharmacie',     en:'a pharmacy',              g:'f', cat:'travel'},
    {id:227, added:'2025-05-13', fr:"une épicerie",     en:'a grocery store',         g:'f', cat:'travel'},
    {id:228, added:'2025-05-13', fr:'un restaurant',     en:'a restaurant',            g:'m', cat:'travel'},
    {id:229, added:'2025-05-13', fr:'un café',           en:'a café',                  g:'m', cat:'travel'},
    {id:230, added:'2025-05-13', fr:'une banque',        en:'a bank',                  g:'f', cat:'travel'},
    {id:231, added:'2025-05-13', fr:'un bureau de poste',en:'a post office',           g:'m', cat:'travel'},
    {id:232, added:'2025-05-13', fr:'un parc',           en:'a park',                  g:'m', cat:'travel'},
    {id:233, added:'2025-05-13', fr:'une rue',           en:'a street',                g:'f', cat:'travel'},
    {id:234, added:'2025-05-13', fr:'un quartier',       en:'a neighbourhood',         g:'m', cat:'travel'},
    {id:235, added:'2025-05-13', fr:'une ville',         en:'a city',                  g:'f', cat:'travel'},
    {id:236, added:'2025-05-13', fr:'un aéroport',       en:'an airport',              g:'m', cat:'travel'},
    {id:237, added:'2025-05-13', fr:'une bibliothèque',  en:'a library',               g:'f', cat:'travel'},
    {id:238, added:'2025-05-13', fr:'un supermarché',    en:'a supermarket',           g:'m', cat:'travel'},
  ],

  // ── TRAVEL PHRASES (static) ────────────────────────────────────
  travel_phrases: [
    // Shopping
    {id:239, added:'2025-05-13', fr:"C'est combien ?",              en:"How much is it?",                cat:'travel'},
    {id:240, added:'2025-05-13', fr:"Je voudrais…",                 en:"I would like…",                  cat:'travel'},
    {id:241, added:'2025-05-13', fr:"Avez-vous… ?",                 en:"Do you have…?",                  cat:'travel'},
    {id:242, added:'2025-05-13', fr:"L'addition, s'il vous plaît",  en:"The bill, please",               cat:'travel'},
    {id:243, added:'2025-05-13', fr:"C'est trop cher",              en:"It's too expensive",             cat:'travel'},
    {id:244, added:'2025-05-13', fr:"Je prends ça",                 en:"I'll take this",                 cat:'travel'},
    {id:245, added:'2025-05-13', fr:"Je regarde, merci",            en:"I'm just looking, thanks",       cat:'travel'},
    {id:246, added:'2025-05-13', fr:"Vous acceptez les cartes ?",   en:"Do you accept cards?",           cat:'travel'},
    // Emergency
    {id:247, added:'2025-05-13', fr:"Au secours !",                 en:"Help!",                          cat:'travel'},
    {id:248, added:'2025-05-13', fr:"Appelez la police !",          en:"Call the police!",               cat:'travel'},
    {id:249, added:'2025-05-13', fr:"J'ai besoin d'un médecin",    en:"I need a doctor",                cat:'travel'},
    {id:250, added:'2025-05-13', fr:"Je suis perdu(e)",             en:"I'm lost",                       cat:'travel'},
    {id:251, added:'2025-05-13', fr:"Où est l'hôpital ?",          en:"Where is the hospital?",         cat:'travel'},
    {id:252, added:'2025-05-13', fr:"J'ai mal ici",                en:"It hurts here",                  cat:'travel'},
    {id:253, added:'2025-05-13', fr:"Appelez une ambulance !",      en:"Call an ambulance!",             cat:'travel'},
  ],

  // ── DESCRIPTORS VOCAB ─────────────────────────────────────────
  descriptors: [
    // Colours (no article — used as adjectives)
    {id:254, added:'2025-05-13', fr:'rouge',        en:'red',           g:null, noArticle:true, cat:'descriptors'},
    {id:255, added:'2025-05-13', fr:'bleu / bleue', en:'blue',          g:null, noArticle:true, cat:'descriptors'},
    {id:256, added:'2025-05-13', fr:'vert / verte', en:'green',         g:null, noArticle:true, cat:'descriptors'},
    {id:257, added:'2025-05-13', fr:'jaune',        en:'yellow',        g:null, noArticle:true, cat:'descriptors'},
    {id:258, added:'2025-05-13', fr:'orange',       en:'orange',        g:null, noArticle:true, cat:'descriptors'},
    {id:259, added:'2025-05-13', fr:'noir / noire', en:'black',         g:null, noArticle:true, cat:'descriptors'},
    {id:260, added:'2025-05-13', fr:'blanc / blanche', en:'white',      g:null, noArticle:true, cat:'descriptors'},
    {id:261, added:'2025-05-13', fr:'gris / grise', en:'grey',          g:null, noArticle:true, cat:'descriptors'},
    {id:262, added:'2025-05-13', fr:'rose',         en:'pink',          g:null, noArticle:true, cat:'descriptors'},
    {id:263, added:'2025-05-13', fr:'violet / violette', en:'purple',   g:null, noArticle:true, cat:'descriptors'},
    {id:264, added:'2025-05-13', fr:'brun / brune', en:'brown',         g:null, noArticle:true, cat:'descriptors'},
    // Adjectives
    {id:265, added:'2025-05-13', fr:'grand / grande',   en:'big / tall',     g:null, noArticle:true, cat:'descriptors'},
    {id:266, added:'2025-05-13', fr:'petit / petite',   en:'small / short',  g:null, noArticle:true, cat:'descriptors'},
    {id:267, added:'2025-05-13', fr:'bon / bonne',      en:'good',           g:null, noArticle:true, cat:'descriptors'},
    {id:268, added:'2025-05-13', fr:'mauvais / mauvaise',en:'bad',           g:null, noArticle:true, cat:'descriptors'},
    {id:269, added:'2025-05-13', fr:'cher / chère',     en:'expensive',      g:null, noArticle:true, cat:'descriptors'},
    {id:270, added:'2025-05-13', fr:'gratuit / gratuite',en:'free',          g:null, noArticle:true, cat:'descriptors'},
    {id:271, added:'2025-05-13', fr:'rapide',           en:'fast / quick',   g:null, noArticle:true, cat:'descriptors'},
    {id:272, added:'2025-05-13', fr:'lent / lente',     en:'slow',           g:null, noArticle:true, cat:'descriptors'},
    {id:273, added:'2025-05-13', fr:'ouvert / ouverte', en:'open',           g:null, noArticle:true, cat:'descriptors'},
    {id:274, added:'2025-05-13', fr:'fermé / fermée',   en:'closed',         g:null, noArticle:true, cat:'descriptors'},
    {id:275, added:'2025-05-13', fr:'nouveau / nouvelle',en:'new',           g:null, noArticle:true, cat:'descriptors'},
    {id:276, added:'2025-05-13', fr:'vieux / vieille',  en:'old',            g:null, noArticle:true, cat:'descriptors'},
    {id:277, added:'2025-05-13', fr:'propre',           en:'clean',          g:null, noArticle:true, cat:'descriptors'},
    {id:278, added:'2025-05-13', fr:'sale',             en:'dirty',          g:null, noArticle:true, cat:'descriptors'},
    // Body parts
    {id:279, added:'2025-05-13', fr:'la tête',      en:'the head',       g:'f', cat:'descriptors'},
    {id:280, added:'2025-05-13', fr:'le bras',      en:'the arm',        g:'m', cat:'descriptors'},
    {id:281, added:'2025-05-13', fr:'la jambe',     en:'the leg',        g:'f', cat:'descriptors'},
    {id:282, added:'2025-05-13', fr:'la main',      en:'the hand',       g:'f', cat:'descriptors'},
    {id:283, added:'2025-05-13', fr:'le pied',      en:'the foot',       g:'m', cat:'descriptors'},
    {id:284, added:'2025-05-13', fr:'le dos',       en:'the back',       g:'m', cat:'descriptors'},
    {id:285, added:'2025-05-13', fr:'le ventre',    en:'the stomach',    g:'m', cat:'descriptors'},
    {id:286, added:'2025-05-13', fr:'la gorge',     en:'the throat',     g:'f', cat:'descriptors'},
    {id:287, added:'2025-05-13', fr:"l'œil",       en:'the eye',        g:'m', cat:'descriptors'},
    {id:288, added:'2025-05-13', fr:"l'oreille",   en:'the ear',        g:'f', cat:'descriptors'},
    {id:289, added:'2025-05-13', fr:'le nez',       en:'the nose',       g:'m', cat:'descriptors'},
    {id:290, added:'2025-05-13', fr:'la dent',      en:'the tooth',      g:'f', cat:'descriptors'},
    {id:291, added:'2025-05-13', fr:"l'épaule",    en:'the shoulder',   g:'f', cat:'descriptors'},
    {id:292, added:'2025-05-13', fr:'le genou',     en:'the knee',       g:'m', cat:'descriptors'},
    // Time expressions
    {id:293, added:'2025-05-13', fr:"aujourd'hui",  en:'today',          g:null, noArticle:true, cat:'descriptors'},
    {id:294, added:'2025-05-13', fr:'demain',       en:'tomorrow',       g:null, noArticle:true, cat:'descriptors'},
    {id:295, added:'2025-05-13', fr:'hier',         en:'yesterday',      g:null, noArticle:true, cat:'descriptors'},
    {id:296, added:'2025-05-13', fr:'maintenant',   en:'now',            g:null, noArticle:true, cat:'descriptors'},
    {id:297, added:'2025-05-13', fr:'bientôt',      en:'soon',           g:null, noArticle:true, cat:'descriptors'},
    {id:298, added:'2025-05-13', fr:'tard',         en:'late',           g:null, noArticle:true, cat:'descriptors'},
    {id:299, added:'2025-05-13', fr:'tôt',          en:'early',          g:null, noArticle:true, cat:'descriptors'},
    {id:300, added:'2025-05-13', fr:'toujours',     en:'always',         g:null, noArticle:true, cat:'descriptors'},
    {id:301, added:'2025-05-13', fr:'jamais',       en:'never',          g:null, noArticle:true, cat:'descriptors'},
    {id:302, added:'2025-05-13', fr:'souvent',      en:'often',          g:null, noArticle:true, cat:'descriptors'},
    {id:303, added:'2025-05-13', fr:'parfois',      en:'sometimes',      g:null, noArticle:true, cat:'descriptors'},
    {id:304, added:'2025-05-13', fr:'déjà',         en:'already',        g:null, noArticle:true, cat:'descriptors'},
  ],

  // ── QUESTION WORDS ────────────────────────────────────────────
  questions: [
    // Vocab cards
    {id:305, added:'2025-05-13', fr:'qui',        en:'who',            g:null, noArticle:true, cat:'questions'},
    {id:306, added:'2025-05-13', fr:'quoi / que', en:'what',           g:null, noArticle:true, cat:'questions'},
    {id:307, added:'2025-05-13', fr:'où',         en:'where',          g:null, noArticle:true, cat:'questions'},
    {id:308, added:'2025-05-13', fr:'quand',      en:'when',           g:null, noArticle:true, cat:'questions'},
    {id:309, added:'2025-05-13', fr:'comment',    en:'how',            g:null, noArticle:true, cat:'questions'},
    {id:310, added:'2025-05-13', fr:'pourquoi',   en:'why',            g:null, noArticle:true, cat:'questions'},
    {id:311, added:'2025-05-13', fr:'combien',    en:'how much / how many', g:null, noArticle:true, cat:'questions'},
    {id:312, added:'2025-05-13', fr:'lequel / laquelle', en:'which one', g:null, noArticle:true, cat:'questions'},
    // Common question phrases
    {id:313, added:'2025-05-13', fr:"Où est… ?",                   en:"Where is…?",                    cat:'questions'},
    {id:314, added:'2025-05-13', fr:"Où sont… ?",                  en:"Where are…?",                   cat:'questions'},
    {id:315, added:'2025-05-13', fr:"Qu'est-ce que c'est ?",       en:"What is this?",                 cat:'questions'},
    {id:316, added:'2025-05-13', fr:"Comment tu t'appelles ?",     en:"What's your name? (informal)",  cat:'questions'},
    {id:317, added:'2025-05-13', fr:"Comment vous appelez-vous ?", en:"What's your name? (formal)",    cat:'questions'},
    {id:318, added:'2025-05-13', fr:"Quel âge as-tu ?",            en:"How old are you? (informal)",   cat:'questions'},
    {id:319, added:'2025-05-13', fr:"D'où viens-tu ?",             en:"Where are you from? (informal)",cat:'questions'},
    {id:320, added:'2025-05-13', fr:"Qu'est-ce que tu fais ?",     en:"What are you doing?",           cat:'questions'},
    {id:321, added:'2025-05-13', fr:"Tu parles français ?",        en:"Do you speak French?",          cat:'questions'},
    {id:322, added:'2025-05-13', fr:"C'est quoi ton numéro ?",     en:"What's your number?",           cat:'questions'},
    {id:323, added:'2025-05-13', fr:"C'est combien, l'entrée ?",   en:"How much is admission?",        cat:'questions'},
    {id:324, added:'2025-05-13', fr:"Pourquoi pas ?",              en:"Why not?",                      cat:'questions'},
    {id:325, added:'2025-05-13', fr:"Quand est-ce que ça ouvre ?", en:"When does it open?",            cat:'questions'},
    {id:326, added:'2025-05-13', fr:"Comment on dit… en français ?",en:"How do you say… in French?",  cat:'questions'},
  ],

  // ── CONNECTORS & FUNCTION WORDS ───────────────────────────────
  connectors: [
    {id:327, added:'2025-05-13', fr:'mais',         en:'but',                 g:null, noArticle:true, cat:'connectors'},
    {id:328, added:'2025-05-13', fr:'ou',           en:'or',                  g:null, noArticle:true, cat:'connectors'},
    {id:329, added:'2025-05-13', fr:'et',           en:'and',                 g:null, noArticle:true, cat:'connectors'},
    {id:330, added:'2025-05-13', fr:'donc',         en:'so / therefore',      g:null, noArticle:true, cat:'connectors'},
    {id:331, added:'2025-05-13', fr:'car / parce que', en:'because',          g:null, noArticle:true, cat:'connectors'},
    {id:332, added:'2025-05-13', fr:'aussi',        en:'also / too',          g:null, noArticle:true, cat:'connectors'},
    {id:333, added:'2025-05-13', fr:'avec',         en:'with',                g:null, noArticle:true, cat:'connectors'},
    {id:334, added:'2025-05-13', fr:'sans',         en:'without',             g:null, noArticle:true, cat:'connectors'},
    {id:335, added:'2025-05-13', fr:'pour',         en:'for / in order to',   g:null, noArticle:true, cat:'connectors'},
    {id:336, added:'2025-05-13', fr:'pendant',      en:'during / while',      g:null, noArticle:true, cat:'connectors'},
    {id:337, added:'2025-05-13', fr:'depuis',       en:'since / for',         g:null, noArticle:true, cat:'connectors'},
    {id:338, added:'2025-05-13', fr:'avant',        en:'before',              g:null, noArticle:true, cat:'connectors'},
    {id:339, added:'2025-05-13', fr:'après',        en:'after',               g:null, noArticle:true, cat:'connectors'},
    {id:340, added:'2025-05-13', fr:'ici',          en:'here',                g:null, noArticle:true, cat:'connectors'},
    {id:341, added:'2025-05-13', fr:'là',           en:'there',               g:null, noArticle:true, cat:'connectors'},
    {id:342, added:'2025-05-13', fr:'quelque chose',en:'something',           g:null, noArticle:true, cat:'connectors'},
    {id:343, added:'2025-05-13', fr:'rien',         en:'nothing',             g:null, noArticle:true, cat:'connectors'},
    {id:344, added:'2025-05-13', fr:'tout / toute', en:'everything / all',    g:null, noArticle:true, cat:'connectors'},
    {id:345, added:'2025-05-13', fr:'très',         en:'very',                g:null, noArticle:true, cat:'connectors'},
    {id:346, added:'2025-05-13', fr:'beaucoup',     en:'a lot / many',        g:null, noArticle:true, cat:'connectors'},
    {id:347, added:'2025-05-13', fr:'trop',         en:'too much / too many', g:null, noArticle:true, cat:'connectors'},
    {id:348, added:'2025-05-13', fr:'peu',          en:'little / few',        g:null, noArticle:true, cat:'connectors'},
    {id:349, added:'2025-05-13', fr:'encore',       en:'again / still / more',g:null, noArticle:true, cat:'connectors'},
    {id:350, added:'2025-05-13', fr:'seulement',    en:'only',                g:null, noArticle:true, cat:'connectors'},
  ],

  // ── NEW VERB INFINITIVES ──────────────────────────────────────
  // (these are added to existing verbs array conceptually but as new entries)
  verbs2: [
    {id:351, added:'2025-05-13', fr:'faire',      en:'to do / to make',  cat:'irregular'},
    {id:352, added:'2025-05-13', fr:'dire',       en:'to say / to tell', cat:'irregular'},
    {id:353, added:'2025-05-13', fr:'voir',       en:'to see',           cat:'irregular'},
    {id:354, added:'2025-05-13', fr:'savoir',     en:'to know (a fact)', cat:'irregular'},
    {id:355, added:'2025-05-13', fr:'venir',      en:'to come',          cat:'irregular'},
    {id:356, added:'2025-05-13', fr:'prendre',    en:'to take',          cat:'irregular'},
    {id:357, added:'2025-05-13', fr:'partir',     en:'to leave',         cat:'irregular'},
    {id:358, added:'2025-05-13', fr:'mettre',     en:'to put / to place',cat:'irregular'},
    {id:359, added:'2025-05-13', fr:'chercher',   en:'to look for',      cat:'regular'},
    {id:360, added:'2025-05-13', fr:'aimer',      en:'to like / to love',cat:'regular'},
    {id:361, added:'2025-05-13', fr:'parler',     en:'to speak / to talk',cat:'regular'},
    {id:362, added:'2025-05-13', fr:'habiter',    en:'to live (somewhere)',cat:'regular'},
    {id:363, added:'2025-05-13', fr:'travailler', en:'to work',          cat:'regular'},
    {id:364, added:'2025-05-13', fr:'acheter',    en:'to buy',           cat:'regular'},
    {id:365, added:'2025-05-13', fr:'connaître',  en:'to know (a person/place)',cat:'irregular'},
  ],
};
// ═══════════════════════════════════════════════════════════════
// FORMAT GUIDE
// ═══════════════════════════════════════════════════════════════
//
// NEXT AVAILABLE ID: 366
//
// ID RULES:
//   • Never change or reuse an existing id — ever
//   • New cards: use next available id, update comment above
//   • To remove: add disabled:true — do NOT delete
//   • Edit base/fr/en/g freely — only id is the stable key
//
// ADDED DATE: 'YYYY-MM-DD' — set to today when adding cards
//
// VOCAB ENTRY:
//   {id:N, added:'YYYY-MM-DD', base:'mot', enBase:'word',
//    g:'m'|'f'|'pm'|'pf'|null,
//    noArticle:true, pluralOnly:true, vowelStart:true, disabled:true}
//
// PHRASE/TRAVEL/QUESTION ENTRY:
//   {id:N, added:'YYYY-MM-DD', fr:'French', en:'English', cat:'...'}
//
// CATEGORIES: vocab|nav|greet|weather|jobs|irregular|regular|
//             travel|descriptors|questions|connectors
