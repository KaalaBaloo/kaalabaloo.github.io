(function () {
  'use strict';

  var STORE_KEY = 'kb_lang';

  var es = {
    'meta.title': 'Kaala Baloo — Desarrolladora de videojuegos e IA aplicada',
    'meta.description': 'Portfolio de Myriam Collada (Kaala Baloo), desarrolladora de videojuegos especializada en IA aplicada. Catorce juegos publicados, un máster en Inteligencia Artificial en la Universidad Politécnica de Madrid y un grado en Desarrollo de Videojuegos en UDIT.',

    'skip': 'Saltar al contenido principal',
    'nav.home': 'Kaala Baloo — volver arriba',
    'nav.ai': 'IA',
    'nav.games': 'Juegos',
    'nav.cv': 'CV',
    'nav.abilities': 'Aptitudes',
    'nav.contact': 'Contacto',
    'nav.lang': 'Ver la página en inglés',

    'hero.tagline': 'Desarrolladora de videojuegos · IA aplicada',
    'hero.games': 'Ver mis juegos',
    'hero.cv': 'Descargar CV',

    'about.title': '¡Hola! Me llamo Myriam Collada',
    'about.p1': 'También conocida como Kaala Baloo. Hago videojuegos, y los sistemas que les hacen pensar.',
    'about.p2': 'Soy graduada en Desarrollo de Videojuegos y Entornos Virtuales por UDIT, con doble mención en Diseño y Programación, y ahora curso el Máster en Inteligencia Artificial en la Universidad Politécnica de Madrid. Tengo catorce juegos publicados y he participado en más de diez hackathons y game jams, con tres primeros premios.',
    'about.p3': 'Mi trabajo se centra en la IA aplicada: agentes inteligentes, simulación de comportamiento y sistemas generativos. Programo desde los 8 años, desde juegos en Scratch hasta robots impresos en 3D funcionando con Arduino, y me sigue dando el mismo gusto conseguir que un sistema se comporte.',

    'skills.title': 'Lo que hago',
    'skills.ai': 'IA aplicada',
    'skills.ai.1': 'Ollama · Llama 3 · Gemma 3',
    'skills.ai.2': 'Pipelines RAG',
    'skills.ai.3': 'GOAP · Razonamiento basado en casos',
    'skills.ai.4': 'Simulación de agentes y comportamiento',
    'skills.programming': 'Programación',
    'skills.design': 'Diseño',
    'skills.production': 'Producción',

    'ai.title': 'IA aplicada',
    'ai.intro': 'El hilo que recorre mi trabajo reciente es conseguir que el software decida bien: agentes que planifican, sistemas que se adaptan a quien los usa y modelos generativos que corren en local en vez de detrás de una API.',
    'ai.1.title': 'Arquitectura de IA adaptativa para el comportamiento enemigo',
    'ai.1.stack': 'Unreal Engine 5 · GOAP · Razonamiento basado en casos · Trabajo de fin de grado',
    'ai.1.body': 'Un sistema híbrido de director y agentes que adapta el comportamiento de los NPC al estilo del jugador manteniendo el ritmo bajo control del diseñador. Validado con un estudio de ablación y pruebas con usuarios.',
    'ai.2.title': 'Sistema RAG en local',
    'ai.2.body': 'Una herramienta web que convierte documentos en material de estudio adaptativo usando IA generativa, con los modelos corriendo en local.',
    'ai.3.title': 'Hackathon IndesIA con Ferrovial',
    'ai.3.stack': 'Primer premio · 2024',
    'ai.3.body': 'Un prototipo de IA aplicada desarrollado sobre un caso industrial real durante un fin de semana de hackathon.',

    'games.title': 'Juegos',
    'games.intro': 'Catorce juegos publicados desde 2021, algunos en solitario y la mayoría con equipos pequeños. Chulu’s Janitor va primero porque es el proyecto del que estoy más orgullosa. A partir de ahí van del más nuevo al más antiguo.',
    'games.badge': 'Proyecto destacado',
    'games.more': 'Juégalos en itch.io',
    'games.chulu': '2024 · Puzles · Unity · Grusel Games Studios',
    'games.weeping': '2026 · En desarrollo · Primer premio en Match in Games, UDIT',
    'games.arope': '2026 · Estrategia por turnos · Unity',
    'games.bbcat': '2025 · Simulador de mascota virtual · Android',
    'games.madrid': '2025 · Ficción interactiva · Unity',
    'games.konpira': '2025 · Folclore japonés · Construct 3',
    'games.snake': '2025 · Acción · Unity',
    'games.erebus': '2025 · Terror de supervivencia · Unreal Engine',
    'games.5min': '2024 · Aventura point & click · Construct 3',
    'games.corre': '2024 · Estrategia y sigilo',
    'games.leiden': '2023 · Aventura',
    'games.alux': '2022 · Plataformas',
    'games.gato': '2022 · Deportes',
    'games.ultima': '2022 · Puzles',
    'games.9salas': '2021 · Puzles',

    'exp.title': 'Experiencia',
    'exp.1.role': 'QA Tester',
    'exp.1.meta': 'Nakama Game Studio · Coloratura · 2026',
    'exp.1.body': 'Testeo de una aventura narrativa que se juega enteramente a través del audio, centrada en la accesibilidad para personas ciegas. El juego apareció en medios nacionales como ABC, Antena 3 y Vandal.',
    'exp.2.role': 'Becaria de software',
    'exp.2.meta': 'Lurtis AI · Noviembre 2024 a abril 2025',
    'exp.2.body': 'Desarrollo de herramientas de software y prototipos en Unity en una empresa especializada en soluciones basadas en IA.',
    'exp.3.role': 'Profesora auxiliar',
    'exp.3.meta': 'Campamento de verano de videojuegos de UDIT · Julio de 2023 y 2025',
    'exp.3.body': 'Enseñanza de diseño y programación a alumnado de 15 a 18 años.',
    'exp.4.role': 'Embajadora de marca',
    'exp.4.meta': 'UDIT · 2023 a 2026',
    'exp.4.body': 'Representación del grado de videojuegos de UDIT en jornadas de puertas abiertas y eventos del sector, entre ellos IFEMA y Madrid in Game.',

    'cv.title': 'CV',
    'cv.education': 'Formación',
    'cv.edu.1': '— Máster en Inteligencia Artificial',
    'cv.edu.1.when': '2026 – actualidad',
    'cv.edu.2': '— Grado en Desarrollo de Videojuegos y Entornos Virtuales, doble mención en Diseño y Programación',
    'cv.edu.2.when': '2022 – 2026',
    'cv.edu.3': '— Campamento de verano de videojuegos',
    'cv.edu.3.when': 'Julio de 2021 y 2022',
    'cv.awards': 'Premios',
    'cv.first': '1.er premio',
    'cv.third': '3.er premio',
    'cv.exhibitor': 'Expositora seleccionada',
    'cv.aw.1': '— Match in Games, UDIT, por Weeping Rose',
    'cv.aw.2': '— Hackathon de IA IndesIA con Ferrovial',
    'cv.aw.3': '— HackSTEM, Spanish Startups × Siemens Gamesa',
    'cv.aw.4': '— Hack For Good, Telefónica',
    'cv.aw.5': '— FORD Impulsando Sueños, nacional',
    'cv.aw.6': '— Hack For Good, Telefónica',
    'cv.aw.7': '— Ideathon Amadeus × ESNE',
    'cv.aw.8': '— Game Jam Madrid Crea',
    'cv.langs': 'Idiomas y voluntariado',
    'cv.spanish': 'Español',
    'cv.spanish.v': '— nativo',
    'cv.english': 'Inglés',
    'cv.english.v': '— C1, Cambridge',
    'cv.vol.1': '— voluntariado',
    'cv.vol.1.when': '2015 – actualidad',
    'cv.vol.2': '— voluntariado',
    'cv.vol.2.when': '2021 – 2022',
    'cv.download': 'Descargar el CV completo',

    'abilities.title': 'Aptitudes',
    'prog.title': 'Programación',
    'prog.p1': 'Trabajo sobre todo en C# dentro de Unity y en C++ con Unreal Engine 5, y en Python para todo lo que tenga forma de modelo o de datos. En la carrera di inteligencia artificial avanzada, programación orientada a objetos, programación gráfica, programación concurrente y bases de datos, y he usado casi todo en proyectos publicados.',
    'prog.p2': 'Aprendo rápido y no me da miedo salir de mi zona de confort. También he trabajado con SQL y JavaScript en hackathons, prácticas de clase y prototipos para clientes.',
    'prog.chulu': 'Unity · Repositorio de GitHub',
    'prog.natour': 'Juego de mesa en realidad aumentada · Repositorio de GitHub',
    'prog.all': 'Todos mis repositorios',
    'prog.all.meta': 'Perfil de GitHub',

    'design.title': 'Diseño',
    'design.p1': 'Mi grado incluía doble mención en Diseño además de Programación, y he trabajado como diseñadora de concepto y de niveles en todos mis proyectos, llevando la documentación y montando prototipos para iterar y validar la experiencia. Estoy especialmente orgullosa de mi trabajo en Chulu’s Janitor, que me permitió enseñar un abanico amplio de mis habilidades de diseño.',
    'design.p2': 'Como diseñadora, me enorgullece mi capacidad para entender lo que el cliente necesita de verdad. Varios de mis proyectos ganadores en hackathons fueron elogiados justo por eso.',
    'design.notion': 'Documento de diseño en Notion',
    'design.proposal': 'Documento de propuesta del proyecto',
    'design.web': 'Web de Chulu’s Janitor',
    'design.figma': 'Prototipo en Figma',

    'prod.title': 'Producción',
    'prod.p1': 'Una de las habilidades de las que estoy más orgullosa es motivar y organizar equipos pequeños para que cada persona rinda al máximo. La mayoría de mis juegos publicados se hicieron con un equipo que ayudé a coordinar, y disfruto de verdad llevando un proyecto del concepto al lanzamiento. Eso encaja con mi entusiasmo por Scrum y con cuatro años representando el grado de videojuegos de UDIT en eventos del sector.',
    'prod.scrum': 'Tablero Scrum y planificación de sprints',

    'footer.title': 'Trabajemos juntos',
    'footer.hiring': 'Contratación',
    'footer.indie': 'Trabajo indie',
    'footer.phone': 'Teléfono',
    'footer.note': 'Madrid, España.',

    'sr.pdf': '(PDF)',
    'sr.newtab': '(se abre en una pestaña nueva)',
    'aria.github': 'GitHub (se abre en una pestaña nueva)',
    'aria.linkedin': 'LinkedIn (se abre en una pestaña nueva)',
    'aria.itch': 'itch.io (se abre en una pestaña nueva)',
    'aria.play': 'Google Play (se abre en una pestaña nueva)'
  };

  var en = {};
  var button = document.querySelector('.lang_toggle');
  var label = button ? button.querySelector('.lang_code') : null;
  var description = document.querySelector('meta[name="description"]');

  function nodes() {
    return document.querySelectorAll('[data-i18n], [data-i18n-aria]');
  }

  function captureEnglish() {
    en['meta.title'] = document.title;
    en['meta.description'] = description ? description.content : '';
    nodes().forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (key && !(key in en)) en[key] = el.textContent;
      var ariaKey = el.getAttribute('data-i18n-aria');
      if (ariaKey && !(ariaKey in en)) en[ariaKey] = el.getAttribute('aria-label');
    });
    en['nav.lang'] = button ? button.getAttribute('aria-label') : '';
  }

  function apply(lang) {
    var dict = lang === 'es' ? es : en;

    document.documentElement.lang = lang;
    if (dict['meta.title']) document.title = dict['meta.title'];
    if (description && dict['meta.description']) description.content = dict['meta.description'];

    nodes().forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (key && dict[key] !== undefined) el.textContent = dict[key];
      var ariaKey = el.getAttribute('data-i18n-aria');
      if (ariaKey && dict[ariaKey] !== undefined) el.setAttribute('aria-label', dict[ariaKey]);
    });

    if (button) {
      button.setAttribute('aria-label', dict['nav.lang']);
      button.setAttribute('lang', lang === 'es' ? 'en' : 'es');
      if (label) label.textContent = lang === 'es' ? 'EN' : 'ES';
    }
  }

  function stored() {
    try { return localStorage.getItem(STORE_KEY); } catch (e) { return null; }
  }

  function remember(lang) {
    try { localStorage.setItem(STORE_KEY, lang); } catch (e) {}
  }

  captureEnglish();

  var current = stored() === 'es' ? 'es' : 'en';
  if (current === 'es') apply('es');

  if (button) {
    button.hidden = false;
    button.addEventListener('click', function () {
      current = current === 'es' ? 'en' : 'es';
      apply(current);
      remember(current);
    });
  }
})();
