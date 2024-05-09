// Site developed by
// Kakuli - https://www.linkedin.com/in/mekakuli

import { todayDeal } from "./js/todayDeal.js";

import { mobiles } from "./js/mobiles.js";
import { laptops } from "./js/laptops.js";
import { televisions } from "./js/televisions.js";
import { homeDecorAndFurnishings } from "./js/homeDecorAndFurnishings.js";
import { everydayElectronics } from "./js/everydayElectronics.js";
import { washingMachines } from "./js/washingMachines.js";
import { kitchenAndDining } from "./js/kitchenAndDining.js";
import { bluetoothSpeakers } from "./js/bluetoothSpeakers.js";
import { smartWatchAndFitnessBand } from "./js/smartWatchAndFitnessBand.js";

import { autocompleteListWithLinks } from "./js/autocomplete.js";


// Reload page
const reloadPage = document.querySelector(".reload-page");
reloadPage.addEventListener("click", () => {
    window.location.reload();
});






const inputBox = document.querySelector(".input-box");
const openHeaderSidebar = document.querySelector("#open-header-sidebar");
const logoContainer = document.querySelector(".logo-container");

if (window.matchMedia("(max-width: 445px)").matches) {
    inputBox.placeholder = "Search";
};

if (window.matchMedia("(max-width: 645px)").matches) {
    inputBox.addEventListener("click", () => {
        openHeaderSidebar.style.display = "none";
        logoContainer.style.display = "none";
    });

    document.body.addEventListener('click', () => {
        openHeaderSidebar.style.display = "inline-block";
        logoContainer.style.display = "flex";
    }, true);
};





let slideBtnLeft = document.getElementById("slide-btn-left");
let slideBtnRight = document.getElementById("slide-btn-right");
let imgItem = document.querySelectorAll(".image-item");

// console.log(imgItem.length - 1);

let startSlider = 0;
let endSlider;
if (window.matchMedia("(max-width: 645px)").matches) {
    endSlider = (imgItem.length - 4) * 100;  // 400
};
if (window.matchMedia("(min-width: 646px)").matches) {
    endSlider = (imgItem.length - 1) * 100;  // 700
};

slideBtnLeft.addEventListener("click", handleLeftBtn);

function handleLeftBtn() {
    if (startSlider < 0) {
        startSlider = startSlider + 100;
    };
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    });
};

slideBtnRight.addEventListener("click", handleRightBtn);

function handleRightBtn() {
    if (startSlider >= -endSlider + 100) {
        startSlider = startSlider - 100;
    };
    imgItem.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    });
};

//render automatic
function renderSlideAuto() {

    if (startSlider >= -endSlider + 100) {
        handleRightBtn();
        // console.log(endSlider);
    }
    else {
        startSlider = 0;
    };
};
setInterval(renderSlideAuto, 2000);




/***** sidebar navigation  */
const sidebarNavigationEl = document.getElementById("sidebar-container-navigation-id");
const sidebarOpenNavigationEl = document.getElementById("open-nav-sidebar");
const sidebarOpenNavigationHeader = document.getElementById("open-header-sidebar");
const sidebarCloseNavigationEl = document.getElementById("sidebar-navigation-close");


//  console.log(sidebarNavigationEl)

sidebarOpenNavigationEl.addEventListener("click", () => {
    sidebarNavigationEl.classList.toggle("slidebar-show");
});
sidebarOpenNavigationHeader.addEventListener("click", () => {
    sidebarNavigationEl.classList.toggle("slidebar-show");
});
sidebarCloseNavigationEl.addEventListener("click", () => {
    sidebarNavigationEl.classList.toggle("slidebar-show")
});




//today deals 
// console.log(todayDeal);
let todayDealProductListEl = document.querySelector(".today_deals_product_list");
// console.log(todayDealProductListEl);

let todayDealProductHTML = ""

let todayDealLength = todayDeal.length;

