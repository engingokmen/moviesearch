git clone https://github.com/engingokmen/moviesearch.git

cd jobsearch

**start project**

```shell
$ npm install
$ npm run build
$ npm run serve
```

features:

- Higher Order Component for loading
- Client caching (created an object to store search parameters' property-values as key and response object from downloaded data as value. If search parameters match with existing one, it returns value as response object instead of downloading data from outsource)
