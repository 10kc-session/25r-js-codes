/**
 *  conditional statements
 *  1. simple if
 *  2. if else
 *  3. ladder if
 * 
 *      i/p : HelloS
 *      o/p : hELLOs
 */
var str = "HelloThereRamu";
var res = '';
for (var i = 0; i < str.length; i++) {
    if (str[i] == str[i].toUpperCase()) {
        res = res + str[i].toLowerCase();
    } else {
        res = res + str[i].toUpperCase();
    }
}
console.log(res);


// i/p -> yadhtrib // o/p -> birthday
var str = 'inaylak yadhtrib yppah';
// console.log(str.split('').reverse().join(''));
res = '';
for (i = str.length - 1; i >= 0; i--) {
    res += str[i]; // res = res + str[i];
}
console.log(res);

console.clear();
var obj = {
    'number': 45
}
// if number property is even number print 1 - 10 even numbers , if it is odd number ,
// print 1 - 10 odd numbers , if number is 0 , print 0
if (obj.number == 0) {
    console.log("0")
}
else if (obj.number % 2 == 0) {
    for (i = 2; i <= 10; i += 2) {
        console.log(i)
    }
} else {
    for (i = 1; i <= 10; i += 2) {
        console.log(i)
    }
}

console.clear();

var obj = {
    "name": "Pawan Kalyan",
    "street": "KPHB",
}

// name => capital
// {"name" : "PAWAN KALYAN" , "street" : "kphb"};

obj.name = obj.name.toUpperCase();
obj.street = obj.street.toLowerCase();
console.log(obj);

console.clear();

obj = {
    "name": "pAWAN", // PAWAN
}
// if name property having any small character , convert to uppercase
for (var i = 0; i < obj.name.length; i++) {
    console.log(i);
    if (obj.name[i] == obj.name[i].toLowerCase()) {
        obj.name = obj.name.toUpperCase();
        break;
    }
}
console.log(obj);



