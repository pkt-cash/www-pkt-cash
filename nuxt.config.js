export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: "universal",
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: "server",
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      },
      {
        property: "og:title",
        content: "PKT"
      },
      {
        property: "og:image",
        content: "/PKT Logo.jpg"
      },
      {
        property: "og:site_name",
        content: "PKT"
      },
      {
        property: "og:description",
        content: "Always Accessible Internet"
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
    link: [
      {
        rel: 'preload',
        as: 'image',
        href: '/img/logo.svg',
      },
    ],
  },
  router: {
    linkActiveClass: "link-active"
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    [
      'nuxt-compress',
      {
        gzip: {
          threshold: 8192,
        },
        brotli: {
          threshold: 8192,
        },
      },
    ],
  ],
  
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    "@nuxtjs/axios",
	  "vue-scrollto/nuxt",
    "nuxt-i18n",
    ["@nuxtjs/robots", {
      UserAgent: '*',
      Allow: '/',
      Sitemap: '/sitemap.xml',
    }],
    "@nuxtjs/sitemap"
  ],
  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {
    proxy: true,
  },
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', name: 'English', file: 'en-us.js' },
      //{ code: 'es', iso: 'es-ES', name: 'Español', file: 'es-es.js' },
      { code: 'zh', iso: 'zh-CN', name: 'Chinese', file: 'zh-cn.js' },
      { code: 'ja', iso: 'ja-JP', name: 'Japanese', file: 'ja-jp.js' },
      { code: 'ko', iso: 'ko-KR', name: 'Korean', file: 'ko-kr.js' },
      { code: 'ru', iso: 'ru-RU', name: 'Russian', file: 'ru-ru.js' },
    ],
    strategy: 'prefix_except_default',
    defaultLocale: 'en',
    noPrefixDefaultLocale: true,
    detectBrowserLanguage: false,
    parsePages: false,
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en: require("./locales/en-us.js"),
        //es: require("./locales/es-es.js"),
        zh: require("./locales/zh-cn.js"),
        ja: require("./locales/ja-jp.js"),
        ko: require("./locales/ko-kr.js"),
        ru: require("./locales/ru-ru.js"),
      }
    },
    lazy: true,
    langDir: './locales/'
  },
  sitemap: {
    hostname: 'https://pkt.cash/',
    gzip: true,
  },
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {
    styleResources: {
      scss: "./assets/scss/_nuxt-imports.scss"
    }
  }
};
