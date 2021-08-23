/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


            var sliderOrientation = document.getElementById("orientation");
            var outputOrientation = document.getElementById("valOrient");
            outputOrientation.innerHTML = sliderOrientation.value;

            sliderOrientation.oninput = function () {
                var orient = this.value;
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


                outputOrientation.innerHTML = compas + " - " + orient;
            }

            var sliderTilt = document.getElementById("tilt");
            var outputTilt = document.getElementById("valTilt");
            outputTilt.innerHTML = sliderTilt.value;

            sliderTilt.oninput = function () {
                outputTilt.innerHTML = this.value + " deg";
            }