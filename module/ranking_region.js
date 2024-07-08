// 排行榜 - 分类列表

module.exports = (query, request) => {
  return request(
    'GET',
    `https://api.bilibili.com/x/web-interface/ranking/v2?rid=${query.rid}`,
    {},
    {
      crypto: 'm',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP
    }
  );
};
