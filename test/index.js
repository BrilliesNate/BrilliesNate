/*  Copyright (C) Solar MD (Pty) ltd - All Rights Reserved
 * 
 *  Unauthorized copying of this file, via any medium is strictly prohibited
 *  Proprietary and confidential
 *  
 *  Written by user pc, 2022
 *  
 *  For more information http://www.solarmd.co.za/ 
 *  email: info@solarmd.co.za
 *  7 Alternator Ave, Montague Gardens, Cape Town, 7441 South Africa
 *  Phone: 021 555 2181
 *  
 */
/* global SVG, energyServiceBcReq, powerBcReq, dm, mainUtils, devTempData, eStorageTemp, mu, dashMan, am5 */

//esManager.storageList


//esManager.onDataReceived(function(data){
//    console.log(data);
//});

// psManager.onDataReceived(function (data) {
//   //    console.log(data)

//       let batCap = esManager.storageList.bank1.data.capacityP;
//       let batPower = esManager.storageList.bank1.data.powerW;

//       document.getElementById("batCapPerc").textContent = (batCap).toFixed(2) + "%";
//       document.getElementById("batText").textContent = (batPower / 1000).toFixed(2);

//       let loadPower = dashMan.powerTypes.load.sumData.powerW;
//       let dailyLoad = dashMan.powerTypes.load.sumData.dailyEnergyWh;
//       let totalLoad = dashMan.powerTypes.load.sumData.energyWh;

//       document.getElementById("loadText").textContent = (loadPower / 1000).toFixed(2);
//       document.getElementById("dailyLoadTxt").textContent = (dailyLoad / 1000).toFixed(2) + " kW";
//       document.getElementById("totalLoadTxt").textContent = (totalLoad / 1000000).toFixed(1) + " MWh";

//       let gridImport = dashMan.powerTypes.gridImport.sumData.powerW;
//       let dailyGrid = dashMan.powerTypes.gridImport.sumData.dailyEnergyWh;
//       let totalGrid = dashMan.powerTypes.gridImport.sumData.energyWh;


//       document.getElementById("gridText").textContent = (gridImport / 1000).toFixed(2);
//       document.getElementById("dailyGridTxt").textContent = (dailyGrid / 1000).toFixed(2) + " kW";
//       document.getElementById("totalGridTxt").textContent = (totalGrid / 1000000).toFixed(1) + " MWh";
//   })




// function style() {
//     let wrapper = document.querySelector(".dashboardWraper")
//     wrapper.style.height = "750px";
//     let mainWrapper = document.querySelector(".dashboardCard .mainDashboardAnim svg");
//     mainWrapper.style.maxHeight = "750px";
// }

// style();

// ### Getting the animation dots/Cards and dot paths. 
// PV Dots
// let pvToBatDotsGroup = document.getElementById("pvToBatDotsGroup");
// pvToBatDotsGroup.style.display = "none";
// let pvToLoadDotsGroup = document.getElementById("pvToLoadDotsGroup");
// pvToLoadDotsGroup.style.display = "none";
// let pvToLoadDot1 = document.getElementById("pvToLoadDot1");
// let pvToLoadDot2 = document.getElementById("pvToLoadDot2");
// let pvToLoadDot3 = document.getElementById("pvToLoadDot3");
// let pvToBatDot1 = document.getElementById("pvToBatDot1");
// let pvToBatDot2 = document.getElementById("pvToBatDot2");
// let pvToBatDot3 = document.getElementById("pvToBatDot3");
// let pvToBatDot4 = document.getElementById("pvToBatDot4");
// PV curve
let pvToLoadCurve = document.getElementById("curve");
// pvToLoadCurve.style.display ="none";

//  Grid Dots
// let gridToBatDotsGroup = document.getElementById("gridToBatDotsGroup");
// let gridToLoadDotsGroup = document.getElementById("gridToLoadDotsGroup");
// gridToBatDotsGroup.style.display = "none";
// gridToLoadDotsGroup.style.display = "none";
// let gridToLoadDot1 = document.getElementById("gridToLoadDot1");
// let gridToLoadDot2 = document.getElementById("gridToLoadDot2");
// let gridToLoadDot3 = document.getElementById("gridToLoadDot3");
// let gridToLoadDot4 = document.getElementById("gridToLoadDot4");
// let gridToBatDot1 = document.getElementById("gridToBatDot1");
// let gridToBatDot2 = document.getElementById("gridToBatDot2");
// let gridToBatDot3 = document.getElementById("gridToBatDot3");
// Grid Curve
document.gridCurveLine = document.getElementById("gridCurveLine");
gridCurveLine.style.display ="none";

// Bat Dots
// let dischargeToLoadDotsGroup = document.getElementById("batToLoadDotsGroup");
// dischargeToLoadDotsGroup.style.display = "none";
// let batDishcargeDot1 = document.getElementById("dischargeToLoadDot1");
// let batDishcargeDot2 = document.getElementById("dischargeToLoadDot2");
// let batDishcargeDot3 = document.getElementById("dischargeToLoadDot3");
// Bat Curve
let batCurve = document.getElementById('batCurve');
// batCurve.style.display = "none";

//Gen Dots
// let genToLoadDotsGroup = document.getElementById("genToLoadDotsGroup");
// let genToBatDotsGroup = document.getElementById("genToBatDotsGroup");
// genToBatDotsGroup.style.display = "none";
// genToLoadDotsGroup.style.display = "none";
// let genToLoadDot1 = document.getElementById("genToLoadDot1")
// let genToLoadDot2 = document.getElementById("genToLoadDot2")
// let genToLoadDot3 = document.getElementById("genToLoadDot3")
// let genToBatDot1 = document.getElementById("genToBatDot1")
// let genToBatDot2 = document.getElementById("genToBatDot2")
// let genToBatDot3 = document.getElementById("genToBatDot3")
//  Gen Card
let genCard = document.getElementById("genCard");
// genCard.style.display = "none";
// Gen Paths
let getLoadCurve = document.getElementById('getLoadCurve');
let genChargeCurve = document.getElementById('genChargeCurve');
// getLoadCurve.style.display = "none";
genChargeCurve.style.display = "none";


//  ### Getting the Info cards and setting there positions
let loadShedingActiveCard = document.getElementById("loadSheddingActiveCard");
loadShedingActiveCard.style.display = "none";
let financialCard = document.getElementById("financialCard");
let financialBtn = document.getElementById("financeBtn");
financialCard.style.transform = "matrix(1.1445, 0, 0, 1.1445, 300.64, 575.16)";
financialBtn.addEventListener("click", openCloseFinancialCard);
let weatherCard = document.getElementById("weatherCard");
let weatherBtn = document.getElementById("weatherBtn");
weatherCard.style.transform = "matrix(1.1445, 0, 0, 1.1445, 292.88, 651.14)";
weatherBtn.addEventListener("click", openCloseWeatherCard);
let enviroCard = document.getElementById("EnviroCard");
let enviroBtn = document.getElementById("enviroBtn");
enviroCard.style.transform = "matrix(1.1445, 0, 0, 1.1445, 491.05, 575.16)";
enviroBtn.addEventListener("click", openCloseEnviromentalCard);
let batCardInfoCard = document.getElementById("batInfoCard")
let batInfoBtn = document.getElementById("batInfoBtn")
batCardInfoCard.style.transform = "matrix(4.3257, 0, 0, 4.3257, -53.79, -89.634)";
batInfoBtn.addEventListener("click", openCloseBatInfoCard);
let loadSheddingCard = document.getElementById("loadsheddingCard");
let loadSheddingBtn = document.getElementById("loadsheddingBtn");
loadSheddingCard.style.transform = "matrix(1.1445, 0, 0, 1.1445, 411.05, 562.16)";
loadSheddingBtn.addEventListener("click", openCloseLoadsheddingCard);
let totalLoadCard = document.getElementById("totalLoadCard");
let totalLoadBtn = document.getElementById("totalLoadBtn");
totalLoadCard.style.transform = "translate(0px, -10px)";
totalLoadBtn.addEventListener("click", openCloseTotalLoadCard);

