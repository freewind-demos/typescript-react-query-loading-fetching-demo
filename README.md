TypeScript "react-query" Loading Fetching Demo
=================================

状态很多也很复杂：

1. `isLoading` 表示第一次取
2. `isRefetching` 表示之后取
3. `isFetching` 不论是第一次还是之后

- 如果有一次数据取成功了，它会一直存在缓存中，在新数据到来前会一直存在，不会被清空；
- 如果某次取失败了，再去取时它依然会使用之前正确过的数据，直到新数据到来；
- 由于缓存机制，导致`status`的值不能真实表达当前状态，而是缓存影响下的状态；
- remove会去除之前数据，但页面已经显示的值不会变，直到再次调用refetch;
- 就算enabled为false时，也可以调用fetch强行去取；
- 如果缓存key变成了一个新值，则会重新请求；如果变成了某个旧值，则会从缓存中取

```
npm install
npm run demo
```

It will open page on browser automatically.
