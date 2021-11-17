<template>
  <main>
    <b-card class="form-card">
      <b-card-text class="curses-style"> Big Data no Agronegócio </b-card-text>
    </b-card>

    <b-container class="py-4">
      <b-row class="text-center">
        <b-col cols="12">
          <h2 class="subtitle-style">Áreas de Atuação</h2>

          <hr class="hr-curses mt-3" />

          <p class="description">
            <br />O Tecnólogo em Big Data no Agronegócio, desenvolve softwares,
            aborda matérias fundamentais como matemática, inglês, física,
            biologia , informática, agricultura e administração.<br />
            O aluno vai estar apto para gerar dados de negócios agrícolas,
            implementar banco de dados e configurar redes de sensores. <br />
            Na área de informática vai estudar: linguagens de programação,
            computação em nuvem e banco de dados. <br />
            Na área de agricultura vai estudar: manejo do solo, irrigação,
            colheita e noções de plantio. <br />
            Na área de administração vai estudar: empreendedorismo. além de
            gerenciar dispositivos de internet das coisas e produzir relatórios.
            <br />
            - Duração: 5 semestres. <br />
            - Período: matutino.<br />
            - Vagas: 40 vagas por período.
          </p>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="py-0">
      <b-row class="text-center">
        <b-col cols="12">
          <h2 class="subtitle-style">Perfil Do Profissional</h2>

          <hr class="hr-curses mt-3" />

          <p class="description">
            O profissional de Big Data no Agronegócio pode atuar em empresas de
            gestão da produção industrial, automação industrial, e banco de
            dados, assim como empreender abrindo um comércio.
          </p>
        </b-col>
      </b-row>
    </b-container>
  </main>
</template>

<script>
export default {
  data() {
    return {
      slide: 0,
      sliding: null,
    };
  },
  head() {
    return {
      title: "Fatec Matão | Cursos",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            " O Tecnólogo em Big Data no Agronegócio, desenvolve softwares!",
        },
        // Open Graph
        { property: "og:title", content: "Fatec Matão | Cursos" },
        { property: "og:site_name", content: "Fatec Matão | Cursos" },
        {
          property: "og:description",
          content:
            " O Tecnólogo em Big Data no Agronegócio, desenvolve softwares!",
        },
      ],
    };
  },
  methods: {
    onSlideStart(slide) {
      this.sliding = true;
    },
    onSlideEnd(slide) {
      this.sliding = false;
    },
  },
};
</script>

<style scoped>
p.description {
  color: var(--black-200-color);
  font-size: 1.1rem;
  text-align: justify;
}
p.description span {
  color: var(--secondary-color);
  font-weight: 500;
  text-align: justify;
}
.description-class {
  font-weight: 500;
  text-align: justify;
  color: var(--black-200-color);
  font-size: 1.2rem;
  margin-top: -18px;
}
.form-card {
  background: var(--secondary-color);
  font-weight: 10;
}
.curses-style {
  color: var(--white-color);
  font-size: 2.5rem;
  font-weight: 300px;
  text-align: center;
}
.hr-curses {
  background-color: var(--black-200-color);
  border: 2px solid var(--black-200-color);
  width: 300px;
}
a.link-one {
  background-color: var(--primary-color);
  border-radius: 5px;
  border: 2px solid var(--primary-color);
  color: var(--white-color);
  font-weight: 500;
  margin-right: 25px;
  padding: 5px 35px;
}
</style>
