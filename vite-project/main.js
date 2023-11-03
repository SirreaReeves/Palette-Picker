import './styles.css';
import palettes from './palettes.json'


const makePalette = () => {
    return `<div>${obj["palette-title"]}</div>`
    
}

const handleEvent = (e) => {
    e.preventDefault();
    const form = document.querySelector('#palette-form');
    const formData = new FormData(form);

    const obj = Object.fromEntries(formData);
    
    const li = document.createElement('li');
    li.innerHTML = makePalette(obj);
    // const li = makePalette(obj);
    const ul = document.querySelector('#palette-list');
    ul.appendChild(li)
};

const button = document.querySelector('#button');
button.addEventListener('click', handleEvent);


console.log(palettes);