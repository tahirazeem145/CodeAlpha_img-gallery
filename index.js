function popups(Image){
    let popup=document.querySelector(".popup")
    let popupimg=document.getElementById("popup-img")
    popup.style.display="flex"
    popupimg.src=Image.src
}
function closepopup(){
    let popup=document.querySelector(".popup")
    popup.style.display="none"
}