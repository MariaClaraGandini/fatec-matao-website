<template>
	<main>
		<Header />
		<b-container class="pt-4">
				<b-row>
					<b-col cols="12">
						<div>
							<h1 class= "text-center ">
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
							<img src="../static/icons/icons-instutional/missão.svg" alt="Graduação" width="50" class="mt-n3">
							<h2 class="d-inline-flex pt-2 ">Missão</h2>

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
							<img src="../static/icons/icons-instutional/visão.svg" alt="Graduação" width="60" class="mt-n3">
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
							<img src="../static/icons/icons-instutional/valores.svg" alt="Valores da Fatec Matão" width="40" class="mt-n3">
							<h2 class="d-inline-flex pt-2 ">Valores</h2>

							<p class="mt-3">
								<ul>
									<li class="p-1">Valorização e 
								desenvolvimento humano  

									<li  class="p-1">Postura ética e 
								comprometimento

									<li  class="p-1">Responsabilidade e 
								sustentabilidade

									<li  class="p-1">Criatividade e inovação
									</li>
								</ul>
							</p>
						</div>
					</b-col>
				</b-row>
			</b-container>   


		<Footer />
	</main>
</template>

<script>
export default {
	head() {
		return {
			title: 'Fatec Matão | Institucional'
		}
	}
}
</script>

<style scoped>
	h1 {
		font-size: clamp(2.45rem, 5vw - 0.5rem, 3.5rem);
		font-weight: 650;
	}

	p{
		font-size: 1.25rem
	}
	
</style>
