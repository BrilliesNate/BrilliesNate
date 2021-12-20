window.onload = () => {
  let pvToLoadDot = document.getElementById('dot');
  let pvToLoadcurve = document.getElementById('curve');
  let pvToLoadDot2 = document.getElementById('dot2');
  // let batToLoadcurve = document.getElementById('path1944-0-7');
  let totalLength = pvToLoadcurve.getTotalLength();
  let u = 0.5;
  let p = pvToLoadcurve.getPointAtLength(u * totalLength);
  pvToLoadDot.setAttribute("transform", `translate(${p.x}, ${p.y})`);
}

const dot = {
  sprite: null,
  track: null,
  init: function (sprite, track) {
    this.sprite = document.getElementById(sprite);
    this.track = document.getElementById(track);
  },
  move: function (u) {
    const p = this.track.getPointAtLength(u * this.track.getTotalLength());
    this.sprite.setAttribute("transform", `translate(${p.x}, ${p.y})`);
  }
};
const anim = {
  start: function (duration) {
    this.duration = duration;
    this.tZero = Date.now();

    requestAnimationFrame(() => this.run());
  },

  run: function () {
    let u = Math.min((Date.now() - this.tZero) / this.duration, 1);

    if (u < 1) {
      requestAnimationFrame(() => this.run());
    } else {
      this.onFinish();
    }

    dot.move(u);
  },

  onFinish: function () {
    setTimeout(() => this.start(this.duration), 1000);
  }
};


// function pvToLoadAnim() {
dot.init('dot', 'curve');
anim.start(3000);



// }

// pvToLoadAnim();




// baterry discharg anim
// window.onload = () => {
//   let dot = document.getElementById('batDischargDot');
//   let curve = document.getElementById('path1944-0-7');
//   let totalLength = curve.getTotalLength();


//   let u = 0.5;
//   let p = curve.getPointAtLength(u * totalLength);

//   dot.setAttribute("transform", `translate(${p.x}, ${p.y})`);
// }


const pvDot2 = {
  sprite: null,
  track: null,
  init: function (sprite, track) {
    this.sprite = document.getElementById(sprite);
    this.track = document.getElementById(track);
  },
  move: function (u) {
    const p = this.track.getPointAtLength(u * this.track.getTotalLength());
    this.sprite.setAttribute("transform", `translate(${p.x}, ${p.y})`);
  }
};

const pvAnim2 = {
  start: function (duration) {
    this.duration = duration;
    this.tZero = Date.now();

    requestAnimationFrame(() => this.run());
  },

  run: function () {
    let u = Math.min((Date.now() - this.tZero) / this.duration, 1);

    if (u < 1) {
      requestAnimationFrame(() => this.run());
    } else {
      this.onFinish();
    }

    pvDot2.move(u);
  },

  onFinish: function () {
    setTimeout(() => this.start(this.duration), 1000);
  }
};



setTimeout(function () {
  pvDot2.init('dot2', 'curve');
  pvAnim2.start(3010);
}, 1000);



const batDischargeDot1 = {
  sprite: null,
  track: null,
  init: function (sprite, track) {
    this.sprite = document.getElementById(sprite);
    this.track = document.getElementById(track);
  },
  move: function (u) {
    const p = this.track.getPointAtLength(u * this.track.getTotalLength());
    this.sprite.setAttribute("transform", `translate(${p.x}, ${p.y})`);
  }
};

const batDischargeAnim1 = {
  start: function (duration) {
    this.duration = duration;
    this.tZero = Date.now();

    requestAnimationFrame(() => this.run());
  },

  run: function () {
    let u = Math.min((Date.now() - this.tZero) / this.duration, 1);

    if (u < 1) {
      requestAnimationFrame(() => this.run());
    } else {
      this.onFinish();
    }

    batDischargeDot1.move(u);
  },

  onFinish: function () {
    setTimeout(() => this.start(this.duration), 1000);
  }
};
const batDischargeDot2 = {
  sprite: null,
  track: null,
  init: function (sprite, track) {
    this.sprite = document.getElementById(sprite);
    this.track = document.getElementById(track);
  },
  move: function (u) {
    const p = this.track.getPointAtLength(u * this.track.getTotalLength());
    this.sprite.setAttribute("transform", `translate(${p.x}, ${p.y})`);
  }
};

