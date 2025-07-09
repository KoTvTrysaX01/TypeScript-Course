function addTwo(num: number): number{
    //num.toUpperCase();
    //return "hello";
    return num + 2;
}

function getUpper(val: string){
    return val.toUpperCase();
}

function signUpUser(name: string, email: string, password: string, isPaid: boolean){

}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {}

let myValue = addTwo(5);
getUpper("vadim");
signUpUser("Vadim", "fake@mail.ru", "123", false);
loginUser("h", "fake@mail.com");



// function getValue(myVal: number): string{
//     if(myVal > 5){
//         return true
//     }
//     return "200 OK";
// }

const getHello = (s: string): string => {
    return "" + s;
} 

const heroes = ["thor", "spiderman", "ironman"];
//const heroes = [2, 1, 3];


//let mapheroes = heroes.map(hero => {
let mapheroes = heroes.map((hero): string => {
    return `hero is ${hero}`;
})

mapheroes.forEach(element => {
    console.log(element);
});



function consoleError(errmsg: string): void{
    console.log(errmsg);
    //return 1;
}

function handleError(errmsg: string): never{
    throw new Error(errmsg);
}



export{}