const partitionData = [
  {
    tid: 1,
    name: '动画',
    children: [
      { rid: 1, name: '推荐' }, { rid: 24, name: 'MAD·AMV' }, { rid: 25, name: 'MMD·3D' },
      { rid: 47, name: '同人·手书' }, { rid: 257, name: '配音' }, { rid: 210, name: '模玩·周边' },
      { rid: 86, name: '特摄' }, { rid: 253, name: '动漫杂谈' }, { rid: 27, name: '综合' }
    ]
  },
  {
    tid: 13,
    name: '番剧',
    children: [
      { rid: 13, name: '推荐' }, { rid: 33, name: '连载动画' }, { rid: 32, name: '完结动画' },
      { rid: 51, name: '资讯' }, { rid: 152, name: '官方延伸' }
    ]
  },
  {
    tid: 153,
    name: '国创',
    children: [
      { rid: 167, name: '推荐' }, { rid: 153, name: '国产动画' }, { rid: 168, name: '国产原创相关' },
      { rid: 169, name: '布袋戏' }, { rid: 195, name: '动态漫·广播剧' }, { rid: 170, name: '资讯' }
    ]
  },
  {
    tid: 3,
    name: '音乐',
    children: [
      { rid: 3, name: '推荐' }, { rid: 28, name: '原创音乐' }, { rid: 29, name: '音乐现场' },
      { rid: 31, name: '翻唱' }, { rid: 59, name: '演奏' }, { rid: 243, name: '乐评盘点' },
      { rid: 30, name: 'VOCALOID·UTAU' }, { rid: 193, name: 'MV' }, { rid: 266, name: '音乐粉丝饭拍' },
      { rid: 265, name: 'AI音乐' }, { rid: 267, name: '电台' }, { rid: 244, name: '音乐教学' },
      { rid: 130, name: '音乐综合' }
    ]
  },
  {
    tid: 129,
    name: '舞蹈',
    children: [
      { rid: 129, name: '推荐' }, { rid: 20, name: '宅舞' }, { rid: 198, name: '街舞' },
      { rid: 199, name: '明星舞蹈' }, { rid: 200, name: '国风舞蹈' }, { rid: 255, name: '颜值·网红舞' },
      { rid: 154, name: '舞蹈综合' }, { rid: 156, name: '舞蹈教程' }
    ]
  },
  {
    tid: 4,
    name: '游戏',
    children: [
      { rid: 4, name: '推荐' }, { rid: 17, name: '单机游戏' }, { rid: 171, name: '电子竞技' },
      { rid: 172, name: '手机游戏' }, { rid: 65, name: '网络游戏' }, { rid: 173, name: '桌游棋牌' },
      { rid: 121, name: 'GMV' }, { rid: 136, name: '音游' }, { rid: 19, name: 'Mugen' }
    ]
  },
  {
    tid: 36,
    name: '知识',
    children: [
      { rid: 36, name: '推荐' }, { rid: 124, name: '科学科普' }, { rid: 201, name: '社科·法律·心理' },
      { rid: 228, name: '人文历史' }, { rid: 207, name: '财经商业' }, { rid: 208, name: '校园学习' },
      { rid: 209, name: '职业职场' }, { rid: 229, name: '设计·创意' }, { rid: 122, name: '野生技能协会' }
    ]
  },
  {
    tid: 188,
    name: '科技',
    children: [
      { rid: 188, name: '推荐' }, { rid: 95, name: '数码' }, { rid: 230, name: '软件应用' },
      { rid: 231, name: '计算机技术' }, { rid: 232, name: '科工机械' }, { rid: 233, name: '极客DIY' }
    ]
  },
  {
    tid: 234,
    name: '运动',
    children: [
      { rid: 234, name: '推荐' }, { rid: 235, name: '篮球' }, { rid: 249, name: '足球' },
      { rid: 164, name: '健身' }, { rid: 236, name: '竞技体育' }, { rid: 237, name: '运动文化' },
      { rid: 238, name: '运动综合' }
    ]
  },
  {
    tid: 223,
    name: '汽车',
    children: [
      { rid: 223, name: '推荐' }, { rid: 258, name: '汽车知识科普' }, { rid: 227, name: '购车攻略' },
      { rid: 247, name: '新能源车' }, { rid: 245, name: '赛车' }, { rid: 246, name: '改装玩车' },
      { rid: 240, name: '摩托车' }, { rid: 248, name: '房车' }, { rid: 176, name: '汽车生活' }
    ]
  },
  {
    tid: 160,
    name: '生活',
    children: [
      { rid: 160, name: '推荐' }, { rid: 138, name: '搞笑' }, { rid: 254, name: '亲子' },
      { rid: 250, name: '出行' }, { rid: 251, name: '三农' }, { rid: 239, name: '家居房产' },
      { rid: 161, name: '手工' }, { rid: 162, name: '绘画' }, { rid: 174, name: '其他' },
      { rid: 21, name: '日常' },
    ]
  },
  {
    tid: 211,
    name: '美食',
    children: [
      { rid: 211, name: '推荐' }, { rid: 76, name: '美食制作' }, { rid: 212, name: '美食侦探' },
      { rid: 213, name: '美食测评' }, { rid: 214, name: '田园美食' }, { rid: 215, name: '美食记录' }
    ]
  },
  {
    tid: 217,
    name: '动物圈',
    children: [
      { rid: 217, name: '推荐' }, { rid: 218, name: '喵星人' }, { rid: 219, name: '汪星人' },
      { rid: 222, name: '小宠异宠' }, { rid: 221, name: '野生动物' }, { rid: 220, name: '动物二创' },
      { rid: 75, name: '动物综合' }
    ]
  },
  {
    tid: 119,
    name: '鬼畜',
    children: [
      { rid: 119, name: '推荐' }, { rid: 22, name: '鬼畜调教' }, { rid: 26, name: '音MAD' },
      { rid: 126, name: '人力VOCALOID' }, { rid: 216, name: '鬼畜剧场' }, { rid: 127, name: '教程演示' }
    ]
  },
  {
    tid: 155,
    name: '时尚',
    children: [
      { rid: 155, name: '推荐' }, { rid: 157, name: '美妆护肤' }, { rid: 252, name: '仿妆cos' },
      { rid: 158, name: '穿搭' }, { rid: 159, name: '时尚潮流' }
    ]
  },
  {
    tid: 5,
    name: '娱乐',
    children: [
      { rid: 5, name: '推荐' }, { rid: 241, name: '娱乐杂谈' }, { rid: 262, name: 'CP安利' },
      { rid: 263, name: '颜值安利' }, { rid: 242, name: '娱乐粉丝创作' }, { rid: 264, name: '娱乐资讯' },
      { rid: 137, name: '明星综合' }, { rid: 71, name: '综艺' }
    ]
  },
  {
    tid: 181,
    name: '影视',
    children: [
      { rid: 181, name: '推荐' }, { rid: 182, name: '影视杂谈' }, { rid: 183, name: '影视剪辑' },
      { rid: 260, name: '影视整活' }, { rid: 259, name: 'AI影像' }, { rid: 184, name: '预告·资讯' },
      { rid: 85, name: '小剧场' }, { rid: 256, name: '短片' }, { rid: 261, name: '影视综合' }
    ]
  },
  {
    tid: 177,
    name: '纪录片',
    children: [
      { rid: 177, name: '推荐' }, { rid: 37, name: '人文·历史' }, { rid: 178, name: '科学·探索·自然' },
      { rid: 179, name: '军事' }, { rid: 180, name: '社会·美食·旅行' }
    ]
  },
  {
    tid: 23,
    name: '电影',
    children: [
      { rid: 23, name: '推荐' }, { rid: 147, name: '华语电影' }, { rid: 145, name: '欧美电影' },
      { rid: 146, name: '日本电影' }, { rid: 83, name: '其他国家' }
    ]
  },
  {
    tid: 11,
    name: '电视剧',
    children: [
      { rid: 11, name: '推荐' }, { rid: 185, name: '国产剧' }, { rid: 187, name: '海外剧' }
    ]
  }
];

// 分类

module.exports = (query, request) => {
  return {
    status: 200,
    body: {
      code: 0,
      data: partitionData
    }
  }
};
