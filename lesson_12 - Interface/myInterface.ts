interface User{
    readonly dbId: number,
    email: string,
    userId: number,
    googleId?: string,
    //startTrial: () => string, 
    startTrial(): string,// The same result?
    getCoupon(coupon: string, value: number): number
}

interface User{
    gitHubToken: string // new value
}

interface Admin extends User{
    role: "admin" | "ta" | "learner";
}

const vadim: Admin = {
    role: "admin",
    gitHubToken: "321", // new value
    dbId: 123,
    email: "me@gmail.com",
    userId: 1,
    startTrial: () => {
        return "Trial started"
    },
    getCoupon: (name: "vadim", number: 123) => {
        return 1;
    }
}

vadim.email = "new@.com";
vadim.googleId = "123";
//vadim.dbId = 321;