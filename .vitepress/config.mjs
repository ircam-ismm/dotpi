import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "dotpi",
  description: "Tutorial and recipes about the dotpi tools.",

  srcExclude: ['README.md', 'TODOS.md', 'backup'],
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
      { text: 'Requirements', link: '/requirements.md' },
      { text: 'Setting up the dev machine', link: '/setting-up-the-dev-machine.md' },
      { text: 'Creating a project', link: '/creating-a-project.md' },
      { text: 'Installing a Raspberry Pi', link: '/installing-a-raspberry-pi.md' },
      { text: 'Using the dotpi-manager', link: '/using-the-dotpi-manager.md' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ircam-ismm/dotpi' }
    ]
  }
})
