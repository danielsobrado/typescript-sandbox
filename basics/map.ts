let arr1 = [1,2,3,4,5]

let increment = arr1.map(n => n + 1);

console.log(increment)

interface User {
    id: number,
    name: string
}

let createUsers = arr1.map<User>(n => {
    return {
        id: n, 
        name: "Pepe"
    }
});

console.log(createUsers)