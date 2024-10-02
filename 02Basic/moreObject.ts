type User = {
    readonly _id: string; //can't change value;
    name: string;
    email: string;
    isActive: boolean;
    creditCardDetails?: number;
}

let myUser: User = {
    _id: "123",
    name: "mohaiminul",
    email: "@",
    isActive: true,
}


type cardNumber = {
    cardnumber: string;
}
type cardDate = {
    cardDate: string;
}

type cardDetails = cardNumber & cardDate & {
    CVV: number;
}

// myUser._id='' error because it's read only
export { }