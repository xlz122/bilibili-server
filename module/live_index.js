// 直播首页

module.exports = (query, request) => {
  return request(
    'POST',
    `https://api.live.bilibili.com/room/v2/AppIndex/getAllList`,
    {
      device: 'phone',
      platform: 'ios',
      scale: 3,
      build: 10000,
      protocol: '0,1',
      format: '0,1,2',
      codec: '0,1'
    },
    {
      crypto: 'm',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP
    }
  );
};
