import * as d3 from 'd3';
export function draw(data) {
  // The draw function is called when the template first loads
  var width = window.innerWidth,
    height = window.innerHeight;
  var svg = d3.select(document.body).append('svg').attr('width', width).attr('height', height),
    margin = {top: 20, right: 20, bottom: 30, left: 50},
    width = +svg.attr('width') - margin.left - margin.right,
    height = +svg.attr('height') - margin.top - margin.bottom;

  var tooltip = d3.select('body').append('div').attr('class', 'toolTip');

  var x = d3.scaleBand().rangeRound([0, width]).padding(0.1),
    y = d3.scaleLinear().rangeRound([height, 0]);

  var colours = d3.scaleOrdinal()
    .range(['#6F257F', '#CA0D59']);
  var barchart = svg.append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

  console.log(data);

  x.domain(data.map(function (d) {
    return d.area;
  }));
  y.domain([0, d3.max(data, function (d) {
	  return d.value;
  })]);
  //
  barchart.append('g')
    .attr('class', 'axis axis--x') 
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(x));

  barchart.append('g')
    .attr('class', 'axis axis--y')
    .call(d3.axisLeft(y).ticks(6).tickFormat(function (d) {
      return parseInt(d / 1000) + 'K';
    }).tickSizeInner([-width]))
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '0.71em')
    .attr('text-anchor', 'end')
    .attr('fill', '#5D6971')
    .text('Average House Price - (£)');

  barchart.selectAll('.bar')
    .data(data)
    .enter().append('rect')
    .attr('x', function (d) {
      return x(d.area);
    })
    .attr('y', function (d) {
      return y(d.value);
    })
    .attr('width', x.bandwidth())
    .attr('height', function (d) {
      return height - y(d.value);
    })
    .attr('fill', function (d) {
      return colours(d.area);
    })
    .attr('id', function (d,i,n ) { console.log(d,i,n); if (i == n.length - 1){return '#last';} });
  //   .on('click', function() {});
   

  //  console.log(d);
  //popup.point(mouse(this)[0], mouse(this)[1]).html(d.word).draw();
  //  event.stopPropagation();
  // });
  //.call(setAttributes);
  //.on("mousemove", function (d) {
  //    tooltip
  //        .style("left", event.pageX - 50 + "px")
  //        .style("top", event.pageY - 70 + "px")
  //        .style("display", "inline-block")
  //        .html((d.area) + "<br>" + "£" + (d.value));
  //})
  //.on("mouseout", function (d) {
  //    tooltip.style("display", "none");
  //});
}
