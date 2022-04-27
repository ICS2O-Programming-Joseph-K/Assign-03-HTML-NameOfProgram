"use strict"

// Calculating the remainder of Ender Dragon's health given percentage
function enterClicked () {
  	// initialize variables
	let output = ""
  
	// get user input
	let Health = parseInt(document.getElementById('Percentage').value)

  let result = 200* (Health / 100)

  let roundedresult = Math.ceil(result);

  
  	// if guess user input is lower than 95
	if (Health < 95) {
		output = "You will have to hit the dragon " + roundedresult + " more times with your bare fists"
	} 
	// otherwise, if user input is 95 or higher
	else if (Health >= 95) {
		output = "You tried killing the Ender Dragon with bare hands and died. Lol."
	}

  //Else statment for laer use
	// else {
		//output = "Good evening..."
	//}
	
  // display the results
  document.getElementById('user-info').innerHTML = output                                                                                                                                                                               
}
