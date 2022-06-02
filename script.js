"use strict";

const nbr = [0,2,3];
nbr.pop()
nbr.push(4);
for (let i = 0; i < nbr.length; ++i) {
    console.log(nbr[i]);
}
nbr.forEach(i => console.log(i));
const a = nbr.map(i => i + 1); //замена значений массива где i текущее значение

// nbr.fill(1);
console.log(a);

const zeroBtn = document.querySelector('#zero');
const oneBtn = document.querySelector('#one');
const twoBtn = document.querySelector('#two');
const threeBtn = document.querySelector('#three');
const fourBtn= document.querySelector('#four');
const fiveBtn = document.querySelector('#five');
const sixBtn = document.querySelector('#six');
const sevenBtn = document.querySelector('#seven');
const eightBtn = document.querySelector('#eight');
const nineBtn = document.querySelector('#nine');

const equal = document.querySelector('#equal');
const mult = document.querySelector('#mult');
const divider = document.querySelector('#divider');
const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const comma = document.querySelector('#comma');

const ac = document.querySelector('#reset');
const out = document.querySelector('.result');

let res = 0;
let first = 0;
let second = 0;
let choseOperation = 1;

let isFirstNbr = true;

oneBtn.addEventListener('click', function() {
    if (isFirstNbr) {
        first = first * 10 + 1;
    } else {
        second = second * 10 + 1;
    }
    
    showResult();
}); 

twoBtn.addEventListener('click', function() {
    if (isFirstNbr) {
        first = first * 10 + 2;
    } else {
        second = second * 10 + 2;
    }
    
    showResult();
});

threeBtn.addEventListener('click', function() {
    if (isFirstNbr) {
        first = first * 10 + 3;
    } else {
        second = second * 10 + 3;
    }
    
    showResult();
});

fourBtn.addEventListener('click', function() {
    if (isFirstNbr) {
        first = first * 10 + 4;
    } else {
        second = second * 10 + 4;
    }
    
    showResult();
});

fiveBtn.addEventListener('click', function() {
    if (isFirstNbr) {
        first = first * 10 + 5;
    } else {
        second = second * 10 + 5;
    }
    
    showResult();
});

sixBtn.addEventListener('click', function() {
    if (isFirstNbr) {
        first = first * 10 + 6;
    } else {
        second = second * 10 + 6;
    }
    
    showResult();
});

sevenBtn.addEventListener('click', function() {
    if (isFirstNbr) {
        first = first * 10 + 7;
    } else {
        second = second * 10 + 7;
    }
    
    showResult();
});

eightBtn.addEventListener('click', function() {
    if (isFirstNbr) {
        first = first * 10 + 8;
    } else {
        second = second * 10 + 8;
    }
    
    showResult();
});

nineBtn.addEventListener('click', function() {
    if (isFirstNbr) {
        first = first * 10 + 9;
    } else {
        second = second * 10 + 9;
    }
    
    showResult();
});

zeroBtn.addEventListener('click', function() {
    if (isFirstNbr) {
        first = first * 10;
    } else {
        second = second * 10;
    }
    
    showResult();
});

//всплытие( function, var )
function showResult() {
    if (isFirstNbr) {
        out.textContent = first;
    } else {
        out.textContent = second;
    }
};

ac.addEventListener('click', function() {
    res = 0;
    first = 0;
    second = 0;
    isFirstNbr = true;
    showResult();
});

divider.addEventListener('click', function() {
    choseOperation = 1;
    isFirstNbr = false;
})

mult.addEventListener('click', function() {
    choseOperation = 2;
    isFirstNbr = false;
})

minus.addEventListener('click', function() {
    choseOperation = 3;
    isFirstNbr = false;
})
plus.addEventListener('click', function() {
    choseOperation = 4;
    isFirstNbr = false;
})


equal.addEventListener('click', function() {
    if (choseOperation === 1) {
        res = first / second;
    } else if (choseOperation === 2) {
        res = first * second;
    } else if (choseOperation === 3) {
        res = first - second;
    } else if (choseOperation === 4) {
        res = first + second;
    }

    out.textContent = res;

    first = res;
    second = 0;
});


















// let isFirst = true;

// oneBtn.addEventListener('click', function() {
    // if (isFirst) {
    //     res = 1;
    //     isFirst = false;
    // } else {
        // res = res * 10 + 1;
    // }
    
//     showResult();
// }); 


// const nbr = [0,2,3];
// const a = nbr[0];
// const b = nbr[1];
// const c = nbr[2];
// nbr.pop()
// nbr.push(4);
// console.log(nbr);



// let a = 3;
// const b = a++;
// const c = ++a;
// console.log(a, b, c);


// for (let i = 0; i < 10; ++i) {
//     console.log(i);
// }