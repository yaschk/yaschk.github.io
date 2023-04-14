console.log(1)
let tg = window.Telegram.WebApp;

tg.expand();

tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color = "#5e8d4d";

let item = "";

let btn1 = document.getElementById("btn1");

btn1.addEventListener("click", function (){
    if (tg.MainButton.isVisible){
        tg.MainButton.hide();
    }
    else {
        tg.MainButton.setText("Кнопка");
        item = "1";
        tg.MainButton.show();
    }
});

Telegram.WebApp.onEvent("mainButtonClicked", function (){
    tg.sendData(item);
});

