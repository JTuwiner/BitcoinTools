	  //Sets up element hiding
  $('#calc-results').hide()
  $('#calc-results').attr('class', '')
  
  //Actions when the button is clicked
  
  $('#init-amount').on('keyup', () => {
	  calculate();
  });
  
  $("input[name='paymentMethod']").change(() => {
	  calculate();
  });
  
  
  function calculate() {
	  //Fade transition
	  $('#calc-results').fadeOut('fast');
	  //Variables that are needed in the calculation
	  var initialAmount = parseFloat($('#init-amount').val());
	  var newAmount = initialAmount;
	  var feeAmount;
	  var paymentMethod = $('input[name="paymentMethod"]:checked').attr('value');
	  
	  //Adds a fixed fee to the new amount if it is less then 200
	  if (initialAmount <= 200){
		  if (initialAmount <= 10){
			  newAmount += 0.99;
		  }
		  else if (initialAmount > 10 && initialAmount <= 25){
			  newAmount += 1.49;
		  }
		  else if (initialAmount > 25 && initialAmount <= 50){
			  newAmount += 1.99;
		  }
		  else {
			  newAmount += 2.99;
		  }
	  }
	  else{
		  if(paymentMethod == "us-bank-account"){
			  newAmount *= 1.0149;
		  }
		  else if (paymentMethod == "coinbase-wallet"){
			  newAmount *= 1.0149;
		  }
		  else if (paymentMethod == "debit-card"){
			  newAmount *= 1.0399;
		  }
		  else {
			  var amountCheck = newAmount * .015;
	  
			  //Checks to see whether the fee is under 55 cents and sets it to 55 if it is
			  if (amountCheck < .55){
				  newAmount += 0.55;
			  }
			  else {
				  newAmount *= 1.015;
			  }
		  }
	  }
	  //Rounds up to the nearest cent
	  newAmount = Math.ceil(newAmount * 100) / 100;
	  //sets the fee amount when all conditionals have completed
	  feeAmount = newAmount - initialAmount;
	  feeAmount = Math.round(feeAmount * 100) / 100;
	  //Outputs the information to the page
	  $('#calc-fee').text(feeAmount);
	  $('#calc-cost').text(newAmount);
	  if (isNaN(feeAmount) && isNaN(newAmount)) {
		  console.log('')
	  } else {
		  $('#calc-results').fadeIn('fast');
	  }
  }