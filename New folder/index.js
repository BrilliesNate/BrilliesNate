
let styleDiv = document.getElementById("container");



styleObj = {


    size: function style() {
        styleDiv.style.height = "600px";
        styleDiv.style.width = "600px";
        styleDiv.style.transition = "all 3s";

    },
    color: {
        blue: function style() {

            styleDiv.style.backgroundColor = 'blue';
        },
        green: function style() {
            styleDiv.style.backgroundColor = 'green';
        }
    },
    card: function style() {
        styleDiv.style = "box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;"
    },
    split: function style() {
        styleDiv.style.height = "150px";
        styleDiv.style.width = "300px";
        let newDiv = document.createElement("div");

        newDiv.style.height = "150px"
        newDiv.style.width = "300px"
        newDiv.style.backgroundColor = "red"
        newDiv.style.marginTop = "10px"

        document.body.appendChild(newDiv);

    }

}


function changeDivStyle(color, size, split,) {
    if (color === "black") {

        // async function colorChange () {
        //    styleDiv.style.backgroundColor = 'black'

        // await
        // }
        // styleDiv.style.backgroundColor = 'black';
        // styleDiv.style.backgroundColor = 'yellow';
        // styleDiv.style.backgroundColor = 'red';
        // styleDiv.style.backgroundColor = 'green';
    }
    if (size === "*2") {
        styleObj.size();
    }
    if (color === "green") {
        styleObj.color.green();
    }
    if (size === "\2") {
        styleDiv.style.height = "150px";
        styleDiv.style.width = "150px";
        // styleDiv.style.transition = "all 2s";
    }

    if (split === "split") {
        styleObj.split();
    }

}

function moveDiv(moveRight, moveDown, amount) {

    if (moveDown === "move down") {
        let id = null;
        // const elem = document.getElementById("animate");
        let pos = 0;
        clearInterval(id);
        id = setInterval(frame, 10);
        function frame() {
            if (pos == amount) {
                clearInterval(id);
            } else {
                pos++;
                // styleDiv.style.top = pos + "px";
                styleDiv.style.top = pos + "px";
            }
        }
    }

    if (moveRight === "moveRight") {
        // console.log('Moving right');
        let id = null;
        // const elem = document.getElementById("animate");
        let pos = 127;
        clearInterval(id);
        id = setInterval(frame, 10);
        function frame() {



            if (pos == 350) {
                clearInterval(id);
            } else {
                pos++;
                // styleDiv.style.top = pos + "px";
                styleDiv.style.left = pos + "px";
            }
        }
    }
}


// // variable to store our intervalID
// let nIntervId;

// function changeColor() {
//     // check if already an interval has been set up
//     if (!nIntervId) {
//         nIntervId = setInterval(flashText, 500);
//     }
// }

// function flashText() {
//     const oElem = document.getElementById("my_box");
//     if (oElem.className === "greenColor") {
//         oElem.className = "redColor";
//     }
//     if (oElem.className === "greenColor") {
//         oElem.className = "yellowColor";
//     } else {
//         oElem.className = "greenColor";
//     }
// }

// function stopTextColor() {
//     clearInterval(nIntervId);
//     // release our intervalID from the variable
//     nIntervId = null;
// }

// document.getElementById("start").addEventListener("click", changeColor);
// document.getElementById("stop").addEventListener("click", stopTextColor);


// function siz1() {
//     styleDiv.style.height = "300px";
//     styleDiv.style.width = "300px";
//     console.log('1');
// }
// function siz2() {
//     styleDiv.style.height = "400px";
//     styleDiv.style.width = "400px";
//     console.log('2');
// }
// function siz3() {
//     styleDiv.style.height = "200px";
//     styleDiv.style.width = "200px";
//     console.log('3');
// }
// function siz4() {
//     styleDiv.style.height = "100px";
//     styleDiv.style.width = "100px";
//     console.log('4');
// }

// var sizes = [siz1(), siz2(), siz3(), siz4()];
// var i = 0;
// function change() {
//     sizes[i];
//     i++;

//     if (i > sizes.length - 1) {
//         i = 0;
//     }
// }
// setInterval(change, 1000);


let p1 = document.getElementById('pl1');
let p2 = document.getElementById('pl2');
let p3 = document.getElementById('pl3');
let p4 = document.getElementById('pl4');
let p5 = document.getElementById('pl5');
let p6 = document.getElementById('pl6');
let p7 = document.getElementById('pl7');
let p8 = document.getElementById('pl8');
let p9 = document.getElementById('pl9');
let p10 = document.getElementById('pl10');
let p11 = document.getElementById('pl11');
let p12 = document.getElementById('pl12');

// moveDiv("moveRight", "", "100");
function colorChange() {
    // moveDiv("moveRight", "", "600");
    setTimeout(firstColor, 100)


    setTimeout(secondColor, 200)


    setTimeout(thirdColor, 300)
    setTimeout(forthColor, 400)
    setTimeout(fifthColor, 500)
    setTimeout(sixthColor, 600)
    setTimeout(sevenColor, 700)
    setTimeout(eightColor, 800)
    setTimeout(nineColor, 900)
    setTimeout(tenColor, 1000)
    setTimeout(elevenColor, 1100)
    setTimeout(twelveColor, 1200)


    // setTimeout(colorChange, 600)

}

function firstColor() {

    console.log('1');
    p1.style.display = "none";
    p2.style.display = "block";
}
function secondColor() {
    console.log('2');
    p2.style.display = "none";
    p3.style.display = "block";
}
function thirdColor() {
    console.log('3');
    p3.style.display = "none";
    p4.style.display = "block";
}
function forthColor() {
    console.log('4');
    p4.style.display = "none";
    p5.style.display = "block";
}
function fifthColor() {
    console.log('5');
    p5.style.display = "none";
    p6.style.display = "block";
}
function sixthColor() {
    console.log('6');
    p6.style.display = "none";
    p1.style.display = "block";
}
function sevenColor() {
    console.log('7');
    p1.style.display = "none";
    p7.style.display = "block";
}
function eightColor() {
    console.log('8');
    p7.style.display = "none";
    p8.style.display = "block";
}
function nineColor() {
    console.log('9');
    p8.style.display = "none";
    p9.style.display = "block";
}
function tenColor() {
    console.log('10');
    p9.style.display = "none";
    p10.style.display = "block";
}
function elevenColor() {
    console.log('11');
    p10.style.display = "none";
    p11.style.display = "block";
}
function twelveColor() {
    console.log('12');
    p11.style.display = "none";
    p12.style.display = "block";
}



