import palettes from './palettes.json' assert {type: 'json'};
console.log(palettes); 

const makePalette = (obj) => {
    return `<div>${obj["palette-title"]}</div>`
};

const button = document.querySelector('#form-button');
const handleEvent = (event) => {
    e.preventDefault();
    const form = document.querySelector('#palette-form');
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData);
    
    const li = document.createElement('li');
    li.innerHTML = makePalette(obj);
    const ul = document.querySelector('#palette-list');
    ul.appendChild(li);
};

button.addEventListener('click', handleEvent);

const copybutton = document.querySelector('.copy-button');
const hexcode = document.querySelector('#hexcode');
const copy = () => {
    
    hexcode.select();
    hexcode.setSelectionRange(0, 99999);
    document.execCommand('copy');
    copybutton.textContent = 'Copied!';
    
};

copybutton.addEventListener('click', copy);

// navigator.clipboard.writeText(hexcode.value);
//   hexcode.textContent = 'Copied!';