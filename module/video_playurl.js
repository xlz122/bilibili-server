// 视频详情 - 播放链接

module.exports = (query, request) => {
  return request(
    'GET',
    `https://api.bilibili.com/x/player/playurl?cid=${query.cid}&avid=${query.aid}&platform=html5&otype=json&qn=16&type=mp4&html5=1`,
    {},
    {
      crypto: 'm',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP
    }
  );
};
