<template>
  <main>
    <b-card class="form-card">
      <b-card-text class="curses-style"> Tecnólogo em Alimentos </b-card-text>
    </b-card>

    <b-container class="py-4">
      <b-row class="text-center">
        <b-col cols="12">
          <h2 class="subtitle-style">Áreas de Atuação</h2>

          <hr class="hr-curses mt-3" />

          <p class="description">
            O Tecnólogo em Alimentos, desenvolve tecnologia para produtos
            cárneos, lácteos, frutas, fermentados e destilados, aborda matérias
            fundamentais como química, bioquímica e nutrição, além de ensinar
            todo o processo industrial, embalagem e conserva. <br />
            O aluno vai estar apto para planejar e gerenciar uma equipe, definir
            o tempo de exposição do alimento, aprender boas práticas de
            fabricação como: vestimenta, equipamento e higienização correta,
            também pode atuar em laboratórios, pesquisando características,
            matérias-primas e produtos. <br />
            - Duração: 6 semestres. <br />
            - Período: matutino e noturno.<br />
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
            O profissional de Alimentos pode atuar em redes de supermercados,
            usinas de cana-de-açúcar, fábricas de conserva, frigoríficos,
            indústrias alimentícias, assim como empreender abrindo um comércio.
          </p>

          <div class="mt-3">
            <b-card
              img-src="https://cdn.pixabay.com/photo/2018/01/15/07/52/woman-3083390_960_720.jpg"
              img-alt="Card image"
              img-left
              class="mb-0"
              style="width: 200px; height: 180px"
            >
              <b-card-text>
                <p class="description-class">
                  <b>Coordenador do curso </b><br />
                  Prof. usuario do curso <br />
                  <b>Email do coordenador </b><br />
                  usuariodocurso@fatec.sp.gov.br
                </p>
                <a href="#" target="_blank" class="link-one"> Grade </a>
                <a href="#" target="_blank" class="link-one"> horário </a>
              </b-card-text>
            </b-card>
          </div>
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
