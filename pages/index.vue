<template>
	<div>
		<Header />

		<main>
			<b-container class="py-4">
				<b-row>
					<b-col cols="12" lg="6" class="d-flex flex-column align-items-center justify-content-center py-3">
						<div>
							<h1>
								Ei estudante, <br>
								venha ser um <br>
								<span>
									#Fatecano!
								</span>
							</h1>

							<p class="description">
								A <span>Fatec Matão</span> oferece <span>cursos superiores</span> <br>
								de qualidade, em diferentes áreas <br>
								do conhecimento.
							</p>

							<div>
								<a href="https://www.vestibularfatec.com.br/home/" target="_blank" class="link-one">
									Vestibular
								</a>

								<nuxt-link to="/contact" class="link-two">
									Contato
								</nuxt-link>
							</div>
						</div>
					</b-col>

					<b-col cols="12" lg="6" class="d-flex align-items-center justify-content-center py-4">
						<img
							class="img-fluid"
							height="300"
							src="../static/images/man-image.png"
							alt="Estudante fatecano"
						>
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
				style="text-shadow: 1px 1px 2px #333;"
				@sliding-start="onSlideStart"
				@sliding-end="onSlideEnd"
			>
				<b-carousel-slide>
					<template #img>
						<img
							class="d-block img-fluid mx-auto"
							height="450"
							width="1920"
							src="../static/images/banner-vestibular.jpg"
							alt="Inscrições abertas para o vestibular da Fatec Matão"
						>
					</template>
				</b-carousel-slide>

				<b-carousel-slide>
					<template #img>
						<img
							class="d-block img-fluid mx-auto"
							height="450"
							width="1920"
							src="../static/images/banner-vestibular.jpg"
							alt="Inscrições abertas para o vestibular da Fatec Matão"
						>
					</template>
				</b-carousel-slide>
    		</b-carousel>

			<b-container class="py-4">
				<b-row class="text-center">
					<b-col cols="12">
						<h2 class="subtitle-style">
							Objetivos
						</h2>

						<hr class="hr-style mt-3">

						<p class="description-style">
							Conheça um pouco de nossa conduta, <br>
							em relação ao nosso ensino
						</p>
					</b-col>
				</b-row>

				<b-row class="text-center mt-3">
					<b-col cols="12" lg="4">
						<div class="m-3">
							<img src="../static/icons/graduation-icon.svg" alt="Graduação" width="90">

							<p class="mt-3">
								Formar profissionais <br>
								em diversas áreas do <br>
								conhecimento
							</p>
						</div>
					</b-col>

					<b-col cols="12" lg="4">
						<div class="m-3">
							<img src="../static/icons/brain-icon.svg" alt="Graduação" width="90">

							<p class="mt-3">
								Estimular continuamente <br>
								o conhecimento <br>
								tecnológico
							</p>
						</div>
					</b-col>

					<b-col cols="12" lg="4">
						<div class="m-3">
							<img src="../static/icons/search-icon.svg" alt="Graduação" width="90">

							<p class="mt-3">
								Produzir o <br>
								desenvolvimento <br>
								científico
							</p>
						</div>
					</b-col>
				</b-row>
			</b-container>

			<b-container class="py-4">
				<b-row class="text-center">
					<b-col cols="12">
						<h2 class="subtitle-style">
							Notícias
						</h2>

						<hr class="hr-style mt-3">

						<p class="description-style">
							Acompanhe algumas notícias <br>
							sobre nossa instituição
						</p>
					</b-col>
				</b-row>

				<b-row>
					<b-col cols="12" lg="4">
						<b-card
							title="Fatec Matão - Projetando o fututo (YouTube)"
							img-src="../static/news/news-1.jpg"
							img-alt="Fatec - Projetando o futuro"
							img-top
							tag="article"
							style="max-width: 20rem; border: 1px solid #222"
							class="my-3 mx-auto"
						>
							<div class="d-flex align-items-center justify-content-between">
								<b-link href="https://www.youtube.com/watch?v=Arc5V_RAEH0" target="_blank" rel="noopener noreferrer" class="card-link">
									Acessar
								</b-link>

								<span class="font-weight-normal">
									13/09/2021
								</span>
							</div>
						</b-card>
					</b-col>

					<b-col cols="12" lg="4">
						<b-card
							title="Câmara aprova doações de áreas para Senai e Fatec"
							img-src="../static/news/news-2.jpg"
							img-alt="Câmara aprova doações de áreas para Senai e Fatec"
							img-top
							tag="article"
							style="max-width: 20rem; border: 1px solid #222"
							class="my-3 mx-auto"
						>
							<div class="d-flex align-items-center justify-content-between">
								<b-link href="http://www.acomarcanet.com.br/materia.php?id_materia=6686&fbclid=IwAR2Lw4JIjAhiSh1Ob_FNum8y_beE--bcTemsVLtj6Wi1PHnVZcwgCDVp70g" target="_blank" rel="noopener noreferrer" class="card-link">
									Acessar
								</b-link>

								<span class="font-weight-normal">
									10/09/2021
								</span>
							</div>
						</b-card>
					</b-col>

					<b-col cols="12" lg="4">
						<b-card
							title="Prefeitura apresenta área de 21 mil m² para instalações da Fatec"
							img-src="../static/news/news-3.jpg"
							img-alt="Fatec ganha área de 21 mil metros quadrados para instalações"
							img-top
							tag="article"
							style="max-width: 20rem; border: 1px solid #222"
							class="my-3 mx-auto"
						>
							<div class="d-flex align-items-center justify-content-between">
								<b-link href="http://novo.matao.sp.gov.br/prefeitura-apresenta-area-de-21-mil-metros-quadrados-para-futuras-instalacoes-da-fatec-matao/" target="_blank" rel="noopener noreferrer" class="card-link">
									Acessar
								</b-link>

								<span class="font-weight-normal">
									23/07/2021
								</span>
							</div>
						</b-card>
					</b-col>
				</b-row>
			</b-container>
		</main>

		<Footer />
	</div>
</template>

<script>
export default {
	data() {
		return {
			slide: 0,
			sliding: null
		}
	},

	head() {
		return {
			title: 'Fatec Matão | Início'
		}
	},

	methods: {
		onSlideStart(slide) {
			this.sliding = true
		},

		onSlideEnd(slide) {
			this.sliding = false
		}
	}
}
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
