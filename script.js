$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    center: true,
    navText: [
      "<i class='fa fa-angle-left'></i>",
      "<i class='fa fa-angle-right'></i>"
    ],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      1000: {
        items: 3
      }
    }
  });
});


const ham = document.getElementById("ham");
const burger = document.querySelector(".burger");
const cancel = document.querySelector(".cancel");
const menu = document.getElementById("menu");
const login = document.querySelector(".login-button");

cancel.style.display = "none";

const toggleMenu = () => {
  if (menu.classList.contains("open")) {
    menu.classList.remove("open");
    cancel.style.display = "none";
    login.style.display = "block";
    burger.style.display = "block";
    //   menu.style.display = "block";
    console.log("open");
  } else {
    menu.classList.add("open");
    login.style.display = "none";
    burger.style.display = "none";
    cancel.style.display = "block";
    //   menu.style.display = "none";
    console.log("close");
  }
};

// select all accordion items
const accItems = document.querySelectorAll(".accordion__item");

// add a click event for all items
accItems.forEach((acc) => acc.addEventListener("click", toggleAcc));

function toggleAcc() {
  // remove active class from all items exept the current item (this)
  accItems.forEach((item) => item != this ? item.classList.remove("accordion__item--active") : null
  );

  // toggle active class on current item
  if (this.classList != "accordion__item--active") {
    this.classList.toggle("accordion__item--active");
  }
}


const backTopElement = document.getElementById("back-top-div");
const minScolledAmountToBackTop = 800;

window.addEventListener("scroll", () => {
  if (window.scrollY < minScolledAmountToBackTop) {
    backTopElement.classList.add("hidden");
  } else {
    backTopElement.classList.remove("hidden");
  }
});

const backTop = () => {
  window.scrollTo(0, 0);
};

backTopElement.addEventListener("click", backTop);
ham.addEventListener("click", toggleMenu);

let talking = document.getElementById('talking');
let doctor = document.getElementById('doctor');
let child = document.getElementById('child');
let spiritual = document.getElementById('spiritual');
let laughing = document.getElementById('laughing');
let yoga = document.getElementById('yoga');
let mohit = document.getElementById('life');
let reading = document.getElementById('reading');

let audio = document.getElementById('audio');

let talking1 = document.getElementById('talking1');
let doctor1 = document.getElementById('doctor1');
let child1 = document.getElementById('child1');
let spiritual1 = document.getElementById('spiritual1');
let laughing1 = document.getElementById('laughing1');
let yoga1 = document.getElementById('yoga1');
let mohit1 = document.getElementById('life1');
let reading1 = document.getElementById('reading1');

const loggedInUserId = localStorage.getItem('loggedInUserId');

if (!loggedInUserId) {
  audio.innerText = "Try For free"

}
else {

  mohit.innerText = "LogOut";
  mohit.id = "logout";
  reading.href = "./Reading therapy/indexreading.html";
  yoga.href = "./yoga therapy/index (2).html";
  laughing.href = "./Laughing Therapy/index.html";
  talking.href = "./Talking therapy/index.html";
  doctor.href = "https://www.practo.com/counselling-psychology";
  child.href = "./Child Therapy/index.html";
  spiritual.href = "./Spritual therapy/indexSpiritual.html";

  reading1.href = "./Reading therapy/indexreading.html";
  yoga1.href = "./yoga therapy/index (2).html";
  laughing1.href = "./Laughing Therapy/index.html";
  talking1.href = "./Talking therapy/index.html";
  doctor1.href = "https://www.practo.com/counselling-psychology";
  child1.href = "./Child Therapy/index.html";
  spiritual1.href = "./Spritual therapy/indexSpiritual.html";

}