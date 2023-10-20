let calculation = localStorage.getItem('calculation') || '0';
displayCalculation();

function updateCalculation(value) {
  if (calculation === '0'){
    calculation = '';
    if (value === ' + ') {
      calculation = '0';
    } else if (value === ' - ') {
      calculation = '0';
    } else if (value === ' * ') {
      calculation = '0';
    } else if (value === ' / ') {
      calculation = '0';
    }
  }

    calculation += value;
    //let num = Number(calculation);
    //calculation = num.toLocaleString();
    displayCalculation();
    //calculation = num.toString();
    console.log(calculation);
    localStorage.setItem('calculation', calculation);
}

// Optional: you can also create a function in order
// to reuse this code.
function saveCalculation() {
  localStorage.setItem('calculation', calculation);
}

function displayCalculation(){
    document.querySelector('.js-display').innerHTML = calculation; 
}