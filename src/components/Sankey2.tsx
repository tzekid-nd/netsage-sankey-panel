// import * as d3 from 'd3';
// import * as d3Sankey from 'd3-sankey';

// export default class Sankey {
//     constructor(id: any) {
//         this.containerID = id;
//     }

//     /**
//      * Renders the sankey in the panel.
//      *
//      * @param
//      */
//     renderSankey(parsedData: any[] | Iterable<any>, width: number, height: number) {
//         if (!parsedData) {
//             return;
//         }

//         // SUPER IMPORTANT! This clears old chart before drawing new one...
//         d3.select('#' + this.containerID)
//             .select('svg')
//             .remove();
//         d3.select('#' + this.containerID)
//             .select('.tooltip')
//             .remove();
//         // ----------------------------------------------------------

//         console.log('rendering Graph...');

//         let panelWidth = width;
//         let panelHeight = height;

//         // set the dimensions and margins of the graph
//         var margin = { top: 50, right: 400, bottom: 25, left: 400 },
//             width = panelWidth - margin.left - margin.right,
//             height = panelHeight - margin.top - margin.bottom;

//         // append the svg object to the body of the page
//         var svg = d3
//             .select('#' + this.containerID)
//             .append('svg')
//             .attr('width', width + margin.left + margin.right)
//             .attr('height', height + margin.top + margin.bottom)
//             .append('g')
//             .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

//         // Constructs a new Sankey generator with the default settings.
//         var sankey: any = d3Sankey
//             .sankey()
//             .nodeAlign(d3Sankey.sankeyJustify)
//             .nodeWidth(20)
//             .nodePadding(20)
//             .extent([
//                 [0, 0],
//                 [width, height],
//             ]);

//         sankey
//             .nodes(graph.nodes)
//             .links(graph.links)
//             .layout(1);

//         // add in the links
//         var link = svg.append("g")
//             .selectAll(".link")
//             .data(graph.links)
//             .enter()
//             .append("path")
//             .attr("class", "link")
//             .attr("d", sankey.link())
//             .style("stroke-width", function (d) { return Math.max(1, d.dy); })
//             .sort(function (a, b) { return b.dy - a.dy; });

//         var node = svg.append("g")
//             .selectAll(".node")
//             .data(parsedData)
//             .enter().append("g")
//             .attr("class", "node")
//             .attr("transform", function (d) { return "translate(" + d.x + "," + d.y + ")"; })
//             .call(d3.drag()
//                 .subject(function (d) { return d; })
//                 .on("start", function () { this.parentNode.appendChild(this); })
//                 .on("drag", dragmove));

//         // add the rectangles for the nodes
//         node
//             .append("rect")
//             .attr("height", function (d) { return d.dy; })
//             .attr("width", sankey.nodeWidth())
//             .style("fill", function (d) { return d.color = "#828282"; })
//             .style("stroke", function (d) { return d.color; })
//             // Add hover text
//             .append("title")
//             .text(function (d) { return d.name + "\n" + "There is " + d.value + " stuff in this node"; });
//     }
// }
