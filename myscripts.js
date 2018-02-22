<!-- Add Google Maps -->

function myMap()
{
  myCenter=new google.maps.LatLng(51.044270, -114.062019);
  var mapOptions= {
    center:myCenter,
    zoom:12, scrollwheel: false, draggable: false,
    mapTypeId:google.maps.MapTypeId.ROADMAP
  };
  var map=new google.maps.Map(document.getElementById("googleMap"),mapOptions);

  var marker = new google.maps.Marker({
    position: myCenter,
  });
  google.maps.event.addListener(marker, 'click', function () {
        var lng = "points[i].longitue",
            lat = points[i].latitude;
        alert( lat + "-" + lng );
    });
  marker.setMap(map);
}

// Modal Image Gallery
function onClick(element) {
  document.getElementById("img01").src = element.src;
  document.getElementById("modal01").style.display = "block";
  var captionText = document.getElementById("caption");
  captionText.innerHTML = element.alt;
}

// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

// Type typewriter
                    // set up text to print, each item in array is new line
                    var tagArray = new Array("Hello, I'm Nour.","I'm a Software","	Developer");
                    var iSpeed = 200; // time delay of print out
                    var iIndex = 0; // start printing array at this posision
                    var iArrLength = tagArray[0].length; // the length of the text array
                    var iScrollAt = 20; // start scrolling up at this many lines
                    var iTextPos = 0; // initialise text position
                    var sContents = ''; // initialise contents variable
                    var iRow; // initialise current row

                    function typewriter()
                    {
                        sContents =  ' ';
                        iRow = Math.max(0, iIndex-iScrollAt);
                        var destination = document.getElementById("tagline");

                        while ( iRow < iIndex )
                        {
                            sContents += tagArray[iRow++] + '<br />';
                        }
                        destination.innerHTML = sContents + tagArray[iIndex].substring(0, iTextPos) + "_";
                        if ( iTextPos++ == iArrLength )
                        {
                            iTextPos = 0;
                            iIndex++;
                            if ( iIndex != tagArray.length )
                            {
                                iArrLength = tagArray[iIndex].length;
                                setTimeout("typewriter()", 500);
                            }
                        }
                        else
                        {
                            setTimeout("typewriter()", iSpeed);
                        }
                    }
                    typewriter();

//open black information

                function openSearch() {
                    document.getElementById("myOverlay").style.display = "block";
                }
                function closeSearch() {
                    document.getElementById("myOverlay").style.display = "none";
                }
                function openSearch1() {
                    document.getElementById("myOverlay1").style.display = "block";
                }
                function closeSearch1() {
                    document.getElementById("myOverlay1").style.display = "none";
                }
                function openSearch2() {
                    document.getElementById("myOverlay2").style.display = "block";
                }
                function closeSearch2() {
                    document.getElementById("myOverlay2").style.display = "none";
                }
                function openSearch3() {
                    document.getElementById("myOverlay3").style.display = "block";
                }
                function closeSearch3() {
                    document.getElementById("myOverlay3").style.display = "none";
                }
//
// filterSelection("all")
// function filterSelection(c) {
//   var x, i;
//   x = document.getElementsByClassName("column");
//   if (c == "all") c = "";
//   for (i = 0; i < x.length; i++) {
//     w3RemoveClass(x[i], "show");
//     if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
//   }
// }
//
// function w3AddClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
//   }
// }
//
// function w3RemoveClass(element, name) {
//   var i, arr1, arr2;
//   arr1 = element.className.split(" ");
//   arr2 = name.split(" ");
//   for (i = 0; i < arr2.length; i++) {
//     while (arr1.indexOf(arr2[i]) > -1) {
//       arr1.splice(arr1.indexOf(arr2[i]), 1);
//     }
//   }
//   element.className = arr1.join(" ");
// }
//
//
// // Add active class to the current button (highlight it)
// var btnContainer = document.getElementById("myBtnContainer");
// var btns = btnContainer.getElementsByClassName("btn");
// for (var i = 0; i < btns.length; i++) {
//   btns[i].addEventListener("click", function(){
//     var current = document.getElementsByClassName("active");
//     current[0].className = current[0].className.replace(" active", "");
//     this.className += " active";
//   });
// }
 // Slideshow
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
