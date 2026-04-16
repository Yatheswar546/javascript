var obj = {
    "name" : 'Yathe',
    "age" : 28,
    "married" : false,
    "score" : [22,45,67,13],
    "grade" : null,
    "marks": {
        "ml" : 65,
        "python" : 76,
        "javascript" : 87,
    },
    "lastName" : undefined,
    "getName" : function(){
        return this.name
    }
}

console.log(obj)

// obj = JSON.stringify(obj)
// console.log(obj)
// console.log(JSON.stringify(obj))

// obj = JSON.parse(obj)
// console.log(obj)

// obj = JSON.stringify(obj)
// console.log(obj)

// var arr = [
//     {
//         "name" : 'Yathe',
//         "age" : 22
//     },
//     {
//         "name" : 'Swarup',
//         "age" : 21
//     },
//     {
//         "name" : 'Suhaas',
//         "age" : 20
//     },
// ]

// console.log(arr[1].age)