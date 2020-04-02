/* ================================
Week 6 Assignment: Midterm Functions + Signatures
================================ */

/*1. BUTTON FUNCTIONS*/
var loadSlide = function(slide) {
  $('#title').text(slide.title);
  $('#description').text(slide.description);
  $('#description2').text(slide.description2);
  $('#sidebar').css("background-color", slide.color);
  map.setView([slide.x,slide.y],slide.zoom);
}
var next = function() {
  // first check if not the last slide s
  if (currentSlide == slides.length - 1) {
  } else {
    $('#nextButton').show()
    currentSlide = currentSlide + 1
    loadSlide(slides[currentSlide]) 
  }
  if (currentSlide == slides.length - 1) {
    $('#nextButton').hide()
  }     
  if(currentSlide!=0){
    $('#previousButton').show()
  }
}

var previous = function() {
  if (currentSlide == 0) {
  } else {
    $('#previousButton').show()
    currentSlide = currentSlide - 1
    loadSlide(slides[currentSlide])
  }

  if (currentSlide == 0) {
    $('#previousButton').hide()
  }

  if(currentSlide!=slides.length-1){
    $('#nextButton').show()
  }
}

/*2. LOAD DATA FUNCTIONS*/
var create_marker = function(row){
    var lat=row.geometry.coordinates[1];
    var lng=row.geometry.coordinates[0];
    var label=row.properties.Name;
    var buildingName = row.properties.ADDRESSBUILDINGNAME;
    var color='#FF0000'; // for other s
    if (label[0]=='R'){
      color = '#0000FF';
    } else if (label=='Singtel x SingPost ReCYCLE') {
      color = '#00FF00';
    }else if(label='E-waste Recycling@North East'){
    	color='#FFFF00'
    };
    var pathOpts = {'radius': 5, 'fillColor': color};
    var marker = L.circleMarker([lat, lng], pathOpts).bindPopup("<b>Name: </b>"+label+"</br> <b>Building: </b>"+buildingName);
    return marker;
}
var makeMarkers = function(cleanedData) {
  var markers = _.map(cleanedData, create_marker);
  return(markers)
}

var plotMarkers = function(markers){
	for (var i = 0; i < markers.length - 1; i++) {
		myMarkers[i].addTo(map)
	}
}

var removeMarkers = function(markers) {
  _.each(markers, function(m){map.removeLayer(m)})
};

var slidePlots = function(){
	removeMarkers(myMarkers)
	if(currentSlide==0 || currentSlide==slides.length-1){
		var data=ewaste
	}else{
		if(currentSlide==1){
	  		filterer="RENEW (Recycling Nation's Electronic Waste)";
	  	}else if(currentSlide==2){
	  		filterer="Singtel x SingPost ReCYCLE";
	  	}else if(currentSlide==3){
	  		filterer= "E-waste Recycling@North East";
	  	}
	  	var data = _.filter(ewaste, function(entry){return entry.properties.Name==filterer})
	}
	console.log(data);
	myMarkers=makeMarkers(data);
	console.log(myMarkers);
	plotMarkers(myMarkers);
}

