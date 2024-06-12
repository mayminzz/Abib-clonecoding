const header = document.querySelector("header");
// const quickMenu = document.querySelector(".quick_access");

let scrollNum = 0;

// main_banner2 img scale
const banner2_img = document.querySelector("#main_banner2 img");
const banner3_img = document.querySelector("#main_banner3 img");

const Imgscale = (num) => {
  if (num > 1400) {
    const scaleNum = Math.floor(num / 14);
    banner2_img.style.transform = `scale(${scaleNum}%)`;
  }
  if (num > 2700) {
    const scaleNum = Math.floor(num / 29);
    banner3_img.style.transform = `scale(${scaleNum}%)`;
  }
};

//header fixed
window.addEventListener("scroll", () => {
  scrollNum = window.scrollY;
  Imgscale(scrollNum);
  if (scrollNum > 30) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
});

const subMenu = document.querySelector(".sub_menu");
const subMenuBox = document.querySelectorAll(".sub_menu_box");
const topMenu = document.querySelectorAll(".top_menu li a");

topMenu.forEach((menu) => {
  menu.addEventListener("mouseover", (e) => {
    subMenu.classList.add("menuDrop");
    const target = e.currentTarget.parentNode.getAttribute("data-index");
    console.log(target); //li
    subMenuBox.forEach((box) => {
      const targetBox = box.getAttribute("data-index");
      if (target === targetBox) {
        subMenuBox.forEach((box) => {
          box.classList.remove("show");
        });
        box.classList.add("show");
      } else if (target === "3") {
        subMenu.classList.remove("menuDrop");
        box.classList.remove("show");
      }
    });
  });
});

header.addEventListener("mouseleave", () => {
  subMenu.classList.remove("menuDrop");
});

const countryBtn = document.querySelector(".country");
const countryImg = document.querySelector(".country img");
const countryMenu = document.querySelector(".country_menu");

countryBtn.addEventListener("click", () => {
  countryMenu.classList.toggle("drop");
  countryImg.classList.toggle("rotate");
});

const searchBtn = document.querySelector(".search");
const searchDrop = document.querySelector(".search_drop");
const closeBtn = document.querySelector(".closeBtn");

searchBtn.addEventListener("click", () => {
  searchDrop.classList.toggle("show");
});
closeBtn.addEventListener("click", () => {
  searchDrop.classList.remove("show");
});

//promotion

const promotionItems = document.querySelector(".promotion_items");
const bestItems = document.querySelector(".best_items");
const recommendItems = document.querySelector(".recommend_items");

const URL = "./product.json";
fetch(URL)
  .then((response) => response.json())
  .then((json) => {
    let promotionOutput = "";

    json.promotion.forEach((product) => {
      promotionOutput += `
      <div class="promotion_item">
      <div class="promotion_item_img">
        <a href="">
          <img
            src="${product.img}"
            alt="${product.alt}"
          />
        </a>
      </div>
      <div class="promotion_item_desc">
        <a href="" class="item_txt">
          <span class="name">
            ${product.name}
            <b>${product.name_desc}</b>
          </span>
          <span class="volume">${product.volume}</span>
          <span class="price"
            >${product.price}<strong>${product.discount}</strong></span
          >
        </a>
        <div class="cart">
          <button>카트에 담기</button>
        </div>
      </div>
    </div>
      `;
      promotionItems.innerHTML = promotionOutput;
    });

    let bestOutput = "";

    json.best.forEach((product) => {
      bestOutput += `
      <div class="best_item">
      <div class="best_item_img">
        <a href="">
          <img
            src="${product.img}"
            alt="${product.alt}"
          />
        </a>
      </div>
      <div class="best_item_desc">
        <a href="" class="item_txt">
          <span class="name">
            ${product.name}
            <b>${product.name_desc}</b>
          </span>
          <span class="volume">${product.volume}</span>
          <span class="price"
            >${product.price}<strong>${product.discount}</strong></span
          >
        </a>
        <div class="cart">
          <button>카트에 담기</button>
        </div>
      </div>
    </div>
      `;
      bestItems.innerHTML = bestOutput;
    });

    let recommendOutput = "";

    json.recommend.forEach((product) => {
      recommendOutput += `
      <div class="recommend_item">
      <div class="recommend_item_img">
        <a href="">
          <img
            src="${product.img}"
            alt="${product.alt}"
          />
        </a>
      </div>
      <div class="recommend_item_desc">
        <a href="" class="item_txt">
          <span class="name">
            ${product.name}
            <b>${product.name_desc}</b>
          </span>
          <span class="volume">${product.volume}</span>
          <span class="price"
            >${product.price}<strong>${product.discount}</strong></span
          >
        </a>
        <div class="cart">
          <button>카트에 담기</button>
        </div>
      </div>
    </div>
      `;
      recommendItems.innerHTML = recommendOutput;
    });
  });

//mobile
const toggleBtn = document.querySelector(".toggle");
const mobileMenu = document.querySelector(".mobile_menu_box");
const main = document.querySelector("main");
const footer = document.querySelector("footer");

toggleBtn.addEventListener("click", () => {
  toggleBtn.classList.toggle("active");
  mobileMenu.classList.toggle("faceIn");
  main.classList.toggle("disappear");
  footer.classList.toggle("disappear");
});

const mobileCountry = document.querySelector(".country_select_box");
const mobileCountryBox = document.querySelector(".mobile_country_menu  > ul");

mobileCountry.addEventListener("click", () => {
  mobileCountry.classList.toggle("rotate");
  mobileCountryBox.classList.toggle("drop");
});
