// var buttons=document.querySelectorAll(".drum");
// var noOfButtons=buttons.length;
// for (var i=0;i<noOfButtons;i++){
//     buttons[i].addEventListener("click",function(){
//                 buttons[i].firstElementChild.play();
//     });
// }

var buttons=document.querySelectorAll(".drum");
var noOfButtons=buttons.length;

for(var i=0; i<noOfButtons;i++){
    buttons[i].addEventListener("click",function(){
        console.log(this);
        var pressed=this;
        this.firstElementChild.play();
        this.classList.add("pressed");
        setTimeout(function(){pressed.classList.remove("pressed");}, 200);
    });
}

function buttonAnimation(currentButton){
    var pressedButton=document.querySelector("."+currentButton);
    pressedButton.classList.add("pressed");
    setTimeout(function(){pressedButton.classList.remove("pressed");}, 200);
}

document.addEventListener("keydown",function(event){
    var z=event.key;
    switch(z){
        case "w":
            buttons[0].firstElementChild.play();
            break;
        case "a":
            buttons[1].firstElementChild.play();
            break;
        case "s":
            buttons[2].firstElementChild.play();
            break;

        case "d":
            buttons[3].firstElementChild.play();
            break;

        case"j":
            buttons[4].firstElementChild.play();
            break;

        case "k":
            buttons[5].firstElementChild.play();
            break;

        case "l":
            buttons[6].firstElementChild.play();
            break;

    }

    buttonAnimation(z);
});

