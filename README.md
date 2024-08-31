# bun_16preact

 Version: 0.9.1

 Author  :

 date    : 2024/08/30

 update : 2024/08/31

***

Bun + Preact.js + Express , example


***
### build

* build, dev-start, watch

```
bun run build
bun run dev

```

***
* vercel.json

```
{
    "version": 2,
    "public": true,
    "builds": [
      {
        "src": "public/**/*",
        "use": "@vercel/static"
      },        
      {
        "src": "dist/index.js",
        "use": "@vercel/node"
      }
    ],
    "routes": [
      { "handle": "filesystem" },
      {
        "src": "/.*",
        "dest": "/dist/index.js"
      }
    ]
}
```
***
### blog


***
# License

* MIT

***

