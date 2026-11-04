/* =========================================================
   Vídeos do portfólio da Raiane (a ordem aqui é a ordem na página).
   Para adicionar um vídeo novo, copie uma linha e troque:
   - YouTube:  { tipo: "youtube", id: "ID_DO_VIDEO", titulo: "...", categoria: "..." }
   - Arquivo:  vid("nome-do-arquivo", "Título", "categoria", false)   (false = horizontal; true = vertical)
               o .mp4 e o -thumb.jpg vão em assets/videos/
   categoria: reels | documentary | motion | business | ai
   ========================================================= */
const X = "assets/videos/";
const vid = (nome, titulo, categoria, vertical = true) => ({ tipo: "video", src: `${X}${nome}.mp4`, poster: `${X}${nome}-thumb.jpg`, vertical, titulo, categoria });

const VIDEOS = [
  vid("before-after-raiane-1", "Before and after: raw vs edited talking-head reel", "reels"),
  vid("before-after-raiane-2", "Before and after: talking-head reel with motion graphics", "reels"),
  vid("talking-head-reel-1", "Talking-head reel for social media", "reels"),
  vid("talking-head-reel-2", "Podcast-style talking-head reel", "reels"),
  vid("megalodon-documentary", "Megalodon: documentary edit with narration and sound design", "documentary", false),
  vid("reformation-documentary", "The Protestant Reformation: historical documentary with archive motion", "documentary", false),
  vid("edison-documentary", "Thomas Edison: then vs now documentary with motion graphics", "documentary", false),
  vid("stalin-war-documentary", "WWII archive documentary: archival footage, narration and sound design", "documentary", false),
  vid("dinosaur-explainer", "Dinosaur extinction explainer: kinetic text, UI and 3D Earth", "motion", false),
  vid("trex-documentary", "T. rex: documentary editing sample (real footage only)", "documentary", false),
  vid("us-vs-mexico-map-explainer", "US vs Mexico: animated map explainer", "motion", false),
  vid("five-dollar-habit", "The 5 Dollar Habit: finance documentary", "documentary", false),
  vid("minimum-payment-trap", "The Minimum Payment Trap: finance documentary", "documentary", false),
  vid("vintage-war-documentary", "Archive documentary: vintage footage and sound design", "documentary", false),
  { tipo: "youtube", id: "1Na6ipU6JEE", titulo: "Pompeii, 72 AD: documentary edit", categoria: "documentary" },
  vid("grandpa-max-brake-scam", "Explainer animation: how a brake-pad upsell works (2D motion)", "motion", false),
  vid("grandpa-max-chalkboard", "Chalkboard-style explainer animation with charts and characters", "motion", false),
  vid("property-mailers-explainer", "Property Mailers: narrated product explainer with UI animation", "business", false),
  vid("saas-launch-motion", "SaaS product launch: UI motion graphics (spec ad)", "motion", false),
  vid("watch-ui-animation", "Watch specs: UI motion graphics", "motion", false),
  vid("ai-perfume-ad", "AI product ad: perfume", "ai", false),
];
