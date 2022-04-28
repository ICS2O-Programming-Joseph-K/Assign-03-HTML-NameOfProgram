"use strict"

// Calculating the remainder of Ender Dragon's health given percentage
function enterClicked () {
  	// initialize variables
	let output = ""

  let output2 = ""
  
	// get user input
	let Health = parseInt(document.getElementById('Percentage').value)
  
  //Calculate remaining hits
  let result = 200* (Health / 100)

  //Round the answer to the next integer
  let roundedresult = Math.ceil(result);

  //Calculate number of hits for a netherite sword 
  let result2 = result / 8

  //Round the netherite sword result to the next integer
  let roundresult2 = Math.ceil(result2)

  
  	// if guess user input is lower than 95
	if (Health < 95) {
		output = "You will have to hit the dragon " + roundedresult + " more times with your bare fists. With a Netherite sword, you would need to hit the dragon " + roundresult2 + " more times."
	} 
	// otherwise, if user input is 95 or higher
	else if (Health >= 95) {
		output = "You tried killing the Ender Dragon with bare hands and died. Lol. However in an altenative universe you killed the dragon with a Netherite sword hitting the dragon " + roundresult2 + " times."
	}

  // display the results
  document.getElementById('user-info').innerHTML = output                                                                                                                                                                               
}
