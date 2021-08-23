/* global console, moment */
var userInput = {
    interval: 0.1,
    sDay: '2018/01/1',
    eDay: '2018/01/2',
    timeZone: Number(document.getElementById("timeZone").value),
    latitude: Number(document.getElementById("latitude").value),
    longitude: Number(document.getElementById("longitude").value),
    timeZone2: Number(document.getElementById("timeZone2").value),
    latitude2: Number(document.getElementById("latitude2").value),
    longitude2: Number(document.getElementById("longitude2").value)
};
var solarPanel = {
    pVEfficiency: 0.284967,
    losses: 1,
    pannelPrperties: function () {
        var PV = this.pVEfficiency * this.losses;
        return PV;
    }
};
var userRoof = {
    roof1: {
        number: 1,
        orientation: 0,
        tilt: 0
    },
    roof2: {
        number: 1,
        orientation: 0,
        tilt: 0
    }
};
var chartData = [];
var chartData2 = [];
var chartData3 = [];
var monthComparison = [];
var monthEnergy;
var comparisonObject;
var arrayBuilder = function (beginDate, endDate, intervalHour, roof, lat, long, tz, yrr) {
    //var testDate = 0;

    var begin = moment(beginDate);
    var end = moment(endDate);
    var date = begin;
    var count = moment.duration(end.diff(begin)).asHours();
    var timeArray = [];
    var dayArray = [];
    var lastRec;
    var beginTimer = new Date();
    for (var i = 0; i < count / intervalHour; i++) {
        var d = {};
        var unix = date._d.getTime();
        d.date = date;
        d.day = date._d;
        d.julianTime = (unix / 86400000.0) + 2440587.5;
        d.julianCentury = (d.julianTime - 2451545) / 36525;
        d.sunPower = sunData(d.julianCentury, lat, long, tz, unix, d.julianTime, roof);
        var avgPower = 0;
        var lastEnrj = 0;
        if (lastRec === undefined) {
            avgPower = d.sunPower / 2;
        } else {
            avgPower = (d.sunPower + lastRec.sunPower) / 2;
            lastEnrj = lastRec.dailyEnergy;
        }

        d.dailyEnergy = avgPower * intervalHour;
        d.dailyEnergy += lastEnrj;
        var temp = 0;
        var monthEnergy = 0;
        var dayInt = moment(date).get('hour');
        if (dayInt % 24 === 0) {
            temp += d.dailyEnergy;
            var obj = {
                energy: temp,
                date: date
            };
            dayArray.push(obj);
            d.dailyEnergy = 0;
        }
        ;
        timeArray.push(d);
        lastRec = d;
        date = moment(date).add(intervalHour, 'hours');
    }


    if (yrr === 1) {
        var mtnh = monthCalc(dayArray);
        return mtnh;
    } else {
        return timeArray;
    }


};

