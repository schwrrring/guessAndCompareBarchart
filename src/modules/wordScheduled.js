import * as Rx from 'rxjs-es/Rx';
import * as d3 from 'd3';

export function writeScheduledWords (svgElement){
  console.log(svgElement, 'svgElement');
  const textData = [
    {
	  timeToFire: 1000,
      fn: addText,			
      data: {word: 'BundesWehrAusgaben', svg: svgElement, x: 50, y: 50, font:'sans-serif' , size: '20px', fill:'red'}		
    },
	 {
	  timeToFire: 3000,
      fn: addText,			
      data: {word: 'vs', svg: svgElement, x: 100, y: 100, font:'sans-serif' , size: '30px', fill:'blue'}			
    },
    {
	  timeToFire: 4000,
      fn: addText,			
      data: {word: 'Kindergarten Ausgaben', svg: svgElement, x: 200, y: 200, font:'sans-serif' , size: '40px', fill:'pink'},
    }		
  ];
  textData.forEach(x => x.svg = svgElement);			

  console.log(textData, 'textData');
  function addText (word, svg, x, y, font, size, fill){
    console.log(svg,'svg');
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
    .do(x => console.log(x, 'do'))
    .subscribe( x => {
      console.log(x, 'das ist x');
      //   x.data.svg.append('rect');
      x.fn(x.data.word, x.data.svg, x.data.x, x.data.y, x.data.font, x.data.size, x.data.fill);
    });	
}
// x.fn(x.data)
