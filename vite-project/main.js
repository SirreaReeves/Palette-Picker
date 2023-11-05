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

const copyButton = document.querySelectorAll('.copy-button');
const copy = (event) => {
    event.addEventListener('click', async event => {
        if (!navigator.clipboard) {
            return;
          }
          const hexCode = event.target.textContent;
          try {
            await navigator.clipboard.writeText(hexCode);
            event.target.textContent = 'Copied!';
          } catch (err) {
            console.error('Failed to copy!', err);
          }
    })
}

const hexCode = document.querySelectorAll('.hexcode');
hexCode.forEach(copy);
copyButton.forEach(copy);