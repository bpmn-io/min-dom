# min-dom

[![Build Status](https://travis-ci.org/bpmn-io/min-dom.svg?branch=master)](https://travis-ci.org/bpmn-io/min-dom)

A minimal dom utility toolbelt. Library friendly and based on utilities provided by [component](https://github.com/component).


## Footprint

Tiny if exposing only the most basic utilities (`event`, `classes`, `delegate`, `matches`, `query`).

```
$ browserify index.js --standalone=dom | \
      bundle-collapser | \
      uglifyjs | \
      gzip > min-dom.min.js.gz
$ du min-dom.min.js.gz
4    min-dom.min.js.gz
```


## Features

The library exposes the following tiny dom helpers:

* `attr` - get and set node attributes
* `classes` - class name helper; [component-classes](https://github.com/component/classes)
* `clear` - remove children from a node
* `closest` - get the closest parent by selector; [component-closest](https://github.com/component/closest)
* `delegate` - event deletation support; [component-delegate](https://github.com/component/delegate)
* `domify` - html to elements; [domify](https://github.com/component/domify)
* `event` - event binding; [component-event](https://github.com/component/event)
* `matches` - selector match check; [component-matches-selector](https://github.com/component/matches-selector)
* `query` - selector query support; [component-query](https://github.com/component/query)
* `remove` - detach a node from its parent


## License

MIT