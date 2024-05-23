const searchForm = document.querySelector(".search-form");
const cartItem = document.querySelector(".cart-items-container");
const navbar = document.querySelector(".navbar");

/* buttons*/
const searchBtn = document.querySelector("#search-btn");
const cartBtn = document.querySelector("#cart-btn");
const menuBtn = document.querySelector("#menu-btn");

cartBtn.addEventListener("click", function () {
  cartItem.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(cartBtn) &&
      !e.composedPath().includes(cartItem)
    ) {
      cartItem.classList.remove("active");
    }
  });
});

searchBtn.addEventListener("click", function () {
  searchForm.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(searchBtn) &&
      !e.composedPath().includes(searchForm)
    ) {
      searchForm.classList.remove("active");
    }
  });
});

menuBtn.addEventListener("click", function () {
  navbar.classList.toggle("active");
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(menuBtn) &&
      !e.composedPath().includes(navbar)
    ) {
      navbar.classList.remove("active");
    }
  });
});

//Slider

("use strict");
var _slayt = document.getElementsByClassName("slayt");
var slaytSayisi = _slayt.length;
var slaytNo = 0;
var i = 0;

slaytGoster(slaytNo);

function sonrakiSlayt() {
  slaytNo++;
  slaytGoster(slaytNo);
}

function oncekiSlayt() {
  slaytNo--;
  slaytGoster(slaytNo);
}

function slaytGoster(slaytNumarasi) {
  slaytNo = slaytNumarasi;

  if (slaytNumarasi >= slaytSayisi) slaytNo = 0;

  if (slaytNumarasi < 0) slaytNo = slaytSayisi - 1;

  for (i = 0; i < slaytSayisi; i++) {
    _slayt[i].style.display = "none";
  }

  _slayt[slaytNo].style.display = "block";
}

//Go top button
function goToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}

document.getElementById("goToTopBtn").addEventListener("click", goToTop);

//* Support button

function changeTextColor() {
  var elements = document.getElementsByTagName("h1");
  for (var i = 0; i < elements.length; i++) {
    elements[i].style.color = "red";
  }
}

// Window reflesh
setInterval(function () {
  window.location.reload(false);
}, 60000);

// Fallow

function follow(id, el) {
  el.innerText = "Stop Fallowing";
  el.setAttribute("onclick", `unfollow(${id}, this)`);
}

function unfollow(id, el) {
  el.innerText = "Fallow";
  el.setAttribute("onclick", `follow(${id}, this)`);
}

// Random number

function sayiUret() {
  document.getElementById("sayi").innerHTML = randomInt(10, 20);
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Time

function tarihSaat() {
  var date = new Date().toLocaleString("tr-TR");
  document.getElementById("zaman").innerHTML = date;
}
setInterval(tarihSaat, 1000);

// Alert

alert(
  "Bu sayfa bilgilerinizle herhangi bir işlem yapamaz çünkü sahibi bir şey beceremiyor"
);

//Click

document.querySelector("#News-btn").onclick = function () {
  window.location.href = "https://news.google.com/home?hl=tr&gl=TR&ceid=TR:tr";
};

//Morning Good Evening Message

        var saat = new Date().getHours();
        var mesaj;
        if (saat < 12) {
            mesaj = "GOOD MORNİNG!";
        } else if (saat < 18) {
            mesaj = "HAVE A NİCE DAY!";
        } else {
            mesaj = "GOOD EVENİNG!";
        }
        document.getElementById("mesaj").textContent = mesaj;
