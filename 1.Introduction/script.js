// diaply title of the doc
console.log(document.title);

//change the title of the doc 
document.title = "Modifying the DOM";

//Geting elements of the first child etc 
const body = document.querySelector('body');
const firstChild = body.children[0];

//the loop for having each element of child 
for (const child of firstChild.children){
    console.log(child)
}
function getRandomColor(){
let r = Math.floor(Math.random() * 256);
let g =Math.floor(Math.random() * 256); 
let b=Math.floor(Math.random() * 256); 
return `rgb(${r}, ${g}, ${b})`
}

document.querySelector('body').style.backgroundColor = getRandomColor();


