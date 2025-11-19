<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Aplicación de procedimientos de evaluación
    
    img(data-aos="fade-down")(src="@/assets/curso/tema2/1.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10
        p.banner-text La aplicación de procedimientos de evaluación en los servicios BPO permite garantizar la calidad y eficiencia de los procesos mediante el uso de técnicas, herramientas e indicadores que reflejan el desempeño real de la operación. Este enfoque facilita medir resultados, analizar su coherencia con los estándares establecidos y convertir la información obtenida en acciones de mejora. Comprender cómo se estructuran las evaluaciones técnicas y cómo se validan los hallazgos fortalece la capacidad para optimizar recursos, elevar la satisfacción del cliente y consolidar una gestión basada en evidencia.
    
    separador
    
    #t_2_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.1 Técnicas de evaluación
    
    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/2.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En el contexto del monitoreo de servicios BPO, las técnicas de evaluación constituyen un componente esencial para determinar el nivel de desempeño, identificar desviaciones y definir acciones de mejora. Estas técnicas permiten recopilar, analizar e interpretar información sobre la operación, tanto desde una perspectiva numérica como cualitativa. Su aplicación sistemática contribuye a la toma de decisiones basadas en evidencia y al fortalecimiento de la calidad del servicio, al integrar datos objetivos y percepciones del cliente o del agente.

        .cajon.color-primario.bg-color-2.p-4
          p.mb-0 De acuerdo con las buenas prácticas del sector, una evaluación efectiva combina herramientas cuantitativas que miden tiempos, errores o niveles de satisfacción, con enfoques cualitativos que interpretan comportamientos, actitudes o causas subyacentes, logrando una visión integral del desempeño operativo y humano. A continuación, se presenta una comparación que permite identificar las principales características y aplicaciones de las distintas técnicas de evaluación utilizadas en los servicios BPO:
    
    .row.justify-content-center
      .col-lg-10
        AcordionA(tipo="a" clase-tarjeta="tarjeta bg-color-5")
          .div(titulo="Técnica  cuantitativa")
            .row.justify-content-center
              .col-lg-10.mb-3.mb-lg-0
                p.mb-0.ms-5 Se enfoca en la medición numérica del desempeño operativo mediante indicadores como tiempos de respuesta, niveles de error o satisfacción del cliente. Permite obtener resultados objetivos y comparables que facilitan la toma de decisiones basadas en datos, evidenciando el rendimiento de los agentes o procesos.
              .col-md-6.col-lg-2
                figure
                  img(src="@/assets/curso/tema2/3.svg")
          .div(titulo="Técnica cualitativa")
            .row.justify-content-center
              .col-lg-10.mb-3.mb-lg-0
                p.mb-0.ms-5 Analiza aspectos descriptivos del servicio, como la comunicación, la empatía o la percepción del usuario, a través de observaciones, auditorías o encuestas abiertas. Su aplicación permite comprender causas y comportamientos que los números no revelan, aportando una visión más humana y contextual del servicio.
              .col-md-6.col-lg-2
                figure
                  img(src="@/assets/curso/tema2/4.svg")
          .div(titulo="Técnica mixta")
            .row.justify-content-center
              .col-lg-10.mb-3.mb-lg-0
                p.mb-0.ms-5 Integra el análisis numérico con la interpretación cualitativa, combinando métricas con percepciones para obtener una evaluación completa. Esta técnica permite correlacionar resultados de desempeño con factores humanos o procedimentales, fortaleciendo el diagnóstico integral del servicio.
              .col-md-6.col-lg-2
                figure
                  img(src="@/assets/curso/tema2/5.svg")
          .div(titulo="Técnica comparativa")
            .row.justify-content-center
              .col-lg-10.mb-3.mb-lg-0
                p.mb-0.ms-5 Contrasta el desempeño actual frente a estándares internos, históricos o del sector, con el fin de detectar brechas y oportunidades de mejora. Su aplicación favorece la mejora continua al establecer referencias que orientan la planificación estratégica y operativa del servicio.
              .col-md-6.col-lg-2
                figure
                  img(src="@/assets/curso/tema2/6.svg")
    
    separador
    
    #t_2_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.2 Herramientas
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5
        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema2/7.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") Las herramientas de evaluación son instrumentos diseñados para aplicar las técnicas de manera estructurada, confiable y estandarizada. En el entorno de los servicios BPO, estas herramientas permiten medir el cumplimiento de protocolos, la calidad de las interacciones y la capacidad de respuesta ante diferentes escenarios. Su correcta implementación garantiza objetividad en la evaluación, facilita la retroalimentación a los equipos de trabajo y contribuye a la mejora continua del servicio.
        
            .bg-color-6.p-4.tarjeta(data-aos="fade-left")
              .row.align-items-center
                .col-lg-auto.mb-3.mb-lg-0.order-2
                  img(src="@/assets/curso/tema2/8.svg", style="max-width: 166px").mx-auto
                .col-lg.order-1
                  p.mb-0 De acuerdo con Zendesk (2022), el uso de herramientas estandarizadas no solo incrementa la precisión de los resultados, sino que también favorece la comparación entre campañas, agentes o periodos operativos, fortaleciendo la gestión de desempeño y la cultura de calidad organizacional. A continuación se presentan las principales herramientas empleadas para evaluar el desempeño en los servicios BPO, describiendo sus características, propósitos y aplicaciones prácticas dentro de los procesos de monitoreo y control de calidad:

        TabsB.color-acento-contenido.mb-5
          .p-4(titulo="<em>Checklist</em>" :icono="require('@/assets/componentes/1.svg')")
            .row.align-items-center.p-4
              .col-lg-7.mb-4.mb-lg-0.order-2
                h4 <em>Checklist</em>
                p.mb-0 Instrumento de verificación rápida compuesto por una lista de ítems o pasos que el agente debe cumplir durante la atención. Permite auditar llamadas o procesos de manera ágil, asegurando la adherencia a protocolos operativos. Su simplicidad facilita la aplicación continua por parte de supervisores o analistas de calidad.
              .col-lg-5.mb-4.mb-lg-0.order-1
                figure
                  img(src='@/assets/curso/tema2/9.png', alt='Texto que describa la imagen')
          .p-4(titulo="Matriz de calidad" :icono="require('@/assets/componentes/2.svg')")
            .row.align-items-center.p-4
              .col-lg-7.mb-4.mb-lg-0.order-2
                h4 Matriz de calidad
                p.mb-0 Herramienta estructurada que pondera distintos criterios de desempeño, como cortesía, solución efectiva, manejo del cliente o uso adecuado de scripts. Su aplicación permite asignar puntajes objetivos y realizar retroalimentaciones basadas en evidencia, fortaleciendo la mejora técnica de los agentes.
              .col-lg-5.mb-4.mb-lg-0.order-1
                figure
                  img(src='@/assets/curso/tema2/10.png', alt='Texto que describa la imagen')
          .p-4(titulo="Simulador operativo" :icono="require('@/assets/componentes/3.svg')")
            .row.align-items-center.p-4
              .col-lg-7.mb-4.mb-lg-0.order-2
                h4 Simulador operativo
                p.mb-0 Recurso que recrea escenarios reales o críticos del servicio para evaluar la capacidad de respuesta, toma de decisiones y cumplimiento de procedimientos. Se utiliza tanto para fines de evaluación como de formación técnica, promoviendo el aprendizaje experiencial y la preparación ante contingencias.
              .col-lg-5.mb-4.mb-lg-0.order-1
                figure
                  img(src='@/assets/curso/tema2/11.png', alt='Texto que describa la imagen')
          
    separador
    
    #t_2_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 2.3 Resultados frente a estándares
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema2/12.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") La validación de resultados consiste en comparar los datos obtenidos durante la evaluación del servicio con los estándares previamente establecidos, con el propósito de determinar el grado de cumplimiento y orientar la toma de decisiones hacia la mejora continua. Este proceso permite identificar fortalezas, reconocer oportunidades de ajuste y asegurar que la operación mantenga coherencia con los compromisos pactados, las normas de calidad y las expectativas del cliente.
        p.mb-0 De acuerdo con Verint (2023), la validación debe desarrollarse de manera sistemática, trazable y basada en criterios objetivos, garantizando que los resultados sean medibles, comparables y contextualizados. En el entorno BPO, este análisis ofrece una comprensión integral del desempeño, al relacionar los indicadores cuantitativos con los factores operativos y humanos que influyen en la calidad del servicio. Los estándares frente a los cuales se realiza la validación pueden clasificarse en tres tipos:
    
    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/13.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Contractual
            p.mb-0 Se establecen en los acuerdos de nivel de servicio (SLA). Definen metas, indicadores y niveles mínimos de cumplimiento que el proveedor debe garantizar al cliente.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/14.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Normativo
            p.mb-0 Basados en normas y marcos internacionales como ISO 9001 o ITIL. Buscan asegurar la calidad, la trazabilidad y la mejora continua del servicio.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema2/15.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Interno
            p.mb-0 Diseñados por la propia empresa según sus políticas, procesos y objetivos. Incluyen protocolos de atención, metas internas y estándares adaptados a su operación.
    
    .cajon.color-primario.bg-color-6.p-4
      p.mb-0 Cada tipo de estándar cumple un propósito específico dentro del proceso de validación: los contractuales aseguran el cumplimiento de los compromisos establecidos con el cliente, los normativos garantizan la aplicación de buenas prácticas reconocidas a nivel internacional, y los internos facilitan la adaptación de la evaluación a la cultura, las políticas y los objetivos estratégicos de la organización.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
