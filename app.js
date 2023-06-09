var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");

var serverUrl = "https://api.funtranslations.com/translate/minion.json";

function getTranslationUrl(text){
    return serverUrl + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("error occured", error);
}



function clickHandler(){

    var inputText = textInput.value;

    fetch(getTranslationUrl(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
             outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)


};


btnTranslate.addEventListener("click",clickHandler);

