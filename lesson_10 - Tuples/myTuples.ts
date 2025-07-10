//const user: (string | number)[] = ["vadim", 1]
let tupleUser: [string, number, boolean];
tupleUser = ["vadim", 23, false];

let rgb: [number, number, number, number?] = [255, 132, 112, 0.5];

type User = [number, string];
const newUser: User = [123, "vadim"];
newUser[1] = "fake@mil.ro";
//newUser.push(true);

export{}