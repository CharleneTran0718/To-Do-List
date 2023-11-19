const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something!");     /* alert to have something in input box */
    }
    else{
        let li = document.createElement("li");  /* creates HTML element, storing li in li element */
        li.innerHTML = inputBox.value;  /* adding input, whatever text we add will be added li */
        listContainer.appendChild(li);  /* li will be displayed in this list container */
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  /* add the cross icon in span tag */
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){  /*checks where we have clicked*/
        e.target.classList.toggle("checked");   /* adds in checked image, if not there */
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();   /* task will be deleted */
        saveData();
    }
}, false);
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);  /*stored in browser with name of data */
}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();