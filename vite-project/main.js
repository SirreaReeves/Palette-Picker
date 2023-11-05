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

const copyToClipboard = async (element, timeout) => {
    if (!navigator.clipboard) {
      return;
    }
    const hexCode = element.textContent;
    try {
      await navigator.clipboard.writeText(hexCode);
      element.textContent = 'Copied hex!';
      setTimeout(() => {
        element.textContent = hexCode;
      }, timeout);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  };

const copyButton = document.querySelectorAll('.copy-button');
copyButton.forEach((element) => {
    element.addEventListener('click', (event) => {
        copyToClipboard(event.target, 1000);
    });
});

