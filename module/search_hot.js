// 搜索 - 热搜列表

module.exports = (query, request) => {
  return request(
    'GET',
    `https://s.search.bilibili.com/main/hotword`,
    {},
    {
      crypto: 'm',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP
    }
  );
};
