import c3 from "c3";
import { chart } from "c3";

function loadChart (json) {
  console.log(json);

  const obj = JSON.parse(json);
  console.log(obj);
 
  const chartType = obj.type;
  const columns = obj.data;
  const pattern = obj.pattern;
  console.log(columns,chartType,pattern);

const chart = c3.generate({
  bindto: '#chart',
  data: {
    onclick: function (data) {
      console.log("onlink", data);
      FileMaker.PerformScript ("Get data from chart", JSON.stringify(data));
    },
    type: chartType,

    // colors: {apples: "green", oranges: "orange", pears: "blue", frogs: "pink"},
    columns: columns,
    groups: [
      ['oranges', 'apples'],
      ['pears']
    ]
  },
  color: {
    pattern: ['purple', '#aec7e8', 'red', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5'],
    // pattern: pattern,
},
  grid: {
  y: {
    show: true
  }
},
regions: [
  {axis: 'x', end: 1, class: 'regionX'},
  {axis: 'x', start: 2, end: 4, class: 'regionX'},
  {axis: 'x', start: 5, class: 'regionX'},
  {axis: 'y', end: 50, class: 'regionY'},
  {axis: 'y', start: 80, end: 140, class: 'regionY'},
  {axis: 'y', start: 400, class: 'regionY'},
  {axis: 'y2', end: 900, class: 'regionY2'},
  {axis: 'y2', start: 1150, end: 1250, class: 'regionY2'},
  {axis: 'y2', start: 1300, class: 'regionY2'},
],
zoom: {
  enabled: true
},
gauge: {
  max: 700
}
});
window.updateChart = function (data) {
  const columns = JSON.parse (data);
  console.log(columns);
  chart.load({columns: columns, unload: ["oranges","apples"]})
};

window.transformChart = function (type) {
  console.log(type);
  chart.transform(type);
}};
window.loadChart = loadChart;
// const chart2 = c3.generate({
//   bindto: '#chart2',
//   data: {
//     types: { sweets: 'bar', chocolate: 'spline' },
//     colors: {sweets: "blue", chocolate: "purple"},
//     columns: [
//       ['sweets', 90, 200, 100, 400, 150, 250],
//       ['chocolate', 50, 20, 10, 40, 15, 25]
//     ]
//   }
// });