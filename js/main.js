const baseUrl = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
const jsonFilePath = `${baseUrl}data/Truth.json`;
console.log(jsonFilePath);

const selectedKeys = new Set();

function injectRandomValue() {
    fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
            const keys = Object.keys(data);

            const preventRepeats = document.getElementById('prevent-repeats').checked;

            if (preventRepeats && selectedKeys.size === keys.length) {
                selectedKeys.clear();
            }
            
            let randomKey;
            do {
                randomKey = keys[Math.floor(Math.random() * keys.length)];
            } while (preventRepeats && selectedKeys.has(randomKey));
            
            if (preventRepeats) {
                selectedKeys.add(randomKey);
            }
            
            const randomValue = data[randomKey];
            console.log(randomValue);
            
            const resultDiv = document.getElementById('random-result');
            resultDiv.innerHTML = `
                <p>${randomValue}</p>
            `;
        })
        .catch(error => console.error('Error fetching or parsing data:', error));
}

document.getElementById('show-random-value').addEventListener('click', injectRandomValue);
