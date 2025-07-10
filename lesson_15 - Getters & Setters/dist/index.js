"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
class User {
    constructor(email, name, city = "Maimi") {
        this.email = email;
        this.name = name;
        this.city = "Alicante";
    }
}
const vadim = new User("vadim@mail.r", "vadim");
