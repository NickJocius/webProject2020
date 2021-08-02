"use strict";

//	Today's Specials page for ITSE 1311 Beginning Web Programming Individual Project
//	Author: Nicholas Jocius
//	Date: 4/11/2020
//	Revised: 5/1/2020

//	file: calculate.js

window.addEventListener("load",order);

window.addEventListener("load", function() {
	document.getElementById("subButton").onclick = runSubmit;
	document.getElementById("cardName").oninput = validateName;
	document.getElementById("expMonth").onchange = validateMonth;
	document.getElementById("expYear").onchange = validateYear;
});

const pepOptions = ["green", "poblano", "jalapeno", "habanero", "red"];

const pepOptionsPrices = [7.99, 8.99, 5.99, 6.99, 7.99];

const stuffOptions = ["chicken", "beef", "chorizo", "turkey", "tofu"];

const stuffOptionsPrice = [1.49, 1.99, 1.29, 1.49, 1.99];

const bevOptions = ["coke","sprite","dr","water","tea"];

const bevOptionsPrice = [1.19,1.19,1.19,1.99,1.29]



function order() {
	
	let cartB2 = document.getElementById("orderB2");

	let getDate = document.getElementById("orderDate");
	
	let todayDate = new Date();

	getDate.value = todayDate.toLocaleString();

	let pepper = document.getElementById("pepper").value;

	let cartList = document.getElementById("cartList");

	let cartB = document.getElementById("orderB1");

	
}//end order function

//Validation functions
function runSubmit() {
	validateName();
	validateMonth();
}

function validateName() {
	var cardN = document.getElementById("cardName");
	if (cardN.validity.valueMissing) {
		cardN.setCustomValidity("Enter your name as it appears on the card");
	} else {
		cardN.setCustomValidity("");
	}
}//end validatename

function validateMonth(){
	let cardMonth = document.getElementById("expMonth");
	if(cardMonth.selectedIndex === 0) {
		cardMonth.setCustomValidity("Please select expiration month");
	} else {
		cardMonth.setCustomValidity("");
	}
}//end validateMonth

function validateYear() {
	let cardYear = document.getElementById("expYear");
	if (cardYear.selectedIndex === 0) {
		cardYear.setCustomValidity("Please select expiration year");
	} else {
		cardYear.setCustomValidity("");
	}
}


function entree(pepper, stuffing, sauce, beverage, extraS) {
	
	this.pepper = pepper.options[pepper.selectedIndex];
	this.pepPrice = null;
	this.stuffing = stuffing.options[stuffing.selectedIndex];
	this.stuffPrice = null;
	this.sauce = sauce.options[sauce.selectedIndex].text;
	this.total = 0;
	this.totalA = 0;
	this.bev = beverage.options[beverage.selectedIndex];
	this.bevPrice = 0;
	this.extraS = extraS;
	this.extraSprice = 0;
	this.salesTax = .0825;
	this.saucePrice = 0;

	if(this.extraS.checked == true){
		this.extraSprice = .79;
	}//end if
	
	switch(this.pepper.value) {
		case pepOptions[0]: this.pepPrice = pepOptionsPrices[0];
		case pepOptions[1]: this.pepPrice = pepOptionsPrices[1];
		case pepOptions[2]: this.pepPrice = pepOptionsPrices[2];
		case pepOptions[3]: this.pepPrice = pepOptionsPrices[3];
		case pepOptions[4]: this.pepPrice = pepOptionsPrices[4];

	}//end switch

	switch(this.stuffing.value) {
		case stuffOptions[0]: this.stuffPrice = stuffOptionsPrice[0];
		case stuffOptions[1]: this.stuffPrice = stuffOptionsPrice[1];
		case stuffOptions[2]: this.stuffPrice = stuffOptionsPrice[2];
		case stuffOptions[3]: this.stuffPrice = stuffOptionsPrice[3];
		case stuffOptions[4]: this.stuffPrice = stuffOptionsPrice[4];
		
	}//end switch

	switch(this.bev.value) {
		case bevOptions[0]: this.bevPrice = bevOptionsPrice[0];
		case bevOptions[1]: this.bevPrice = bevOptionsPrice[1];
		case bevOptions[2]: this.bevPrice = bevOptionsPrice[2];
		case bevOptions[3]: this.bevPrice = bevOptionsPrice[3];
		case bevOptions[4]: this.bevPrice = bevOptionsPrice[4];
		
	}//end switch

}//end entree class

function dispEtotal(source) {

	let pepperList = document.getElementById("pepper");
	let stuffing = document.getElementById("stuffing");
	let sauce = document.getElementById("sauce");
	
	let subT1 = document.getElementById("subTbox1");

	let bevList = document.getElementById("drink");
	let xSauce = document.getElementById("xSauce");


	let entreeOrder = new entree(pepperList,stuffing,sauce, bevList, xSauce);
	
	let buttonClicked = source.id;

	switch(source.id){
		case "orderB1":
			var subT = entreeOrder.sumTotal();

			entreeOrder.total = subT;

			subT1.value = "$" + Math.round(subT * 100)/100;

			entreeOrder.addCart();

		case "orderB2":
			//form will reset
			console.log(buttonClicked);
	}

}//end subTotal method


entree.prototype.sumTotal = function() {
	var subT = this.pepPrice + this.stuffPrice + this.bevPrice + this.extraSprice + this.extraSprice;
	return subT;
};



entree.prototype.addCart = function () {

	
	let pepperTxt = this.pepper.text;
	let stuffTxt = this.stuffing.text;

	let bevTxt = this.bev.text;

	let xs = this.extraS.name;

	let tax = this.salesTax;

	let pepCost = document.getElementById("pepperCost");

	let pepOrder = document.getElementById("pepperName");

	let stuffCost = document.getElementById("stuffCost");
	
	let stuffOrder = document.getElementById("stuffName");

	let sauceOrder = document.getElementById("sauceName");

	let sauceCost = document.getElementById("sauceCost");

	let bevOrder = document.getElementById("bevName");

	let bevCost = document.getElementById('bevCost');

	let extraSauce = document.getElementById("extraSauce");

	let extraSauceCost = document.getElementById("extraCost");

	let mealSub = document.getElementById("subtotal");

	let mealTotal = document.getElementById("totalCost");

	pepOrder.value = pepperTxt;

	pepCost.value = this.pepPrice;

	stuffOrder.value = stuffTxt;

	stuffCost.value = this.stuffPrice;

	sauceOrder.value = this.sauce;

	sauceCost.value = this.saucePrice;

	bevOrder.value = this.bev.value;

	bevCost.value = this.bevPrice;

	extraSauce.value = xs;

	extraSauceCost.value = this.extraSprice;

	mealSub.value = Math.round(this.total*100)/100;

	mealTotal.value = Math.round(((this.total*tax)+this.total)*100)/100;

	alert("Your Order Total: " + Math.round(((this.total*tax)+this.total)*100)/100);

};


