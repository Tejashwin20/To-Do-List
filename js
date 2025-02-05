const inputbox=document.getElementById("inputbox");
const listcon=document.getElementById("listcon");
function addtask(){
    if(inputbox.value==''){
        alert("you must write something");
    }
    else{
        li=document.createElement("li")
        li.innerHTML=inputbox.value;
        listcon.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
}

listcon.addEventListener("click",function(e){

    if(e.target.tagName==="LI")
    {
        e.target.classList.toggle("checked");

    }
else if(e.target.tagName==="SPAN")
    e.target.parentElement.remove();{

}
},false);



