console.log(document)
console.dir(document)

var button = document.getElementById("button")

button.addEventListener("dblclick", function() {
    button.style.backgroundColor = "green"
    }
);
button.addEventListener("mouseover", function() {
    button.style.backgroundColor = "blue"
    }
);
button.addEventListener("mouseout", function() {
    button.style.backgroundColor = "black"
    }
);
button.addEventListener("mousedown", function() {
    button.style.backgroundColor = "red"
    }
);
button.addEventListener("mouseup", function() {
    button.style.backgroundColor = "yellow"
    }
);
button.addEventListener("scroll", function() {
    button.style.backgroundColor = "orange"
    }
);
document.addEventListener("keydown", function(event) {
    var colorpush = event.key
    console.log(colorpush)
    if(colorpush === "b"){button.style.backgroundColor = "blue"}
    else if(colorpush === "r"){button.style.background = "red"}
    else if(colorpush === "y"){button.style.background = "yellow"}
    else if (colorpush === "g"){button.style.background = "green"}
    else if (colorpush === "o"){button.style.background = "orange"}
    else{button.style.backgroundColor = "black"}
})