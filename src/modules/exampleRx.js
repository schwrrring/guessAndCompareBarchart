import * as Rx from 'rxjs-es/Rx';
import * as d3 from 'd3';

export function drawableRect(){
  const rect = d3.select('body')
		.append('svg')
		.append('rect')
		.attr('fill', 'red')
		.attr('width', 50)
		.attr('height', 50)
		.attr('id', 'dragrect');
		
		const mousemove = 	Rx.Observable
		  .fromEvent(rect.node(), 'mousemove')
		
		Rx.Observable
		  .fromEvent(rect.node(), 'mousedown')
			.do( x => console.log(x, 'mousedown'))
			.switchMap( () => mousemove )
			.do( x => console.log(x, 'mousemove'))	
			.subscribe();
}

export const example = Rx.Observable.of(1,2,3);
