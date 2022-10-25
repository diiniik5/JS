// ФУНКЦИИ


function names () {
    let mass = "Hello"
    console.log(mass)
}
names()


function names (item_1, item_2) {
    let mass = "Hello"
    console.log(mass, item_1, item_2)
}
names(11, 22)



// СТРЕЛОЧНЫЕ ФУНКЦИИ


let t1 = 10
let t2 = 20
let t3 = 40
let t4 = 50

let f11 = () => {console.log('Hello!')}

let f22 = (t11, t22) => {console.log('Sum = ', t11 + t22)}

f22(t3, t2)


// СТРЕЛОЧНЫЕ ФУНКЦИИ true & false


let t1 = 10
let t2 = 20
let t3 = 60
let t4 = 50

let f33 = (t1 < t2) ?
(t11, t22) => {console.log('order = ', t11 + t22)} :
(t11, t22) => {console.log('order = ', t11 - t22)} ;

f33(t3, t4)


