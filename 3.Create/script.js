//again the random color function 
let r;
let g;
let b; 

function getRandomColor(){
    r = Math.floor(Math.random() * 256);
    g =Math.floor(Math.random() * 256); 
    b=Math.floor(Math.random() * 256); 
    return `rgb(${r}, ${g}, ${b})`
    }

//for knowing if a color is too dark
function isTooDark(){
    let lum = ((r*299)+(g*587)+(b*114))/1000;
    return lum < 125;
}

//rest
const sect = document.createElement('section');
sect.style.backgroundColor = getRandomColor();
const article = document.querySelector('article');
article.appendChild(sect);

const learners = document.createElement('p');
learners.innerText = "Mike, Jonh, Julie and Nadia";

sect.appendChild(learners);

if (isTooDark(sect.style.backgroundColor)) {
    sect.style.color = "#FFFFFF"; // Set white color for dark background
  } else {
    sect.style.color = "#000000"; // Set black color for light background
  }
  
  console.log(sect.style.backgroundColor)