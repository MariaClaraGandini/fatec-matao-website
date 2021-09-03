<template>
	<header>
		<nav class="navbar navbar-expand-lg navbar-light bg-light py-3">
			<section class="container">
				<a href="/" class="navbar-brand">
					<img
					src="../static/logos/fatec-logo.svg"
					alt="Fatec Matão"
					width="120"
					/>
				</a>

				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarPrimary"
					aria-controls="navbarPrimary"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>

				<div class="collapse navbar-collapse justify-content-end" id="navbarPrimary">
					<ul class="navbar-nav">
						<li class="nav-item" v-for="item in menuItems" :key="item">
							<nuxt-link
								class="nav-link text-decoration-none"
								:to="item.url"
							>
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
	.bg-light {
		background-color: var(--white-color) !important;
	}

	.nav-item {
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
