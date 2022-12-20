const partitionData = [
  {
    rid: 0,
    name: '全站'
  },
  {
    rid: 1,
    name: '动画'
  },
  {
    rid: 167,
    name: '国创'
  },
  {
    rid: 3,
    name: '音乐'
  },
  {
    rid: 129,
    name: '舞蹈'
  },
  {
    rid: 4,
    name: '游戏'
  },
  {
    rid: 36,
    name: '知识'
  },
  {
    rid: 188,
    name: '科技'
  },
  {
    rid: 234,
    name: '运动'
  },
  {
    rid: 223,
    name: '汽车'
  },
  {
    rid: 160,
    name: '生活'
  },
  {
    rid: 211,
    name: '美食'
  },
  {
    rid: 217,
    name: '动物圈'
  },
  {
    rid: 119,
    name: '鬼畜'
  },
  {
    rid: 155,
    name: '时尚'
  },
  {
    rid: 5,
    name: '娱乐'
  },
  {
    rid: 181,
    name: '影视'
  },
  {
    rid: 177,
    name: '纪录片'
  },
  {
    rid: 23,
    name: '电影'
  },
  {
    rid: 11,
    name: '电视剧'
  }
];

// 排行榜 - 分类导航

module.exports = (query, request) => {
  return {
    status: 200,
    body: {
      code: 0,
      data: partitionData
    }
  }
};
