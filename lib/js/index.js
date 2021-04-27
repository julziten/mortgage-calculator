"use strict";

// Declaring constants
var calculate = document.getElementById('calculate');
var years = document.getElementById('years');
var yearsValue = document.getElementById('yearsValue');
var rate = document.getElementById('rate');
var rateValue = document.getElementById('rateValue');
var loanAmount = document.getElementById('loan-amount');
var annualTax = document.getElementById('annual-tax');
var annualInsurance = document.getElementById('annual-insurance');
var resultsText = document.getElementsByClassName('results-text');
var principleInterest = document.getElementById('principleInterest');
var tax = document.getElementById('tax');
var insurance = document.getElementById('insurance');
var total = document.getElementById('total'); // Mortgage calculator function fired when user press 'calculate'

var calculateMortgage = function calculateMortgage(e) {
  e.preventDefault();
  handleError(loanAmount);
  handleError(annualTax);
  handleError(annualInsurance);

  if (loanAmount.value.length != 0 && annualTax.value.length != 0 && annualInsurance.value.length != 0) {
    Array.from(resultsText).map(function (elem) {
      return elem.style.color = 'black';
    });
    var result = rate.value / 100 / 12 * loanAmount.value / (1 - Math.pow(1 + rate.value / 100 / 12, -years.value * 12));
    principleInterest.innerHTML = result.toFixed(2);
    tax.innerHTML = (annualTax.value / 12).toFixed(2);
    insurance.innerHTML = (annualInsurance.value / 12).toFixed(2);
    total.innerHTML = (result + annualTax.value / 12 + annualInsurance.value / 12).toFixed(2);
  }
}; // Error handling in case fields are empty or with 0 value


var handleError = function handleError(element) {
  if (element.value != 0) {
    element.style.borderColor = 'black';
    switchFunction(element.id, 'none');
  } else {
    element.style.borderColor = 'red';
    switchFunction(element.id, 'block');
  }
}; // Function in charge to display errors


var switchFunction = function switchFunction(input, style) {
  switch (input) {
    case 'loan-amount':
      {
        document.getElementById('loan-error').style.display = style;
      }
      break;

    case 'annual-tax':
      {
        document.getElementById('tax-error').style.display = style;
      }
      break;

    case 'annual-insurance':
      {
        document.getElementById('insurance-error').style.display = style;
      }
      break;
  }
}; // Show in real time years selected from slider


var handleYearsValue = function handleYearsValue(e) {
  e.preventDefault();
  yearsValue.value = years.value;
}; // Show in real time rate selected from slider


var handleRateValue = function handleRateValue(e) {
  e.preventDefault();
  rateValue.value = rate.value;
}; // Event Listeners


calculate.addEventListener('click', calculateMortgage);
years.addEventListener('input', handleYearsValue);
rate.addEventListener('input', handleRateValue);