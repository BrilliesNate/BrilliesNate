let financialCard = document.getElementById("financialCard");
let financialBtn = document.getElementById("financeBtn");
financialCard.style.transform = "translate(-80px, 0.058px)";
financialBtn.addEventListener("click", openCloseFinancialCard);

let weatherCard = document.getElementById("weatherCard");
let weatherBtn = document.getElementById("weatherBtn");
weatherCard.style.transform = "translate(-105px, 66.5px)";
weatherBtn.addEventListener("click", openCloseWeatherCard);

let enviroCard = document.getElementById("EnviroCard");
let enviroBtn = document.getElementById("enviroBtn");
enviroCard.style.transform = "translate(80px, 0px)";
enviroBtn.addEventListener("click", openCloseEnviromentalCard);

let batCardInfoCard = document.getElementById("batInfoCard")
let batInfoBtn = document.getElementById("batInfoBtn")
batCardInfoCard.style.transform = "translate(-80px, 0px)";
batInfoBtn.addEventListener("click", openCloseBatInfoCard);

let loadSheddingCard = document.getElementById("loadsheddingCard");
let loadSheddingBtn = document.getElementById("loadsheddingBtn");
loadSheddingCard.style.transform = "translate(0px, -10px)";
loadSheddingBtn.addEventListener("click", openCloseLoadsheddingCard);

let totalLoadCard = document.getElementById("totalLoadCard");
let totalLoadBtn = document.getElementById("totalLoadBtn");
totalLoadCard.style.transform = "translate(-116.5px, 16px)";
totalLoadBtn.addEventListener("click", openCloseTotalLoadCard);

// *** total load Card open/close

function openCloseTotalLoadCard() {
    if (totalLoadCard.style.transform ===  "translate(-116.5px, 16px)") {
        // *** loadShedding Card Card Open
        totalLoadCard.style.transform = "translate(-116.5px, 26px)";
        totalLoadCard.style.transition = "all 0.5s";
    } else {
        // loadShedding Card Card Close      
        totalLoadCard.style.transform =  "translate(-116.5px, 16px)";
        totalLoadCard.style.transition = "all 0.5s";
    }
}

// *** loadShedding Card open/close
function openCloseLoadsheddingCard() {
    if (loadSheddingCard.style.transform ===  "translate(0px, -10px)") {
        // *** loadShedding Card Card Open
        loadSheddingCard.style.transform = "translate(0px, 0px)";
        loadSheddingCard.style.transition = "all 0.5s";
    } else {
        // loadShedding Card Card Close      
        loadSheddingCard.style.transform =  "translate(0px, -10px)";
        loadSheddingCard.style.transition = "all 0.5s";
    }
} 

// *** Bat Info Card open/close

function openCloseBatInfoCard() {
    if (batCardInfoCard.style.transform === "translate(-80px, 0px)") {
        // ***  Bat Info Card Card Open
        batCardInfoCard.style.transform = "translate(0px, 0px)";
        batCardInfoCard.style.transition = "all 0.5s";
    } else {
        //  Bat Info Card Card Close      
        batCardInfoCard.style.transform = "translate(-80px, 0px)";
        batCardInfoCard.style.transition = "all 0.5s";
    }
}
function go() {
  setTimeout(openCloseBatInfoCard, 8000);
  setTimeout(openCloseEnviromentalCard, 8000);
  setTimeout(openCloseFinancialCard, 8000);
  setTimeout(openCloseWeatherCard, 6000);
}
// *** Envirmental Card open/close

function openCloseEnviromentalCard() {
    if (enviroCard.style.transform === "translate(80px, 0px)") {
        // *** Envirmental Card Open
        enviroCard.style.transform = "translate(0px, 0px)";
        enviroCard.style.transition = "all 0.5s";
    } else {
        // Envirmental Card Close      
        enviroCard.style.transform = "translate(80px, 0px)";
        enviroCard.style.transition = "all 0.5s";
    }
}

// **** Financial Card open/close

function openCloseFinancialCard() {
    if ( weatherCard.style.transform === "translate(-7px, 66.5px)") {
        weatherCard.style.transform =  "translate(-105px, 66.5px)";
        weatherCard.style.transition = "all 0.5s";
    }
    if (financialCard.style.transform === "translate(-80px, 0.058px)") {
        // *** Financial Card Open
        financialCard.style.transform = "translate(0px, 0.058px)";
        financialCard.style.transition = "all 0.5s";
    } else {
        // Financial Card Close      
        financialCard.style.transform = "translate(-80px, 0.058px)";
        financialCard.style.transition = "all 0.5s";
    }
}
// **** Weather Card open/close

