var btnTranslate = document.querySelector("#btn-translate");
var textInput = document.querySelector("#text-input");


function clickHandler(){
    console.log("clicked");
    console.log(textInput.value);
}


btnTranslate.addEventListener("click",clickHandler);