function monthCalc(arr) {
    if (arr.length <= 1 || arr === "undefined") {
        return;
    } else {
        var daysInMonth = dim(moment(userInput.sDay).year());
        var daysInYear = 0;
        for (var i in daysInMonth) {
            daysInYear += daysInMonth[i];
        }

        var jan = daysInMonth[0];
        var janE = 0;
        var feb = jan + daysInMonth[1];
        var febE = 0;
        var mar = feb + daysInMonth[2];
        var marE = 0;
        var apr = mar + daysInMonth[3];
        var aprE = 0;
        var may = apr + daysInMonth[4];
        var mayE = 0;
        var jun = may + daysInMonth[5];
        var junE = 0;
        var jul = jun + daysInMonth[6];
        var julE = 0;
        var aug = jul + daysInMonth[7];
        var augE = 0;
        var sep = aug + daysInMonth[8];
        var sepE = 0;
        var oct = sep + daysInMonth[9];
        var octE = 0;
        var nov = oct + daysInMonth[10];
        var novE = 0;
        var dec = nov + daysInMonth[11];
        var decE = 0;

        var monthEnergyArray = [];
        var yearlyEnergy = 0;

        for (i = 0; i < daysInYear; i++) {
            if (i >= 0 && i <= jan) {
                yearlyEnergy += arr[i].energy;
                janE += arr[i].energy;
            }
            if (i > jan && i <= feb) {
                yearlyEnergy += arr[i].energy;
                febE += arr[i].energy;
            }
            if (i > feb && i <= mar) {
                yearlyEnergy += arr[i].energy;
                marE += arr[i].energy;
            }
            if (i > mar && i <= apr) {
                yearlyEnergy += arr[i].energy;
                aprE += arr[i].energy;
            }
            if (i > apr && i <= may) {
                yearlyEnergy += arr[i].energy;
                mayE += arr[i].energy;
            }
            if (i > may && i <= jun) {
                yearlyEnergy += arr[i].energy;
                junE += arr[i].energy;
            }
            if (i > jun && i <= jul) {
                yearlyEnergy += arr[i].energy;
                julE += arr[i].energy;
            }
            if (i > jul && i <= aug) {
                yearlyEnergy += arr[i].energy;
                augE += arr[i].energy;
            }
            if (i > aug && i <= sep) {
                yearlyEnergy += arr[i].energy;
                sepE += arr[i].energy;
            }
            if (i > sep && i <= oct) {
                yearlyEnergy += arr[i].energy;
                octE += arr[i].energy;
            }
            if (i > oct && i <= nov) {
                yearlyEnergy += arr[i].energy;
                novE += arr[i].energy;
            }
            if (i > nov && i <= dec) {
                yearlyEnergy += arr[i].energy;
                decE += arr[i].energy;
            }

        }

        var january = {
            day: '2018/01/1',
            energy: janE
        }
        var february = {
            day: '2018/02/1',
            energy: febE
        }
        var march = {
            day: '2018/03/1',
            energy: marE
        }
        var april = {
            day: '2018/04/1',
            energy: aprE
        }
        var maY = {
            day: '2018/05/1',
            energy: mayE
        }
        var june = {
            day: '2018/06/1',
            energy: junE
        }
        var july = {
            day: '2018/07/1',
            energy: julE
        }
        var august = {
            day: '2018/08/1',
            energy: augE
        }
        var september = {
            day: '2018/09/1',
            energy: sepE
        }
        var october = {
            day: '2018/10/1',
            energy: octE
        }
        var november = {
            day: '2018/11/1',
            energy: novE
        }
        var december = {
            day: '2018/12/1',
            energy: decE
        }




        monthEnergyArray.push(january);
        monthEnergyArray.push(february);
        monthEnergyArray.push(march);
        monthEnergyArray.push(april);
        monthEnergyArray.push(maY);
        monthEnergyArray.push(june);
        monthEnergyArray.push(july);
        monthEnergyArray.push(august);
        monthEnergyArray.push(september);
        monthEnergyArray.push(october);
        monthEnergyArray.push(november);
        monthEnergyArray.push(december);

        var resultYearly1 = document.getElementById("yield");
        var carbonO1 = document.getElementById("co2");
        resultYearly1.innerHTML = ((yearlyEnergy + 10000 * 12) / 1000).toFixed(0);
        carbonO1.innerHTML = (yearlyEnergy / 1000 * 0.240).toFixed(0);


        return monthEnergyArray;
    }
}

function dim(year) {
    var month = [];
    for (var i = 0; i < 12; i++) {
        var start = moment([year, i, 1])
        var end = moment([year, (i + 1), 1])
        var days = moment.duration(end.diff(start)).asDays();
        if (i === 11) {
            days = 30;
        }
        month.push(days);
    }

    return month;
}

