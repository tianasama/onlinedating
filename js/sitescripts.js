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


  /*Highchart for International Internet Users*/
  let internationalInternetUsers = Highcharts.chart('international-internet-users', {
    tooltip: {
      formatter: function () {
        let rounded = Math.round(this.y * 10) / 10;
        return `<b>${rounded}%</b> of humans used the internet in <b>${this.x}</b>`;
      }
    },
    chart: {
      type: 'column'
    },
    title: {
      text: 'Worldwide Internet Users: 1995-2015'
    },
    xAxis: {
      categories: [
        '1995',
        '1996',
        '1997',
        '1998',
        '1999',
        '2000',
        '2001',
        '2002',
        '2003',
        '2004',
        '2005',
        '2006',
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
      ],
    },
    yAxis: {
      title: {
        text: 'Percentage of World Population Using Internet'
      },
      labels: {
        format: '{value}%'
      },
    },
    series: [{
      format: '{value}%',
      showInLegend: false,
      name: 'Users',
      data: [
        0.777442482833524,
        1.32595247745572,
        2.0424390284731,
        3.14158554717616,
        4.63877597098239,
        6.74323018867823,
        8.07706329262506,
        10.5489331933006,
        12.2347632119575,
        14.1273630393743,
        15.7291032914448,
        17.492526324623,
        20.4254798468364,
        22.9505607103812,
        25.3563448209692,
        28.7336041746693,
        31.1245061343792,
        34.1934316686308,
        36.7246385665243,
        39.7719529967186,
        43.0066998196931,
      ],
    }, ],
  });

  /*Highchart for Domestic Internet Users*/
  var domesticInternetUsers = Highcharts.chart('domestic-internet-users', {
    tooltip: {
      formatter: function () {
        let rounded = Math.round(this.y * 10) / 10;
        return `<b>${rounded}%</b> of Americans used the internet in <b>${this.x}</b>`;
      }
    },
    chart: {
      type: 'column'
    },
    title: {
      text: 'American Internet Users: 1995-2015'
    },
    xAxis: {
      categories: [
        '1995',
        '1996',
        '1997',
        '1998',
        '1999',
        '2000',
        '2001',
        '2002',
        '2003',
        '2004',
        '2005',
        '2006',
        '2007',
        '2008',
        '2009',
        '2010',
        '2011',
        '2012',
        '2013',
        '2014',
        '2015',
      ],
    },
    yAxis: {
      title: {
        text: 'Percentage of US Population Using Internet'
      },
      labels: {
        format: '{value}%'
      },
    },
    series: [{
      format: '{value}%',
      showInLegend: false,
      name: 'Users',
      data: [
        9.23708829729378,
        16.4193529600768,
        21.6164009686742,
        30.093196588091,
        35.8487244559914,
        43.0791626375201,
        49.0808315896951,
        58.7854038836952,
        61.6971171244207,
        64.7582564759896,
        67.968052915002,
        68.9311932699721,
        75,
        74,
        71,
        71.69,
        69.7294607619268,
        74.7,
        71.4,
        73,
        74.5542024462761,
      ],
    }, ],
  });

});
