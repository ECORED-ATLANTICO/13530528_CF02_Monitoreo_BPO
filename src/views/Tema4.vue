<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Tema 4
    
    img(data-aos="fade-down")(src="@/assets/curso/tema4/1.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10
        p.banner-text Las acciones de mejora representan el paso decisivo entre la evaluación y la excelencia operativa. En los servicios BPO, implican analizar causas, definir soluciones sostenibles y aplicar cambios que fortalezcan la eficiencia y la experiencia del cliente. Implementarlas de forma planificada permite transformar los resultados en aprendizaje, prevenir recurrencias y consolidar una cultura enfocada en la calidad y la innovación continua.

    separador
    
    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.1 Tipos
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/2.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Las acciones de mejora pueden clasificarse en correctivas y preventivas, según el momento en que se aplican y el tipo de problema que abordan. Las acciones correctivas responden a desviaciones ya ocurridas; buscan eliminar la causa raíz y evitar que se repitan. Las acciones preventivas, en cambio, se anticipan a posibles fallos, fortaleciendo procesos antes de que surjan incidencias.
        p Según ISO 9001 (2021), ambas acciones deben ser documentadas, trazables y evaluadas en su efectividad, por ejemplo, si se detecta un aumento en los errores de validación de datos, una acción correctiva puede ser capacitar al equipo en el protocolo actualizado, una acción preventiva sería rediseñar el formulario para evitar campos ambiguos.
    
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario.bg-color-5.p-5
        .row.justify-content-center.align-items-end.mb-4
          .col-4
            figure
              img(src='@/assets/curso/tema4/3.svg', alt='Texto descriptivo 1')
          .col-8 
            h4 Acción correctiva
        p Se aplica después de detectar un problema. Su finalidad es eliminar la causa raíz para evitar su repetición. En un servicio BPO, puede consistir en analizar los registros de llamadas, identificar el origen de los errores y reforzar la capacitación del personal.
    
      .col-md.tarjeta.color-primario.bg-color-2.p-5
        .row.justify-content-center.align-items-end.mb-4
          .col-3
            figure
              img(src='@/assets/curso/tema4/4.svg', alt='Texto descriptivo 1')
          .col-9 
            h4 Acción preventiva
        p Se ejecuta antes de que ocurra un problema. Busca anticiparse a los riesgos y fortalecer los procesos para garantizar la estabilidad del servicio. En BPO, puede implicar rediseñar protocolos o automatizar controles para evitar fallas recurrentes.
    
    .bg-full-width.bg-color-8
      .px-4.px-md-5
        separador
        
        #t_4_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
          h2 4.2 Priorización de mejoras

        .row.mb-5
          .col-lg-4.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/5.png", data-aos="zoom-in")
          .col-lg-8
            p(data-aos="fade-left") Diseñar acciones de mejora en servicios BPO exige más que identificar oportunidades: requiere decidir cuáles deben implementarse primero, con qué recursos y en qué momento. La priorización de mejoras es una práctica estratégica que permite enfocar esfuerzos en aquellas acciones que generan mayor valor, corrigen desviaciones críticas o fortalecen procesos clave. Esta decisión no debe basarse en intuición, sino en criterios técnicos que garanticen efectividad y sostenibilidad. Según ESIC (2021), los criterios más utilizados para priorizar mejoras en entornos operativos incluyen:
    
    .bg-full-width.bg-color-8
      .px-4.px-md-5
        TabsB.color-acento-contenido.mb-5
          .p-4(titulo="Impacto  en el cliente" :icono="require('@/assets/componentes/4.svg')")
            .row.align-items-center.p-4
              .col-lg-7.mb-4.mb-lg-0
                h4 Impacto  en el cliente
                p.mb-0 Evalúa cuánto mejora la experiencia del usuario final. Las acciones con alto impacto suelen priorizarse porque fortalecen la satisfacción, la fidelización y la reputación del slgvicio.
              .col-lg-5.mb-4.mb-md-0
                figure
                  img(src='@/assets/curso/tema4/6.png', alt='Texto que describa la imagen')
          .p-4(titulo="Urgencia operativa" :icono="require('@/assets/componentes/5.svg')")
            .row.align-items-center.p-4
              .col-lg-7.mb-4.mb-lg-0
                h4 Urgencia operativa
                p.mb-0 Analiza la inmediatez con la que debe resolverse un problema para evitar afectaciones mayores en la operación o en los indicadores de desempeño.
              .col-lg-5.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema4/7.png', alt='Texto que describa la imagen')
          .p-4(titulo="Costo de implementación" :icono="require('@/assets/componentes/6.svg')")
            .row.align-items-center.p-4
              .col-lg-7.mb-4.mb-lg-0
                h4 Costo de implementación
                p.mb-0 Considera los recursos financieros, humanos y técnicos necesarios para ejecutar la mejora. Permite equilibrar el beneficio esperado frente a la inversión requerida.
              .col-lg-5.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema4/8.png', alt='Texto que describa la imagen')
          .p-4(titulo="Facilidad de ejecución" :icono="require('@/assets/componentes/7.svg')")
            .row.align-items-center.p-4
              .col-lg-7.mb-4.mb-lg-0
                h4 Facilidad de ejecución
                p.mb-0 Mide el nivel de complejidad del cambio. Las mejoras simples y de rápida aplicación suelen implementarse primero si aportan resultados visibles.
              .col-lg-5.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema4/9.png', alt='Texto que describa la imagen')
          .p-4(titulo="Alineación con SLA" :icono="require('@/assets/componentes/8.svg')")
            .row.align-items-center.p-4
              .col-lg-7.mb-4.mb-lg-0
                h4 Alineación con SLA
                p.mb-0 Determina si la acción contribuye al cumplimiento de los Acuerdos de Nivel de Servicio (SLA), asegurando coherencia con los compromisos establecidos con el cliente.
              .col-lg-5.mb-4.mb-lg-0
                figure
                  img(src='@/assets/curso/tema4/10.png', alt='Texto que describa la imagen')

        .row.mb-5
          .col-lg-2.mb-3.mb-lg-0
            figure
              img(src="@/assets/curso/tema4/11.svg", data-aos="zoom-in")
          .col-lg-10
            p(data-aos="fade-left") La priorización no implica descartar ninguna, sino establecer un orden lógico que permita avanzar sin comprometer la operación. Una herramienta útil para este análisis es la matriz de impacto, que cruza el nivel de afectación con la facilidad de implementación, esta matriz permite visualizar qué acciones deben abordarse primero y cuáles pueden programarse a mediano plazo.
            p Además, priorizar con criterio fortalece la cultura de mejora continua, evita la dispersión de esfuerzos y promueve decisiones basadas en evidencia, cuando los equipos comprenden por qué se prioriza una acción, se genera mayor compromiso y alineación operativa.
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Ejemplo de matriz de priorización de mejoras
        
        .tabla-a.color-primario.mb-5 
          table
            caption SENA, 2025 con base en ESIC, 2021.
            thead
              tr
                th.bg-color-9 Mejora propuesta
                th.bg-color-9 Impacto en el servicio
                th.bg-color-9 Facilidad de implementación
                th.bg-color-9 Prioridad sugerida
            tbody.bg-color-white
              tr
                td Ajuste en protocolo de chat.
                td Medio.
                td Alta.
                td Media.
              tr
                td Capacitación en resolución.
                td Alto.
                td Media.
                td Alta.
              tr
                td Rediseño de sistema CRM.
                td Alto.
                td Baja.
                td Media/Baja.

    separador
    
    #t_4_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 4.3	Comunicación de propuestas
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/12.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Diseñar acciones de mejora en servicios BPO es el primer paso para que estas acciones generen impacto real, deben ser comunicadas con claridad, ejecutadas con compromiso y seguidas con rigor. La comunicación de propuestas permite alinear a los equipos, facilitar la toma de decisiones y promover una cultura de colaboración. El seguimiento, por su parte, garantiza que las acciones no queden en el papel, sino que se traduzcan en resultados medibles y sostenibles.

    .bg-full-width.bg-color-8
      .px-4.px-md-5
        .row.justify-content-center.mb-5
          .col-lg-8
            .titulo-sexto.color-acento-contenido
              h5 Figura 3.
              span Elementos clave de una propuesta bien comunicada
            figure.mb-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema4/13.svg", data-aos="zoom-in", alt="La figura presenta los componentes esenciales para comunicar una propuesta de mejora de manera efectiva. Inicia con la identificación del problema, seguida de la acción sugerida y la definición de los responsables. Además, incluye el indicador de éxito, que permite medir la efectividad de la mejora, y el plazo de implementación, que determina cuándo debe ejecutarse y revisarse la acción.")
              img.d-flex.d-lg-none(src="@/assets/curso/tema4/13-1.svg", data-aos="zoom-in", alt="La figura presenta los componentes esenciales para comunicar una propuesta de mejora de manera efectiva. Inicia con la identificación del problema, seguida de la acción sugerida y la definición de los responsables. Además, incluye el indicador de éxito, que permite medir la efectividad de la mejora, y el plazo de implementación, que determina cuándo debe ejecutarse y revisarse la acción.")
            figcaption SENA, 2025.
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema4/14.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Según Kotler & Keller (2016), la comunicación efectiva en entornos operativos debe ser técnica pero accesible, orientada a la acción y abierta a la retroalimentación, esto implica usar lenguaje claro, evitar ambigüedades y promover espacios de diálogo.
        p.mb-0 El seguimiento es la fase que valida si la acción fue implementada correctamente, si generó el impacto esperado y si requiere ajustes, puede hacerse mediante reuniones operativas, reportes comparativos, auditorías internas o encuestas de percepción. Un seguimiento efectivo no solo verifica el cumplimiento, sino que fortalece la cultura de mejora continua.
    
    .cajon.color-primario.bg-color-6.p-4
      p.mb-0 En empresas BPO con alta rotación o múltiples campañas, el seguimiento permite mantener la coherencia operativa, evitar la repetición de errores y consolidar aprendizajes, además, cuando los equipos ven que sus propuestas son escuchadas y sus acciones monitoreadas, se genera mayor compromiso y sentido de propósito.

</template>

<script>
export default {
  name: 'Tema4',
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
