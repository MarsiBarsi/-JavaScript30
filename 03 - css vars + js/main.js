let input = document.getElementById('inp');
let back = document.getElementsByClassName('back')[0];


let changeColor = () => {
    let value = Number(input.value);
    let red = ~~(value / 256 / 256);
    let green = ~~((value / 256) % 255);
    let blue = ~~(value % 255);
    document.documentElement.style.setProperty(`--color`,`rgb(${red},${green},${blue})`);
    document.documentElement.style.setProperty(`--contra-color`,`rgb(${255 - red},${255 - green},${255 - blue})`);
};



input.addEventListener('change',changeColor);
input.addEventListener('mousemove', changeColor);