// *** total load Card open/close

function openCloseTotalLoadCard() {
  if (totalLoadCard.style.transform === "translate(0px, -10px)") {
    totalLoadCard.style.transform = "translate(0px, 0px)";
    totalLoadCard.style.transition = "all 0.5s";
  } else {
    totalLoadCard.style.transform = "translate(0px, -10px)";
    totalLoadCard.style.transition = "all 0.5s";
  }
}

// *** loadShedding Card open/close
function openCloseLoadsheddingCard() {
  // loadShedding Card Card Open  
  if (loadSheddingCard.style.transform === "matrix(1.1445, 0, 0, 1.1445, 411.05, 562.16)") {
    loadSheddingCard.style.transform = "matrix(1.1445, 0, 0, 1.1445, 411.05, 575.16)";
    loadSheddingCard.style.transition = "all 0.5s";
  } else {
    // loadShedding Card Card Close    
    loadSheddingCard.style.transform = "matrix(1.1445, 0, 0, 1.1445, 411.05, 562.16)";
    loadSheddingCard.style.transition = "all 0.5s";
  }
}

// *** Bat Info Card open/close

function openCloseBatInfoCard() {
  if (batCardInfoCard.style.transform === "matrix(4.3257, 0, 0, 4.3257, -53.79, -89.634)") {
    // ***  Bat Info Card Card Open
    batCardInfoCard.style.transform = "matrix(4.3257, 0, 0, 4.3257, -133.79, -89.634)";
    batCardInfoCard.style.transition = "all 0.5s";
  } else {
    //  Bat Info Card Card Close      
    batCardInfoCard.style.transform = "matrix(4.3257, 0, 0, 4.3257, -53.79, -89.634)";
    batCardInfoCard.style.transition = "all 0.5s";
  }
}
function openCloseEnviromentalCard() {
  if (enviroCard.style.transform === "matrix(1.1445, 0, 0, 1.1445, 491.05, 575.16)") {
    // *** Envirmental Card Open
    enviroCard.style.transform = "matrix(1.1445, 0, 0, 1.1445, 411.05, 575.16)";
    enviroCard.style.transition = "all 0.5s";
  } else {
    // Envirmental Card Close     
    enviroCard.style.transform = "matrix(1.1445, 0, 0, 1.1445, 491.05, 575.16)";
    enviroCard.style.transition = "all 0.5s";
  }
}

// **** Financial Card open/close

function openCloseFinancialCard() {
  if (weatherCard.style.transform === "matrix(1.1445, 0, 0, 1.1445, 402.88, 651.14)") {
    weatherCard.style.transform = "matrix(1.1445, 0, 0, 1.1445, 292.88, 651.14)";
    weatherCard.style.transition = "all 0.5s";
  }
  if (financialCard.style.transform === "matrix(1.1445, 0, 0, 1.1445, 300.64, 575.16)") {
    // *** Financial Card Open
    financialCard.style.transform = "matrix(1.1445, 0, 0, 1.1445, 410.64, 575.16)"
    financialCard.style.transition = "all 0.5s";
  } else {
    // Financial Card Close      
    financialCard.style.transform = "matrix(1.1445, 0, 0, 1.1445, 300.64, 575.16)"
    financialCard.style.transition = "all 0.5s";
  }
}
// **** Weather Card open/close

function openCloseWeatherCard() {
  //  if financial Card is open then close.
  if (financialCard.style.transform === "matrix(1.1445, 0, 0, 1.1445, 410.64, 575.16)") {
    financialCard.style.transform = "matrix(1.1445, 0, 0, 1.1445, 300.64, 575.16)";
    financialCard.style.transition = "all 0.5s";
  }
  if (weatherCard.style.transform === "matrix(1.1445, 0, 0, 1.1445, 292.88, 651.14)") {
    // *** Weather Card Open
    console.log("open")
    weatherCard.style.transform = "matrix(1.1445, 0, 0, 1.1445, 402.88, 651.14)";
    weatherCard.style.transition = "all 0.5s";
  } else {
    // *** Weather Card close
    weatherCard.style.transform = "matrix(1.1445, 0, 0, 1.1445, 292.88, 651.14)";
    weatherCard.style.transition = "all 0.5s";
  }

}

// ### pv chart
// am5.ready(function () {

//  // Create root element
//  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
//  var root = am5.Root.new("pvChart");


//  // Set themes
//  // https://www.amcharts.com/docs/v5/concepts/themes/
//  root.setThemes([
//    am5themes_Animated.new(root)
//  ]);


//  // Generate random data
//  var value = 10;

//  function generateChartData() {
//    var chartData = [];
//    var firstDate = new Date();
//    firstDate.setDate(firstDate.getDate() - 1000);
//    firstDate.setHours(0, 0, 0, 0);

//    for (var i = 0; i < 50; i++) {
//      var newDate = new Date(firstDate);
//      newDate.setSeconds(newDate.getSeconds() + i);

//      value += (Math.random() < 0.5 ? 1 : -1) * Math.random();

//      chartData.push({
//        date: newDate.getTime(),
//        value: value
//      });
//    }
//    return chartData;
//  }

//  var data = generateChartData();


//  // Create chart
//  // https://www.amcharts.com/docs/v5/charts/xy-chart/
//  var chart = root.container.children.push(am5xy.XYChart.new(root, {
//    focusable: true,
//    panX: true,
//    panY: true,
//    wheelX: "panX",
//    wheelY: "zoomX"
//  }));

//  var easing = am5.ease.linear;


//  // Create axes
//  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
//  var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
//    maxDeviation: 0.5,
//    groupData: false,
//    extraMax: 0.1, // this adds some space in front
//    extraMin: -0.1,  // this removes some space form th beginning so that the line would not be cut off
//    baseInterval: {
//      timeUnit: "second",
//      count: 1
//    },
//    renderer: am5xy.AxisRendererX.new(root, {
//      minGridDistance: 50
//    }),
//    tooltip: am5.Tooltip.new(root, {})
//  }));

//  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
//    renderer: am5xy.AxisRendererY.new(root, {})
//  }));


//  // Add series
//  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
//  var series = chart.series.push(am5xy.LineSeries.new(root, {
//    name: "Series 1",
//    xAxis: xAxis,
//    yAxis: yAxis,
//    valueYField: "value",
//    valueXField: "date",
//    tooltip: am5.Tooltip.new(root, {
//      pointerOrientation: "horizontal",
//      labelText: "{valueY}"
//    })
//  }));

//  series.fills.template.setAll({
//    fillOpacity: 0.2,
//    visible: true,

//  });

//  series.strokes.template.setAll({
//    strokeWidth: 1,
//    visible: true,
//    stroke: "#e7b018"

//  });

