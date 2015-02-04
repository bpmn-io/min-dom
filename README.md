# min-dom

A minimal dom utility toolbelt. Library friendly and based on utilities provided by [component](https://github.com/component).


## Footprint

Tiny if exposing only the most basic utilities (`event`, `classes`, `delegate`, `matches`, `query`).

```
$ browserify index.js --standalone=dom | bundle-collapser | uglifyjs | gzip > min-dom.min.js.gz
$ du min-dom.min.js.gz
4    min-dom.min.js.gz
```

Bigger when exposing the [component/dom](https://github.com/component/dom) api.

```
$ browserify dom/index.js --standalone=dom | bundle-collapser | uglifyjs | gzip > dom.min.js.gz
$ du dom.min.js.gz
12   dom.min.js.gz
```