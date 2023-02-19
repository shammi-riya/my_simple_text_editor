
const inputArea = document.getElementById("textarea1")
// using event handeller
function fItalic(){
    if(inputArea.style.fontStyle == "italic"){
        inputArea.style.fontStyle = "normal"
    }else{
        inputArea.style.fontStyle = "italic"
    }
 }

//  using evemt lisener
document.getElementById("textBold").addEventListener("click",function(){
    inputArea.classList.toggle("myStyle")
  
})

document.getElementById("underLine").addEventListener("click",function(){
    inputArea.classList.toggle("font_style");
})



function alignRight(){
    inputArea.style.textAlign = "right"
}
function alignLeft(){
    inputArea.style.textAlign = "left"
}
function alignCenter(){
    inputArea.style.textAlign = "center"
}
function alignJustyfy(){
    inputArea.style.textAlign = "justify"
}


document.getElementById("fontSize")
.addEventListener("change",function(){  
    const fontSize = document.getElementById("fontSize").value
    inputArea.style.fontSize = fontSize+"px"
})



document.getElementById("color")
.addEventListener("change",function(){
    const color = document.getElementById("color").value
    inputArea.style.color = color;
})
