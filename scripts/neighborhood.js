var neighborhoods = [];

// REVIEW: This is another way to use a constructor to duplicate an array of raw data objects
function Neighborhood(rawDataObject) {
  for (var key in rawDataObject) {
    this[key] = rawDataObject[key];
  }
}

Neighborhood.prototype.toHtml = function() {
  // REVIEW: This method on each instance of Neighborhood allows that object to create its own HTML
  // TODO: Complete this using Handlebars!!!
  // 1. Get the template from the HTML document
  let source = $('#neighborhood-template').html();
  // 2. Use Handlebars to "compile" the HTML
  let templateRender = Handlebars.compile(source);
  // 3. Do not forget to return the HTML from this method
  return templateRender(this);
};

neighborhoodDataSet.forEach(function(neighborhoodObject) {
  neighborhoods.push(new Neighborhood(neighborhoodObject));
});

neighborhoods.forEach(function(ourNewNeighborhoodObject) {
  $('#neighborhoods').append(ourNewNeighborhoodObject.toHtml());
});