

/*Create a new <div> with a class .displayedsquare and the corresponding clicked color in the div above (.displayedsquare-wrapper)
Create a new <li> in the log below to state when the action was done */ 

const actionSquares = document.querySelectorAll('.actionsquare');
const displayedSquareWrapper = document.querySelector('.displayedsquare-wrapper');
const logList = document.querySelector('ul');

//action squares
  actionSquares.forEach((square, index) => {
    square.addEventListener('click', (event) => {
      const computedStyle = window.getComputedStyle(event.target);
      const color = computedStyle.backgroundColor;

      const newDiv = document.createElement('div');
      newDiv.classList.add('displayedsquare');
      newDiv.style.backgroundColor = color;

      //display a new div/child
      displayedSquareWrapper.appendChild(newDiv);

      //display new list elements 
      const currentTime = new Date().toLocaleTimeString();
      const newLogItem = document.createElement('li');
      newLogItem.textContent = `Action ${index + 1} was performed at ${currentTime}`;

      logList.appendChild(newLogItem);
    });
  });

const body = document.querySelector('body');


function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

document.body.addEventListener('keydown', (event) => {
  if (event.code === 'Space') {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;

    const currentTime = new Date().toLocaleTimeString();
    const newLogItem = document.createElement('li');
    newLogItem.textContent = `Spacebar was pressed at ${currentTime}`;
    logList.appendChild(newLogItem);
  }
  if (event.key === 'l') {
    logList.innerHTML = '';
  }
  if (event.key === 's') {
    displayedSquareWrapper.innerHTML = '';
  }
});

displayedSquareWrapper.addEventListener('click', (event) => {
  // Get the color of the clicked square
  const clickedColor = event.target.style.backgroundColor;
  alert(`The color of the square is: ${clickedColor}`);
});


