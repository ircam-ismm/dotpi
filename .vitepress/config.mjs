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
      {
        text: 'dotpi-tools',
        items: [
          { text: 'Requirements', link: '/dotpi-tools/requirements.md' },
          { text: 'Setting up the dev machine', link: '/dotpi-tools/setting-up-the-dev-machine.md' },
          { text: 'Creating a project', link: '/dotpi-tools/creating-a-project.md' },
          { text: 'Installing a Raspberry Pi', link: '/dotpi-tools/installing-a-raspberry-pi.md' },
          { text: 'Troubleshooting', link: '/dotpi-tools/troubleshooting.md' },
        ],
      },
      {
        text: 'dotpi-manager',
        items: [
          { text: 'Using the dotpi-manager', link: '/dotpi-manager/using-the-dotpi-manager.md' },
        ]
      },
      {
        text: 'dotpi-box',
        items: [
          { text: 'Introduction', link: '/dotpi-box/introduction.md' },
        ]
      },
    ],

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/ircam-ismm/dotpi' }
    ]
  }
})
