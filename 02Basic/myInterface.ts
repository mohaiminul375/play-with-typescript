interface User {
    readonly _id: number;
    email: string
    userId: number
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponName: string, value: number): number
}
const mohaiminul: User = {
    _id: 22, email: '@gmail.com', userId: 22,

    startTrail: () => {
        return 'name'
    },
    getCoupon: (name: 'hero10 ', off: 5) => {
        return 10;
    }
}

export { }