// 搜索 - 默认关键词

module.exports = (query, request) => {
  return request(
    'GET',
    `https://api.bilibili.com/x/web-interface/search/default`,
    {},
    {
      crypto: 'm',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP
    }
  );
};
