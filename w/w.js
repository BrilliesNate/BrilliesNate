function updateTimer() {
  future  = Date.parse("May 21, 2022 11:30:00");
  now     = new Date();
  diff    = future - now;

  days  = Math.floor( diff / (1000*60*60*24) );
  hours = Math.floor( diff / (1000*60*60) );
  mins  = Math.floor( diff / (1000*60) );
  secs  = Math.floor( diff / 1000 );

  d = days;
  h = hours - days  * 24;
  m = mins  - hours * 60;
  s = secs  - mins  * 60;

  document.getElementById("timer")
    .innerHTML =
      '<div>' + d + '<span>days</span></div>' + " | " +
      '<div>' + h + '<span>hours</span></div>' +" | " +
      '<div>' + m + '<span>minutes</span></div>' +" | " +
      '<div>' + s + '<span>seconds</span></div>' ;
}
setInterval('updateTimer()', 1000 );


var screenWidth;
var screenHeight;
init();

function init()
{	
	screenWidth = window.innerWidth;
	screenHeight = window.innerHeight;	
	allImagesToPolaroids();
	document.getElementById('polaroidGallery').onmousedown = function(event)
	{
		if(frontPolaroid != null && event.target == this)
		{
			randomPositionAndRotation(frontPolaroid);      
			frontPolaroid = null;
		}
	};
}

//adds polaroid divs around the img tags
function allImagesToPolaroids()
{
	var allImages = document.getElementById('polaroidGallery').querySelectorAll('img');
	
	for(var i = 0; i < allImages.length; i++)
	{
		var imageToWrap = allImages[i];
		imageToWrap.classList.add('image');
		var polaroidWrapper = document.createElement('div');
		polaroidWrapper.classList.add('polaroid');
		wrap(imageToWrap, polaroidWrapper);
		//random rotation between ?
		randomPositionAndRotation(polaroidWrapper);
		
		polaroidWrapper.onmousedown = function(event)
		{
			bringToFront(event);
		};
	}	
}

var frontPolaroid;
var pileZIndex = 1;
function bringToFront(e)
{
	if(frontPolaroid != null)
	{
		randomPositionAndRotation(frontPolaroid);
	}
	var polaroid = e.target; 
	if(polaroid.nodeName == 'IMG')
	{
		polaroid = polaroid.parentNode;
	}
	var randomDegrees = Math.random()*20-10;
	polaroid.style.transform = 'rotate('+randomDegrees+'deg) scale(2.5)';
	polaroid.style.left = 42.5+'vw';
	polaroid.style.top = 25+'vh';
	polaroid.style.zIndex = '100';
	frontPolaroid = polaroid;
}

function randomPositionAndRotation(polaroidDiv)
{
	var randomDegrees = Math.random()*180-90;
	polaroidDiv.style.transform = 'rotate('+randomDegrees+'deg) scale(1.0)';
	var randomX = Math.random()*0.6*screenWidth+0.20*screenWidth;
	polaroidDiv.style.left = randomX+'px';
	var randomY = (Math.random()*0.4*screenHeight+0.1*screenHeight);
	polaroidDiv.style.top = randomY+'px';	
	polaroidDiv.style.zIndex = pileZIndex;
	pileZIndex++;
}

function wrap(el, wrapper) 
{
    el.parentNode.insertBefore(wrapper, el);
    wrapper.appendChild(el);
}

let imgUploadBtn = document.getElementById("uploadImageBtn")

imgUploadBtn.onmouseover = function(){imgUploadBtn.style.background ="#B0D5C0";
imgUploadBtn.style.transition = "all 0.2s";
};

imgUploadBtn.onmouseout = function(){imgUploadBtn.style.background ="white";
imgUploadBtn.style.transition = "all 0.2s";};

function addImg () {
	let imgSrc = document.getElementById("img").value
 let newImg = document.createElement("img")
 newImg.src = imgSrc
newImg.appendChild("polaroidGallery")
}