function convertLength() {
    // Get input values and units
    var fromValue = parseFloat(document.getElementById("fromValue").value);
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;

    // Calculate the conversion
    var result;
    if (fromUnit === "cm" && toUnit === "m") {
      result = fromValue / 100;
    } else if (fromUnit === "cm" && toUnit === "km") {
      result = fromValue / 100000;
    } else if (fromUnit === "m" && toUnit === "cm") {
      result = fromValue * 100;
    } else if (fromUnit === "m" && toUnit === "km") {
      result = fromValue / 1000;
    } else if (fromUnit === "km" && toUnit === "cm") {
      result = fromValue * 100000;
    } else if (fromUnit === "km" && toUnit === "m") {
      result = fromValue * 1000;
    } else {
      result = fromValue; // Same units, no conversion needed
    }

    // Display the result
    document.getElementById("toValue").value = result;
    document.getElementById("result").textContent = `${fromValue} ${fromUnit} = ${result} ${toUnit}`;
  }