//  // tell that the last data item must create bullet
//  data[data.length - 1].bullet = true;
//  series.data.setAll(data);


//  // Create animating bullet by adding two circles in a bullet container and
//  // animating radius and opacity of one of them.
//  series.bullets.push(function (root, series, dataItem) {
//    // only create sprite if bullet == true in data context
//    if (dataItem.dataContext.bullet) {
//      var container = am5.Container.new(root, {});
//      var circle0 = container.children.push(am5.Circle.new(root, {
//        radius: 3,
//        fill: am5.color("#008000")
//      }));
//      var circle1 = container.children.push(am5.Circle.new(root, {
//        radius: 3,
//        fill: am5.color("#008000")
//      }));

//      circle1.animate({
//        key: "radius",
//        to: 20,
//        duration: 1000,
//        easing: am5.ease.out(am5.ease.cubic),
//        loops: Infinity
//      });
//      circle1.animate({
//        key: "opacity",
//        to: 0,
//        from: 1,
//        duration: 1000,
//        easing: am5.ease.out(am5.ease.cubic),
//        loops: Infinity
//      });

//      return am5.Bullet.new(root, {
//        locationX: undefined,
//        sprite: container
//      })
//    }
//  })


//  // Add cursor
//  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
//  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
//    xAxis: xAxis
//  }));
//  cursor.lineY.set("visible", false);


//  // Update data every second
//  setInterval(function () {
//    addData();
//  }, 1000)
// //
// //
//  function addData() {
//    var lastDataItem = series.dataItems[series.dataItems.length - 1];

//    var lastValue = lastDataItem.get("valueY");
//    this.newValue = value + ((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
//    var lastDate = new Date(lastDataItem.get("valueX"));
//    var time = am5.time.add(new Date(lastDate), "second", 1).getTime();
//    series.data.removeIndex(0);
//    series.data.push({
//      date: time,
//      value: this.newValue
//    })
//    document.getElementById("pvText").textContent = "4." + this.newValue.toFixed(0);
//    let pvCapVal = 420 + Number(this.newValue.toFixed(0));
//    let pvCapLine = document.getElementById("pvCap");
//    // let pvCapVal =  420;
//    // console.log(pvCapVal + "############")
//    pvCapLine.style.setProperty('--stroke-dashoffset', pvCapVal)
//    pvCapLine.style.transition = "all 1s";
  
// //
//    var newDataItem = series.dataItems[series.dataItems.length - 1];
//    newDataItem.animate({
//      key: "valueYWorking",
//      to: this.newValue,
//      from: lastValue,
//      duration: 600,
//      easing: easing
//    });

//    // use the bullet of last data item so that a new sprite is not created
//    newDataItem.bullets = [];
//    newDataItem.bullets[0] = lastDataItem.bullets[0];
//    newDataItem.bullets[0].get("sprite").dataItem = newDataItem;
//    // reset bullets
//    lastDataItem.dataContext.bullet = false;
//    lastDataItem.bullets = [];


//    var animation = newDataItem.animate({
//      key: "locationX",
//      to: 0.5,
//      from: -0.5,
//      duration: 600
//    });
//    if (animation) {
//      var tooltip = xAxis.get("tooltip");
//      if (tooltip && !tooltip.isHidden()) {
//        animation.events.on("stopped", function () {
//          xAxis.updateTooltip();
//        })
//      }
//    }
//  }


//  // Make stuff animate on load
//  // https://www.amcharts.com/docs/v5/concepts/animations/
//  chart.appear(1000, 100);
//  setTimeout(function () {
//    yAxis.labelsContainer.children.setAll({ visible: false, });
//    xAxis.labelsContainer.children.setAll({ visible: false, });
//    series.strokes.template.setAll({ stroke: "#008000" });
//    chart.series.values[0].set("fill", am5.color("#008000"));
//  }, 10);
//  root.interfaceColors.set("grid", am5.color("#FFFFFF"));

// });


 // ### pv dot animation 1
// window.onload = () => {
//     let pvToLoadDot = document.getElementById('dot');
//     let pvToLoadcurve = document.getElementById('pvChargeLine');
//     let totalLength = pvToLoadcurve.getTotalLength();
//     let u = 0.5;
//     let p = pvToLoadcurve.getPointAtLength(u * totalLength);
//     pvToLoadDot.setAttribute("transform", `translate(${p.x}, ${p.y})`);
//   }
// const dot = {
//     sprite: null,
//     track: null,
//     init: function (sprite, track) {
//         this.sprite = document.getElementById(sprite);
//         this.track = document.getElementById(track);
//     },
//     move: function (u) {
//         const p = this.track.getPointAtLength(u * this.track.getTotalLength());
//         this.sprite.setAttribute("transform", `translate(${p.x }, ${p.y})`);
//     }
// };
// const anim = {
//     start: function (duration) {
//         this.duration = duration;
//         this.tZero = Date.now();

//         requestAnimationFrame(() => this.run());
//     },
//     run: function () {
//         let u = Math.min((Date.now() - this.tZero) / this.duration, 1);

//         if (u < 1) {
//             requestAnimationFrame(() => this.run());
//         } else {
//             this.onFinish();
//         }
//         dot.move(u);
//     },

//     onFinish: function () {
//         setTimeout(() => this.start(this.duration), 1000);
//     }
// };


// // function pvToLoadAnim() {

// //   dot.init('dot2', 'curve');
// //   anim.start(2500);
// // }
// // setTimeout(function () {
//     dot.init('dot', 'pvChargeLine');
//     anim.start(2500);
 
    
    // function dot() {
    // }
//register the plugin (just once)
    gsap.registerPlugin(MotionPathPlugin);
    let numRepeat = 1000;
    let duration = 3;

    function pvToLoadAnim() {
    gsap.to("#dot", {
        motionPath: {
            path: "#curve",
            align: "#curve",
            alignOrigin: [0.5, 0.5],
            autoRotate: true
        },
        transformOrigin: "50% 50%",
        duration: duration,
        repeat: numRepeat,
        ease: "power1.inOut"
    });

    setTimeout(function () {
      gsap.to("#dot2", {
        motionPath: {
            path: "#curve",
            align: "#curve",
            alignOrigin: [0.5, 0.5],
            autoRotate: true
        },
        transformOrigin: "50% 50%",
        duration: duration,
        repeat: numRepeat,
        ease: "power1.inOut"
   
    });

}, 500)
setTimeout(function () {
    gsap.to("#dot3", {
        motionPath: {
            path: "#curve",
            align: "#curve",
            alignOrigin: [0.5, 0.5],
            autoRotate: true
        },
        transformOrigin: "50% 50%",
        duration: duration,
        repeat: numRepeat,
        ease: "power1.inOut"
    });
  }, 1000)
setTimeout(function () {
    gsap.to("#dot4", {
        motionPath: {
            path: "#curve",
            align: "#curve",
            alignOrigin: [0.5, 0.5],
            autoRotate: true
        },
        transformOrigin: "50% 50%",
        duration: duration,
        repeat: numRepeat,
        ease: "power1.inOut"
    });
  }, 1500)
setTimeout(function () {
    gsap.to("#dot5", {
        motionPath: {
            path: "#curve",
            align: "#curve",
            alignOrigin: [0.5, 0.5],
            autoRotate: true
        },
        transformOrigin: "50% 50%",
        duration: duration,
        repeat: numRepeat,
        ease: "power1.inOut"
    });
  }, 2000)
setTimeout(function () {
    gsap.to("#dot6", {
        motionPath: {
            path: "#curve",
            align: "#curve",
            alignOrigin: [0.5, 0.5],
            autoRotate: true
        },
        transformOrigin: "50% 50%",
        duration: duration,
        repeat: numRepeat,
        ease: "power1.inOut"
    });
  }, 2500)
}