const batDischargeAnim2 = {
  start: function (duration) {
    this.duration = duration;
    this.tZero = Date.now();

    requestAnimationFrame(() => this.run());
  },

  run: function () {
    let u = Math.min((Date.now() - this.tZero) / this.duration, 1);

    if (u < 1) {
      requestAnimationFrame(() => this.run());
    } else {
      this.onFinish();
    }

    batDischargeDot2.move(u);
  },

  onFinish: function () {
    setTimeout(() => this.start(this.duration), 1000);
  }
};



setTimeout(function () {
  batDischargeDot1.init('batdot', 'path1944-0-7');
  batDischargeAnim1.start(3010);
}, 1000);
setTimeout(function () {
  batDischargeDot2.init('batdot2', 'path1944-0-7');
  batDischargeAnim2.start(3010);
}, 100);



// grid to load anim

window.onload = () => {
  let dot = document.getElementById('gridToLoadDot');
  let curve = document.getElementById('path2458-2-8');
  let totalLength = curve.getTotalLength();


  let u = 0.5;
  let p = curve.getPointAtLength(u * totalLength);

  dot.setAttribute("transform", `translate(${p.x}, ${p.y})`);
}


const gridToLoadDot = {
  sprite: null,
  track: null,
  init: function (sprite, track) {
    this.sprite = document.getElementById(sprite);
    this.track = document.getElementById(track);
  },
  move: function (u) {
    const p = this.track.getPointAtLength(u * this.track.getTotalLength());
    this.sprite.setAttribute("transform", `translate(${p.x}, ${p.y})`);
  }
};

const gridToLoadAnim = {
  start: function (duration) {
    this.duration = duration;
    this.tZero = Date.now();

    requestAnimationFrame(() => this.run());
  },

  run: function () {
    let u = Math.min((Date.now() - this.tZero) / this.duration, 1);

    if (u < 1) {
      requestAnimationFrame(() => this.run());
    } else {
      this.onFinish();
    }

    gridToLoadDot.move(u);
  },

  onFinish: function () {
    setTimeout(() => this.start(this.duration), 1000);
  }
};

// gridToLoadDot.init('gridToLoadDot', 'path2458-2-8');
// gridToLoadAnim.start(3000);





// // setTimeout()
// // yAxis.labelsContainer.children.setAll({ visible: false, })

// // test();

// setTimeout(function(){series.strokes.template.setAll({stroke:"#e7b018"}) }, 3000);



// function numTest() {
// let num = document.getElementById("text18241-1-9-4");

// num.innerText = 2.01 + "kW"

// }

// let num = (Math.random().toFixed(2)) * 100;


// // for (let i = 0; i < 5; i++) {
// //     text += "The number is " + i + "<br>";
// //   }



// setTimeout(function () { document.getElementById("text18241-1-9").textContent = " 4." + num + "kW"; }, 10);
// setTimeout(function () { document.getElementById("text18241-1-9-4").textContent = " 2." + num + "kW"; }, 10);
// // setTimeout(function(){document.getElementById("text18241-1-9-4").textContent = " 2." + num + "kW";}, 1000);
// // setTimeout(function(){document.getElementById("text18241-1-9-4").textContent = " 2." + num + "kW";}, 3000);
// // setTimeout(function(){document.getElementById("text18241-1-9-4").textContent = " 2." + num + "kW";}, 5000);
// // setTimeout(function(){document.getElementById("text18241-1-9-4").textContent = " 2." + num + "kW";}, 7000);
// // setTimeout(function(){document.getElementById("text18241-1-9-4").textContent = " 2." + num + "kW";}, 9000);
// // setTimeout(function(){document.getElementById("text18241-1-9-4").textContent = " 2." + num + "kW";}, 11000);