function openCloseWeatherCard() {
    if ( financialCard.style.transform = "translate(0px, 0.058px)") {
        financialCard.style.transform = "translate(-80px, 0.058px)";
        financialCard.style.transition = "all 0.5s";
    }
    if (weatherCard.style.transform === "translate(-105px, 66.5px)") {
        // *** Weather Card Open
        weatherCard.style.transform = "translate(-7px, 66.5px)";
        weatherCard.style.transition = "all 0.5s";
    } else {
        // Weather Card Close      
        weatherCard.style.transform = "translate(-105px, 66.5px)";
        weatherCard.style.transition = "all 0.5s";
    }

}

// ### pv chart
am5.ready(function () {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("pvChart");
  
  
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
      document.getElementById("pvText").textContent = "4." + this.newValue.toFixed(0);
      let pvCapVal = 420 + Number(this.newValue.toFixed(0));
      let pvCapLine = document.getElementById("pvCap");
      // let pvCapVal =  420;
      // console.log(pvCapVal + "############")
      pvCapLine.style.setProperty('--stroke-dashoffset', pvCapVal)
      pvCapLine.style.transition = "all 3s";
  
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
  

  // ### pv dot animation 1
  window.onload = () => {
    let pvToLoadDot = document.getElementById('dot');
    let pvToLoadcurve = document.getElementById('pvChargeLine');
    // let pvToLoadDot2 = document.getElementById('dot2');
    // let pvChargeLine = document.getElementById("pvChargeLine");
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
  dot.init('dot2', 'pvChargeLine');
  anim.start(3000);
//   dot.init('dot1', 'pvChargeLine');
//   anim.start(3000);
  
  // ### pv dot animation 2
  window.onload = () => {
    // let pvToLoadDot = document.getElementById('dot');
    // let pvToLoadcurve = document.getElementById('curve');
    let pvToLoadDot = document.getElementById('dot');
    let pvToLoadcurve = document.getElementById("curve");
    // let batToLoadcurve = document.getElementById('path1944-0-7');
    let totalLength = pvToLoadcurve.getTotalLength();
    let u = 0.5;
    let p = pvToLoadcurve.getPointAtLength(u * totalLength);
    pvToLoadDot.setAttribute("transform", `translate(${p.x}, ${p.y})`);
  }
  
  const dot2 = {
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
  const anim2 = {
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
  
      dot2.move(u);
    },
  
    onFinish: function () {
      setTimeout(() => this.start(this.duration), 1000);
    }
  };
  
  
  // function pvToLoadAnim() {
  dot2.init('dot', 'curve');
  anim2.start(3000);
//   dot.init('dot1', 'pvChargeLine');
//   anim.start(3000);




  // ### bat dot animation 
  window.onload = () => {
    // let pvToLoadDot = document.getElementById('dot');
    // let pvToLoadcurve = document.getElementById('curve');
    let pvToLoadDot = document.getElementById('batdot');
    let pvToLoadcurve = document.getElementById("batCurve");
    // let batToLoadcurve = document.getElementById('path1944-0-7');
    let totalLength = pvToLoadcurve.getTotalLength();
    let u = 0.5;
    let p = pvToLoadcurve.getPointAtLength(u * totalLength);
    pvToLoadDot.setAttribute("transform", `translate(${p.x}, ${p.y})`);
  }
  
  const dot3 = {
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
  const anim3 = {
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
  
      dot3.move(u);
    },
  
    onFinish: function () {
      setTimeout(() => this.start(this.duration), 1000);
    }
  };
  
  
  // function pvToLoadAnim() {
  dot3.init('batdot', 'batCurve');
  anim3.start(3000);
//   dot.init('dot1', 'pvChargeLine');
//   anim.start(3000);
  
  
// ### bat Chart
am5.ready(function () {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("batChart");
  
  
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
  
    //   let loadSum = newValue + this.newValue;
    //   console.log(newValue)
    //   console.log(this.newValue)
    //   console.log("**********")
  
  
      
      document.getElementById("loadText").textContent = "2." + newValue.toFixed(0);

      let pvCapVal = 430 + Number(this.newValue.toFixed(0));
      let pvCapLine = document.getElementById("batCapLine");
      // let pvCapVal =  420;
      // console.log(pvCapVal + "############")
      pvCapLine.style.setProperty('--stroke-dashoffset', pvCapVal)
      pvCapLine.style.transition = "all 3s";
  
    //   let batCapVal = 420 + Number(newValue.toFixed(0));
    //   batPath.style.setProperty('--stroke-dashoffset', batCapVal)
    //   batPath.style.transition = "all 3s";
  
  
    //   document.getElementById("text18241-1-9-3-8-5").textContent = "2." + loadSum.toFixed(0) + "kW";
    //   let LoadCapVal = 420 + Number(loadSum.toFixed(0));
    //   LoadPath.style.setProperty('--stroke-dashoffset', LoadCapVal)
    //   LoadPath.style.transition = "all 3s";
    //   console.log(LoadCapVal + " L O A D C A P V A L");
  
  
  
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



  // ### Load Chart
  am5.ready(function () {

    // Create root element
    // https://www.amcharts.com/docs/v5/getting-started/#Root_element
    var root = am5.Root.new("loadChart");
  
  
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
  
      document.getElementById("batText").textContent = "1." + newValue.toFixed(0);

      let loadCapVal = 430 + Number(this.newValue.toFixed(0));
      let loadCapLine = document.getElementById("loadCapLine");
      // let pvCapVal =  420;
    //   console.log(pvCapVal + "############")
    loadCapLine.style.setProperty('--stroke-dashoffset', loadCapVal)
    loadCapLine.style.transition = "all 3s";

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







// financialCard.style.transform = "translate(-90.5%, -58%)";
    // financialCard.style.transition = "all 0.5s";




// let coinBtn = document.getElementById("coinBtn");
// let coinBtnClr = document.getElementById("coinBtnColor");

// coinBtn.addEventListener("click", openFinancialCard);
// // coinBtn.addEventListener("mouseover", coinBtnColorChange);
// // coinBtn.addEventListener("mouseout", CoinBtnColorChangeMouseout);

// function CoinBtnColorChangeMouseout() {
//     coinBtnClr.style.fill = "#e6e6e6";
// }

// function coinBtnColorChange() {
//     coinBtnClr.style.fill = "rgb(184, 184, 184)";
// }


// function openFinancialCard() {


//     if (financialCard.style.transform === "translate(-66.5%, -58%)") {
//         financialCard.style.transform = "translate(-90.5%, -58%)";
//         financialCard.style.transition = "all 0.5s";
//     } else {
//         financialCard.style.transform = "translate(-66.5%, -58%)";
//         financialCard.style.transition = "all 0.5s";
//     }

// }

// let leadBtn = document.getElementById("leafBtn");
// let leafColorBtn = document.getElementById("leafBtnColor");
// leadBtn.addEventListener("click", openEnviroCard);
// // leadBtn.addEventListener("mouseover", leafBtnColorChange);
// // leadBtn.addEventListener("mouseout", leafBtnColorChangeMouseout);

// function leafBtnColorChangeMouseout() {
//     leafColorBtn.style.fill = "#e6e6e6";
// }

// function leafBtnColorChange() {
//     leafColorBtn.style.fill = "rgb(184, 184, 184)";
// }

// let enviromentCard = document.getElementById("enviroCard");
// enviromentCard.style.transform = "translate(73.4846px, -1.28567e-05px)";

// function openEnviroCard() {
//     console.log("leaf clicked");

//     if (enviromentCard.style.transform === "translate(73.4846px, -1.28567e-05px)") {
//         enviromentCard.style.transform = "translate(0px,-1.2856701e-5px)";
//         enviromentCard.style.transition = "all 0.5s";
//     } else {
//         enviromentCard.style.transform = "translate(73.48456224px,-1.2856701e-5px)";
//         enviromentCard.style.transition = "all 0.5s";
//     }

// }

let pvEditBtn = document.getElementById("pvEditBtn");
pvEditBtn.addEventListener("click", pvCardEdit);
// pvEditBtn.addEventListener("mouseover", pvEditBtnColorChange);
// pvEditBtn.addEventListener("mouseout", pvEditBtnColorChangeMouseout);

// let pvEditBtnColor = document.getElementById("pvEditBtnColor");

// function pvEditBtnColorChangeMouseout() {
//     pvEditBtnColor.style.fill = "#e6e6e6";
// }

// function pvEditBtnColorChange() {
//     pvEditBtnColor.style.fill = "rgb(184, 184, 184)";
// }

let pvEdit = document.getElementById("cardEditWrapper")
let screenEdit = document.getElementById("screen")

function pvCardEdit() {
  
    pvEdit.style.display = "block";
    pvEdit.style.display = "flex";
    screenEdit.style.display = "flex";
    screenEdit.style.display = "block";
}

let mainCardBtn = document.getElementById("graphIcon");
mainCardBtn.addEventListener("click", mainCardChange);
let quickCardBtn = document.getElementById("currentIcon");
let quickCard = document.getElementById("quickVeiwSvg");
let mainPvCard = document.getElementById("pvCardSVG")
quickCardBtn.addEventListener("click", cardChange);

function mainCardChange() {
  quickCard.style.display = "none";
  mainPvCard.style.display = "block";
}



function cardChange() {
  quickCard.style.display = "block";
  mainPvCard.style.display = "none";
}


// let weatherCard = document.getElementById("weatherCard");
// let weatherBtn = document.getElementById('weatherBtn');

// weatherBtn.addEventListener("click", openCard);

// weatherCard.style.transform = "translate(-82.568px, 56.671px)";
// function closeCard() {
//     weatherCard.style.transition = "all 0.5s";
// }

// function openCard() {
//     weatherCard.style.transform = "translate(-12.568px, 56.671px)";
//     weatherCard.style.transition = "all 0.5s";
// }

// let loadSheddingCard = document.getElementById("loadSheddingCard");
// loadSheddingCard.style.display = "none";
// // function move() {

// // }

