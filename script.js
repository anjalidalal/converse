const belgiums = document.querySelectorAll(".bel");
const belgiumDiv = document.querySelector(".belgium");
const header1 = document.querySelector(".header1");
const countryContainer = document.querySelector(".countryContainer");
const highShoes = document.getElementById("high-shoes");
const shoesDataDiv = document.querySelector(".shoes-data-page");

function showPage(pageName) {
  switch (pageName) {
    case "belgium":
      displayBelgiumlDiv();
      break;
    case "shoesData":
      displayShoesData();
      break;
    default:
      showCountryPage();
      break;
  }
}

2;
function displayBelgiumlDiv() {
  window.scroll(0, 0);

  header1.style.display = "none";
  countryContainer.style.display = "none";
  shoesDataDiv.style.display = "none";
  belgiumDiv.style.display = "unset";
}
belgiums.forEach((belgium) => {
  belgium.addEventListener("click", function () {
    window.scroll(0, 0);

    history.pushState(
      {
        page: "belgium",
      },
      "",
      "/belgium"
    );

    displayBelgiumlDiv("belgium");
  });
});

function displayShoesData() {
  window.scroll(0, 0);
  belgiumDiv.style.display = "none";
  shoesDataDiv.style.display = "unset";
}

highShoes.addEventListener("click", function () {
  window.scroll(0, 0);

  history.pushState(
    {
      page: "shoesData",
    },
    "",
    "/all-high-tops"
  );

  displayShoesData("shoesData");
});

function showCountryPage() {
  window.scroll(0, 0);

  belgiumDiv.style.display = "none";
  shoesDataDiv.style.display = "none";
  header1.style.display = "flex";
  countryContainer.style.display = "flex";
  countryContainer.style.flexDirection = "column";
}

window.addEventListener("popstate", function (event) {
  if (event.state !== null) {
    showPage(event.state.page);
  } else {
    showCountryPage();
  }
});

let shoesArray = [
  {
    image: "/images/image1.jpg",
    title: "Chuck Taylor All Star",
    brand: "Clasic",
    price: "$ 6500 - $ 7500",
    shade: "UNISEX HIGH TOP SHOE",
  },
  {
    image: "/images/image2.jpg",
    title: "Chuck 100 Vintage",
    brand: "Canvas",
    price: "$ 9000",
    shade: "UNISEX HIGH TOP SHOE",
  },
  {
    image: "/images/image3.jpg",
    title: "Chuck 100 Vintage",
    brand: "Canvas",
    price: "$ 9000",
    shade: "UNISEX HIGH TOP SHOE",
  },
  {
    image: "/images/image4.jpg",
    title: "Chuck 100 Vintage",
    brand: "Canvas",
    price: "$ 9000",
    shade: "UNISEX HIGH TOP SHOE",
  },
  {
    image: "/images/image5.jpg",
    title: "Custom Chuck Taylor All",
    brand: "Start By You",
    price: "$ 9500",
    shade: "UNISEX HIGH TOP SHOE",
  },
  {
    image: "/images/image6.jpg",
    title: "Custom Chuck 70",
    brand: "Canvas By You",
    price: "$ 110,00",
    shade: "UNISEX HIGH TOP SHOE",
  },
  {
    image: "/images/image7.jpg",
    title: "Custom Chuck 70",
    brand: "Canvas By You",
    price: "$ 110,00",
    shade: "UNISEX HIGH TOP SHOE",
  },
  {
    image: "/images/image8.jpg",
    title: "Custom Chuck 70",
    brand: "Canvas By You",
    price: "$ 110,00",
    shade: "UNISEX HIGH TOP SHOE",
  },
  {
    image: "/images/image9.jpg",
    title: "Chuck 70 Sunny Floral",
    brand: "Canvas By You",
    price: "$ 9500",
    shade: "UNISEX HIGH TOP SHOE",
  },
  {
    image: "/images/img3.jpg",
    title: "Custom Chuck 70",
    brand: "Canvas By You",
    price: "$ 110,00",
    shade: "UNISEX HIGH TOP SHOE",
  },
  {
    image: "/images/img2.jpg",
    title: "Custom Chuck 70",
    brand: "Canvas By You",
    price: "$ 110,00",
    shade: "UNISEX HIGH TOP SHOE",
  },
  {
    image: "/images/img1.jpg",
    title: "Custom Run Star Hike",
    brand: "Canvas By You",
    price: "$ 110,00",
    shade: "UNISEX HIGH TOP SHOE",
  },
];

localStorage.setItem("shoesData", JSON.stringify(shoesArray));

let shoesData = localStorage.getItem("shoesData");

shoesData = JSON.parse(shoesData);

console.log({ shoesData });

function showShoes() {
  let dataDiv = document.querySelector(".shoes-data");

  shoesData.forEach(function (shoes) {
    console.log(shoes.title);

    let div = document.createElement("div");
    div.setAttribute("class", "shoes-data-columns");

    let image = document.createElement("img");
    image.src = shoes.image;
    image.setAttribute("class", "shoes-image");

    let title = document.createElement("p");
    title.innerText = shoes.title;
    title.setAttribute("class", "shoes-p");

    let brand = document.createElement("p");
    brand.innerText = shoes.brand;
    brand.setAttribute("class", "shoes-p");

    let price = document.createElement("p");
    price.innerText = shoes.price;
    price.setAttribute("class", "shoes-p");

    let shade = document.createElement("p");
    shade.innerText = shoes.shade;
    shade.setAttribute("class", "shoes-shade");

    div.append(image, title, brand, price, shade);

    dataDiv.append(div);
  });
}
showShoes();

let policyDiv = document.querySelector(".policy");

let nextSlide = 1;
let totalSlide = 2;

setInterval(() => {
  policyDiv.style.transform = `translateX(-${nextSlide * 40}%)`;
  console.log(nextSlide);

  if (nextSlide + 1 === totalSlide) {
    nextSlide = 0;
  } else {
    nextSlide++;
  }
}, 4000);
