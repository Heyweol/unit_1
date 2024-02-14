


var cityPop = [
	{ 
		city: 'Madison',
		population: 233209
	},
	{
		city: 'Milwaukee',
		population: 594833
	},
	{
		city: 'Green Bay',
		population: 104057
	},
	{
		city: 'Superior',
		population: 27244
	}
];

// add a coloumm show relative size of city
function addColumns(cityPop){
    
	//select by row
    document.querySelectorAll("tr").forEach(function(row, i){

		// i==0 means table head, else the entris
    	if (i == 0){
			//insert a cell and change its content
    		row.insertAdjacentHTML('beforeend', '<th>City Size</th>');
    	} else {
			
    		var citySize;

    		if (cityPop[i-1].population < 100000){
    			citySize = 'Small';
    		} else if (cityPop[i-1].population < 500000){
    			citySize = 'Medium';

    		} else {
    			citySize = 'Large';
    		};
			
			// instert the size of city
			row.insertAdjacentHTML('beforeend','<td>' + citySize + '</td>');

    	};
    });
};


function addEvents(){

	// when hover on the table , change color
	document.querySelector("table").addEventListener("mouseover", function(){
		
		var color = "rgb(";
		// get random color
		for (var i=0; i<3; i++){

			var random = Math.round(Math.random() * 255);

			color += random.toString();

			if (i<2){
				color += ",";
			
			} else {
				color += ")";
		}};
		console.log(color);// debug print to see color string
		
		// change the style of the sable
		document.querySelector("table").style.color = color;
	});

	function clickme(){
		// alert popup
		alert('Hey, you clicked me!');
	};
	
	// click event listener
	document.querySelector("table").addEventListener("click", clickme)
}


// example code to create table to start with
//initialize function called when script loads
function initialize(){
	cities();
	addColumns(cityPop);
	addEvents();
};

//function to create a table with cities and their populations
function cities(){
	var cities = [
		'Madison',
		'Milwaukee',
		'Green Bay',
		'Superior'
	];
	var population = [
		233209,
		594833,
		104057,
		27244
	];
	
	//create a table element
	var table = document.createElement("table");
	
	//create a header row
	var headerRow = document.createElement("tr");
	
	//add city column to header row
	var cityHeader = document.createElement("th");
	cityHeader.innerHTML = "City";
	headerRow.appendChild(cityHeader);
	
	//add population column to header row
	var popHeader = document.createElement("th");
	popHeader.innerHTML = "Population";
	headerRow.appendChild(popHeader);
	
	//add the header row
	table.appendChild(headerRow);
	
	//loop to add a new row for each city
	for (var i = 0; i < cities.length; i++){
		var tr = document.createElement("tr");
		
		var city = document.createElement("td");
		city.innerHTML = cities[i];
		tr.appendChild(city);
		
		var pop = document.createElement("td");
		pop.innerHTML = population[i];
		tr.appendChild(pop);
		
		table.appendChild(tr);
	};
	
	//add the table to the div in index.html
	var mydiv = document.getElementById("mydiv");
	mydiv.appendChild(table);
};

window.onload = initialize();
function debugAjax(){
    //basic fetch
    var myData
    fetch('data/MegaCities.geojson')
       // conversion
       .then(function(response){
          return response.json();
       })
       //callback
       .then(debugCallback)
    // log out of scope data
    console.log("undefined 'myData'",myData)
};

//define callback function
function debugCallback(response){
    //tasks using the data go here
    var myData;
    //assign data
    myData = response;
    
    //display data as needed
    document.querySelector("#mydiv").insertAdjacentHTML('beforeend', '<br>GeoJSON data: <br>' + JSON.stringify(myData))
    console.log("real data ",myData)
}

document.addEventListener('DOMContentLoaded',debugAjax)