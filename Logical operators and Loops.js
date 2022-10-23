// "ИЛИ" ||

console.log(true || true)

console.log(true || false)

console.log(false || true)


// "И" &&


console.log(true && true)

console.log(true && false)

console.log(false && true)



let item_1 = 5;
let item_2 = 10;

if (item_1 > 3 || item_2 < 15) {
    console.log("Ti molodec")
} else {
    console.log("Chto to ne tak :(")
}



let item_1 = 2;
let item_2 = 10;

if (item_1 > 3 && item_2 < 15) {
    console.log("Ti molodec")
} else {
    console.log("Chto to ne tak :(")
}



let item_1 = 5;
let item_2 = 100;
let item_3 = 50;

if (item_1 > 3 || item_2 < 15 && item_3 == 50) {
    console.log("Ti molodec")
} else {
    console.log("Chto to ne tak :(")
}


// ЦИКЛ While


let item_1 = 0;

while(true) {
    console.log(item_1 + " = Ti molodec")
    item_1++
}

let item_1 = 0
let item_2 = 50
let item_3 = 10

while(item_1 < 40 && item_2 < 100 && item_3 < 12) {
    console.log(item_1 + " = Ti molodec" )
    console.log(item_2 + " = YmNiChKa")
    console.log(item_3 + " = Stop")
    item_1++
    item_2++
    item_3++
}


let temperature = 0

while(temperature < 40) {

    if (temperature < 10) {
        console.log ("temperature", temperature, "holodno(")
    }
    else if (temperature >= 10 && temperature < 30) {
        console.log ("temperature", temperature, "horosho )")
    }
    else {
        console.log ("temperature", temperature, "zharko(")
    }
    temperature++
}



// ЦИКЛ For


for (let i = 0; i < 10; i++){
    console.log(i, "= for")
}


for (let temperature = 0; temperature < 10; temperature++)

    if (temperature < 3) {
        console.log ("temperature", temperature, "holodno(")
    }
    else if (temperature >= 3 && temperature < 7) {
        console.log ("temperature", temperature, "horosho )")
    }
    else {
        console.log ("temperature", temperature, "zharko(")
    }





let names = ['Kate',
             'Alex',
             'Ivan',
             'Ignat',
             'Andrey',
             'Vika']

for (item_1 of names) {

    if (item_1 == 'Ignat') {
        break;
    }

    console.log(item_1)
}



