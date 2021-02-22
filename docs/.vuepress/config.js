const themeConfig = require('./config/theme/')

module.exports = {
  title: "lllanlll澜",
  description: 'Enjoy when you can, and endure when you must.',
  dest: 'public',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
  ],
  theme: 'reco',
  themeConfig: {
    vssueConfig: {
      platform: 'github',
      owner: 'lllanlll',
      repo: 'myBlog',
      clientId: '04c5f3db5e4fe27a203d',
      clientSecret: '22f38c1a8bfed99d28a70f336914332a30b214ed',
    }
  },
  markdown: {
    lineNumbers: true
  },
  plugins: ['@vuepress/medium-zoom', 'flowchart'] 
}  