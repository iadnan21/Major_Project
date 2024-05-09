// Profit-track Page
const firstBtn = document.querySelector(".first-btn");
firstBtn.addEventListener("click", () => {
    const link = window.location.href;
    navigator.clipboard.writeText(link);
});

const customTooltip = document.querySelector("#custom-tooltip");
firstBtn.addEventListener("click", () => {
    customTooltip.style.visibility = "visible";
    setTimeout( () => {
        customTooltip.style.visibility = "hidden";
    }, 1000);
});




const mainContainerDiv = document.querySelector(".main-container-div");
const profitRatesBtn = document.querySelector("#profit-rates-btn");
const offerDetailsBtn = document.querySelector("#offer-details-btn");

function showProfitRatesContainer() {
    let html = `
        <div class="profit-rates-container table-responsive">
            <table class="table table-borderless">
                <tbody class="profit-rates-body">
                    <tr>
                        <th>3.20%</th>
                        <td>All Users | Fashion & Lifestyle Categories (Except mentioned below)</td>
                    </tr>
                    <tr>
                        <th>8%</th>
                        <td>All users (Upto Rs 40) | Fashion & Lifestyle (MensSports Footwear & LuggageAndTravelAccessories)</td>
                    </tr>
                    <tr>
                        <th>4.80%</th>
                        <td>All Users (Rs 480) | Large Appliances (Television)</td>
                    </tr>
                    <tr>
                        <th>4%</th>
                        <td>All Users | Books & General Merchandise (Auto Accessory, Toys, Personal Care, Books & Media, Baby Care, Sports)</td>
                    </tr>
                    <tr>
                        <th>4%</th>
                        <td>All Users (Upto Rs 240) | Small Home Appliances (Air Cooler, Fan, Geyser, Room Heater, Hand Blender, Electric Cooker, Mixer Grinder, Electric Kettle, Microwave, etc...)</td>
                    </tr>
                    <tr>
                        <th>4%</th>
                        <td>All Users (Upto Rs 400) | Electronic Devices & Accessories (Audio, IOT, bank, Personal Health Care, Tablet, Laptop & Desktop, Camera, Gaming, Mobile protection & Rest of Mobile Accessories)</td>
                    </tr>
                    <tr>
                        <th>4%</th>
                        <td>All Users | Furniture (Bed, Sofa, Shoe Cabinet, Bookshelf, Kitchen Cabinets, Cupboards, Bean Bag, Stool, TV Mount, Coffee Table, Office Study Table etc...)</td>
                    </tr>

                </tbody>
            </table>
        </div>
    `;

    mainContainerDiv.innerHTML = html;
};

function showOfferDetailsContainer() {
    let html = `
        <div class="offer-details-container">
            <h6>Key Points -</h6>
            <ul>
                <li>CashRace Cookie Time/Session time is 30 minutes only</li>
                <li>Bulk orders from same CashRace account will get cancelled</li>
                <li>Profit will track excluding Shipping Charges</li>
                <li>Order will be confirmed on the exact value of product (Excluding shipping charges)</li>
                <li>Profit will track at different rates for few categories. This will be corrected at the time
                    of confirmation</li>
                <li>No profit if the order is Cancelled / Returned / Exchanged / Replaced</li>
            </ul>
            <hr>
            <h6>EarnKaro Profit Related -</h6>
            <ul>
                <li>Tracking Time: 6 Hours</li>
                <li>Missing Profit Tickets: Accepted</li>
                <li>Confirmation Time: 90 days</li>
                <li>Referral: Off</li>
                <li>Profit on App orders: Yes</li>
            </ul>
            <hr>
            <h6>Profit Didn't Track?</h6>
            <ul>
                <li>Raise a Missing Ticket!</li>
                <li>Go to Profile and open Missing Profit</li>
                <li>Missings will not be accepted after 10 days of Order Date</li>
                <li>Missing Profit will track at the lowest profit rate and will be corrected at the time of validation</li>
            </ul>
        </div>
    `;

    mainContainerDiv.innerHTML = html;
};

showProfitRatesContainer();

profitRatesBtn.addEventListener("click", () => {
    // console.log(`Clicked on profitRatesBtn`);
    offerDetailsBtn.style.background = "#242424";
    profitRatesBtn.style.background = "rgb(42, 42, 42)";
    showProfitRatesContainer();
});

offerDetailsBtn.addEventListener("click", () => {
    // console.log(`Clicked on offerDetailsBtn`);
    profitRatesBtn.style.background = "#242424";
    offerDetailsBtn.style.background = "rgb(42, 42, 42)";
    showOfferDetailsContainer();
});
