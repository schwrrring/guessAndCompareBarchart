import * as Rx from 'rxjs-es/Rx';
import * as d3 from 'd3';

export function drawableRect(queryString){
//  const rect = d3.select('body')
//		.append('svg')
//		.append('rect')
//		.attr('fill', 'red')
//		.attr('width', 50)
//		.attr('height', 50)
//		.attr('id', 'dragrect');
		
  const mousemove = 	Rx.Observable
		  .fromEvent(document, 'mousemove');
  const mouseup = 	Rx.Observable
		  .fromEvent(d3.select(queryString).node(), 'mouseup');

  Rx.Observable
		  .fromEvent(d3.select(queryString).node(), 'mousedown')
  //	.do( x => console.log(x, 'mousedown'))
    .switchMap( () => mousemove )
  //	.do( x => console.log(x, 'mousemove'))
    .map( x => x.screenY  )
    .do( x => console.log(x ,'screenY'))
    .pairwise()
    .do( x => console.log(x ,'paiwise'))
    .map(([a,b]) =>  b -a )
    .do( x => console.log(x ,'diff'))
    .takeUntil(mouseup)
    .repeat()	
    .subscribe( x =>	{ d3.select(queryString).attr('height', parseInt(d3.select(queryString).attr('height')) + parseInt(x));}
    );
}

export const example = Rx.Observable.of(1,2,3);
