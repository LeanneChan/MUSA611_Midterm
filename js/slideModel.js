/* ================================
Week 6 Assignment: Slide Model
================================ */

/** Here's a simple 'model' of a slide.
 *  It tracks the slide's index and the title we want in our HTML
 */
var slideExample = {
  slideNumber: 1,
  title: "My first slide",
  filter: function(geojsonFeature) { return true }
};

/** Here's the simplest implementation I could come up with for
 * representing a deck of slides (nothing exotic is necessary!)
 */
var slideDeck = [IntroSlide, Slide2, Slide3, Slide4, ConclusionSlide]

/*
Slide 1: Overview of all recycling points --> plot all data, colored by type of recycling
Slide 2: Show only e-waste recycling --> allow to filter by street name, allow to zoom 
Slide 3: Show only cash-for-trash recycling --> allow to filter by street name, allow to zoom 
Slide 4: Show only ligting recycling points --> allow to filter by street name, allow to zoom. 
		** CHANGE ZOOM AND CENTER OF MAP FOR SLIDE 4, AS ONLY 2 POINTS 
Slide 5: Conclusion slide --> clustering of recycling points somewhere? A work in progress. 
Eitherway, type of recycling will be color coded.

Each point plotted will have the description. 
Each point plotted will be color coded based on the type of recycling. 

*/
