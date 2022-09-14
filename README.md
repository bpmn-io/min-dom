# min-dom

[![CI](https://github.com/bpmn-io/min-dom/workflows/CI/badge.svg)](https://github.com/bpmn-io/min-dom/actions?query=workflow%3ACI)

A minimal dom utility toolbelt. Library friendly and based on utilities provided by [component](https://github.com/component).


## Footprint

This library is tiny (`< 2Kb` in size) and still exposes all fundamental utilities:

```bash
$ npm run distro
$ gzip dist/min-dom.min.js
$ du -b dist/*.gz
1675    min-dom.min.js.gz
```


## Features

The library exposes the following tiny dom helpers:

* `assignStyle` - add inline styles to a node
* `attr` - get and set node attributes
* `classes` - class name helper
* `clear` - remove children from a node
* `closest` - get the closest parent by selector;
* `delegate` - event deletation support; [delegate-events](https://www.npmjs.com/package/delegate-events)
* `domify` - html to elements; [domify](https://github.com/component/domify)
* `event` - event binding; [component-event](https://github.com/component/event)
* `matches` - selector match check
* `query` - native selector query support
* `remove` - detach a node from its parent


## Related

* [min-dash](https://github.com/bpmn-io/min-dash) - minimal lodash inspired utility toolbelt
* [tiny-svg](https://github.com/bpmn-io/tiny-svg) - tiny SVG utility toolbelt


## License

MIT
