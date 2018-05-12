const rightLog = [38,38,40,40,37,39,37,39,66,65];
const rightLength = rightLog.length;
let lastUpsLog = [];

function show() {
    let cat = document.createElement('img');
    cat.src = 'https://www.1zoom.ru/big2/34/226915-Leyzif2000.jpg';
    cat.className = 'cat';
    document.body.appendChild(cat);
}

function konamiChecking(key) {
    console.log(key.keyCode);
    lastUpsLog.push(key.keyCode);
    if (lastUpsLog.length > rightLength) {
        lastUpsLog.shift();
    }
    for (let i = 0; i < rightLength; i++) {
        if (rightLog[i] !== lastUpsLog[i]) return;        
    }
    show();
}



window.addEventListener('keyup',konamiChecking);