for (let i = 0; i < todayDealLength; i++) {
    // console.log(todayDeal[i])

    todayDealProductHTML += `
    <a href=${todayDeal[i].linkToProduct}>
        <div class="today_deals_product_item">
                <div class="todayDeals_product_image">
                    <img src=${todayDeal[i].img} alt=${todayDeal[i].alt} />
                </div>
            <div class="discount_Container">
                <p>Up to ${todayDeal[i].discount}% off</p>
                <p class="hide-on-mobile">${todayDeal[i].DealOfDay}</p>
            </div>
            <p>${todayDeal[i].desc}</p>
        </div>
        </a>
    `
}

todayDealProductListEl.innerHTML = todayDealProductHTML;
//  console.log(todayDealProductHTML)

let today_deal_btn_prevEl = document.getElementById("today_deal_btn_prev")
let today_deal_btn_nextEl = document.getElementById("today_deal_btn_next")
let today_deals_product_itemEl = document.querySelectorAll(".today_deals_product_item")

let startProduct = 0;

today_deal_btn_prevEl.addEventListener("click", () => {

    if (window.matchMedia("(max-width: 1290px)").matches) {
        // Viewport is less or equal to 1290 pixels wide
        if (startProduct < 0) {
            startProduct += 20
        };
        if (startProduct > -2000) {
            today_deals_product_itemEl.forEach(el => {
                el.style.transform = `translateX(${startProduct}%)`
            })
        };
    };

    if (window.matchMedia("(max-width: 1500px)").matches) {
        // Viewport is less or equal to 1500 pixels wide
        if (startProduct < 0) {
            startProduct += 380
        };
        if (startProduct > -2000) {
            today_deals_product_itemEl.forEach(el => {
                el.style.transform = `translateX(${startProduct}%)`
            })
        };
    };
});

today_deal_btn_nextEl.addEventListener("click", () => {
    // alert("next");

    if (window.matchMedia("(max-width: 1290px)").matches) {
        // Viewport is less or equal to 1290 pixels wide
        if (startProduct > -800) {
            startProduct -= 10
        };
    };

    if (window.matchMedia("(max-width: 1500px)").matches) {
        // Viewport is less or equal to 1500 pixels wide
        if (startProduct > -1000) {
            startProduct -= 380
        };
    };

    today_deals_product_itemEl.forEach(el => {
        el.style.transform = `translateX(${startProduct}%)`
    });
});


// Deals & Coupons

// Products
const product_container = document.querySelector(".product_container");

function showCustomProductContainer(productName, product, productViewAllLink) {

    let productHTML = ``;
    let productHTMLLength = product.length;


    for (let i = 0; i < productHTMLLength; i++) {
        // console.log(laptops[i]);

        productHTML += `
    <a href=${product[i].linkToProduct}>
    <div class="product_item">
                <div class="todayDeals_product_image">
                    <img src=${product[i].img} alt=${product[i].alt} />
                </div>
            <div class="product-discount_Container">
                <p>${product[i].discount}% off</p>
                <p>${product[i].priceNow}</p>
                <p><s>${product[i].priceBefore}</s></p>
            </div>
            <p>${product[i].desc}</p>
            </div>
        </a>
    `;
    }

    let productContainerHTML = `
<div class="cat-innerlft hide-on-small-only">
                        <span class="dib ml6 fs18 fw-bold">Best ${productName}
                    Deals</span>
                    <a class="view-all" target="_blank" href="${productViewAllLink}">View All</a>
                    
                </div>
                

                    <div class="today_deals_product_container">
                        <div class="today_deals_btn_container">
                            <button class="today_deal_btn" id="product_btn_prev">
                                <i class="fa-solid fa-angle-left"></i>
                            </button>
                            <button class="today_deal_btn" id="product_btn_next">
                                <i class="fa-solid fa-angle-right"></i>
                            </button>
                        </div>
                        <div class="products_list">${productHTML}</div>
                        </div>`;

    product_container.innerHTML = productContainerHTML;
};

showCustomProductContainer("Mobile", mobiles, "https://www.flipkart.com/search?q=mobiles&as=on&as-show=on&otracker=AS_Query_OrganicAutoSuggest_3_7_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_3_7_na_na_na&as-pos=3&as-type=RECENT&suggestionId=mobiles&requestId=6a31b946-5b45-407b-8614-aa9374e9bd32&as-searchtext=mobiles");



