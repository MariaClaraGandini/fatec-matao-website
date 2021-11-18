<template>
	<main>
		<b-container class="pt-4">
				<b-row>
					<b-col cols="12">
						<div>
							<h1 class= "text-center">
								{{ $t('pages.institutional.titleh1') }}
							</h1>
							<p class="description text-center">
							{{ $t('pages.institutional.fondation') }}

							
							</p>
						</div>
					</b-col>
				</b-row>
					<b-row class="text-center mt-3">
					<b-col cols="12" lg="4">
						<div class="m-4">
							 <img src="../static/icons/mission.svg" alt="Graduação" width="50" class="mt-n3"> 
							<h2 class="d-inline-flex pt-2 ">{{ $t('pages.institutional.mission') }}</h2>

						</div>
						<div>

							<p class="mt-3  ml-4 text1">
								{{ $t('pages.institutional.missiondesc1') }} <br>
								{{ $t('pages.institutional.missiondesc2') }} 



								
							</p>
						</div>
					</b-col>

					<b-col cols="12" lg="4">
						<div class="m-4 mr-4">
							 <img src="../static/icons/vision.svg" alt="Graduação" width="50"> 
							<h2 class="d-inline-flex pt-2">{{ $t('pages.institutional.vision') }}</h2>

							<p class="mt-3">
							{{ $t('pages.institutional.visiondesc') }} 
						
							</p>
						</div>
					</b-col>

					<b-col cols="12" lg="4">
						<div class="m-4 mr-5">
							<img src="../static/images/value.png" alt="Valores da Fatec Matão" width="50" class="mt-n3"> 
							<h2 class="d-inline-flex mt-2 mr-3">{{ $t('pages.institutional.values') }}</h2>

							<p class="mt-2 mr-5 p-2 text2">
							{{ $t('pages.institutional.valuesdesc1') }} <br>
							{{ $t('pages.institutional.valuesdesc2') }} 
					

							
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
							src="../static/images/fatec-image-1.jpg"
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
							src="../static/images/fatec-image-2.jpg"
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
.text1{
	width: 85%;
}
.text2{
	width: 107%;
}


</style>
