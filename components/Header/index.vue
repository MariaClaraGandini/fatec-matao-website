<template>
  <header>
    <b-navbar class="bg-light" toggleable="lg">
      <b-container class="py-2">
        <b-navbar-brand :to="{ path: '/' }">
          <img
            src="../../static/logos/fatec-logo.svg"
            alt="Fatec Matão"
            width="120"
          />
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse class="justify-content-end" id="nav-collapse" is-nav>
          <b-navbar-nav>
            <nuxt-link to="/" class="nav-link">
              Início
            </nuxt-link>

            <nuxt-link to="/courses" class="nav-link">
              Cursos
            </nuxt-link>

            <b-nav-item-dropdown text="Serviços" class="nav-link dropdown" left>
              <b-dropdown-item href="https://siga.cps.sp.gov.br/aluno/login.aspx" target="_blank" rel="noopener noreferrer">
                SIGA - Alunos
              </b-dropdown-item>

              <b-dropdown-item href="https://siga.cps.sp.gov.br/fatec/login.aspx" target="_blank" rel="noopener noreferrer">
                SIGA - Professores
              </b-dropdown-item>
            </b-nav-item-dropdown>

            <nuxt-link to="/institutional" class="nav-link">
              Institucional
            </nuxt-link>

            <nuxt-link to="/contact" class="nav-link">
              Contato
            </nuxt-link>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
  </header>
</template>

<style scoped>
.bg-light {
  background-color: var(--white-color) !important;
}

.nav-link {
  color: var(--black-200-color);
  font-size: 1.2rem;
  margin-inline: 0.5rem;
  width: -moz-fit-content;
  width: fit-content;
}
.nav-link:hover {
  background-color: transparent;
  color: var(--black-color);
}
.nav-link::after {
  background-color: var(--primary-color);
  content: "";
  display: block;
  height: 2px;
  transition: 0.6s ease;
  width: 0%;
}
.nav-link:hover::after {
  transition: 0.6s ease;
  width: 70%;
}

li.dropdown {
  padding-block: 0;
}
</style>
