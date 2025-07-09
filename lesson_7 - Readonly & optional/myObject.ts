type User = {
    readonly _id: string;
    name: string;
    email: string;
    isActive: boolean;
    credCardDetails?: number;
}

let myUser: User = {
    _id: "1234",
    name: "Vadim",
    email: "fake@mail.com",
    isActive: false
}

myUser.email = "changed.gmail.com";
//myUser._id = "321";

type cardNumber = {
    cardNumber: string;
}

type cardDate = {
    cardDate: Date;
}

type cardDetails = cardNumber & cardDate & {
    cvv: number
}