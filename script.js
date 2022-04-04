
const belgium = document.getElementById("belgium")
const belgiumDiv = document.querySelector(".belgium")
const header1 = document.querySelector(".header1");
const countryContainer = document.querySelector(".countryContainer")
const highShoes = document.getElementById("high-shoes");
const shoesDataDiv = document.querySelector(".shoes-data-page")



function showPage(pageName) {
    switch (pageName) {
        case "belgium" :
            displayBelgiumlDiv()
            break;
        case "shoesData" :
            displayShoesData()
            break;
        default:
            showCountryPage()
            break;
    }
}

2
function displayBelgiumlDiv() {
    window.scroll(0, 0);

    header1.style.display = "none";
    countryContainer.style.display = "none";
    belgiumDiv.style.display = "unset";

}

belgium.addEventListener("click", function() {
    window.scroll(0, 0);

    history.pushState({
        page: "belgium"
    }, "", "/belgium");

    displayBelgiumlDiv("belgium")

})

 

function displayShoesData() {

    window.scroll(0, 0)
    belgiumDiv.style.display = "none";
    shoesDataDiv.style.display = "unset";

}


highShoes.addEventListener("click", function() {
    window.scroll(0, 0);

    history.pushState({
        page: "shoesData"
    }, "", "/all-high-tops");

    displayShoesData("shoesData")

});

function showCountryPage() {
    window.scroll(0, 0);

    belgiumDiv.style.display = "none";
    shoesDataDiv.style.display = "none";
    header1.style.display = "flex";
    countryContainer.style.display = "flex";
    countryContainer.style.flexDirection = "column"
}


window.addEventListener("popstate", function (event) {
    if (event.state !== null) {   
        showPage(event.state.page)
    }
    else{
        showCountryPage()
    }
})

let shoesArray = [
    {
        image : "https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dwae14d6a7/images/a_08/167491F_A_08X1.jpg?sw=406",
        title : "Chuck Taylor All Star",
        brand : "Clasic",
        price : "$ 6500 - $ 7500",
        shade : "UNISEX HIGH TOP SHOE"
    },
    {
        image : "https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dw9660a3d1/images/a_08/162050C_A_08X1.jpg?sw=406",
        title : "Chuck 100 Vintage",
        brand : "Canvas",
        price : "$ 9000",
        shade : "UNISEX HIGH TOP SHOE"
    },
    {
        image : "https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dw8663353b/images/a_08/172682C_A_08X1.jpg?sw=406",
        title : "Chuck 100 Vintage",
        brand : "Canvas",
        price : "$ 9000",
        shade : "UNISEX HIGH TOP SHOE"
    },
    {
        image : "https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dw3d39a1f8/images/d_08/172683C_D_08X1.jpg?sw=406",
        title : "Chuck 100 Vintage",
        brand : "Canvas",
        price : "$ 9000",
        shade : "UNISEX HIGH TOP SHOE"
    },
    {
        image : "https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dwdfad1ec4/images/a_08/572720C_A_08X1.jpg?sw=406",
        title : "Custom Chuck Taylor All",
        brand : "Start By You",
        price : "$ 9500",
        shade : "UNISEX HIGH TOP SHOE"
    },
    {
        image : "https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dw72df09bd/images/a_08/CTASCanHiSU22_blankcanvas_medial_08X1.jpg?sw=406",
        title : "Custom Chuck 70",
        brand : "Canvas By You",
        price : "$ 110,00",
        shade : "UNISEX HIGH TOP SHOE"
    },
    {
        image : "https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dw8459ed14/images/a_08/CT70CanvasHiSU22_eldorado_medial_08X1.jpg?sw=406",
        title : "Custom Chuck 70",
        brand : "Canvas By You",
        price : "$ 110,00",
        shade : "UNISEX HIGH TOP SHOE"
    },
    {
        image : "https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dw887a51a2/images/a_08/172863C_A_08X1.jpg?sw=406",
        title : "Custom Chuck 70",
        brand : "Canvas By You",
        price : "$ 110,00",
        shade : "UNISEX HIGH TOP SHOE"
    },
    {
        image : "https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dw4610d56a/images/a_08/CTASCanHiSU22_mango_medial_08X1.jpg?sw=406",
        title : "Chuck 70 Sunny Floral",
        brand : "Canvas By You",
        price : "$ 9500",
        shade : "UNISEX HIGH TOP SHOE"
    },
    {
        image : "https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dwdfad1ec4/images/a_08/572720C_A_08X1.jpg?sw=406",
        title : "Custom Chuck 70",
        brand : "Canvas By You",
        price : "$ 110,00",
        shade : "UNISEX HIGH TOP SHOE"
    },
    {
        image : "https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dwfab1a657/images/a_08/CT70CanvasHiSU22_khaki_medial_08X1.jpg?sw=406",
        title : "Custom Chuck 70",
        brand : "Canvas By You",
        price : "$ 110,00",
        shade : "UNISEX HIGH TOP SHOE"
    },
    {
        image : "https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dwbbefd508/images/j_08/172824C_J_08X1.jpg?sw=406",
        title : "Custom Run Star Hike",
        brand : "Canvas By You",
        price : "$ 110,00",
        shade : "UNISEX HIGH TOP SHOE"
    }
]


localStorage.setItem("shoesData", JSON.stringify(shoesArray));

let shoesData = localStorage.getItem("shoesData")

shoesData = JSON.parse(shoesData)

console.log(shoesData);

function showShoes() {
    let dataDiv = document.querySelector(".shoes-data")

    shoesData.forEach(function (shoes) {
        console.log(shoes.title);

        let div = document.createElement("div");
        div.setAttribute("class", "shoes-data-columns")


        let image = document.createElement("img");
        image.src = shoes.image;
        image.setAttribute("class", "shoes-image")

        let title = document.createElement("p");
        title.innerText = shoes.title;
        title.setAttribute("class", "shoes-p")


        let brand = document.createElement("p");
        brand.innerText = shoes.brand;
        brand.setAttribute("class", "shoes-p")


        let price = document.createElement("p");
        price.innerText = shoes.price;
        price.setAttribute("class", "shoes-p")


        let shade = document.createElement("p");
        shade.innerText = shoes.shade;
        shade.setAttribute("class", "shoes-shade")


        div.append(image, title, brand, price, shade);

        dataDiv.append(div)
    });
}
showShoes();
