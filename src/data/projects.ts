// Todo el contenido de los proyectos vive aquí.
// Para añadir una app nueva: copia un bloque, cambia los textos y listo.

export interface Shot {
  /** Nombre que sale escrito a mano bajo la captura */
  caption: string;
  /** Ruta a la imagen dentro de /public, p. ej. '/capturas/booknook-biblioteca.png'. Déjalo vacío si aún no la tienes. */
  src?: string;
}

export interface Card {
  /** Palabra manuscrita: "1. encuadro" */
  hand: string;
  /** Su traducción clara: "Diseño" */
  label: string;
  text: string;
}

export interface Project {
  slug: string;
  name: string;
  /** Frase corta para la tarjeta de la home */
  short: string;
  /** Frase más larga para la cabecera de su página */
  summary: string;
  /** Stack resumido para la home */
  stackShort: string;
  status: string;
  role: string;
  stack: string;
  repo: string;
  /** Captura principal (home y cabecera del proyecto) */
  cover?: string;
  /** Color de fondo de la foto: 'soft' (azul) o 'sky' (amarillo) */
  tone: 'soft' | 'sky';
  /** Marca el proyecto estrella con "esta, la buena" */
  featured?: boolean;
  shots: Shot[];
  howItsMade: Card[];
  roadmap: string[];
}

export const projects: Project[] = [
  {
    slug: 'booknook',
    name: 'BookNook',
    short: 'Descubre libros y sigue tus lecturas.',
    summary:
      'Una app cozy para descubrir libros y seguir tus lecturas: biblioteca, progreso, calendario y diario de lectura.',
    stackShort: 'Kotlin · Compose · KMP',
    status: 'En desarrollo, migrando a Kotlin Multiplatform',
    role: 'Diseño y desarrollo',
    stack: 'Kotlin · Jetpack Compose · Hilt · Room · Retrofit · DataStore',
    repo: 'https://github.com/saraardila/BookNook',
    cover: '/capturas/booknook-inicio.webp',
    tone: 'soft',
    featured: true,
    // Las 4 que se muestran. Para cambiar una, intercámbiala con alguna de las comentadas.
    shots: [
      { caption: 'descubrir', src: '/capturas/booknook-descubrir.webp' },
      { caption: 'biblioteca', src: '/capturas/booknook-biblioteca.webp' },
      { caption: 'calendario', src: '/capturas/booknook-calendario.webp' },
      { caption: 'temas', src: '/capturas/booknook-temas.webp' },
      // { caption: 'ficha del libro', src: '/capturas/booknook-ficha.webp' },
      // { caption: 'compartir', src: '/capturas/booknook-compartir.webp' },
      // { caption: 'diario', src: '/capturas/booknook-diario.webp' },
      // { caption: 'tema summer', src: '/capturas/booknook-temas-summer.webp' },
    ],
    howItsMade: [
      {
        hand: '1. encuadro',
        label: 'Diseño',
        text: 'Cuatro temas que cambian toda la app, papel y color de tinta para el diario y una tarjeta para compartir tu progreso. Theming dinámico, animaciones y edge-to-edge.',
      },
      {
        hand: '2. disparo',
        label: 'Arquitectura',
        text: 'Capas Data, Domain y Presentation. StateFlow, casos de uso, patrón Repository e inyección con Hilt.',
      },
      // PENDIENTE: una decisión técnica y por qué la tomaste.
      // { hand: '3. revelo', label: 'Una decisión', text: '...' },
    ],
    roadmap: [
      'Migración a Kotlin Multiplatform y Compose Multiplatform',
      'Estadísticas y retos de lectura',
      'Recomendaciones',
      'Widget para la pantalla de inicio',
      'Copia de seguridad y exportación',
    ],
  },
  {
    slug: 'habit-tracker',
    name: 'Cozy Habits',
    short: 'Hábitos diarios con una mascota que te acompaña.',
    summary:
      'Hábitos con checklist, calendario, progreso diario y un diario de ánimo. Una mascota reacciona a lo que llevas hecho y las rachas desbloquean nuevas mascotas e insignias.',
    stackShort: 'Kotlin · Compose · Room',
    status: 'En desarrollo',
    role: 'Diseño y desarrollo',
    stack: 'Kotlin · Jetpack Compose · Hilt · Coroutines · Room',
    repo: 'https://github.com/saraardila/habit-tracker-compose',
    cover: '/capturas/habits-inicio.webp',
    tone: 'sky',
    // Las 4 que se muestran. Para cambiar una, intercámbiala con alguna de las comentadas.
    shots: [
      { caption: 'nuevo hábito', src: '/capturas/habits-nuevo.webp' },
      { caption: 'progreso', src: '/capturas/habits-progreso.webp' },
      { caption: 'insignias', src: '/capturas/habits-insignias.webp' },
      { caption: 'diario', src: '/capturas/habits-diario.webp' },
      // { caption: 'calendario', src: '/capturas/habits-calendario.webp' },
      // { caption: 'ajustes', src: '/capturas/habits-ajustes.webp' },
      // { caption: 'diario vacío', src: '/capturas/habits-diario-vacio.webp' },
      // { caption: 'empezando', src: '/capturas/habits-vacio.webp' },
    ],
    howItsMade: [
      {
        hand: '1. encuadro',
        label: 'Diseño',
        text: 'Una mascota que cambia de expresión según tu progreso del día, mascotas que se desbloquean con las rachas y modo oscuro.',
      },
      {
        hand: '2. disparo',
        label: 'Arquitectura',
        text: 'MVVM en Compose, con Hilt para la inyección de dependencias y Room para guardar los hábitos en local.',
      },
    ],
    roadmap: [],
  },
];

/** La tercera foto de la cuerda: algo que estás haciendo ahora mismo */
export const upcoming = {
  title: 'En el revelador',
  text: 'BookNook con Kotlin Multiplatform y Compose Multiplatform.',
};

export const links = {
  linkedin: 'https://www.linkedin.com/in/sara-ardila/',
  github: 'https://github.com/saraardila',
  /** Si quieres que aparezca tu email en Contacto, ponlo aquí. Vacío = no se muestra. */
  email: '',
  /** Tu CV en PDF, dentro de /public. Vacío = no se muestra el botón. */
  cv: '/cv/Sara-Ardila-CV.pdf',
};
