// 直播 - 分类列表

module.exports = (query, request) => {
  const params = `parent_area_id=${query.parent_area_id}&area_id=${query.area_id}&page=${query.page}&page_size=${query.size}&sort_type=online&device=phone&platform=ios&scale=3&build=10000`;

  return request(
    'GET',
    `https://api.live.bilibili.com/xlive/app-interface/v2/second/getList?${params}`,
    {},
    {
      crypto: 'm',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP
    }
  );
};
