/* ================================
Week 6 Assignment: Slide Model
================================ */
var currentSlide = 0
var filterer=''
var descriptionAll="Most electronic products; must be able to fit through the 220mm x 80mm slot of the bins. To reduce the risk of short-circuits and creation of fire hazard, please tape the ends or wires of rechargeable batteries before recycling them."
var slideNumber=0
var Intro= {slideNumber:0,
	title: 'E-waste Recycling in Singapore',
	x:1.344896,
	y:103.8,
	zoom:11,
	description: "Our tiny island Singapore produced 7.7 Million Tonnes of waste in 2019 alone! That’s equivalent to 530,000 DOUBLE DECKER BUSES!",
	description2: "This website explores e-waste recycling bins around Singapore operated by different programs, focusing on three specifically listed below."}

var Renew={slideNumber:1,
	x:1.344896,
	y:103.8,
	zoom:11,
	title: "RENEW (Recycling Nation's Electronic Waste)",
	description2: descriptionAll,
	description:"RENEW is a flagship e-waste recycling programme launched by StarHub on Earth Hour in 2012."}

var Singtel={slideNumber:2,
	title: "Singtel x SingPost ReCYCLE", 
	x:1.344896,
	y:103.8,
	zoom:11,
	description2: descriptionAll,
	description:"Singapore, 5 June 2017 – Singtel and SingPost announced the launch of a nationwide recycling programme in conjunction with World Environment Day."}
 
var NE={slideNumber:3,
	title: "E-waste Recycling@North East", 
	x:1.344896,
	y:103.8,
	zoom:11,
	description2: descriptionAll,
	description:"Recycle @ North West aims to encourage active recycling among residents in the North West District and create bonding among residents through a common platform at the recycling points."}

var CBD={slideNumber:4,
	title: "E-waste Recycling in the CBD", 
	x:1.285802,
	y:103.851684,
	zoom:13,
	description: "Recycling points for electronic waste in the Central Business District. " + descriptionAll,
}

var slides = [Intro, Renew, Singtel, NE, CBD]

$('#nextButton').click(function(e) {
  next();
  slidePlots();
});
$('#previousButton').click(function(e) {
  previous();
  slidePlots();

});
$('#ewasteButton').click(function(e) {
	$('#nextButton').show();
	$('#previousButton').show();
	currentSlide = 1;
	loadSlide(slides[currentSlide]);
	slidePlots();
});
$('#cashButton').click(function(e) {
	$('#nextButton').show();
	$('#previousButton').show();
	currentSlide = 2;
	loadSlide(slides[currentSlide]);
	slidePlots();

});
$('#lightButton').click(function(e) {
	$('#nextButton').show();
	$('#previousButton').show();
	currentSlide = 3;
	loadSlide(slides[currentSlide]);
	slidePlots();
});
