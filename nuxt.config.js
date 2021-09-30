export default {
	// Target: https://go.nuxtjs.dev/config-target
	target: 'static',

	// Global page headers: https://go.nuxtjs.dev/config-head
	head: {
		title: 'Fatec Matão',
		htmlAttrs: {
			lang: 'pt-br'
		},
		meta: [
			{ charset: 'utf-8' },
			{ name: 'viewport', content: 'width=device-width, initial-scale=1' },
			{ name: 'robots', content: 'index, follow' },
			{
				hid: 'description',
				name: 'description',
				content: 'Faculdade de Tecnologia de Matão - Instituição pública estadual de ensino superior!'
			},
			{ name: 'subject', content: 'Faculdade de Tecnologia' },
			{ name: 'topic', content: 'Site institucional' },
			{ name: 'url', content: 'https://fatec-matao.vercel.app' },
			{ name: 'generator', content: 'Visual Studio Code' },
			{ name: 'format-detection', content: 'telephone=no' },
			{ name: 'theme-color', content: '#B01116' }
		],
		link: [
			{ rel: 'icon', type: 'image/svg', href: '/favicon.svg' }
		]
	},

	// Global CSS: https://go.nuxtjs.dev/config-css
	css: [
		'~/assets/css/global',
	],

	// Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
	plugins: [
	],

	// Auto import components: https://go.nuxtjs.dev/config-components
	components: true,

	// Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
	buildModules: [
	],

	// Modules: https://go.nuxtjs.dev/config-modules
	modules: [
		// https://go.nuxtjs.dev/bootstrap
		'bootstrap-vue/nuxt',
	],

	// Build Configuration: https://go.nuxtjs.dev/config-build
	build: {
	}
}
