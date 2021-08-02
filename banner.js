//window.addEventListener("load", bannerSwitch);
setInterval(bannerSwitch,3000);

let bannerAd = ["images/smokyGrill.jpg","images/hot-coals.jpg", "images/oil.jpg", "images/skyline.jpg"];

let bannerBG = document.getElementById("titleHeadI");

let index = 0;

function bannerSwitch() {

	bannerBG.src = bannerAd[index];

	index++;

	if(index >= bannerAd.length){index =0;}
	
}