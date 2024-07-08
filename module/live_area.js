// 直播 - 分类

module.exports = (query, request) => {
  return request(
    'POST',
    `https://api.live.bilibili.com/room/v1/AppIndex/getAreas`,
    {
      device: 'phone',
      platform: 'ios',
      scale: 3,
      build: 10000
    },
    {
      crypto: 'm',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP
    }
  );
};
