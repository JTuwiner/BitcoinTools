function calculateTax() {
  const income = parseFloat(document.getElementById("income").value);
  const cryptoPurchaseAmount = parseFloat(document.getElementById("cryptoPurchaseAmount").value);
  const cryptoSaleAmount = parseFloat(document.getElementById("cryptoSaleAmount").value);
  const province = document.getElementById("provinceDropdown").value;

  // Calculate total capital gain first
  const totalCapitalGain = cryptoSaleAmount - cryptoPurchaseAmount;
  // Then calculate taxable portion (50%)
  const capitalGain = totalCapitalGain * 0.5;
  const taxableIncome = income + capitalGain;

  let taxRate = 0;
  let additionalTax = 0; // Additional tax for Ontario or Manitoba

  // Determine federal tax rate based on total taxable income
  if (taxableIncome <= 53359) {
      taxRate = 0.15;
  } else if (taxableIncome <= 106717) {
      taxRate = 0.205;
  } else if (taxableIncome <= 165430) {
      taxRate = 0.26;
  } else if (taxableIncome <= 235675) {
      taxRate = 0.29;
  } else {
      taxRate = 0.33;
  }

  // Calculate federal tax on the capital gain portion only
  const federalTaxOwed = Math.max(0, capitalGain * taxRate);

  if (province === "ontario") {
      // Calculate additional tax for Ontario
      if (taxableIncome <= 49231) {
          additionalTax = capitalGain * 0.0505;
      } else if (taxableIncome <= 98463) {
          additionalTax = (49231 * 0.0505) + (capitalGain - 49231) * 0.0915;
      } else if (taxableIncome <= 150000) {
          additionalTax = (49231 * 0.0505) + (49232 * 0.0915) + (capitalGain - 98463) * 0.1116;
      } else if (taxableIncome <= 220000) {
          additionalTax = (49231 * 0.0505) + (49232 * 0.0915) + (150000 - 98463) * 0.1116 + (capitalGain - 150000) * 0.1216;
      } else {
          additionalTax = (49231 * 0.0505) + (49232 * 0.0915) + (150000 - 98463) * 0.1116 + (220000 - 150000) * 0.1216 + (capitalGain - 220000) * 0.1316;
      }
  } else if (province === "manitoba") {
      // Calculate additional tax for Manitoba
      if (taxableIncome <= 36842) {
          additionalTax = capitalGain * 0.108;
      } else if (taxableIncome <= 79625) {
          additionalTax = (36842 * 0.108) + (capitalGain - 36842) * 0.1275;
      } else {
          additionalTax = (36842 * 0.108) + (42783 * 0.1275) + (capitalGain - 79625) * 0.174;
      }
  } else if (province === "quebec") {
      // Calculate additional tax for Quebec
      if (taxableIncome <= 49275) {
          additionalTax = capitalGain * 0.15;
      } else if (taxableIncome <= 98540) {
          additionalTax = (49275 * 0.15) + (capitalGain - 49275) * 0.20;
      } else if (taxableIncome <= 119910) {
          additionalTax = (49275 * 0.15) + (49265 * 0.20) + (capitalGain - 98540) * 0.24;
      } else {
          additionalTax = (49275 * 0.15) + (49265 * 0.20) + (21370 * 0.24) + (capitalGain - 119910) * 0.2575;
      }
  } else if (province === "britishcolumbia") {
      // Calculate additional tax for British Columbia
      if (taxableIncome <= 45654) {
          additionalTax = capitalGain * 0.0506;
      } else if (taxableIncome <= 91310) {
          additionalTax = (45654 * 0.0506) + (capitalGain - 45654) * 0.077;
      } else if (taxableIncome <= 104835) {
          additionalTax = (45654 * 0.0506) + (45656 * 0.077) + (capitalGain - 91310) * 0.105;
      } else if (taxableIncome <= 127299) {
          additionalTax = (45654 * 0.0506) + (45656 * 0.077) + (13425 * 0.105) + (capitalGain - 104835) * 0.1229;
      } else if (taxableIncome <= 172602) {
          additionalTax = (45654 * 0.0506) + (45656 * 0.077) + (13425 * 0.105) + (22464 * 0.1229) + (capitalGain - 127299) * 0.147;
      } else if (taxableIncome <= 240716) {
          additionalTax = (45654 * 0.0506) + (45656 * 0.077) + (13425 * 0.105) + (22464 * 0.1229) + (45103 * 0.147) + (capitalGain - 172602) * 0.168;
      } else {
          additionalTax = (45654 * 0.0506) + (45656 * 0.077) + (13425 * 0.105) + (22464 * 0.1229) + (45103 * 0.147) + (68061 * 0.168) + (capitalGain - 240716) * 0.205;
      }
  } else if (province === "alberta") {
      // Calculate additional tax for Alberta
      if (taxableIncome <= 142292) {
          additionalTax = capitalGain * 0.10;
      } else if (taxableIncome <= 170751) {
          additionalTax = (142292 * 0.10) + (capitalGain - 142292) * 0.12;
      } else if (taxableIncome <= 227668) {
          additionalTax = (142292 * 0.10) + (28559 * 0.12) + (capitalGain - 170751) * 0.13;
      } else if (taxableIncome <= 341502) {
          additionalTax = (142292 * 0.10) + (28559 * 0.12) + (56717 * 0.13) + (capitalGain - 227668) * 0.14;
      } else {
          additionalTax = (142292 * 0.10) + (28559 * 0.12) + (56717 * 0.13) + (113834 * 0.14) + (capitalGain - 341502) * 0.15;
      }
  } else if (province === "new-brunswick") {
      // Calculate additional tax for New Brunswick
      if (taxableIncome <= 47715) {
          additionalTax = capitalGain * 0.094;
      } else if (taxableIncome <= 95431) {
          additionalTax = (47715 * 0.094) + (capitalGain - 47715) * 0.14;
      } else if (taxableIncome <= 176756) {
          additionalTax = (47715 * 0.094) + (47716 * 0.14) + (capitalGain - 95431) * 0.16;
      } else {
          additionalTax = (47715 * 0.094) + (47716 * 0.14) + (81325 * 0.16) + (capitalGain - 176756) * 0.195;
      }
  } else if (province === "newfoundland-labrador") {
      // Calculate additional tax for Newfoundland and Labrador
      if (taxableIncome <= 41457) {
          additionalTax = capitalGain * 0.087;
      } else if (taxableIncome <= 82913) {
          additionalTax = (41457 * 0.087) + (capitalGain - 41457) * 0.145;
      } else if (taxableIncome <= 148027) {
          additionalTax = (41457 * 0.087) + (41456 * 0.145) + (capitalGain - 82913) * 0.158;
      } else if (taxableIncome <= 207239) {
          additionalTax = (41457 * 0.087) + (41456 * 0.145) + (65044 * 0.158) + (capitalGain - 148027) * 0.178;
      } else if (taxableIncome <= 264750) {
          additionalTax = (41457 * 0.087) + (41456 * 0.145) + (65044 * 0.158) + (59121 * 0.178) + (capitalGain - 207239) * 0.198;
      } else if (taxableIncome <= 529500) {
          additionalTax = (41457 * 0.087) + (41456 * 0.145) + (65044 * 0.158) + (59121 * 0.178) + (57011 * 0.198) + (capitalGain - 264750) * 0.208;
      } else if (taxableIncome <= 1059000) {
          additionalTax = (41457 * 0.087) + (41456 * 0.145) + (65044 * 0.158) + (59121 * 0.178) + (57011 * 0.198) + (264750 * 0.208) + (capitalGain - 529500) * 0.213;
      } else {
          additionalTax = (41457 * 0.087) + (41456 * 0.145) + (65044 * 0.158) + (59121 * 0.178) + (57011 * 0.198) + (264750 * 0.208) + (529500 * 0.213) + (capitalGain - 1059000) * 0.218;
      }
  } else if (province === "nova-scotia") {
      // Calculate additional tax for Nova Scotia
      if (taxableIncome <= 29590) {
          additionalTax = capitalGain * 0.0879;
      } else if (taxableIncome <= 59180) {
          additionalTax = (29590 * 0.0879) + (capitalGain - 29590) * 0.1495;
      } else if (taxableIncome <= 93000) {
          additionalTax = (29590 * 0.0879) + (29590 * 0.1495) + (capitalGain - 59180) * 0.1667;
      } else if (taxableIncome <= 150000) {
          additionalTax = (29590 * 0.0879) + (29590 * 0.1495) + (33820 * 0.1667) + (capitalGain - 93000) * 0.175;
      } else {
          additionalTax = (29590 * 0.0879) + (29590 * 0.1495) + (33820 * 0.1667) + (57000 * 0.175) + (capitalGain - 150000) * 0.21;
      }
  } else if (province === "prince-edward-island") {
      // Calculate additional tax for Prince Edward Island
      if (taxableIncome <= 31984) {
          additionalTax = capitalGain * 0.098;
      } else if (taxableIncome <= 63969) {
          additionalTax = (31984 * 0.098) + (capitalGain - 31984) * 0.138;
      } else {
          additionalTax = (31984 * 0.098) + (31985 * 0.138) + (capitalGain - 63969) * 0.167;
      }
  } else if (province === "saskatchewan") {
      // Calculate additional tax for Saskatchewan
      if (taxableIncome <= 49720) {
          additionalTax = capitalGain * 0.105;
      } else if (taxableIncome <= 142058) {
          additionalTax = (49720 * 0.105) + (capitalGain - 49720) * 0.125;
      } else {
          additionalTax = (49720 * 0.105) + (92338 * 0.125) + (capitalGain - 142058) * 0.145;
      }
  }


const totalFederalTax = federalTaxOwed + additionalTax;

// Format taxOwed and additionalTax to have two decimal places
const formattedFederalTax = totalFederalTax.toFixed(2);
const formattedFederalTaxWithSeparator = formattedFederalTax.replace(/\B(?=(\d{3})+(?!\d))/g, ",");

document.getElementById("totalTaxOwed").innerText = "$" + formattedFederalTaxWithSeparator;
document.getElementById("taxOwed").innerText = "$" + federalTaxOwed.toFixed(2);
document.getElementById("additionalTax").innerText = "$" + additionalTax.toFixed(2);


}
