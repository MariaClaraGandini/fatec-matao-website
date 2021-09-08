<script>
export default {
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

<template>
  <main>
    <div>
      <b-img
        src="https://jcmatao.com.br/wp-content/uploads/2019/06/Fatec-660x330.jpg"
        fluid-grow
        alt="Fluid-grow image"
      ></b-img>
    </div>
    <h2>
      Acompanhe a
      <strong
        >Fatec Matão:
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
    </h2>
    <hr />
    <div class="avisos">
      <div class="textAvisos">
        <p class="p1">Devido a pendemia estamos em teletrabalho</p>
        <p class="p1">Não atendemos por telefone, encaminhe um e-mail para:</p>
        <p class="p3" v-for="email in emailItems" :key="email">
          {{ email.label }} {{ email.email }}
        </p>
      </div>
    </div>
    <hr />

    <!-- Form -->

    <div class="container-form">
      <b-form @submit="onSubmit" @reset="onReset">
        <b-form-group
          id="input-group-1"
          label="Email:"
          label-for="input-1"
          description="Nunca compartilharemos seu e-mail com mais ninguém."
        >
          <b-form-input
            id="input-1"
            v-model="a"
            type="email"
            placeholder="Digite seu email"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Nome:"
          label-for="input-2"
          description="Como podemos te chamar?"
        >
          <b-form-input
            id="input-2"
            v-model="a"
            placeholder="Digite seu nome"
            required
          ></b-form-input>
        </b-form-group>

        <b-form-textarea
          id="textarea-rows"
          placeholder="Qual sua dúvida?"
          rows="8"
          required
          validated=true
        ></b-form-textarea>
        <b-button type="submit" variant="outline-danger" class="button-submit"
          >Enviar</b-button
        >
        <b-button type="reset" variant="outline-dark" class="button-reset"
          >Limpar</b-button
        >
        <!-- <b-alert variant="success" show>Success Alert</b-alert> -->

        <div class="avalicao">
          <p>Poderia avaliar nosso formulário de contato?</p>
          <div>
            <b-form-rating v-model="value" class="avaliacao"></b-form-rating>
          </div>
        </div>
      </b-form>
    </div>
  </main>
</template>

<style scoped>
h2 {
  margin-top: 15px;
  text-align: center;
}

strong {
  color: var(--secondary-color);
}

hr {
  border: 0;
  height: 2px;
  background-image: linear-gradient(
    to right,
    transparent,
    var(--secondary-color),
    transparent
  );
}

.avisos {
  /* background-color: var(--secondary-color); */
  color: black;
  width: 100%;
  height: 280px;
  text-align: center;
}

.p1 {
  margin-left: 25px;
  padding-top: 12px;
  font-family: "Poppins", sans-serif;
  color: #151515;
  font-weight: 700;
}

.p2 {
  margin-left: 25px;
  font-family: "Poppins", sans-serif;
  padding-top: 12px;
}

.p3 {
  margin-left: 25px;
  font-family: "Poppins", sans-serif;
  padding-top: 12px;
  font-weight: 700;
  color: #151515;
}

.container-form {
  border-radius: 10px;
  padding: 20px;
  background-color: var(--gray-color);
  margin: 0 auto;
  margin-top: 100px;
  width: 80%;
  height: 720px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}

.button-submit {
  margin-top: 20px;
  margin-right: 20px;
  background-color: var(--secondary-color);
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

.avalicao p{
  margin-left: 25px;
  padding-top: 12px;
  font-family: "Poppins", sans-serif;
  color: #151515;
  font-weight: 700;
}
</style>
