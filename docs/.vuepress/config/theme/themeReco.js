module.exports = {
  type: 'blog',
  // 博客设置
  blogConfig: {
    category: {
      location: 2, // 在导航栏菜单中所占的位置，默认2
      text: 'Category' // 默认 “分类”
    },
    tag: {
      location: 3, // 在导航栏菜单中所占的位置，默认3
      text: 'Tag' // 默认 “标签”
    }
  },
  // 最后更新时间
  lastUpdated: 'Last Updated', // string | boolean
  // 作者
  author: 'linjh',
  // 备案号
  record: '京ICP备2021006178号',
  // 项目开始时间
  startYear: '2021',
  valineConfig: {
    appId: 'ROrKVjDbzbdIlpCvN6Yx7y7S-gzGzoHsz',
    appKey: 'WSszceT2sL3pEbJ7I3pDsT4D',
    placeholder: '填写邮箱可以收到回复提醒哦！',
    verify: true, // 验证码服务
    // notify: true, // 
    recordIP: true,
  }

}