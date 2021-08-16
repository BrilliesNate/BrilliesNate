/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* 
    Created on : 13 Aug 2021, 08:35:55
    Author     : Nathan Brill
*/

let lat = document.getElementById("lat");
let long = document.getElementById('long')

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    lat.innerHTML = position.coords.latitude;
    long.innerHTML = position.coords.longitude;
}

function getDateTime() {
    let d = new Date();

    // Getting Date Year/Month/Day
    // document.getElementById("year").innerHTML = d.getFullYear();
    // document.getElementById("month").innerHTML = d.getMonth() +1;
    // document.getElementById("day").innerHTML = d.getDate();
    // Getting Time Hours/Minutes/Seconds
    document.getElementById("hour").innerHTML = d.getHours();
    document.getElementById("minutes").innerHTML = d.getMinutes();
    document.getElementById("seconds").innerHTML = d.getSeconds();
}

function getUtcOffset() {
    let d = new Date();
    let n = d.getTimezoneOffset();
    document.getElementById("UCT").innerHTML = n;
}

function oriantaion(){
    let slider = document.getElementById('panelOriantaion');
    let sliderOutput = document.getElementById('panelBox');

    sliderOutput.innerHTML = slider.value;

}
let rotateAngle = slider.value;

function rotate (){
let panel = document.getElementById('path3086')

panel.setAttribute('style', 'transform: rotate')

}



// function compass(orient) {
//     var compas;
//     if ((orient >= 0 && orient <= 11) || (orient >= 349 && orient <= 360)) {
//         compas = "N";
//     }

//     if ((orient > 11 && orient <= 33)) {
//         compas = "NNE";
//     }

//     if ((orient > 33 && orient <= 56)) {
//         compas = "NE";
//     }

//     if ((orient > 56 && orient <= 79)) {
//         compas = "ENE";
//     }

//     if ((orient > 79 && orient <= 101)) {
//         compas = "E";
//     }

//     if ((orient > 101 && orient <= 124)) {
//         compas = "ESE";
//     }

//     if ((orient > 124 && orient <= 146)) {
//         compas = "SE";
//     }

//     if ((orient > 146 && orient <= 169)) {
//         compas = "SSE";
//     }

//     if ((orient > 169 && orient <= 191)) {
//         compas = "S";
//     }

//     if ((orient > 191 && orient <= 214)) {
//         compas = "SSW";
//     }

//     if ((orient > 214 && orient <= 236)) {
//         compas = "SW";
//     }

//     if ((orient > 236 && orient <= 259)) {
//         compas = "WSW";
//     }

//     if ((orient > 259 && orient <= 281)) {
//         compas = "W";
//     }

//     if ((orient > 281 && orient <= 303)) {
//         compas = "WNW";
//     }

//     if ((orient > 303 && orient <= 326)) {
//         compas = "NW";
//     }

//     if ((orient > 326 && orient < 349)) {
//         compas = "NNW";
//     }

//     return compas;

// }

// function rotating() {

// }



// var sliderOrientation = document.getElementById("panelOriantaion");
// var outputOrientation = document.getElementById("long");

// let panel = document.getElementById('path3086');

// outputOrientation.innerHTML = sliderOrientation.value;
// sliderOrientation.oninput = function () {
//     var orient = sliderOrientation.value;
//     var compas = compass(orient);
//     compassArrows(orient);
//     outputOrientation.innerHTML = compas + " - " + orient;
// }

// function compassArrows(orient, color) {
//     var b = panel.rotate(orient, panel.x() + 6, panel.y() + 40)
// }

// let circle = document.getElementById("image2717")

// circle.style.transform = 'rotate:(100deg)';




// let data = {
//     date: new Date(),
//     time: new Date().getTime(),
//     julianDay: 2455386,
//     julianCentury: 0.10468889,
//     geomMeanLongSun: 89.3396,
//     geamMeanAnomSun: 4126.222,
//     eccentEarthOrbit: 0.016704,
//     solar: {
//         solarNoon: '13:01:42'
//     },
//     obliq: {
//         meanObliq: 23.43793,
//         obliqCorr: 23.43849
//     },
//     sun: {
//         sunTrueLong: 89.78646,
//         sunTrueAnom: 4126.669,
//         sunRadVextor: 1.01624,
//         sunAppLong: 89.78544
//     }

// }

// (function (root) {

//     let Solyc = function () {
//         this.result = 0;
//       //  init();
//     };

//     let fn = Solyc.prototype;

//     fn.getDaily = function (lat, long) {
//         return getJulianDay.call(this, lat, long);
//     };

//     fn.recalculate = function (lat, long) {
//         this.lat = lat;
//         this.long = long;
//         this.result = lat - long;
//         return this;

//     };

//     fn.date = function () {
//         let d = new Date();
//         return d;
//     };

//     fn.time = function () {
//         let d = new Date();
//         let t = d.getTime();
//         return t;
//     };

//  //   function init() {

//    // }



//     function getJulianDay() {
//         this.result = this.lat - this.long;
//         return result;
//     }

//     root.Solyc = new Solyc();
// }(window))