function gridToLoadAnim() {
  
  gsap.to("#gridDot1", {
    motionPath: {
        path: "#gridLine",
        align: "#gridLine",
        alignOrigin: [0.5, 0.5],
        autoRotate: true
    },
    transformOrigin: "50% 50%",
    duration: duration,
    repeat: numRepeat,
    ease: "power1.inOut"
});

setTimeout(function () {
  gsap.to("#gridDot2", {
    motionPath: {
        path: "#gridLine",
        align: "#gridLine",
        alignOrigin: [0.5, 0.5],
        autoRotate: true
    },
    transformOrigin: "50% 50%",
    duration: duration,
    repeat: numRepeat,
    ease: "power1.inOut"

});

}, 500)
setTimeout(function () {
gsap.to("#gridDot3", {
    motionPath: {
        path: "#gridLine",
        align: "#gridLine",
        alignOrigin: [0.5, 0.5],
        autoRotate: true
    },
    transformOrigin: "50% 50%",
    duration: duration,
    repeat: numRepeat,
    ease: "power1.inOut"
});
}, 1000)
setTimeout(function () {
gsap.to("#gridDot4", {
    motionPath: {
        path: "#gridLine",
        align: "#gridLine",
        alignOrigin: [0.5, 0.5],
        autoRotate: true
    },
    transformOrigin: "50% 50%",
    duration: duration,
    repeat: numRepeat,
    ease: "power1.inOut"
});
}, 1500)
setTimeout(function () {
gsap.to("#gridDot5", {
    motionPath: {
        path: "#gridLine",
        align: "#gridLine",
        alignOrigin: [0.5, 0.5],
        autoRotate: true
    },
    transformOrigin: "50% 50%",
    duration: duration,
    repeat: numRepeat,
    ease: "power1.inOut"
});
}, 2000)
setTimeout(function () {
gsap.to("#gridDot6", {
    motionPath: {
        path: "#gridLine",
        align: "#gridLine",
        alignOrigin: [0.5, 0.5],
        autoRotate: true
    },
    transformOrigin: "50% 50%",
    duration: duration,
    repeat: numRepeat,
    ease: "power1.inOut"
});
}, 2500)

}

function batToLoadcurve() {
  gsap.to("#batToLoadDot1", {
    motionPath: {
        path: "#batCurve",
        align: "#batCurve",
        alignOrigin: [0.5, 0.5],
        autoRotate: true
    },
    transformOrigin: "50% 50%",
    duration: duration,
    repeat: numRepeat,
    ease: "power1.inOut"
});

setTimeout(function () {
  gsap.to("#batToLoadDot2", {
    motionPath: {
        path: "#batCurve",
        align: "#batCurve",
        alignOrigin: [0.5, 0.5],
        autoRotate: true
    },
    transformOrigin: "50% 50%",
    duration: duration,
    repeat: numRepeat,
    ease: "power1.inOut"

});

}, 500)
setTimeout(function () {
gsap.to("#batToLoadDot3", {
    motionPath: {
        path: "#batCurve",
        align: "#batCurve",
        alignOrigin: [0.5, 0.5],
        autoRotate: true
    },
    transformOrigin: "50% 50%",
    duration: duration,
    repeat: numRepeat,
    ease: "power1.inOut"
});
}, 1000)
setTimeout(function () {
gsap.to("#batToLoadDot4", {
    motionPath: {
        path: "#batCurve",
        align: "#batCurve",
        alignOrigin: [0.5, 0.5],
        autoRotate: true
    },
    transformOrigin: "50% 50%",
    duration: duration,
    repeat: numRepeat,
    ease: "power1.inOut"
});
}, 1500)
setTimeout(function () {
gsap.to("#batToLoadDot5", {
    motionPath: {
        path: "#batCurve",
        align: "#batCurve",
        alignOrigin: [0.5, 0.5],
        autoRotate: true
    },
    transformOrigin: "50% 50%",
    duration: duration,
    repeat: numRepeat,
    ease: "power1.inOut"
});
}, 2000)
setTimeout(function () {
gsap.to("#batToLoadDot6", {
    motionPath: {
        path: "#batCurve",
        align: "#batCurve",
        alignOrigin: [0.5, 0.5],
        autoRotate: true
    },
    transformOrigin: "50% 50%",
    duration: duration,
    repeat: numRepeat,
    ease: "power1.inOut"
});
}, 2500)

}

function genToBatAnim() {
  gsap.to("#genTobatDot1", {
    motionPath: {
        path: "#getLoadCurve",
        align: "#getLoadCurve",
        alignOrigin: [0.5, 0.5],
        autoRotate: true
    },
    transformOrigin: "50% 50%",
    duration: duration,
    repeat: numRepeat,
    ease: "power1.inOut"
});

setTimeout(function () {
  gsap.to("#genTobatDot2", {
    motionPath: {
        path: "#getLoadCurve",
        align: "#getLoadCurve",
        alignOrigin: [0.5, 0.5],
        autoRotate: true
    },
    transformOrigin: "50% 50%",
    duration: duration,
    repeat: numRepeat,
    ease: "power1.inOut"

});

}, 500)
setTimeout(function () {
gsap.to("#genTobatDot3", {
    motionPath: {
        path: "#getLoadCurve",
        align: "#getLoadCurve",
        alignOrigin: [0.5, 0.5],
        autoRotate: true
    },
    transformOrigin: "50% 50%",
    duration: duration,
    repeat: numRepeat,
    ease: "power1.inOut"
});
}, 1000)
setTimeout(function () {
  gsap.to("#genTobatDot4", {
      motionPath: {
          path: "#getLoadCurve",
          align: "#getLoadCurve",
          alignOrigin: [0.5, 0.5],
          autoRotate: true
      },
      transformOrigin: "50% 50%",
      duration: duration,
      repeat: numRepeat,
      ease: "power1.inOut"
  });
  }, 1500)
  setTimeout(function () {
  gsap.to("#genTobatDot5", {
      motionPath: {
          path: "#getLoadCurve",
          align: "#getLoadCurve",
          alignOrigin: [0.5, 0.5],
          autoRotate: true
      },
      transformOrigin: "50% 50%",
      duration: duration,
      repeat: numRepeat,
      ease: "power1.inOut"
  });
  }, 2000)
  setTimeout(function () {
  gsap.to("#genTobatDot6", {
      motionPath: {
          path: "#getLoadCurve",
          align: "#getLoadCurve",
          alignOrigin: [0.5, 0.5],
          autoRotate: true
      },
      transformOrigin: "50% 50%",
      duration: duration,
      repeat: numRepeat,
      ease: "power1.inOut"
  });
  }, 2500)
}


