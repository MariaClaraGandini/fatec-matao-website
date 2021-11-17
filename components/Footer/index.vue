<template>
  <div>
    <svg viewBox="0 0 1440 320">
      <path
        d="M0,192L80,170.7C160,149,320,107,480,101.3C640,96,800,128,960,138.7C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
    </svg>

    <footer class="container-fluid">
      <b-row class="text-center mb-2">
        <b-col cols="12" lg="4">
          <ul class="list-unstyled">
            <li>
              <img
                src="../../static/icons/map-marker-icon.svg"
                alt="Endereço"
                width="50"
              />
            </li>

            <li v-for="(address, index) in addressItems" :key="index">
              <span class="label-style">{{ address }}</span>
            </li>
          </ul>
        </b-col>

        <b-col cols="12" lg="4">
          <ul class="list-unstyled">
            <li>
              <img
                src="../../static/icons/email-icon.svg"
                alt="E-mails"
                width="50"
              />
            </li>

            <li v-for="(email, index) in emailItems" :key="index">
              <span class="label-style font-weight-bold">
				        {{ email.label}}
			        </span>
              <span class="content-style">{{ email.email }}</span>
            </li>
          </ul>
        </b-col>

        <b-col cols="12" lg="4">
          <ul class="list-unstyled">
            <li>
              <img
                src="../../static/icons/phone-icon.svg"
                alt="Números de contato"
                width="50"
              />
            </li>

            <li v-for="(contact,index) in contactNumbersItems" :key="index">
              <span class="label-style font-weight-bold">{{ contact.label }}</span>
              <span class="content-style">{{ contact.number }}</span>
            </li>
          </ul>
        </b-col>
      </b-row>

      <hr />

      <b-row class="text-center">
        <b-col
          cols="12"
          class="mt-3 mb-5 d-flex flex-wrap justify-content-center"
        >
          <div class="p-4">
            <nuxt-link :to="{ path: '/' }">
              <img
                src="../../static/logos/fatec-white-logo.svg"
                alt="Fatec Matão"
                width="110"
              />
            </nuxt-link>
          </div>

          <div class="p-4">
            <a href="https://www.cps.sp.gov.br/">
              <img
                src="../../static/logos/cps-white-logo.svg"
                alt="Centro Paula Souza"
                width="90"
              />
            </a>
          </div>

          <div class="p-4">
            <a href="https://www.saopaulo.sp.gov.br/">
              <img
                src="../../static/logos/gov-sp-logo.svg"
                alt="Governo do Estado de São Paulo"
                width="90"
              />
            </a>
          </div>
        </b-col>
      </b-row>

      <b-row class="py-3 text-center copyright">
        <b-col cols="12">
          <span class="text-white">
            {{ $t('footer.copyright') }}
          </span>
        </b-col>
      </b-row>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      addressItems: [
        this.$t('footer.locale.avenue'),
        this.$t('footer.locale.neighborhood'),
        this.$t('footer.locale.zipCode'),
      ],

      emailItems: [
        {
          label: this.$t('footer.email.direction.title'),
          email: this.$t('footer.email.direction.email'),
        },
        {
          label: this.$t('footer.email.administrative.title'),
          email: this.$t('footer.email.administrative.email'),
        },
        {
          label: this.$t('footer.email.academic.title'),
          email: this.$t('footer.email.academic.email'),
        },
      ],

      contactNumbersItems: [
        {
          label: this.$t('footer.numberPhone.numberOne.title'),
          number: this.$t('footer.numberPhone.numberOne.number'),
        },
        {
          label: this.$t('footer.numberPhone.numberTwo.title'),
          number: this.$t('footer.numberPhone.numberTwo.number'),
        },
      ],
    };
  },
};
</script>

<style scoped>
svg {
  transform: translateY(4%);
}

svg path {
  fill: var(--primary-color);
}

footer {
  background-color: var(--primary-color);
}

.label-style {
  color: var(--gray-color);
}
.content-style {
  color: var(--white-color);
}

hr {
  border: 0.5px solid var(--white-color);
  width: 70%;
}

.copyright {
  background-color: var(--secondary-color);
}
</style>
