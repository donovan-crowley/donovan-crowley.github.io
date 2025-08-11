const modal1 = document.getElementById("portfolioModal1");
const trigger1 = document.getElementById("project-modal1");
const span1 = document.getElementsByClassName("close-btn1")[0];
const modal2 = document.getElementById("portfolioModal2");
const trigger2 = document.getElementById("project-modal2");
const span2 = document.getElementsByClassName("close-btn2")[0];
const modal3 = document.getElementById("portfolioModal3");
const trigger3 = document.getElementById("project-modal3");
const span3 = document.getElementsByClassName("close-btn3")[0];
const modal4 = document.getElementById("portfolioModal4");
const trigger4 = document.getElementById("project-modal4");
const span4 = document.getElementsByClassName("close-btn4")[0];

// Set the background color of bookmark to black after scrolling
window.addEventListener('scroll', function(){
  const bookmark = document.querySelector('.bookmark');
  if(window.scrollY > 50){
    bookmark.classList.add('scrolled');
  } else{
    bookmark.classList.remove('scrolled');
  }
});

// Open VTOL modal 
trigger1.onclick = function(e) {
  modal1.style.display = "block";
  document.body.classList.add("lock-screen");
  document.body.classList.add("body-dark");
}

// Close VTOL modal with x click
span1.onclick = function() {
  modal1.style.display = "none";
  document.body.classList.remove("lock-screen");
  document.body.classList.remove("body-dark");
}

// Close modals with outside click
window.onclick = function(event) {
  // Close VTOL
  if (event.target == modal1) {
    modal1.style.display = "none";
    document.body.classList.remove("lock-screen");
    document.body.classList.remove("body-dark");
  }

  // Close EV
  if (event.target == modal2) {
    modal2.style.display = "none";
    document.body.classList.remove("lock-screen");
    document.body.classList.remove("body-dark");
  }

  // Close Web Scrape
  if (event.target == modal3) {
    modal3.style.display = "none";
    document.body.classList.remove("lock-screen");
    document.body.classList.remove("body-dark");
  }

  // Close Object Tracker
  if (event.target == modal4) {
    modal4.style.display = "none";
    document.body.classList.remove("lock-screen");
    document.body.classList.remove("body-dark");
  }
}

// Open EV modal
trigger2.onclick = function(e) {
  modal2.style.display = "block";
  document.body.classList.add("lock-screen");
  document.body.classList.add("body-dark");
}

// Close EV modal with x click
span2.onclick = function() {
  modal2.style.display = "none";
  document.body.classList.remove("lock-screen");
  document.body.classList.remove("body-dark");
}

// Open Web Scrape modal
trigger3.onclick = function(e) {
  modal3.style.display = "block";
  document.body.classList.add("lock-screen");
  document.body.classList.add("body-dark");
}

// Close Web Scrape modal with x click
span3.onclick = function() {
  modal3.style.display = "none";
  document.body.classList.remove("lock-screen");
  document.body.classList.remove("body-dark");
}

// Open Object Tracker modal
trigger4.onclick = function(e) {
  modal4.style.display = "block";
  document.body.classList.add("lock-screen");
  document.body.classList.add("body-dark");
}

// Close Object Tracker modal with x click
span4.onclick = function() {
  modal4.style.display = "none";
  document.body.classList.remove("lock-screen");
  document.body.classList.remove("body-dark");
}

// When the screen is resized, use the menu option
document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.querySelector(".menu-btn");
  const links = document.querySelector(".bookmark-toggle-links");
  const bookmark = document.querySelector(".bookmark");

  // Open/Close menu
  toggle.addEventListener("click", () => {
    links.classList.toggle("open");
  });

  // Close menu when a link is clicked
  links.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      links.classList.remove("open");
    });
  });

  // Close menu when clicking outside of it
  document.addEventListener("click", function(event){
    if (!bookmark.contains(event.target) && !links.contains(event.target) && !toggle.contains(event.target)) {
      links.classList.remove("open");
    }
  })
});
