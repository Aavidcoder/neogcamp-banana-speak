var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");
var outputDiv = document.querySelector("#output");



function clickHandler(){
    // console.log("clicked");
    // console.log(textInput.value);
    outputDiv.innerText = "Translate: " + textInput.value;

}


btnTranslate.addEventListener("click",clickHandler);

