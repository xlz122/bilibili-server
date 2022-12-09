// 首页列表

module.exports = (query, request) => {
  return request(
    'GET',
    `https://api.bilibili.com/x/web-interface/wx/hot?ps=100&teenage_mode=0&pn=${query.page}`,
    {},
    {
      crypto: 'm',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP
    }
  );
};
