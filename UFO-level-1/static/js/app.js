// from data.js
var tableData = data;

// YOUR CODE HERE!

//Get Reference to table body tag
var tbody = d3.select("tbody");
//Clear Existing Table
tbody.html("");
//Go Through Each Alien Sighting
tableData.forEach((alienSighting) => {
    //Add Row For Each Sighting
    var row = tbody.append("tr");
    // Append Values For Each Sighting
    Object.entries(alienSighting).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});


//Link To Filter Button
var button = d3.select("#filter-btn");

//On Button Click
button.on("click", function()
{   d3.event.preventDefault();
    
    var inputElement = d3.select("#datetime");
    var inputDate = inputElement.property("value");
    console.log(inputDate);

    //Filter for Input Date in Data
    var tableDataForDate = tableData.filter(sightings => sightings.datetime === inputDate);

    //Clear Existing Table
    tbody.html("");

    //Popuate Filtered Table
    //For Each Sighting
    tableDataForDate.forEach((alienSighting) => {
        //Add Row for Each Sighting
        var row = tbody.append("tr");
        //Append Values for Each Sighting
        Object.entries(alienSighting).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});

