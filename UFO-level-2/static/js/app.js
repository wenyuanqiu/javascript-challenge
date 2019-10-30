    // from data.js
var tableData = data;

// YOUR CODE HERE!

//Get Reference to table body tag
var tbody = d3.select("tbody");
//Clear Existing Table
tbody.html("");

//Store Unique Values for Date, City, State, Country, Shape
cities = ["Any"];
dates = ["Any"];
states = ["Any"];
countries = ["Any"];
shapes = ["Any"];

sightings = 0;
//Go Through Each Alien Sighting
tableData.forEach((alienSighting) => {
    
    //See if Unique
    if (sightings === 0) {
        cities.push(alienSighting.city);
        dates.push(alienSighting.datetime);
        states.push(alienSighting.state);
        countries.push(alienSighting.country);
        shapes.push(alienSighting.shape);
    }
    else {
        //Find City
        var cityFound = false;
        cityLength = cities.length;
        for (var i = 0; i < cityLength; i++)
        {if (cities[i] === alienSighting.city){cityFound = true;};};
        //Find State
        var stateFound = false;
        stateLength = states.length;
        for (var i = 0; i <stateLength; i++)
        {if (states[i] === alienSighting.state) {stateFound = true;};};
        //Find Dates
        var dateFound = false;
        dateLength = dates.length;
        for (var i = 0; i <dateLength; i++)
        {if (dates[i] === alienSighting.datetime) {dateFound = true;};};
        //Find Countries
        var countryFound = false;
        countryLength = countries.length;
        for (var i = 0; i <countryLength; i++)
        {if (countries[i] === alienSighting.country) {countryFound = true;};};
        //Find Shapes
        var shapeFound = false;
        shapeLength = shapes.length;
        for (var i = 0; i <shapeLength; i++)
        {if (shapes[i] === alienSighting.shape) {shapeFound = true;};};
    };

    //Add If Not Found Before
    if (cityFound === false){cities.push(alienSighting.city)};
    if (stateFound === false){states.push(alienSighting.state)};
    if (dateFound === false){dates.push(alienSighting.datetime)};
    if (countryFound === false){countries.push(alienSighting.country)};
    if (shapeFound === false){shapes.push(alienSighting.shape)};

    sightings += 1

    //Add Row For Each Sighting
    var row = tbody.append("tr");
    // Append Values For Each Sighting
    Object.entries(alienSighting).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

// Add Uniques to Selects
var dateSelect = d3.select("#dates");
dates.forEach((date) => {
    var dateOption = dateSelect.append("option");
    dateOption.attr("value",date);
    dateOption.text(date);
});
var citySelect = d3.select("#cities");
cities.forEach((city) => {
    var cityOption = citySelect.append("option");
    cityOption.attr("value",city);
    cityOption.text(city);
});
var stateSelect = d3.select("#states");
states.forEach((state) => {
    var stateOption = stateSelect.append("option");
    stateOption.attr("value",state);
    stateOption.text(state);
});
var countrySelect = d3.select("#countries");
countries.forEach((country) => {
    var countryOption = countrySelect.append("option");
    countryOption.attr("value",country);
    countryOption.text(country);
});
var shapeSelect = d3.select("#shapes");
shapes.forEach((shape) => {
    var shapeOption = shapeSelect.append("option");
    shapeOption.attr("value",shape);
    shapeOption.text(shape);
});

//Link To Filter Button
var button = d3.select("#filter-btn");

//On Button Click
button.on("click", function()
{

    d3.event.preventDefault();

    var inputElement = d3.select("#dates");
    var inputDate = inputElement.property("value");
    var inputElement = d3.select("#cities");
    var inputCity = inputElement.property("value");
    var inputElement = d3.select("#states");
    var inputState = inputElement.property("value");
    var inputElement = d3.select("#countries");
    var inputCountry = inputElement.property("value");
    var inputElement = d3.select("#shapes");
    var inputShape = inputElement.property("value");

    console.log(inputDate)
    console.log(inputCity)
    console.log(inputState)
    console.log(inputCountry)
    console.log(inputShape)

    //Filter for Input Data
    var filteredData = tableData

    if (inputDate === "Any") {filteredData=filteredData}
    else {filteredData = filteredData.filter(sightings => sightings.datetime === inputDate)};

    if (inputCity === "Any") {filteredData=filteredData}
    else {filteredData = filteredData.filter(sightings => sightings.city === inputCity)};

    if (inputState === "Any") {filteredData=filteredData}
    else {filteredData = filteredData.filter(sightings => sightings.state === inputState)};

    if (inputCountry === "Any") {filteredData=filteredData}
    else {filteredData = filteredData.filter(sightings => sightings.country === inputCountry)};

    if (inputShape === "Any") {filteredData=filteredData}
    else {filteredData = filteredData.filter(sightings => sightings.shape === inputShape)};

    //Clear Existing Table
    tbody.html("");

    //Popuate Filtered Table
    //For Each Sighting
    filteredData.forEach((alienSighting) => {
        //Add Row for Each Sighting
        var row = tbody.append("tr");
        //Append Values for Each Sighting
        Object.entries(alienSighting).forEach(([key,value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
});

