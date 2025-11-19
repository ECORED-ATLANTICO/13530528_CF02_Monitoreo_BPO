<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/sintesis.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") El componente formativo Incidencias en la operación permite comprender los elementos clave del monitoreo del desempeño en servicios BPO, desde su análisis operativo hasta la implementación de acciones de mejora orientadas a la calidad. Se inicia con el estudio del comportamiento del servicio, sus tendencias, métricas y patrones, así como la interpretación de las desviaciones que impactan los resultados. Posteriormente, se profundiza en la aplicación de procedimientos de evaluación, lo que permite establecer su importancia en la medición objetiva del desempeño mediante técnicas, herramientas y validación de resultados frente a estándares. Asimismo, se analizan los principios de calidad, proporcionando herramientas para promover la mejora continua, la adopción de normas internacionales y el fortalecimiento de una cultura organizacional centrada en el cliente. Se presentan los tipos de acciones de mejora que influyen en la eficiencia del servicio, así como los criterios para priorizarlas y las estrategias para una comunicación efectiva de propuestas. La documentación aborda la integración entre desempeño, calidad y gestión del cambio. Para fortalecer la aplicación de estos conceptos, se detallan los aspectos técnicos y estratégicos de la mejora operativa. Finalmente, se analiza la manera en que el uso sistemático de la información y la cultura de la calidad permiten convertir las incidencias en oportunidades de aprendizaje y optimización del servicio.

    .row.justify-content-center.bg-color-sintesis.tarjeta.p-4.mb-3
      .col-lg-9.mb-5.bgs.p-4.brad
        figure
          img(src="@/assets/curso/sintesis.svg", alt="El componente formativo Incidencias en la operación ofrece una aproximación integral a los conocimientos fundamentales sobre el monitoreo del desempeño y la gestión de la calidad en los servicios BPO. Este módulo analiza detalladamente el comportamiento operativo del servicio, resaltando la importancia de las métricas, tendencias y desviaciones en cuanto a la toma de decisiones basadas en datos, y se desglosan los procedimientos y herramientas que permiten evaluar el cumplimiento frente a estándares establecidos. Asimismo, se estudian los principios que sustentan la mejora continua, la aplicación de normas de calidad y la consolidación de una cultura organizacional orientada al cliente. La propuesta profundiza en los tipos de acciones de mejora y en los criterios técnicos para su priorización, así como en las estrategias de comunicación efectiva que garantizan su implementación. Además, se destacan la integración entre desempeño y calidad, junto con la gestión de la información y el aprendizaje organizacional, enfatizando la necesidad de transformar las incidencias operativas en oportunidades de optimización para fortalecer la eficiencia y la experiencia del cliente. ")
    .row.justify-content-center
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
