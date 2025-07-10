
class User {
    private _courseCount = 1;
    private readonly city: string = "Alicante";
    constructor(public email: string,
                public name: string,
                city = "Maimi"){
                    
                }

    get getAppleEmail(): string{
        return `apple${this.email}`
    }

    get getCourseCount(): number {
        return this._courseCount;
    }

    set setCourseCount(newCount: number){
        if(newCount <= 1){
            throw new Error("Course count should be more than 1")
        }else{
            this._courseCount = newCount;
        }
    }
}


const vadim = new User("vadim@mail.r", "vadim");


export{}