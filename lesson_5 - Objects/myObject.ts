const User = {
    
    name: "Vadim",
    email: "myemail@gmail.com",
    isActive: true
}


function createUser({name: string, isPaid: boolean}){}

let newUser = {name: "Vadim", isPaid: true, email: "example@.com"}
// createUser({name: "Vadim", isPaid: false});
createUser(newUser); // Should throw an error

function createCourse():{name: string, price: number}{
    return {name: "reactts", price: 15};
}



export {}