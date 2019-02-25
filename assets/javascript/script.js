console.log("JavaScript is connected!");



var predefinedKeyword = ["Dog", "Cat", "Horse", "Lion", "Tiger", "Wolf"];       // Array of predefined keywords set by the app



// ----------------------------------------
// FOR LOOP TO CREATE BUTTONS FOR THE LENGTH OF THE ABOVE PREDEFINED KEYWORDS ARRAY

for (var i = 0; i < predefinedKeyword.length; i++){
    var btn = document.createElement("button");                     // Create a <button element>
    btn.innerHTML = predefinedKeyword[i];                           // Name the button with predefinedKeyword name
    document.body.appendChild(btn);                                 // Add the button to the HTML body
    btn.addEventListener("click", getFromApi);                      // Add an event listener.  When user clicks, the function getFromApi is called.
}



// ----------------------------------------
// USER SEARCH AND ADD NEW BUTTON

// Input Box
var inputBox = document.createElement("input");                     // Create <input> element
inputBox.setAttribute("type", "text");                              // Set Attribute for inputBox to have type="text"
inputBox.setAttribute("class", "userInput1");                       // Set Attribute for inputBox to have class="userInput1"
document.body.appendChild(inputBox);                                // Append inputBox to body of page


// Button to submit user input text that was typed into the input box.  When the user clicks inputButton, the function createNewButton is called
var inputButton = document.createElement("button");                 // Create <button> element
inputButton.setAttribute("class", "userInputButton");               // Set Attribute for inputButton to have class="userInputButton"
var inputButtonText = document.createTextNode("Add New Keyword");   // Create a text node 
inputButton.appendChild(inputButtonText);                           // Append the text to inputButton
document.body.appendChild(inputButton);                             // Append inputButton to body of page
inputButton.addEventListener("click", createNewButton);             // Add an event listener.  When user clicks, the function createNewButton is called.


// Function to create new button
function createNewButton() {
    var inputText = document.getElementsByClassName("userInput1")[0].value;         // .value is what the user typed into the input box
    console.log(inputText);
    
    //predefinedKeyword.push(inputText);                            // Push inputText to the initial array of predefined keywords
    //console.log(predefinedKeyword);                               // This checks that the predefined keywords array has been updated with the user input.
                                                                    // **** Strictly speaking, the above two lines are not doing much so have been commented out

    var newUserBtn = document.createElement("button");                              // Create <button> element
    newUserBtn.setAttribute("class", "newButton");                                  // Set Attribute for inputButton to have class="newButton"
    newUserBtn.innerHTML = inputText;                                               // inputText will be the text that appears inside newUserBtn
    document.getElementsByClassName("newUserButtons")[0].appendChild(newUserBtn);   // Append newUserBtn to class="newUserButtons"
    newUserBtn.addEventListener("click", getFromApi);                               // Add an event listener. When user clicks, the function getFromApi is called.
}



// ----------------------------------------
// FUNCTION TO CALL API

function getFromApi(){

        // Use jQuery from here:

        console.log(this);
        
        $(".gifsAppearHere").empty();                                           // Empty the div class=gifsAppearHere

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        this.textContent + "&api_key=9rqYZE6HplBHPqKeUBfUFVboSn02keof";         // *** this.textContent is KEY TO GETTING THE FUNCTION TO WORK PROPERLY!!!!!!
                                                                                // this is referring to the either: btn or: newUserBtn depending on which button on the page is clicked - see above code. 
                                                                                // textContent is calling the text that is inside each button
                                                                                // for example in the first button: <button>Dog</button> , the textContent within the button tags is "Dog"

        $.ajax({                                                                // Calling the Ajax
        url: queryURL,                                                          // the url is referencing the above URL listed in the variable
        method: "GET"                                                           // The retrieval method of the data is GET
        }).then(function(response) {

            console.log(response);

            var results = response.data                                         // results is the data property of the response

            for (var i = 0; i < 10; i++) {                                      // Limit the for loop to 10 images

                var gifDiv = $("<div>");                                        // Create a div
                
                var paragraphForRating = $("<p>");                              // Create a p (paragraph)
                paragraphForRating.text("Rating: " + results[i].rating);        // Inside the p, put in the text "Rating: " + result[i].rating

                var gifImage = $("<img>");                                      // Create an image container
                gifImage.attr("src", results[i].images.fixed_height.url);       // Add the attribute src (source) that references the image URL
                
                gifDiv.append(paragraphForRating);                              // Add paragraphForRating to the gifDiv
                gifDiv.append(gifImage);                                        // Add the gifImage to the gifDiv also

                $(".gifsAppearHere").prepend(gifDiv);                           // Add to the beginning (prepend) the gifDiv to the class=gifsAppearHere

            }

        });    

}



// append and prepend definition:

// append:	add (something) as an attachment or supplement
// prepend:	add (something) to the beginning of something else