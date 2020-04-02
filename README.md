# MUSA611 Midterm
Chan, Lin-En Leanne
Student ID: 47188003

## Introduction

The purpose of this project is to make it easier for Singaporeans to locate nearest recycling locations, in an effort to encourage more recycling. The resulting site consists of 5 slide decks with various types of recycling collection points in Singapore. The first and last slides serve as overviews. The slides allow the user to filter the points by street name. 


### Data

All data is downloaded from data.gov.sg.
The three datasets used are: 
- E-waste recycling (https://data.gov.sg/dataset/e-waste-recycling) 
- Cash-for-trash (https://data.gov.sg/dataset/cash-for-trash)
- Lighting Waste Collection Point (https://data.gov.sg/dataset/lighting-waste-collection-points)


#### Data Information 

- Type of recycling: electronic, cash for trash or lighting
- description 
- address street name 
- coordinates


### Midterm Mock Up

A mock up of this app can be found on figma. (https://www.figma.com/file/HKntxeaV157WC4tpA02J7r/MUSA611-Midterm?node-id=15%3A1)

color palette https://www.palettable.io/A9D4C3-F39972-136131-04403F-D9A68D




use jquery 
$(identifier).click(function(e
keep track of the slides
var page = 0 
keep track of the page

var next = function(){
	
}

map.flyTo


<html>
  <div id="sidebar" style="position: absolute; top:0; left: 0; width: 400px; height: 100%; background-color: red">
    <h1 id="title">Title</h1>
    <p id="description">This is the description</p>
    <button id="nextButton">next</button>
  </div>
  <div id="map" style="position: absolute; top:0; height: 100%; right: 0; left: 400">

    <h1>IM A MAP</h1>
  </div>

  <script
    src="https://code.jquery.com/jquery-3.4.1.min.js"
    integrity="sha256-CSXorXvZcTkaix6Yvo6HppcZGetbYMGWSFlBw8HfCJo="
    crossorigin="anonymous"></script>

  <script>
    // slide model:
    // a title
    // a description
    // background color
    var slides = [
      { title: "title1", description: "the first description", color: "#FFFF00" },
      { title: "title2", description: "the second description", color: "#FF00FF" },
      { title: "title3", description: "the first description", color: "#00FFFF" },
      { title: "made up title", description: "made up description", color: "#F0F0F0" }
    ]
    var currentSlide = 0

    var loadSlide = function(slide) {
      $('#title').text(slide.title)
      $('#description').text(slide.description)
      $('#sidebar').css("background-color", slide.color)
    }

    var next = function() {
      if (currentSlide == slides.length - 1) {
      } else {
        $('#nextButton').show()
        currentSlide = currentSlide + 1
        loadSlide(slides[currentSlide])
      }

      if (currentSlide == slides.length - 1) {
        $('#nextButton').hide()
      }
    }

    $('#nextButton').click(function(e) {
      next()
    });

  </script>
</html>