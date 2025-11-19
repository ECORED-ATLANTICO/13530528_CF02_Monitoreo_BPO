export default {
  global: {
    Name: 'Incidencias en la operación.',
    Description:
      'Este componente formativo aborda fundamentos teóricos y prácticos de la detección y análisis de incidencias en la operación de servicios BPO. Explora métricas, tendencias, procedimientos de evaluación y principios de calidad aplicados al monitoreo del desempeño. Permite al aprendiz identificar desviaciones, aplicar acciones de mejora y fortalecer la cultura de calidad organizacional.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-principal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    //imagenesDecorativasBanner: [
    //{
    //clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
    //imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.svg'),
    //},
    //{
    //clases: ['banner-principal-decorativo-2'],
    //imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.svg'),
    //},
    //],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Análisis de comportamiento del servicio',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Tendencias en la operación',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Métricas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Patrones y desviaciones',
            hash: 't_1_3',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Aplicación de procedimientos de evaluación',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Técnicas de evaluación',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Herramientas',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Resultados frente a estándares',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Principios de calidad',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo: 'Mejora continua',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo: 'Normas de calidad',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Cultura organizacional',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Acciones de mejora',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Tipos',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Priorización de mejoras',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo: 'Comunicación de propuestas',
            hash: 't_4_3',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Principios de calidad',
      referencia:
        'Rivera-Arroyo, J. K., Araya-Castillo, L., Ganga-Contreras, F., Torres, J. P., & Sánchez-Morales, F. (2021). <em>Análisis bibliométrico de la investigación en calidad de servicio</em>. Interciencia, 46(11), 1-12.',
      tipo: 'Artículo',
      link:
        'https://www.interciencia.net/wp-content/uploads/2021/11/01_6759_A_Ganga_v46n11_12.pdf',
    },
    {
      tema: 'Aplicación de procedimientos de evaluación',
      referencia:
        'Torres Samuel, M., & Vásquez Stanescu, C. L. (2015). <em>Modelos de evaluación de la calidad del servicio: caracterización y análisis</em>. Compendium, 18(35), 1-15.',
      tipo: 'Artículo',
      link: 'https://www.redalyc.org/articulo.oa?id=88043199005',
    },
  ],
  glosario: [
    {
      termino: 'AHT <em>(Average Handle Time)</em>',
      significado:
        'Tiempo promedio que tarda un agente en atender una interacción, incluyendo conversación, tareas posteriores y cierre.',
    },
    {
      termino: 'Acción correctiva',
      significado:
        'Medida tomada para eliminar la causa de una no conformidad detectada.',
    },
    {
      termino: 'Acción preventiva',
      significado:
        'Medida anticipada que se aplica para evitar la ocurrencia de una posible no conformidad.',
    },
    {
      termino: 'CSAT <em>(Customer Satisfaction)</em>',
      significado:
        'Indicador que mide el nivel de satisfacción del cliente con el servicio recibido.',
    },
    {
      termino: 'Desviación',
      significado:
        'Diferencia entre el resultado obtenido y el estándar esperado.',
    },
    {
      termino: 'FCR <em>(First Contact Resolution)</em>',
      significado:
        'Métrica que indica el porcentaje de casos resueltos en el primer contacto con el cliente.',
    },
    {
      termino: 'Indicador de gestión',
      significado:
        'Variable cuantitativa o cualitativa que permite medir el desempeño de un proceso, servicio o equipo.',
    },
    {
      termino: 'Matriz de calidad',
      significado:
        'Herramienta que permite evaluar interacciones o procesos mediante criterios ponderados.',
    },
    {
      termino: 'PDCA <em>(Plan-Do-Check-Act)</em>',
      significado:
        'Ciclo de mejora continua que estructura el análisis, la implementación, la verificación y el ajuste de acciones para optimizar procesos.',
    },
    {
      termino: 'SLA <em>(Service Level Agreement)</em>',
      significado:
        'Acuerdo formal entre cliente y proveedor que define los niveles mínimos de servicio esperados, incluyendo indicadores, metas y condiciones de cumplimiento.',
    },
  ],
  referencias: [
    {
      referencia:
        'Castellaños, P., & Farias, P. (2011). <em>Estructuración de un modelo de servicio para el sector de Servicios tercerizados a distancia BPO&O</em>. Universidad EAN.',
      link: '',
    },
    {
      referencia:
        'da Silva, D. (s. f.). <em>6 métodos simples para la evaluación del servicio al cliente</em>. Zendesk.',
      link: 'https://www.zendesk.com.mx/blog/evaluacion-servicio-al-cliente/',
    },
    {
      referencia:
        'ESIC Business & Marketing School. (2025, mayo). <em>BPO: qué es, cómo funciona y ejemplos</em>. ESIC Rethink.',
      link:
        'https://www.esic.edu/rethink/marketing-y-comunicacion/bpo-que-es-como-funciona-y-ejemplos-c',
    },
    {
      referencia:
        'Montoya, C. A. (2009). <em>Evaluación del desempeño como herramienta para el análisis del capital humano</em>. Revista Científica Visión de Futuro, 11(1), Universidad Nacional de Misiones.',
      link: 'https://www.redalyc.org/pdf/3579/357935472005.pdf',
    },
    {
      referencia:
        'Sánchez Torres, W. C., Delgado Vélez, L. D., Gaviria Martínez, L. F., Montoya Ríos, F. J., & Ángel Rodrigo, V. B. (2014). <em>Una mirada analítica al sector de BPO en Colombia y Antioquia</em>. Institución Universitaria Esumer.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos ',
          cargo:
            'Responsable del Ecosistema de Recursos Educativos Digitales (RED)',
          centro: 'Dirección General',
        },
        {
          nombre: 'Miguel de Jesús Paredes Maestre',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Nicolas Cruz Ríos',
          cargo: 'Experto temático',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
        {
          nombre: 'Heydy Cristina González García',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Comercio y Servicios -Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Andrés Felipe Herrera',
          cargo: 'Diseñador <em>web</em> ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Carlos Andrés Díaz Pinto',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Alexander Rafael Acosta Bedoya',
          cargo: 'Animador y productor audiovisual ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'María Fernanda Morales Angulo',
          cargo: 'Evaluador de contenidos inclusivos y accesibles ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Luz Karime Amaya Cabra',
          cargo: 'Evaluador de contenidos inclusivos y accesibles ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jairo Luis Valencia Ebratt',
          cargo: 'Validador y vinculador de recursos digitales ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
        {
          nombre: 'Jonathan Adié Villafañe',
          cargo: 'Validador y vinculador de recursos digitales ',
          centro: 'Centro de Comercio y Servicios - Regional Atlántico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
