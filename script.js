//select popbox,overlay,button
var popupoverlay =document.querySelector(".popup-overlay")
var popupbox =document.querySelector(".pop-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
    popupoverlay.style.display="block"
    popupbox.style.display="block"
})

//select cancel
var cancelpop= document.getElementById("cancel-popup")
cancelpop.addEventListener("click",function(){
    event.preventDefault()
    popupoverlay.style.display="none"
    popupbox.style.display="none"
})

var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
 event.preventDefault()
  var div=document.createElement("div")
  div.setAttribute("class","book")
  div.innerHTML=`<h2>${booktitleinput.value}</h2>
                 <h5>${bookauthorinput.value}</h5>
                 <P>${bookdescriptioninput.value}</p>
                 <button onclick="deletebutton(event)">delete</button>`
  container.append(div)
  popupoverlay.style.display="none"
  popupbox.style.display="none"


})

function deletebutton(event){
    event.target.parentElement.remove()

}