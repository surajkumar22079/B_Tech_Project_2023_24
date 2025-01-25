import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

const Graph = ({ data }) => {
  const svgRef = useRef(null);
  console.log(data);
  useEffect(() => {
    // Clear previous graph elements
    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    const xDomain = [d3.min(data, (d) => d.x), d3.max(data, (d) => d.x)];
    const yDomain = [d3.min(data, (d) => d.y), d3.max(data, (d) => d.y)];

    const margin = { top: 20, right: 20, bottom: 40, left: 40 };
    const width = 800 - margin.left - margin.right;
    const height = 410 - margin.top - margin.bottom;

    const xScale = d3.scaleLinear()
      .domain(xDomain) // x-axis range from 0 to 40
      .range([0, width]);

    const yScale = d3.scaleLinear()
      .domain(yDomain) // y-axis range from 0 to 200
      .range([height, 0]);

    const lineGenerator = d3.line()
      .x((d) => xScale(d.x))
      .y((d) => yScale(d.y));

    const svgContent = svg
      .attr('width', width + margin.left + margin.right)
      .attr('height', height + margin.top + margin.bottom)
      .append('g')
      .attr('transform', `translate(${margin.left},${margin.top})`);


    // Add gridlines for the x-axis
    svgContent.append('g')
      .attr('class', 'grid')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale).ticks(10).tickSize(-height).tickFormat(''))
      .selectAll('line')
      .style('stroke-opacity', 0.3);

    // Add gridlines for the y-axis
    svgContent.append('g')
      .attr('class', 'grid')
      .call(d3.axisLeft(yScale).ticks(10).tickSize(-width).tickFormat(''))
      .selectAll('line')
      .style('stroke-opacity', 0.3);


    // Draw x-axis
    svgContent.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(d3.axisBottom(xScale))
      .append('text') // Add x-axis label
      .attr('x', width / 2)
      .attr('y', 30)
      .attr('fill', 'black')
      .attr('text-anchor', 'middle')
      .text('Temperature');

    // Draw y-axis
    svgContent.append('g')
      .call(d3.axisLeft(yScale))
      .append('text') // Add y-axis label
      .attr('x', -height / 2)
      .attr('y', -30)
      .attr('fill', 'black')
      .attr('text-anchor', 'middle')
      .attr('transform', 'rotate(-90)')
      .text('Resistance');

      // Add data points as dots
    svgContent.selectAll('.dot')
    .data(data)
    .enter()
    .append('circle')
    .attr('class', 'dot')
    .attr('cx', (d) => xScale(d.x))
    .attr('cy', (d) => yScale(d.y))
    .attr('r', 5) // Adjust the radius as needed
    .style('fill', 'steelblue') // Adjust the color as needed

  // Add tooltips for data points
  svgContent.selectAll('.dot')
    .on('mouseover', (event, d) => {
      const tooltip = svgContent.append('text')
        .attr('class', 'tooltip')
        .attr('x', xScale(d.x))
        .attr('y', yScale(d.y) - 10)
        .text(`(${d.x}, ${d.y})`)
        .attr('text-anchor', 'middle');

      // Adjust the font size, color, and positioning of the tooltip text as needed
    })
    .on('mouseout', () => {
      svgContent.selectAll('.tooltip').remove();
    });


    // Draw the line path
    svgContent.append('path')
      .datum(data)
      .attr('fill', 'none')
      .attr('stroke', 'steelblue')
      .attr('stroke-width', 2)
      .attr('d', lineGenerator);

  }, [data]);

  return (
    <svg ref={svgRef}></svg>
  );
};

export default Graph;