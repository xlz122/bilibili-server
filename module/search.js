// 搜索 - 默认排序

module.exports = (query, request) => {
  const params = `keyword=${encodeURI(query.keyword)}&page=${query.page}&pagesize=${query.size}&context=`;

  return request(
    'GET',
    `https://api.bilibili.com/x/web-interface/search/all/v2?${params}`,
    {},
    {
      crypto: 'm',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP
    }
  );
};
