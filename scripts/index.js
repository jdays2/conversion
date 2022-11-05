const meters = 3.281;
const liter = 0.264;
const kilogram = 2.204;
const input = document.querySelector('.conversion__input');
const conversionBtn = document.querySelector('.conversion__btn');
const lengthConversion = document.querySelector('.conversion__card-subtitle--length');
const volumeConversion = document.querySelector('.conversion__card-subtitle--volume');
const massConversion = document.querySelector('.conversion__card-subtitle--mass');

conversionBtn.addEventListener('click', () => {
    lengthConversion.innerHTML = (Number(0) + Number(input.value) + " meters = " + (input.value * meters).toFixed(3) + " feet | " + input.value + " feet = " + (input.value / meters).toFixed(3) + " meters");
    volumeConversion.innerHTML = (Number(0) + Number(input.value) + " liters = " + (input.value * liter).toFixed(3) + " gallons | " + input.value + " gallons = " + (input.value / liter).toFixed(3) + " liters");
    massConversion.innerHTML = (Number(0) + Number(input.value) + " kilos = " + (input.value * kilogram).toFixed(3) + " pounds | " + input.value + " pounds = " + (input.value / kilogram).toFixed(3) + " kilos");
})

