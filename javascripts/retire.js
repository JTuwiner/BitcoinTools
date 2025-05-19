document.addEventListener("DOMContentLoaded", function() {
	const btcAmountInput = document.getElementById("btcAmount");
	const btcValueInput = document.getElementById("btcValue");
	const retirementGoalInput = document.getElementById("retirementGoal");
	const retirementYearInput = document.getElementById("retirementYear");
	const resultDiv = document.getElementById("result");

	const apiUrl = 'https://treasuries.bitbo.io/api/price/current/?format=json';

	// Fetch current Bitcoin price and display it
	$.getJSON(apiUrl, function(data) {
		const currentPrice = data.price;
		btcValueInput.value = `$${currentPrice.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
	}).fail(function(_jqXHR, textStatus, errorThrown) {
		console.error('Error fetching current price data:', textStatus, errorThrown);
		btcValueInput.value = 'Error fetching price';
	});

	// Calculate the required growth rate when the button is clicked
	document.getElementById("calculate").addEventListener("click", function() {
		const btcAmount = parseFloat(btcAmountInput.value);
		const currentPrice = parseFloat(btcValueInput.value.replace('$', '').replace(/,/g, ''));
		const retirementGoal = parseFloat(retirementGoalInput.value);
		const retirementYear = parseInt(retirementYearInput.value);
		const currentYear = new Date().getFullYear();

		if (isNaN(btcAmount) || isNaN(retirementGoal) || isNaN(retirementYear) || isNaN(currentPrice)) {
			resultDiv.textContent = "Please enter valid values in all fields.";
			return;
		}

		const yearsToRetirement = retirementYear - currentYear;
		if (yearsToRetirement <= 0) {
			resultDiv.textContent = "Please enter a retirement year that is in the future.";
			return;
		}

		const currentBtcValue = btcAmount * currentPrice;
		const requiredGrowthRate = Math.pow(retirementGoal / currentBtcValue, 1 / yearsToRetirement) - 1;

		resultDiv.textContent = `Bitcoin would need to grow ${(requiredGrowthRate * 100).toFixed(2)}% per year for you to retire off Bitcoin by the year ${retirementYear}. If Bitcoin grows by ${(requiredGrowthRate * 100).toFixed(2)}% per year, your ${btcAmount} BTC will be worth $${retirementGoal.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} in year ${retirementYear}.`;
	});
});
