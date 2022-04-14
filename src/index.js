import c3 from "c3";

function loadChart (json) {
  console.log(json);

  const obj = JSON.parse(json);
  console.log(obj);
 
  const chartType = obj.type;
  const columns = obj.data;
  console.log(columns,chartType);

const chart = c3.generate({
  bindto: '#chart',
  data: {
    onclick: function (data) {
      console.log("onlink", data);
      FileMaker.PerformScript ("Get data from chart", JSON.stringify(data));
    },
    type: chartType,

    colors: {apples: "green", oranges: "orange", pears: "blue", frogs: "pink"},
    columns: columns

  },
  
});
window.updateChart = function (data) {
  const columns = JSON.parse (data);
  console.log(columns);
  chart.load({columns: columns, unload: ["oranges","apples"]})
}}

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