function anim(){
  pvToLoadAnim();
  gridToLoadAnim();
  batToLoadcurve();
  genToBatAnim();
}
//     gsap.to("#dot", {
//   duration: 5, 
//   repeat: 12,
//   // repeatDelay: 3,
//   // yoyo: true,
//   ease: "power1.inOut",
//   motionPath:{
//     path: "#gridLine",
//     align: "#gridLine",
//     autoRotate: true,
//     alignOrigin: [0.5, 0.5]
//   }
// });


    
    // const path = document.querySelector('#curve');
    // const circle = document.querySelector('#dot2');
    
    // // Create an object that gsap can animate
    // const val = { distance: 0 };
    // // Create a tween
    // gsap.to(val, {
    //   // Animate from distance 0 to the total distance
    //   distance: path.getTotalLength(),
    //   // Loop the animation
    //   repeat: -1,
    //   // Make the animation lasts 5 seconds
    //   duration: 5,
    //   // Function call on each frame of the animation
    //   onUpdate: () => {
    //     // Query a point at the new distance value
    //     const point = path.getPointAtLength(val.distance);
    //     // Update the circle coordinates
    //     circle.setAttribute('cx', point.x);
    //     circle.setAttribute('cy', point.y);
    //   }
    // });


// // }, 2000)
// //   dot.init('dot1', 'pvChargeLine');
// //   anim.start(3000);

// // ### pv dot animation 2
// window.onload = () => {
//     // let pvToLoadDot = document.getElementById('dot');
//     // let pvToLoadcurve = document.getElementById('curve');
//     let pvToLoadDot = document.getElementById('pvToBatDot1');
//     let pvToLoadcurve = document.getElementById("pvChargeLine");
//     // let batToLoadcurve = document.getElementById('path1944-0-7');
//     let totalLength = pvToLoadcurve.getTotalLength();
//     let u = 0.5;
//     let p = pvToLoadcurve.getPointAtLength(u * totalLength);
//     pvToLoadDot.setAttribute("transform", `translate(${p.x}, ${p.y})`);
// }

// const dot = {
//     sprite: null,
//     track: null,
//     init: function (sprite, track) {
//         this.sprite = document.getElementById(sprite);
//         this.track = document.getElementById(track);
//     },
//     move: function (u) {
//         const p = this.track.getPointAtLength(u * this.track.getTotalLength());
//         this.sprite.setAttribute("transform", `translate(${p.x}, ${p.y})`);
//     }
// };
// const anim = {
//     start: function (duration) {
//         this.duration = duration;
//         this.tZero = Date.now();

//         requestAnimationFrame(() => this.run());
//     },

//     run: function () {
//         let u = Math.min((Date.now() - this.tZero) / this.duration, 1);

//         if (u < 1) {
//             requestAnimationFrame(() => this.run());
//         } else {
//             this.onFinish();
//         }

//         dot.move(u);
//     },

//     onFinish: function () {
//         setTimeout(() => this.start(this.duration), 1000);
//     }
// };


// // function pvToLoadAnim() {
// // setTimeout(function () {
//     dot.init('pvToBatDot1', 'pvChargeLine');
//     anim.start(2500);

// }, 1050)
//   dot.init('dot1', 'pvChargeLine');
//   anim.start(3000);




// // ### bat dot animation 
// window.onload = () => {
//     // let pvToLoadDot = document.getElementById('dot');
//     // let pvToLoadcurve = document.getElementById('curve');
//     let pvToLoadDot = document.getElementById('gridDot');
// //  pvToLoadDot.style.fill =""
//     let pvToLoadcurve = document.getElementById("gridLine");
//     // let batToLoadcurve = document.getElementById('path1944-0-7');
//     let totalLength = pvToLoadcurve.getTotalLength();
//     let u = 0.5;
//     let p = pvToLoadcurve.getPointAtLength(u * totalLength);
//     pvToLoadDot.setAttribute("transform", `translate(${p.x}, ${p.y})`);
// }

// const dot3 = {
//     sprite: null,
//     track: null,
//     init: function (sprite, track) {
//         this.sprite = document.getElementById(sprite);
//         this.track = document.getElementById(track);
//     },
//     move: function (u) {
//         const p = this.track.getPointAtLength(u * this.track.getTotalLength());
//         this.sprite.setAttribute("transform", `translate(${p.x}, ${p.y})`);
//     }
// };
// const anim3 = {
//     start: function (duration) {
//         this.duration = duration;
//         this.tZero = Date.now();

//         requestAnimationFrame(() => this.run());
//     },

//     run: function () {
//         let u = Math.min((Date.now() - this.tZero) / this.duration, 1);

//         if (u < 1) {
//             requestAnimationFrame(() => this.run());
//         } else {
//             this.onFinish();
//         }

//         dot3.move(u);
//     },

//     onFinish: function () {
//         setTimeout(() => this.start(this.duration), 1000);
//     }
// };


// // function pvToLoadAnim() {
// // dot3.init('gridDot', 'gridLine');
// // anim3.start(2500);


// window.onload = () => {
//     // let pvToLoadDot = document.getElementById('dot');
//     // let pvToLoadcurve = document.getElementById('curve');
//     let batDot1 = document.getElementById('batdot1');
// //  pvToLoadDot.style.fill =""
//     let batDischargeLine = document.getElementById("batCurve");
//     // let batToLoadcurve = document.getElementById('path1944-0-7');
//     let totalLength = batDischargeLine.getTotalLength();
//     let u = 0.5;
//     let p = batDischargeLine.getPointAtLength(u * totalLength);
//     batDot1.setAttribute("transform", `translate(${p.x}, ${p.y})`);
// }

// const batDot1 = {
//     sprite: null,
//     track: null,
//     init: function (sprite, track) {
//         this.sprite = document.getElementById(sprite);
//         this.track = document.getElementById(track);
//     },
//     move: function (u) {
//         const p = this.track.getPointAtLength(u * this.track.getTotalLength());
//         this.sprite.setAttribute("transform", `translate(${p.x}, ${p.y})`);
//     }
// };
// const batDot1Anim = {
//     start: function (duration) {
//         this.duration = duration;
//         this.tZero = Date.now();

//         requestAnimationFrame(() => this.run());
//     },

//     run: function () {
//         let u = Math.min((Date.now() - this.tZero) / this.duration, 1);

//         if (u < 1) {
//             requestAnimationFrame(() => this.run());
//         } else {
//             this.onFinish();
//         }

//         batDot1.move(u);
//     },

//     onFinish: function () {
//         setTimeout(() => this.start(this.duration), 1000);
//     }
// };


// // function pvToLoadAnim() {



// window.onload = () => {
//     // let pvToLoadDot = document.getElementById('dot');
//     // let pvToLoadcurve = document.getElementById('curve');
//     let batDot2 = document.getElementById('batdot2');
// //  pvToLoadDot.style.fill =""
//     let batDischargeLine = document.getElementById("batCurve");
//     // let batToLoadcurve = document.getElementById('path1944-0-7');
//     let totalLength = batDischargeLine.getTotalLength();
//     let u = 0.5;
//     let p = batDischargeLine.getPointAtLength(u * totalLength);
//     batDot2.setAttribute("transform", `translate(${p.x}, ${p.y})`);
// }

// const batDot2 = {
//     sprite: null,
//     track: null,
//     init: function (sprite, track) {
//         this.sprite = document.getElementById(sprite);
//         this.track = document.getElementById(track);
//     },
//     move: function (u) {
//         const p = this.track.getPointAtLength(u * this.track.getTotalLength());
//         this.sprite.setAttribute("transform", `translate(${p.x}, ${p.y})`);
//     }
// };
// const batDot2Anim = {
//     start: function (duration) {
//         this.duration = duration;
//         this.tZero = Date.now();

//         requestAnimationFrame(() => this.run());
//     },

//     run: function () {
//         let u = Math.min((Date.now() - this.tZero) / this.duration, 1);

