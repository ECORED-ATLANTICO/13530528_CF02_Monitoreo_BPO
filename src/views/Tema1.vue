<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Análisis de comportamiento del servicio
    
    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") En los servicios BPO, el análisis del comportamiento del servicio implica una observación continua de los procesos, los equipos y los canales de atención, con el fin de evaluar su desempeño frente a las expectativas del cliente y los objetivos del negocio. Este análisis no se limita a los resultados finales, sino que considera la eficiencia, la coherencia y la capacidad de respuesta en cada etapa operativa.
        .cajon.color-primario.bg-color-2.p-4
          p.mb-0 Comprender el comportamiento del servicio permite interpretar datos, reconocer patrones y anticipar desviaciones que impacten la calidad y satisfacción del cliente. Este enfoque analítico facilita la toma de decisiones fundamentadas, orientadas a la optimización de recursos, la mejora continua y el fortalecimiento de la experiencia del usuario dentro del entorno de gestión BPO.
    
    separador
    
    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.1 Tendencias en la operación
    
    .bg-full-width.bg-color-3
      .px-4.px-md-5
        img(data-aos="fade-down")(src="@/assets/curso/tema1/2.png", alt="Imagen decorativa")

        .row.justify-content-center.align-items-center.z-2.mb-5
          .col-lg-10
            p.banner-text Las tendencias operativas son representaciones dinámicas del comportamiento del servicio a lo largo del tiempo, analizar estas tendencias permite identificar variaciones en el volumen de interacciones, los tiempos de atención y la frecuencia de errores, lo cual es clave para anticipar sobrecargas, ajustar recursos y prevenir fallos. Según Verint (2023), el análisis de tendencias debe ser parte del monitoreo continuo, ya que permite detectar señales tempranas de deterioro en la calidad del servicio.
        
        .row.justify-content-center.mb-5
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Figura 1.
              span Tendencias principales.
            figure.mb-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema1/3.svg", data-aos="zoom-in", alt="La figura muestra los tres tipos principales de tendencias en el comportamiento del servicio: lineales, que reflejan un crecimiento o disminución constante en el tiempo; estacionales, que se repiten en periodos específicos como campañas navideñas; e irregulares, que no siguen un patrón definido y suelen relacionarse con eventos puntuales.")
              img.d-flex.d-lg-none(src="@/assets/curso/tema1/4.svg", data-aos="zoom-in", alt="La figura muestra los tres tipos principales de tendencias en el comportamiento del servicio: lineales, que reflejan un crecimiento o disminución constante en el tiempo; estacionales, que se repiten en periodos específicos como campañas navideñas; e irregulares, que no siguen un patrón definido y suelen relacionarse con eventos puntuales.")
            figcaption SENA, 2025.
    
    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/tema1/5.png')})`}"
      )(data-aos="zoom-in")
      .bloque-texto-g__texto.p-4
        p.mb-0 El análisis de tendencias requiere herramientas como dashboards operativos, reportes históricos, mapas de calor y sistemas de monitoreo en tiempo real, estas herramientas permiten visualizar el comportamiento del servicio y tomar decisiones basadas en evidencia. Por ejemplo, un aumento en el volumen de llamadas durante una campaña comercial puede generar mayor tiempo promedio de atención y un incremento en la tasa de errores por rotación de personal. Este tipo de análisis facilita la comprensión de cómo los factores operativos y externos influyen en el desempeño del servicio, promoviendo acciones preventivas y correctivas que fortalezcan la eficiencia y la calidad en los entornos BPO.
    
    separador
    
    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.2 Métricas
    
    .row.mb-5
      .col-lg-2.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/6.svg", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        p(data-aos="fade-left") Interpretar métricas implica comprender el significado de los datos, su relación con los objetivos del servicio y las decisiones que orientan la mejora del desempeño. Al compararlas con las metas establecidas en los SLA, se pueden validar los logros alcanzados, identificar oportunidades de optimización y fortalecer la gestión de calidad. De acuerdo con Zendesk (2022), una métrica bien contextualizada ofrece información valiosa para ajustar estrategias según el canal de atención, el tipo de interacción y el perfil del cliente, impulsando una operación más eficiente y orientada a resultados. Las métricas pueden clasificarse en:
    
    .row.mb-5
      .col-lg-6.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/7.png", data-aos="fade-down")
        .bg-color-4.p-5
          h5 Cuantitativas
          p.mb-0 Expresadas en números, como TTR (tiempo de respuesta), AHT (tiempo promedio de atención) y FCR (resolución en primer contacto).
      .col-lg-6.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/8.png", data-aos="fade-up")
        .bg-color-2.p-5
          h5 Cualitativas
          p.mb-0.mb-lg-4 Basadas en percepciones o auditorías, como comentarios en encuestas, análisis de tono o adherencia al protocolo.
    
    .row.mb-5
      .col-lg-4.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema1/9.png", data-aos="zoom-in")
      .col-lg-8.order-lg-1
        p(data-aos="fade-left") Comparar las métricas con las metas establecidas permite evaluar el nivel de cumplimiento y orientar decisiones de mejora. Por ejemplo, una ligera disminución en la satisfacción del cliente puede reflejar ajustes recientes en los protocolos de atención, mientras que un incremento en la resolución en primer contacto evidencia el impacto positivo de la capacitación. Del mismo modo, un aumento en el tiempo promedio de atención puede relacionarse con la complejidad de los casos atendidos. Este análisis integral facilita comprender las causas detrás de los resultados y aplicar estrategias que optimicen el desempeño del servicio BPO.
    
    separador
    
    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 1.3 Patrones y desviaciones
    
    p.mb-5 Identificar patrones y desviaciones es una habilidad clave para la gestión operativa. Los patrones permiten reconocer comportamientos repetitivos que afectan el desempeño, mientras que las desviaciones evidencian variaciones que se alejan de lo esperado. Según ESIC (2021), el análisis de patrones es esencial para anticipar incidencias, diseñar acciones correctivas y fortalecer la mejora continua. Los patrones pueden clasificarse en:

    .row.justify-content-center.mb-5
      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/10.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Temporales
            p.mb-0 Se presentan en periodos definidos, como días o semanas. Por ejemplo, un aumento en el abandono de llamadas los lunes puede indicar la necesidad de ajustar la cobertura de agentes.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/11.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Conductuales
            p.mb-0 Derivan del comportamiento de agentes o clientes. Un descenso en la satisfacción del cliente podría relacionarse con cambios en los protocolos de atención o en el guion de servicio.

      .col-xl-4.col-lg-6.col-md-9.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left").tarjeta
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/tema1/12.png", alt="alt")
          .crd_hover_txt--body
            h4.mb-3 Técnicos
            p.mb-0 Surgen por fallos en sistemas, herramientas o procesos. Por ejemplo, errores frecuentes en la validación de datos pueden asociarse con fallos en el sistema de captura.

    
    
    
 
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    mostrarIndicadorTarjetaAudio: true,
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
