

var dothrakiInputText = document.querySelector("#txt-input");
dothrakiInputText.addEventListener("click", clickHandler);

var yodaButton = document.querySelector("#txt-button");

var dothraki = document.querySelector("#txt-output");


var serverURL = "https://api.funtranslations.com/translate/dothraki.json"

function constructURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("Error ocurred", error);
    alert("Some server error. Please try again later");
}

function clickHandler(event) {
    var inputText = dothrakiInputText.value;
    var finalURL = constructURL(inputText)
    fetch(finalURL)
    .then(response => response.json())
    .then(json => {
        var outputText = json.contents.translated;
        dothraki.innerText = outputText;
        
})
.catch(errorHandler);
}