//         if (u < 1) {
//             requestAnimationFrame(() => this.run());
//         } else {
//             this.onFinish();
//         }

//         batDot2.move(u);
//     },

//     onFinish: function () {
//         setTimeout(() => this.start(this.duration), 1000);
//     }
// };


// // function pvToLoadAnim() {



// window.onload = () => {
//     // let pvToLoadDot = document.getElementById('dot');
//     // let pvToLoadcurve = document.getElementById('curve');
//     let batDot3 = document.getElementById('batdot3');
// //  pvToLoadDot.style.fill =""
//     let batDischargeLine = document.getElementById("batCurve");
//     // let batToLoadcurve = document.getElementById('path1944-0-7');
//     let totalLength = batDischargeLine.getTotalLength();
//     let u = 0.5;
//     let p = batDischargeLine.getPointAtLength(u * totalLength);
//     batDot3.setAttribute("transform", `translate(${p.x}, ${p.y})`);
// }

// const batDot3 = {
//     sprite: null,
//     track: null,
//     init: function (sprite, track) {
//         this.sprite = document.getElementById(sprite);
//         this.track = document.getElementById(track);
//     },
//     move: function (u) {
//         const p = this.track.getPointAtLength(u * this.track.getTotalLength());
//         this.sprite.setAttribute("transform", `translate(${p.x}, ${p.y})`);
//     }
// };
// const batDot3Anim = {
//     start: function (duration) {
//         this.duration = duration;
//         this.tZero = Date.now();

//         requestAnimationFrame(() => this.run());
//     },

//     run: function () {
//         let u = Math.min((Date.now() - this.tZero) / this.duration, 1);

//         if (u < 1) {
//             requestAnimationFrame(() => this.run());
//         } else {
//             this.onFinish();
//         }

//         batDot3.move(u);
//     },

//     onFinish: function () {
//         setTimeout(() => this.start(this.duration), 1000);
//     }
// };


// window.onload = () => {
//     // let pvToLoadDot = document.getElementById('dot');
//     // let pvToLoadcurve = document.getElementById('curve');
//     let batDot3 = document.getElementById('pvDot1');
// //  pvToLoadDot.style.fill =""
//     let batDischargeLine = document.getElementById("curve");
//     // let batToLoadcurve = document.getElementById('path1944-0-7');
//     let totalLength = batDischargeLine.getTotalLength();
//     let u = 0.5;
//     let p = batDischargeLine.getPointAtLength(u * totalLength);
//     batDot3.setAttribute("transform", `translate(${p.x}, ${p.y})`);
// }

// const pvDot1 = {
//     sprite: null,
//     track: null,
//     init: function (sprite, track) {
//         this.sprite = document.getElementById(sprite);
//         this.track = document.getElementById(track);
//     },
//     move: function (u) {
//         const p = this.track.getPointAtLength(u * this.track.getTotalLength());
//         this.sprite.setAttribute("transform", `translate(${p.x}, ${p.y})`);
//     }
// };
// const pvDot1Anim = {
//     start: function (duration) {
//         this.duration = duration;
//         this.tZero = Date.now();

//         requestAnimationFrame(() => this.run());
//     },

//     run: function () {
//         let u = Math.min((Date.now() - this.tZero) / this.duration, 1);

//         if (u < 1) {
//             requestAnimationFrame(() => this.run());
//         } else {
//             this.onFinish();
//         }

//         pvDot1.move(u);
//     },

//     onFinish: function () {
//         setTimeout(() => this.start(this.duration), 1000);
//     }
// };

// window.onload = () => {
//     // let pvToLoadDot = document.getElementById('dot');
//     // let pvToLoadcurve = document.getElementById('curve');
//     let batDot3 = document.getElementById('pvDot2');
// //  pvToLoadDot.style.fill =""
//     let batDischargeLine = document.getElementById("curve");
//     // let batToLoadcurve = document.getElementById('path1944-0-7');
//     let totalLength = batDischargeLine.getTotalLength();
//     let u = 0.5;
//     let p = batDischargeLine.getPointAtLength(u * totalLength);
//     batDot3.setAttribute("transform", `translate(${p.x}, ${p.y})`);
// }

// const pvDot2 = {
//     sprite: null,
//     track: null,
//     init: function (sprite, track) {
//         this.sprite = document.getElementById(sprite);
//         this.track = document.getElementById(track);
//     },
//     move: function (u) {
//         const p = this.track.getPointAtLength(u * this.track.getTotalLength());
//         this.sprite.setAttribute("transform", `translate(${p.x}, ${p.y})`);
//     }
// };
// const pvDot2Anim = {
//     start: function (duration) {
//         this.duration = duration;
//         this.tZero = Date.now();

//         requestAnimationFrame(() => this.run());
//     },

//     run: function () {
//         let u = Math.min((Date.now() - this.tZero) / this.duration, 1);

//         if (u < 1) {
//             requestAnimationFrame(() => this.run());
//         } else {
//             this.onFinish();
//         }

//         pvDot2.move(u);
//     },

//     onFinish: function () {
//         setTimeout(() => this.start(this.duration), 1000);
//     }
// };
// //function no(){

// document.getElementById("batdot3").style.display = "none";
// //}

// // function pvToLoadAnim() {

// function dischargAnim() {

//     setTimeout(function () {
//         pvDot2.init('pvDot2', 'curve');
//         pvDot2Anim.start(2500);

//     }, 850)


//     pvDot1.init('pvDot1', 'curve');
//     pvDot1Anim.start(2500);


//     batDot1.init('batdot1', 'batCurve');
//     batDot1Anim.start(2500);
//     setTimeout(function () {

//         batDot2.init('batdot2', 'batCurve');
//         batDot2Anim.start(2500);

//     }, 850)

//     setTimeout(function () {
// //batDot3.style.display = "block";
//         document.getElementById("batdot3").style.display = "block";
//         batDot3.init('batdot3', 'batCurve');
//         batDot3Anim.start(2500);

//     }, 1750)
// }
//   dot.init('dot1', 'pvChargeLine');
//   anim.start(3000);

