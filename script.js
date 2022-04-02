const belgium = document.getElementById("belgium")
const belgiumDiv = document.querySelector(".belgium")
const header1 = document.querySelector(".header1");
const countryContainer = document.querySelector(".countryContainer")


function displayBelDiv() {
    header1.style.display = "none";
    countryContainer.style.display = "none";
    belgiumDiv.style.display = "unset";

    console.log(1)
}

belgium.addEventListener("click", displayBelDiv)


// next apge of high tops shoes data 

const highShoes = document.getElementById("high-shoes");
const shoesDataDiv = document.querySelector(".shoes-data")

function displayShoesData() {
    header1.style.display = "none";
    countryContainer.style.display = "none";
    belgiumDiv.style.display = "none";

    shoesDataDiv.style.display = "unset";
}

highShoes.addEventListener("click", displayShoesData);


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
        image : <img data-fallback="true" data-src="https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dwdfad1ec4/images/a_08/572720C_A_08X1.jpg?sw=406" src="https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dwdfad1ec4/images/a_08/572720C_A_08X1.jpg?sw=406" class="none-up product-tile__img product-tile__img--main ratio-media--fit ratio-media lazyloaded" alt="Chuck Taylor All Star Lift Platform Seasonal Color Light Silver/Black/White"></img>,
        title : "Custom Chuck Taylor All",
        brand : "Start By You",
        price : "$ 9500",
        shade : "UNISEX HIGH TOP SHOE"
    },
    {
        image : <img data-fallback="true" data-src="https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dw72df09bd/images/a_08/CTASCanHiSU22_blankcanvas_medial_08X1.jpg?sw=406" src="https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dw72df09bd/images/a_08/CTASCanHiSU22_blankcanvas_medial_08X1.jpg?sw=406" class="none-up product-tile__img product-tile__img--main ratio-media--fit ratio-media lazyloaded" alt="Custom Chuck Taylor All Star By You blankcanvas"></img>,
        title : "Custom Chuck 70",
        brand : "Canvas By You",
        price : "$ 110,00",
        shade : "UNISEX HIGH TOP SHOE"
    },
    {
        image : <img data-fallback="true" data-src="https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dw8459ed14/images/a_08/CT70CanvasHiSU22_eldorado_medial_08X1.jpg?sw=406" src="https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dw8459ed14/images/a_08/CT70CanvasHiSU22_eldorado_medial_08X1.jpg?sw=406" class="none-up product-tile__img product-tile__img--main ratio-media--fit ratio-media lazyloaded" alt="Custom Chuck 70 Canvas By You eldorado"></img>,
        title : "Custom Chuck 70",
        brand : "Canvas By You",
        price : "$ 110,00",
        shade : "UNISEX HIGH TOP SHOE"
    },
    {
        image : <img data-fallback="true" data-src="https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dw887a51a2/images/a_08/172863C_A_08X1.jpg?sw=406" src="https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dw887a51a2/images/a_08/172863C_A_08X1.jpg?sw=406" class="none-up product-tile__img product-tile__img--main ratio-media--fit ratio-media lazyloaded" alt="Chuck 70 Sunny Floral Egret/University Blue/Amarillo"></img>,
        title : "Custom Chuck 70",
        brand : "Canvas By You",
        price : "$ 110,00",
        shade : "UNISEX HIGH TOP SHOE"
    },
    {
        image : <img data-fallback="true" data-src="https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dw4610d56a/images/a_08/CTASCanHiSU22_mango_medial_08X1.jpg?sw=406" src="https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dw4610d56a/images/a_08/CTASCanHiSU22_mango_medial_08X1.jpg?sw=406" class="none-up product-tile__img product-tile__img--main ratio-media--fit ratio-media ls-is-cached lazyloaded" alt="Custom Chuck Taylor All Star By You mango"></img>,
        title : "Chuck 70 Sunny Floral",
        brand : "Canvas By You",
        price : "$ 9500",
        shade : "UNISEX HIGH TOP SHOE"
    },
    {
        image : <img data-fallback="true" data-src="https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dwdfad1ec4/images/a_08/572720C_A_08X1.jpg?sw=406" src="https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dwdfad1ec4/images/a_08/572720C_A_08X1.jpg?sw=406" class="none-up product-tile__img product-tile__img--main ratio-media--fit ratio-media lazyloaded" alt="Chuck Taylor All Star Lift Platform Seasonal Color Light Silver/Black/White"></img>,
        title : "Custom Chuck 70",
        brand : "Canvas By You",
        price : "$ 110,00",
        shade : "UNISEX HIGH TOP SHOE"
    },
    {
        image : <img data-fallback="true" data-src="https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dwfab1a657/images/a_08/CT70CanvasHiSU22_khaki_medial_08X1.jpg?sw=406" src="https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dwfab1a657/images/a_08/CT70CanvasHiSU22_khaki_medial_08X1.jpg?sw=406" class="none-up product-tile__img product-tile__img--main ratio-media--fit ratio-media lazyloaded" alt="Custom Chuck 70 Canvas By You khaki"></img>,
        title : "Custom Chuck 70",
        brand : "Canvas By You",
        price : "$ 110,00",
        shade : "UNISEX HIGH TOP SHOE"
    },
    {
        image : <img data-fallback="true" data-src="https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dwbbefd508/images/j_08/172824C_J_08X1.jpg?sw=406" src="https://www.converse.com/dw/image/v2/AALW_PRD/on/demandware.static/-/Sites-ConverseMaster/default/dwbbefd508/images/j_08/172824C_J_08X1.jpg?sw=406" class="none-up product-tile__img product-tile__img--main ratio-media--fit ratio-media lazyloaded" alt="Chuck 70 Sunny Floral Black/Washed Teal/Game Royal"></img>,
        title : "Custom Run Star Hike",
        brand : "Canvas By You",
        price : "$ 110,00",
        shade : "UNISEX HIGH TOP SHOE"
    }
]