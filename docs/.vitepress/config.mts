import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "cursor-auto-free",
  description: "cursor auto free doc",

  locales: {
    root: {
      label: 'English',
      lang: 'en',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/' },
        ],
        sidebar: [
          {
            text: 'Getting Started',
            items: [
              { text: 'Quick Start', link: '/quick-start' },
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/chengazhen/cursor-auto-free' }
        ]
      }
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      link: '/zh/',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
        ],
        sidebar: [
          {
            text: '快速开始',
            items: [
              { text: '快速开始', link: '/zh/quick-start' },
            ]
          }
        ],
        socialLinks: [
          { icon: 'github', link: 'https://github.com/chengazhen/cursor-auto-free' }
        ]
      }
    }
  }
})
