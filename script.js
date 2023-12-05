// INDEX

let countImg = 1;
document.getElementById("radio1").checked = true;

setInterval( function(){
    nextImage();
}, 5000)

function nextImage(){
    countImg++;
    if(countImg>6){
        countImg = 1;
    }

    document.getElementById("radio"+countImg).checked  = true;
}

/* CARRINHO ITENS */

const quantidade = document.getElementById('quantidade');
const maisButton = document.getElementById('mais');
const menosButton = document.getElementById('menos');

const quantidade2 = document.getElementById('quantidade2');
const maisButton2 = document.getElementById('mais2');
const menosButton2 = document.getElementById('menos2');

const quantidade3 = document.getElementById('quantidade3');
const maisButton3 = document.getElementById('mais3');
const menosButton3 = document.getElementById('menos3');

const quantidade4 = document.getElementById('quantidade4');
const maisButton4 = document.getElementById('mais4');
const menosButton4 = document.getElementById('menos4');

const quantidade5 = document.getElementById('quantidade5');
const maisButton5 = document.getElementById('mais5');
const menosButton5 = document.getElementById('menos5');

const quantidade6 = document.getElementById('quantidade6');
const maisButton6 = document.getElementById('mais6');
const menosButton6 = document.getElementById('menos6');

const updateValue = () => {
    quantidade.innerHTML = count;
};

let count = 0;
let intervalId = 0;

maisButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count += 10;
        updateValue();
    }, 50);
});

menosButton.addEventListener('mousedown', () => {
    intervalId = setInterval(() => {
        count -= 10;
        updateValue();
    }, 50);
});

document.addEventListener('mouseup', () => clearInterval(intervalId));



const updateValue2 = () => {
    quantidade2.innerHTML = count2;
};

let count2 = 0;
let intervalId2 = 0;

maisButton2.addEventListener('mousedown', () => {
    intervalId2 = setInterval(() => {
        count2 += 10;
        updateValue2();
    }, 50);
});

menosButton2.addEventListener('mousedown', () => {
    intervalId2 = setInterval(() => {
        count2 -= 10;
        updateValue2();
    }, 50);
});

document.addEventListener('mouseup', () => clearInterval(intervalId2));



const updateValue3 = () => {
    quantidade3.innerHTML = count3;
};

let count3 = 0;
let intervalId3 = 0;

maisButton3.addEventListener('mousedown', () => {
    intervalId3 = setInterval(() => {
        count3 += 10;
        updateValue3();
    }, 50);
});

menosButton3.addEventListener('mousedown', () => {
    intervalId3 = setInterval(() => {
        count3 -= 10;
        updateValue3();
    }, 50);
});

document.addEventListener('mouseup', () => clearInterval(intervalId3));



const updateValue4 = () => {
    quantidade4.innerHTML = count4;
};

let count4 = 0;
let intervalId4 = 0;

maisButton4.addEventListener('mousedown', () => {
    intervalId4 = setInterval(() => {
        count4 += 1;
        updateValue4();
    }, 50);
});

menosButton4.addEventListener('mousedown', () => {
    intervalId4 = setInterval(() => {
        count4 -= 1;
        updateValue4();
    }, 50);
});

document.addEventListener('mouseup', () => clearInterval(intervalId4));


const updateValue5 = () => {
    quantidade5.innerHTML = count5;
};

let count5 = 0;
let intervalId5 = 0;

maisButton5.addEventListener('mousedown', () => {
    intervalId5 = setInterval(() => {
        count5 += 1;
        updateValue5();
    }, 50);
});

menosButton5.addEventListener('mousedown', () => {
    intervalId5 = setInterval(() => {
        count5 -= 1;
        updateValue5();
    }, 50);
});

document.addEventListener('mouseup', () => clearInterval(intervalId5));



const updateValue6 = () => {
    quantidade6.innerHTML = count6;
};

let count6 = 0;
let intervalId6 = 0;

maisButton6.addEventListener('mousedown', () => {
    intervalId6 = setInterval(() => {
        count6 += 1;
        updateValue6();
    }, 50);
});

menosButton6.addEventListener('mousedown', () => {
    intervalId6 = setInterval(() => {
        count6 -= 1;
        updateValue6();
    }, 50);  
});

document.addEventListener('mouseup', () => clearInterval(intervalId6));

/* CARRINHO TOTAL */

const total = document.getElementById('total');
const desconto = document.getElementById('desconto');
const sub = document.getElementById('sub');

let soma = 0;
let sDesconto = 0;
let subTotal = 0;

const updateTotal = () => {
    total.innerHTML = soma;
};
const updateDesconto = () => {
    if (sDesconto > 0) {
        desconto.innerHTML = "R$" + sDesconto + ",00";
    }
    else {
        desconto.innerHTML = sDesconto;
    }
};
const updateSub = () => {
    sub.innerHTML = subTotal;
};

document.addEventListener('click', () => {
    intervalId = setInterval(() => {
        soma = count * 5 + count2 * 5 + count3 * 5 + count4 * 100 + count5 * 100 + count6 * 100;
        updateTotal();

        if (soma >= 200) {
            sDesconto = 0.10 * soma;
        }
        else {
            sDesconto = "(Compras acima de R$200,00)";
        }
        updateDesconto();

        if (sDesconto > 0) {
            subTotal = soma - sDesconto;
        }
        else {
            subTotal = soma;
        }
        updateSub();

    }, 50);
});



// SOBRE

let countDes = 1;
var descricoes = ['missao', 'visao', 'valor', 'politica'];
document.getElementById("missao").checked = true;

setInterval( function(){
    nextDes();
}, 2000)

function nextDes(){
    countDes++;
    if(countDes>4) {
        countDes = 1;
    }

    document.getElementById(descricoes.indexOf(countDes)).checked = true;
}

// const cadastrar = document.getElementById('cadastrar');
// const cadastrado = document.getElementById('cadastrado');
// let msg = 0;

// const updateCadastrado = () => {
//     cadastrado.innerHTML = msg;
// };

// document.addEventListener('click', () => {
//     intervalId = setInterval(() => {
//         msg = "CADASTRADO, AGUARDE NOSSO RETORNO VIA WHATSAPP!";
//         updateCadastrado();

//     }, 50);
// });

