'use strict';

function onEvent(event, selector, callback) {
    return selector.addEventListener(event, callback);
  }
  
  // Get HTML element by id
  function getElement(selector, parent = document) {
    return parent.getElementById(selector);
  }
  
  // Select HTML element
  function select(selector, parent = document) {
    return parent.querySelector(selector);
  }
  
  // Get a (node) list of HTML elements as array
  function selectAll(selector, parent = document) {
    return [...parent.querySelectorAll(selector)];
  }
  
  // Print
  function print(arg) {
    console.log(arg);
  }
  
  // Sleep
  function sleep(duration) {
    return new Promise(resolve => {
      setTimeout(resolve, duration)
    });
  }
  
  // Generate random number between - and including - 'min' and 'max'
  function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  // Filter array
  function filterArray(array, callback) {
    return array.filter(callback);
  }
  
  // Create an HTML element
  function create(element, parent = document) {
    return parent.createElement(element);
  }

const shapeField = document.querySelector('.shape-field');
const shapeButton = document.querySelector('.create-shape');
const shapeSelector = document.querySelector('.shape-selector');
const colorSelector = document.querySelector('.colour-selector');
const infoAboutShape = document.querySelector('.info-about-shape');
const shapesList = [];
let numberOfShapes = 0;

class Shape {
    _name;
    _color;

    constructor(name, color) {
        this._name = name;
        this._color = color;
    }

    set name(name) {
        this._name = name;
    }

    set color(color) {
        this._color = color;
    }

    get name() {
        return this._name;
    }

    get color() {
        return this._color;
    }

    getInfo(colors) {
        const colorName = Object.keys(colors).find(
            (key) => colors[key].toLowerCase() === this._color.toLowerCase()
        );
        return console.log(`${colorName} ${this._name}`);
    }
}

function createShape() {
    if (numberOfShapes < 21) {
        let createDiv = document.createElement('div');
        const selectedShape = shapeSelector.value;
        const selectedColor = colorSelector.value;
        createDiv.classList.add(selectedShape);
        createDiv.style.backgroundColor = `#${selectedColor}`;
        numberOfShapes++;
        shapeField.appendChild(createDiv);
        const shape = new Shape(selectedShape, selectedColor);
        shapesList.push(shape);

        onEvent('click', createDiv, () => {
            infoAboutShape.innerHTML = `<p>${shape.getInfo()}</p>`;
        });
    } else {
        infoAboutShape.innerHTML = '<p class="alert">Storage Full</p>';
    }
}

onEvent('click', shapeButton, () => {
    createShape();
});



