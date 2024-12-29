//for access pparticular thing we use query selector
let btn = document.querySelector("button");
let ul = document.querySelector("ul");
let inp = document.querySelector("input");

//for react or click we use addEventListener
btn.addEventListener("click", function() {
    //for store task in list we use createElement
    let item = document.createElement("li");
    item.innerText = inp.value;

    //delete button
    let delBtn = document.createElement("button");
    delBtn.innerText = "delete";
    delBtn.classList.add("delete");
    //to show delete button behind list(li) we use append child
    item.appendChild(delBtn);

    ul.appendChild(item);
    inp.value= "";
});

//using Event Delegation(event bubbling) here all the delete button
//will work whatever we will add task in Todo list
ul.addEventListener("click", function(event) {

    //event target tell us which one is pressed or clicked 
 if(event.target.nodeName == "BUTTON"){//nodename is used to show who target
    let listItem = event.target.parentElement;
    listItem.remove();
    console.log("delete");
 }

});



// //we want when we press delete button then the item will be deleted 
// //.delete -> access delete class
// let delBtns = document.querySelectorAll(".delete");
// for(delBtn of delBtns){
//     delBtn.addEventListener("click", function() {
//         //to delete whole list we use
//         let par = this.parentElement;
//         console.log(par);
//         par.remove();
//     });
// }