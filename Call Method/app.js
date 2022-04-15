// selection.call(function, arguments)

d3.select('svg')
    .attr('width', '300')
    .attr('height', '300');


let dataArray = [15, 25, 35];

function updateCircles(d, i, n){
    // console.log(d);
    // console.log(i);
    // console.log(n);
    const element = d3.select(n[i]);
    element.attr('cx', i < 1? 5+d: (5 + +n[i-1].getAttribute('cx') + +n[i-1].getAttribute('r')+d))
        .attr('cy', '150')
        .attr('r', d)
        .style('fill', `rgba(${d/2}, ${d/3}, ${d*4}, 0.7)`)

}

function display(selection, radius){
    // console.log(selection);
    // console.log(radius);
    selection.selectAll('circle')
        .data(radius)
        .join('circle')
        .each(updateCircles);
}

const circle = d3.select('svg').call(display, dataArray);
