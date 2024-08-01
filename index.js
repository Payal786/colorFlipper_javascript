const colourDisplay = document.getElementById('colour-display');
    const currentColour = document.getElementById('current-colour');
    const newColorButton = document.getElementById('new-color-button');

    newColorButton.addEventListener('click', changeBackgroundColor);

    function changeBackgroundColor() {
        const newColor = getRandomColor();
        document.body.style.backgroundColor = newColor;
        currentColour.textContent = `Background: ${newColor}`;
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }