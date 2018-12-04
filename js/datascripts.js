$(function () {

  let dataSet = [
    [
      '2016*',
      3424971237,
      46.1,
      7432663275,
      4007692038,
      7.5,
      238975082,
      1.13,
    ],
    [
      '2015*',
      3185996155,
      43.4,
      7349472099,
      4163475944,
      7.8,
      229610586,
      1.15,
    ],
    [
      '2014',
      2956385569,
      40.7,
      7265785946,
      4309400377,
      8.4,
      227957462,
      1.17,
    ],
    [
      '2013',
      2728428107,
      38,
      7181715139,
      4453287032,
      9.4,
      233691859,
      1.19,
    ],
    [
      '2012',
      2494736248,
      35.1,
      7097500453,
      4602764205,
      11.8,
      262778889,
      1.2,
    ],
    [
      '2011',
      2231957359,
      31.8,
      7013427052,
      4781469693,
      10.3,
      208754385,
      1.21,
    ],
    [
      '2010',
      2023202974,
      29.2,
      6929725043,
      4906522069,
      14.5,
      256799160,
      1.22,
    ],
    [
      '2009',
      1766403814,
      25.8,
      6846479521,
      5080075707,
      12.1,
      191336294,
      1.22,
    ],
    [
      '2008',
      1575067520,
      23.3,
      6763732879,
      5188665359,
      14.7,
      201840532,
      1.23,
    ],
    [
      '2007',
      1373226988,
      20.6,
      6681607320,
      5308380332,
      18.1,
      210310170,
      1.23,
    ],
    [
      '2006',
      1162916818,
      17.6,
      6600220247,
      5437303429,
      12.9,
      132815529,
      1.24,
    ],
    [
      '2005',
      1030101289,
      15.8,
      6519635850,
      5489534561,
      12.8,
      116773518,
      1.24,
    ],
    [
      '2004',
      913327771,
      14.2,
      6439842408,
      5526514637,
      16.9,
      131891788,
      1.24,
    ],
    [
      '2003',
      781435983,
      12.3,
      6360764684,
      5579328701,
      17.5,
      116370969,
      1.25,
    ],
    [
      '2002',
      665065014,
      10.6,
      6282301767,
      5617236753,
      32.4,
      162772769,
      1.26,
    ],
    [
      '2001',
      502292245,
      8.1,
      6204310739,
      5702018494,
      21.1,
      87497288,
      1.27,
    ],
    [
      '2000',
      414794957,
      6.8,
      6126622121,
      5711827164,
      47.3,
      133257305,
      1.28,
    ],
  ];

  /*International Internet Users*/
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
      text: 'Individuals Using the Internet in the World From 1995-2015'
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
      text: 'Individuals Using the Internet in the US From 1995-2015'
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

  /*
  Create new DataTable to describe International Internet Users
  */
  $('#international-internet-users-datatable').DataTable({
    data: dataSet,
    columns: [{
      title: 'Year'
    },
    {
      title: "Internet Users"
    },
    {
      title: "Penetration (% of Pop)"
    },
    {
      title: "World Population"
    },
    {
      title: "Non-Users (Internetless)"
    },
    {
      title: "1Y User Change"
    },
    {
      title: "World Pop. Change"
    },
  ]
});
});
