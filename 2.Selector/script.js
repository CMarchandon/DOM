
//Function for random colors
function getRandomColor(){
    let r = Math.floor(Math.random() * 256);
    let g =Math.floor(Math.random() * 256); 
    let b=Math.floor(Math.random() * 256); 
    return `rgb(${r}, ${g}, ${b})`
    }
    

// load importantélement 
let importantElements = document.querySelectorAll('.important');

importantElements.forEach(element => {
  element.setAttribute('title', 'This is an important item');
  console.log(element);
});

//Select all the imgs tags and loop through them. If they have no important class, turn their display property to none

let importantImages = document.querySelectorAll('img.important');
let images = document.querySelectorAll('img');

for (let image of images) {
    if (image.classList.contains('important')) {
        // Image has the 'important' class, do nothing
    } else {
        image.style.display = 'none';
    }
}

//a litle bit upset because the kitten in not qualified as 'importrant'...

//Loop through all the paragraphs and display their content in the console. If the paragraph has a class, display its classname has well

let paragraphs = document.querySelectorAll('p');

for (let paragraph of paragraphs) {
  if (paragraph.classList.contains('*')) {
    // Do nothing
  } else {
    paragraph.style.backgroundColor = getRandomColor();
  }
}




