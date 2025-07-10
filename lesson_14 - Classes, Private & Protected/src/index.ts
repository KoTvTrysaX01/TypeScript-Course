// class User {
//     email: string;
//     //#name: string;
//     private name: string;
//     private readonly city: string = "Alicante";
//     constructor(email: string, name: string){
//         this.email = email;
//         this.name = name;
//     }
// }

class User {
    private readonly city: string = "Alicante";
    constructor(public email: string,
                public name: string,
                city = "Maimi"){
                    
                }
    private deleteToken(){
        console.log("Token deleted")
    }

}


const vadim = new User("vadim@mail.r", "vadim");


export{}