var rad = function (degree) {
    var radians = degree * Math.PI / 180;
    return radians;
};
var deg = function (radians) {
    var degrees = radians * 180 / Math.PI;
    return degrees;
};
var sunData = function (julianCentury, latitude, longitude, timeZone, unix, julianDay, roof) {
    var geomMeanLongSun = (280.46646 + julianCentury * (36000.76983 + julianCentury * 0.0003032)) % 360;
    var geomMeanAnomSun = 357.52911 + julianCentury * (35999.05029 - 0.0001537 * julianCentury);
    var eccentEarthOrbit = 0.016708634 - julianCentury * (0.000042037 + 0.0000001267 * julianCentury);
    var sunEqCtr = Math.sin(rad(geomMeanAnomSun)) * (1.914602 - julianCentury * (0.004817 + 0.000014 * julianCentury))
            + Math.sin(rad(2 * geomMeanAnomSun)) * (0.019993 - 0.000101 * julianCentury) + Math.sin(rad(3 * geomMeanAnomSun)) * 0.000289;
    var sunTrueLong = sunEqCtr + geomMeanLongSun;
    var sunTrueAnom = sunEqCtr + geomMeanAnomSun;
    var sunRadVector = (1.000001018 * (1 - eccentEarthOrbit * eccentEarthOrbit)) / (1 + eccentEarthOrbit * Math.cos(rad(sunTrueAnom)));
    var sunAppLong = sunTrueLong - 0.00569 - 0.00478 * Math.sin(rad(125.04 - 1934.136 * julianCentury));
    var meanObliqEcliptic = 23 + (26 + ((21.448 - julianCentury * (46.815 + julianCentury * (0.00059 - julianCentury * 0.001813)))) / 60) / 60;
    var obliqCorr = meanObliqEcliptic + 0.00256 * Math.cos(rad(125.04 - 1934.136 * julianCentury));
    var sunDeclin = deg(Math.asin(Math.sin(rad(obliqCorr)) * Math.sin(rad(sunAppLong))));
    var varY = Math.tan(rad(obliqCorr / 2)) * Math.tan(rad(obliqCorr / 2));
    var eqOfTime = 4 * deg(varY * Math.sin(2 * rad(geomMeanLongSun)) - 2 * eccentEarthOrbit * Math.sin(rad(geomMeanAnomSun)) + 4 * eccentEarthOrbit * varY * Math.sin(rad(geomMeanAnomSun)) * Math.cos(2 * rad(geomMeanLongSun)) - 0.5 * varY * varY * Math.sin(4 * rad(geomMeanLongSun)) - 1.25 * eccentEarthOrbit * eccentEarthOrbit * Math.sin(2 * rad(geomMeanAnomSun)));
    var hASunrinse = deg(Math.acos(Math.cos(rad(90.833)) / (Math.cos(rad(latitude)) * Math.cos(rad(sunDeclin))) - Math.tan(rad(latitude)) * Math.tan(rad(sunDeclin))));
    var xx = (((unix - (60 * timeZone * 1000)) % 86400000) / 86400000) * 1440;
    var trueSolarTime = (xx + eqOfTime + 4 * longitude) % 1440 + timeZone;
    if (trueSolarTime / 4 < 0) {
        var hourAngle = trueSolarTime / 4 + 180;
    } else {
        hourAngle = trueSolarTime / 4 - 180;
    }

    var solarZenithAngle = deg(Math.acos(Math.sin(rad(latitude)) * Math.sin(rad(sunDeclin)) + Math.cos(rad(latitude)) * Math.cos(rad(sunDeclin)) * Math.cos(rad(hourAngle))));
    var solarElevationAngle = 90 - solarZenithAngle;
    if (hourAngle > 0) {
        var azimuth = (deg(Math.acos(((Math.sin(rad(latitude)) * Math.cos(rad(solarZenithAngle))) - Math.sin(rad(sunDeclin))) / (Math.cos(rad(latitude)) * Math.sin(rad(solarZenithAngle))))) + 180) % 360;
    } else {
        azimuth = (540 - deg(Math.acos(((Math.sin(rad(latitude)) * Math.cos(rad(solarZenithAngle))) - Math.sin(rad(sunDeclin))) / (Math.cos(rad(latitude)) * Math.sin(rad(solarZenithAngle))))) % 360) - 360;
    }

    var eO = 1367 * (1 + 0.034 * Math.cos((2 * 3.14159 * julianDay) / 365));
    ////////////////////////////////////////////////////////////////////////////////////////////////
    if (solarElevationAngle >= 30) {
        var mH = 1 / Math.sin(rad(solarElevationAngle));
    } else {
        mH = Math.pow((1229 + Math.pow((614 * Math.sin(rad(solarElevationAngle))), 2)), (0.5)) - 614 * Math.sin(rad(solarElevationAngle));
    }
    ///////////////////////////////////////////////////////////////////////////////////////////////        
    var tDir = 0.56 * (Math.exp(-0.56 * mH) + Math.exp(-0.096 * mH));
    var tDif = 0.271 - 0.2939 * tDir;
    var eDir = eO * tDir * Math.sin(rad(solarElevationAngle)) * 0.85;
    var eDif = 0.5 * eO * Math.sin(rad(solarElevationAngle)) * ((1 - tDif) / (1 - 1.4 * Math.log(tDif / mH))) * 0.75;
    var eG = eDir + eDif;
    if (eG < 0) {
        var irradiation = 0;
    } else {
        irradiation = eG;
    }

    var panel1 = pVEnergy(irradiation, solarZenithAngle, solarElevationAngle, userRoof.roof1.tilt, userRoof.roof1.orientation, userRoof.roof1.number, azimuth);
    var panel2 = pVEnergy(irradiation, solarZenithAngle, solarElevationAngle, userRoof.roof2.tilt, userRoof.roof2.orientation, userRoof.roof2.number, azimuth);
    var panelCombine = panel1 + panel2;
    if (roof === 1) {
        var print = panel1;
    }

    if (roof === 2) {
        var print = panel2;
    }

    if (roof === 3) {
        var print = panelCombine;
    }



    return print;
};
var pVEnergy = function pVstuff(power, zenith, elevation, tilt, orientation, numberPV, azimuth) {

    var energy = solarPanel.losses * solarPanel.pVEfficiency * power * numberPV;
    var incident = 90 - deg(Math.acos(Math.cos(rad(zenith)) * Math.cos(rad(tilt)) + Math.sin(rad(zenith)) * Math.sin(rad(tilt))));
    var sIn = energy / Math.sin(rad(elevation));
    var sMod = sIn * (Math.cos(rad(elevation)) * Math.sin(rad(tilt)) * Math.cos(rad(orientation - azimuth)) + Math.sin(rad(elevation)) * Math.cos(rad(tilt)));
    if (sMod < 0) {
        var sModule = 0;
    } else {
        sModule = sMod;
    }

    return Number((sModule).toFixed(2));
};

