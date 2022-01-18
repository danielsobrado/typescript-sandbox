let arr1 = [1,2,3,4,5]

let arr2 = ['uno','dos','tres']

let textAcum = arr2.reduce((previous, current) => { return previous + current + ' '},'');

console.log(textAcum)