//dIcon.setBatLevel(sum.capacityP.toFixed(sum.capacityP < 99 ? 1 : 0));
// ### bat Chart
//am5.ready(function () {
//
//  // Create root element
//  // https://www.amcharts.com/docs/v5/getting-started/#Root_element
//  var root = am5.Root.new("batChart");
//
//
//  // Set themes
//  // https://www.amcharts.com/docs/v5/concepts/themes/
//  root.setThemes([
//    am5themes_Animated.new(root)
//  ]);
//
//
//  // Generate random data
//  var value = 10;
//
//  function generateChartData() {
//    var chartData = [];
//    var firstDate = new Date();
//    firstDate.setDate(firstDate.getDate() - 1000);
//    firstDate.setHours(0, 0, 0, 0);
//
//    for (var i = 0; i < 50; i++) {
//      var newDate = new Date(firstDate);
//      newDate.setSeconds(newDate.getSeconds() + i);
//
//      value += (Math.random() < 0.5 ? 1 : -1) * Math.random();
//
//      chartData.push({
//        date: newDate.getTime(),
//        value: value
//      });
//    }
//    return chartData;
//  }
//
//  var data = generateChartData();
//
//
//  // Create chart
//  // https://www.amcharts.com/docs/v5/charts/xy-chart/
//  var chart = root.container.children.push(am5xy.XYChart.new(root, {
//    focusable: true,
//    panX: true,
//    panY: true,
//    wheelX: "panX",
//    wheelY: "zoomX"
//  }));
//
//  var easing = am5.ease.linear;
//
//
//  // Create axes
//  // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
//  var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
//    maxDeviation: 0.5,
//    groupData: false,
//    extraMax: 0.1, // this adds some space in front
//    extraMin: -0.1,  // this removes some space form th beginning so that the line would not be cut off
//    baseInterval: {
//      timeUnit: "second",
//      count: 1
//    },
//    renderer: am5xy.AxisRendererX.new(root, {
//      minGridDistance: 50
//    }),
//    tooltip: am5.Tooltip.new(root, {})
//  }));
//
//  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
//    renderer: am5xy.AxisRendererY.new(root, {})
//  }));
//
//
//  // Add series
//  // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
//  var series = chart.series.push(am5xy.LineSeries.new(root, {
//    name: "Series 1",
//    xAxis: xAxis,
//    yAxis: yAxis,
//    valueYField: "value",
//    valueXField: "date",
//    tooltip: am5.Tooltip.new(root, {
//      pointerOrientation: "horizontal",
//      labelText: "{valueY}"
//    })
//  }));
//
//  series.fills.template.setAll({
//    fillOpacity: 0.2,
//    visible: true,
//
//  });
//
//  series.strokes.template.setAll({
//    strokeWidth: 1,
//    visible: true,
//    stroke: "#e7b018"
//
//  });
//
//  // tell that the last data item must create bullet
//  data[data.length - 1].bullet = true;
//  series.data.setAll(data);
//
//
//  // Create animating bullet by adding two circles in a bullet container and
//  // animating radius and opacity of one of them.
//  series.bullets.push(function (root, series, dataItem) {
//    // only create sprite if bullet == true in data context
//    if (dataItem.dataContext.bullet) {
//      var container = am5.Container.new(root, {});
//      var circle0 = container.children.push(am5.Circle.new(root, {
//        radius: 3,
//        fill: am5.color("#e7b018")
//      }));
//      var circle1 = container.children.push(am5.Circle.new(root, {
//        radius: 3,
//        fill: am5.color("#e7b018")
//      }));
//
//      circle1.animate({
//        key: "radius",
//        to: 20,
//        duration: 1000,
//        easing: am5.ease.out(am5.ease.cubic),
//        loops: Infinity
//      });
//      circle1.animate({
//        key: "opacity",
//        to: 0,
//        from: 1,
//        duration: 1000,
//        easing: am5.ease.out(am5.ease.cubic),
//        loops: Infinity
//      });
//
//      return am5.Bullet.new(root, {
//        locationX: undefined,
//        sprite: container
//      })
//    }
//  })
//
//
//  // Add cursor
//  // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
//  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
//    xAxis: xAxis
//  }));
//  cursor.lineY.set("visible", false);
//
//
//  // Update data every second
//  setInterval(function () {
//    addData();
//  }, 1000)
//
//
//  function addData() {
//    var lastDataItem = series.dataItems[series.dataItems.length - 1];
//
//    var lastValue = lastDataItem.get("valueY");
//    var newValue = value + ((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
//    var lastDate = new Date(lastDataItem.get("valueX"));
//    var time = am5.time.add(new Date(lastDate), "second", 1).getTime();
//    series.data.removeIndex(0);
//    series.data.push({
//      date: time,
//      value: newValue
//    })
//
//    //   let loadSum = newValue + this.newValue;
//    //   console.log(newValue)
//    //   console.log(this.newValue)
//    //   console.log("**********")
//
//
//
//    document.getElementById("loadText").textContent = "2." + newValue.toFixed(0);
//
//    let pvCapVal = 430 + Number(this.newValue.toFixed(0));
//    let pvCapLine = document.getElementById("batCapLine");
//    // let pvCapVal =  420;
//    // console.log(pvCapVal + "############")
//    pvCapLine.style.setProperty('--stroke-dashoffset', pvCapVal)
//    pvCapLine.style.transition = "all 3s";
//
//    //   let batCapVal = 420 + Number(newValue.toFixed(0));
//    //   batPath.style.setProperty('--stroke-dashoffset', batCapVal)
//    //   batPath.style.transition = "all 3s";
//
//
//    //   document.getElementById("text18241-1-9-3-8-5").textContent = "2." + loadSum.toFixed(0) + "kW";
//    //   let LoadCapVal = 420 + Number(loadSum.toFixed(0));
//    //   LoadPath.style.setProperty('--stroke-dashoffset', LoadCapVal)
//    //   LoadPath.style.transition = "all 3s";
//    //   console.log(LoadCapVal + " L O A D C A P V A L");
//
//
//
//    var newDataItem = series.dataItems[series.dataItems.length - 1];
//    newDataItem.animate({
//      key: "valueYWorking",
//      to: newValue,
//      from: lastValue,
//      duration: 600,
//      easing: easing
//    });
//
//    // use the bullet of last data item so that a new sprite is not created
//    newDataItem.bullets = [];
//    newDataItem.bullets[0] = lastDataItem.bullets[0];
//    newDataItem.bullets[0].get("sprite").dataItem = newDataItem;
//    // reset bullets
//    lastDataItem.dataContext.bullet = false;
//    lastDataItem.bullets = [];
//
//
//    var animation = newDataItem.animate({
//      key: "locationX",
//      to: 0.5,
//      from: -0.5,
//      duration: 600
//    });
//    if (animation) {
//      var tooltip = xAxis.get("tooltip");
//      if (tooltip && !tooltip.isHidden()) {
//        animation.events.on("stopped", function () {
//          xAxis.updateTooltip();
//        })
//      }
//    }
//  }
//
//
//  // Make stuff animate on load
//  // https://www.amcharts.com/docs/v5/concepts/animations/
//  chart.appear(1000, 100);
//  setTimeout(function () {
//    yAxis.labelsContainer.children.setAll({ visible: false, });
//    xAxis.labelsContainer.children.setAll({ visible: false, });
//    series.strokes.template.setAll({ stroke: "#e7b018" });
//    chart.series.values[0].set("fill", am5.color("#e7b018"));
//  }, 10);
//  root.interfaceColors.set("grid", am5.color("#FFFFFF"));
//
//});
//


// ### Load Chart
// am5.ready(function () {

//     // Create root element
//     // https://www.amcharts.com/docs/v5/getting-started/#Root_element
//     var root = am5.Root.new("loadChart");


//     // Set themes
//     // https://www.amcharts.com/docs/v5/concepts/themes/
//     root.setThemes([
//         am5themes_Animated.new(root)
//     ]);


//     // Generate random data
//     var value = 100;

//     function generateChartData() {
//         var chartData = [];
//         var firstDate = new Date();
//         firstDate.setDate(firstDate.getDate() - 1000);
//         firstDate.setHours(0, 0, 0, 0);

//         for (var i = 0; i < 50; i++) {
//             var newDate = new Date(firstDate);
//             newDate.setSeconds(newDate.getSeconds() + i);

//             value += (Math.random() < 0.5 ? 1 : -1) * Math.random() * 10;

//             chartData.push({
//                 date: newDate.getTime(),
//                 value: value
//             });
//         }
//         return chartData;
//     }

//     var data = generateChartData();


