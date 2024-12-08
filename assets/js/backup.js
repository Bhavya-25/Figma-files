// Select all the necessary elements
const nextBtn = document.querySelectorAll(".Next_btn"),
item = document.getElementById("item")
      stepFormSection = document.querySelectorAll(".personal_info_modal"),
      goBackBtn = document.querySelectorAll(".previous_btn"),
      nameInput = document.getElementById("nameInput "),
      emailInput = document.getElementById("emailInput"),
      phoneInput = document.getElementById("phoneInput"),
      formInputBtn = document.getElementById("formNextBtn"),
      confirmBtn = document.getElementById("confirmBtn"),
      thankYouPage = document.getElementById("thankYouPage"),
      formInput = document.querySelectorAll(".personal_form_input"),
      formInputError = document.querySelectorAll(".input_error"),
      planCards = document.querySelectorAll(".cards"),
      switchBtn = document.querySelector(".devheader_btn"),
      yearlyPlanText = document.querySelectorAll(".card_para_year"),
      freePlanHeading = document.querySelectorAll(".card_para_free"),
      MonthlyPlanHeading = document.querySelectorAll(".card_para"),
      priceText = document.querySelectorAll(".price_text"),
      yearlyPriceText = document.querySelectorAll(".price_text_yearly"),
      planNextBtn = document.querySelector(".plan_next_btn"),
      planPrice = document.querySelector(".finsish_price"),
      addOnCheckBox = document.querySelectorAll(".coustom_checkbox"),
      addOnHeadings = document.querySelectorAll(".checkbox_heading"),
      addOnNextBtn = document.querySelector(".add-on_next-btn"),
      finishingServiceContent = document.querySelector(".finishing_service_content"),
      finishTotalHeading = document.querySelector(".finish_Total_heading");
      

let currentIndex = 0;

