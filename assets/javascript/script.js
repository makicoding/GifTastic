console.log("JavaScript is connected!");

// Create a variable that references the html body (so that we can add the buttons to this further down in the script)
var myHtmlBody = document.getElementsByTagName("body")[0];



var animal = ["Dog", "Cat", "Horse", "Lion", "Tiger", "Wolf"];     // An array of animals





// Input Box
var inputBox = document.createElement("input");     // Create <input> element
inputBox.setAttribute("type", "text");              // Set Attribute for inputBox to have type="text"
inputBox.setAttribute("class", "userInput1");       // Set Attribute for inputBox to have class="userInput1"
document.body.appendChild(inputBox);                // Append inputBox to body of page


// Button to add user input in Input Box to the animal array
var inputButton = document.createElement("button");         // Create <button> element
inputButton.setAttribute("class", "userInputButton");       // Set Attribute for inputButton to have class="userInputButton"
var inputButtonText = document.createTextNode("Add");  // Create a text node 
inputButton.appendChild(inputButtonText);                   // Append the text to inputButton
document.body.appendChild(inputButton);                     // Append inputButton to body of page
 







for (var i = 0; i < animal.length; i++){
    var btn = document.createElement("button");                                 // Create a <button element>
    btn.innerHTML = animal[i];                                                  // Name the button with animal name
    myHtmlBody.appendChild(btn);                                                // Add the button to the HTML body
    btn.addEventListener("click", getFromApi);                                  // Add an event listener.  When user clicks, the function getFromApi is called.
    inputButton.addEventListener("click", addToArray);  
}
// Create a for loop for the length of the array to display the different animals as buttons
function getFromApi(){

        // Use jQuery from here:

        console.log(this);
        
        $("#gifs-appear-here").empty();                                         // Empty the div id=gifs-appear-here

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        this.textContent + "&api_key=9rqYZE6HplBHPqKeUBfUFVboSn02keof";         // *** this.textContent is KEY TO GETTING THE FUNCTION TO WORK PROPERLY!!!!!!
                                                                                // this is referring to the button (btn) - see above code. 
                                                                                // textContent is calling the text that is inside each button
                                                                                // for example in the first button: <button>Dog</button> , the textContent within the button tags is "Dog"

        $.ajax({                                                                // Calling the Ajax
        url: queryURL,                                                          // the url is referencing the above URL listed in the variable
        method: "GET"                                                           // The retrieval method of the data is GET
        }).then(function(response) {

            console.log(response);

            var results = response.data

            for (var i = 0; i < 10; i++) {                                      // Limit the for loop to 10 images

                var animalDiv = $("<div>");                                     // Create a div
                
                var p = $("<p>");                                               // Create a p (paragraph)
                p.text("Rating: " + results[i].rating);                         // Inside the p, put in the text "Rating: " + result[i].rating

                var animalImage = $("<img>");                                   // Create an image container
                animalImage.attr("src", results[i].images.fixed_height.url);    // Add the attribute src (source) that references the image URL
                
                animalDiv.append(p);                                            // Add p to the animalDiv
                animalDiv.append(animalImage);                                  // Add the animalImage to the animalDiv also

                $("#gifs-appear-here").prepend(animalDiv);                      // Add to the beginning (prepend) the animalDiv to the id=gifs-appear-here

            }

        });    

}






function addToArray() {
    var inputText = document.getElementsByClassName("userInput1")[0].value;
    console.log(inputText);
    animal.push(inputText);
    console.log(animal)


    btn.innerHTML = animal[i];                                                  // Name the button with animal name
    $("#buttons-appear-here").append(btn); 
    
                                             // Add the button to the HTML body
}

    // append and prepend definition:

    // append:	add (something) as an attachment or supplement
    // prepend:	add (something) to the beginning of something else