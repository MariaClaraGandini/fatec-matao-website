<template>
	<header>
		<nav class="navbar navbar-expand-lg py-3">
			<section class="container">
				<a href="/" class="navbar-brand">
					<img
					src="../assets/logos/fatec-logo.svg"
					alt="Fatec Matão"
					width="120"
					/>
				</a>

				<button
					class="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNav"
					aria-controls="navbarNav"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon">
						<img src="../static/icons/menu-icon.svg" alt="Menu" width="30">
					</span>
				</button>

				<div id="navbarNav" class="collapse navbar-collapse justify-content-end">
					<ul class="navbar-nav mt-2 mt-lg-0">
						<li class="nav-item" v-for="item in menuItems" :key="item">
							<nuxt-link
								class="nuxt-link text-decoration-none"
								:to="item.url">
								{{ item.label }}
							</nuxt-link>
						</li>
					</ul>
				</div>
			</section>
		</nav>
	</header>
</template>

<script>
export default {
	data() {
		return {
			menuItems: [
				{ url: '/', label: 'Início' },
				{ url: '/courses', label: 'Cursos' },
				{ url: '/institutional', label: 'Institucional' },
				{ url: '/services', label: 'Serviços' }
			]
		}
	}
}
</script>

<style scoped>
	.navbar {
		background-color: var(--white-color);
	}

	.nav-item {
		margin-inline: 0.5rem;
	}

	.nuxt-link {
		color: var(--black-200-color);
		font-size: 1.2rem;
	}
	.nuxt-link::after {
		background-color: var(--primary-color);
		content: "";
		display: block;
		height: 2px;
		transition: 0.3s ease;
		width: 0%;
	}
	.nuxt-link:hover::after {
		transition: 0.3s ease;
		width: 70%;
	}
</style>
