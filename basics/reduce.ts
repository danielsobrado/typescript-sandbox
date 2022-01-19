let arr1 = [1,2,3,4,5]

let arr2 = ['uno','dos','tres']

let textAcum = arr2.reduce((previous, current) => { return previous + current + ' '},'');

console.log(textAcum)

interface User {
    id: number,
    name: string
}

const myUsers: User[] = [{id: 1, name: "Pedro"}, {id: 2, name: "Luis"}, {id: 3, name: "Dani"}]

let filterIds = myUsers.reduce(
        (previousId, currUser) => currUser.id % 2 === 1 ? [...previousId, currUser.id] : previousId , [] as number[]            
    );

console.log(filterIds)