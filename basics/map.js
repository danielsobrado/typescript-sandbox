var arr1 = [1, 2, 3, 4, 5];
var increment = arr1.map(function (n) { return n + 1; });
console.log(increment);
var createUsers = arr1.map(function (n) {
    return {
        id: n,
        name: "Pepe"
    };
});
console.log(createUsers);
