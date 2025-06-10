// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: "2025-05-15",
    devtools: { enabled: true },
    css: ["~/assets/css/main.css"],
    app: {
        head: {
            title: "Senagat StartUp",
            meta: [
                { charset: "utf-8" },
                { name: "viewport", content: "width=device-width, initial-scale=1" },
                { name: "description", content: "Senagat StartUp" },
            ],
            link: [
                // { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
                // { rel: "icon", type: "image/png", href: "/favicon-96x96.png", sizes: "96x96" },
                // { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
                // { rel: "shortcut icon", href: "/favicon.ico" },
                // { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
                // { rel: "manifest", href: "/site.webmanifest" },
                { rel: "stylesheet", href: "/fonts/Roboto-flex.css" },
            ],
            htmlAttrs: { "data-theme": "light" },
        },
    },
    nitro: {
        preset: 'github_pages',
    },
    modules: [
        "@nuxt/eslint",
        "@nuxt/icon",
        "@nuxt/ui",
        "@nuxt/image",
        "nuxt-zod-i18n",
        "@nuxtjs/i18n",
        "@pinia/nuxt",
    ],
    image: {
        dir: "assets/img",
    },
    ssr: true,
    i18n: {
        defaultLocale: "tm",
        lazy: true,
        langDir: "locales",
        strategy: "prefix_and_default",
        locales: [
            { code: "tm", iso: "tk-TM", file: "tm.json" },
            { code: "ru", iso: "ru-RU", file: "ru.json" },
            { code: "en", iso: "en-US", file: "en.json" },
        ],
        detectBrowserLanguage: false,
        bundle: {
            optimizeTranslationDirective: false,
        },
    },
    eslint: {},
    icon: {
        serverBundle: {
            collections: ["lucide", "flag"],
        },
        provider: "server",
        customCollections: [
            {
                prefix: "main",
                dir: "./assets/icons",
            },
        ],
    },
    vite: {
        plugins: [tailwindcss()],
    },
    ui: {
        colorMode: false,
    },
    pinia: {
        storesDirs: ["./stores"],
    },
    zodI18n: {
        useModuleLocale: false,
    },
    runtimeConfig: {
        public: {
            apiUrl: process.env.BACKEND_URL,
        },
    },
});
