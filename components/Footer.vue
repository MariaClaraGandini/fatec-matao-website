<template>
	<div>
		<svg viewBox="0 0 1440 320">
			<path d="M0,192L80,170.7C160,149,320,107,480,101.3C640,96,800,128,960,138.7C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
		</svg>

		<footer class="container-fluid">
			<b-row class="text-center mb-2">
				<b-col cols="12" lg="4">
					<ul class="list-unstyled">
						<li>
							<img src="../static/icons/map-marker-icon.svg" alt="Endereço" width="50">
						</li>

						<li v-for="address in addressItems" :key="address">
							<span class="label-style">{{ address }}</span>
						</li>
					</ul>
				</b-col>

				<b-col cols="12" lg="4">
					<ul class="list-unstyled">
						<li>
							<img src="../static/icons/email-icon.svg" alt="E-mails" width="50">
						</li>

						<li v-for="email in emailItems" :key="email">
							<span class="label-style font-weight-bold">{{ email.label }}</span>
							<span class="content-style">{{ email.email}}</span>
						</li>
					</ul>
				</b-col>

				<b-col cols="12" lg="4">
					<ul class="list-unstyled">
						<li>
							<img src="../static/icons/phone-icon.svg" alt="Números de contato" width="50">
						</li>

						<li v-for="contact in contactNumbersItems" :key="contact">
							<span class="label-style font-weight-bold">{{ contact.label }}</span>
							<span class="content-style">{{ contact.number }}</span>
						</li>
					</ul>
				</b-col>
			</b-row>

			<hr>

			<b-row class="text-center">
				<b-col cols="12" class="mt-3 mb-5 d-flex justify-content-center">
					<div class="p-3">
						<a href="/">
							<img src="../static/logos/fatec-white-logo.svg" alt="Fatec Matão" width="110">
						</a>
					</div>

					<div class="p-3">
						<a href="https://www.cps.sp.gov.br/">
							<img src="../static/logos/cps-white-logo.svg" alt="Centro Paula Souza" width="90">
						</a>
					</div>

					<div class="p-3">
						<a href="https://www.saopaulo.sp.gov.br/">
							<img src="../static/logos/gov-sp-logo.svg" alt="Governo do Estado de São Paulo" width="90">
						</a>
					</div>
				</b-col>
			</b-row>

			<b-row class="py-3 text-center copyright">
				<b-col cols="12">
					<span class="text-white">&copy; Fatec Matão 2021 - Todos os direitos reservados.</span>
				</b-col>
			</b-row>
		</footer>
	</div>
</template>

<script>
export default {
	data() {
		return {
			addressItems: [
				'Avenida Habib Gabriel, 1350',
				'Bairro Residencial Olivio Benassi',
				'CEP: 15990-539 - Matão/SP'
			],

			emailItems: [
				{
					label: 'Diretoria:',
					email: 'f297dir@cps.sp.gov.br'
				},
				{
					label: 'Administrativo:',
					email: 'f297adm@cps.sp.gov.br'
				},
				{
					label: 'Acadêmico:',
					email: 'f297acad@cps.sp.gov.br'
				}
			],

			contactNumbersItems: [
				{
					label: 'Telefone 1:',
					number: '(16) 3384-5847'
				},
				{
					label: 'Telefone 2:',
					number: '(16) 2016-2694'
				}
			]
		}
	}
}
</script>

<style scoped>
	svg {
		transform: translateY(4%);
	}

	svg path {
		fill: var(--primary-color);
	}

	footer {
		background-color: var(--primary-color);
	}

	.label-style {
		color: var(--gray-color);
	}
	.content-style {
		color: var(--white-color);
	}

	hr {
		border: 0.5px solid var(--white-color);
		width: 70%;
	}

	.copyright {
		background-color: var(--secondary-color);
	}
</style>
