module.exports = (query, request) => {
  query.t = query.t == 1 ? 'sub' : 'unsub';
  const data = {
    artistId: query.id,
    artistIds: '[' + query.id + ']',
  };

  return request(
    'POST',
    `https://music.163.com/weapi/artist/${query.t}`,
    data,
    {
      crypto: 'weapi',
      cookie: query.cookie,
      proxy: query.proxy,
      realIP: query.realIP
    }
  );
};

// const uploadPlugin = require('../plugins/upload')
// module.exports = async (query, request) => {
//   const uploadInfo = await uploadPlugin(query, request)
//   const res = await request(
//     'POST',
//     `https://music.163.com/weapi/user/avatar/upload/v1`,
//     {
//       imgid: uploadInfo.imgId,
//     },
//     {
//       crypto: 'weapi',
//       cookie: query.cookie,
//       proxy: query.proxy,
//       realIP: query.realIP,
//     },
//   )
//   return {
//     status: 200,
//     body: {
//       code: 200,
//       data: {
//         ...uploadInfo,
//         ...res.body,
//       },
//     },
//   }
// }

// module.exports = (query, request) => {
//   const type =
//     {
//       0: 'pc',
//       1: 'android',
//       2: 'iphone',
//       3: 'ipad',
//     }[query.type || 0] || 'pc'
//   return request(
//     'POST',
//     `https://music.163.com/api/v2/banner/get`,
//     { clientType: type },
//     { crypto: 'api', proxy: query.proxy, realIP: query.realIP },
//   )
// }

// module.exports = (query, request) => {
//   const data = {
//     limit: query.limit || 30,
//     offset: query.offset || 0,
//     total: true,
//     area: query.area || 'ALL', //ALL:全部,ZH:华语,EA:欧美,KR:韩国,JP:日本
//   }
//   return request('POST', `https://music.163.com/weapi/album/new`, data, {
//     crypto: 'weapi',
//     cookie: query.cookie,
//     proxy: query.proxy,
//     realIP: query.realIP,
//   })
// }

// module.exports = (query, request) => {
//   const data = {
//     ids: '[' + parseInt(query.id) + ']',
//     br: parseInt(query.br || 999000),
//   }
//   return request(
//     'POST',
//     `https://music.163.com/weapi/song/enhance/player/url`,
//     data,
//     {
//       crypto: 'weapi',
//       cookie: query.cookie,
//       proxy: query.proxy,
//       realIP: query.realIP,
//     },
//   ).then((response) => {
//     let playable = false
//     if (response.body.code == 200) {
//       if (response.body.data[0].code == 200) {
//         playable = true
//       }
//     }
//     if (playable) {
//       response.body = { success: true, message: 'ok' }
//       return response
//     } else {
//       // response.status = 404
//       response.body = { success: false, message: '亲爱的,暂无版权' }
//       return response
//       // return Promise.reject(response)
//     }
//   })
// }