function compass(orient) {
    var compas;
    if ((orient >= 0 && orient <= 11) || (orient >= 349 && orient <= 360)) {
        compas = "N";
    }

    if ((orient > 11 && orient <= 33)) {
        compas = "NNE";
    }

    if ((orient > 33 && orient <= 56)) {
        compas = "NE";
    }

    if ((orient > 56 && orient <= 79)) {
        compas = "ENE";
    }

    if ((orient > 79 && orient <= 101)) {
        compas = "E";
    }

    if ((orient > 101 && orient <= 124)) {
        compas = "ESE";
    }

    if ((orient > 124 && orient <= 146)) {
        compas = "SE";
    }

    if ((orient > 146 && orient <= 169)) {
        compas = "SSE";
    }

    if ((orient > 169 && orient <= 191)) {
        compas = "S";
    }

    if ((orient > 191 && orient <= 214)) {
        compas = "SSW";
    }

    if ((orient > 214 && orient <= 236)) {
        compas = "SW";
    }

    if ((orient > 236 && orient <= 259)) {
        compas = "WSW";
    }

    if ((orient > 259 && orient <= 281)) {
        compas = "W";
    }

    if ((orient > 281 && orient <= 303)) {
        compas = "WNW";
    }

    if ((orient > 303 && orient <= 326)) {
        compas = "NW";
    }

    if ((orient > 326 && orient < 349)) {
        compas = "NNW";
    }

    return compas;
}

