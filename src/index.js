import * as Rx from '../node_modules/rxjs-es/Rx';
import { draw } from './modules/barchart.js'; 
import * as d3 from 'd3';
import { drawableRect } from './modules/exampleRx.js'; 
import { writeScheduledWords } from './modules/wordScheduled.js';
document.write(
  '<script src="http://' + (location.host || 'localhost').split(':')[0] +
    ':35729/livereload.js?snipver=1"></' + 'script>'
);
console.log('hello lovely');

const svg = d3.select('body')
  .append('svg')
  .attr('width', '1000px')
  .attr('height','1000px');
writeScheduledWords(svg);



d3.csv('../data/Bars.csv', function(data){

  draw(data);
  drawableRect('#last');
});


