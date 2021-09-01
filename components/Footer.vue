<template>
	<div>
		<svg viewBox="0 0 1440 320">
			<path d="M0,192L80,170.7C160,149,320,107,480,101.3C640,96,800,128,960,138.7C1120,149,1280,139,1360,133.3L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
		</svg>

		<footer class="container-fluid">
			<div class="row text-left">
				<article class="col-12 col-lg-4">
					<ul class="list-unstyled">
						<li>
							<img src="" alt="Endereço">
						</li>

						<li v-for="item in addressItems" :key="item">
							<span class="label-style">{{ item }}</span>
						</li>
					</ul>
				</article>

				<article class="col-12 col-lg-4">
					<ul class="list-unstyled">
						<li>
							<img src="" alt="Números de contato">
						</li>

						<li v-for="item in contactNumbersItems" :key="item">
							<span class="label-style font-weight-bold">{{ item.label }}</span>
							<span class="content-style">{{ item.number }}</span>
						</li>
					</ul>
				</article>

				<article class="col-12 col-lg-4">
					<ul class="list-unstyled">
						<li>
							<img src="" alt="E-mails">
						</li>

						<li v-for="item in emailItems" :key="item">
							<span class="label-style font-weight-bold">{{ item.label }}</span>
							<span class="content-style">{{ item.email}}</span>
						</li>
					</ul>
				</article>
			</div>

			<div class="row py-2 copyright">
				<article class="col-12">
					<span class="text-white">Fatec Matão 2021 - Todos os direitos reservados.</span>
				</article>
			</div>
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

			contactNumbersItems: [
				{ label: 'Telefone 1:', number: '(16) 3384-5847' },
				{ label: 'Telefone 2:', number: '(16) 2016-2694' }
			],

			emailItems: [
				{ label: 'Diretoria:', email: 'f297dir@cps.sp.gov.br' },
				{ label: 'Diretoria Administrativa:', email: 'f297adm@cps.sp.gov.br' },
				{ label: 'Serviço Acadêmico:', email: 'f297acad@cps.sp.gov.br' }
			]
		}
	}
}
</script>

<style scoped>
	svg {
		transform: translateY(2%);
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

	.copyright {
		background-color: var(--secondary-color);
	}
</style>
