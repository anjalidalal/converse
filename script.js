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