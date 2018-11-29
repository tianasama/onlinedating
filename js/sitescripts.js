$(document).ready(function() {
  /*Page fade in*/
  $("#section1").addClass("load");

  /*Pagepiling*/
	$('#pagepiling').pagepiling({
	    menu: '#chapters',
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: ['#fff','#fff','#fff','#fff','#fff','#fff'],
        anchors: ['page1', 'page2', 'page3', 'page4','page5','page6','page7'],
        scrollingSpeed: 800,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: {
            'textColor': '#000',
            'bulletsColor': '#000',
            'position': 'right',
            'tooltips': ['instructions', 'origin', 'rise','today', 'culture','map','explore']
        },
       	normalScrollElements: null,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.section',
        animateAnchor: false,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
	});
});
