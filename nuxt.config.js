export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "欢迎访问我的博客 - GF.Blog",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no"
      },
      {
        hid: "description",
        name: "description",
        content: "GF.Blog ，全栈学习，全栈开发"
      },
      {
        hid: "keywords",
        name: "keywords",
        content:
          "GF.brand，Java ，Spring ，Spring Boot ，Spring Cloud， GoLang ，vue，nuxt，blog ，JavaScript，TypeScript，ts ，js，css，html，flutter ，uniapp，web前端，前端开发，后端，全栈开发，个人博客"
      },
      { hid: "author", name: "author", content: "GF" },
      { hid: "renderer", name: "renderer", content: "webkit|ie-comp|ie-stand" },
      {
        hid: "http-equiv",
        "http-equiv": "X-UA-Compatible",
        content: "IE=edge,chrome=1"
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        href:
          "https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.compat.css",
        rel: "stylesheet"
      }
    ],
    script: [
      { src: "https://at.alicdn.com/t/font_2667664_127w9lfda4p.js" }
      // { src: "/animation/ribbon.min.js" }
    ]
  },

  router: {
    scrollBehavior: function(to, from, savedPosition) {
      return { x: 0, y: 0 };
    }
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    "ant-design-vue/dist/antd.css",
    "@/assets/fontawesome/css/font-awesome.min.css",
    "@/assets/css/base.scss"
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/antd-ui",
    "~/plugins/axios",
    { src: "~plugins/banner", ssr: false },
    { src: "~plugins/vue-lazy-load", ssr: false },
    { src: "~plugins/clipboard", ssr: false },
    { src: "~plugins/baidu", ssr: false },
    { src: "~plugins/scroll-to", ssr: false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["@nuxtjs/axios"],

  axios: {
    proxy: true,
    prefix: "/blogapi/",
    credentials: true
  },
  proxy: {
    // 代理
    "/blogapi/": {
      // target: 'http://121.89.241.42:7779/', //代理转发地址
      target: "http://127.0.0.1:7779/", //代理转发地址
      changeOrigin: true,
      pathRewrite: {
        "^/blogapi/": "/",
        changeOrigin: true
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    analyze: true,
    optimizeCSS: true,
    extractCSS: true
  }
};
