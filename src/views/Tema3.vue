<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Principios de calidad
    
    img(data-aos="fade-down")(src="@/assets/curso/tema3/1.png", alt="Imagen decorativa")

    .row.justify-content-center.align-items-center.z-2.mb-5
      .col-lg-10
        p.banner-text La calidad en los servicios BPO representa una filosofía integral que se refleja en cada proceso, interacción y decisión dentro de la organización. Este capítulo orienta al aprendiz en la comprensión de los principios que impulsan la mejora continua, las normas que consolidan estándares internacionales y la cultura organizacional que promueve la satisfacción y fidelización del cliente.
    
    p.mb-5 La aplicación de estos principios fortalece la eficiencia operativa, potencia el talento humano y transforma la prestación del servicio en una experiencia de valor, sostenida en la excelencia y la confianza.

    separador
    
    #t_3_1.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.1	Mejora continua

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La mejora continua constituye el eje que impulsa la evolución y sostenibilidad de los servicios BPO. Más que corregir fallas puntuales, implica un proceso constante de análisis, optimización y aprendizaje organizacional. Su propósito es generar valor mediante la revisión sistemática de los procesos, la identificación de oportunidades y la implementación de acciones que eleven la eficiencia, la calidad y la satisfacción del cliente.
        p Entre los enfoques más aplicados en el sector destacan el ciclo PDCA (<em>Plan-Do-Check-Act</em>) y el Lean service, ambos orientados a fortalecer la excelencia operativa y promover la innovación desde la práctica.
        p El ciclo PDCA estructura la mejora como un proceso iterativo y controlado. Por ejemplo, un BPO del sector financiero que detecta demoras en la resolución de casos puede planificar ajustes al protocolo, implementarlos, verificar los resultados y estandarizar los cambios exitosos. Este método garantiza trazabilidad, control y aprendizaje continuo.
    
    .bg-color-7.tarjeta.mb-5
      .px-4.px-md-5.py-4
        .row.align-items-center
          .col-lg-auto.order-2
            img(src="@/assets/curso/tema3/3.svg", style="max-width: 190px").mx-auto
          .col-lg.order-1.mb-3.mb-lg-0
            p.mb-0 Por su parte, el Lean service busca eliminar desperdicios y maximizar el valor entregado al cliente. De acuerdo con Womack & Jones (2003), los desperdicios pueden manifestarse en tiempos muertos, duplicación de tareas o falta de coordinación entre áreas. En una operación de back office, aplicar Lean permitió reducir en un 25 % el tiempo de validación documental al eliminar pasos innecesarios y automatizar tareas repetitivas.
            p.mb-0 Ambos enfoques comparten la premisa de que la calidad se construye con método, disciplina y compromiso. La mejora continua, en consecuencia, se consolida como una práctica estratégica que convierte cada desafío operativo en una oportunidad de progreso.

    .bg-full-width.bg-color-8
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 1.
              span Comparación entre PDCA y <em>Lean service</em>
            
            .tabla-a.color-primario.mb-5 
              table
                caption Fuente: SENA, 2025, con base en Womack & Jones, 2003.
                thead
                  tr
                    th.bg-color-9 Enfoque
                    th.bg-color-9 Propósito principal
                    th.bg-color-9 Aplicación en BPO
                    th.bg-color-9 Beneficio clave
                tbody.bg-color-white
                  tr
                    td PDCA.
                    td Proceso cíclico que guía la planificación, ejecución, verificación y ajuste de las acciones de mejora.
                    td Revisión y ajuste de protocolos operativos, seguimiento de indicadores y estandarización de procesos.
                    td Asegura control, trazabilidad y aprendizaje organizacional.
                  tr
                    td Lean service.
                    td Filosofía orientada a eliminar desperdicios y optimizar los flujos de trabajo.
                    td Rediseño de tareas repetitivas y automatización de procesos administrativos o de soporte.
                    td Incrementa la agilidad, eficiencia y valor percibido por el cliente.

    separador
    
    #t_3_2.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2  3.2	Normas de calidad

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") Las normas de calidad ofrecen marcos técnicos para garantizar que los procesos cumplan con estándares reconocidos internacionalmente. En servicios BPO, las más relevantes son ISO 9001 e ITIL, cada una con enfoques distintos pero complementarios.
        p ISO 9001 se centra en la gestión de calidad total, establece requisitos para documentar procesos, medir desempeño, gestionar riesgos y mejorar continuamente. Por ejemplo, una empresa BPO certificada en ISO 9001 debe tener procedimientos claros para atención al cliente, auditorías internas, revisión de indicadores y planes de mejora, esta norma promueve la estandarización, la trazabilidad y la satisfacción del cliente.
    
    .row.mb-5
      .col-lg-2.order-lg-2.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
      .col-lg-10.order-lg-1
        p(data-aos="fade-left") ITIL (Information Technology Infrastructure Library) se enfoca en la gestión de servicios de TI. En operaciones BPO con soporte técnico, ITIL permite estructurar procesos como gestión de incidentes, cambios, niveles de servicio y resolución de problemas. Según Axelos (2021), aplicar ITIL mejora la alineación entre tecnología y negocio, reduce tiempos de respuesta y fortalece la experiencia del usuario.
        p Ambas normas permiten profesionalizar la operación, garantizar cumplimiento y generar confianza en clientes y aliados.

    .bg-full-width.bg-color-8
      .px-4.px-md-5
        .row.justify-content-center
          .col-lg-10
            .titulo-sexto.color-acento-contenido
              h5 Tabla 2.
              span Comparación entre ISO 9001 e ITIL
            
            .tabla-a.color-primario.mb-5 
              table
                caption SENA, 2025 con base en Axelos, 2021.
                thead
                  tr
                    th.bg-color-9 Norma
                    th.bg-color-9 Enfoque principal
                    th.bg-color-9 Aplicación en BPO
                    th.bg-color-9 Característica clave
                tbody.bg-color-white
                  tr
                    td ISO 9001.
                    td Gestión de calidad total.
                    td Procesos operativos y administrativos.
                    td Documentación y mejora continua.
                  tr
                    td ITIL.
                    td Gestión de servicios de TI.
                    td Soporte técnico y gestión de incidentes.
                    td Estructura y alineación tecnológica.

    separador
    
    #t_3_3.titulo-segundo.color-acento-contenido(data-aos="flip-up")
      h2 3.3	Cultura organizacional
    
    .row.mb-5.align-items-center
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/6.png", data-aos="zoom-in")
      .col-lg-8
        p(data-aos="fade-left") La cultura organizacional es el conjunto de valores, creencias y prácticas que definen cómo se trabaja en una empresa. En servicios BPO, una cultura orientada al cliente implica que todos los procesos, decisiones y comportamientos están alineados con la experiencia del usuario final. No basta con cumplir indicadores: se trata de comprender, anticipar y cuidar cada interacción.
        p Según Kotler & Keller (2016), las organizaciones centradas en el cliente no solo miden satisfacción, sino que diseñan sus servicios para resolver problemas con empatía, generar valor y construir relaciones duraderas. Por ejemplo, una empresa BPO que promueve la escucha activa, la retroalimentación constante y el reconocimiento al buen servicio, fortalece su cultura y mejora sus indicadores.
    
    .bg-full-width.bg-color-8
      .px-4.px-md-5
        .row.justify-content-center.mb-5
          .col-lg-6
            .titulo-sexto.color-acento-contenido
              h5 Figura 2.
              span Acciones de una cultura organizacional orientada al cliente.
            figure.mb-2
              img.d-none.d-lg-flex(src="@/assets/curso/tema3/7.svg", data-aos="zoom-in", alt="La figura muestra tres acciones que fortalecen la cultura de calidad en los servicios BPO: capacitación continua en experiencia del cliente, reconocimiento a los agentes por su desempeño en calidad, además de espacios y protocolos que promueven la empatía y la mejora interna.")
            figcaption SENA, 2025.
    
    p.mb-5 Una cultura orientada al cliente se cultiva con coherencia y compromiso. No surge de políticas aisladas, sino de la integración entre la formación del talento humano, la flexibilidad operativa, el reconocimiento del esfuerzo y la escucha activa. Cada acción refuerza la confianza, impulsa la mejora continua y convierte la atención en una experiencia significativa.

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0
        figure
          img(src="@/assets/curso/tema3/8.png", data-aos="zoom-in")
      .col-lg-8
        TabsA.color-primario.mb-5
          //- .tarjeta debe ir acompañado de una de una de estas clases => 
          //- .color-primario, .color-secundario, .color-acento-contenido, .color-acento-botones
          //- estas clases tambien tienen un modificador --borde
          .tarjeta.color-acento-botones--borde.p-4(titulo="Capacitación  continua")
            h4 Capacitación  continua
            p Implementar talleres sobre empatía, escucha activa y resolución de conflictos. Esto fortalece la relación con el cliente y mejora indicadores como el CSAT (satisfacción) y el FCR (resolución en primer contacto).
          .tarjeta.color-acento-botones--borde.p-4(titulo="Protocolos flexibles")
            h4 Protocolos flexibles
            p Ajustar los procedimientos según el contexto del cliente y las condiciones del servicio. Esto reduce escalamientos y mejora la percepción de atención personalizada.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Reconocimiento por calidad")
            h4 Reconocimiento por calidad
            p Premiar interacciones sobresalientes por su trato humano o eficacia, más allá del volumen de llamadas. Esto incrementa la motivación del personal y eleva el desempeño global.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Escucha interna")
            h4 Escucha interna
            p Recoger la voz de los agentes mediante encuestas o grupos focales para identificar oportunidades de mejora. Esto permite decisiones más acertadas y procesos operativos más eficientes.
      
</template>

<script>
export default {
  name: 'Tema3',
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
