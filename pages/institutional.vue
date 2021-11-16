<template>
	<main>
		<b-container class="pt-4">
				<b-row>
					<b-col cols="12">
						<div>
							<h1 class= "text-center">
								Conheça nossa unidade!
							</h1>
							<p class="description text-center">
							Fatec de Matão foi fundada em outubro de 2018, uma das 73 Unidades de Ensino
							do Centro Estadual de Educação Tecnlológica Paula Souza, que são distribuidas
							em 67 municípios paulista.
							</p>
						</div>
					</b-col>
				</b-row>
					<b-row class="text-center mt-3">
					<b-col cols="12" lg="4">
						<div class="m-4">
							 <img src="./static/icons/mission.svg" alt="Graduação" width="50" class="mt-n3"> 
							<h2 class="d-inline-flex pt-2 ">Missão</h2>

						</div>
						<div>

							<p class="mt-3">
								Oferecer educação <br>
								gratuita e de qualidade <br>
								para formar tecnológos <br>
								na área da
								AgroIndústria
							</p>
						</div>
					</b-col>

					<b-col cols="12" lg="4">
						<div class="m-4">
							 <img src="./static/icons/vision.svg" alt="Graduação" width="50"> 
							<h2 class="d-inline-flex pt-2">Visão</h2>

							<p class="mt-3">
							Consolidar-se como <br>
							referência nacional na <br>
							formação e capacitação <br>
							profissional.
							</p>
						</div>
					</b-col>

					<b-col cols="12" lg="4">
						<div class="m-4">
							<img src="./static/icons/value.png" alt="Valores da Fatec Matão" width="50" class="mt-n2"> 
							<h2 class="d-inline-flex mt-2">Valores</h2>

							<p class="mt-3 p-2">Inovação, criatividade, comprometimento,
							postura ética, desenvolvimento humano e sustentabilidade.
							</p>
						</div>
					</b-col>
				</b-row>
			<b-carousel
				class="m-5"
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
							height="300"
							width="1400"
							src="./static/images/fatec-image-1.jpg"
							alt="Foto da Instituição Fatec, unidade de Matão"
						> 
					</template>
				</b-carousel-slide>

				<b-carousel-slide>
					<template #img>
						<img
							class="d-block img-fluid mx-auto"
							height="300"
							width="1400"
							src="./static/images/fatec-image-2.jpg"
							alt="Foto da Instituição Fatec, unidade de Matão"
						>
					</template>
				</b-carousel-slide>
			</b-carousel>
				
		</b-container>
	</main>
</template>

<script>
export default {
  head() {
    return {
      title: "Fatec Matão | Institucional",
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'Faculdade de Tecnologia de Matão - Conheça tudo sobre a nossa instituição!'
        },

        // Open Graph
        { property: 'og:title', content: 'Fatec Matão | Institucional' },
        { property: 'og:site_name', content: 'Fatec Matão | Institucional' },
        { property: 'og:description', content: 'Faculdade de Tecnologia de Matão - Conheça tudo sobre a nossa instituição!' }
      ]
    };
  },
};
</script>

<style scoped>
h1 {
  font-size: clamp(2.45rem, 5vw - 0.5rem, 3.5rem);
  font-weight: 650;
}

p {
  font-size: 1.25rem;
}
</style>