// 1. Mobiles
const home_dc_mobiles = document.querySelector("#home_dc_mobiles");

home_dc_mobiles.addEventListener("click", () => {
    // console.log(`Clicked on Mobile Container.`);

    showCustomProductContainer("Mobile", mobiles, "https://www.flipkart.com/search?q=mobiles&as=on&as-show=on&otracker=AS_Query_OrganicAutoSuggest_3_7_na_na_na&otracker1=AS_Query_OrganicAutoSuggest_3_7_na_na_na&as-pos=3&as-type=RECENT&suggestionId=mobiles&requestId=6a31b946-5b45-407b-8614-aa9374e9bd32&as-searchtext=mobiles");

    sliderCode();
});

// 2. Laptops
const home_dc_laptops = document.querySelector("#home_dc_laptops");

home_dc_laptops.addEventListener("click", () => {
    // console.log(`Clicked on Laptop Container.`);

    showCustomProductContainer("Laptop", laptops, "https://www.amazon.in/s?k=laptops&crid=2WVODB6TWQR10&sprefix=laptop%2Caps%2C267&ref=nb_sb_noss_1");

    sliderCode();
});

// 3. Televisions
const home_dc_televisions = document.querySelector("#home_dc_televisions");

home_dc_televisions.addEventListener("click", () => {
    showCustomProductContainer("Television", televisions, "https://www.flipkart.com/search?q=television&sid=ckf%2Cczl&as=on&as-show=on&otracker=AS_QueryStore_HistoryAutoSuggest_1_10_na_na_na&otracker1=AS_QueryStore_HistoryAutoSuggest_1_10_na_na_na&as-pos=1&as-type=HISTORY&suggestionId=television%7CTelevisions&requestId=a432213e-5ef4-4a8e-8258-6d07658af0a8&as-searchtext=television");
    sliderCode();
});

// 4. Home Decor & Furnishing
const home_dc_home_decor_and_furnishing = document.querySelector("#home_dc_home_decor_and_furnishing");

home_dc_home_decor_and_furnishing.addEventListener("click", () => {
    showCustomProductContainer("Home Decor & Furnishing", homeDecorAndFurnishings, "https://www.amazon.in/s?k=home+decor+and+furnishing&crid=3JUZUCMMQNE9G&sprefix=home+decor+and+fur%2Caps%2C247&ref=nb_sb_ss_ts-doa-p_2_18");
    sliderCode();
});

// 5. Everyday Electronics
const home_dc_everyday_electronics = document.querySelector("#home_dc_everyday_electronics");

home_dc_everyday_electronics.addEventListener("click", () => {
    showCustomProductContainer("Everyday Electronics", everydayElectronics, "https://www.flipkart.com/search?q=electronics&sid=j9e%2Cabm&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_3_11_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_3_11_na_na_ps&as-pos=3&as-type=RECENT&suggestionId=electronics%7CHome+Appliances&requestId=f9b03c1d-b79b-43e8-a993-7c02136377c7&as-searchtext=electronics");
    sliderCode();
});

// 6. Washing Machine
const home_dc_washing_machine = document.querySelector("#home_dc_washing_machine");

home_dc_washing_machine.addEventListener("click", () => {
    showCustomProductContainer("Washing Machine", washingMachines, "https://www.amazon.in/s?k=washing+machine&crid=P7P9GCJJQ7H8&sprefix=washing%2Caps%2C259&ref=nb_sb_ss_ts-doa-p_3_7");
    sliderCode();
});

// 7. Kitchen & Dining
const home_dc_kitchen_and_dining = document.querySelector("#home_dc_kitchen_and_dining");

home_dc_kitchen_and_dining.addEventListener("click", () => {
    showCustomProductContainer("Kitchen & Dining", kitchenAndDining, "https://www.amazon.in/s?k=kitchen+and+dining&crid=1ZIQUQ94JK31L&sprefix=kitchen+and+%2Caps%2C284&ref=nb_sb_ss_ts-doa-p_2_12");
    sliderCode();
});

