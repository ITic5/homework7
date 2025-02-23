// let bannerText = document.getElementById("banner");
//
// bannerText.style.fontSize = "50px";
//
// let userInput = prompt("Who's there?!");
// bannerText.innerText = "Hello " + userInput + "!";
// let userFontColor = prompt("Enter font color you want:");
// bannerText.style.color = userFontColor.toLowerCase();
// let userBgColor = prompt("Enter background color you want:");
// bannerText.style.backgroundColor = userBgColor.toLowerCase();

// document.getElementsByClassName --> VRACA ARRAY!!!!


//Exercise from lesson
let paragraphs = document.getElementsByClassName("description");
console.log(paragraphs.length);


let counter = 0;
for (let p in paragraphs) {
    if (paragraphs[p].innerText !== 0) {
        paragraphs[p].innerText = counter;
        counter++;
    }
}

/*Homework: hteo sam malo da otezam sebi,
* ali nisam uspeo bas sve sam, jer izgleda da ne razumem bas najbolje koja se
* petlja kada koristi, posto sam pokusavao da sve uradim sa forin.
* U sustini konsultovao sam se sa chatgpt-em sta nije u redu sa kodom. Ukazao mi je
* na to da se ne moze koristiti forin nego forof ili foreach, a s obzirom da to jos
* nisam presao u lekcijama, pitao sam da li moze obican for loop. Ostalo je bilo jasno.
*/
let ads = [
    {
        title: "Skoda Octavia 2014",
        price: 9950,
        image: "https://shorturl.at/wkKkS"
    },
    {
        title: "Audi A4 2007",
        price: 7500,
        image: "https://shorturl.at/BvbQB"
    }
];

let adsContainer = document.getElementById("products");
adsContainer.style.display = "flex";
adsContainer.style.gap = "10px";

//Structure
let firstAd = document.createElement("div");
adsContainer.appendChild(firstAd);
firstAd.classList.add("adWrapper");
let secondAd = document.createElement("div");
adsContainer.appendChild(secondAd);
secondAd.classList.add("adWrapper");

let adsWrapper = document.querySelectorAll(".adWrapper");
for (let adWrap = 0; adWrap < adsWrapper.length; adWrap++) {
    let adHeading = document.createElement("h2");
    adHeading.classList.add("adHeading");
    let adPrice = document.createElement("p");
    adPrice.classList.add("adPrice");
    let adImage = document.createElement("img");
    adImage.classList.add("adImage");

    adsWrapper[adWrap].appendChild(adHeading);
    adsWrapper[adWrap].appendChild(adPrice);
    adsWrapper[adWrap].appendChild(adImage);
    adsWrapper[adWrap].style.backgroundColor = "#fff";
}
let adHeadings = document.querySelectorAll(".adHeading");
let adPrices = document.querySelectorAll(".adPrice");
let adImages = document.querySelectorAll(".adImage");

for (let i = 0; i < adsWrapper.length; i++) {
    adHeadings[i].innerText = ads[i].title;
    adPrices[i].innerText = "$ " + ads[i].price;
    adImages[i].setAttribute("src", ads[i].image);
    adImages[i].style.width = "500px";
    adImages[i].style.height = "500px";
    adImages[i].style.objectFit = "cover";
}