import * as Rx from 'rxjs-es/Rx';
import * as d3 from 'd3';

export function writeScheduledWords (svgElement, textData){
    //console.log(svgElement, 'svgElement');
    textData.forEach(x => x.data.svg = svgElement);			

    //console.log(textData, 'textData');
    //
    function addText (word, svg, x, y, font, size, fill){
        const text =  svg
 		.append('text');
        text
            .text(word)
            .attr('x', x)
            .attr('y', y)
            .attr('font-family', font)
            .attr('font-size', size)
            .attr('fill', fill);
    //		.attr('fill', 'red')
    //		.attr('width', 50)
    //		.attr('height', 50)
    //		.attr('id', 'dragrect');
    }

		
    const textSchedulerDataStream = Rx.Observable.from(textData);
    const textScheduledStream = textSchedulerDataStream
	  .delayWhen( t => Rx.Observable.interval(t.timeToFire).take(1))
        .share();
	
    //	const audio =  textScheduledStream( x => // TO DO play AUDIO ) 		
  
    textScheduledStream
    //      .do(x => console.log(x, 'do'))
        .subscribe( x => {
        //    console.log(x, 'das ist x');
            //   x.data.svg.append('rect');
            addText(x.data.word, x.data.svg, x.data.x, x.data.y, x.data.font, x.data.size, x.data.fill);
        });	
}
// x.fn(x.data)
