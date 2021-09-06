<template>
	<header>
		<b-navbar class="bg-light" toggleable="lg">
			<b-container class="py-2">
				<b-navbar-brand href="/">
					<img src="../static/logos/fatec-logo.svg" alt="Fatec Matão" width="120">
				</b-navbar-brand>

				<b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

				<b-collapse class="justify-content-end" id="nav-collapse" is-nav>
					<b-navbar-nav>
						<nuxt-link
							class="nav-link"
							v-for="menu in menuItems"
							:key="menu"
							:to="menu.url"
						>
							{{ menu.label }}
						</nuxt-link>
					</b-navbar-nav>
				</b-collapse>
			</b-container>
		</b-navbar>
	</header>
</template>

<script>
export default {
	data() {
		return {
			menuItems: [
			{
				url: "/",
				label: "Início"
			},
			{
				url: "/courses",
				label: "Cursos"
			},
			{
				url: "/services",
				label: "Serviços"
			},
			{
				url: "/institutional",
				label: "Institucional"
			},
			{
				url: "/contact",
				label: "Contato"
			}
			]
		}
	}
}
</script>

<style scoped>
	.bg-light {
	background-color: var(--white-color) !important;
	}

	.nav-link {
		margin-inline: 0.5rem;
		width: -moz-fit-content;
		width: fit-content;
	}

	.nav-link {
		color: var(--black-200-color);
		font-size: 1.2rem;
	}
	.nav-link:hover {
		color: var(--black-color);
	}
	.nav-link::after {
		background-color: var(--primary-color);
		content: "";
		display: block;
		height: 2px;
		transition: 0.3s ease;
		width: 0%;
	}
	.nav-link:hover::after {
		transition: 0.3s ease;
		width: 70%;
	}
</style>
