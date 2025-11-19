<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/intro/1.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El componente formativo Incidencias en la operación del servicio BPO, ofrece al aprendiz herramientas técnicas y prácticas para abordar el análisis del comportamiento del servicio y la identificación de desviaciones que afecten su desempeño. A partir del conocimiento de métricas, tendencias operativas y procedimientos de evaluación, se fortalecen las competencias para monitorear, interpretar y responder eficazmente ante incidencias en la gestión del servicio.
        .cajon.color-acento-contenido.bg-color-1.p-4
          p.mb-0 Este componente también enfatiza en la aplicación de principios de calidad y mejora continua, con un enfoque en la toma de decisiones basadas en datos y el cumplimiento de los estándares organizacionales. Además, promueve la cultura de la calidad, la comunicación efectiva y la implementación de acciones correctivas que optimicen los procesos. Así, se contribuye a la formación de profesionales capaces de asegurar la eficiencia y sostenibilidad en la operación de los servicios BPO.
    
        
    
    figure.mb-5
      .video.mb-2
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video

</template>

<script>
export default {
  name: 'Introduccion',
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
