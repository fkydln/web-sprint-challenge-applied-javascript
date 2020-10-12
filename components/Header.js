// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
  
    const newSpanDate = document.createElement('span')
    const newSpanTemp = document.createElement('span')
    const newH1 = document.createElement('h1');
    const newDiv = document.createElement('div');

    newSpanDate.textContent = 'MARCH 28, 2020';
    newSpanTemp.textContent = '98°';
    newH1.textContent = 'Lambda Times';

    newSpanDate.classList.add('date');
    newSpanTemp.classList.add('temp');
    newDiv.classList.add('header');

    document.getElementsByClassName('header-container')[0].appendChild(newDiv);
    document.getElementsByClassName('header')[0].appendChild(newSpanDate); 
    document.getElementsByClassName('header')[0].appendChild(newH1);
    document.getElementsByClassName('header')[0].appendChild(newSpanTemp);
    
}
Header();
