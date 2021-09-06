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
								<a href="" class="link-one">
									Vestibular
								</a>

								<nuxt-link to="/contact" class="link-two">
									Contato
								</nuxt-link>
							</div>
						</div>
					</b-col>

					<b-col cols="12" lg="6" class="d-flex align-items-center justify-content-center py-3">
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
				background="#ababab"
				img-width="1024"
				img-height="500"
				style="text-shadow: 1px 1px 2px #333;"
				@sliding-start="onSlideStart"
				@sliding-end="onSlideEnd"
			>
				<b-carousel-slide>
					<template #img>
					<img
						class="d-block img-fluid w-100"
						width="1024"
						height="500"
						src="https://picsum.photos/1024/480/?image=55"
						alt="image slot"
					>
					</template>
				</b-carousel-slide>

				<b-carousel-slide>
					<template #img>
					<img
						class="d-block img-fluid w-100"
						width="1024"
						height="500"
						src="https://picsum.photos/1024/480/?image=55"
						alt="image slot"
					>
					</template>
				</b-carousel-slide>
    		</b-carousel>
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
		font-size: 3.5rem;
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
</style>
