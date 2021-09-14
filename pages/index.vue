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
							src="../static/images/man-image.png"
							alt="Estudante fatecano"
							height="300"
						>
					</b-col>
				</b-row>
			</b-container>

			<b-carousel
				id="carousel-1"
				v-model="slide"
				:interval="4000"
				controls
				background="#B01116"
				img-height="500"
				style="text-shadow: 1px 1px 2px #333;"
				@sliding-start="onSlideStart"
				@sliding-end="onSlideEnd"
			>
				<b-carousel-slide>
					<template #img>
					<img
						class="d-block img-fluid mx-auto"
						height="500"
						src="../static/images/fatec-image-1.jpg"
						alt="image slot"
					>
					</template>
				</b-carousel-slide>

				<b-carousel-slide>
					<template #img>
					<img
						class="d-block img-fluid mx-auto"
						height="500"
						src="../static/images/fatec-image-1.jpg"
						alt="image slot"
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
							title="Prefeitura apresenta área de 21 mil metros quadrados para instalações da Fatec"
							img-src="../static/news/news-1.jpg"
							img-alt="Fatec ganha área de 21 mil metros quadrados para instalações"
							img-top
							tag="article"
							style="max-width: 20rem; border: 1px solid #222"
							class="my-3 mx-auto"
						>
							<div class="d-flex align-items-center justify-content-between">
								<b-link href="#" class="card-link">Acessar</b-link>

								<span class="font-weight-normal">
									23/07/2021
								</span>
							</div>
						</b-card>
					</b-col>

					<b-col cols="12" lg="4">
						<b-card
							title="Prefeitura apresenta área de 21 mil metros quadrados para instalações da Fatec"
							img-src="../static/news/news-1.jpg"
							img-alt="Fatec ganha área de 21 mil metros quadrados para instalações"
							img-top
							tag="article"
							style="max-width: 20rem; border: 1px solid #222"
							class="my-3 mx-auto"
						>
							<div class="d-flex align-items-center justify-content-between">
								<b-link href="#" class="card-link">Acessar</b-link>

								<span class="font-weight-normal">
									23/07/2021
								</span>
							</div>
						</b-card>
					</b-col>

					<b-col cols="12" lg="4">
						<b-card
							title="Prefeitura apresenta área de 21 mil metros quadrados para instalações da Fatec"
							img-src="../static/news/news-1.jpg"
							img-alt="Fatec ganha área de 21 mil metros quadrados para instalações"
							img-top
							tag="article"
							style="max-width: 20rem; border: 1px solid #222"
							class="my-3 mx-auto"
						>
							<div class="d-flex align-items-center justify-content-between">
								<b-link href="#" class="card-link">Acessar</b-link>

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

	h4.card-title {
		color: var(--secondary-color);
		font-size: 1.1rem !important;
	}

	.card-link {
		background-color: var(--black-200-color);
		font-size: 0.95rem;
		border-radius: 3px;
		color: var(--white-color);
		padding: 5px 10px;
	}
</style>
