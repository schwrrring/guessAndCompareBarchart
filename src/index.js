import * as Rx from '../node_modules/rxjs-es/Rx';
import { draw } from './modules/barchart.js'; 
import * as d3 from 'd3';
document.write(
    '<script src="http://' + (location.host || 'localhost').split(':')[0] +
    ':35729/livereload.js?snipver=1"></' + 'script>'
  );
console.log('hello lovely');

d3.csv("../data/Bars.csv", function(data2){
  //draw(data);
	console.log(data2, 'data');
});
//const test = Rx.Observable.of(1,2,3, 4,5);
//test.subscribe(x=> console.log(x));



