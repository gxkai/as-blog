import SvgLoader from 'vite-svg-loader'
import head from './config/head'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      apiURL: process.env.STORYBLOK_API_URL,
      apiToken: process.env.STORYBLOK_API_TOKEN,
      youtubeKey: process.env.YOUTUBE_API_KEY,
    },
  },
  app: {
    head,
  },
  css: [
    '@as1024/ui/styles',
    'lite-youtube-embed/src/lite-yt-embed.css', '/styles/forms.scss'],
  /*   modules: ['@as1024/nuxt3-markdownit'], */
  build: {
    transpile: ['@marvr/storyblok-rich-text-vue-renderer'],
  },
  modules: [
    'nuxt-plausible',
    '@nuxt/image-edge',
    'nuxt-lazy-hydrate',
    '@unocss/nuxt',
    [
      '@storyblok/nuxt',
      {
        accessToken: process.env.STORYBLOK_API_TOKEN,
        useApiClient: true,
        apiOptions: {
          region: 'us'
        }
      },
    ],
  ],
  vue: {
    compilerOptions: {
      isCustomElement: tag => ['lite-youtube'].includes(tag),
    },
  },
  vite: {
    plugins: [SvgLoader()],
  },
  plausible: {
    domain: 'https://alvarosaburido.dev',
  },
  image: {
    storyblok: {
      baseURL: 'https://a.storyblok.com',
    },
  },
})
