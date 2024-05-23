//Yıldız
$(document).ready(function () {
  var ratings = [];

  $(".star").click(function () {
    var rating = $(this).data("value");
    var name = prompt("Adınızı girin:");
    if (name) {
      ratings.push({ name: name, rating: rating });
      $("#result").text("Puanınız: " + rating);
      updateLastRatings();
    }
  });

  function updateLastRatings() {
    $("#lastRatings").empty();
    $("#lastRatings").append("<h2>Son Puanlar</h2>");
    for (var i = 0; i < ratings.length; i++) {
      $("#lastRatings").append(
        "<p>" + ratings[i].name + " - " + ratings[i].rating + "</p>"
      );
    }
  }
});

//E-posta doğrulama
//Telefon Numarasına sadece rakam girme
//Ad Soyad kısmına en fazla 20 karakter yazabilme

$(document).ready(function () {
  $("#fullName").on("input", function () {
    var maxLength = 20;
    if ($(this).val().length > maxLength) {
      $(this).val($(this).val().slice(0, maxLength));
    }
  });

  $("#phone").on("input", function () {
    var numericValue = $(this).val().replace(/\D/g, "");
    $(this).val(numericValue);
  });

  $("#eventForm").submit(function (event) {
    event.preventDefault();
    var formData = {
      fullName: $("#fullName").val(),
      email: $("#email").val(),
      phone: $("#phone").val(),
      eventDate: $("#eventDate").val(),
      terms: $("#terms").is(":checked"),
    };

    if (!isValidEmail(formData.email)) {
      $("#message")
        .html(
          '<p style="color: red;">Lütfen geçerli bir e-posta adresi girin.</p>'
        )
        .show();
      return;
    }

    if (!isValidPhone(formData.phone)) {
      $("#message")
        .html(
          '<p style="color: red;">Lütfen sadece rakam içeren geçerli bir telefon numarası girin.</p>'
        )
        .show();
      return;
    }

    $("#message")
      .html(
        "<p>Form başarıyla gönderildi. Teşekkür ederiz, " +
          formData.fullName +
          "!</p>"
      )
      .show();

    $("#eventForm")[0].reset();
  });
});

function isValidEmail(email) {
  var pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

function isValidPhone(phone) {
  var pattern = /^\d{10}$/;
  return pattern.test(phone);
}

//Sayaç
$(document).ready(function () {
  var targetDate = new Date(2024, 11, 11, 19, 59, 59);

  startCountdown(targetDate);

  function startCountdown(targetDate) {
    var countdownInterval = setInterval(function () {
      var currentDate = new Date();

      var timeRemaining = targetDate - currentDate;

      var days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor(
        (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
      );
      var seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

      $("#days").text(days);
      $("#hours").text(hours);
      $("#minutes").text(minutes);
      $("#seconds").text(seconds);

      if (timeRemaining < 0) {
        clearInterval(countdownInterval);
        $("#countdown").html('<span class="expired">Süre Doldu!</span>');
      }
    }, 1000);
  }
});

// Metni ters çevirme

$(document).ready(function () {
  $("#reverseButton").click(function () {
    var text = $("#textInput").val();
    var reversedText = text.split("").reverse().join("");
    $("#output").text(reversedText);
  });
});

//Slayt

$(document).ready(function () {
  var sliderHeight = $(".container").height();
  var slideCount = $(".slider img").length;
  var totalHeight = sliderHeight * slideCount;

  $(".slider").css("height", totalHeight);

  var currentSlide = 0;

  function slideDown() {
    currentSlide++;
    if (currentSlide >= slideCount) {
      currentSlide = 0;
    }
    var newPosition = currentSlide * sliderHeight * -1;
    $(".slider").css("transform", "translateY(" + newPosition + "px)");
  }

  setInterval(slideDown, 3000);
});

//Gizleme gösterme

$(document).ready(function () {
  $(".toggle").click(function () {
    $(".hidden").toggle();
  });
});

//Acerdeon

$(document).ready(function () {
  $(".accordion-header").click(function () {
    $(this).next(".accordion-content").slideToggle();
  });
});

//Snipper

$(document).ready(function () {
  $(".spinner").hide();

  $("button").click(function () {
    $(".spinner").show();

    setTimeout(function () {
      $(".spinner").hide();
    }, 3000);
  });
});

//JAVASCRİPT

document
  .getElementById("eventForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var eventDate = document.getElementById("eventDate").value;
    var terms = document.getElementById("terms").checked;

    if (terms) {
      alert(
        "Teşekkürler, " +
          fullName +
          "! Etkinliğe katıldığınız için sabırsızlanıyoruz."
      );
      document.getElementById("eventForm").reset();
    } else {
      alert("Lütfen katılım koşullarını kabul edin.");
    }
  });

//dark mode

$(".change").on("click", function () {
  if ($("body").hasClass("dark")) {
    $("body").removeClass("dark");
    $(".change").text("OFF");
  } else {
    $("body").addClass("dark");
    $(".change").text("ON");
  }
});

//Kayan buton

var speed = 100;
var message =
  "Dünyanın en iyi cosplay partisine katılmanız sizin için mükemmel bir haber:))):))).Dünyanın en iyi cosplay partisine katılmanız sizin için mükemmel bir haber:))):))).Dünyanın en iyi cosplay partisine katılmanız sizin için mükemmel bir haber:))):))).Dünyanın en iyi cosplay partisine katılmanız sizin için mükemmel bir haber:))):)))";

var s = 0;
var l = message.length;
document.write(
  "<form name='btn'><input type='button' " +
    "name='sc' value='" +
    message +
    "'></form>"
);
function btnsc() {
  document.btn.sc.value = message.substring(s, l) + message.substring(0, s);
  s++;
  if (s >= l) {
    s = 0;
  }
  setTimeout("btnsc()", speed);
}
btnsc();

// arka plan resmini gizl/göster

var backgroundURL = "";

function toggleBackground() {
  var body = document.body;
  if (body.style.backgroundImage === "") {
    body.style.backgroundImage = "url('" + backgroundURL + "')";
  } else {
    body.style.backgroundImage = "";
  }
}
