// Contenido de la página "Detrás de la cámara" (/sobre-mi/).
// Todo es texto editable: cambia lo que quieras sin tocar el diseño.

export interface Milestone {
  year: string;
  /** Título manuscrito del fotograma */
  title: string;
  text: string;
  /** Color de fondo del fotograma */
  tone: 'soft' | 'sky' | 'paper' | 'ink';
  /** Marca el fotograma actual con "aquí estoy" */
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
  photo: undefined as string | undefined,

  intro: [
    'Soy Sara, Android Developer en Madrid. Desarrollo apps nativas con Kotlin y Jetpack Compose, y cuido la arquitectura tanto como el detalle visual.',
    'Antes de programar pasé años detrás de una cámara y diseñando. Esa mirada sigue conmigo: me fijo en el espaciado, en las animaciones y en cómo se siente una pantalla en la mano.',
  ],

  // REVISA: fechas y textos sacados de tu CV, sin nombres de empresas.
  timeline: [
    {
      year: '2014',
      title: 'primera cámara',
      text: 'Estudio imagen: iluminación, captación y tratamiento de la imagen.',
      tone: 'paper',
    },
    {
      year: '2016',
      title: 'detrás del objetivo',
      text: 'Cinco años como fotógrafa y diseñadora gráfica, creando contenido para marcas.',
      tone: 'sky',
    },
    {
      year: '2019',
      title: 'cambio de objetivo',
      text: 'Empiezo Desarrollo de Aplicaciones Multiplataforma. Mi proyecto final, una app, saca la nota máxima.',
      tone: 'soft',
    },
    {
      year: '2021',
      title: 'primeras líneas',
      text: 'Primeras webs con React y mis primeros pasos en equipos ágiles.',
      tone: 'paper',
    },
    {
      year: '2023',
      title: 'Android nativo',
      text: 'Paso a Android: refactorizo de Java a Kotlin y empiezo con Jetpack Compose.',
      tone: 'sky',
    },
    {
      year: '2026',
      title: 'a gran escala',
      text: 'Desarrollo funcionalidades en una app con más de 10 millones de usuarios.',
      tone: 'ink',
      current: true,
    },
  ] satisfies Milestone[],

  // BORRADOR: reescribe las frases de atrás con tus palabras.
  offCamera: [
    { word: 'leer', icon: 'book', back: 'Mi otra gran pasión. De aquí salió BookNook.' },
    { word: 'pilates', icon: 'pilates', back: 'Constancia y técnica: también sirven para programar.' },
    { word: 'fotografía', icon: 'camera', back: 'Sigue siendo mi forma de mirar las cosas.' },
    { word: 'viajar', icon: 'plane', back: 'Cada viaje, un carrete nuevo.' },
    { word: 'animales', icon: 'paw', back: 'Pregúntame por ellos y no paro.' },
  ] satisfies OffCamera[],

  /** "Ahora mismo". Las líneas con value vacío no se muestran. */
  now: [
    { label: 'Aprendiendo', value: 'Kotlin Multiplatform' },
    { label: 'Construyendo', value: 'BookNook' },
    { label: 'Leyendo', value: '' },
    { label: 'Buscando', value: 'Mi próximo equipo como Android Developer' },
  ],
};