// //  #################### live chart Init.

am5.ready(function () {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartdiv2");


  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);


  // Generate random data
  var value = 100;

  function generateChartData() {
    var chartData = [];
    var firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 1000);
    firstDate.setHours(0, 0, 0, 0);

    for (var i = 0; i < 50; i++) {
      var newDate = new Date(firstDate);
      newDate.setSeconds(newDate.getSeconds() + i);

      value += (Math.random() < 0.5 ? 1 : -1) * Math.random() * 10;

      chartData.push({
        date: newDate.getTime(),
        value: value
      });
    }
    return chartData;
  }

  var data = generateChartData();


  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(am5xy.XYChart.new(root, {
    focusable: true,
    panX: true,
    panY: true,
    wheelX: "panX",
    wheelY: "zoomX"
  }));

  var easing = am5.ease.linear;


  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
    maxDeviation: 0.5,
    groupData: false,
    extraMax: 0.1, // this adds some space in front
    extraMin: -0.1,  // this removes some space form th beginning so that the line would not be cut off
    baseInterval: {
      timeUnit: "second",
      count: 1
    },
    renderer: am5xy.AxisRendererX.new(root, {
      minGridDistance: 50
    }),
    tooltip: am5.Tooltip.new(root, {})
  }));

  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {})
  }));


  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var series = chart.series.push(am5xy.LineSeries.new(root, {
    name: "Series 1",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value",
    valueXField: "date",
    tooltip: am5.Tooltip.new(root, {
      pointerOrientation: "horizontal",
      labelText: "{valueY}"
    })
  }));

  series.fills.template.setAll({
    fillOpacity: 0.2,
    visible: true,

  });

  series.strokes.template.setAll({
    strokeWidth: 1,
    visible: true,
    stroke: "#e7b018"

  });

  // tell that the last data item must create bullet
  data[data.length - 1].bullet = true;
  series.data.setAll(data);


  // Create animating bullet by adding two circles in a bullet container and
  // animating radius and opacity of one of them.
  series.bullets.push(function (root, series, dataItem) {
    // only create sprite if bullet == true in data context
    if (dataItem.dataContext.bullet) {
      var container = am5.Container.new(root, {});
      var circle0 = container.children.push(am5.Circle.new(root, {
        radius: 3,
        fill: am5.color("#52c1f1")
      }));
      var circle1 = container.children.push(am5.Circle.new(root, {
        radius: 3,
        fill: am5.color("#52c1f1")
      }));

      circle1.animate({
        key: "radius",
        to: 20,
        duration: 1000,
        easing: am5.ease.out(am5.ease.cubic),
        loops: Infinity
      });
      circle1.animate({
        key: "opacity",
        to: 0,
        from: 1,
        duration: 1000,
        easing: am5.ease.out(am5.ease.cubic),
        loops: Infinity
      });

      return am5.Bullet.new(root, {
        locationX: undefined,
        sprite: container
      })
    }
  })


  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
    xAxis: xAxis
  }));
  cursor.lineY.set("visible", false);


  // Update data every second
  setInterval(function () {
    addData();
  }, 1000)


  function addData() {
    var lastDataItem = series.dataItems[series.dataItems.length - 1];

    var lastValue = lastDataItem.get("valueY");
    var newValue = value + ((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
    var lastDate = new Date(lastDataItem.get("valueX"));
    var time = am5.time.add(new Date(lastDate), "second", 1).getTime();
    series.data.removeIndex(0);
    series.data.push({
      date: time,
      value: newValue
    })

    var newDataItem = series.dataItems[series.dataItems.length - 1];
    newDataItem.animate({
      key: "valueYWorking",
      to: newValue,
      from: lastValue,
      duration: 600,
      easing: easing
    });

    // use the bullet of last data item so that a new sprite is not created
    newDataItem.bullets = [];
    newDataItem.bullets[0] = lastDataItem.bullets[0];
    newDataItem.bullets[0].get("sprite").dataItem = newDataItem;
    // reset bullets
    lastDataItem.dataContext.bullet = false;
    lastDataItem.bullets = [];


    var animation = newDataItem.animate({
      key: "locationX",
      to: 0.5,
      from: -0.5,
      duration: 600
    });
    if (animation) {
      var tooltip = xAxis.get("tooltip");
      if (tooltip && !tooltip.isHidden()) {
        animation.events.on("stopped", function () {
          xAxis.updateTooltip();
        })
      }
    }
  }


  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  chart.appear(1000, 100);
  setTimeout(function () {
    yAxis.labelsContainer.children.setAll({ visible: false, });
    xAxis.labelsContainer.children.setAll({ visible: false, });
    // series.strokes.template.setAll({ stroke: "#e7b018" });
    // chart.series.values[0].set("fill", am5.color("#e7b018"));
  }, 10);
  root.interfaceColors.set("grid", am5.color("#FFFFFF"));

});

