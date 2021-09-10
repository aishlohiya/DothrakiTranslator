var yodaInputText = document.querySelector("#txt-input");
yodaInputText.addEventListener("click", clickHandler);

var yodaButton = document.querySelector("#txt-button");

var yodaOutput = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/hodor.json"

// var serverURL = "https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json"

function constructURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("Error ocurred", error)
    alert("Some server error. Please try again later")
}

function clickHandler(event) {
    var inputText = yodaInputText.value;
    var finalURL = constructURL(inputText)
    fetch(finalURL)
    .then(response => response.json())
    .then(json => {
        var outputText = json.contents.translated;
        yodaOutput.innerText = outputText;
})
    .catch(errorHandler)
}