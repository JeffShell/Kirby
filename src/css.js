const string = `
.body {
    width: 154px;
    height: 154px;
    border: 3px solid #782838;
    border-radius: 50%;
    background-color: #eda8b6;
    position: relative;
    top: 160px;
    left: 50%;
    z-index: 10;
    transform: translateX(-77px) rotate(-8deg);
}
.eye {
    width: 18px;
    height: 36px;
    background-color: #782838;
    border-radius: 50%;
    position: absolute;
    top: 25px;
    left: 50%;
    margin-left:-9px;
}
.eye::before {
    width: 8px;
    height: 12px;
    border-radius: 50%;
    position: absolute;
    top: 2px;
    left: 5px;
    background-color: #fff;
}
.eye::after {
    width: 10px;
    height: 12px;
    border-radius: 50%;
    box-shadow: 0 5px 0 0 #6e9dea;
    position: absolute;
    left: 4px;
    bottom:7px;
}
.eye.left {
    transform: translateX(-18px)
}
.eye.right {
    transform: translateX(18px)
}

.mouth {
    width: 20px;
    height: 16px;
    background-color: #782838;
    position: absolute;
    left: 50%;
    margin-left: -10px;
    top: 74px;
    border-radius: 50% / 30% 30% 70% 70%;
}
.mouth::before {
    width: 12px;
    height: 7px;
    background-color: #dd4545;
    position: absolute;
    left:50%;
    margin-left: -6px;
    bottom: 2px;
    border-radius: 50% / 30% 30% 70% 70%;
}


.face {
    width: 20px;
    height: 12px;
    background-color: #ea6e7e;
    border-radius: 50%;
    position: absolute;
    top: 60px;
    left: 50%;
    margin-left: -10px;
}
.face.left {
    transform: translateX(-34px);
}
.face.right {
    transform: translateX(34px);
}
.hand {
    background-color: #eda8b6;
    border: 3px solid #782838;
    position: absolute;
    left: 50%;
    margin-left: -40px;
    border-radius: 50%;
}
.hand.left {
    width: 80px;
    height: 64px;
    transform:translatex(-60px);
    top: 230px;
}
.hand.right {
    width: 64px;
    height: 80px;
    transform:translatex(60px) rotate(0deg);
    transform-origin: left bottom;
    top: 150px;
    animation: hs 1s infinite linear;
}
.body::before {
    width: 14px;
    height: 47px;
    background-color: #eda8b6;
    position: absolute;
    top: 61px;
    left: -4px;
}
.body::after {
    width: 14px;
    height: 47px;
    background-color: #eda8b6;
    position: absolute;
    top: 0px;
    right: 15px;
    transform: rotate(-30deg)
}
.foot {
    width: 58px;
    height: 82px;
    border: 3px solid #782838;
    border-radius: 50%;
    background-color: #dd4545;
    position: absolute;
    left: 50%;
    margin-left: -29px;
    top: 270px;
}
.foot.left {
    z-index: 10;
    transform: translateX(-40px) rotate(-40deg)
}

.foot.right {
    transform: translateX(40px) rotate(-40deg)
}

@keyframes hs{
    0%{
        transform:translatex(60px) rotate(0deg)
    }
    50%{
        transform:translatex(60px) rotate(-20deg)
    }
    100%{
        transform:translatex(60px) rotate(0deg)
    }
}
`

export default string;