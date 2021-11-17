<template>
  <main>
    <b-container class="py-4">
      <b-row>
        <b-col
          cols="12"
          lg="6"
          class="
            d-flex
            flex-column
            align-items-center
            justify-content-center
            py-3
          "
        >
          <div>
            <h1>
              {{ $t('pages.home.title') }}
            </h1>

            <p class="description">
              {{ $t('pages.home.titleDesc') }}
            </p>

            <div>
              <a
                href="https://www.vestibularfatec.com.br/home/"
                target="_blank"
                class="link-one"
              >
                {{ $t('pages.home.entranceExamButton') }}
              </a>

              <nuxt-link to="/contact" class="link-two">
                {{ $t('pages.home.contactButton') }}
              </nuxt-link>
            </div>
          </div>
        </b-col>

        <b-col
          cols="12"
          lg="6"
          class="d-flex align-items-center justify-content-center py-4"
        >
          <img
            class="img-fluid"
            height="300"
            src="../static/images/man-image.png"
            alt="Estudante fatecano"
          />
        </b-col>
      </b-row>
    </b-container>

    <b-carousel
      id="carousel-1"
      v-model="slide"
      :interval="4000"
      controls
      background="#F1F1F1"
      img-height="450"
      img-width="1920"
      style="text-shadow: 1px 1px 2px #333"
      @sliding-start="onSlideStart"
      @sliding-end="onSlideEnd"
    >
      <b-carousel-slide>
        <template #img>
          <img
            src="../static/images/banner-vestibular.jpg"
            alt="Inscrições abertas para o vestibular"
            title="Inscrições abertas para o vestibular"
            draggable="false"
            height="450"
            width="1920"
            class="d-block img-fluid mx-auto"
          />
        </template>
      </b-carousel-slide>

      <b-carousel-slide>
        <template #img>
          <img
            src="../static/images/banner-redes.jpg"
            alt="Nos acompanhe nas redes"
            title="Nos acompanhe nas redes"
            draggable="false"
            height="450"
            width="1920"
            class="d-block img-fluid mx-auto"
          />
        </template>
      </b-carousel-slide>
    </b-carousel>

    <b-container class="py-4">
      <b-row class="text-center">
        <b-col cols="12">
          <h2 class="subtitle-style">
            {{ $t('pages.home.objectives') }}
          </h2>

          <hr class="hr-style mt-3" />

          <p class="description-style">
            {{ $t('pages.home.objectivesDesc') }}
          </p>
        </b-col>
      </b-row>

      <b-row class="text-center mt-3">
        <b-col cols="12" lg="4">
          <div class="m-3">
            <img
              src="../static/icons/graduation-icon.svg"
              :alt="$t('pages.home.graduation')"
              :title="$t('pages.home.graduation')"
              draggable="false"
              width="90"
            />

            <p class="mt-3">
              {{ $t('pages.home.graduationDesc') }}
            </p>
          </div>
        </b-col>

        <b-col cols="12" lg="4">
          <div class="m-3">
            <img
              src="../static/icons/brain-icon.svg"
              :alt="$t('pages.home.knowledge')"
              :title="$t('pages.home.knowledge')"
              draggable="false"
              width="90"
            />

            <p class="mt-3">
              {{ $t('pages.home.knowledgeDesc') }}
            </p>
          </div>
        </b-col>

        <b-col cols="12" lg="4">
          <div class="m-3">
            <img
              src="../static/icons/search-icon.svg"
              :alt="$t('pages.home.research')"
              :title="$t('pages.home.research')"
              draggable="false"
              width="90"
            />

            <p class="mt-3">
              {{ $t('pages.home.researchDesc') }}
            </p>
          </div>
        </b-col>
      </b-row>
    </b-container>

    <b-container class="py-4">
      <b-row class="text-center">
        <b-col cols="12">
          <h2 class="subtitle-style">
            {{ $t('pages.home.news') }}
          </h2>

          <hr class="hr-style mt-3" />

          <p class="description-style">
            {{ $t('pages.home.newsDesc') }}
          </p>
        </b-col>
      </b-row>

      <b-row>
        <b-col cols="12" lg="4">
          <b-card
            :title="$t('pages.home.newsTitleOne')"
            img-src="../static/news/news-1.jpg"
            img-alt="Fatec - Projetando o futuro"
            img-top
            tag="article"
            style="max-width: 20rem; border: 1px solid #222"
            class="my-3 mx-auto"
          >
            <div class="d-flex align-items-center justify-content-between">
              <b-link
                href="https://www.youtube.com/watch?v=Arc5V_RAEH0"
                target="_blank"
                rel="noopener noreferrer"
                class="card-link"
              >
                {{ $t('pages.home.accessButton') }}
              </b-link>

              <span class="font-weight-normal">
                {{ $t('pages.home.newsDateOne') }}
              </span>
            </div>
          </b-card>
        </b-col>

        <b-col cols="12" lg="4">
          <b-card
            :title="$t('pages.home.newsTitleTwo')"
            img-src="../static/news/news-2.jpg"
            img-alt="Câmara aprova doações de áreas para Senai e Fatec"
            img-top
            tag="article"
            style="max-width: 20rem; border: 1px solid #222"
            class="my-3 mx-auto"
          >
            <div class="d-flex align-items-center justify-content-between">
              <b-link
                href="http://www.acomarcanet.com.br/materia.php?id_materia=6686&fbclid=IwAR2Lw4JIjAhiSh1Ob_FNum8y_beE--bcTemsVLtj6Wi1PHnVZcwgCDVp70g"
                target="_blank"
                rel="noopener noreferrer"
                class="card-link"
              >
                {{ $t('pages.home.accessButton') }}
              </b-link>

              <span class="font-weight-normal"> 
                {{ $t('pages.home.newsDateTwo') }}
              </span>
            </div>
          </b-card>
        </b-col>

        <b-col cols="12" lg="4">
          <b-card
            :title="$t('pages.home.newsTitleThree')"
            img-src="../static/news/news-3.jpg"
            img-alt="Fatec ganha área de 21 mil metros quadrados para instalações"
            img-top
            tag="article"
            style="max-width: 20rem; border: 1px solid #222"
            class="my-3 mx-auto"
          >
            <div class="d-flex align-items-center justify-content-between">
              <b-link
                href="http://novo.matao.sp.gov.br/prefeitura-apresenta-area-de-21-mil-metros-quadrados-para-futuras-instalacoes-da-fatec-matao/"
                target="_blank"
                rel="noopener noreferrer"
                class="card-link"
              >
                {{ $t('pages.home.accessButton') }}
              </b-link>

              <span class="font-weight-normal">
                {{ $t('pages.home.newsDateThree') }}
              </span>
            </div>
          </b-card>
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
      title: "Fatec Matão | Início",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Faculdade de Tecnologia de Matão - Instituição pública estadual de ensino superior!'
        },
        { name: 'url', content: 'https://fatec-matao-web.vercel.app' },

        // Open Graph
        { property: 'og:title', content: 'Fatec Matão | Início' },
        { property: 'og:site_name', content: 'Fatec Matão | Início' },
        { property: 'og:description', content: 'Faculdade de Tecnologia de Matão - Instituição pública estadual de ensino superior!' },
        { property: 'og:url', content: 'https://fatec-matao-web.vercel.app' }
      ]
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
h1 {
  color: var(--black-200-color);
  font-size: clamp(2.45rem, 5vw - 0.5rem, 3.5rem);
  font-weight: 700;
}

h1 span {
  color: var(--primary-color);
}

p.description {
  color: var(--black-200-color);
  font-size: 1.1rem;
}

p.description span {
  color: var(--secondary-color);
  font-weight: 500;
}

a.link-one {
  background-color: var(--primary-color);
  border-radius: 5px;
  border: 2px solid var(--primary-color);
  color: var(--white-color);
  font-weight: 500;
  margin-right: 10px;
  padding: 5px 15px;
}

a.link-two {
  background-color: var(--white-color);
  border-radius: 5px;
  border: 2px solid var(--primary-color);
  color: var(--primary-color);
  font-weight: 500;
  padding: 5px 20px;
}

div.card-body {
  padding-inline: 15px;
}

h4.card-title {
  color: var(--secondary-color);
  font-size: 1.05rem !important;
  line-height: 1.5;
}

.card-link {
  background-color: var(--black-200-color);
  border-radius: 3px;
  color: var(--white-color);
  font-size: 0.95rem;
  padding: 5px 10px;
}
</style>
