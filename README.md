## Paging-Core

[![Greenkeeper badge](https://badges.greenkeeper.io/jincdream/paging-core.svg)](https://greenkeeper.io/)

[![Build Status](https://travis-ci.org/jincdream/paging-core.svg?branch=master)](https://travis-ci.org/jincdream/paging-core)
[![NPM version](https://img.shields.io/npm/v/%40martin_hotell%2Fpaging-core.svg)](https://www.npmjs.com/package/@martin_hotell/paging-core)
![Downloads](https://img.shields.io/npm/dm/@martin_hotell/paging-core.svg)
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-0.0.1-yellow.svg)](https://conventionalcommits.org)

## ✨ Features

- 将翻页逻辑、参数、数据进行了封装管理

## 💉 Consumption of published library:

1.  install it 🤖

```sh
yarn add paging-core
# OR
npm install paging-core
```

2.  use it 💪

```ts
  interface IData {
    list: Array<string>
    number: number
    params?: Partial<{ name: string }>
  }
  const loader: ILoader<Partial<{ name: string }>, IData> = async (
    number,
    params
  ) => {
    return {
      list: ["1", "2", "3"],
      number,
      params,
    }
  }
  const paging = new PagingCore<Partial<{ name: string }>, IData>({
    initParams: {
      name: "jinc",
    }
  })
  // 注册加载函数
  paging.registered(loader)
  // 触发加载函数
  paging.load().then(([data, err]: [IData | void, Error | void])=>{
    console.log(data, err)
    // 设置加载下一页
    paging.next()
  })
```

## ✨ API

### 注册加载器
```js
// 加载器，接收两参数，第一个是页码，第二个是参数值
const loader = async (pageNumber,params) => {
  return {
    list: ["1", "2", "3"],
    pageNumber,
    params,
  }
}
// 注册加载器
const paging = new PagingCore
paging.registered(loader)
```

### 设置参数

```js
// 设置单个值
paging.setParam("name", "jinci")
// 设置多个值
paging.setParams({
  "name":"jinci"
})
// 重设为实例化的值
paging.reset()
```
### 操作页码

```js
// 直接设置页码
paging.setPage(2)
// 将页码设置为下一页 +1
paging.next()
// 将页码设置为上一页 -1
paging.last()
```

### 缓存数据
```js
// 使用缓存
new PagingCore({
  useCache: true,
  initParams: {name: "jinc"}
})
// 加载数据
await paging.load()
paging.next()
await paging.load()
// 获取缓存数据
paging.getPageData(2)
```
## 🥂 License

[MIT](./LICENSE.md) as always
