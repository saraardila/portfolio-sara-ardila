// Contenido de la página "Detrás de la cámara" (/sobre-mi/).

export interface Milestone {
  /** Fechas tal cual se muestran: "2024 – 2026" */
  period: string;
  /** Año corto para los botones de navegación */
  short: string;
  /** Puesto o etapa */
  role: string;
  /** Empresa o centro. Déjalo vacío para no mostrarlo. */
  place: string;
  kind: 'Trabajo' | 'Prácticas' | 'Formación' | 'Antes del código';
  text: string;
  /** Color de fondo del fotograma */
  tone: 'soft' | 'sky' | 'paper' | 'ink';
  /** Marca el fotograma más reciente con "lo último" */
  current?: boolean;
}

export interface OffCamera {
  /** Palabra de la cara delantera */
  word: string;
  icon: 'book' | 'pilates' | 'camera' | 'plane' | 'paw';
  /** Frase de la cara trasera (al darle la vuelta) */
  back: string;
}

export const about = {
  /** Ruta a tu foto dentro de /public, p. ej. '/capturas/sara.jpg'. Vacío = marcador. */
  photo: '/img/sara.jpg' as string | undefined,

  intro: [
    'Soy Sara, Android Developer en Madrid. Desarrollo apps nativas con Kotlin y Jetpack Compose, y cuido la arquitectura tanto como el detalle visual.',
    'Antes de programar pasé años detrás de una cámara y diseñando. Esa mirada sigue conmigo: me fijo en el espaciado, en las animaciones y en cómo se siente una pantalla en la mano.',
  ],

  timeline: [
    {
      period: 'abr – oct 2026',
      short: '2026',
      role: 'Android Developer',
      place: 'Klikin · Waylet',
      kind: 'Trabajo',
      text: 'Funcionalidades en una app con más de 10 millones de usuarios, APIs REST e interfaces desde Figma con componentes reutilizables.',
      tone: 'soft',
      current: true,
    },
    {
      period: '2024 – 2026',
      short: '2024',
      role: 'Android y Web Developer',
      place: 'Custos Mobile',
      kind: 'Trabajo',
      text: 'Apps Android con Kotlin, Jetpack Compose y MVVM para terminales de punto de venta en proyectos internacionales, y frontend web con Angular.',
      tone: 'sky',
    },
    {
      period: '2023 – 2024',
      short: '2023',
      role: 'Desarrolladora Android',
      place: 'RD Post',
      kind: 'Trabajo',
      text: 'Refactorización completa de Java a Kotlin y rediseño de la interfaz. Firma biométrica, voz y APIs REST.',
      tone: 'ink',
    },
    {
      period: '2022 – 2023',
      short: '2022',
      role: 'Desarrolladora Full-Stack',
      place: 'Virtual Desk',
      kind: 'Trabajo',
      text: 'Nuevas funcionalidades, automatización de procesos y PL/SQL avanzado, con soporte técnico para resolver incidencias.',
      tone: 'paper',
    },
    {
      period: 'abr – jun 2021',
      short: '2021',
      role: 'Desarrolladora Front-End',
      place: 'Cloud District',
      kind: 'Prácticas',
      text: 'Webs responsive con React, Redux y Material-UI en un equipo ágil: sprints, dailies y planning.',
      tone: 'sky',
    },
    {
      period: '2019 – 2021',
      short: 'DAM',
      role: 'Desarrollo de Aplicaciones Multiplataforma',
      place: 'Escuela Santa Ana y San Rafael',
      kind: 'Formación',
      text: 'Técnico Superior. Mi proyecto final, una app móvil con la nota máxima.',
      tone: 'soft',
    },
    {
      period: '2014 – 2021',
      short: 'Foto',
      role: 'Fotógrafa y diseñadora gráfica',
      place: '',
      kind: 'Antes del código',
      text: 'Estudié imagen y pasé cinco años haciendo diseño, fotografía y contenido digital para marcas. De ahí viene mi ojo para el detalle.',
      tone: 'paper',
    },
  ] satisfies Milestone[],

  offCamera: [
    { word: 'leer', icon: 'book', back: 'Mi otra gran pasión. De aquí salió BookNook.' },
    { word: 'pilates', icon: 'pilates', back: 'No todo va a ser programar!' },
    { word: 'fotografía', icon: 'camera', back: 'Sigue siendo mi forma de mirar las cosas.' },
    { word: 'viajar', icon: 'plane', back: 'Cada viaje, un carrete nuevo.' },
    { word: 'animales', icon: 'paw', back: 'Pregúntame por ellos y no paro.' },
  ] satisfies OffCamera[],

  /** "Ahora mismo". */
  now: [
    { label: 'Aprendiendo', value: 'Kotlin Multiplatform' },
    { label: 'Construyendo', value: 'BookNook' },
    { label: 'Leyendo', value: '' },
    { label: 'Buscando', value: 'Mi próximo equipo como Android Developer' },
  ],
};