// 8. Bluetooth Speakers
const home_dc_bluetooth_speakers = document.querySelector("#home_dc_bluetooth_speakers");

home_dc_bluetooth_speakers.addEventListener("click", () => {
    showCustomProductContainer("Bluetooth Speakers", bluetoothSpeakers, "https://www.flipkart.com/search?q=bluetooth+speaker&sid=0pm%2C0o7&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_10_na_na_na&otracker1=AS_QueryStore_OrganicAutoSuggest_1_10_na_na_na&as-pos=1&as-type=RECENT&suggestionId=bluetooth+speaker%7CSpeakers&requestId=bce252df-139e-4c5e-a162-f045013880cc&as-searchtext=bluetooth%20");
    sliderCode();
});

// 9. Smart Watch & Fitness Band
const home_dc_smart_watch_and_fitness_band = document.querySelector("#home_dc_smart_watch_and_fitness_band");

home_dc_smart_watch_and_fitness_band.addEventListener("click", () => {
    showCustomProductContainer("Smart Watch & Fitness Band", smartWatchAndFitnessBand, "https://www.flipkart.com/search?q=smart+watch+health+and+fitness&sid=ajy%2Cbuh&as=on&as-show=on&otracker=AS_QueryStore_OrganicAutoSuggest_1_23_na_na_ps&otracker1=AS_QueryStore_OrganicAutoSuggest_1_23_na_na_ps&as-pos=1&as-type=RECENT&suggestionId=smart+watch+health+and+fitness%7CSmart+Watches&requestId=d3462dfe-5e22-4231-9325-86c65767f23b&as-searchtext=smart%20watch%20and%20fitness");
    sliderCode();
});


// Add "select" Class to Current Element

// Get the container element
var products_div = document.getElementById("products_div");

// Get all buttons with class="btn" inside the container
var product_elements = products_div.getElementsByClassName("product_element");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < product_elements.length; i++) {
    product_elements[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("select");
        current[0].className = current[0].className.replace(" select", "");
        this.className += " select";
    });
};



// // slider
function sliderCode() {
    // console.log(`SliderCode Function`);

    const product_btn_prevEl = document.getElementById("product_btn_prev");
    let product_btn_nextEl = document.getElementById("product_btn_next");
    let product_itemEl = document.querySelectorAll(".product_item");


    let startDealsAndCouponsProduct = 0;

    product_btn_prevEl.addEventListener("click", () => {
        // console.log(`Clicked on product_btn_prevEl`);

        if (window.matchMedia("(max-width: 1290px)").matches) {
            // Viewport is less or equal to 1290 pixels wide
            if (startDealsAndCouponsProduct < 0) {
                startDealsAndCouponsProduct += 10
            };
            if (startDealsAndCouponsProduct > -1000) {
                product_itemEl.forEach(el => {
                    el.style.transform = `translateX(${startDealsAndCouponsProduct}%)`
                })
            };
        };

        if (window.matchMedia("(max-width: 1500px)").matches) {
            // Viewport is less or equal to 1500 pixels wide
            if (startDealsAndCouponsProduct < 0) {
                startDealsAndCouponsProduct += 380
            };
            if (startDealsAndCouponsProduct > -2000) {
                product_itemEl.forEach(el => {
                    el.style.transform = `translateX(${startDealsAndCouponsProduct}%)`
                })
            };
        };
    });

    product_btn_nextEl.addEventListener("click", () => {
        // alert("next");
        // console.log(`Clicked on product_btn_nextEl`);

        if (window.matchMedia("(max-width: 1290px)").matches) {
            // Viewport is less or equal to 1290 pixels wide
            if (startDealsAndCouponsProduct > -800) {
                startDealsAndCouponsProduct -= 10
            };
        };

        if (window.matchMedia("(max-width: 1500px)").matches) {
            // Viewport is less or equal to 1500 pixels wide
            if (startDealsAndCouponsProduct > -1000) {
                startDealsAndCouponsProduct -= 380
            };
        };

        product_itemEl.forEach(el => {
            el.style.transform = `translateX(${startDealsAndCouponsProduct}%)`
        });
    });
};

