// 搜索 - 分类

module.exports = (query, request) => {
  const params = `keyword=${encodeURI(query.keyword)}&search_type=${query.search_type}&order=${query.order}&page=${query.page}&pagesize=${query.size}&context=`;

  return request(
    'GET',
    `https://api.bilibili.com/x/web-interface/search/type?${params}`,
    {},
    {
      crypto: 'm',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP
    }
  );
};
