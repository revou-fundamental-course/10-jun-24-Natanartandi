function convertToFahrenheit() {
    const celsius = parseFloat(document.getElementById("celsius").value);
    const fahrenheit = (celsius * 9/5) + 32;
    document.getElementById("fahrenheit").value = fahrenheit.toFixed(2);
  }
  
  function resetInput() {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
  }
  