'use strict';

let aImageIndex;
let bImageIndex;
let cImageIndex;

let aImageElement = document.getElementById('aimag');
let bImageElement = document.getElementById('bimag');
let cImageElement = document.getElementById('cimag');

let numUserClik = 0

let pictureName = []
let picVote = []
let picShown = []

function BusImag(name, source) {
    this.name = name;
    this.source = source;
    this.votes = 0;
    this.shown = 0;
    BusImag.Images.push(this);
    pictureName.push(name);
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

console.log(BusImag.Images);

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
    BusImag.Images[aImageIndex].shown++
    BusImag.Images[bImageIndex].shown++
    BusImag.Images[cImageIndex].shown++
}
theimages();

aImageElement.addEventListener('click', userClick);
bImageElement.addEventListener('click', userClick);
cImageElement.addEventListener('click', userClick);

function userClick(event) {
    numUserClik++;
    //console.log(event.target);

    if (numUserClik <= 27) {
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
            result.textContent = BusImag.Images[i].name + ' has ' + BusImag.Images[i].shown + ' shown and ' + BusImag.Images[i].votes + ' votes';
        }
        aImageElement.removeEventListener('click', userClick);
        bImageElement.removeEventListener('click', userClick);
        cImageElement.removeEventListener('click', userClick);

        for (let i = 0; i < BusImag.Images.length; i++) {
            picVote.push(BusImag.Images[i].votes);
            picShown.push(BusImag.Images[i].shown);
        }
        theChart();
        BusImag.Images;
        let alimage = JSON.stringify(BusImag.Images);
        localStorage.setItem('Image', alimage)
        let stringStorage=localStorage.getItem('Image')
        let imagess=JSON.parse(stringStorage)
        let list1 = document.getElementById('alvote');
        let results
        for (let i = 0; i < BusImag.Images.length; i++) {
            results = document.createElement('li');
            list1.appendChild(results);
            let sum =BusImag.Images[i].votes + imagess[i].votes
            results.textContent = BusImag.Images[i].name + ' has ' + sum + ' votes';
        }

    }
}


function theChart() {

    let ctx = document.getElementById('myChart').getContext('2d');

    let chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: pictureName,

            datasets: [


                {
                    label: 'picture votes',
                    backgroundColor: '#1e212d',
                    borderColor: '#1e212d',
                    data: picVote
                },

                {
                    label: 'picture shown',
                    backgroundColor: 'black',
                    borderColor: 'red',
                    data: picShown
                },


            ]
        },
        options: {}
    });

}