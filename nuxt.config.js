export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: 'yiuhai-nuxt-front',
        htmlAttrs: {
            lang: 'en'
        },
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        ],
        script: [
            { src: "https://libs.baidu.com/jquery/2.1.1/jquery.min.js" },
            // { src: "/animation/ribbon.min.js" }
        ]
    },

    router: {
        scrollBehavior: function(to, from, savedPosition) {
            return { x: 0, y: 0 }
        }
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: [
        'ant-design-vue/dist/antd.css',
        '@/assets/fontawesome/css/font-awesome.min.css',
        '@/assets/css/base.scss'
    ],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        '@/plugins/antd-ui',
        { src: '~plugins/vue-lazy-load', ssr: false }
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/typescript
        '@nuxt/typescript-build',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        '@nuxtjs/axios',
    ],
    axios: {
        prefix: '/api/',
        proxy: true, // 开启跨域行为
    },
    proxy: { // 代理
        '/api/': {
            target: 'http://localhost:6666', //代理转发地址
            changeOrigin: true,
            pathRewrite: {
                '^/api': ''
            }
        }
    },


    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        analyze: false,
        optimizeCSS: true,
        extractCSS: true,
    }
}