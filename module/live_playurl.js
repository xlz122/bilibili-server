// 直播 - 播放链接

module.exports = (query, request) => {
  const params = `cid=${query.roomid}&platform=h5&otype=json&quality=0`;

  return request(
    'GET',
    `https://api.live.bilibili.com/room/v1/Room/playUrl?${params}`,
    {},
    {
      crypto: 'm',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP
    }
  );
};
