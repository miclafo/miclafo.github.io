// ═══════════════════════════════════════════════════════════════
// CARDS DATABASE
// ═══════════════════════════════════════════════════════════════
//
// NEXT AVAILABLE ID: 455
// NEXT A2 ID BLOCK: 500+
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
    {id:1, p:1, level:"a1", known:true, added:'2025-05-10',  base:'sous',            enBase:'under / beneath',        g:null, noArticle:true, cat:'ep3'},
    {id:2, p:1, level:"a1", known:true, added:'2025-05-10',  base:'sur',             enBase:'on / on top of',         g:null, noArticle:true, cat:'ep3'},
    {id:3, p:1, level:"a1", known:true, added:'2025-05-10',  base:'devant',          enBase:'in front of',            g:null, noArticle:true, cat:'ep3'},
    {id:4, p:1, level:"a1", known:true, added:'2025-05-10',  base:'derrière',        enBase:'behind',                 g:null, noArticle:true, cat:'ep3'},
    {id:5, p:1, level:"a1", known:true, added:'2025-05-10',  base:'dans',            enBase:'in / inside',            g:null, noArticle:true, cat:'ep3'},

    // Masculine nouns
    {id:6, p:2, level:"a1", added:'2025-05-10',  base:'calendrier',      enBase:'calendar',               g:'m', cat:'ep14'},
    {id:7, p:2, level:"a1", added:'2025-05-10',  base:'bac à recyclage', enBase:'recycling bin',          g:'m', cat:'ep14'},
    {id:8, p:2, level:"a1", added:'2025-05-10',  base:'tableau',         enBase:'board / chalkboard',     g:'m', cat:'ep14'},
    {id:9, p:2, level:"a1", added:'2025-05-10',  base:'bureau',          enBase:'desk',                   g:'m', cat:'ep14'},
    {id:10, p:2, level:"a1", added:'2025-05-10', base:'parapluie',       enBase:'umbrella',               g:'m', cat:'ep14'},
    {id:11, p:3, level:"a1", added:'2025-05-10', base:'manteau',         enBase:'coat',                   g:'m', cat:'ep14'},
    {id:12, p:3, level:"a1", added:'2025-05-10', base:'sac à dos',       enBase:'backpack',               g:'m', cat:'ep14'},
    {id:13, p:3, level:"a1", added:'2025-05-10', base:'sac à main',      enBase:'purse / handbag',        g:'m', cat:'ep14'},
    {id:14, p:2, level:"a1", added:'2025-05-10', base:'cellulaire',      enBase:'cell phone',             g:'m', cat:'ep14'},
    {id:15, p:3, level:"a1", added:'2025-05-10', base:'étui à crayons',  enBase:'pencil case',            g:'m', cat:'ep14'},
    {id:16, p:2, level:"a1", added:'2025-05-10', base:'stylo',           enBase:'pen',                    g:'m', cat:'ep14'},
    {id:17, p:2, level:"a1", added:'2025-05-10', base:'cahier',          enBase:'notebook',               g:'m', cat:'ep14'},
    {id:18, p:2, level:"a1", added:'2025-05-10', base:'guichet',         enBase:'counter / wicket',       g:'m', cat:'ep14'},

    // Masculine vowel-start (l' article)
    {id:19, p:2, level:"a1", added:'2025-05-10', base:'ordinateur',      enBase:'computer',               g:'m', vowelStart:true, cat:'ep14'},
    {id:20, p:2, level:"a1", added:'2025-05-10', base:'ascenseur',       enBase:'elevator',               g:'m', vowelStart:true, cat:'ep14'},
    {id:21, p:2, level:"a1", added:'2025-05-10', base:'accueil',         enBase:'reception / front desk', g:'m', vowelStart:true, cat:'ep14'},
    {id:22, p:2, level:"a1", added:'2025-05-10', base:'abreuvoir',       enBase:'water fountain',         g:'m', vowelStart:true, cat:'ep14'},
    {id:23, p:3, level:"a1", added:'2025-05-10', base:'éclair',          enBase:'lightning',              g:'m', vowelStart:true, cat:'ep14'},
    {id:24, p:3, level:"a1", added:'2025-05-10', base:'hiver',           enBase:'winter',                 g:'m', vowelStart:true, cat:'ep14'},
    {id:25, p:4, level:"a1", added:'2025-05-10', base:'été',             enBase:'summer',                 g:'m', vowelStart:true, cat:'ep14'},
    {id:26, p:4, level:"a1", added:'2025-05-10', base:'automne',         enBase:'autumn / fall',          g:'m', vowelStart:true, cat:'ep3'},

    // Feminine nouns
    {id:27, p:3, level:"a1", added:'2025-05-10', base:'poubelle',        enBase:'garbage can',            g:'f', cat:'ep3'},
    {id:28, p:3, level:"a1", added:'2025-05-10', base:'chaise',          enBase:'chair',                  g:'f', cat:'ep3'},
    {id:29, p:3, level:"a1", added:'2025-05-10', base:'lampe',           enBase:'lamp',                   g:'f', cat:'ep3'},
    {id:30, p:3, level:"a1", added:'2025-05-10', base:'affiche',         enBase:'poster',                 g:'f', cat:'ep3'},
    {id:31, p:3, level:"a1", added:'2025-05-10', base:'plante',          enBase:'plant',                  g:'f', cat:'ep3'},
    {id:32, p:3, level:"a1", added:'2025-05-10', base:'porte',           enBase:'door',                   g:'f', cat:'ep3'},
    {id:33, p:3, level:"a1", added:'2025-05-10', base:'fenêtre',         enBase:'window',                 g:'f', cat:'ep3'},
    {id:34, p:3, level:"a1", added:'2025-05-10', base:'imprimante',      enBase:'printer',                g:'f', cat:'ep3'},
    {id:35, p:3, level:"a1", added:'2025-05-10', base:'souris',          enBase:'mouse',                  g:'f', cat:'ep3'},
    {id:36, p:3, level:"a1", added:'2025-05-10', base:'veste',           enBase:'jacket',                 g:'f', cat:'ep3'},
    {id:37, p:3, level:"a1", added:'2025-05-10', base:'étagère',         enBase:'shelf',                  g:'f', cat:'ep3'},
    {id:38, p:3, level:"a1", added:'2025-05-10', base:'table',           enBase:'table',                  g:'f', cat:'ep3'},
    {id:39, p:3, level:"a1", added:'2025-05-10', base:'efface',          enBase:'eraser',                 g:'f', cat:'ep3'},
    {id:40, p:3, level:"a1", added:'2025-05-10', base:'montre',          enBase:'watch',                  g:'f', cat:'ep3'},
    {id:41, p:3, level:"a1", added:'2025-05-10', base:'tablette électronique', enBase:'electronic tablet',g:'f', cat:'ep3'},
    {id:42, p:3, level:"a1", added:'2025-05-10', base:'température',     enBase:'temperature',            g:'f', cat:'ep3'},
    {id:43, p:3, level:"a1", added:'2025-05-10', base:'météo',           enBase:'forecast',               g:'f', cat:'ep3'},
    {id:44, p:3, level:"a1", added:'2025-05-10', base:'saison',          enBase:'season',                 g:'f', cat:'ep3'},
    {id:45, p:3, level:"a1", added:'2025-05-10', base:'pluie',           enBase:'rain',                   g:'f', cat:'ep3'},
    {id:46, p:3, level:"a1", added:'2025-05-10', base:'neige',           enBase:'snow',                   g:'f', cat:'ep3'},
    {id:47, p:3, level:"a1", added:'2025-05-10', base:'tempête',         enBase:'storm',                  g:'f', cat:'ep3'},
    {id:48, p:3, level:"a1", added:'2025-05-10', base:'glace',           enBase:'ice',                    g:'f', cat:'ep3'},

    // Feminine vowel-start
    {id:49, p:5, level:"a1", added:'2025-05-10', base:'efface',          enBase:'eraser',                 g:'f', vowelStart:true, disabled:true, cat:'ep3'}, // duplicate of id:39, kept for id reservation

    // Masculine weather/nav (non-vowel)
    {id:50, p:3, level:"a1", added:'2025-05-10', base:'soleil',          enBase:'sun',                    g:'m', cat:'ep3'},
    {id:51, p:3, level:"a1", added:'2025-05-10', base:'vent',            enBase:'wind',                   g:'m', cat:'ep3'},
    {id:52, p:3, level:"a1", added:'2025-05-10', base:'nuage',           enBase:'cloud',                  g:'m', cat:'ep3'},
    {id:53, p:3, level:"a1", added:'2025-05-10', base:'brouillard',      enBase:'fog',                    g:'m', cat:'ep3'},
    {id:54, p:3, level:"a1", added:'2025-05-10', base:'givre',           enBase:'frost',                  g:'m', cat:'ep3'},
    {id:55, p:3, level:"a1", added:'2025-05-10', base:'tonnerre',        enBase:'thunder',                g:'m', cat:'ep3'},
    {id:56, p:3, level:"a1", added:'2025-05-10', base:'printemps',       enBase:'spring',                 g:'m', cat:'ep3'},
    {id:57, p:3, level:"a1", added:'2025-05-10', base:'degré',           enBase:'degree',                 g:'m', cat:'ep3'},

    // Nav adverbs (no article)
    {id:58, p:1, level:"a1", known:true, added:'2025-05-10', base:'gauche',          enBase:'left',                   g:null, noArticle:true, cat:'ep6'},
    {id:59, p:1, level:"a1", known:true, added:'2025-05-10', base:'droite',          enBase:'right',                  g:null, noArticle:true, cat:'ep6'},
    {id:60, p:1, level:"a1", added:'2025-05-10', base:'en face',         enBase:'across / facing',        g:null, noArticle:true, cat:'ep6'},
    {id:61, p:1, level:"a1", added:'2025-05-10', base:'à côté',          enBase:'beside / next to',       g:null, noArticle:true, cat:'ep6'},
    {id:62, p:1, level:"a1", added:'2025-05-10', base:'au bout',         enBase:'at the end',             g:null, noArticle:true, cat:'ep6'},
    {id:63, p:1, level:"a1", added:'2025-05-10', base:'loin',            enBase:'far',                    g:null, noArticle:true, cat:'ep6'},
    {id:64, p:1, level:"a1", added:'2025-05-10', base:'près',            enBase:'near / close',           g:null, noArticle:true, cat:'ep6'},
    {id:65, p:1, level:"a1", added:'2025-05-10', base:'au-dessus',       enBase:'above / over',           g:null, noArticle:true, cat:'ep6'},

    // Plural only
    {id:66, p:3, level:"a1", added:'2025-05-10', base:'clés',            enBase:'keys',                   g:'pf', pluralOnly:true, cat:'ep6'},
    {id:67, p:3, level:"a1", added:'2025-05-10', base:'livres',          enBase:'books',                  g:'pm', pluralOnly:true, cat:'ep6'},
    {id:68, p:3, level:"a1", added:'2025-05-10', base:'souliers',        enBase:'shoes',                  g:'pm', pluralOnly:true, cat:'ep6'},
    {id:69, p:3, level:"a1", added:'2025-05-10', base:'lunettes',        enBase:'glasses',                g:'pf', pluralOnly:true, cat:'ep6'},
    {id:70, p:3, level:"a1", added:'2025-05-10', base:'crayons',         enBase:'pencils',                g:'pm', pluralOnly:true, cat:'ep6'},
    {id:71, p:3, level:"a1", added:'2025-05-10', base:'dictionnaires',   enBase:'dictionaries',           g:'pm', pluralOnly:true, cat:'ep6'},
    {id:72, p:3, level:"a1", added:'2025-05-10', base:'feuilles',        enBase:'sheets of paper',        g:'pf', pluralOnly:true, cat:'ep6'},
    {id:73, p:3, level:"a1", added:'2025-05-10', base:'escaliers',       enBase:'stairs',                 g:'pm', pluralOnly:true, cat:'ep6'},
  ],

  // ── STATIC PHRASE CARDS ───────────────────────────────────────
  phrases: [
    // Greetings
    {id:101, p:1, level:"a1", known:true, added:'2025-05-10', fr:'Allô !',                           en:"Hi! / Hey!", cat:'ep1'},
    {id:102, p:1, level:"a1", known:true, added:'2025-05-10', fr:'Bonjour',                          en:"Good morning", cat:'ep1'},
    {id:103, p:1, level:"a1", known:true, added:'2025-05-10', fr:'Bonsoir',                          en:"Good evening", cat:'ep1'},
    {id:104, p:1, level:"a1", known:true, added:'2025-05-10', fr:'Bonne nuit',                       en:"Good night", cat:'ep1'},
    {id:105, p:1, level:"a1", added:'2025-05-10', fr:'Comment allez-vous ?',             en:"How are you? (formal)", cat:'ep1'},
    {id:106, p:1, level:"a1", added:'2025-05-10', fr:'Comment ça va ?',                  en:"How are you? (informal)", cat:'ep1'},
    {id:107, p:1, level:"a1", known:true, added:'2025-05-10', fr:'Ça va bien',                       en:"I'm doing well", cat:'ep1'},
    {id:108, p:1, level:"a1", known:true, added:'2025-05-10', fr:'Pas pire',                         en:"Not bad / Pretty good", cat:'ep1'},
    {id:109, p:1, level:"a1", added:'2025-05-10', fr:'Et toi ? / Et vous ?',             en:"And you? (informal / formal)", cat:'ep1'},
    {id:110, p:1, level:"a1", added:'2025-05-10', fr:"Je m'appelle…",                    en:"My name is…", cat:'ep1'},
    {id:111, p:1, level:"a1", added:'2025-05-10', fr:'Enchanté(e)',                      en:"Nice to meet you", cat:'ep1'},
    {id:112, p:1, level:"a1", added:'2025-05-10', fr:'À plus tard',                      en:"See you later", cat:'ep1'},
    {id:113, p:1, level:"a1", added:'2025-05-10', fr:'À demain',                         en:"See you tomorrow", cat:'ep1'},
    {id:114, p:1, level:"a1", added:'2025-05-10', fr:'Bonne journée',                    en:"Have a good day", cat:'ep1'},
    {id:115, p:1, level:"a1", added:'2025-05-10', fr:'Bonne soirée',                     en:"Have a good evening", cat:'ep1'},
    {id:116, p:1, level:"a1", added:'2025-05-10', fr:"S'il vous plaît / S'il te plaît",  en:"Please (formal / informal)", cat:'ep1'},
    {id:117, p:1, level:"a1", known:true, added:'2025-05-10', fr:'Merci',                            en:"Thank you", cat:'ep1'},
    {id:118, p:1, level:"a1", known:true, added:'2025-05-10', fr:'De rien / Bienvenue',              en:"You're welcome", cat:'ep1'},
    {id:119, p:1, level:"a1", added:'2025-05-10', fr:'Je ne comprends pas',              en:"I don't understand", cat:'ep1'},

    // Weather phrases
    {id:120, p:2, level:"a1", added:'2025-05-10', fr:'Quel temps fait-il ?',             en:"What's the weather like?", cat:'ep14'},
    {id:121, p:2, level:"a1", added:'2025-05-10', fr:'Il fait beau',                     en:"It's nice out", cat:'ep14'},
    {id:122, p:2, level:"a1", added:'2025-05-10', fr:'Il fait froid',                    en:"It's cold", cat:'ep14'},
    {id:123, p:2, level:"a1", added:'2025-05-10', fr:'Il fait chaud',                    en:"It's hot", cat:'ep14'},
    {id:124, p:2, level:"a1", added:'2025-05-10', fr:'Il pleut',                         en:"It's raining", cat:'ep14'},
    {id:125, p:2, level:"a1", added:'2025-05-10', fr:'Il neige',                         en:"It's snowing", cat:'ep14'},
    {id:126, p:2, level:"a1", added:'2025-05-10', fr:'Il fait du vent / Il vente',       en:"It's windy", cat:'ep14'},
    {id:127, p:2, level:"a1", added:'2025-05-10', fr:'Il est nuageux',                   en:"It's cloudy", cat:'ep14'},
    {id:128, p:2, level:"a1", added:'2025-05-10', fr:'Il fait soleil',                   en:"It's sunny", cat:'ep14'},
    {id:129, p:2, level:"a1", added:'2025-05-10', fr:'Il fait frette / Il gèle',         en:"It's freezing", cat:'ep14'},
    {id:130, p:2, level:"a1", added:'2025-05-10', fr:"Il y a une tempête",               en:"There's a storm", cat:'ep14'},
    {id:131, p:2, level:"a1", added:'2025-05-10', fr:"Il fait beau aujourd'hui",         en:"The weather is nice today", cat:'ep14'},

    // Nav phrases
    {id:132, p:2, level:"a1", added:'2025-05-10', fr:"L'ascenseur est à gauche",         en:"The elevator is to the left", cat:'ep6'},
    {id:133, p:2, level:"a1", added:'2025-05-10', fr:'Les escaliers sont à droite',      en:"The stairs are to the right", cat:'ep6'},
    {id:134, p:2, level:"a1", added:'2025-05-10', fr:"L'accueil est tout droit",         en:"The reception is straight ahead", cat:'ep6'},
    {id:135, p:2, level:"a1", added:'2025-05-10', fr:'La sortie est au bout',            en:"The exit is at the end", cat:'ep6'},
    {id:136, p:2, level:"a1", added:'2025-05-10', fr:"La salle de bain est près d'ici",  en:"The bathroom is nearby", cat:'ep6'},
    {id:137, p:2, level:"a1", added:'2025-05-10', fr:"C'est en face de l'ascenseur",     en:"It's across from the elevator", cat:'ep6'},
    {id:138, p:2, level:"a1", added:'2025-05-10', fr:"C'est à côté des escaliers",       en:"It's next to the stairs", cat:'ep6'},
    {id:139, p:2, level:"a1", added:'2025-05-10', fr:"C'est au-dessus du guichet",       en:"It's above the counter", cat:'ep6'},
    {id:140, p:2, level:"a1", added:'2025-05-10', fr:"C'est loin d'ici",                 en:"It's far from here", cat:'ep6'},
  ],

  // ── JOB / PROFESSION VOCAB ────────────────────────────────────
  // Gendered pairs = separate cards with separate probabilities
  jobs: [
    {id:151, p:3, level:"a1", added:'2025-05-10', fr:"un infirmier",     en:"a nurse (male)",              g:'m', cat:'ep1'},
    {id:152, p:3, level:"a1", added:'2025-05-10', fr:"une infirmière",   en:"a nurse (female)",            g:'f', cat:'ep1'},
    {id:153, p:3, level:"a1", added:'2025-05-10', fr:"un médecin",       en:"a doctor (male)",             g:'m', cat:'ep1'},
    {id:154, p:3, level:"a1", added:'2025-05-10', fr:"une médecin",      en:"a doctor (female)",           g:'f', cat:'ep1'},
    {id:155, p:3, level:"a1", added:'2025-05-10', fr:"un enseignant",        en:"a teacher (male)",            g:'m', cat:'ep1'},
    {id:156, p:3, level:"a1", added:'2025-05-10', fr:"une enseignante",      en:"a teacher (female)",          g:'f', cat:'ep1'},
    {id:157, p:3, level:"a1", added:'2025-05-10', fr:"un étudiant",      en:"a student (male)",            g:'m', cat:'ep1'},
    {id:158, p:3, level:"a1", added:'2025-05-10', fr:"une étudiante",    en:"a student (female)",          g:'f', cat:'ep1'},
    {id:159, p:3, level:"a1", added:'2025-05-10', fr:"un ingénieur",     en:"an engineer (male)",          g:'m', cat:'ep1'},
    {id:160, p:3, level:"a1", added:'2025-05-10', fr:"une ingénieure",   en:"an engineer (female)",        g:'f', cat:'ep1'},
    {id:161, p:3, level:"a1", added:'2025-05-10', fr:"un avocat",        en:"a lawyer (male)",             g:'m', cat:'ep1'},
    {id:162, p:3, level:"a1", added:'2025-05-10', fr:"une avocate",      en:"a lawyer (female)",           g:'f', cat:'ep1'},
    {id:163, p:3, level:"a1", added:'2025-05-10', fr:"un comptable",     en:"an accountant (male)",        g:'m', cat:'ep1'},
    {id:164, p:3, level:"a1", added:'2025-05-10', fr:"une comptable",    en:"an accountant (female)",      g:'f', cat:'ep1'},
    {id:165, p:3, level:"a1", added:'2025-05-10', fr:"un cuisinier",     en:"a cook (male)",               g:'m', cat:'ep1'},
    {id:166, p:3, level:"a1", added:'2025-05-10', fr:"une cuisinière",   en:"a cook (female)",             g:'f', cat:'ep1'},
    {id:167, p:3, level:"a1", added:'2025-05-10', fr:"un serveur",       en:"a server (male)",             g:'m', cat:'ep1'},
    {id:168, p:3, level:"a1", added:'2025-05-10', fr:"une serveuse",     en:"a server (female)",           g:'f', cat:'ep1'},
    {id:169, p:3, level:"a1", added:'2025-05-10', fr:"un directeur",     en:"a manager (male)",            g:'m', cat:'ep1'},
    {id:170, p:3, level:"a1", added:'2025-05-10', fr:"une directrice",   en:"a manager (female)",          g:'f', cat:'ep1'},
    {id:171, p:3, level:"a1", added:'2025-05-10', fr:"un développeur",   en:"a developer (male)",          g:'m', cat:'ep1'},
    {id:172, p:3, level:"a1", added:'2025-05-10', fr:"une développeuse", en:"a developer (female)",        g:'f', cat:'ep1'},
    {id:173, p:3, level:"a1", added:'2025-05-10', fr:"un policier",      en:"a police officer (male)",     g:'m', cat:'ep1'},
    {id:174, p:3, level:"a1", added:'2025-05-10', fr:"une policière",    en:"a police officer (female)",   g:'f', cat:'ep1'},
  ],


  // ── VERB INFINITIVES ──────────────────────────────────────────
  // These appear as standalone vocab cards (to go = aller etc.)
  verbs: [
    // Irregular verbs
    {id:185, p:1, level:"a1", added:'2025-05-10', fr:'aller',    en:'to go', cat:'ep6'},
    {id:186, p:1, level:"a1", added:'2025-05-10', fr:'devoir',   en:'to have to / must', cat:'ep1'},
    {id:187, p:1, level:"a1", added:'2025-05-10', fr:'pouvoir',  en:'to be able to / can', cat:'ep1'},

    // Regular verbs
    {id:188, p:2, level:"a1", added:'2025-05-10', fr:'arriver',  en:'to arrive', cat:'ep1'},
    {id:189, p:5, level:"a1", added:'2025-05-10', fr:'boire',    en:'to drink', cat:'ep1'},
    {id:190, p:2, level:"a1", added:'2025-05-10', fr:'manger',   en:'to eat', cat:'ep7'},
    {id:191, p:2, level:"a1", added:'2025-05-10', fr:'dormir',   en:'to sleep', cat:'ep7'},
    {id:192, p:3, level:"a1", added:'2025-05-10', fr:'écrire',   en:'to write', cat:'ep7'},
    {id:193, p:3, level:"a1", added:'2025-05-10', fr:'écouter',  en:'to listen (to)', cat:'ep7'},
    {id:194, p:3, level:"a1", added:'2025-05-10', fr:'fumer',    en:'to smoke', cat:'ep7'},
    {id:195, p:3, level:"a1", added:'2025-05-10', fr:'lire',     en:'to read', cat:'ep7'},
    {id:196, p:3, level:"a1", added:'2025-05-10', fr:'texter',   en:'to text', cat:'ep7'},
  ],

  // ── PERMISSION PHRASES (static cards) ────────────────────────
  permission: [
    {id:197, p:3, level:"a1", added:'2025-05-10', fr:'Je peux…',                en:'I can… / I am able to…', cat:'ep7'},
    {id:198, p:3, level:"a1", added:'2025-05-10', fr:'Puis-je… ?',              en:'May I…? (formal)', cat:'ep7'},
    {id:199, p:3, level:"a1", added:'2025-05-10', fr:'Est-ce que je peux… ?',   en:'Can I…? (informal)', cat:'ep7'},
    {id:200, p:3, level:"a1", added:'2025-05-10', fr:"C'est possible de… ?",    en:'Is it possible to…?', cat:'ep7'},
    {id:201, p:3, level:"a1", added:'2025-05-10', fr:"C'est permis de… ?",      en:'Is it allowed / permitted to…?', cat:'ep7'},
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
    {id:202, p:2, level:"a1", added:'2025-05-13', fr:'le métro',          en:'the metro / subway',      g:'m', cat:'ep14'},
    {id:203, p:2, level:"a1", added:'2025-05-13', fr:'un métro',          en:'a metro / subway',        g:'m', cat:'ep14'},
    {id:204, p:2, level:"a1", added:'2025-05-13', fr:'un autobus',        en:'a bus',                   g:'m', cat:'ep14'},
    {id:205, p:2, level:"a1", added:'2025-05-13', fr:"un arrêt",         en:'a stop',                  g:'m', cat:'ep14'},
    {id:206, p:2, level:"a1", added:'2025-05-13', fr:'une station',       en:'a station',               g:'f', cat:'ep14'},
    {id:207, p:2, level:"a1", added:'2025-05-13', fr:'un billet',         en:'a ticket',                g:'m', cat:'ep14'},
    {id:208, p:2, level:"a1", added:'2025-05-13', fr:'une correspondance',en:'a transfer / connection', g:'f', cat:'ep14'},
    {id:209, p:2, level:"a1", added:'2025-05-13', fr:'un aller-retour',   en:'a return ticket',         g:'m', cat:'ep14'},
    {id:210, p:2, level:"a1", added:'2025-05-13', fr:'une voiture',       en:'a car',                   g:'f', cat:'ep14'},
    {id:211, p:5, level:"a1", added:'2025-05-13', fr:'un vélo',           en:'a bicycle',               g:'m', cat:'ep14'},
    {id:212, p:5, level:"a1", added:'2025-05-13', fr:'un avion',          en:'a plane',                 g:'m', cat:'ep14'},
    {id:213, p:2, level:"a1", added:'2025-05-13', fr:"un aéroport",      en:'an airport',              g:'m', cat:'ep14'},
    {id:214, p:2, level:"a1", added:'2025-05-13', fr:'un taxi',           en:'a taxi',                  g:'m', cat:'ep14'},
    // Hotel
    {id:215, p:3, level:"a1", added:'2025-05-13', fr:'une chambre',       en:'a room',                  g:'f', cat:'ep14'},
    {id:216, p:3, level:"a1", added:'2025-05-13', fr:'une réservation',   en:'a reservation',           g:'f', cat:'ep14'},
    {id:217, p:3, level:"a1", added:'2025-05-13', fr:"un étage",         en:'a floor / storey',        g:'m', cat:'ep14'},
    {id:218, p:3, level:"a1", added:'2025-05-13', fr:'une clé',           en:'a key',                   g:'f', cat:'ep14'},
    {id:219, p:3, level:"a1", added:'2025-05-13', fr:'un lit',            en:'a bed',                   g:'m', cat:'ep14'},
    {id:220, p:3, level:"a1", added:'2025-05-13', fr:'une salle de bain', en:'a bathroom',              g:'f', cat:'ep14'},
    {id:221, p:3, level:"a1", added:'2025-05-13', fr:'le déjeuner',       en:'breakfast / lunch',       g:'m', cat:'ep14'},
    {id:222, p:3, level:"a1", added:'2025-05-13', fr:'le wifi',           en:'wifi',                    g:'m', cat:'ep14'},
    {id:223, p:3, level:"a1", added:'2025-05-13', fr:"un hôtel",         en:'a hotel',                 g:'m', cat:'ep14'},
    // Buildings & places
    {id:224, p:2, level:"a1", added:'2025-05-13', fr:"une école",        en:'a school',                g:'f', cat:'ep6'},
    {id:225, p:2, level:"a1", added:'2025-05-13', fr:"un hôpital",       en:'a hospital',              g:'m', cat:'ep6'},
    {id:226, p:2, level:"a1", added:'2025-05-13', fr:'une pharmacie',     en:'a pharmacy',              g:'f', cat:'ep6'},
    {id:227, p:2, level:"a1", added:'2025-05-13', fr:"une épicerie",     en:'a grocery store',         g:'f', cat:'ep6'},
    {id:228, p:2, level:"a1", added:'2025-05-13', fr:'un restaurant',     en:'a restaurant',            g:'m', cat:'ep6'},
    {id:229, p:2, level:"a1", added:'2025-05-13', fr:'un café',           en:'a café',                  g:'m', cat:'ep6'},
    {id:230, p:2, level:"a1", added:'2025-05-13', fr:'une banque',        en:'a bank',                  g:'f', cat:'ep6'},
    {id:231, p:3, level:"a1", added:'2025-05-13', fr:'un bureau de poste',en:'a post office',           g:'m', cat:'ep6'},
    {id:232, p:3, level:"a1", added:'2025-05-13', fr:'un parc',           en:'a park',                  g:'m', cat:'ep6'},
    {id:233, p:3, level:"a1", added:'2025-05-13', fr:'une rue',           en:'a street',                g:'f', cat:'ep6'},
    {id:234, p:3, level:"a1", added:'2025-05-13', fr:'un quartier',       en:'a neighbourhood',         g:'m', cat:'ep6'},
    {id:235, p:3, level:"a1", added:'2025-05-13', fr:'une ville',         en:'a city',                  g:'f', cat:'ep6'},
    {id:236, p:3, level:"a1", added:'2025-05-13', fr:'un aéroport',       en:'an airport',              g:'m', cat:'ep6'},
    {id:237, p:3, level:"a1", added:'2025-05-13', fr:'une bibliothèque',  en:'a library',               g:'f', cat:'ep6'},
    {id:238, p:3, level:"a1", added:'2025-05-13', fr:'un supermarché',    en:'a supermarket',           g:'m', cat:'ep6'},
  ],

  // ── TRAVEL PHRASES (static) ────────────────────────────────────
  travel_phrases: [
    // Shopping
    {id:239, p:2, level:"a1", added:'2025-05-13', fr:"C'est combien ?",              en:"How much is it?", cat:'ep15'},
    {id:240, p:2, level:"a1", added:'2025-05-13', fr:"Je voudrais…",                 en:"I would like…", cat:'ep15'},
    {id:241, p:2, level:"a1", added:'2025-05-13', fr:"Avez-vous… ?",                 en:"Do you have…?", cat:'ep15'},
    {id:242, p:2, level:"a1", added:'2025-05-13', fr:"L'addition, s'il vous plaît",  en:"The bill, please", cat:'ep15'},
    {id:243, p:2, level:"a1", added:'2025-05-13', fr:"C'est trop cher",              en:"It's too expensive", cat:'ep15'},
    {id:244, p:2, level:"a1", added:'2025-05-13', fr:"Je prends ça",                 en:"I'll take this", cat:'ep15'},
    {id:245, p:2, level:"a1", added:'2025-05-13', fr:"Je regarde, merci",            en:"I'm just looking, thanks", cat:'ep15'},
    {id:246, p:2, level:"a1", added:'2025-05-13', fr:"Vous acceptez les cartes ?",   en:"Do you accept cards?", cat:'ep15'},
    // Emergency
    {id:247, p:1, level:"a1", added:'2025-05-13', fr:"Au secours !",                 en:"Help!", cat:'ep6'},
    {id:248, p:1, level:"a1", added:'2025-05-13', fr:"Appelez la police !",          en:"Call the police!", cat:'ep6'},
    {id:249, p:1, level:"a1", added:'2025-05-13', fr:"J'ai besoin d'un médecin",    en:"I need a doctor", cat:'ep6'},
    {id:250, p:1, level:"a1", added:'2025-05-13', fr:"Je suis perdu(e)",             en:"I'm lost", cat:'ep6'},
    {id:251, p:1, level:"a1", added:'2025-05-13', fr:"Où est l'hôpital ?",          en:"Where is the hospital?", cat:'ep6'},
    {id:252, p:1, level:"a1", added:'2025-05-13', fr:"J'ai mal ici",                en:"It hurts here", cat:'ep6'},
    {id:253, p:1, level:"a1", added:'2025-05-13', fr:"Appelez une ambulance !",      en:"Call an ambulance!", cat:'ep6'},
  ],

  // ── DESCRIPTORS VOCAB ─────────────────────────────────────────
  descriptors: [
    // Colours (no article — used as adjectives)
    {id:254, p:4, level:"a1", added:'2025-05-13', fr:'rouge',        en:'red',           g:null, noArticle:true, cat:'ep3'},
    {id:255, p:4, level:"a1", added:'2025-05-13', fr:'bleu / bleue', en:'blue',          g:null, noArticle:true, cat:'ep3'},
    {id:256, p:4, level:"a1", added:'2025-05-13', fr:'vert / verte', en:'green',         g:null, noArticle:true, cat:'ep3'},
    {id:257, p:4, level:"a1", added:'2025-05-13', fr:'jaune',        en:'yellow',        g:null, noArticle:true, cat:'ep3'},
    {id:258, p:4, level:"a1", added:'2025-05-13', fr:'orange',       en:'orange',        g:null, noArticle:true, cat:'ep3'},
    {id:259, p:4, level:"a1", added:'2025-05-13', fr:'noir / noire', en:'black',         g:null, noArticle:true, cat:'ep3'},
    {id:260, p:4, level:"a1", added:'2025-05-13', fr:'blanc / blanche', en:'white',      g:null, noArticle:true, cat:'ep3'},
    {id:261, p:4, level:"a1", added:'2025-05-13', fr:'gris / grise', en:'grey',          g:null, noArticle:true, cat:'ep3'},
    {id:262, p:4, level:"a1", added:'2025-05-13', fr:'rose',         en:'pink',          g:null, noArticle:true, cat:'ep3'},
    {id:263, p:4, level:"a1", added:'2025-05-13', fr:'violet / violette', en:'purple',   g:null, noArticle:true, cat:'ep3'},
    {id:264, p:4, level:"a1", added:'2025-05-13', fr:'brun / brune', en:'brown',         g:null, noArticle:true, cat:'ep3'},
    // Adjectives
    {id:265, p:4, level:"a1", added:'2025-05-13', fr:'grand / grande',   en:'big / tall',     g:null, noArticle:true, cat:'ep3'},
    {id:266, p:4, level:"a1", added:'2025-05-13', fr:'petit / petite',   en:'small / short',  g:null, noArticle:true, cat:'ep3'},
    {id:267, p:4, level:"a1", added:'2025-05-13', fr:'bon / bonne',      en:'good',           g:null, noArticle:true, cat:'ep3'},
    {id:268, p:4, level:"a1", added:'2025-05-13', fr:'mauvais / mauvaise',en:'bad',           g:null, noArticle:true, cat:'ep3'},
    {id:269, p:4, level:"a1", added:'2025-05-13', fr:'cher / chère',     en:'expensive',      g:null, noArticle:true, cat:'ep3'},
    {id:270, p:4, level:"a1", added:'2025-05-13', fr:'gratuit / gratuite',en:'free',          g:null, noArticle:true, cat:'ep3'},
    {id:271, p:4, level:"a1", added:'2025-05-13', fr:'rapide',           en:'fast / quick',   g:null, noArticle:true, cat:'ep3'},
    {id:272, p:4, level:"a1", added:'2025-05-13', fr:'lent / lente',     en:'slow',           g:null, noArticle:true, cat:'ep3'},
    {id:273, p:4, level:"a1", added:'2025-05-13', fr:'ouvert / ouverte', en:'open',           g:null, noArticle:true, cat:'ep3'},
    {id:274, p:4, level:"a1", added:'2025-05-13', fr:'fermé / fermée',   en:'closed',         g:null, noArticle:true, cat:'ep3'},
    {id:275, p:4, level:"a1", added:'2025-05-13', fr:'nouveau / nouvelle',en:'new',           g:null, noArticle:true, cat:'ep3'},
    {id:276, p:4, level:"a1", added:'2025-05-13', fr:'vieux / vieille',  en:'old',            g:null, noArticle:true, cat:'ep3'},
    {id:277, p:4, level:"a1", added:'2025-05-13', fr:'propre',           en:'clean',          g:null, noArticle:true, cat:'ep3'},
    {id:278, p:4, level:"a1", added:'2025-05-13', fr:'sale',             en:'dirty',          g:null, noArticle:true, cat:'ep3'},
    // Body parts
    {id:279, p:4, level:"a1", added:'2025-05-13', fr:'la tête',      en:'the head',       g:'f', cat:'ep13'},
    {id:280, p:4, level:"a1", added:'2025-05-13', fr:'le bras',      en:'the arm',        g:'m', cat:'ep13'},
    {id:281, p:4, level:"a1", added:'2025-05-13', fr:'la jambe',     en:'the leg',        g:'f', cat:'ep13'},
    {id:282, p:4, level:"a1", added:'2025-05-13', fr:'la main',      en:'the hand',       g:'f', cat:'ep13'},
    {id:283, p:4, level:"a1", added:'2025-05-13', fr:'le pied',      en:'the foot',       g:'m', cat:'ep13'},
    {id:284, p:4, level:"a1", added:'2025-05-13', fr:'le dos',       en:'the back',       g:'m', cat:'ep13'},
    {id:285, p:4, level:"a1", added:'2025-05-13', fr:'le ventre',    en:'the stomach',    g:'m', cat:'ep13'},
    {id:286, p:4, level:"a1", added:'2025-05-13', fr:'la gorge',     en:'the throat',     g:'f', cat:'ep13'},
    {id:287, p:4, level:"a1", added:'2025-05-13', fr:"l'œil",       en:'the eye',        g:'m', cat:'ep13'},
    {id:288, p:4, level:"a1", added:'2025-05-13', fr:"l'oreille",   en:'the ear',        g:'f', cat:'ep13'},
    {id:289, p:4, level:"a1", added:'2025-05-13', fr:'le nez',       en:'the nose',       g:'m', cat:'ep13'},
    {id:290, p:4, level:"a1", added:'2025-05-13', fr:'la dent',      en:'the tooth',      g:'f', cat:'ep13'},
    {id:291, p:4, level:"a1", added:'2025-05-13', fr:"l'épaule",    en:'the shoulder',   g:'f', cat:'ep13'},
    {id:292, p:4, level:"a1", added:'2025-05-13', fr:'le genou',     en:'the knee',       g:'m', cat:'ep13'},
    // Time expressions
    {id:293, p:2, level:"a1", added:'2025-05-13', fr:"aujourd'hui",  en:'today',          g:null, noArticle:true, cat:'ep3'},
    {id:294, p:2, level:"a1", added:'2025-05-13', fr:'demain',       en:'tomorrow',       g:null, noArticle:true, cat:'ep3'},
    {id:295, p:2, level:"a1", added:'2025-05-13', fr:'hier',         en:'yesterday',      g:null, noArticle:true, cat:'ep3'},
    {id:296, p:2, level:"a1", added:'2025-05-13', fr:'maintenant',   en:'now',            g:null, noArticle:true, cat:'ep3'},
    {id:297, p:2, level:"a1", added:'2025-05-13', fr:'bientôt',      en:'soon',           g:null, noArticle:true, cat:'ep3'},
    {id:298, p:2, level:"a1", added:'2025-05-13', fr:'tard',         en:'late',           g:null, noArticle:true, cat:'ep3'},
    {id:299, p:2, level:"a1", added:'2025-05-13', fr:'tôt',          en:'early',          g:null, noArticle:true, cat:'ep3'},
    {id:300, p:2, level:"a1", added:'2025-05-13', fr:'toujours',     en:'always',         g:null, noArticle:true, cat:'ep3'},
    {id:301, p:2, level:"a1", added:'2025-05-13', fr:'jamais',       en:'never',          g:null, noArticle:true, cat:'ep3'},
    {id:302, p:2, level:"a1", added:'2025-05-13', fr:'souvent',      en:'often',          g:null, noArticle:true, cat:'ep3'},
    {id:303, p:2, level:"a1", added:'2025-05-13', fr:'parfois',      en:'sometimes',      g:null, noArticle:true, cat:'ep3'},
    {id:304, p:2, level:"a1", added:'2025-05-13', fr:'déjà',         en:'already',        g:null, noArticle:true, cat:'ep3'},
  ],

  // ── QUESTION WORDS ────────────────────────────────────────────
  questions: [
    // Vocab cards
    {id:305, p:1, level:"a1", added:'2025-05-13', fr:'qui',        en:'who',            g:null, noArticle:true, cat:'ep2'},
    {id:306, p:1, level:"a1", added:'2025-05-13', fr:'quoi / que', en:'what',           g:null, noArticle:true, cat:'ep2'},
    {id:307, p:1, level:"a1", added:'2025-05-13', fr:'où',         en:'where',          g:null, noArticle:true, cat:'ep2'},
    {id:308, p:1, level:"a1", added:'2025-05-13', fr:'quand',      en:'when',           g:null, noArticle:true, cat:'ep2'},
    {id:309, p:1, level:"a1", added:'2025-05-13', fr:'comment',    en:'how',            g:null, noArticle:true, cat:'ep2'},
    {id:310, p:1, level:"a1", added:'2025-05-13', fr:'pourquoi',   en:'why',            g:null, noArticle:true, cat:'ep2'},
    {id:311, p:1, level:"a1", added:'2025-05-13', fr:'combien',    en:'how much / how many', g:null, noArticle:true, cat:'ep2'},
    {id:312, p:1, level:"a1", added:'2025-05-13', fr:'lequel / laquelle', en:'which one', g:null, noArticle:true, cat:'ep2'},
    // Common question phrases
    {id:313, p:2, level:"a1", added:'2025-05-13', fr:"Où est… ?",                   en:"Where is…?", cat:'ep2'},
    {id:314, p:2, level:"a1", added:'2025-05-13', fr:"Où sont… ?",                  en:"Where are…?", cat:'ep2'},
    {id:315, p:2, level:"a1", added:'2025-05-13', fr:"Qu'est-ce que c'est ?",       en:"What is this?", cat:'ep2'},
    {id:316, p:2, level:"a1", added:'2025-05-13', fr:"Comment tu t'appelles ?",     en:"What's your name? (informal)", cat:'ep2'},
    {id:317, p:2, level:"a1", added:'2025-05-13', fr:"Comment vous appelez-vous ?", en:"What's your name? (formal)", cat:'ep2'},
    {id:318, p:2, level:"a1", added:'2025-05-13', fr:"Quel âge as-tu ?",            en:"How old are you? (informal)", cat:'ep2'},
    {id:319, p:2, level:"a1", added:'2025-05-13', fr:"D'où viens-tu ?",             en:"Where are you from? (informal)", cat:'ep2'},
    {id:320, p:2, level:"a1", added:'2025-05-13', fr:"Qu'est-ce que tu fais ?",     en:"What are you doing?", cat:'ep2'},
    {id:321, p:2, level:"a1", added:'2025-05-13', fr:"Tu parles français ?",        en:"Do you speak French?", cat:'ep2'},
    {id:322, p:2, level:"a1", added:'2025-05-13', fr:"C'est quoi ton numéro ?",     en:"What's your number?", cat:'ep2'},
    {id:323, p:2, level:"a1", added:'2025-05-13', fr:"C'est combien, l'entrée ?",   en:"How much is admission?", cat:'ep2'},
    {id:324, p:2, level:"a1", added:'2025-05-13', fr:"Pourquoi pas ?",              en:"Why not?", cat:'ep2'},
    {id:325, p:2, level:"a1", added:'2025-05-13', fr:"Quand est-ce que ça ouvre ?", en:"When does it open?", cat:'ep2'},
    {id:326, p:2, level:"a1", added:'2025-05-13', fr:"Comment on dit… en français ?",en:"How do you say… in French?", cat:'ep2'},
  ],

  // ── CONNECTORS & FUNCTION WORDS ───────────────────────────────
  connectors: [
    {id:327, p:1, level:"a1", known:true, added:'2025-05-13', fr:'mais',         en:'but',                 g:null, noArticle:true, cat:'ep3'},
    {id:328, p:1, level:"a1", known:true, added:'2025-05-13', fr:'ou',           en:'or',                  g:null, noArticle:true, cat:'ep3'},
    {id:329, p:1, level:"a1", known:true, added:'2025-05-13', fr:'et',           en:'and',                 g:null, noArticle:true, cat:'ep3'},
    {id:330, p:1, level:"a1", added:'2025-05-13', fr:'donc',         en:'so / therefore',      g:null, noArticle:true, cat:'ep3'},
    {id:331, p:2, level:"a1", added:'2025-05-13', fr:'car / parce que', en:'because',          g:null, noArticle:true, cat:'ep3'},
    {id:332, p:1, level:"a1", added:'2025-05-13', fr:'aussi',        en:'also / too',          g:null, noArticle:true, cat:'ep3'},
    {id:333, p:1, level:"a1", added:'2025-05-13', fr:'avec',         en:'with',                g:null, noArticle:true, cat:'ep3'},
    {id:334, p:2, level:"a1", added:'2025-05-13', fr:'sans',         en:'without',             g:null, noArticle:true, cat:'ep3'},
    {id:335, p:1, level:"a1", added:'2025-05-13', fr:'pour',         en:'for / in order to',   g:null, noArticle:true, cat:'ep3'},
    {id:336, p:2, level:"a1", added:'2025-05-13', fr:'pendant',      en:'during / while',      g:null, noArticle:true, cat:'ep3'},
    {id:337, p:2, level:"a1", added:'2025-05-13', fr:'depuis',       en:'since / for',         g:null, noArticle:true, cat:'ep3'},
    {id:338, p:2, level:"a1", added:'2025-05-13', fr:'avant',        en:'before',              g:null, noArticle:true, cat:'ep3'},
    {id:339, p:2, level:"a1", added:'2025-05-13', fr:'après',        en:'after',               g:null, noArticle:true, cat:'ep3'},
    {id:340, p:2, level:"a1", added:'2025-05-13', fr:'ici',          en:'here',                g:null, noArticle:true, cat:'ep3'},
    {id:341, p:2, level:"a1", added:'2025-05-13', fr:'là',           en:'there',               g:null, noArticle:true, cat:'ep3'},
    {id:342, p:3, level:"a1", added:'2025-05-13', fr:'quelque chose',en:'something',           g:null, noArticle:true, cat:'ep3'},
    {id:343, p:3, level:"a1", added:'2025-05-13', fr:'rien',         en:'nothing',             g:null, noArticle:true, cat:'ep3'},
    {id:344, p:3, level:"a1", added:'2025-05-13', fr:'tout / toute', en:'everything / all',    g:null, noArticle:true, cat:'ep3'},
    {id:345, p:1, level:"a1", known:true, added:'2025-05-13', fr:'très',         en:'very',                g:null, noArticle:true, cat:'ep3'},
    {id:346, p:1, level:"a1", known:true, added:'2025-05-13', fr:'beaucoup',     en:'a lot / many',        g:null, noArticle:true, cat:'ep3'},
    {id:347, p:3, level:"a1", added:'2025-05-13', fr:'trop',         en:'too much / too many', g:null, noArticle:true, cat:'ep3'},
    {id:348, p:3, level:"a1", added:'2025-05-13', fr:'peu',          en:'little / few',        g:null, noArticle:true, cat:'ep3'},
    {id:349, p:3, level:"a1", added:'2025-05-13', fr:'encore',       en:'again / still / more',g:null, noArticle:true, cat:'ep3'},
    {id:350, p:3, level:"a1", added:'2025-05-13', fr:'seulement',    en:'only',                g:null, noArticle:true, cat:'ep3'},
  ],

  // ── NEW VERB INFINITIVES ──────────────────────────────────────
  // (these are added to existing verbs array conceptually but as new entries)
  verbs2: [
    {id:351, p:1, level:"a1", added:'2025-05-13', fr:'faire',      en:'to do / to make', cat:'ep1'},
    {id:352, p:1, level:"a1", added:'2025-05-13', fr:'dire',       en:'to say / to tell', cat:'ep3'},
    {id:353, p:4, level:"a1", added:'2025-05-13', fr:'voir',       en:'to see', cat:'ep3'},
    {id:354, p:4, level:"a1", added:'2025-05-13', fr:'savoir',     en:'to know (a fact)', cat:'ep3'},
    {id:355, p:1, level:"a1", added:'2025-05-13', fr:'venir',      en:'to come', cat:'ep6'},
    {id:356, p:1, level:"a1", added:'2025-05-13', fr:'prendre',    en:'to take', cat:'ep6'},
    {id:357, p:4, level:"a1", added:'2025-05-13', fr:'partir',     en:'to leave', cat:'ep7'},
    {id:358, p:3, level:"a1", added:'2025-05-13', fr:'mettre',     en:'to put / to place', cat:'ep7'},
    {id:359, p:2, level:"a1", added:'2025-05-13', fr:'chercher',   en:'to look for', cat:'ep1'},
    {id:360, p:2, level:"a1", added:'2025-05-13', fr:'aimer',      en:'to like / to love', cat:'ep15'},
    {id:361, p:2, level:"a1", added:'2025-05-13', fr:'parler',     en:'to speak / to talk', cat:'ep1'},
    {id:362, p:2, level:"a1", added:'2025-05-13', fr:'habiter',    en:'to live (somewhere)', cat:'ep1'},
    {id:363, p:2, level:"a1", added:'2025-05-13', fr:'travailler', en:'to work', cat:'ep1'},
    {id:364, p:3, level:"a1", added:'2025-05-13', fr:'acheter',    en:'to buy', cat:'ep15'},
    {id:365, p:3, level:"a1", added:'2025-05-13', fr:'connaître',  en:'to know (a person/place)', cat:'ep5'},
  ],

  // ── FAMILY VOCAB ─────────────────────────────────────────────
  family: [
    {id:366, p:3, level:"a1", added:'2025-06-07', fr:'la sœur',        en:'the sister',          g:'f', cat:'ep5'},
    {id:367, p:3, level:"a1", added:'2025-06-07', fr:'le frère',       en:'the brother',         g:'m', cat:'ep5'},
    {id:368, p:3, level:"a1", added:'2025-06-07', fr:'la mère',        en:'the mother',          g:'f', cat:'ep5'},
    {id:369, p:3, level:"a1", added:'2025-06-07', fr:'le père',        en:'the father',          g:'m', cat:'ep5'},
    {id:370, p:3, level:"a1", added:'2025-06-07', fr:"l'enfant",       en:'the child',           g:'m', cat:'ep5', vowelStart:true},
    {id:371, p:3, level:"a1", added:'2025-06-07', fr:'le mari',        en:'the husband',         g:'m', cat:'ep5'},
    {id:372, p:3, level:"a1", added:'2025-06-07', fr:'la femme',       en:'the wife / woman',    g:'f', cat:'ep5'},
    {id:373, p:3, level:"a1", added:'2025-06-07', fr:'le/la conjoint(e)', en:'the partner / spouse', g:'m', cat:'ep5', noArticle:true},
    {id:374, p:3, level:"a1", added:'2025-06-07', fr:'les parents',    en:'the parents',         g:'pm', cat:'ep5', pluralOnly:true},
    {id:375, p:3, level:"a1", added:'2025-06-07', fr:'les enfants',    en:'the children',        g:'pm', cat:'ep5', pluralOnly:true},
    {id:376, p:4, level:"a1", added:'2025-06-07', fr:'la grand-mère',  en:'the grandmother',     g:'f', cat:'ep5'},
    {id:377, p:4, level:"a1", added:'2025-06-07', fr:'le grand-père',  en:'the grandfather',     g:'m', cat:'ep5'},
    {id:378, p:4, level:"a1", added:'2025-06-07', fr:'la fille',       en:'the daughter / girl', g:'f', cat:'ep5'},
    {id:379, p:4, level:"a1", added:'2025-06-07', fr:'le fils',        en:'the son',             g:'m', cat:'ep5'},
    {id:380, p:5, level:"a1", added:'2025-06-07', fr:'la tante',       en:'the aunt',            g:'f', cat:'ep5'},
    {id:381, p:5, level:"a1", added:'2025-06-07', fr:"l'oncle",        en:'the uncle',           g:'m', cat:'ep5', vowelStart:true},
  ],

  // ── RELATIONSHIP STATUS ───────────────────────────────────────
  relationship: [
    {id:382, p:4, level:"a1", added:'2025-06-07', fr:'célibataire',    en:'single',              g:null, noArticle:true, cat:'ep5'},
    {id:383, p:4, level:"a1", added:'2025-06-07', fr:'marié(e)',       en:'married',             g:null, noArticle:true, cat:'ep5'},
    {id:384, p:4, level:"a1", added:'2025-06-07', fr:'divorcé(e)',     en:'divorced',            g:null, noArticle:true, cat:'ep5'},
    {id:385, p:5, level:"a1", added:'2025-06-07', fr:'séparé(e)',      en:'separated',           g:null, noArticle:true, cat:'ep5'},
    {id:386, p:4, level:"a1", added:'2025-06-07', fr:'en couple',      en:'in a relationship',   g:null, noArticle:true, cat:'ep5'},
    {id:387, p:5, level:"a1", added:'2025-06-07', fr:'veuf / veuve',   en:'widowed',             g:null, noArticle:true, cat:'ep5'},
  ],

  // ── QUEBEC COLLOQUIAL ─────────────────────────────────────────
  quebec: [
    {id:388, p:2, level:"a1", added:'2025-06-07', fr:'le dépanneur',   en:'the corner store (Quebec)',       g:'m', cat:'ep1'},
    {id:389, p:2, level:"a1", added:'2025-06-07', fr:'le char',        en:'the car (Quebec informal)',        g:'m', cat:'ep1'},
    {id:390, p:2, level:"a1", added:'2025-06-07', fr:'la blonde',      en:'the girlfriend (Quebec)',          g:'f', cat:'ep1'},
    {id:391, p:2, level:"a1", added:'2025-06-07', fr:'le chum',        en:'the boyfriend (Quebec)',           g:'m', cat:'ep1'},
    {id:392, p:2, level:"a1", added:'2025-06-07', fr:'magasiner',      en:'to go shopping (Quebec)',          g:null, noArticle:true, cat:'ep15'},
    {id:393, p:2, level:"a1", added:'2025-06-07', fr:'être tanné(e)',  en:'to be fed up / tired of (Quebec)',g:null, noArticle:true, cat:'ep15'},
    {id:394, p:2, level:"a1", added:'2025-06-07', fr:'le souper',      en:'dinner / supper (Quebec)',         g:'m', cat:'ep15'},
    {id:395, p:2, level:"a1", added:'2025-06-07', fr:'le dîner',       en:'lunch (Quebec)',                   g:'m', cat:'ep15'},
    {id:396, p:2, level:"a1", added:'2025-06-07', fr:'le déjeuner',    en:'breakfast (Quebec)',               g:'m', cat:'ep15'},
    {id:397, p:3, level:"a1", added:'2025-06-07', fr:'la tuque',       en:'the winter hat (Quebec)',          g:'f', cat:'ep14'},
    {id:398, p:3, level:"a1", added:'2025-06-07', fr:'pogner',         en:'to grab / to catch (Quebec)',      g:null, noArticle:true, cat:'ep1'},
    {id:399, p:3, level:"a1", added:'2025-06-07', fr:'le breuvage',    en:'the beverage (Quebec)',            g:'m', cat:'ep15'},
  ],
  // ── EPISODE 9 · AU QUOTIDIEN ─────────────────────────────
  ep9: [
    // Drinks (not already in deck)
    {id:400, p:2, level:"a1", added:'2025-07-18', fr:'le vin',           en:'wine',              g:'m', cat:'ep9'},
    {id:401, p:2, level:"a1", added:'2025-07-18', fr:'une collation',    en:'a snack',            g:'f', cat:'ep9'},
    // Time of day (matin/soir/nuit already exist as descriptors, add missing)
    {id:402, p:2, level:"a1", added:'2025-07-18', fr:"l'avant-midi",    en:'the late morning',   g:'m', cat:'ep9', vowelStart:true},
    {id:403, p:2, level:"a1", added:'2025-07-18', fr:'le midi',          en:'noon / lunchtime',   g:'m', cat:'ep9'},
    // Action verbs not in deck
    {id:404, p:2, level:"a1", added:'2025-07-18', fr:'cuisiner',         en:'to cook',            g:null, noArticle:true, cat:'ep9'},
    {id:405, p:2, level:"a1", added:'2025-07-18', fr:'étudier',          en:'to study',           g:null, noArticle:true, cat:'ep9'},
    {id:406, p:2, level:"a1", added:'2025-07-18', fr:'danser',           en:'to dance',           g:null, noArticle:true, cat:'ep9'},
    {id:407, p:3, level:"a1", added:'2025-07-18', fr:'tricoter',         en:'to knit',            g:null, noArticle:true, cat:'ep9'},
    {id:408, p:2, level:"a1", added:'2025-07-18', fr:'nager',            en:'to swim',            g:null, noArticle:true, cat:'ep9'},
    {id:409, p:2, level:"a1", added:'2025-07-18', fr:'courir',           en:'to run',             g:null, noArticle:true, cat:'ep9'},
    {id:410, p:2, level:"a1", added:'2025-07-18', fr:'regarder',         en:'to watch / to look', g:null, noArticle:true, cat:'ep9'},
    {id:411, p:2, level:"a1", added:'2025-07-18', fr:'relaxer',          en:'to relax',           g:null, noArticle:true, cat:'ep9'},
    {id:412, p:2, level:"a1", added:'2025-07-18', fr:'marcher',          en:'to walk',            g:null, noArticle:true, cat:'ep9'},
    {id:413, p:2, level:"a1", added:'2025-07-18', fr:'faire le ménage',  en:'to do housework',    g:null, noArticle:true, cat:'ep9'},
    {id:414, p:2, level:"a1", added:'2025-07-18', fr:'faire le lavage',  en:'to do laundry',      g:null, noArticle:true, cat:'ep9'},
    {id:415, p:2, level:"a1", added:'2025-07-18', fr:"faire l'épicerie", en:'to do groceries',    g:null, noArticle:true, cat:'ep9'},
    {id:416, p:2, level:"a1", added:'2025-07-18', fr:"faire de l'exercice", en:'to exercise',     g:null, noArticle:true, cat:'ep9'},
    {id:417, p:2, level:"a1", added:'2025-07-18', fr:'faire une promenade', en:'to go for a walk', g:null, noArticle:true, cat:'ep9'},
    {id:418, p:3, level:"a1", added:'2025-07-18', fr:'jouer aux cartes', en:'to play cards',      g:null, noArticle:true, cat:'ep9'},
    {id:419, p:3, level:"a1", added:'2025-07-18', fr:'jouer du piano',   en:'to play piano',      g:null, noArticle:true, cat:'ep9'},
    {id:420, p:2, level:"a1", added:'2025-07-18', fr:'faire du vélo',    en:'to go cycling',      g:null, noArticle:true, cat:'ep9'},
    // Time expressions
    {id:421, p:2, level:"a1", added:'2025-07-18', fr:'avant',            en:'before',             g:null, noArticle:true, cat:'ep9'},
    {id:422, p:2, level:"a1", added:'2025-07-18', fr:'pendant',          en:'during / while',     g:null, noArticle:true, cat:'ep9'},
    {id:423, p:2, level:"a1", added:'2025-07-18', fr:'après',            en:'after',              g:null, noArticle:true, cat:'ep9'},
    {id:424, p:2, level:"a1", added:'2025-07-18', fr:'vers',             en:'around / towards',   g:null, noArticle:true, cat:'ep9'},
    {id:425, p:2, level:"a1", added:'2025-07-18', fr:'environ',          en:'approximately',      g:null, noArticle:true, cat:'ep9'},
    // Demonstratives
    {id:426, p:2, level:"a1", added:'2025-07-18', fr:'ce / cet / cette', en:'this / that',        g:null, noArticle:true, cat:'ep9'},
  ],

  // ── EPISODE 10 · DÉCOUVRIR UN NOUVEAU QUARTIER ───────────
  ep10: [
    // Neighbourhood businesses not already in deck
    {id:427, p:2, level:"a1", added:'2025-07-18', fr:'une boulangerie',      en:'a bakery',              g:'f', cat:'ep10'},
    {id:428, p:2, level:"a1", added:'2025-07-18', fr:'un salon de coiffure', en:'a hair salon',          g:'m', cat:'ep10'},
    {id:429, p:3, level:"a1", added:'2025-07-18', fr:'un fleuriste',         en:'a florist',             g:'m', cat:'ep10'},
    {id:430, p:3, level:"a1", added:'2025-07-18', fr:'une fruiterie',        en:'a fruit store',         g:'f', cat:'ep10'},
    {id:431, p:3, level:"a1", added:'2025-07-18', fr:'une fromagerie',       en:'a cheese shop',         g:'f', cat:'ep10'},
    {id:432, p:3, level:"a1", added:'2025-07-18', fr:'une librairie',        en:'a bookstore',           g:'f', cat:'ep10'},
    {id:433, p:3, level:"a1", added:'2025-07-18', fr:'une boucherie',        en:'a butcher shop',        g:'f', cat:'ep10'},
    {id:434, p:3, level:"a1", added:'2025-07-18', fr:'une poissonnerie',     en:'a fish market',         g:'f', cat:'ep10'},
    {id:435, p:3, level:"a1", added:'2025-07-18', fr:'une station-service',  en:'a gas station',         g:'f', cat:'ep10'},
    {id:436, p:3, level:"a1", added:'2025-07-18', fr:'un gym',              en:'a gym',                  g:'m', cat:'ep10'},
    // Street vocab
    {id:437, p:2, level:"a1", added:'2025-07-18', fr:'un trottoir',          en:'a sidewalk',            g:'m', cat:'ep10'},
    {id:438, p:2, level:"a1", added:'2025-07-18', fr:'une intersection',     en:'an intersection',       g:'f', cat:'ep10'},
    {id:439, p:2, level:"a1", added:'2025-07-18', fr:'un coin de rue',       en:'a street corner',       g:'m', cat:'ep10'},
    {id:440, p:2, level:"a1", added:'2025-07-18', fr:'un pont',              en:'a bridge',              g:'m', cat:'ep10'},
    {id:441, p:2, level:"a1", added:'2025-07-18', fr:'une lumière',          en:'a traffic light',       g:'f', cat:'ep10'},
    {id:442, p:3, level:"a1", added:'2025-07-18', fr:'une rue parallèle',    en:'a parallel street',     g:'f', cat:'ep10'},
    {id:443, p:3, level:"a1", added:'2025-07-18', fr:'une rue perpendiculaire', en:'a perpendicular street', g:'f', cat:'ep10'},
    // Direction verbs not already in deck
    {id:444, p:2, level:"a1", added:'2025-07-18', fr:'traverser',            en:'to cross',              g:null, noArticle:true, cat:'ep10'},
  ],

  // ── EPISODE 11 · PASSER LE TEMPS ─────────────────────────
  ep11: [
    // Hobbies not already covered
    {id:445, p:3, level:"a1", added:'2025-07-18', fr:'fabriquer',            en:'to make / to build',    g:null, noArticle:true, cat:'ep11'},
    {id:446, p:3, level:"a1", added:'2025-07-18', fr:'les loisirs',          en:'hobbies / leisure',     g:'pm', cat:'ep11', pluralOnly:true},
    // Payment
    {id:447, p:2, level:"a1", added:'2025-07-18', fr:'comptant',             en:'cash',                  g:null, noArticle:true, cat:'ep11'},
    {id:448, p:2, level:"a1", added:'2025-07-18', fr:'une carte de crédit',  en:'a credit card',         g:'f', cat:'ep11'},
    {id:449, p:2, level:"a1", added:'2025-07-18', fr:'une carte de débit',   en:'a debit card',          g:'f', cat:'ep11'},
    {id:450, p:3, level:"a1", added:'2025-07-18', fr:'un chèque',            en:'a cheque',              g:'m', cat:'ep11'},
    // Frequency expressions
    {id:451, p:2, level:"a1", added:'2025-07-18', fr:'une fois',             en:'once',                  g:null, noArticle:true, cat:'ep11'},
    {id:452, p:2, level:"a1", added:'2025-07-18', fr:'quelques fois',        en:'sometimes / a few times', g:null, noArticle:true, cat:'ep11'},
    {id:453, p:2, level:"a1", added:'2025-07-18', fr:'la dernière fois',     en:'the last time',         g:'f', cat:'ep11'},
    {id:454, p:3, level:"a1", added:'2025-07-18', fr:'durer',                en:'to last',               g:null, noArticle:true, cat:'ep11'},
  ],

};

// ═══════════════════════════════════════════════════════════════
// FORMAT GUIDE
// ═══════════════════════════════════════════════════════════════
//
// NEXT AVAILABLE ID: 455
// NEXT A2 ID BLOCK: 500+
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
