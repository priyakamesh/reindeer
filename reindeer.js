var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];

var hohohoElement = document.getElementById("coloredReindeer");



for (var i = 0; i < reindeer.length; i++) {
	coloredReindeer = colors[i] +" " + reindeer[i] ;
	var node = document.createElement("div");
	node.innerHTML = coloredReindeer;
	hohohoElement.appendChild(node);
	console.log(coloredReindeer);
}
