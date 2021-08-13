/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
/* 
    Created on : 13 Aug 2021, 08:35:55
    Author     : Nathan Brill
*/

let data = {
    date: new Date(),
    time: new Date().getTime(),
    julianDay: 2455386,
    julianCentury: 0.10468889,
    geomMeanLongSun: 89.3396,
    geamMeanAnomSun: 4126.222,
    eccentEarthOrbit: 0.016704,
    solar: {
        solarNoon: '13:01:42'
    },
    obliq: {
        meanObliq: 23.43793,
        obliqCorr: 23.43849
    },
    sun: {
        sunTrueLong: 89.78646,
        sunTrueAnom: 4126.669,
        sunRadVextor: 1.01624,
        sunAppLong: 89.78544
    }

}

(function (root) {

    let Solyc = function () {
        this.result = 0;
      //  init();
    };

    let fn = Solyc.prototype;

    fn.getDaily = function (lat, long) {
        return getJulianDay.call(this, lat, long);
    };

    fn.recalculate = function (lat, long) {
        this.lat = lat;
        this.long = long;
        this.result = lat - long;
        return this;

    };

    fn.date = function () {
        let d = new Date();
        return d;
    };

    fn.time = function () {
        let d = new Date();
        let t = d.getTime();
        return t;
    };

 //   function init() {

   // }



    function getJulianDay() {
        this.result = this.lat - this.long;
        return result;
    }

    root.Solyc = new Solyc();
}(window));
