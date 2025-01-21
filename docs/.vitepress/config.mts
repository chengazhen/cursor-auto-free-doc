import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "cursor-auto-free",
  description: "cursor auto free doc",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      {
        text: '快速开始',
        items: [
          { text: 'Markdown Examples', link: '/quick-start' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chengazhen/cursor-auto-free' }
    ]
  }
})