function init() {

    var sliderOrientation = document.getElementById("orientation");
    var sliderOrientation2 = document.getElementById("orientation2");
    var outputOrientation = document.getElementById("valOrient");
    var outputOrientation2 = document.getElementById("valOrient2");
    outputOrientation.innerHTML = sliderOrientation.value;
    outputOrientation2.innerHTML = sliderOrientation2.value;
    
    document.getElementById("latitude").onchange = function () {
        userInput.latitude = Number(document.getElementById("latitude").value);
        recalculateData(userInput.sDay, userInput.eDay);
        recalculateDataYear();
    };
    document.getElementById("longitude").onchange = function () {
        userInput.latitude = Number(document.getElementById("longitude").value);
        recalculateData(userInput.sDay, userInput.eDay);
        recalculateDataYear();
    };
    document.getElementById("timeZone").onchange = function () {
        userInput.latitude = Number(document.getElementById("timeZone").value);
        recalculateData(userInput.sDay, userInput.eDay);
    };
    document.getElementById("latitude2").onchange = function () {
        userInput.latitude2 = Number(document.getElementById("latitude2").value);
        recalculateDataYear();
    };
    document.getElementById("longitude2").onchange = function () {
        userInput.latitude2 = Number(document.getElementById("longitude2").value);
        recalculateDataYear();
    };
    document.getElementById("timeZone2").onchange = function () {
        userInput.latitude2 = Number(document.getElementById("timeZone2").value);
        recalculateDataYear();
    };
    sliderOrientation.oninput = function () {
        var orient = this.value;
        var compas = compass(orient);
        compassArrows(orient, 'orangeArrow');
        outputOrientation.innerHTML = compas + " - " + orient;
    };
    sliderOrientation2.oninput = function () {
        var orient = this.value;
        var compas = compass(orient);
        compassArrows(orient, "yellowArrow");
        outputOrientation2.innerHTML = compas + " - " + orient;
    };
    sliderOrientation.onmouseup = function () {
        userRoof.roof1.orientation = Number(this.value);
        recalculateData(userInput.sDay, userInput.eDay);
        recalculateDataYear();
    };
    sliderOrientation2.onmouseup = function () {
        userRoof.roof2.orientation = Number(this.value);
        recalculateData(userInput.sDay, userInput.eDay);
        recalculateDataYear();
    };
    var sliderTilt = document.getElementById("tilt");
    var outputTilt = document.getElementById("valTilt");
    outputTilt.innerHTML = sliderTilt.value;
    var sliderTilt2 = document.getElementById("tilt2");
    var outputTilt2 = document.getElementById("valTilt2");
    outputTilt2.innerHTML = sliderTilt2.value;
    sliderTilt.oninput = function () {
        var tilt = this.value;
        outputTilt.innerHTML = tilt + " deg";
        tiltPanel(tilt, "orangeTilt");
    };
    sliderTilt2.oninput = function () {
        var tilt = this.value;
        outputTilt2.innerHTML = tilt + " deg";
        tiltPanel(tilt, "yellowTilt");
    };
    sliderTilt.onmouseup = function () {
        userRoof.roof1.tilt = Number(this.value);
        recalculateData(userInput.sDay, userInput.eDay);
        recalculateDataYear();
    };
    sliderTilt2.onmouseup = function () {
        userRoof.roof2.tilt = Number(this.value);
        recalculateData(userInput.sDay, userInput.eDay);
        recalculateDataYear();
    };


}
;

function dropdownSelect(value) {
    solarPanel.pVEfficiency = value;
    console.log('hello');
    recalculateData(userInput.sDay, userInput.eDay);
    recalculateDataYear();
}

function recalculateData(s, e) {
    var arr1 = arrayBuilder(s, e, userInput.interval, 1, userInput.latitude, userInput.longitude, userInput.timeZone);
    var arr2 = arrayBuilder(s, e, userInput.interval, 2, userInput.latitude2, userInput.longitude2, userInput.timeZone2);
    chartData.length = 0;
    for (var i = 0; i < arr1.length; i++) {
        var t = {};
        t.day = arr1[i].day;
        t.power1 = arr1[i].sunPower;
        t.power2 = arr2[i].sunPower;
        chartData.push(t);
    }

    var energy1 = arr1[arr1.length - 1].dailyEnergy;
    var energy2 = arr2[arr1.length - 1].dailyEnergy;
    myChart.validateData();
    myChart.labels[0].text("roof1 energy: " + (energy1 / 1000).toFixed(2) + "kWh");
    myChart.labels[1].text("roof2 energy: " + (energy2 / 1000).toFixed(2) + "kWh");
}

