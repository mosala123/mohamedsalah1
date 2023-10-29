// create 
let create =document.getElementById("create") 
let created =document.querySelector(".created") 
let h2 =document.getElementById("h2") 
let input =document.getElementById("input") 
 


function get(){

    created.classList.toggle("h2")
clearData()

}

// clear input 
function clearData(){
    input.value="";
    }
