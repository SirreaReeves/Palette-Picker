import palettes from './palettes.json' assert {type: 'json'};
console.log(palettes); 

const button = document.querySelector('#form-button');
const handleEvent = (e) => {
    e.preventDefault();
    const form = document.querySelector('#palette-form');
    const formData = new FormData(form);
    const obj = Object.fromEntries(formData);

    const paletteTemplate = document.querySelector('.examples');
    const clone = paletteTemplate.cloneNode(true);

    const h3 = document.createElement('h3');
    h3.innerHTML = obj["palette-title"];
    h3.setAttribute('class', 'default-palette-heading');
    clone.appendChild(h3);

    const li = document.createElement('li');
    li.innerHTML = obj["palette-card"];
    li.setAttribute('class', 'palette-card');
    const ul = document.querySelector('#palette-list');
    ul.appendChild(li);

    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy';
    copyButton.setAttribute('class', 'copy-button');
    clone.appendChild(copyButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete Palette';
    deleteButton.setAttribute('class', 'delete-button');
    clone.appendChild(deleteButton);

    const h5 = document.createElement('h5');
    h5.textContent = obj["palette-temperature"];
    h5.setAttribute('class', 'neutral-tag', 'warm-tag', 'cool-tag');
    clone.appendChild(h5);

    document.querySelector('#palette-container').appendChild(clone);
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

const deleteButton = document.querySelector('.delete-button');

const deletePalette = (event) => {
    const remove = document.querySelector('.examples');
    remove.remove();
};
deleteButton.addEventListener('click', deletePalette);