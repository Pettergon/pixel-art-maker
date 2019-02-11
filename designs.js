// Select color input element
colorSelector = document.getElementById('colorPicker');

// start with default color black so when no color is submitted
// it still draws
let color = '#000000';

// eventListenter to apply the chosen color to the current value
// will be a hexcode as a string
colorSelector.addEventListener('input', function(event){
  color = event.target.value;
});

// Select size input element
sizeSelector = document.getElementById('sizePicker');
// eventListenter for choosing grid size
sizeSelector.addEventListener('submit', function(event){
  // preventDefault so site wont reload
  event.preventDefault();
  // determins new width
  const width = sizeSelector.elements['width'].value;
  // determins new height
  const height = sizeSelector.elements['height'].value;
  // calls upon makeGrid to create a new table with width and height
  makeGrid(width, height);
});

function makeGrid(width, height) {
  // gets element table is supposed to be in
  const grid = document.getElementById('pixelCanvas');

  // removes the old grid by checking if it has a firstChildElement
  // and removes it as long as one exists
  while (grid.firstChild) {
    grid.removeChild(grid.firstChild);
  }
  // creates a new row for each height number and adds it to the table
  for (let i = 1; i <= height; i++) {
    const newRow = document.createElement('tr');
    grid.appendChild(newRow);

    //creates a new "square" for each width in their respective row
    for(let j = 1; j<= width; j++){
      const newSqr = document.createElement('td');
      newRow.appendChild(newSqr);

      // adds an eventListener to each square to change to the current
      // color as backgroundColor if clicked upon
      newSqr.addEventListener('click', function(){
        newSqr.style.backgroundColor= color;
      });
    }
  }
}