//     // Create chart
//     // https://www.amcharts.com/docs/v5/charts/xy-chart/
//     var chart = root.container.children.push(am5xy.XYChart.new(root, {
//         focusable: true,
//         panX: true,
//         panY: true,
//         wheelX: "panX",
//         wheelY: "zoomX"
//     }));

//     var easing = am5.ease.linear;


//     // Create axes
//     // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
//     var xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
//         maxDeviation: 0.5,
//         groupData: false,
//         extraMax: 0.1, // this adds some space in front
//         extraMin: -0.1, // this removes some space form th beginning so that the line would not be cut off
//         baseInterval: {
//             timeUnit: "second",
//             count: 1
//         },
//         renderer: am5xy.AxisRendererX.new(root, {
//             minGridDistance: 50
//         }),
//         tooltip: am5.Tooltip.new(root, {})
//     }));

//     var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
//         renderer: am5xy.AxisRendererY.new(root, {})
//     }));


//     // Add series
//     // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
//     var series = chart.series.push(am5xy.LineSeries.new(root, {
//         name: "Series 1",
//         xAxis: xAxis,
//         yAxis: yAxis,
//         valueYField: "value",
//         valueXField: "date",
//         tooltip: am5.Tooltip.new(root, {
//             pointerOrientation: "horizontal",
//             labelText: "{valueY}"
//         })
//     }));

//     series.fills.template.setAll({
//         fillOpacity: 0.2,
//         visible: true,

//     });

//     series.strokes.template.setAll({
//         strokeWidth: 1,
//         visible: true,
//         stroke: "#e7b018"

//     });

//     // tell that the last data item must create bullet
//     data[data.length - 1].bullet = true;
//     series.data.setAll(data);


//     // Create animating bullet by adding two circles in a bullet container and
//     // animating radius and opacity of one of them.
//     series.bullets.push(function (root, series, dataItem) {
//         // only create sprite if bullet == true in data context
//         if (dataItem.dataContext.bullet) {
//             var container = am5.Container.new(root, {});
//             var circle0 = container.children.push(am5.Circle.new(root, {
//                 radius: 3,
//                 fill: am5.color("#52c1f1")
//             }));
//             var circle1 = container.children.push(am5.Circle.new(root, {
//                 radius: 3,
//                 fill: am5.color("#52c1f1")
//             }));

//             circle1.animate({
//                 key: "radius",
//                 to: 20,
//                 duration: 1000,
//                 easing: am5.ease.out(am5.ease.cubic),
//                 loops: Infinity
//             });
//             circle1.animate({
//                 key: "opacity",
//                 to: 0,
//                 from: 1,
//                 duration: 1000,
//                 easing: am5.ease.out(am5.ease.cubic),
//                 loops: Infinity
//             });

//             return am5.Bullet.new(root, {
//                 locationX: undefined,
//                 sprite: container
//             })
//         }
//     })


//     // Add cursor
//     // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
//     var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
//         xAxis: xAxis
//     }));
//     cursor.lineY.set("visible", false);


//     // Update data every second
//     setInterval(function () {
//         addData();
//     }, 1000)


//     function addData() {
//         var lastDataItem = series.dataItems[series.dataItems.length - 1];

//         var lastValue = lastDataItem.get("valueY");
//         var newValue = value + ((Math.random() < 0.5 ? 1 : -1) * Math.random() * 5);
//         var lastDate = new Date(lastDataItem.get("valueX"));
//         var time = am5.time.add(new Date(lastDate), "second", 1).getTime();
//         series.data.removeIndex(0);
//         series.data.push({
//             date: time,
//             value: newValue
//         })

//         var newDataItem = series.dataItems[series.dataItems.length - 1];
//         newDataItem.animate({
//             key: "valueYWorking",
//             to: newValue,
//             from: lastValue,
//             duration: 600,
//             easing: easing
//         });

// //    document.getElementById("batText").textContent = "1." + newValue.toFixed(0);
// //
// //    let loadCapVal = 430 + Number(this.newValue.toFixed(0));
// //    let loadCapLine = document.getElementById("loadCapLine");
// //    // let pvCapVal =  420;
// //    //   console.log(pvCapVal + "############")
// //    loadCapLine.style.setProperty('--stroke-dashoffset', loadCapVal)
// //    loadCapLine.style.transition = "all 3s";

//         // use the bullet of last data item so that a new sprite is not created
//         newDataItem.bullets = [];
//         newDataItem.bullets[0] = lastDataItem.bullets[0];
//         newDataItem.bullets[0].get("sprite").dataItem = newDataItem;
//         // reset bullets
//         lastDataItem.dataContext.bullet = false;
//         lastDataItem.bullets = [];


//         var animation = newDataItem.animate({
//             key: "locationX",
//             to: 0.5,
//             from: -0.5,
//             duration: 600
//         });
//         if (animation) {
//             var tooltip = xAxis.get("tooltip");
//             if (tooltip && !tooltip.isHidden()) {
//                 animation.events.on("stopped", function () {
//                     xAxis.updateTooltip();
//                 })
//             }
//         }
//     }


//     // Make stuff animate on load
//     // https://www.amcharts.com/docs/v5/concepts/animations/
//     chart.appear(1000, 100);
//     setTimeout(function () {
//         yAxis.labelsContainer.children.setAll({visible: false, });
//         xAxis.labelsContainer.children.setAll({visible: false, });
//         // series.strokes.template.setAll({ stroke: "#e7b018" });
//         // chart.series.values[0].set("fill", am5.color("#e7b018"));
//     }, 10);
//     root.interfaceColors.set("grid", am5.color("#FFFFFF"));

// });
//






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

//let pvEditBtn = document.getElementById("pvEditBtn");
//pvEditBtn.addEventListener("click", pvCardEdit);
// pvEditBtn.addEventListener("mouseover", pvEditBtnColorChange);
// pvEditBtn.addEventListener("mouseout", pvEditBtnColorChangeMouseout);

// let pvEditBtnColor = document.getElementById("pvEditBtnColor");

// function pvEditBtnColorChangeMouseout() {
//     pvEditBtnColor.style.fill = "#e6e6e6";
// }

// function pvEditBtnColorChange() {
//     pvEditBtnColor.style.fill = "rgb(184, 184, 184)";
// }

//let pvEdit = document.getElementById("cardEditWrapper")
//let screenEdit = document.getElementById("screen")
//
//function pvCardEdit() {
//
//    pvEdit.style.display = "block";
//    pvEdit.style.display = "flex";
//    screenEdit.style.display = "flex";
//    screenEdit.style.display = "block";
//}
//
//let mainCardBtn = document.getElementById("graphIcon");
//mainCardBtn.addEventListener("click", mainCardChange);
//let quickCardBtn = document.getElementById("currentIcon");
//let quickCard = document.getElementById("quickVeiwSvg");
//let mainPvCard = document.getElementById("pvCardSVG")
//quickCardBtn.addEventListener("click", cardChange);
//
//function mainCardChange() {
//    quickCard.style.display = "none";
//    mainPvCard.style.display = "block";
//}
//
//
//
//function cardChange() {
//    quickCard.style.display = "block";
//    mainPvCard.style.display = "none";
//}
//


// setTimeout(style, 2000);

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

// let target = document.getElementById("dailyLoadTxt");
// let chart = document.getElementById("loadChart");

// let sqr = target.getBoundingClientRect();

// let bottom = sqr.bottom;
// let right = sqr.right;

// function resize() {
//   chart.style.bottom = bottom + "px";
//   chart.style.right = right + "px";
// }