export default {
  ssr: false,
  target: 'static',
  head: {
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width,initial-scale=1,maximum-scale=1,viewport-fit=cover,shrink-to-fit=no' },
      { name: 'description', content: 'Suha - Multipurpose Ecommerce Mobile HTML Template' },
      { name: 'theme-color', content: '#100DD1' },
      { name: 'apple-mobile-web-app-capable', content:'yes' },
      { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
    ],
    link: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin:true },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Hind+Siliguri:wght@300;400;500;600;700&amp;display=swap' },
      { rel: 'icon', href: '/img/icons/icon-72x72.png' },
      { rel: 'apple-touch-icon', href: '/img/icons/icon-96x96.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/img/icons/icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '167x167', href: '/img/icons/icon-167x167.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/img/icons/icon-180x180.png' },
      { rel: 'stylesheet', href: '/css/bootstrap.min.css' },
      { rel: 'stylesheet', href: '/css/animate.css' },
      { rel: 'stylesheet', href: '/css/all.min.css' },
      { rel: 'stylesheet', href: '/css/brands.min.css' },
      { rel: 'stylesheet', href: '/css/solid.min.css' },
      { rel: 'stylesheet', href: '/css/owl.carousel.min.css' },
      { rel: 'stylesheet', href: '/css/magnific-popup.css' },
      { rel: 'stylesheet', href: '/css/nice-select.css' },
      { rel: 'stylesheet', href: '/style.css' }
    ],
    script: [
      { src:'/js/bootstrap.bundle.min.js', body:true,type: 'module' },
      { src:'/js/jquery.min.js', body:true,type: 'module' },
      { src:'/js/waypoints.min.js', body:true,type: 'module' },
      { src:'/js/jquery.easing.min.js', body:true,type: 'module'},
      { src:'/js/owl.carousel.min.js', body:true,type: 'module' },
      { src:'/js/jquery.magnific-popup.min.js', body:true,type: 'module' },
      { src:'/js/jquery.counterup.min.js', body:true,type: 'module' },
      { src:'/js/jquery.countdown.min.js', body:true,type: 'module' },
      { src:'/js/jquery.passwordstrength.js', body:true,type: 'module' },
      { src:'/js/jquery.nice-select.min.js', body:true,type: 'module'},
      { src:'/js/theme-switching.js', body:true,type: 'module' },
      { src:'/js/no-internet.js' },
      { src:'/js/active.js', body:true,type: 'module' },

    ]
  },
  loading: {
    color: '#fff'
  },
  plugins: [
    {src: 'plugins/owl.js', ssr: false}
  ],
  components: true,
  buildModules: [],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    '@nuxtjs/pwa',
  ],
  axios: {
    baseURL: 'http://172.29.138.250:3000'
  },
  pwa: {
    manifest: {
      lang: 'en',
    },
  },
  build: {
    publicPath: '/nuxt/',
    hotMiddleware: {
      client: {
        autoConnect: true
      }
    },
    extend(config, ctx) {}
  },
  server: {
    port: 1090,
    host: '0.0.0.0',
    timing: true
  }
}