function recalculateDataYear() {
    var arr1 = arrayBuilder('2018/01/1', '2019/01/1', 1, 1, userInput.latitude, userInput.longitude, userInput.timeZone, 1);
    var arr2 = arrayBuilder('2018/01/1', '2019/01/1', 1, 2, userInput.latitude2, userInput.longitude2, userInput.timeZone2, 1);
    chartData3.length = 0;
    for (var i = 0; i < arr1.length; i++) {
        var t = {};
        t.day = arr1[i].day;
        t.power1 = arr1[i].energy;
        t.power2 = arr2[i].energy;
        chartData3.push(t);
    }


    myChart3.validateData();
//    myChart3.labels[0].text("roof1 energy: " + (energy1 / 1000).toFixed(2) + "kWh");
//    myChart3.labels[1].text("roof2 energy: " + (energy2 / 1000).toFixed(2) + "kWh");
}
;
function loading() {
    var arr1 = arrayBuilder(userInput.sDay, userInput.eDay, userInput.interval, 1, userInput.latitude, userInput.longitude, userInput.timeZone);
    var arr2 = arrayBuilder(userInput.sDay, userInput.eDay, userInput.interval, 2, userInput.latitude2, userInput.longitude2, userInput.timeZone2);
    chartData.length = 0;
    for (var i = 0; i < arr1.length; i++) {
        var t = {};
        t.day = arr1[i].day;
        t.power1 = arr1[i].sunPower;
        t.power2 = arr2[i].sunPower;
        chartData.push(t);
    }

    var energy1 = arr1[arr1.length - 1].dailyEnergy;
    var energy2 = arr2[arr1.length - 1].dailyEnergy;
    myChart.validateData();
    myChart.labels[0].text("roof1 energy: " + (energy1 / 1000).toFixed(2) + "kWh");
    myChart.labels[1].text("roof2 energy: " + (energy2 / 1000).toFixed(2) + "kWh");
    recalculateDataYear();
}
;
function changeDate() {
    var start = moment(document.getElementById("cal").value);
    var end = moment(start).add(1, 'days');
    var arr1 = arrayBuilder(start, end, userInput.interval, 1, userInput.latitude, userInput.longitude, userInput.timeZone);
    var arr2 = arrayBuilder(start, end, userInput.interval, 2, userInput.latitude2, userInput.longitude2, userInput.timeZone2);
    chartData.length = 0;
    for (var i = 0; i < arr1.length; i++) {
        var t = {};
        t.day = arr1[i].day;
        t.power1 = arr1[i].sunPower;
        t.power2 = arr2[i].sunPower;
        chartData.push(t);
    }

    var energy1 = arr1[arr1.length - 1].dailyEnergy;
    var energy2 = arr2[arr1.length - 1].dailyEnergy;
    var month = start.month();
    var monthVal;
    switch (month) {
        case 0:
            monthVal = "January";
            break;
        case 1:
            monthVal = "February";
            break;
        case 2:
            monthVal = "March";
            break;
        case 3:
            monthVal = "April";
            break;
        case 4:
            monthVal = "May";
            break;
        case 5:
            monthVal = "June";
            break;
        case 6:
            monthVal = "July";
            break;
        case 7:
            monthVal = "August";
            break;
        case 8:
            monthVal = "September";
            break;
        case 9:
            monthVal = "October";
            break;
        case 10:
            monthVal = "November";
            break;
        case 11:
            monthVal = "December";
            break;
    }



    myChart.titles[0].text = "Typical Power in " + monthVal;
    myChart.labels[0].text("roof1 energy: " + (energy1 / 1000).toFixed(2) + "kWh");
    myChart.labels[1].text("roof2 energy: " + (energy2 / 1000).toFixed(2) + "kWh");
    myChart.validateNow();
    myChart.validateData();
}
;
var myChart = AmCharts.makeChart("chartdiv",
        {
            "type": "serial",
            "categoryField": "day",
            "dataDateFormat": "hh",
            "startDuration": 0,
            "categoryAxis": {
                "gridPosition": "start",
                "minPeriod": "ss",
                "parseDates": true
            },
            "chartCursor": {
                "enabled": true
            },
            "chartScrollbar": {
                "enabled": true
            },
            "trendLines": [],
            "graphs": [
                {
                    "id": "AmGraph-1",
                    "title": "Roof 1",
                    "lineThickness": 6,
                    "valueField": "power1"
                },
                {
                    "id": "AmGraph-3",
                    "title": "Roof 2",
                    "lineThickness": 6,
                    "valueField": "power2"
                }
            ],
            "guides": [],
            "legend": {
                "enabled": true,
                "valueWidth": 0
            },
            "valueAxes": [
                {
                    "id": "ValueAxis-1",
                    "title": "W"
                }
            ],
            "allLabels": [
                {
                    "id": "Label-1",
                    "text": "Roof1 energy: " + "daily",
                    "x": "81%",
                    "y": "22%"
                },
                {
                    "id": "Label-2",
                    "text": "Roof2 energy: " + "daily",
                    "x": "81%",
                    "y": "26%"
                }
            ],
            "balloon": {},
            "titles": [
                {
                    "id": "Title-1",
                    "size": 20,
                    "text": "Typical Power in January"
                }
            ],
            "dataProvider": chartData
        }
);
var myChart3 = AmCharts.makeChart("chartdiv3",
        {
            "type": "serial",
            "categoryField": "day",
            "dataDateFormat": "YYYY-MM-DD",
            "startDuration": 0,
            "categoryAxis": {
                "gridPosition": "start",
                "minPeriod": "MM",
                "parseDates": true
            },
            "chartCursor": {
                "enabled": true
            },
            "chartScrollbar": {
                "enabled": true
            },
            "trendLines": [],
            "graphs": [
                {
                    "id": "AmGraph-1",
                    "fillAlphas": 1,
                    "title": "Roof 1",
                    "type": "column",
                    "valueField": "power1"
                },
                {
                    "id": "AmGraph-3",
                    "fillAlphas": 1,
                    "title": "Roof 2",
                    "type": "column",
                    "valueField": "power2"
                }
            ],
            "guides": [],
            "legend": {
                "enabled": true,
                "valueWidth": 0
            },
            "valueAxes": [
                {
                    "id": "ValueAxis-1",
                    "title": "kWh"
                }
            ],
            "allLabels": [

            ],
            "balloon": {},
            "titles": [
                {
                    "id": "Title-1",
                    "size": 20,
                    "text": "Typical Energy Production per Month"
                }
            ],
            "dataProvider": chartData3
        }
);
function compassArrows(orient, color) {
    var b = SVG.get(color).rotate(orient, SVG.get(color).x() + 6, SVG.get(color).y() + 40)
}

