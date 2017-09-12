import * as Rx from 'rxjs-es/Rx';
import * as d3 from 'd3';

export function sliderEditorElement (svgElement, textData){		
    const slider = svgElement.append('g').attr('class', 'slider editor');
    // add g element mit classes editor slider
    // define timeScale: input(domain) time(minSec), ouptut(range) pixel
    // add axis for time
    // 
    // fuer jedes textdata element ein rectangle hinzufuegen 
    // x position gleich timeScale(d.timeToFire[i])
    // y position gleich scale'Barchart'(i) 
}


