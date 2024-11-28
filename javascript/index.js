/**
 *  Objects
 * ----------
 *      Object are used to store data in form of key and value pairs
 *      Object in javascript is represented by {} i.e literal Object
 *      keys in object should be always string (Recommended)
 *      values in object can be any type of data 
 *          Syn : 
 *                  variable refVar = {};
 *      key value pairs are seperated by , (Comma);
 *      if there are duplicate keys in object , the value is assigned with last 
 *      available key
 *       
 *      FAQ 
 *      ---
 *          How many Ways to Access Values from Literal Object
 *              1. dot notation -> refVar.keyName
 *              2. square notation (Recommended) -> refVar["keyname"];
 *              3. Object.values(ref)
 */
var obj = {
    "empName": "Shiva",
    "tech": "JS",
    "isAlive": true,
    "empName": "Shiva Kumar",
    "empName": "Shiva Reddy",
    "empname": "Shiva Saithan",
}
// CRUD -> create , read , update , delete
console.table(obj);
console.log(obj.empName);
console.log(obj['tech']);

console.clear();
console.log(`Hi , My Name is ${obj.empName} , I am Currently learning ${obj.tech} because i am ${obj.isAlive}`);
console.log(`Hi , My Name is ${obj['empName']} , I am Currently learning ${obj['tech']} because i am ${obj['isAlive']}`);

obj['gender'] = "Male"; // Adding Property to Exisiting object
console.log(obj);

obj['tech'] = "Javascript"; // Updating Existing Property of Object 
console.log(obj);

delete obj.empname; // deleting Existing property from object

console.log(obj);

var address = {
    "state": "TS",
    "city": "Hyderabad",
    "pincode": "500042"
}
console.log(address);

obj['address'] = address;

console.log(obj);
console.clear();
console.log(obj.address); // Address Object , reading
console.log(obj.address.state); // Ts
console.log(obj['address'].pincode); // address.pincode
console.log(obj.address['pincode']); // address['pincode']
console.log(obj['address']['pincode']); // address['pincode]

console.clear();

var employee = {
    'empName': "John",
    empId: 100,
    'address': {
        'state': 'AP',
        'capital': 'Amaravathi'
    },
    0: "employee"
}
console.log(employee);
delete employee.empId;
console.log(employee);
console.log(employee.address.capital);
// console.log(employee.0);
console.log(employee['0']);


var arr = [
    {
        "id": 1,
        "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    }
]
// Rate : 3.9 , Count : 120
console.log(arr);
obj = arr[0];
console.log(`Rate : ${arr[0].rating.rate} , Count : ${arr[0].rating.count}`);
console.log(`Rate : ${obj.rating.rate} , Count : ${obj.rating.count}`);