function tiltPanel(tilt, color) {
    var a = SVG.get(color).rotate(-tilt, SVG.get(color).x(), SVG.get(color).y())
}

function param2String(obj) {
    var str = '';
    for (var x in obj) {
        if (obj.hasOwnProperty(x)) {
            str += x + ':' + obj[x] + ',';
        }
    }
    string2obj(str)

    return str;
}

function string2obj(student) {
    var string = student;

    var arr = string.split(':');
    var empty = {};
    arr.forEach(function (el, i) {
        var b = i + 1, c = b / 2, e = c.toString();
        if (e.indexOf('.') != -1) {
            empty[el] = arr[i + 1];
        }
    });
    console.log(empty)
}
var student = {
    first: 'Matthew',
    last: 'Van Der Linden',
    age: 23,
    born: new Date('1995-02-12'),
    friend: {
        first: 'Matthew',
        last: 'Van Der Linden',
        age: 23,
        born: new Date('1995-02-12')
    }
}
function objectCreate() {
    var student = {
        first: 'Matthew',
        last: 'Van Der Linden',
        age: 23,
        born: new Date('1995-02-12')
    }
    var str = param2String(student);
    console.log(str);





    return
}

objectCreate();
document.addEventListener("DOMContentLoaded", function (event) {
//do work
    init();
});
