console.log("JavaScript is connected!");

// Create a variable that references the html body (so that we can add the buttons to this further down in the script)
var myHtmlBody = document.getElementsByTagName("body")[0];


var animal = ["Dog", "Cat", "Horse", "Lion", "Tiger", "Wolf"];     // An array of animals

for ( var i = 0; i < animal.length; i++){
    var btn = document.createElement("button");                                        // Create a <button element>
    btn.innerHTML = animal[i];                                                         // Name the button with animal name
    myHtmlBody.appendChild(btn);       
    btn.addEventListener("click", test);
}
// Create a for loop for the length of the array to display the different animals as buttons
function test(){ 
//for (var i = 0; i < animal.length; i++) {                                                  // The for loop will repeat the length of the animals array
    // var btn = document.createElement("button");                                        // Create a <button element>
    // btn.innerHTML = animal[i];                                                         // Name the button with animal name
    // myHtmlBody.appendChild(btn);                                                       // Add the button to the HTML body
    // btn.addEventListener ("click", function() {                                        // Add a "click" event listener to the button
        console.log(this);
        // Use jQuery from here:
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
        this.textContent + "&api_key=9rqYZE6HplBHPqKeUBfUFVboSn02keof";

        $.ajax({
        url: queryURL,
        method: "GET"
        }).then(function(response) {

            console.log(response);

            var results = response.data

            for (var i = 0; i < 10; i++) {      // Limit the for loop to 10 images

                var animalDiv = $("<div>");
                
                var p = $("<p>");
                p.text("Rating: " + results[i].rating);

                var animalImage = $("<img>");
                animalImage.attr("src", results[i].images.fixed_height.url);
                
                animalDiv.append(p);
                animalDiv.append(animalImage);

                $("#gifs-appear-here").prepend(animalDiv);

            }

        });    
}



    // append and prepend definition:

    // append:	add (something) as an attachment or supplement
    // prepend:	add (something) to the beginning of something else