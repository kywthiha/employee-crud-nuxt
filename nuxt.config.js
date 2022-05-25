export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'ls',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/css/main.css'],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    '@nuxtjs/apollo',
    '@nuxt/postcss8',
    '@nuxtjs/toast',
    '@nuxtjs/dotenv',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.BASE_URL,
  },

  apollo: {
    clientConfigs: {
      default: '~/plugins/apollo-config.js',
      auth: {
        httpEndpoint: `${process.env.BASE_URL}/graphql/auth`,
      },
    },
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  toast: {
    position: 'top-center',
    register: [
      // Register custom toasts
      {
        name: 'my-error',
        message: 'Oops...Something went wrong',
        options: {
          type: 'error',
        },
      },
    ],
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
  router: {
    middleware: ['auth'],
  },
  auth: {
    strategies: {
      local: {
        token: {
          property: 'access_token',
          global: true,
          // required: true,
          // type: 'Bearer'
        },
        user: {
          property: '',
          // autoFetch: true
        },
        endpoints: {
          login: {
            url: '/oauth/token',
            method: 'post',
            propertyName: 'access_token',
          },
          logout: {
            url: '/graphql?query=mutation+logout{logout}',
            method: 'get',
            propertyName: 'access_token',
          },
          user: {
            url: '/graphql?query=query+user{user{id,email,name}}',
            property: 'data.user',
            method: 'get',
          },
        },
      },
    },
  },
}
