const canvas = document.getElementById("canvas");
const number = document.getElementById("number");
const mode = document.getElementById("mode");
const mycolor = document.getElementById("mycolor");
number.addEventListener("change", () => {
    let n = parseInt(number.value);
    let m = mode.value;
    renderCanvas(n, m);
})

mode.addEventListener("change", () => {
    let m = mode.value;
    let n = parseInt(number.value);
    renderCanvas(n, m);
})


let dim = 640;

let newDiv = document.createElement("div");

function renderCanvas(n, mode){
    canvas.replaceChildren();
    for (let i = 1; i <= n*n; i++){
    const box = document.createElement("div");
    box.classList.add("box");
    box.style.cssText += `width: ${dim/n}px; height: ${dim/n}px;`;
    canvas.appendChild(box);
    let opacity = 0;
    box.addEventListener("mouseover", () => {
        if (mode === "rainbow")box.style.backgroundColor = `rgb(${Math.random()*255}, ${Math.random()*255}, ${Math.random()*255})`;
        else if (mode == "faded") {
            opacity+=0.1;
            let dec_num = Math.min(Math.floor(opacity*255), 255);
            box.style.backgroundColor = `${mycolor.value}${dec_num.toString(16)}`;
        }
        else box.style.backgroundColor = `${mycolor.value}`;
    })
}
}

renderCanvas(parseInt(number.value), mode.value)
