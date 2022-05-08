import c3 from "c3";
import { chart } from "c3";

function loadChart (json) {
  console.log(json);

  const obj = JSON.parse(json);
  console.log(obj);
 
  const chartType = obj.type;
  const columns = obj.data;
  const pattern = obj.pattern;
  // const categories = obj.categories;
  console.log(columns,chartType,pattern
    // ,categories
    );

const chart = c3.generate({
  bindto: '#chart',
  
    data: {
    onclick: function (data) {
      // onmouseover: function (data) {
      console.log("onlink", data);
      // FileMaker.PerformScript ("Get data from chart 2", JSON.stringify(data));
       FileMaker.PerformScript ("Get data from chart 2", 
       JSON.stringify(data));
    },
    type: chartType,
    xFormat: '%Y-%m-%d',
    // colors: {
    //   'Daily Sales': 
    //   // ['purple', '#aec7e8', 'red', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5']
    //   function(d) {
    //     return '#'+(0xff0000+(d.value-25)*256*3).toString(16);ç
    //   }
    // },

    color: function (color, d) {
      if (d.id) {
          // return ['#E39920', '#53B5B5', '#CD249A'][d.index % 3];
          return ['#1f77b4', '#ff7f0e',  '#2ca02c', '#d62728', '#9467bd', '#e377c2','#bcbd22',][d.index % 7];
          // return [ '#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5'][d.index % 20];
      }
      return "#000";
  },
  //   colors: {
  //     'Daily Sales': '#FF0000'
  // },
    // colors: {apples: "green", oranges: "orange", pears: "blue", frogs: "pink"},
    x: 'x',
    columns: columns,
    
    // groups: [
    //   ['oranges', 'apples'],
    //   ['pears']
    // ]
  },
  bar: {
    width: {
        ratio: 0.5 // this makes bar width 50% of length between ticks
    }},
  // color: {
  // //   pattern: ['purple', '#aec7e8', 'red', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5'],
  //   pattern: pattern},

  axis: {
      x: {
        localtime: false,
        
        // type: 'category',
        type: 'timeseries',
        // categories: categories,
        tick: {
            format: '%a, %e %b %y',
            fit: false,
            culling: {
            max: 10},
            // rotate: 75,
            multiline: false
            
        },
        }
},

  grid: {
  y: {
    show: true
  }
},
regions: [
//   {axis: 'x', end: 1, class: 'regionX'},
//   {axis: 'x', start: 2, end: 4, class: 'regionX'},
//   {axis: 'x', start: 5, class: 'regionX'},
  // {axis: 'y', end: 50, class: 'regionY'},
  {axis: 'y', start: 60, end: 80, class: 'regionY'},
  // {axis: 'y', start: 400, class: 'regionY'},
//   {axis: 'y2', end: 900, class: 'regionY2'},
//   {axis: 'y2', start: 1150, end: 1250, class: 'regionY2'},
//   {axis: 'y2', start: 1300, class: 'regionY2'},
],
zoom: {
  enabled: true,
  // extent: [1, 2],
 
  // rescale: true,
  
},

gauge: {
  max: 700
}
});
chart.legend.hide();
window.updateChart = function (json) {
  const obj = JSON.parse (json);
  // const columns = JSON.parse (data);
  const columns = obj.data;
  // const categories = obj.categories;
  console.log(columns);
  chart.load({
    x: 'x',
    columns: columns, 
    // categories: categories,
    // , unload: ["oranges","apples"]
  })
};

window.transformChart = function (type) {
  console.log(type);
  chart.transform(type);
}};
window.loadChart = loadChart;

const chart2 = c3.generate({
  bindto: '#chart2',
  data: {
    types: { sweets: 'bar', chocolate: 'spline' },
    colors: {sweets: "blue", chocolate: "purple"},
    columns: [
      ['sweets', 90, 200, 100, 400, 150, 250],
      ['chocolate', 50, 20, 10, 40, 15, 25]
    ]
  }

  
}

);

const chart3 = c3.generate({
  bindto: '#chart3',
  data: {
    types: { sweets: 'bar', chocolate: 'spline' },
    colors: {sweets: "blue", chocolate: "purple"},
    columns: [
      ['sweets', 90, 200, 100, 400, 150, 250],
      ['chocolate', 50, 20, 10, 40, 15, 25]
    ]
  }

  
}

);