// selection.each(function)


d3.select('svg')
    .attr('width', '300')
    .attr('height', '300')

let allRects = d3.selectAll('svg').selectAll('rect');
console.log(allRects);

function updateBars(d, i, n){
    // console.log(d);
    // console.log(i);
    // console.log(n);
    const element = d3.select(n[i]);
    console.log(element);
    element
        .attr('x', 5 + 35 * i)
        .attr('y', d)
        .attr('width', '30')
        .attr('height', d)
        .style('fill',  `rgb(${d * 2}, ${d * 3}, ${d * 4})`);
}

allRects = allRects.data([10, 20, 30])
    .join('rect')
    .each(updateBars)

console.log(allRects);


allRects = allRects.data([30, 60, 90, 120])
    .join('rect')
    .each(updateBars)
console.log(allRects);
