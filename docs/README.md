## 接口文档

### 首页分类

说明: 调用此接口可以获取首页的导航菜单

**接口地址:** `/partitions`

### 首页列表

说明: 调用此接口可以获取首页列表

**接口地址:** `/ranking`

### 分类列表 - 热门推荐

说明: 调用此接口可以获取首页分类热门推荐列表

**接口地址:** `/ranking/region`

**必选参数:** `rid`: 分类 ID

**必选参数:** `day`: 天数

**调用例子:** `/ranking/region?rid=1&day=7`

### 分类列表 - 最新视频

说明: 调用此接口可以获取首页分类最新视频列表

**接口地址:** `ranking/archive`

**必选参数:** `rid`: 分类 ID

**必选参数:** `page`: 页数

**调用例子:** `/ranking/archive?rid=1&page=1`

### 默认搜索关键词

说明: 调用此接口 , 可获取默认搜索关键词

**接口地址:** `/search/default`

### 热搜列表

说明: 调用此接口 , 可获取热门搜索列表

**接口地址:** `/search/hot`

## 关于此文档

此文档由 [docsify](https://github.com/docsifyjs/docsify-cli/) 生成 docsify 是一个动态生成文档网站的工具。不同于 GitBook、Hexo 的地方是它不会生成将 .md 转成 .html 文件，所有转换工作都是在运行时进行。