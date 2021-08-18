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
    document.getElementById("hour").value.innerHTML = d.getHours();
    document.getElementById("minutes").innerHTML = d.getMinutes();
    document.getElementById("seconds").innerHTML = d.getSeconds();
}

function checkSunPos(){
    
    let hour = document.getElementById('hour');
    let currnetVal = hour.value;
    
    if (currnetVal >= '12:00'){
        console.log('Hour is 16')
        document.getElementById('svg7').style.transform='rotate(-50deg)';
    }

}


function getUtcOffset() {
    let d = new Date();
    let n = d.getTimezoneOffset();
    document.getElementById("UCT").innerHTML = n;
}

let elem1 = document.getElementById('sunC');

let rangeValue1 = function () {
    let newValue1 = elem1.value;
    let target = document.querySelector('.value1');
    target.innerHTML = + newValue1 + '°';
    let circle1 = document.getElementById("svg6");
    
    circle1.style.transform = 'rotate(' + newValue1 + 'deg)';
}
elem1.addEventListener("input", rangeValue1);


// let element = document.getElementById('sunC')

// let sunValue = function() {
//     let newValue1 = element.value;
//     let target = document.getElementById('value1');
//     target.innerHTML = + newValue1;
// }



let elem = document.querySelector('input[type="range"]');

let rangeValue = function () {
    let newValue = elem.value;
    let target = document.querySelector('.value');
    target.innerHTML = + newValue + '°';
    let circle = document.getElementById("svg5");
    var compas;
    circle.style.transform = 'rotate(' + newValue + 'deg)';


    if ((newValue >= 0 && newValue <= 11) || (newValue >= 349 && newValue <= 360)) {
        compas = "N";
        target.innerHTML = compas + newValue + '°';

    }
    if ((newValue > 11 && newValue <= 33)) {
        compas = "NNE";
        target.innerHTML = compas + newValue + '°';
    }
    if ((newValue > 33 && newValue <= 56)) {
        compas = "NE";
        target.innerHTML = compas + newValue + '°';
    }
    if ((newValue > 56 && newValue <= 79)) {
        compas = "ENE";
        target.innerHTML = compas + newValue + '°';
    }
    if ((newValue > 79 && newValue <= 101)) {
        compas = "E";
        target.innerHTML = compas + newValue + '°';
    }
    if ((newValue > 101 && newValue <= 124)) {
        compas = "ESE";
        target.innerHTML = compas + newValue + '°';
    }
    if ((newValue > 101 && newValue <= 124)) {
        compas = "ESE";
        target.innerHTML = compas + newValue + '°';
    }
    if ((newValue > 124 && newValue <= 146)) {
        compas = "SE";
        target.innerHTML = compas + newValue + '°';
    }
    if ((newValue > 146 && newValue <= 169)) {
        compas = "SSE";
        target.innerHTML = compas + newValue + '°';
    }
    if ((newValue > 169 && newValue <= 191)) {
        compas = "S";
        target.innerHTML = compas + newValue + '°';
    }
    if ((newValue > 191 && newValue <= 214)) {
        compas = "SSW";
        target.innerHTML = compas + newValue + '°';
    }
    if ((newValue > 214 && newValue <= 236)) {
        compas = "SW";
        target.innerHTML = compas + newValue + '°';
    }
    if ((newValue > 236 && newValue <= 259)) {
        compas = "WSW";
        target.innerHTML = compas + newValue + '°';
    }
    if ((newValue > 259 && newValue <= 281)) {
        compas = "W";
        target.innerHTML = compas + newValue + '°';
    }
    if ((newValue > 281 && newValue <= 303)) {
        compas = "WNW";
        target.innerHTML = compas + newValue + '°';
    }
    if ((newValue > 303 && newValue <= 326)) {
        compas = "NW";
        target.innerHTML = compas + newValue + '°';
    }
    if ((newValue > 326 && newValue < 349)) {
        compas = "NNW";
        target.innerHTML = compas + newValue + '°';
    }



}

elem.addEventListener("input", rangeValue);

// function compass(newValue) {
//     var compas;
//     if ((newValue >= 0 && newValue <= 11) || (newValue >= 349 && newValue <= 360)) {
//         compas = "N";
//         console.log('N')
//     }

//     

//     

//    

//     

//     // 
//     // 

//     // 
//     // 

//     // 

//     // 

//     // 

//     // 

//     // 

//     // 

//     // 

//     return compas;

// }




// function oriantaion(){
//     let slider = document.getElementById('panelOriantaion');
//     let sliderOutput = document.getElementById('panelBox');

//     sliderOutput.innerHTML = slider.value;




// }
// let rotateAngle = slider.value;

// function rotate (){
// let panel = document.getElementById('path3086')

// panel.setAttribute('style', 'transform: rotate(slider.value)')

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
