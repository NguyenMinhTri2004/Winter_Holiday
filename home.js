const slides = document.querySelectorAll('.slide');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');
const auto = false; // Auto scroll
const intervalTime = 3000;
let slideInterval;

const nextSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for next slide
  if (current.nextElementSibling) {
    // Add current to next sibling
    current.nextElementSibling.classList.add('current');
  } else {
    // Add current to start
    slides[0].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

const prevSlide = () => {
  // Get current class
  const current = document.querySelector('.current');
  // Remove current class
  current.classList.remove('current');
  // Check for prev slide
  if (current.previousElementSibling) {
    // Add current to prev sibling
    current.previousElementSibling.classList.add('current');
  } else {
    // Add current to last
    slides[slides.length - 1].classList.add('current');
  }
  setTimeout(() => current.classList.remove('current'));
};

// Button events
next.addEventListener('click', e => {
  nextSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

prev.addEventListener('click', e => {
  prevSlide();
  if (auto) {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, intervalTime);
  }
});

// Auto slide
if (auto) {
  // Run next slide at interval time
  slideInterval = setInterval(nextSlide, intervalTime);
}


// counter

const counter = document.querySelectorAll('.counter');
const speed = 9999999;


counter.forEach(counter => {
   const updateCount = () => {
     const target = +counter.getAttribute('data-target');
     const count = +counter.innerText;  
     

     const inc = target / speed;

     if(count < target) {
        
         counter.innerText = Math.ceil(count + inc) ;
         setTimeout(updateCount, 20)

     }else{
       count.innerText = target;
     }
   }

   updateCount();
});



const number = document.querySelectorAll('.tour-chart');
const speeds = 200;


number.forEach(number => {
   const updateCount = () => {
     const target = +number.getAttribute('data-target');
     const count = +number.innerText;  
     

     const inc = target / speeds;

     if(count < target) {
        
         number.innerText = Math.ceil(count + inc) ;
         setTimeout(updateCount, 30)

     }else{
       count.innerText = target;
     }
   }

   updateCount();
});


// dot

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
    document.getElementById("nav").style.top = "0";

  } else {
    document.getElementById("nav").style.top = "-300px";
  }

 

}




function closelay() {
  
  document.getElementsByClassName("over-lay")[0].style.transform = "translateX(100%)";
  
 }
 
 
 function openlay () {
  document.getElementsByClassName("over-lay")[0].style.transform = "translateX(0)";
    
  }

  // Mobile menu

var subMenus = document.getElementsByClassName("sub-mobile-menu")[0];
var arrow =  document.getElementsByClassName("arrow")[0];
var menuMobile = document.getElementsByClassName("menu-icon-mobile")[0];
var inner1 = document.getElementsByClassName("inner1")[0];
menuMobile.onclick = function () {
  if(subMenus.style.display == "none"){
    subMenus.style.display = "block";
  }else{
    subMenus.style.display = "none";
  }
}

arrow.onclick = function () {
  subMenus.classList.toggle("show1");
}


// Modal 

var menuMobile2 = document.getElementsByClassName("menu-icon-mobile")[1];
var modal = document.getElementsByClassName("modal")[0];
var modalcontainer = document.getElementsByClassName("modal-container")[0];

menuMobile2.onclick = function () {
  if(modal.style.display == "none"){
    modal.style.display = "flex";
  }else{
    modal.style.display = "none";
  }
}

modal.onclick = function () {
  modal.style.display = "none";
  
}

modalcontainer.onclick = function (e) {
 e.stopPropagation();
}






  
