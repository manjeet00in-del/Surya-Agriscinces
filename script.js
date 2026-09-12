// ========================================
// SURYA AGRISCIENCES - WEBSITE JAVASCRIPT
// ========================================

// ===============================
// BUSINESS CONTACT DETAILS
// ===============================

const WHATSAPP_NUMBER = "919977930010";
const DISPLAY_PHONE = "+91 99779 30010";


// ===============================
// PAGE LOAD
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    // Current year
    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    // Display phone number
    const phoneElements = document.querySelectorAll(
        "#phoneDisplay, #footerPhone"
    );

    phoneElements.forEach(function (element) {
        element.textContent = DISPLAY_PHONE;
    });


    // ===============================
    // MOBILE MENU
    // ===============================

    const menuBtn = document.getElementById("menuBtn");
    const navMenu = document.getElementById("navMenu");

    if (menuBtn && navMenu) {

        menuBtn.addEventListener("click", function () {

            navMenu.classList.toggle("active");

            if (navMenu.classList.contains("active")) {
                menuBtn.innerHTML = "✕";
            } else {
                menuBtn.innerHTML = "☰";
            }

        });


        // Close menu after clicking navigation link
        const navLinks = navMenu.querySelectorAll("a");

        navLinks.forEach(function (link) {

            link.addEventListener("click", function () {

                navMenu.classList.remove("active");
                menuBtn.innerHTML = "☰";

            });

        });


        // Close menu when clicking outside
        document.addEventListener("click", function (event) {

            if (
                !navMenu.contains(event.target) &&
                !menuBtn.contains(event.target)
            ) {

                navMenu.classList.remove("active");
                menuBtn.innerHTML = "☰";

            }

        });

    }


    // ===============================
    // ENQUIRY FORM
    // ===============================

    const enquiryForm = document.getElementById("enquiryForm");

    if (enquiryForm) {

        enquiryForm.addEventListener("submit", function (event) {

            event.preventDefault();


            const name = document.getElementById("name")?.value.trim() || "";

            const mobile =
                document.getElementById("mobile")?.value.trim() || "";

            const product =
                document.getElementById("productSelect")?.value || "";

            const email =
                document.getElementById("email")?.value.trim() || "";

            const message =
                document.getElementById("message")?.value.trim() || "";


            // ===============================
            // VALIDATION
            // ===============================

            if (name === "") {

                alert("Please enter your name.");

                return;

            }


            if (mobile === "") {

                alert("Please enter your mobile number.");

                return;

            }


            // Indian mobile number validation
            const mobilePattern = /^[6-9][0-9]{9}$/;

            if (!mobilePattern.test(mobile)) {

                alert("Please enter a valid 10-digit mobile number.");

                return;

            }


            if (product === "") {

                alert("Please select a product.");

                return;

            }


            // ===============================
            // WHATSAPP MESSAGE
            // ===============================

            let whatsappMessage =
                "🌱 *Surya Agrisciences - Enquiry*%0A%0A" +

                "*Name:* " +
                encodeURIComponent(name) +

                "%0A" +

                "*Mobile:* " +
                encodeURIComponent(mobile) +

                "%0A" +

                "*Product:* " +
                encodeURIComponent(product);


            if (email !== "") {

                whatsappMessage +=
                    "%0A*Email:* " +
                    encodeURIComponent(email);

            }


            if (message !== "") {

                whatsappMessage +=
                    "%0A*Message:* " +
                    encodeURIComponent(message);

            }


            whatsappMessage +=
                "%0A%0APlease contact me regarding this enquiry.";


            // ===============================
            // OPEN WHATSAPP
            // ===============================

            const whatsappURL =
                "https://wa.me/" +
                WHATSAPP_NUMBER +
                "?text=" +
                whatsappMessage;


            window.open(whatsappURL, "_blank");


            // Reset form
            enquiryForm.reset();

        });

    }


    // ===============================
    // PHONE CALL BUTTON
    // ===============================

    const phoneLinks = document.querySelectorAll(
        'a[href*="tel:"], #phoneDisplay, #footerPhone'
    );


    phoneLinks.forEach(function (element) {

        element.addEventListener("click", function () {

            window.location.href =
                "tel:" + WHATSAPP_NUMBER;

        });

    });


    // ===============================
    // SMOOTH SCROLL
    // ===============================

    const smoothLinks = document.querySelectorAll(
        'a[href^="#"]'
    );


    smoothLinks.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId =
                this.getAttribute("href");

            if (
                targetId &&
                targetId !== "#"
            ) {

                const target =
                    document.querySelector(targetId);

                if (target) {

                    event.preventDefault();

                    target.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }

        });

    });


    // ===============================
    // MOBILE NUMBER INPUT
    // ===============================

    const mobileInput =
        document.getElementById("mobile");


    if (mobileInput) {

        mobileInput.addEventListener(
            "input",
            function () {

                // Only numbers
                this.value =
                    this.value.replace(/\D/g, "");

                // Maximum 10 digits
                if (this.value.length > 10) {

                    this.value =
                        this.value.substring(0, 10);

                }

            }
        );

    }


    // ===============================
    // EMAIL VALIDATION
    // ===============================

    const emailInput =
        document.getElementById("email");


    if (emailInput) {

        emailInput.addEventListener(
            "blur",
            function () {

                if (
                    this.value !== "" &&
                    !this.checkValidity()
                ) {

                    this.style.borderColor = "red";

                } else {

                    this.style.borderColor = "";

                }

            }
        );

    }


    console.log(
        "Surya Agrisciences website loaded successfully."
    );

});


// ========================================
// PRODUCT SELECTION FUNCTION
// ========================================

function selectProduct(productName) {

    const productSelect =
        document.getElementById("productSelect");


    if (productSelect) {

        productSelect.value = productName;

    }


    const enquirySection =
        document.getElementById("contact");


    if (enquirySection) {

        enquirySection.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


// ========================================
// WHATSAPP DIRECT BUTTON
// ========================================

function openWhatsApp() {

    const message =
        "Hello Surya Agrisciences, I would like to know more about your agricultural products.";

    const url =
        "https://wa.me/" +
        WHATSAPP_NUMBER +
        "?text=" +
        encodeURIComponent(message);

    window.open(url, "_blank");

}


// ========================================
// DIRECT CALL FUNCTION
// ========================================

function makeCall() {

    window.location.href =
        "tel:" + WHATSAPP_NUMBER;

}


// ========================================
// WINDOW RESIZE
// ========================================

window.addEventListener("resize", function () {

    const navMenu =
        document.getElementById("navMenu");

    const menuBtn =
        document.getElementById("menuBtn");


    if (!navMenu || !menuBtn) {
        return;
    }


    if (window.innerWidth > 900) {

        navMenu.classList.remove("active");

        menuBtn.innerHTML = "☰";

    }

});
