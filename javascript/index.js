// Function Defination
function print() {
    console.log("Data printed");
}
// function Calling
print();

console.clear();

function goToKitchen() {
    console.log("Entered Kitchen Room");
    console.log("Some Work Done");
    console.log("Exited from Kitchen Room");
}
// console.log(goToKitchen);
goToKitchen();
console.log("Entered Bed Room");

console.clear();

function cooking() {
    console.log("Enter Kitchen and Stared Cooking");
    takeDelivery();
    console.log("Completed Cooking");
}
function takeDelivery() {
    console.log("Exited From Kitchen");
    console.log("Taken Delivery");
    console.log("Back to Kitchen");
}
cooking();

console.clear();


function funTwo() {
    console.log("Function Two Called");
}
function funOne() {
    console.log("Function One Called");
    funTwo();
    console.log("Function One Completed");
}
funOne();
funTwo();

console.clear();

three();
function three() {
    console.log("Third Function");
}

console.clear();

function one() {
    console.log("One");
    two();
    console.log("Three");
}
function two() {
    console.log("Three");
}
function four() {
    console.log("Two");
    one();
    console.log("One");
}
four();
one();

console.clear();

function apple() {
    var a = 20;
    console.log(a++ + ++a + --a);
    banana();
    console.log(a);
}
function banana() {
    var b = 12;
    console.log(++b + b++);
    cherry();
    console.log("Bananaaaaaaaa");
}
function cherry() {
    console.log("Cherry.......");
}
apple();