// // ###### pv chart
am5.ready(function () {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartdiv3");


  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);


  // Generate random data
  var value = 10;

  function generateChartData() {
    var chartData = [];
    var firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 1000);
    firstDate.setHours(0, 0, 0, 0);

    for (var i = 0; i < 50; i++) {
      var newDate = new Date(firstDate);
      newDate.setSeconds(newDate.getSeconds() + i);

      value += (Math.random() < 0.5 ? 1 : -1) * Math.random();

      chartData.push({
        date: newDate.getTime(),
        value: value
      });
    }
    return chartData;
  }

  var data = generateChartData();


  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(am5xy.XYChart.new(root, {
    focusable: true,
    panX: true,
    panY: true,
    wheelX: "panX",
    wheelY: "zoomX"
  }));

  var easing = am5.ease.linear;


  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
    maxDeviation: 0.5,
    groupData: false,
    extraMax: 0.1, // this adds some space in front
    extraMin: -0.1,  // this removes some space form th beginning so that the line would not be cut off
    baseInterval: {
      timeUnit: "second",
      count: 1
    },
    renderer: am5xy.AxisRendererX.new(root, {
      minGridDistance: 50
    }),
    tooltip: am5.Tooltip.new(root, {})
  }));

  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {})
  }));


  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var series = chart.series.push(am5xy.LineSeries.new(root, {
    name: "Series 1",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value",
    valueXField: "date",
    tooltip: am5.Tooltip.new(root, {
      pointerOrientation: "horizontal",
      labelText: "{valueY}"
    })
  }));

  series.fills.template.setAll({
    fillOpacity: 0.2,
    visible: true,

  });

  series.strokes.template.setAll({
    strokeWidth: 1,
    visible: true,
    stroke: "#e7b018"

  });

  // tell that the last data item must create bullet
  data[data.length - 1].bullet = true;
  series.data.setAll(data);


  // Create animating bullet by adding two circles in a bullet container and
  // animating radius and opacity of one of them.
  series.bullets.push(function (root, series, dataItem) {
    // only create sprite if bullet == true in data context
    if (dataItem.dataContext.bullet) {
      var container = am5.Container.new(root, {});
      var circle0 = container.children.push(am5.Circle.new(root, {
        radius: 3,
        fill: am5.color("#008000")
      }));
      var circle1 = container.children.push(am5.Circle.new(root, {
        radius: 3,
        fill: am5.color("#008000")
      }));

      circle1.animate({
        key: "radius",
        to: 20,
        duration: 1000,
        easing: am5.ease.out(am5.ease.cubic),
        loops: Infinity
      });
      circle1.animate({
        key: "opacity",
        to: 0,
        from: 1,
        duration: 1000,
        easing: am5.ease.out(am5.ease.cubic),
        loops: Infinity
      });

      return am5.Bullet.new(root, {
        locationX: undefined,
        sprite: container
      })
    }
  })


  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
    xAxis: xAxis
  }));
  cursor.lineY.set("visible", false);


  // Update data every second
  setInterval(function () {
    addData();
  }, 1000)


  function addData() {
    var lastDataItem = series.dataItems[series.dataItems.length - 1];

    var lastValue = lastDataItem.get("valueY");
    this.newValue = value + ((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
    var lastDate = new Date(lastDataItem.get("valueX"));
    var time = am5.time.add(new Date(lastDate), "second", 1).getTime();
    series.data.removeIndex(0);
    series.data.push({
      date: time,
      value: this.newValue
    })
    document.getElementById("text18241-1-9-3-8").textContent = "1." + this.newValue.toFixed(0) + "kW";
    let pvCapVal = 420 + Number(this.newValue.toFixed(0));
    // let pvCapVal =  420;
    console.log(pvCapVal + "############")
    squiggle.style.setProperty('--stroke-dashoffset', pvCapVal)
    squiggle.style.transition = "all 3s";

    var newDataItem = series.dataItems[series.dataItems.length - 1];
    newDataItem.animate({
      key: "valueYWorking",
      to: this.newValue,
      from: lastValue,
      duration: 600,
      easing: easing
    });

    // use the bullet of last data item so that a new sprite is not created
    newDataItem.bullets = [];
    newDataItem.bullets[0] = lastDataItem.bullets[0];
    newDataItem.bullets[0].get("sprite").dataItem = newDataItem;
    // reset bullets
    lastDataItem.dataContext.bullet = false;
    lastDataItem.bullets = [];


    var animation = newDataItem.animate({
      key: "locationX",
      to: 0.5,
      from: -0.5,
      duration: 600
    });
    if (animation) {
      var tooltip = xAxis.get("tooltip");
      if (tooltip && !tooltip.isHidden()) {
        animation.events.on("stopped", function () {
          xAxis.updateTooltip();
        })
      }
    }
  }


  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  chart.appear(1000, 100);
  setTimeout(function () {
    yAxis.labelsContainer.children.setAll({ visible: false, });
    xAxis.labelsContainer.children.setAll({ visible: false, });
    series.strokes.template.setAll({ stroke: "#008000" });
    chart.series.values[0].set("fill", am5.color("#008000"));
  }, 10);
  root.interfaceColors.set("grid", am5.color("#FFFFFF"));

});


