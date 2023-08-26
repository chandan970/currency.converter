var select = document.querySelectorAll('.currency')
const inputCurrency = document.getElementById('input-currency')
const outputCurrency = document.getElementById('output-currency')


const host = 'api.frankfurter.app';
fetch(`https://${host}/currencies`)
  .then((data) => data.json())
  .then((data) => {
    const entries = Object.entries(data);

    for (i = 0; i < entries.length; i++) {
      select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
      select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    }
  });

function converter() {
  let inputCurrencyVal = inputCurrency.value;
  if (select[0].value != select[1].value) {

    if(inputCurrency.value == 0){
      outputCurrency.value = 0;
    }
    const host = 'api.frankfurter.app';
    fetch(`https://${host}/latest?amount=${inputCurrencyVal}&from=${select[0].value}&to=${select[1].value}`)
      .then((val) => val.json())
      .then((val) => {
        outputCurrency.value = Object.values(val.rates)[0]
      });

  }
  else {
    alert('Please select two different currency')
  }

}  