function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


// circle objects using javascript
async function phrasesCircle(){
    let phrasesArr = document.querySelectorAll(".benefit-p");
    let angle = Math.PI / 2;
    let step = Math.PI * 2 / phrasesArr.length;
    let distance = 400;
    let appearDelta = 500; // in ms
    let x_delta = 50;
    let y_delta = 0;
    //use margin-bottom, margin-left

    for (let i = 0; i < phrasesArr.length; i++) {
        const element = phrasesArr[i];
        let x = distance * Math.cos(angle) + x_delta * Math.random(); 
        let y = distance * 2 / 3  * Math.sin(angle) + y_delta * Math.random();
        element.style.marginLeft = x + "px";
        element.style.marginBottom = y + "px";
        element.style.visibility = "visible";
        angle += step ;
        await sleep(appearDelta);
    }
}


phrasesCircle();
