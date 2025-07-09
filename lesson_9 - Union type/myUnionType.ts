let score: number | string = 33;

score = 33;
score = "33";

type User = {
    name: string;
    id: number;
}

type Admin = {
    username: string;
    id: number;
    role: string;
}

let vadim: User | Admin = {
    name: "vadim",
    id: 1
}

vadim = {
    username: "kot",
    id: 2,
    role: "admin"
}


// function getDbId(id: number | string){
//     console.log(`Db id is: ${id}`)
// }

function getDbId(id: number | string){
    if(typeof id === "string"){
        id.toLowerCase();
    }
    else if(typeof id === "number"){
        id + 2;
    }
}

getDbId(3);
getDbId("3");


const data1: number[] = [1, 2, 3];
const data2: string[] = ["1", "2", "3"];
const data3: string[] | number[] = [1, 2, 3];
const data4: (string | number)[] = [1, "2", 3];

let pi:3.14 = 3.14;

//pi = 3.145;


let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
//ceatAllotment = "crew";