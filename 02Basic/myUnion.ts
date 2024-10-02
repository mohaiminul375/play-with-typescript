let score: number | string = 33;


type User = {
    name: string;
    id: number
}

type Admin = {
    UserName: string;
    id: number
}
let person: User | Admin = {
    UserName: 'Mohaiminul',
    id: 22261
}



function getId(id: number | string) {
    console.log(`DB id is: ${id}`)
}
getId('2')
getId(2)
// array
const data: (number | string)[] = [1, 2, 3, 'string']
let seatAllotment: "aisle" | "middle" | "window";
seatAllotment = 'aisle'
// seatAllotment='right' error



export { }