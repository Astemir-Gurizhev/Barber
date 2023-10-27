const inputPhone = document.querySelector(".get__form__input-phone")
const inputEmail = document.querySelector(".get__form__input-email")
const checkBox = document.querySelector("input[type=checkbox]");
const checkBoxLabel = document.querySelector(".get__form__checkbox__label");

document.addEventListener("click", function (event) {
  if (event.target.closest(".header__burger")) {
    document.querySelector(".header__menu").classList.toggle("header__menu-active");
    document.querySelector(".header__burger").classList.toggle("active");
    $("body").toggleClass("lock");
  }
  if (event.target.closest(".header__menu__link")) {
		document.querySelector(".header__menu").classList.remove("header__menu-active")
		document.querySelector(".header__burger").classList.remove("active")
		document.querySelector("body").classList.remove("lock")
	}
	if (event.target.closest(".get__form__btn")) {
    if (inputPhone.value =='') {
      document.getElementById("error1").innerHTML ="<p>Required *</p>"
      inputPhone.style.border = "1px solid #E05263"
      event.preventDefault();
    }
    if (inputEmail.value =='') {
      document.getElementById("error2").innerHTML ="<p>Required *</p>"
      inputEmail.style.border = "1px solid #E05263"
      event.preventDefault();
    }
    if (!checkBox.checked) {
      checkBoxLabel.style.color = "#E05263";
      event.preventDefault()
    }
    if ((!phoneTest(inputPhone)) || (!emailTest(inputEmail)) || (!checkBox.checked)) {
      event.preventDefault()
    }
    if ((phoneTest(inputPhone)) && (emailTest(inputEmail)) && (checkBox.checked)) {

    }
	}
});

inputPhone.addEventListener("input", function (event) {
  if (phoneTest(inputPhone)) {
    document.getElementById("error1").innerHTML ="<p></p>"
    inputPhone.style.border = "1px solid #4FE18A"
    inputPhone.style.background = "url('../img/get/2.svg') 95% center no-repeat"
  }
  if (!phoneTest(inputPhone)) {
    document.getElementById("error1").innerHTML ="<p>Error</p>"
    document.getElementById("error2").style.marginTop = "5px"
    inputPhone.style.border = "1px solid #E05263"
    inputPhone.style.background = "inherit"
  }
})

inputEmail.addEventListener("input", function (event) {
  if (emailTest(inputEmail)) {
    document.getElementById("error2").innerHTML ="<p></p>"
    inputEmail.style.border = "1px solid #4FE18A"
    inputEmail.style.background = "url('../img/get/2.svg') 95% center no-repeat"
  }
  if (!emailTest(inputEmail)) {
    document.getElementById("error2").innerHTML ="<p>Error</p>"
    document.getElementById("error2").style.marginTop = "5px"
    inputEmail.style.border = "1px solid #E05263"
    inputEmail.style.background = "inherit"
  }
})

function phoneTest(inputPhone) {
  return /^[(+]{0,1}[0-9]{3}[)]{0,1}[-\s\.]{0,1}[0-9]{4}[-\s\.]{0,1}[0-9]{4}$/.test(inputPhone.value);
}

function emailTest(inputEmail) {
	return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(inputEmail.value);
}

new Swiper(".swiper-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  /*centeredSlides: true,*/
  spaceBetween: 20,
  slidesPerView: "auto",
  watchOverflow: true,
  initialSlide: 0,
  /*loop: true,*/
  autoplay: {
    delay: 5000,
    stopOnLastSlide: false,
    disableOnIteration: false,
  },
  /*effect: 'flip',
   flipEffect: {
      slideShadows: true,
      limitRotation: true,
   }*/
});
