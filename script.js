// =============================
// Read More / Read Less
// =============================

const readBtn = document.getElementById("readBtn");
const moreDetails = document.getElementById("moreDetails");

readBtn.addEventListener("click", function () {

    if (moreDetails.style.display === "block") {

        // Hide details
        moreDetails.style.display = "none";

        // Change button text
        readBtn.innerHTML = "📖 Read More";

    } else {

        // Show details
        moreDetails.style.display = "block";

        // Change button text
        readBtn.innerHTML = "📕 Read Less";

    }

});


// =============================
// Call Now Dropdown
// =============================

const callBtn = document.getElementById("callBtn");
const callDropdown = document.getElementById("callDropdown");

callBtn.addEventListener("click", function () {

    if (callDropdown.style.display === "block") {

        callDropdown.style.display = "none";

    } else {

        callDropdown.style.display = "block";

    }

});


// =============================
// Call Selected Number
// =============================

const phoneSelect = document.getElementById("phoneSelect");

phoneSelect.addEventListener("change", function () {

    const number = this.value;

    if (
        number === "9444892265" ||
        number === "7358528262"
    ) {

        // Open phone dialer
        window.location.href = "tel:+91" + number;

    }

});


// =============================
// Close dropdown when clicking
// outside the Call section
// =============================

document.addEventListener("click", function(event) {

    const callSection = document.querySelector(".call-section");

    if (
        !callSection.contains(event.target) &&
        callDropdown.style.display === "block"
    ) {

        callDropdown.style.display = "none";

    }

});