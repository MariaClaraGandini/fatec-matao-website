<template>
  <main>
    <div>
      <b-img
        src="https://jcmatao.com.br/wp-content/uploads/2019/06/Fatec-660x330.jpg"
        fluid-grow
        alt="Fluid-grow image"
      ></b-img>
    </div>
    <h1>
      Acompanhe a
      <strong>Fatec Matão:
        <a href="https://www.facebook.com/fatecmatao">
          <img src="../static/icons/icons8-facebook.svg" alt="Facebook" />
        </a>
        <a href="https://www.instagram.com/fatecmatao/">
          <img src="../static/icons/icons8-instagram.svg" alt="instagram" />
        </a>
        <a href="https://www.youtube.com/channel/UCm7alSqweOyoJ67G1eM8f0A">
          <img
            src="../static/icons/icons8-reproduzir-youtube.svg"
            alt="YouTube"
          />
        </a>
      </strong>
    </h1>
    <hr />
    <div class="avisos">
      <div class="textAvisos">
        <p class="p1">Devido a pandemia estamos em teletrabalho</p>
        <p class="p1">Não atendemos por telefone, encaminhe um e-mail para:</p>
        <p class="p3" v-for="(email, index) in emailItems" :key="index">
          {{ email.label }} {{ email.email }}
        </p>
      </div>
    </div>
    <hr />

    <!-- Form -->

    <div class="container-form">
      <!-- <div class="art"></div> -->
      <b-form @submit="onSubmit" @reset="onReset" class="form-align color-text">
        <b-form-group
          id="input-group-1"
          label="Email:"
          label-for="input-1"
        >
          <b-form-input
            id="input-1"
            v-model="a"
            type="email"
            placeholder="Digite seu email"
            class="color-input"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Nome:"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="a"
            placeholder="Digite seu nome"
            class="color-input"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-textarea
          id="textarea-rows"
          placeholder="Qual sua dúvida?"
          rows="8"
          required
          validated="true"
          class="color-input"
        ></b-form-textarea>
        <b-button type="submit" variant="outline-danger" class="button-submit"
          >Enviar</b-button
        >
        <b-button type="reset" variant="outline-dark" class="button-reset"
          >Limpar</b-button
        >
        <!-- <b-alert variant="success" show>Success Alert</b-alert> -->
      </b-form>
    </div>
  </main>
</template>

<script>
export default {
    head() {
    return {
      title: "Fatec Matão | Contato",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Faculdade de Tecnologia de Matão - Dúvidas, críticas ou sugestões, entre em contato!'
        },

        // Open Graph
        { property: 'og:title', content: 'Fatec Matão | Contato' },
        { property: 'og:site_name', content: 'Fatec Matão | Contato' },
        { property: 'og:description', content: 'Faculdade de Tecnologia de Matão - Dúvidas, críticas ou sugestões, entre em contato!' }
      ]
    };
  },

  data() {
    return {
      emailItems: [
        {
          label: "Diretoria:",
          email: "f297dir@cps.sp.gov.br",
        },
        {
          label: "Secretaria Administrativa:",
          email: "f297adm@cps.sp.gov.br",
        },
        {
          label: "Secretaria Acadêmica:",
          email: "f297acad@cps.sp.gov.br",
        },
      ],

      form: {
        email: "",
        name: "",
      },

      methods: {
        onSubmit(event) {
          event.preventDefault();
        },

        onReset(event) {
          event.preventDefault();
          this.form.email = "";
          this.form.name = "";
        },

        showAlert() {
          this.dismissCountDown = this.dismissSecs;
        },
      },
    };
  },
};
</script>

<style scoped>
h1 {
  margin-top: 15px;
  text-align: center;
}

strong {
  color: var(--secondary-color);
}

hr {
  background-image: linear-gradient(
    to right,
    transparent,
    var(--secondary-color),
    transparent
  );
  border: 0;
  height: 2px;
}

.avisos {
  /* background-color: var(--secondary-color); */
  color: black;
  height: 280px;
  text-align: center;
  width: 100%;
}

.p1 {
  color: #151515;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  margin-left: 25px;
  padding-top: 12px;
}

.p2 {
  font-family: "Poppins", sans-serif;
  margin-left: 25px;
  padding-top: 12px;
}

.p3 {
  color: #151515;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  margin-left: 25px;
  padding-top: 12px;
}

.container-form {
  border-radius: 10px;
  background-color: #3e0204;
  background-image: url(~/assets/img/Group.svg);
  margin: 0 auto;
  margin-top: 100px;
  max-width: 500px;
  width: 100%;
  padding: 0.5rem;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}


.form-align{
  margin: 0 auto;
  margin-top: 27px;
}

.color-text{
  color: #FFF;
}

.color-input{
  background-color: #f4f3ee;
  color: #000;
  border-color: none;
  border-radius: 15px;
}

.button-submit {
  margin-top: 20px;
  margin-right: 20px;
  background-color: #4FB34F;
  color: var(--white-color);
  border-color: transparent;
}

.button-reset {
  margin-top: 20px;
  margin-right: 20px;
  background-color: var(--black-200-color);
  color: var(--white-color);
  border-color: transparent;
}

.avalicao {
  text-align: center;
  margin-top: 30px;
}

.avalicao p {
  margin-left: 25px;
  padding-top: 12px;
  font-family: "Poppins", sans-serif;
  color: #151515;
  font-weight: 700;
}

@media (min-width: 320px) { 

  .avisos{
    height: 350px;
  }

  .container-form{
    width: 80%;
  }

}

@media (min-width: 375px) { 

  .avisos{
    height: 350px;
  }

  .container-form{
    width: 80%;
  }

}

@media (min-width: 414px) { 

  .avisos{
    height: 350px;
  }

  .container-form{
    width: 80%;
  }

}
</style>