am5.ready(function () {

  // Create root element
  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
  var root = am5.Root.new("chartdiv");


  // Set themes
  // https://www.amcharts.com/docs/v5/concepts/themes/
  root.setThemes([
    am5themes_Animated.new(root)
  ]);


  // Generate random data
  var value = 10;

  function generateChartData() {
    var chartData = [];
    var firstDate = new Date();
    firstDate.setDate(firstDate.getDate() - 1000);
    firstDate.setHours(0, 0, 0, 0);

    for (var i = 0; i < 50; i++) {
      var newDate = new Date(firstDate);
      newDate.setSeconds(newDate.getSeconds() + i);

      value += (Math.random() < 0.5 ? 1 : -1) * Math.random();

      chartData.push({
        date: newDate.getTime(),
        value: value
      });
    }
    return chartData;
  }

  var data = generateChartData();


  // Create chart
  // https://www.amcharts.com/docs/v5/charts/xy-chart/
  var chart = root.container.children.push(am5xy.XYChart.new(root, {
    focusable: true,
    panX: true,
    panY: true,
    wheelX: "panX",
    wheelY: "zoomX"
  }));

  var easing = am5.ease.linear;


  // Create axes
  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
  var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
    maxDeviation: 0.5,
    groupData: false,
    extraMax: 0.1, // this adds some space in front
    extraMin: -0.1,  // this removes some space form th beginning so that the line would not be cut off
    baseInterval: {
      timeUnit: "second",
      count: 1
    },
    renderer: am5xy.AxisRendererX.new(root, {
      minGridDistance: 50
    }),
    tooltip: am5.Tooltip.new(root, {})
  }));

  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    renderer: am5xy.AxisRendererY.new(root, {})
  }));


  // Add series
  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
  var series = chart.series.push(am5xy.LineSeries.new(root, {
    name: "Series 1",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value",
    valueXField: "date",
    tooltip: am5.Tooltip.new(root, {
      pointerOrientation: "horizontal",
      labelText: "{valueY}"
    })
  }));

  series.fills.template.setAll({
    fillOpacity: 0.2,
    visible: true,

  });

  series.strokes.template.setAll({
    strokeWidth: 1,
    visible: true,
    stroke: "#e7b018"

  });

  // tell that the last data item must create bullet
  data[data.length - 1].bullet = true;
  series.data.setAll(data);


  // Create animating bullet by adding two circles in a bullet container and
  // animating radius and opacity of one of them.
  series.bullets.push(function (root, series, dataItem) {
    // only create sprite if bullet == true in data context
    if (dataItem.dataContext.bullet) {
      var container = am5.Container.new(root, {});
      var circle0 = container.children.push(am5.Circle.new(root, {
        radius: 3,
        fill: am5.color("#e7b018")
      }));
      var circle1 = container.children.push(am5.Circle.new(root, {
        radius: 3,
        fill: am5.color("#e7b018")
      }));

      circle1.animate({
        key: "radius",
        to: 20,
        duration: 1000,
        easing: am5.ease.out(am5.ease.cubic),
        loops: Infinity
      });
      circle1.animate({
        key: "opacity",
        to: 0,
        from: 1,
        duration: 1000,
        easing: am5.ease.out(am5.ease.cubic),
        loops: Infinity
      });

      return am5.Bullet.new(root, {
        locationX: undefined,
        sprite: container
      })
    }
  })


  // Add cursor
  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
    xAxis: xAxis
  }));
  cursor.lineY.set("visible", false);


  // Update data every second
  setInterval(function () {
    addData();
  }, 1000)


  function addData() {
    var lastDataItem = series.dataItems[series.dataItems.length - 1];

    var lastValue = lastDataItem.get("valueY");
    var newValue = value + ((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
    var lastDate = new Date(lastDataItem.get("valueX"));
    var time = am5.time.add(new Date(lastDate), "second", 1).getTime();
    series.data.removeIndex(0);
    series.data.push({
      date: time,
      value: newValue
    })

    let loadSum = newValue + this.newValue;
    console.log(newValue)
    console.log(this.newValue)
    console.log("**********")


    document.getElementById("text18241-1-9-3-8-5-9-4").textContent = "1." + newValue.toFixed(0) + "kW";

    let batCapVal = 420 + Number(newValue.toFixed(0));
    batPath.style.setProperty('--stroke-dashoffset', batCapVal)
    batPath.style.transition = "all 3s";


    document.getElementById("text18241-1-9-3-8-5").textContent = "2." + loadSum.toFixed(0) + "kW";
    let LoadCapVal = 420 + Number(loadSum.toFixed(0));
    LoadPath.style.setProperty('--stroke-dashoffset', LoadCapVal)
    LoadPath.style.transition = "all 3s";
    console.log(LoadCapVal + " L O A D C A P V A L");



    var newDataItem = series.dataItems[series.dataItems.length - 1];
    newDataItem.animate({
      key: "valueYWorking",
      to: newValue,
      from: lastValue,
      duration: 600,
      easing: easing
    });

    // use the bullet of last data item so that a new sprite is not created
    newDataItem.bullets = [];
    newDataItem.bullets[0] = lastDataItem.bullets[0];
    newDataItem.bullets[0].get("sprite").dataItem = newDataItem;
    // reset bullets
    lastDataItem.dataContext.bullet = false;
    lastDataItem.bullets = [];


    var animation = newDataItem.animate({
      key: "locationX",
      to: 0.5,
      from: -0.5,
      duration: 600
    });
    if (animation) {
      var tooltip = xAxis.get("tooltip");
      if (tooltip && !tooltip.isHidden()) {
        animation.events.on("stopped", function () {
          xAxis.updateTooltip();
        })
      }
    }
  }


  // Make stuff animate on load
  // https://www.amcharts.com/docs/v5/concepts/animations/
  chart.appear(1000, 100);
  setTimeout(function () {
    yAxis.labelsContainer.children.setAll({ visible: false, });
    xAxis.labelsContainer.children.setAll({ visible: false, });
    series.strokes.template.setAll({ stroke: "#e7b018" });
    chart.series.values[0].set("fill", am5.color("#e7b018"));
  }, 10);
  root.interfaceColors.set("grid", am5.color("#FFFFFF"));

});

