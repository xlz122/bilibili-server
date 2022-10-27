## 接口文档

### 获取首页分类

说明: 调用此接口可以获取首页的导航菜单

**接口地址:** `/partitions`

**接口地址:** `/banner`

### 默认搜索关键词

说明: 调用此接口 , 可获取默认搜索关键词

**接口地址:** `/search/default`

### 热搜列表

说明: 调用此接口 , 可获取热门搜索列表

**接口地址:** `/search/hot`

### 曲风-歌手

说明: 调用此接口可以获取该曲风对应的歌手

**接口地址:** `/style/artist`

**必选参数:** `tagId`: 曲风 ID

**可选参数 :** `size` : 返回数量 , 默认为 20

`cursor` : 返回数据的 cursor, 默认为 0 , 传入上一次返回结果的 cursor,将会返回下一页的数据

**调用例子:** `/style/artist?tagId=1000`


## 关于此文档

此文档由 [docsify](https://github.com/docsifyjs/docsify-cli/) 生成 docsify 是一个动态生成文档网站的工具。不同于 GitBook、Hexo 的地方是它不会生成将 .md 转成 .html 文件，所有转换工作都是在运行时进行。
