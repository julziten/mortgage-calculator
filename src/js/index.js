// Declaring constants
const calculate = document.getElementById('calculate');
const years = document.getElementById('years');
const yearsValue = document.getElementById('yearsValue');
const rate = document.getElementById('rate');
const rateValue = document.getElementById('rateValue');
const loanAmount = document.getElementById('loan-amount');
const annualTax = document.getElementById('annual-tax');
const annualInsurance = document.getElementById('annual-insurance');
const resultsText = document.getElementsByClassName('results-text');

const principleInterest = document.getElementById('principleInterest');
const tax = document.getElementById('tax');
const insurance = document.getElementById('insurance');
const total = document.getElementById('total');
const results = document.getElementById('results');


// Mortgage calculator function fired when user press 'calculate'
const calculateMortgage = (e) => {
    e.preventDefault();
    handleError(loanAmount);
    handleError(annualTax);
    handleError(annualInsurance);
    if (loanAmount.value.length != 0 
        && annualTax.value.length != 0 
        && annualInsurance.value.length != 0) {
        Array.from(resultsText).map(elem => elem.style.color = 'black');
        results.classList.add('show');
        const result = ((rate.value / 100) / 12) * loanAmount.value / (1-Math.pow((1 + ((rate.value / 100)/12)), - years.value*12));
        principleInterest.innerHTML = result.toFixed(2);
        tax.innerHTML = (annualTax.value / 12).toFixed(2);
        insurance.innerHTML = (annualInsurance.value / 12).toFixed(2);
        total.innerHTML = (result + (annualTax.value / 12) + (annualInsurance.value / 12)).toFixed(2);
    }

}

// Error handling in case fields are empty or with 0 value
const handleError = (element) => {
    if (element.value != 0) {
        element.style.borderColor = 'black'
        switchFunction(element.id, 'none');
    } else {
        element.style.borderColor = 'red'
        switchFunction(element.id, 'block');
    }
}

// Function in charge to display errors
const switchFunction = (input, style) => {
    switch (input) {
        case 'loan-amount': {
            document.getElementById('loan-error').style.display = style;
        }
            break;
        case 'annual-tax': {
            document.getElementById('tax-error').style.display = style;
        }
            break;
        case 'annual-insurance': {
            document.getElementById('insurance-error').style.display = style; 
        }
            break;
    }
}

// Show in real time years selected from slider
const handleYearsValue = (e) => {
    e.preventDefault();
    yearsValue.value = years.value;
}

// Show in real time rate selected from slider
const handleRateValue = (e) => {
    e.preventDefault();
    rateValue.value = rate.value;
}

// Event Listeners
calculate.addEventListener('click', calculateMortgage)
years.addEventListener('input', handleYearsValue);
rate.addEventListener('input', handleRateValue);

