export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'subscription_nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    script: [
      {
        type: 'text/javascript',
        src: 'js/jquery-3.1.1.min.js',
        body: true,
      },
      {
        type: 'text/javascript',
        src: 'js/popper.min.js',
        body: true,
      },
      // {
      //   type: 'text/javascript',
      //   src: 'js/jquery-2.1.1.js',
      //   body: true,
      // },
      {
        type: 'text/javascript',
        src: 'js/bootstrap.js',
        body: true,
      },
      {
        type: 'text/javascript',
        src: 'js/plugins/metisMenu/jquery.metisMenu.js',
        body: true,
      },
      {
        type: 'text/javascript',
        src: 'js/plugins/slimscroll/jquery.slimscroll.min.js',
        body: true,
      },
      {
        type: 'text/javascript',
        src: 'js/inspinia.js',
        body: true,
      },
      {
        type: 'text/javascript',
        src: 'js/plugins/pace/pace.min.js',
        body: true,
      },
      {
        type: 'text/javascript',
        src: 'js/plugins/summernote/summernote-bs4.js',
        body: true,
      },
      {
        type: 'text/javascript',
        src: 'js/plugins/footable/footable.all.min.js',
        body: true,
      },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    // Стили для сайта
    '~/assets/font-awesome/font-awesome.css',
    '~/assets/css/plugins/summernote/summernote-bs4.css',
    '~/assets/css/plugins/datapicker/datepicker3.css',
    '~/assets/css/plugins/footable/footable.core.css',
    '~/assets/css/base.css',
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import layots: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'ru',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
