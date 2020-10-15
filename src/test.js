import string from './css.js';
let n = 1;
demo.innerText = string.substr(0, n);
demo2.innerHTML = string.substr(0, n);
let time = 200;
const run = () => {
    n += 1;
    if (n > string.length) {
        window.clearInterval(id)
        return
    }
    demo.innerText = string.substr(0, n)
    demo2.innerHTML = string.substr(0, n)
    demo.scrollTop = demo.scrollHeight;
}
const play = () => {
    return setInterval(run, time)
}
const pause = () => {
    return window.clearInterval(id)
}
const slow = () => {
    pause()
    time = 200
    id = play();
}
const normal = () => {
    pause()
    time = 50
    id = play();
}
const fast = () => {
    pause()
    time = 10
    id = play();
}

let id = play();

btnPause.onclick = pause;
btnPlay.onclick = () => {
    id = play();
}
btnSlow.onclick = slow;
btnNormal.onclick = normal;
btnFast.onclick = fast;
