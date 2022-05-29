google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Year', 'Employee', 'Employers', 'Total interest'],
        ['2014', 1000, 400, 200],
        ['2015', 1170, 460, 250],
        ['2016', 660, 1120, 300],
        ['2017', 1030, 540, 350]
    ]);

    var options = {
        chart: {
            title: 'Company Performance',
            subtitle: 'Employee, Employers, and Total interest: 2014-2017',
        }
    };

    var chart = new google.charts.Bar(document.getElementById('columnchart_material'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}


google.charts.load("current", {packages:["corechart"]});
google.charts.setOnLoadCallback(drawChartCr);
function drawChartCr() {
  var data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Age',     11],
    ['Salary',      2],
    ['gender',  2],
  ]);

  var options = {
    title: 'demo data',
    pieHole: 0.4,
  };

  var chart = new google.visualization.PieChart(document.getElementById('donutchart'));
  chart.draw(data, options);
}