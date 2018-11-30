console.log("Tiana Can Code!!");
//Set up data
var locations =[
  {
    name: '<b><style="color:green">#1 Best:</style> New Hampshire</b>',
    description: 'Tinder is the preferred dating app for New Hampshire singles.',
    latitude: 43.452492,
    longitude: -71.563896,
  },{
    name: '<b><style="color:green">#2 Best:</style> Massachusetts</b>',
    description: 'Tinder is the preferred dating app for Massachusetts singles.',
    latitude: 42.230171,
    longitude: -71.530106,
  },{
    name: '<b><style="color:green">#3 Best:</style> Rhode Island</b>',
    description: 'Plenty of Fish is the preferred dating app for Rhode Island singles.',
    latitude: 41.680893,
    longitude: -71.511780,
  },{
    name: '<b><style="color:green">#4 Best:</style> Connecticut</b>',
    description: 'Bumble is the preferred dating app for singles in Connecticut.',
    latitude: 41.597782,
    longitude: -72.755371,
  },{
    name: '<b><style="color:green">#5 Best:</style> Maine</b>',
    description: 'Plenty of Fish is the preferred dating app for singles in Maine.',
    latitude: 44.693947,
    longitude: -69.381927,
  },

  {
    name: '<b><style="color:green">#1 Worst:</style> Arkansas</b>',
    description: 'Plenty of Fish is the preferred dating app for singles in Arkansas.',
    latitude: 34.969704,
    longitude: -92.373123,
  },{
    name: '<b><style="color:green">#2 Worst:</style> New Mexico</b>',
    description: 'eHarmony is the preferred dating app for singles in New Mexico.',
    latitude: 34.840515,
    longitude: -106.248482,
  },{
    name: '<b><style="color:green">#3 Worst:</style> Mississippi</b>',
    description: 'Plenty of Fish is the preferred dating app for singles in Mississippi.',
    latitude: 	32.741646,
    longitude: -89.678696,
  },{
    name: '<b><style="color:green">#4 Worst:</style> Louisiana</b>',
    description: 'Bumble is the preferred dating app for singles in Louisiana.',
    latitude: 31.169546,
    longitude: -91.867805,
  },{
    name: '<b><style="color:green">#5 Worst:</style> South Carolina</b>',
    description: 'eHarmony is the preferred dating app for singles in South Carolina.',
    latitude: 33.856892,
    longitude: -80.945007,
  }

]

// Initialize and add the map (found in "Adding a map with a market")
function initMap() {

  // The location of US center
  var uscenter = {lat: 39.8283, lng: -98.5795};

  // The map, centered at US center
  var map = new google.maps.Map(
    document.getElementById('map'), {
      zoom: 4,
      center: uscenter
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
