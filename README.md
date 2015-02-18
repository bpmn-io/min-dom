# min-dom

A minimal dom utility toolbelt. Library friendly and based on utilities provided by [component](https://github.com/component).


## Footprint

Tiny if exposing only the most basic utilities (`event`, `classes`, `delegate`, `matches`, `query`).

```
$ browserify index.js --standalone=dom | bundle-collapser | uglifyjs | gzip > min-dom.min.js.gz
$ du min-dom.min.js.gz
4    min-dom.min.js.gz
```