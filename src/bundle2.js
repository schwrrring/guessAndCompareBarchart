'use strict';

var _Rx = require('../node_modules/rxjs-es/Rx');

var Rx = babelHelpers.interopRequireWildcard(_Rx);

document.write('<script src="http://' + (location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1"></' + 'script>');
console.log('hello lovely');

var test = Rx.Observable.of(1, 2, 3);
test.subscribe(function (x) {
    return console.log(x);
});
