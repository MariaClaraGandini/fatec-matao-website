<template>
  <main>
    <h1 class="text-center h1 font-weight-bold mx-2 mt-5 mb-3">
      Conheça nossos cursos superiores
    </h1>

    <p class="text-center mb-5">
      Estude em uma <strong>faculdade pública</strong> de <strong>qualidade</strong> e <strong>credibilidade</strong>.
    </p>

    <div class="d-flex flex-wrap align-items-center justify-content-center">
      <article class="card food-background flex flex-column justify-content-around mx-3 my-3 p-2" title="Curso de Alimentos">
        <h2 class="food-title h3 text-center mx-auto p-3 rounded-sm">
          Alimentos
        </h2>

        <figure class="card-figure mx-auto">
          <img
            src="../static/courses/food.svg"
            alt="Alimentos"
            title="Alimentos"
            draggable="false"
            width="70"
            height="70"
          >
        </figure>

        <nuxt-link to="/course-food" class="see-more-btn text-center food-btn mx-auto p-3 rounded-sm" title="Saiba mais">
          Saiba mais
        </nuxt-link>
      </article>

      <article class="card agro-processes-background flex flex-column justify-content-around mx-3 my-3 p-2" title="Curso Análise de Processos Agroindustriais">
        <h2 class="agro-processes-title h3 text-center mx-auto p-3 rounded-sm">
          Análise de Processos Agroindustriais
        </h2>

        <figure class="card-figure mx-auto">
          <img
            src="../static/courses/agro.svg"
            alt="Análise de Processos Agroindustriais"
            title="Análise de Processos Agroindustriais"
            draggable="false"
            width="70"
            height="70"
          >
        </figure>

        <nuxt-link to="/course-agro-processes" class="see-more-btn agro-processes-btn text-center mx-auto p-3 rounded-sm" title="Saiba mais">
          Saiba mais
        </nuxt-link>
      </article>

      <article class="card big-data-background flex flex-column justify-content-around mx-3 my-3 p-2" title="Curso Big Data no Agronegócio">
        <h2 class="big-data-title h3 text-center mx-auto p-3 rounded-sm">
          Big Data no Agronegócio
        </h2>

        <figure class="card-figure mx-auto">
          <img
            src="../static/courses/data.svg"
            alt="Big Data no Agronegócio"
            title="Big Data no Agronegócio"
            draggable="false"
            width="70"
            height="70"
          >
        </figure>

        <nuxt-link to="/course-big-data" class="see-more-btn big-data-btn text-center mx-auto p-3 rounded-sm" title="Saiba mais">
          Saiba mais
        </nuxt-link>
      </article>
    </div>
  </main>
</template>

<style scoped>
  h1,
  h2 {
    cursor: default;
  }

  h1,
  strong {
    color: var(--primary-color);
  }

  h2 {
    background: var(--white-color);
    width: -moz-fit-content;
    width: fit-content;
  }

  .card {
    background-position: center;
    background-size: cover;
    border: none;
    height: 400px;
    max-width: 400px;
    transition: 0.3s ease;
    width: 100%;
  }

  .card-figure {
    transition: 0.8s ease;
  }

  .card-figure:hover {
    transform: rotate(360deg);
    transition: 0.8s ease;
  }

  .see-more-btn {
    border: none;
    color: var(--white-color);
    font-weight: 600;
    transition: 0.4s ease;
    width: -moz-fit-content;
    width: fit-content;
  }

  .food-background {
    background-image: url("../static/courses/food.jpg");
    border: 3px solid #FF6347;
  }
  .food-background:hover {
    transform: translateY(-3%);
    transition: 0.3s ease;
  }
  .food-title {
    color: #FF6347;
  }
  .food-btn {
    background-color: #FF6347;
  }
  .food-btn:hover {
    background-color: var(--white-color);
    color: #FF6347;
    outline: 2px solid #FF6347;
    transition: 0.4s ease;
  }

  .agro-processes-background {
    background-image: url("../static/courses/agro.jpg");
    border: 3px solid #9ACD32;
  }
  .agro-processes-background:hover {
    transform: translateY(-3%);
    transition: 0.3s ease;
  }
  .agro-processes-title {
    color: #9ACD32;
  }
  .agro-processes-btn {
    background-color: #9ACD32;
  }
  .agro-processes-btn:hover {
    background-color: var(--white-color);
    color: #9ACD32;
    outline: 2px solid #9ACD32;
    transition: 0.4s ease;
  }

  .big-data-background {
    background-image: url("../static/courses/data.jpg");
    border: 3px solid #069AD5;
  }
  .big-data-background:hover {
    transform: translateY(-3%);
    transition: 0.3s ease;
  }
  .big-data-title {
    color: #069AD5;
  }
  .big-data-btn {
    background-color: #069AD5;
  }
  .big-data-btn:hover {
    background-color: var(--white-color);
    color: #069AD5;
    outline: 2px solid #069AD5;
    transition: 0.4s ease;
  }
</style>
