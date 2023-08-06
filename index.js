// alert("Hello to my new project");

for(let i=0;i<document.querySelectorAll(".drum").length ;i++){
    
    document.querySelectorAll("button")[i].addEventListener("click",
    
    function (){
        var btn=this.innerHTML;
        sound(btn);
        addEffect(btn);
        
    });
    
}

document.addEventListener("keydown", function(event){
        var key=event.key;
      sound(key);
      addEffect(key);
        
})

function sound(key){
    switch(key){
        case "w":   
            var audio=new Audio("./sounds/crash.mp3")
            audio.play();
            break;
        case "a":
            var audio=new Audio("./sounds/kick-bass.mp3")
            audio.play();
            break;
        case "s":
            var audio=new Audio("./sounds/snare.mp3")
            audio.play();
            break;
        case "d":
            var audio=new Audio("./sounds/tom-1.mp3")
            audio.play();
            break;
        case "j":
            var audio=new Audio("./sounds/tom-2.mp3")
            audio.play();
            break;
        case "k":
            var audio=new Audio("./sounds/tom-3.mp3")
            audio.play();
            break;
        case "l":
            var audio=new Audio("./sounds/tom-4.mp3")
            audio.play();
            break;
    }
}

function addEffect(key){
    var currentKey=document.querySelector("." + key);
    currentKey.classList.toggle("pressed");
    setTimeout(function(){
        currentKey.classList.toggle("pressed");
    },200);
}