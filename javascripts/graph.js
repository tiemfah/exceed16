var url = 'https://exceed.superposition.pknn.dev/data/1402';
var incomingStat = {}
var keys = []
var values = []
var zipped = []


// GET
fetch(url)
  .then(function (response) {
    return response.json();
  })
  .then(function (myJson) {
    incomingStat = myJson;
    var keys = ["Date"].concat(Object.keys(myJson))
    var values = ["Accuracy%"].concat(Object.values(myJson))
    var zipped = keys.map(function (e, i) {
      return [e, values[i]];
    });
    // GRAPH
google.charts.load('current', {
  'packages': ['corechart']
});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
  var data = google.visualization.arrayToDataTable(zipped);

  var options = {
    title: "P'Ken performance",
    hAxis: {
      title: 'date',
      titleTextStyle: {
        color: '#333'
      }
    },
    vAxis: {
      minValue: 0
    }
  };

  var chart = new google.visualization.AreaChart(document.getElementById('chart_div'));
  chart.draw(data, options);
}
  });


