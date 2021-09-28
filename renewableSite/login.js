
document.getElementById("pic").addEventListener("mouseover", mouseOver);
document.getElementById("pic").addEventListener("mouseout", mouseOut);

function mouseOver() {
  document.getElementById("pic").style ="transform: scale(2);"
  document.getElementById("pic").style.transition = "all 2s";

  console.log("transistion");
}

function mouseOut() {
    document.getElementById("pic").style="transform: scale(1);"
    document.getElementById("pic").style.transition = "all 2s";
}


// let worldImg = document.getElementById('pic')

// function hover() {

//     worldImg.style="transform: scale(2);"
// }





