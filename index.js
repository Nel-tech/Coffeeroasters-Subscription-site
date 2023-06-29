let headingLink = document.querySelectorAll(".heading-link");

headingLink.forEach((questions) => {
  questions.addEventListener("click", function () {
    this.classList.toggle("show");
    let flex = this.nextElementSibling;
    flex.style.maxHeight
      ? (flex.style.maxHeight = null)
      : (flex.style.maxHeight = flex.scrollHeight + "px");
  });
});

// Nav Toggle
let btn = document.querySelector(".hamburger");
let mobilenav = document.querySelector(".nav-list");

mobilenav.style.left = "-100%";

btn.addEventListener("click", clickEvent);
function clickEvent() {
  // if (mobilenav.style.left == "-100%") {
  //   mobilenav.style.left = "100%";
  //   btn.src = "/assets/shared/mobile/icon-close.svg";
  // } else {
  //   mobilenav.style.left = "-100%";
  //   btn.src = "/assets/shared/mobile/icon-hamburger.svg";
  // }

  mobilenav.style.left == "-100%"
    ? ((mobilenav.style.left = "100%"),
      (btn.src = "/assets/shared/mobile/icon-close.svg"))
    : ((mobilenav.style.left = "-100%"),
      (btn.src = "/assets/shared/mobile/icon-hamburger.svg"));
}

// Summmary

// Prefrence
let PrefContainer = document.querySelectorAll(".prefrence-container");
PrefContainer.forEach((prefCont) => {
  prefCont.addEventListener("click", function () {
    const div = prefCont;

    let prefrence = document.querySelector(".prefrence");
    const headerText = div.querySelector(".prefrence-type").innerText;
    prefrence.innerHTML = headerText;
  });
});

// Bean
let BeanContainer = document.querySelectorAll(".Bean-Container");
BeanContainer.forEach((beanCont) => {
  beanCont.addEventListener("click", function () {
    const Beandiv = beanCont;

    let Bean = document.querySelector(".bean");
    const BeanText = Beandiv.querySelector(".Bean-type").innerText;
    Bean.innerHTML = BeanText;
  });
});

// Quanttity
let QuanContainer = document.querySelectorAll(".Quantity-Container");
QuanContainer.forEach((quanCont) => {
  quanCont.addEventListener("click", function () {
    const quandiv = quanCont;

    let quantity = document.querySelector(".quantity");
    const QuantityText = quandiv.querySelector(".Quantity-type").innerText;
    quantity.innerHTML = QuantityText;
  });
});

// grind
let grindContainer = document.querySelectorAll(".grind-container");
grindContainer.forEach((grindCont) => {
  grindCont.addEventListener("click", function () {
    const grinddiv = grindCont;

    let grind = document.querySelector(".grind");
    const GrindOption = grinddiv.querySelector(".Grind-option").innerText;
    grind.innerHTML = GrindOption;
  });
});

let DeliContainer = document.querySelectorAll(".Deliveries-container");
DeliContainer.forEach((deliCont) => {
  deliCont.addEventListener("click", function () {
    const delidiv = deliCont;

    let month = document.querySelector(".month");
    const deliveries = delidiv.querySelector(".Deliveries").innerText;
    month.innerHTML = deliveries;
  });
});