const squiggle = document.querySelector('#path13405')
const LoadPath = document.querySelector('#path13405-3')
const gridPath = document.querySelector('#path13405-1')
const batPath = document.querySelector('#path13405-8')
// const range = document.querySelector('.range')

let gridCapVal = 449.5;
gridPath.style.setProperty('--stroke-dashoffset', gridCapVal)
gridPath.style.transition = "all 1s";
// range.addEventListener('input', handleSlider)

// function handleSlider(e) {
//   // let value = e.target.value
//   // squiggle.style.setProperty('--stroke-dashoffset', value)
//   document.querySelector('.result').innerHTML = value;
// }

document.getElementById("rect10579-3").addEventListener("click", myFunction);
document.getElementById("graphIcon").addEventListener("mouseover", pvGraphIcon);
document.getElementById("graphIcon").addEventListener("mouseout", pvGraphIconOut);
// document.getElementById("currentIcon").addEventListener("mouseover", pvGraphIcon);
// document.getElementById("currentIcon").addEventListener("mouseover", pvGraphIcon);
document.getElementById("currentIcon").addEventListener("mouseover", pvCurrentIcon);
document.getElementById("currentIcon").addEventListener("mouseout", pvCurrentIconOut);


document.getElementById("dashboardThemIcon").addEventListener("mouseover", pvCardTheme);
document.getElementById("dashboardThemIcon").addEventListener("mouseout", pvCardThemeOut);
let dashboardThemIconBtn = document.getElementById("dashboardThemIcon");
function pvCardTheme() {
document.getElementById("pvCardSVG").style.display = "none"
document.getElementById("pvCardDasboardThemeImg").style.display = "block"
dashboardThemIconBtn.style.background = "#f1f1ef"
}
function pvCardThemeOut() {
document.getElementById("pvCardSVG").style.display = "block"
document.getElementById("pvCardDasboardThemeImg").style.display = "none"
dashboardThemIconBtn.style.background =  "#E2E2DE";
}


