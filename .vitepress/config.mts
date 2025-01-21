import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cursor Auto Free Docs",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      // { text: 'Home', link: '/' },
      // { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '目录',
        items: [
          // { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Cursor Pro工具使用说明', link: '/quick-start' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/chengazhen' }
    ]
  }
})
