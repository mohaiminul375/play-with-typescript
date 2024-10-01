const user = {
    name: "Mohaiminul",
    email: 'ex@gmail.com',
    isActive: true
}
// wired behaviour

function createUser({ name: string, isPaid: boolean }) { }
let newUser = { name: 'Mohaiminul', isPaid: true, email: 'ex@gmail.com' }
createUser(newUser)


function createCourse(): { name: string, price: number } {
    return { name: 'js', price: 90 }
}
export { }