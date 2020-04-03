/* ================================
Week 6 Assignment: Slide Model
================================ */
var currentSlide = 0
var filterer=''
var slideNumber=0
var Intro= {slideNumber:0,
	title: 'E-waste Recycling in Singapore',
	x:1.344896,
	y:103.8,
	zoom:11,
	description: "Our tiny island Singapore produced 7.7 Million Tonnes of waste in 2019 alone! That’s equivalent to 530,000 DOUBLE DECKER BUSES!",
	description2: "This website explores e-waste recycling bins around Singapore operated by different programs, focusing on the three programs listed below."}

var Renew={slideNumber:1,
	x:1.344896,
	y:103.8,
	zoom:11,
	title: "RENEW (Recycling Nation's Electronic Waste)",
	description2: "Most electronic products; must be able to fit through the 220mm x 80mm slot of the bins. To reduce the risk of short-circuits and creation of fire hazard, please tape the ends or wires of rechargeable batteries before recycling them.",
	description:"RENEW is a flagship e-waste recycling programme launched by StarHub on Earth Hour in 2012."}

var Singtel={slideNumber:2,
	title: "Singtel x SingPost ReCYCLE", 
	x:1.344896,
	y:103.8,
	zoom:11,
	description2: "Accepts via bins or postage (free of charge). Bins accept mobile and internet related electronic products, regardless of brand, that fit through the 220mm by 80mm deposit slot. ",
	description:"On 5th June 2017, Singtel and SingPost announced the launch of a nationwide recycling programme in conjunction with World Environment Day."}
 
var NE={slideNumber:3,
	title: "E-waste Recycling@North East", 
	x:1.344896,
	y:103.8,
	zoom:11,
	description2: "What to Recycle: Most electrical and electronic items, that fit through the 470mm by 150mm deposit slot, including laptops, mobile phones, chargers, cables, etc.",
	description:"E-waste Recycling @ North East is a collaboration between NECDC and Virogreen (Singapore) Pte Ltd to promote responsible disposal of e-waste."}

var CBD={slideNumber:4,
	title: "E-waste Recycling in the CBD", 
	x:1.285802,
	y:103.851684,
	zoom:14,
	description: "Recycling points for electronic waste in the Central Business District.",
	description2: "Another recycling programme in the CBD is Project Homecoming. Project Homecoming is Singapore's first joint printer brand ink and toner cartridge recycling initiative is led by Canon and Epson, and supported by TES, the National Library Board (NLB) and NEA.",
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
