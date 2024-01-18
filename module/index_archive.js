// 首页分类 - 最新视频

module.exports = (query, request) => {
  return request(
    'GET',
    `https://api.bilibili.com/x/web-interface/dynamic/region?rid=${query.rid}&pn=${query.page}`,
    {},
    {
      crypto: 'm',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP
    }
  );
};
