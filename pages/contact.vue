<template>
  <main>
    <div>
      <b-img
        src="~/static/images/fatec2.jpg"
        fluid-grow
        alt="Fluid-grow image"
        class="img-banner"
      ></b-img>
    </div>
    <h1>
      
      <strong
        >
        {{ $t('pages.contact.socialNetworks') }}
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
        <p class="p1">{{ $t('pages.contact.notice') }}</p>
        <p class="p1">{{ $t('pages.contact.notice2') }}</p>
        <p class="p3" v-for="(email, index) in emailItems" :key="index">
          <strong>{{ $t('footer.email.direction.title') }} </strong>{{ $t('footer.email.direction.email') }}
        </p>
      </div>
    </div>
    <hr />

    <!-- Form -->

    <div >
      <!-- <div class="art"></div> -->
      <form @submit.prevent="send" class="container-form">
        
          <span>{{ $t('pages.contact.name') }}</span>
          <input
            v-model="$v.name.$model"
            :class="{ error: $v.name.$error }"
            class=".color-input input"
          /><br />
          <p v-if="$v.name.$error" class="error">{{ $t('pages.contact.NoticeForm1') }}</p>
        
        <span>{{ $t('pages.contact.email') }}</span>
        <input
          v-model="$v.email.$model"
          :class="{ error: $v.email.$error }"
          class=".color-input input"
        /><br />
        <p v-if="$v.email.$error" class="error">
          {{ $t('pages.contact.NoticeForm2') }}
        </p>

        <span>{{ $t('pages.contact.question') }}</span>
        <textarea
          v-model="$v.message.$model"
          cols="30"
          rows="10"
          :class="{ error: $v.message.$error }"
          class=".color-input input"
        /><br />
        <p v-if="$v.message.$error" class="error">
          {{ $t('pages.contact.NoticeForm3') }}
        </p>

        <button type="submit" :disabled="$v.$error" class="button-submit">Enviar</button>
      </form>
    </div>
  </main>
</template>

<script>
import { validationMixin } from "vuelidate";
import { required, email, minLength } from "vuelidate/lib/validators";

export default {
  mixins: [validationMixin],

  head() {
    return {
      title: "Fatec Matão | Contato",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Faculdade de Tecnologia de Matão - Dúvidas, críticas ou sugestões, entre em contato!",
        },

        // Open Graph
        { property: "og:title", content: "Fatec Matão | Contato" },
        { property: "og:site_name", content: "Fatec Matão | Contato" },
        {
          property: "og:description",
          content:
            "Faculdade de Tecnologia de Matão - Dúvidas, críticas ou sugestões, entre em contato!",
        },
      ],
    };
  },

  data() {
    return {
      emailItems: [
        {
          label: "Diretoria:",
          email: "f297dir@cps.sp.gov.br",
        },
      ],

      email: "",
      name: "",
      message: "",
      result: "",
    };
  },

  methods: {
    send() {
      this.result = "";

      this.$v.$touch();
      if (this.$v.$invalid) return;

      this.name = "";
      this.email = "";
      this.message = "";
      this.$v.$reset();
    },
  },

  validations: {
    name: { required, minLength: minLength(2) },
    email: { required, email },
    message: { required, minLength: minLength(10) },
  },
};
</script>

<style scoped>
h1 {
  margin-top: 15px;
  text-align: center;
}

span{
  color: var(--white-color);
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

.img-banner {
  height: 85vh;
}

.btn {
  background-color: var(--gray-color);
}

.avisos {
  /* background-color: var(--secondary-color); */
  display: flex;
  align-items: center;
  justify-content: center;
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.input-container{
  width: 90%;
}

.form-align {
  margin: 0 auto;
  margin-top: 27px;
}

.color-text {
  color: #fff;
}

.color-input {
  background-color: #f4f3ee;
  color: #000;
  border-color: none;
  border-radius: 15px;
  border: black;
}

.button-submit {
  margin: 0 auto;
  border-radius: 6px;
  background-color: #4fb34f;
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

.input {
  border-radius: 5px;
  border: none;
  margin: 10px;
  width: 60%;
}

@media (min-width: 320px) {
  .avisos {
    height: 350px;
  }

  .container-form {
    width: 80%;
  }
}

@media (min-width: 375px) {
  .avisos {
    height: 350px;
  }

  .container-form {
    width: 80%;
  }
}

@media (min-width: 414px) {
  .avisos {
    height: 350px;
  }

  .container-form {
    width: 80%;
  }
}

input.error,
textarea.error {
  border: 2px solid #ffff3f;
}

p.error {
  color: #ffff3f;
  padding: 15px;
}
</style>
