$(document).ready(function() {
console.log("Tiana Can Code!!");
//Set up data

var locations =[
  {
    name: 'Manchester, UK',
    description: 'Tilly lives here!',
    latitude: 53.480759,
    longitude: -2.242631,
  },{
    name: 'Amsterdam, Netherlands',
    description: 'Stijn and Jesse live here!',
    latitude: 52.370216,
    longitude: 4.895168,
  },{
    name: 'Edinburgh, UK',
    description: 'Elizabeth lives here!',
    latitude: 55.953251,
    longitude: -3.188267,
  },{
    name: 'Copenhagen, Denmark',
    description: 'Fig lives here!',
    latitude: 55.676098,
    longitude: 12.568337,
  }
]

// Initialize and add the map (found in "Adding a map with a market")
function initMap() {

  // The location of Manchester
  var manc = {lat: 53.480759, lng: -2.242631};

  // The map, centered at Manchester
  var map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 6,
      center: manc
    }
  );

  var infowindow= new google.maps.InfoWindow();
  var marker, i;


  for (var i=0; i<locations.length; i++){
    console.log(locations[i]);

    //New marker for each new point
    var marker = new google.maps.Marker({
      position: new google.maps.LatLng(locations[i].latitude, locations[i].longitude),
      map: map
    });

    google.maps.event.addListener(marker, 'click', (function(marker, i) {
      return function() {
        infowindow.setContent(locations[i].name + '<br>' + locations[i].description);
        infowindow.open(map, marker);
      }
    })(marker, i));

  }
}
});
