"use strict";




window.addEventListener("load",createMenu);



function createWindow() {
	window.open('specials.html', 'specials', 'width=900,height =600,left=-1400,right=-1000,top= 200,directories=yes,location=yes,menubar=yes,scrollbar=yes,resizable=yes,status=yes,toolbar=yes');

}//end createWindow


var entrees = ["Poblano del Philly", "Inner Lasagna", "Hellfire Torpedos", "Pizza Pepper", "Pollo Loco"];

var prices = [12.99, 11.99, 10.99, 11.99, 11.49];

var desc = ["Poblano from the city of love with extra cheese", "Pick a bell and slap some delicious lasagna in it, what could go wrong", "10 habanero peppers stuffed with japeleno/artichoke dip and wrapped in bacon.  There will be hell to pay", "Classic pepperoni pizza stuffed in your choice of pepper, or should we say pepper-pie", "Fajita chicken mixed with hatch chiles in your choice of pepper."];


function createMenu(){

	var spMenuT = "<thead id='spThead'><tr><th>Entree</th><th>Description</th><th>Price</th><tr></thead>";

	for (var i = 0; i < entrees.length; i++) {
		spMenuT += "<tbody><tr><td id='mImage'><img height='200px' width='200px' src='images/sp_" + entrees[i] + ".png' alt='" + entrees[i] + "' /><h5>" + entrees[i] + "</h5></td>";
		spMenuT += "<td class='mDes'>"+ desc[i] + "</td><td>$" + prices[i] + "</td></tr></tbody>";
	} 

	document.getElementById("spTable").innerHTML = spMenuT;

	var spContainer = document.getElementById("spContainer");
	var spCell = document.getElementsByTagName("td");
	var spTh = document.getElementsByTagName("th");
	var spThead = document.getElementById("spThead");

	//Table Container Styles
	spContainer.style.height = "100%";
	spContainer.style.padding = "20px";

	//Table Styles
	spTable.style.backgroundColor = "black";
	spTable.style.color = "white";
	spTable.style.fontSize = "20px";
	spTable.style.margin = "0px auto";
	spThead.style.backgroundColor = " #1B0101";


	//Table Cell styles
	for (var i = 0; i < spCell.length; i++) {
		spCell[i].style.textAlign = "center";
		spCell[i].style.padding = "10px";
		spCell[i].style.fontFamily = "'Nanum Pen Script',cursive";
		spCell[i].style.fontSize = "24px";
	}

	//Table Th Styles
	for (var i = 0; i < spTh.length; i++) {
		spTh[i].style.fontFamily = "'Permanent Marker',cursive";
		spTh[i].style.fontSize = "26px";
		spTh[i].style.padding = "10px";
	}
}