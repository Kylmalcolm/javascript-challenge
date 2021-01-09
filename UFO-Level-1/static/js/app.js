// from data.js
var tableData = data;

var tbody = d3.select("tbody");

// console.log(tableData);

tableData.forEach(function(sightingReport) {
    console.log(sightingReport);

    var row = tbody.append("tr");

    var Date = sightingReport.datetime;
    var City = sightingReport.city;
    var State = sightingReport.state;
    var Country = sightingReport.country;
    var Shape = sightingReport.shape;
    var Duration = sightingReport.durationMinutes;
    var Comments = sightingReport.comments;
})