sliderCode();




// Autocomplete Search Bar
const resultsBox = document.querySelector(".result-box");
const searchBtn = document.querySelector(".search-btn");

inputBox.onkeyup = function () {
    let resultObjectsArray = [];
    let input = inputBox.value;
    if (input.length) {
        resultObjectsArray = autocompleteListWithLinks.filter(({ keyword }) => {
            // console.log(keyword);
            return keyword.toLowerCase().includes(input.toLowerCase());
        });
        // console.log(resultObjectsArray);

        // Search by clicking on btn
        searchBtn.addEventListener("click", () => {
            // console.log("Clicked on searchBtn");
            let resultObj = resultObjectsArray.find(({ keyword }) => keyword.toLowerCase() === input.toLowerCase());
            // console.log(resultObj.link);
            location.href = resultObj.link;
        });

    };

    display(resultObjectsArray);

    if (!resultObjectsArray.length) {
        resultsBox.innerHTML = "";
    };

};


function display(resultObjectsArray) {
    // console.log(resultObjectsArray);
    let content = resultObjectsArray.map(({ keyword, link }) => {
        return `<li class="list-ele">
        <a href=${link}>${keyword}</a>
        </li>`;
    });
    // console.log(content);
    resultsBox.innerHTML = `<ul>${content.join("")}</ul>`;


    const listElements = document.querySelectorAll(".list-ele");
    // console.log(listElements);
    for (const listEle of listElements) {
        if (listEle) {
            listEle.addEventListener("click", () => {
                // console.log("Clicked on listEle");
                // console.log(listEle);
                // console.log(listEle.innerHTML);
                // console.log(listEle.innerText);
                // console.log(listEle.textContent);
                inputBox.value = listEle.innerText;
                resultsBox.innerHTML = "";
            });
        };
    };

};


// Text indent correctly input text in header (on result box click)
resultsBox.addEventListener("click", () => {
    inputBox.style.textIndent = "-30px";
});


// nav cover functionality
const navCoverDiv = document.querySelector(".nav-cover-div");

inputBox.addEventListener("click", () => {
    navCoverDiv.classList.add("nav-cover");
    resultsBox.style.display = "block";
});

document.body.addEventListener('click', () => {
    navCoverDiv.classList.remove("nav-cover");
    resultsBox.style.display = "none";
    inputBox.value = "";
}, true);


// Footer Div Show (Max Screen Size <= 600px)
const collapseFooterLink2 = document.querySelector("#collapseFooterLink2");
const collapseFooterDiv2 = document.querySelector("#collapseFooterDiv2");

const collapseFooterLink3 = document.querySelector("#collapseFooterLink3");
const collapseFooterDiv3 = document.querySelector("#collapseFooterDiv3");

const collapseFooterLink4 = document.querySelector("#collapseFooterLink4");
const collapseFooterDiv4 = document.querySelector("#collapseFooterDiv4");

if (window.matchMedia("(max-width: 645px)").matches) {
    collapseFooterDiv2.style.display = "none";
    collapseFooterLink2.addEventListener("click", () => {
        // console.log("Clicked on collapseFooterLink2");
        if (collapseFooterDiv2.style.display === "none") {
            collapseFooterDiv2.style.display = "block";
        } else {
            collapseFooterDiv2.style.display = "none";
        };
    });

    collapseFooterDiv3.style.display = "none";
    collapseFooterLink3.addEventListener("click", () => {
        // console.log("Clicked on collapseFooterLink3");
        if (collapseFooterDiv3.style.display === "none") {
            collapseFooterDiv3.style.display = "block";
        } else {
            collapseFooterDiv3.style.display = "none";
        };
    });

    collapseFooterDiv4.style.display = "none";
    collapseFooterLink4.addEventListener("click", () => {
        // console.log("Clicked on collapseFooterLink4");
        if (collapseFooterDiv4.style.display === "none") {
            collapseFooterDiv4.style.display = "block";
        } else {
            collapseFooterDiv4.style.display = "none";
        };
    });
};
