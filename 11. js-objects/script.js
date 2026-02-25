///////////// Creating Objects //////////////// 
// 1st Method (Using Object Literal)
const info1 = {
    name: "Yatheswar",
    age: 23,
    email: "yathe@gmail.com"
};

// console.log(info1)

// 2nd Method (Create Empty Object and then Add Properties)
const info2 = {};

// console.log(info2)

// object_name.key = value
info2.name = "Yassaswini";

// console.log(info2)

info2.age = 23;
info2.email = "yassaswini@gmail.com"

// console.log(info2)

// 3rd Method (Using new keyword)

const info3 = new Object();

// console.log(info3)

info3.name = "SreeRam"
info3.age = 24
info3.email = "sreeram@gmail.com"

// console.log(info3)

///////////// Add Properties ////////////////

info3.eyeColor = "black"
info3["occupation"] = "Designer"
info3["Salary"] = 50000

///////////// Modify Objects ////////////////

info3.occupation = "Editor"
info3["Salary"] = 60000

// console.log(info3)

///////////// Accessing Objects ////////////////

// console.log(info3.name)
// console.log(info3["occupation"])

// to get "keys" of an Object : Object.keys(obj_name);
// console.log(Object.keys(info3));

// to get "values" of an Object : Object.values(obj_name);
// console.log(Object.values(info3));

///////////// Delete in Objects ////////////////

delete info3.eyeColor; // delete entire property

delete info3["age"];

// console.log(info3)

// info3 = null;

let info4 = {
    name: "Harsha",
    age: 21,
    designation: "student"
};

// console.log(info4);

info4 = null;

// console.log(info4)

///////////// has Own Property ////////////////

// console.log(info3.hasOwnProperty("name"));

// console.log(info3.hasOwnProperty("address"));

//////////// Object Keys //////////////

const info5 = {
    name: "Bharath",
    21: 21,
    designation: "student",
    college: "Veltech",
    true: null
};

// console.log(info5)

/*
{
    "name": "Bharath",
    "21": 21,
    "designation": "student",
    "college": "Veltech"
    "true":"null"
};
*/

//////////// Object Methods //////////////

const name = {
    fname: "Yatheswar",
    lname: "Ethalapaka",

    fullName1: function () {
        // return fname + " " + lname;
        return this.fname + " " + this.lname;
    },

    fullName2: function (firstName, lastName) {
        return firstName + " " + lastName;
    }

};

// console.log(name.fullName1());

// console.log(name.fullName2("Yathe", "Eswar"))


//////////// Nested Objects //////////////

const student1 = {

    name: "Krishna",
    age: 21,

    student2: {
        name: "Madhusudhan",
        age: 21,

        student3: {
            name: "Lokesh",
            age: 21
        }
    },

    college: "Veltech"

}

// console.log(student1);

/* Accessing

// console.log(student1.name);

// console.log(student1.student2.name);

// console.log(student1["student2"]["student3"]["name"]);

*/