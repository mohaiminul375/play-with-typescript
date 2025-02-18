type User = {
    readonly _id: string; //can't change value;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number; //optional
}

let myUser: User = {
    _id: "123",
    name: "mohaiminul",
    email: "@",
    isActive: true,
}


type cardNumber = {
    cardNumber: string;
}
type cardDate = {
    cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
    CVV: number;
}
const myCardDetails: cardDetails = { cardNumber: '123-03338', cardDate: '12-12-2030', CVV: 208 }

// myUser._id='' error because it's read only
export { }