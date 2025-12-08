# Changelog

All notable changes to [min-dom](https://github.com/bpmn-io/min-dom) are documented here. We use [semantic versioning](http://semver.org/) for releases.

## Unreleased

___Note:__ Yet to be released changes appear here._

* `CHORE`: restore `main` export

## 5.1.1

* `CHORE`: revert to basic `clear`

## 4.2.1

* `CHORE`: revert to basic `clear`

## 5.1.0

* `FEAT`: optimize `clear`
* `FEAT`: use native `closest`
* `FIX`: properly handle missing `element` in `matches`

## 4.2.0

* `FEAT`: optimize `clear`
* `FEAT`: use native `closest`
* `FIX`: properly handle missing `element` in `matches`

## 5.0.0

* `CHORE`: turn into ES module
* `CHORE`: drop UMD distribution
* `CHORE`: do not inline stable external dependencies

### Breaking Changes

* This is an ES module only package now. Consume in modern browsers.
* Dropped UMD distribution. Consume as an ES module

## 4.1.0

* `DEPS`: update to `component-event@0.2.1` ([#19](https://github.com/bpmn-io/min-dom/pull/19))

## 4.0.3

* `DEPS`: bump to `min-dash@4`

## 4.0.2

* `FIX`: correctly reexport `component-event` ([#18](https://github.com/bpmn-io/min-dom/pull/18))
* `CHORE`: generate sourcemaps

## 4.0.1

* `CHORE`: remove unnecessary deps, script, and .babelrc

## 4.0.0

* `FEAT`: change library target to `ES2018`
* `FEAT`: drop `matches` shim
* `FEAT`: drop polyfills for browser not supporting `ES2018`

### Breaking Changes

* You have to shim `Element#matches`
* Target syntax is `ES2018`. Transpile the code base to target `< ES2018`.
* Polyfills for browsers not supporting `ES2018` are dropped (e.g. Element.classList).

## 3.2.1

* `FIX`: expose correct types ([#14](https://github.com/bpmn-io/min-dom/issues/14))

## 3.2.0

* `FEAT`: add `assignStyle` utility

## 3.1.3

* `FIX`: insource delegate-events ([#8](https://github.com/bpmn-io/min-dom/issues/8))

## 3.1.2

* `FIX`: make `closest` work inside shadow DOM ([#5](https://github.com/bpmn-io/min-dom/issues/5))

## 3.1.1

* `FIX`: correct TypeScript export definitions

## 3.1.0

* `FEAT`: add TypeScript definitions

## 3.0.0

### Breaking Changes

* `FIX`: remove browser field again; it confuses modern module bundlers. This partially reverts `v2.1.0`

## 2.2.0

* `CHORE`: mark utils as side-effect free via `sideEffects: false`

## 2.1.0

* `CHORE`: add `browser` field

## 2.0.0

### Breaking Changes

* `CHORE`: expose utils via main entry point only; use imports / destructuring to access them:

  ```javascript
  import { bind } from 'min-dom';
  ```

* `CHORE`: expose `query.all()` as `queryAll`

### Other Improvements

* `CHORE`: migrate libray to ES6
* `CHORE`: build and publish ES6, CommonJS and UMD distributions

## 1.0.0

* `CHORE`: remove `component-query` and rely on native `querySelector(All)`

## ...

Check `git log` for earlier history.
