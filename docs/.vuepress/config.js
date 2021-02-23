const themeConfig = require('./config/theme/')

module.exports = {
  title: "lllanlll",
  description: '愿此间 山有木兮卿有意',
  dest: 'public',
  head: [
    ['link', {
      rel: 'icon',
      href: '/favicon.ico'
    }],
    ['meta', {
      name: 'viewport',
      content: 'width=device-width,initial-scale=1,user-scalable=no'
    }]
  ],
  theme: 'reco',
  themeConfig,
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart']
}