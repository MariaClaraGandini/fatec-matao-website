<template>
  <main>
    <b-card class="form-card">
      <b-card-text class="curses-style">
        {{ $t("pages.courses.textAgro") }}
      </b-card-text>
    </b-card>

    <b-container class="py-4">
      <b-row class="text-center">
        <b-col cols="12">
          <h2 class="subtitle-style">
            {{ $t("pages.courses.textArea") }}
          </h2>

          <hr class="hr-curses mt-3" />

          <p class="description">
            {{ $t("pages.courses.agroText") }} <br />
            {{ $t("pages.courses.agroText1") }} <br />
            {{ $t("pages.courses.textDuration1") }} <br />
            {{ $t("pages.courses.textPeriod1") }} <br />
            {{ $t("pages.courses.textVacancies") }} <br />
          </p>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="py-0">
      <b-row class="text-center">
        <b-col cols="12">
          <h2 class="subtitle-style">
            {{ $t("pages.courses.textProfile") }}
          </h2>

          <hr class="hr-curses mt-3" />

          <p class="description">
            {{ $t("pages.courses.textAgro2") }}
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
            " O Tecnólogo em Análise de Processos Agroindustriais, desenvolve processos!",
        },
        // Open Graph
        { property: "og:title", content: "Fatec Matão | Cursos" },
        { property: "og:site_name", content: "Fatec Matão | Cursos" },
        {
          property: "og:description",
          content:
            " O Tecnólogo em Análise de Processos Agroindustriais, desenvolve processos!",
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

