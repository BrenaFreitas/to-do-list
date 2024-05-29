let myNodelist = document.getElementsByTagName("li");

for (let i = 0; i < myNodelist.length; i++) {
   
    let span = document.createElement("span");
   
    let txt = document.createTextNode("\u00D7"); //caracter x
   
    span.className = "close";
   
    span.appendChild(txt);
   
    myNodelist[i].appendChild(span);

}

let close = document.getElementsByClassName("close");

for (let i = 0; i < close.length; i++) {

    close[i].onclick = function() {

        let div = this.parentElement;

        div.style.display = "none";

    }

}


let list = document.querySelector('ul');

list.addEventListener('click', function(ev) {

    if (ev.target.tagName === 'LI') {

        ev.target.classList.toggle('checked');

    }

}, false);


let cleanBtn = document.getElementById("cleanBtn");

cleanBtn.style.color = "white";
cleanBtn.style.padding = "10px 20px";
cleanBtn.style.border = "none";
cleanBtn.style.borderRadius = "10px";
cleanBtn.style.marginTop = "30px";
cleanBtn.style.width = '8rem';
cleanBtn.style.textAlign = "center";
cleanBtn.style.cursor = "pointer";
cleanBtn.style.backgroundColor = "pink";

cleanBtn.addEventListener("mouseover", function() {
    cleanBtn.style.backgroundColor = "lightpink";
});

cleanBtn.addEventListener("mouseout", function() {
    cleanBtn.style.backgroundColor = "pink";
});


function limparElemento(){
   
    cleanBtn.addEventListener("click",function(){

        let list = document.getElementById("itemLista");

        while (list.firstChild) {

            list.removeChild(list.firstChild);

        }
        
    });
}
    
function addElemento() {
    let li = document.createElement("li");

    let inputValue = document.getElementById("tarefa").value;

    let upperInputValue = inputValue.toUpperCase();

    let t = document.createTextNode(upperInputValue);

    li.appendChild(t);


    let inputData = document.getElementById("data").value;

    if (inputData !== '') { 

        let dateSpan = document.createElement("span");

        dateSpan.className = "date";

        dateSpan.style.marginLeft = "10px";

        let dateText = document.createTextNode(inputData);

        dateSpan.appendChild(dateText);

        li.appendChild(dateSpan);

    }

    if (inputValue === '') {

        alert("Você precisa descrever a tarefa");

    } else {

        let itemLista = document.getElementById("itemLista");

        itemLista.appendChild(li);

        let itemCount = itemLista.getElementsByTagName("li").length;

    if (itemCount % 2 === 1) {

        li.className = "purple";

    } else {

        li.className = "purple";

    }

    }

    document.getElementById("tarefa").value = "";
   
    let span = document.createElement("SPAN");
   
    let txt = document.createTextNode("\u00D7");
   
    span.className = "close";
   
    span.appendChild(txt);
   
    li.appendChild(span);
   
    let close = document.getElementsByClassName("close");
   
    for (let i = 0; i < close.length; i++) {
   
        close[i].onclick = function() {
   
            let div = this.parentElement;
   
            div.style.display = "none";
   
        }
    }
}