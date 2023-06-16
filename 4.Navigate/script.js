// Moving <ol> to the beginning of <ol>
const olElement = document.querySelector('ol');
const lastChild = olElement.lastElementChild;

olElement.insertBefore(lastChild, olElement.firstElementChild);

// Changing <h1> and <h2> positions
const h1Element = document.querySelector('h1');
const h2Element = document.querySelector('h2');
const parentElement = h1Element.parentElement;

parentElement.insertBefore(h2Element, h1Element);
parentElement.insertBefore(h1Element, h2Element.nextSibling);

// Removing the last section
const parentSection = document.querySelector('section:last-child');
const lastSection = parentSection.lastElementChild;
parentSection.removeChild(lastSection);
