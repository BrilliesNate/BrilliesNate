let menuIcon = document.querySelector('.menuIcon');
let nav = document.querySelector('.overlay-menu');

menuIcon.addEventListener('click', () => {
    if (nav.style.transform != 'translateX(0%)') {
        nav.style.transform = 'translateX(0%)';
        nav.style.transition = 'transform 0.2s ease-out';
    } else { 
        nav.style.transform = 'translateX(-100%)';
        nav.style.transition = 'transform 0.2s ease-out';
    }
});


// Toggle Menu Icon ========================================
let toggleIcon = document.querySelector('.menuIcon');

toggleIcon.addEventListener('click', () => {
    if (toggleIcon.className != 'menuIcon toggle') {
        toggleIcon.className += ' toggle';
    } else {
        toggleIcon.className = 'menuIcon';
    }
});

let number = document.getElementById("number");
let number2 = document.getElementById("number2");
let number3 = document.getElementById("number3");
let number4 = document.getElementById("number4");
let counter = 0;
setInterval(() => {
  if (counter == 65) {
    clearInterval();
  } else {
    counter += 1;
    number.innerHTML = "WEB DEV " + counter + "%";
  }
}, 30);

let webDevBtn = document.getElementById("webDevBtn");
let webDevCard = document.getElementById("webDevCard");
let gearsGif = document.getElementById("gearsGif");
let webDevIcon = document.getElementById("webDevIcon");

webDevCard.onmouseover = function(){
    webDevCard.style.background = "#ADD8E6"
    webDevCard.style.transition = "all 0.5s";
    gearsGif.style.display = "block";
    webDevIcon.style.display = "none";

    webDevIcon.style.transition = "all 0.5s";
    gearsGif.style.transition = "all 0.5s";
};
webDevCard.onmouseout = function(){
    gearsGif.style.display = "none";
    webDevIcon.style.display = "block";

    webDevIcon.style.transition = "all 0.5s";
    gearsGif.style.transition = "all 0.5s";
    webDevCard.style.background = "white"
    webDevCard.style.transition = "all 0.3s";
};

let appDevCard = document.getElementById("appDevCard");
let appIconGif = document.getElementById("appIconGif");
let appIcon = document.getElementById("appIcon");

appDevCard.onmouseover = function(){
    appDevCard.style.background = "#ADD8E6"
    appDevCard.style.transition = "all 0.5s";
    appIconGif.style.display = "block";
    appIcon.style.display = "none";

    appIcon.style.transition = "all 0.5s";
    appIconGif.style.transition = "all 0.5s";
};
appDevCard.onmouseout = function(){
    appIconGif.style.display = "none";
    appIcon.style.display = "block";

    appIcon.style.transition = "all 0.5s";
    appIconGif.style.transition = "all 0.5s";
    appDevCard.style.background = "white"
    appDevCard.style.transition = "all 0.3s";
};


let homeBtn = document.getElementById("homeBtn");
let aboutMeBtn = document.getElementById("aboutMeBtn");
let myServicesBtn = document.getElementById("myServicesBtn");
let myPortfolioBtn = document.getElementById("myPortfolioBtn");

myPortfolioBtn.onclick = function() {
    let element = document.getElementById("target");   
    element.scrollIntoView({behavior: "smooth"});
}

myServicesBtn.onclick = function() {
    let element = document.getElementById("myservicesTarget"); 
    element.scrollIntoView({behavior: "smooth"});
}

aboutMeBtn.onclick = function () {
    let element = document.getElementById("aboutMeTarget"); 
    element.scrollIntoView({behavior: "smooth"});
}


homeBtn.onclick = function () {
    let element = document.getElementById("homeTarget"); 
    element.scrollIntoView({behavior: "smooth"});
}

// function scrol(){
