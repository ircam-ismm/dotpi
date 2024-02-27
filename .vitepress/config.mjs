import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "dotpi",
  description: "Tutorial and receipes about the dotpi tools.",

  srcExclude: ['README.md', 'TODOS.md'],
  base: '/dotpi/',
  // https://vitepress.vuejs.org/config/app-configs#markdown
  markdown: {
    theme: 'monokai',
    lineNumbers: false,
  },

  // https://vitepress.dev/reference/site-config#ignoredeadlinks
  ignoreDeadLinks: [
    // ignore all localhost links
    /^https?:\/\/localhost/,
    /^https?:\/\/127.0.0.1/,
  ],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    sidebar: [
      { text: 'Introduction',
        items: [
          { text: 'Getting started', link: '/introduction/getting-started.md' },
          // { text: 'Configuring a project', link: '/introduction/project-configuration.md' },
        ]
      },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ircam-ismm/dotpi' }
    ]
  }
})
