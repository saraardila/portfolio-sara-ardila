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
    tone: 'soft',
    featured: true,
    // PENDIENTE: añade `src` a cada captura cuando las tengas.
    shots: [
      { caption: 'biblioteca' },
      { caption: 'progreso' },
      { caption: 'calendario' },
      { caption: 'diario' },
    ],
    howItsMade: [
      {
        hand: '1. encuadro',
        label: 'Diseño',
        text: 'Theming dinámico, animaciones y pantallas edge-to-edge.',
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
    name: 'Habit Tracker',
    short: 'Hábitos diarios con animaciones.',
    summary:
      'Seguimiento de hábitos diarios con animaciones en Compose y persistencia local. Pensada para que marcar un hábito sea un gesto agradable.',
    stackShort: 'Kotlin · Compose · Room',
    status: 'En desarrollo',
    role: 'Diseño y desarrollo',
    stack: 'Kotlin · Jetpack Compose · Hilt · Coroutines · Room',
    repo: 'https://github.com/saraardila/habit-tracker-compose',
    tone: 'sky',
    // PENDIENTE: capturas.
    shots: [],
    howItsMade: [
      {
        hand: '1. disparo',
        label: 'Arquitectura',
        text: 'MVVM en Compose, con Hilt para la inyección de dependencias y Room para guardar los hábitos en local.',
      },
    ],
    roadmap: [],
  },
];

/** Apps que todavía no tienen página propia */
export const upcoming = ['Quote Cards', 'Reading Nook', 'Pilates Studio'];

export const links = {
  linkedin: 'https://www.linkedin.com/in/sara-ardila/',
  github: 'https://github.com/saraardila',
};
