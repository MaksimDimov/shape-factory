function getInfo(value) {
    const infoMap = {
        circle: { type: 'figure' },
        square: { type: 'figure' },
        blue: { type: 'color' },
        green: { type: 'color' },
        orange: { type: 'color' },
        pink: { type: 'color' },
        purple: { type: 'color' }
    };
    return infoMap[value] || {};
}

function createObjects() {
    const figureSelector = selectAll('.figure-selector', parent = document).value;
    const colorSelector = selectAll('.color-selector', parent = document).value;
    let selectedFigure = getInfo(figureSelector);
    let selectedColor = getInfo(colorSelector);

    let obj1 = { name: figureSelector, type: selectedFigure.type };
    let obj2 = { color: colorSelector, type: selectedColor.type };

    figureField.innerHTML = 'Selected Objects: ' +
        JSON.stringify(obj1) + '<br>' +
        JSON.stringify(obj2);
}
figureButton.addEventListener('click', createObjects);