let pvEdit = document.getElementById("cardEditWrapper")
let screenEdit = document.getElementById("screen")
 
let graphIconBtn = document.getElementById("graphIcon");
let currentIconBtn = document.getElementById("currentIcon");


function myFunction() {
  pvEdit.style.display = "block";
  pvEdit.style.display = "flex";
  screenEdit.style.display = "flex";
  screenEdit.style.display = "block";
  
  // console.log("PV Clicked.")
}
let graphimg =  document.getElementById("pvGraphImg")
// let graphBtn = document.getElementById("graphIcon")
let currentImg = document.getElementById("currentVoltageImg")
function pvGraphIcon() {
  graphIconBtn.style.background = "#f1f1ef"
  // graphBtn.style.width = "60px"
  // graphBtn.style.height = "60px"
  graphimg.style.opacity = "1";
  graphimg.style.transition = "all 0.5s";
  // graphBtn.style.transition = "all 1s";
  // document.getElementById("pvGraphImg").style.height = "100px";
}
function pvGraphIconOut() {
  graphIconBtn.style.background =  "#E2E2DE";

  graphimg.style.opacity = "0";
  graphimg.style.transition = "all 0.5s";
  // document.getElementById("pvGraphImg").style.display = "none";
}

function pvCurrentIcon() {
  currentImg.style.opacity = "1";
  currentImg.style.transition = "all 0.5s";
  currentIconBtn.style.background = "#f1f1ef"
}
function pvCurrentIconOut() {
  currentImg.style.opacity = "0";
  currentImg.style.transition = "all 0.5s";
  currentIconBtn.style.background =  "#E2E2DE";
}




