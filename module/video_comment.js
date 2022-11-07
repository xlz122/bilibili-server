// 视频详情 - 评论列表

module.exports = (query, request) => {
  return request(
    'GET',
    `https://api.bilibili.com/x/v2/reply?type=1&sort=2&oid=${query.aid}&pn=${query.page}&nohot=1`,
    {},
    {
      crypto: 'm',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP
    }
  );
};
