import c3 from "c3";

function loadChart (data) {
  console.log(data);

  const columns = JSON.parse(data);
  console.log(columns);
const chart = c3.generate({
  bindto: '#chart',
  data: {
    onclick: function (data) {
      console.log("onlink", data);
      FileMaker.PerformScript ("Get data from chart", JSON.stringify(data));
    },
    type: "donut",

    colors: {apples: "green", oranges: "orange", pears: "blue"},
    columns: columns

  },
  donut: { padAngle: .05 },
});}

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