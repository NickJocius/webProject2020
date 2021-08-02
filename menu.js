"use strict";


//	Menu page for ITSE 1311 Beginning Web Programming Individual Project
//	Author: Nicholas Jocius
//	Date: 4/11/2020
//	Revised:

//	file: menu.js




window.addEventListener("load", menuLoad);

// Menu item arrays

let item = ["Green Bell", "Poblano", "Jalapeno", "Habanero", "Red Bell"];

let itemDes = ["Fresh locally source green bell peppers, known for their crisp texture and mildly sweet taste.", "Spice it up a bit with the delicious undeniably huge poblano pepper.", "Start with or end with our savory jalapenos.", "Test your pain threshold with our sweet yet devilish habaneros.", 
"Fresh locally sourced red bell peppers for those who like to pretend to eat spicy."];

let itemPrice = [7.99, 8.99, 5.99, 6.99, 7.99]

let item2 = ["Fajita Chicken", "Fajita Beef", "Chorizo CreamCheese", "Ground Turkey", "Tofu"];

let itemDes2 = ["Marinated for 24hours in our secret blend of spices and sauces, sliced and mixed with a mild blend of peppers and onions.", "Marinated for 24hours in our secret blend of spices and sauces, grilled to perfection and sliced.", "Delicious chorizo and creamcheese blend, creamy with a little kick.",
"A lighter option in regards to both fat content and spice content. Combined with our mild blend of peppers and onions.","A delicious vegetarian option, pan fried and combined with our secret blend."]

let itemPrice2 = [1.49, 1.99, 1.29, 1.49,1.99];



// Contains html for the contents of the menu
function menuLoad(){

	var menuHTML = "<table id='menuT'><colgroup><col span='1' id='col1'/><col span='2' id='col2'/></colgroup><thead><tr><th>Choose Your Pepper</th><th class='mDes'>Description</th><th>Base Price</th></tr></thead>";


	for (var i = 0; i < item.length; i++) {
		menuHTML += "<tbody><tr><td id='mImage'><img height='150px' width='100px' src='images/sb_" + item[i] + ".png' alt='" + item[i] + "' /><h5>" + item[i] + "</h5></td>";
		menuHTML += "<td class='mDes'>"+ itemDes[i] + "</td><td>$" + itemPrice[i] + "</td></tr></tbody>";
	} 

	menuHTML += "</table>";

	var menuHTML2 = "<table id='menuT'><colgroup><col span='1' id='col1'/><col span='2' id='col2'/></colgroup><thead><tr><th>Choose Your Stuffing</th><th class='mDes'>Description</th><th>Additional Price</th></tr></thead>";


	for (var i = 0; i < item2.length; i++) {
		menuHTML2 += "<tbody><tr><td id='mImage'><img height='150px' width='100px' src='images/sb_" + item2[i] + ".png' alt='" + item2[i] + "' /><h5>" + item2[i] + "</h5></td>";
		menuHTML2 += "<td class='mDes'>"+ itemDes2[i] + "</td><td>$" + itemPrice2[i] + "</td></tr></tbody>";
	} 

	menuHTML2 += "</table>";

// Apply menuHTML value to the div element ID menuTable
	document.getElementById("menuTable").innerHTML = menuHTML+menuHTML2;

}
