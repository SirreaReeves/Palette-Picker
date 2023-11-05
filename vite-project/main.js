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
const copy = (event) => {
    const hexcode = document.querySelector('#hexcode');
    
    hexcode.select();
    hexcode.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(hexcode.value);
    copybutton.textContent = 'Copied!';

};

copybutton.addEventListener('click', copy);
