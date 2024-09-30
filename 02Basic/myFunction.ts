function addTwo(num: number) {
    return num + 2
}

function getUpper(value: string) {
    return value.toLocaleUpperCase() //method won't suggest if didn't define type of value
}
function signUpUser(name: string, email: string, isPaid: boolean) {
    const userInfo = {
        name, email, isPaid
    }
    return userInfo;
}


function loginUser(name: string, email: string, isPaid: boolean = false) {
// set default value in argument
}
loginUser('mmm', 'mm')







const result = addTwo(2)
const result1 = getUpper('mohaiminul')
const result2 = signUpUser('Mohaiminul', 'mohaiminul375@gmail.com', true)
console.log(result)
console.log(result1)
export { }