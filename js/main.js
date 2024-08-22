const baseUrl = window.location.origin + window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
const jsonFilePath = `${baseUrl}data/Truth.json`;
console.log(jsonFilePath);

function injectRandomValue() {
    fetch(jsonFilePath)
        .then(response => response.json())
        .then(data => {
            // 获取所有的键（数字）
            const keys = Object.keys(data);

            // 随机选择一个键
            const randomKey = keys[Math.floor(Math.random() * keys.length)];

            // 获取该键对应的值
            const randomValue = data[randomKey];
            console.log(randomValue);
            
            // 注入到 HTML 页面
            const resultDiv = document.getElementById('random-result');
            resultDiv.innerHTML = `
                <p>${randomValue}</p>
            `;
        })
        .catch(error => console.error('Error fetching or parsing data:', error));
}

// 为按钮添加点击事件监听器
document.getElementById('show-random-value').addEventListener('click', injectRandomValue);
