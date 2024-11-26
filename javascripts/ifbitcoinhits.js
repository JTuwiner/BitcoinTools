function calculateValue() {
    var bitcoinAmount = document.getElementById("bitcoinAmount").value;
    var targetValue = document.querySelector('input[name="targetValue"]:checked').value;
    var formattedTargetValue = parseInt(targetValue).toLocaleString(); // Format target value with commas
    var result = bitcoinAmount * targetValue;
    var formattedResult = result.toLocaleString(); // Ensure the result is also formatted with commas
    document.getElementById("result").innerHTML = "If Bitcoin hits $" + formattedTargetValue + ", your Bitcoin will be worth $" + formattedResult;
}
