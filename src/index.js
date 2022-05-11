import c3 from "c3";
import { chart } from "c3";

function loadChart (json) {
  console.log(json);

  const obj = JSON.parse(json);
  console.log(obj);
 
  const chartType = obj.type;
  const columns = obj.data;
  const columns2 = obj.data2;
  const date = obj.date;
  const pattern = obj.pattern;
  // const categories = obj.categories;
  console.log(columns,chartType,pattern,columns2
    // ,categories
    );

const chart = c3.generate({
  bindto: '#chart',
  
    data: {
    onclick: function (data) {
      // onmouseover: function (data) {
      console.log("onlink", data);
      // FileMaker.PerformScript ("Get data from chart", JSON.stringify(data));
       FileMaker.PerformScript ("Get data from chart", 
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
          return ['#1f77b4', '#ff7f0e',  '#2ca02c', '#d62728', '#9467bd', '#e377c2','#bcbd22',][d.index % 7];
          // return [ '#1f77b4', '#aec7e8', '#ff7f0e', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5'][d.index % 20];
      }
      return "#000";
  },

    // colors: {apples: "green", oranges: "orange", pears: "blue", frogs: "pink"},
    x: 'x',
    columns: columns,
    
    // groups: [
    //   ['oranges', 'apples'],
    //   ['pears']
    // ]
  },
  padding: {
    right: 40},
  bar: {
    width:  20
    // {
    //     ratio: 0.7 // this makes bar width 50% of length between ticks
    // }
  },
  // color: {
  // //   pattern: ['purple', '#aec7e8', 'red', '#ffbb78', '#2ca02c', '#98df8a', '#d62728', '#ff9896', '#9467bd', '#c5b0d5', '#8c564b', '#c49c94', '#e377c2', '#f7b6d2', '#7f7f7f', '#c7c7c7', '#bcbd22', '#dbdb8d', '#17becf', '#9edae5'],
  //   pattern: pattern},

  axis: {
      x: {
        localtime: true,
        
        // type: 'category',
        type: 'timeseries',
        // categories: categories,
        tick: {
            format: '%a, %e %b %Y',
            // fit: false,
            culling: false,
            // culling: {
            // max: 10},
            // count:31,
            rotate: 50,
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
  {axis: 'y', start: 50, end: 55, class: 'regionY'},
  // {axis: 'y', start: 400, class: 'regionY'},
//   {axis: 'y2', end: 900, class: 'regionY2'},
//   {axis: 'y2', start: 1150, end: 1250, class: 'regionY2'},
//   {axis: 'y2', start: 1300, class: 'regionY2'},
],
zoom: {
  enabled: false,
  // extent: [1, 100],
  // rescale: true,
},

// gauge: {
//   max: 700
// }

});
chart.legend.hide();


// window.updateChart = function (json) {
//   const obj = JSON.parse (json);
//   // const columns = JSON.parse (data);
//   const columns = obj.data;
//   // const categories = obj.categories;
//   console.log(columns);
//   chart.load({
//     x: 'x',
//     columns: columns, 

    
//     // categories: categories,
//     // , unload: ["oranges","apples"]
//   })
// };

// CHART 2 - Single day sales Donut chart

// var data = [
// ["April",8],
// ["Eric Espina",5],
// ["Ivor",8],
// ["Krystal Porfida",8],
// ["Mary Arciga",7],
// ["Rica Yanes",3],
// ["Samuel woodward",1],
// ["Sean",12]
// ];

// THIS IS SUPPOSED TO SHOW VALUE IN LEGEND, BUT DOESN'T WORK
// https://www.demo2s.com/javascript/javascript-c3-js-display-the-value-together-with-the-label-on-the-lege.html
// var total = 0;
// data.forEach(function (value) {
//     total += value[1];

//   });

const chart2 = c3.generate({
  bindto: '#chart2',
  data: {
    columns: columns2,
    // [
    //     ["April",8],
    //     ["Eric Espina",5],
    //     ["Ivor",8],
    //     ["Krystal Porfida",8],
    //     ["Mary Arciga",7],
    //     ["Rica Yanes",3],
    //     ["Samuel woodward",1],
    //     ["Sean",12]
    // ],
    type: 'donut',
  },
  legend: {
    show: true,
    position: 'right',
},
  donut: {
    title: date, 
  //   label: {
  //     format: function (value, ratio, id) {
  //         return value;
  //     }
  // },
  
},

tooltip: {
  format: {
      value: function (value, ratio, id) {
          return value;
      }
  }
}

});


window.updateChart = function (json) {
  const obj = JSON.parse (json);
  // const columns = JSON.parse (data);
  const columns = obj.data;
  const columns2 = obj.data2;

  // const categories = obj.categories;
  console.log(columns);
  chart.load({
    x: 'x',
    columns: columns, 

  })
  chart2.load({columns: columns2})
};


window.updateChartDay = function (json) {
  const obj = JSON.parse (json);
  // const columns = JSON.parse (data);
  // const columns = obj.data;
  const columns2 = obj.data2;
  const date = obj.date;
  // // const categories = obj.categories;
  // console.log(columns);
  // chart.load({
  //   x: 'x',
  //   columns: columns, 

  // })
  chart2.load({
    columns: columns2, 
    
    title: date,})
};


window.transformChart = function (type) {
  console.log(type);
  chart.transform(type);
}};


window.loadChart = loadChart;


// THIS IS SUPPOSED TO SHOW VALUE IN LEGEND, BUT DOESN'T WORK
// https://www.demo2s.com/javascript/javascript-c3-js-display-the-value-together-with-the-label-on-the-lege.html
// d3.select('#chart2').insert('div', '.chart').attr('class', 'legend').selectAll('span')
//     .data(['April','Eric Espina','Ivor','Krystal Porfida','Mary Arciga','Rica Yanes','Samuel woodward','Sean'])
//     .enter().append('div')
//     .attr('data-id', function (id) {
//     return id;
// })
//     .html(function (id) {
//     return getDataValue(id);
// })
//     .each(function (id) {
//     d3.select(this).style('background-color', chart2.color(id));
// })

// //calculate the legend value
// function getDataValue(id) {
//     var ret = "";
//     data.forEach(function (value) {
//         if (id == value[0]) {
//             ret = value[0] + ": " + precision((value[1] / total));
//         }
//     });
//     return ret;
// }



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

  
// }

// );
