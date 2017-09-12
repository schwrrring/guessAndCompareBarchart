import * as Rx from '../node_modules/rxjs-es/Rx';

import { draw } from './modules/barchart.js'; 
import * as d3 from 'd3';
import { drawableRect } from './modules/exampleRx.js'; 
import { writeScheduledWords } from './modules/wordScheduled.js';
import { sliderEditorElement } from './modules/sliderEditorElement.js';
document.write(
    '<script src="http://' + (location.host || 'localhost').split(':')[0] +
    ':35729/livereload.js?snipver=1"></' + 'script>'
);
console.log('hAAAllo lovely');

const svg = d3.select('body')
    .append('svg')
    .attr('width', '1000px')
    .attr('height','1000px');
writeScheduledWords(svg);
sliderEditorElement(svg);
// to draw draggable barchart reactivate functin underneath
/*d3.csv('../data/Bars.csv', function(data){
  draw(data);
  drawableRect('#last');
});
*/


