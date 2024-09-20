// 直播 - 房间信息

module.exports = (query, request) => {
  return request(
    'POST',
    `https://api.live.bilibili.com/room/v1/Room/get_info`,
    {
      room_id: query.roomid,
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
