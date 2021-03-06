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

    row.append("td").text(Date);
    row.append("td").text(City);
    row.append("td").text(State);
    row.append("td").text(Country);
    row.append("td").text(Shape);
    row.append("td").text(Duration);
    row.append("td").text(Comments);

});

var button = d3.select("#filter-btn");
button.on("click", function() {    
    tbody.html("");

    var inputField = d3.select("#datetime");
    var inputValue = inputField.property("value");
    console.log(inputValue);

    var filterResults = tableData.filter(sightingReport => sightingReport.datetime === inputValue);
    console.log(filterResults);

    tbody.html("");

    filterResults.forEach((resultRow) => {
        const row = tbody.append("tr");

        Object.values(resultRow).forEach((value) => {
            let cell = row.append("td");
            cell.text(value);
        })
    })
})