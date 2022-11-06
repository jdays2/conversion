const meters = 3.281;
const liter = 0.264;
const kilogram = 2.204;


const input = document.querySelector('.conversion__input');
const conversionBtn = document.querySelector('.conversion__btn');
const lengthConversion = document.querySelector('.conversion__card-subtitle--length');
const volumeConversion = document.querySelector('.conversion__card-subtitle--volume');
const massConversion = document.querySelector('.conversion__card-subtitle--mass');

conversionBtn.addEventListener('click', () => {
    if(isNaN(input.value.replace(",", "."))){
        alert('NOT A NUMBER! TRY AGAIN!')
        return
    }

    lengthConversion.innerHTML = (Number(0) + Number(input.value.replace(",", ".")) + " meters = " + (input.value.replace(",", ".") * meters).toFixed(3) + " feet | " + input.value.replace(",", ".") + " feet = " + (input.value.replace(",", ".") / meters).toFixed(3) + " meters");
    volumeConversion.innerHTML = (Number(0) + Number(input.value.replace(",", ".")) + " liters = " + (input.value.replace(",", ".") * liter).toFixed(3) + " gallons | " + input.value.replace(",", ".") + " gallons = " + (input.value.replace(",", ".") / liter).toFixed(3) + " liters");
    massConversion.innerHTML = (Number(0) + Number(input.value.replace(",", ".")) + " kilos = " + (input.value.replace(",", ".") * kilogram).toFixed(3) + " pounds | " + input.value.replace(",", ".") + " pounds = " + (input.value.replace(",", ".") / kilogram).toFixed(3) + " kilos");
})

