// 分类列表 - 最新视频

module.exports = (query, request) => {
  return request(
    'GET',
    `https://api.bilibili.com/archive_rank/getarchiverankbypartion?tid=${query.tid}&pn=${query.page}`,
    {},
    {
      crypto: 'm',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP
    }
  );
};
