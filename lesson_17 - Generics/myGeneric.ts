const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number): boolean | number{
    return val
}

function identityTwo(val: any): any{
    return val
}

function identityThree<Type>(val: Type): Type{ // Will recieve one type of value and return value of the same type
    return val
}

identityThree("3");

function identityFour<T>(val: T): T{
    return val;
}

interface Bootle{
    brand: string,
    type: number
}

function identityFive<Bootle>(val: Bootle): Bootle{
    return val;
}

function getSearchProducts<T>(products: T[]): T{
    return products[3];
}

const getMoreSearchProducts = <T, /*???*/>(products: T[]): T => {
    const myIndex = 4;
    return products[myIndex];
}



interface Database {
    connection: string,
    username: string,
    password: string
}

function createGenericClass<T, U extends Database>(valOne:T, valTwo:U):object{
    return {valOne, valTwo}
}

createGenericClass(3, {connection: "", username: "", password: ""});



interface Quiz{
    name: string,
    type: string,
}

interface Course{
    name: string,
    author: string,
    subject: string,
    students: number
}

class Sellable<T>{
    public cart: T[] = [];

    addToCard(product: T){
        this.cart.push(product)
    }
}