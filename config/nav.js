module.exports = [
  { text: '首页', link: '/' },
  {
    text: '前端',
    link: '/web',
    items: [
      {
        text: '前端文章',
        items: [
          { text: 'JavaScript', link: '/pages/46bead/' }, // 哈希链接是在你运行项目状态下，新增 markdown 文件自动生成的
          { text: 'Vue', link: '/pages/3a5c3b/' },
          { text: 'TypeScript', link: '/pages/94aee1/' },
        ],
      },
      {
        text: '学习笔记',
        items: [
          { text: '《JavaScript教程》笔记', link: '/note/js-learn/' }, // 哈希链接是在你运行项目状态下，新增 markdown 文件自动生成的
          { text: '《JavaScript高级程序设计》笔记', link: '/note/js/' },
          { text: '《ES6教程》笔记', link: '/note/es6/' },
          { text: '《Vue教程》笔记', link: '/note/vue/' },
          { text: '《TS教程》笔记', link: '/note/ts/' },
          { text: '《你不知道的JS上卷》笔记', link: '/note/know-js/' },
          { text: '《你不知道的JS中卷》笔记', link: '/note/know-js2/' },
          { text: '《你不知道的JS下卷》笔记', link: '/note/know-js3/' },
          { text: ' 小程序学习笔记', link: '/note/mini-program/' },
        ],
      },
    ],
  }, {
    text: '页面',
    link: '/page',
    items: [
      { text: 'HTML', link: '/pages/66b2c5/' }, // 哈希链接是在你运行项目状态下，新增 markdown 文件自动生成的
      { text: 'CSS', link: '/pages/249497/' },
      { text: 'HTML5', link: '/pages/b7001e/' },
      { text: 'CSS3', link: '/pages/276b17/' },
    ],
  }, {
    text: '技术',
    link: '/skill',
    items: [
      { text: '技术文档', link: '/pages/dd4b26/' }, // 哈希链接是在你运行项目状态下，新增 markdown 文件自动生成的
      { text: 'Node.js', link: '/pages/5e7191/' },
      { text: '算法', link: '/pages/008d44/' },
    ],
  }, {
    text: '归档',
    link: '/project',
    items: [
      { text: '项目', link: '/pages/b6da3b/' }, // 哈希链接是在你运行项目状态下，新增 markdown 文件自动生成的
      // { text: 'Node.js', link: '/pages/255011/' },            
      // { text: '算法', link: '/pages/0bea56/' },
    ],
  }, {
    text: '网络',
    link: '/webbook',
    items: [
      { text: '笔记', link: '/pages/08bdde/' }, // 哈希链接是在你运行项目状态下，新增 markdown 文件自动生成的
      // { text: 'Node.js', link: '/pages/255011/' },            
      // { text: '算法', link: '/pages/0bea56/' },
    ],
  },
  {
    text: '收藏',
    link: '/store',
    items: [
      { text: '网站', link: '/pages/09b291/' },
      { text: '资源', link: '/pages/7e18fb/' },
      { text: 'Vue收录', link: '/pages/13acda/' },
    ],
  }, {
    text: '其他',
    link: '/file',
    items: [
      { text: '学习', link: '/pages/b3cd50/' },
      // { text: '面试', link: '' },
      // { text: '友情链接', link: '' },
    ],
  }, {
    text: '读书',
    link: '/book',
    items: [
      { text: '读书', link: '/pages/4857cb/' },
    ],
  },
]