nextBtn.forEach((button) => {
    button.addEventListener("click", () => {
        stepFormSection[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % stepFormSection.length;
        stepFormSection[currentIndex].classList.add("active");
    });
});

goBackBtn.forEach((button) => {
    button.addEventListener("click", () => {
        stepFormSection[currentIndex].classList.remove("active");

        if (currentIndex > 0) {
            currentIndex--;
        }
        stepFormSection[currentIndex].classList.add("active");
    });
});

confirmBtn.addEventListener("click", () => {
    thankYouPage.classList.add("active");
});

// Form input validation before moving to the next page
function formvalidation() {
    formInputBtn.addEventListener("click", () => {
        if (nameInput.value === "" || nameInput.value === null ||
            emailInput.value === "" || emailInput.value === null ||
            phoneInput.value === "" || phoneInput.value === null) {
            formInput.forEach((input) => {
                input.classList.add("active");
            });
            formInputError.forEach((error) => {
                error.classList.add("active");
            });
            setInterval(removeActiveClass, 8000);
            function removeActiveClass() {
                formInput.forEach((input) => {
                    input.classList.remove("active");
                });
                formInputError.forEach((error) => {
                    error.classList.remove("active");
                });



            }
        } else {
            console.log("input value is filled");
            stepFormSection[currentIndex].classList.remove("active");
            formInputBtn.classList.remove("active");
            currentIndex = (currentIndex + 1) % stepFormSection.length;
            stepFormSection[currentIndex].classList.add("active");
            formInputBtn.classList.add("active");
        }
    });
}

formvalidation();

// Plan selection card functionality
function cardsFunctionality() {
    planCards.forEach((card) => {
        card.addEventListener("click", () => {
            planCards.forEach((item) => item.classList.remove("active"));
            card.classList.add("active");
        });
    });

    switchBtn.addEventListener("click", () => {

        if (switchBtn.checked === true) {
            yearlyPlanText.forEach((yearlyHeading) => {
                yearlyHeading.classList.add("active");
            });
            freePlanHeading.forEach((freeHeading) => {
                freeHeading.classList.add("active");
            });
            MonthlyPlanHeading.forEach((monthlyHeading) => {
                monthlyHeading.classList.add("active");
            });
            priceText.forEach((price) => {
                price.classList.add("active");
            });
            yearlyPriceText.forEach((yearlyprice) => {
                yearlyprice.classList.add("active");
            });
        } 
        else {
            yearlyPlanText.forEach((yearlyHeading) => {
                yearlyHeading.classList.remove("active");
            });
            freePlanHeading.forEach((freeHeading) => {
                freeHeading.classList.remove("active");
            });
            MonthlyPlanHeading.forEach((monthlyHeading) => {
                monthlyHeading.classList.remove("active");
            });
            priceText.forEach((price) => {
                price.classList.remove("active");
            });
            yearlyPriceText.forEach((yearlyprice) => {
                yearlyprice.classList.remove("active");
            });
        }
    });
}

cardsFunctionality();

function paymentFunctionality() {
    planNextBtn.addEventListener("click", () => {
        planCards.forEach((card) => {
            if (card.classList.contains("active")) {
                if (switchBtn.checked) {
                    const yearlyHeading = card.querySelector(".card_para_year");
                    if (yearlyHeading) {
                        let yearlyText = yearlyHeading.innerText;
                        planPrice.innerText = yearlyText;
                    }


                } else {
                    const monthlyHeading = card.querySelector(".card_para");
                    if (monthlyHeading) {
                        let monthlyText = monthlyHeading.innerText;
                        planPrice.innerText = monthlyText;
                    } 
                }
            }
        });
    });
}
paymentFunctionality();

function AddOnFunctionality() {
    addOnNextBtn.addEventListener("click", () => {
        finishingServiceContent.innerHTML = "";
        addOnCheckBox.forEach((checkbox) => {
            if (checkbox.checked) {
                const checkboxContent = checkbox.closest('.price_cards');
                
                if (checkboxContent) {
                    console.log(checkboxContent);
                    
                    
                    const heading = checkboxContent.querySelector('.checkbox_heading');
                    const headingText = heading ? heading.innerText : "No heading found";
                    let priceText = "";

                    console.log("Switch button checked state:", switchBtn.checked);

                    if (switchBtn.checked) {
                        console.log(checkboxContent +"random");
                        const yearlyPrice = checkboxContent.querySelector('.price_text_yearly');
                        console.log(checkboxContent.querySelector('.price_text_yearly'));
                        console.log(yearlyPrice);    
                        if (yearlyPrice) {
                            priceText = yearlyPrice.innerText;
                        } else {
                            priceText = "No yearly price found";
                        }
                        let TotalYearlyHeading = finishTotalHeading.innerText = "Total (per Year)";
                        console.log(TotalYearlyHeading);
                        
                    } else {
                        console.log(checkboxContent);
                        const monthlyPrice = checkboxContent.querySelector('.price_text');
                        
                        if (monthlyPrice) {
                            priceText = monthlyPrice.innerText;
                            console.log(priceText);
                            
                        } else {
                            priceText = "No monthly price found";
                        }
                        let TotalMonthHeading = finishTotalHeading.innerText = "Total (per Month)";
                        console.log(TotalMonthHeading);
                    }
                    console.log(`Heading: ${headingText}, Price: ${priceText}`);

                    let node = document.createElement("div");
                    node.classList.add("online_service_content");
                    node.innerHTML = `
                        <h3 class="online_service_heading">${headingText}</h3>
                        <p class="online_service_price">${priceText}</p>
                    `;
                    finishingServiceContent.appendChild(node);
                } else {
                    console.error("Checkbox content not found.");
                }
            }
            let totalPriceArray = [];
            const totalServicePrice = document.querySelectorAll(".online_service_price");
            totalServicePrice.forEach((total)=>{
                totalPriceArray.push(total.innerText);
            });
            console.log(planPrice);
            totalPriceArray.push(planPrice.innerText);
            console.log(totalPriceArray);
            let numberArray = [];
            totalPriceArray.map((totalPrice)=>{
                numberArray.push(Number(totalPrice));
            })
            console.log(numberArray);

            
            

        });
    });
}
AddOnFunctionality();









