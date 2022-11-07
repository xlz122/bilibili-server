// 搜索建议

module.exports = (query, request) => {
  console.log(query.keyword);
  console.log(encodeURI(query.keyword));
  return request(
    'GET',
    `https://s.search.bilibili.com/main/suggest?term=${encodeURI(query.keyword)}`,
    {},
    {
      crypto: 'm',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP
    }
  );
};
