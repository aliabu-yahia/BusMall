'use strict';

let aImageIndex;
let bImageIndex;
let cImageIndex;

let aImageElement = document.getElementById('aimag');
let bImageElement = document.getElementById('bimag');
let cImageElement = document.getElementById('cimag');

let numUserClik = 0

function BusImag(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    BusImag.Images.push(this);
}

BusImag.Images = [];

new BusImag('babychair1', 'images/babychair1.jpg');
new BusImag('babychair2', 'images/babychair2.jpg');
new BusImag('babychair3', 'images/babychair3.jpg');
new BusImag('braek1', 'images/braek1.jpg');
new BusImag('braek2', 'images/braek2.jpg');
new BusImag('braek3', 'images/braek3.jpg');
new BusImag('chair1', 'images/chair1.jpg');
new BusImag('chair2', 'images/chair2.jpg');
new BusImag('chair3', 'images/chair3.jpg');
new BusImag('ear', 'images/ear.jpg');
new BusImag('eye1', 'images/eye1.jpg');
new BusImag('eye2', 'images/eye2.jpg');
new BusImag('usb1', 'images/usb1.jpg');
new BusImag('usb2', 'images/usb2.jpg');

//console.log(BusImag.Images);

function randomNum() {
    return Math.floor(Math.random() * BusImag.Images.length);
}
function theimages() {
    aImageIndex = randomNum()

    do {
        bImageIndex = randomNum();
        cImageIndex = randomNum();
    } while (aImageIndex === bImageIndex || aImageIndex === cImageIndex || bImageIndex === cImageIndex)

    BusImag.Images;

    aImageElement.src = BusImag.Images[aImageIndex].source;
    bImageElement.src = BusImag.Images[bImageIndex].source;
    cImageElement.src = BusImag.Images[cImageIndex].source;
}
theimages();

aImageElement.addEventListener('click', userClick);
bImageElement.addEventListener('click', userClick);
cImageElement.addEventListener('click', userClick);

function userClick(event) {
    numUserClik++;
    //console.log(event.target);

    if (numUserClik < 27) {
        if (event.target.id === 'aimag') {
            BusImag.Images[aImageIndex].votes++

        } else if (event.target.id === 'bimag') {
            BusImag.Images[bImageIndex].votes++
        } else {
            BusImag.Images[cImageIndex].votes++
        }
        theimages();



    }
    else {
        let list = document.getElementById('results');
        let result;
        for (let i = 0; i < BusImag.Images.length; i++) {
            result = document.createElement('li');
            list.appendChild(result);
            result.textContent = BusImag.Images[i].name + ' has ' + BusImag.Images[i].votes + ' votes';
        }
        aImageElement.removeEventListener('click', userClick);
        bImageElement.removeEventListener('click', userClick);
        cImageElement.removeEventListener('click', userClick);

    }
}






