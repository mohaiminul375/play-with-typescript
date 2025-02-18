interface User {
    readonly _id: number;
    email: string
    userId: number
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponName: string, value: number): number
}

interface Admin extends User {
    role: 'Admin' | 'User'
}


const mohaiminul: Admin = {
    _id: 22, email: '@gmail.com', userId: 22, role: 'Admin',

    startTrail: () => {
        return 'name'
    },
    getCoupon: (name: 'hero10 ', off: 20) => {
        return 10;
    }
}

export { }