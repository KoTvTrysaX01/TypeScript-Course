type User = {
    name: string;
    email: string;
    isActive: boolean;
}

type MyString = string;

function createUser(user: User): User{
    return user;
}

createUser({name: "", email: "", isActive: true});


// The parameter's type annotation is an object type
function printCoord(pt: { x: number; y: number }) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
printCoord({ x: 3, y: 7 });

function printName1(obj: { first: string; last?: string }) {
  // ...
}
// Both OK
printName1({ first: "Bob" });
printName1({ first: "Alice", last: "Alisson" });


function printName2(obj: { first: string; last?: string }) {
  // Error - might crash if 'obj.last' wasn't provided!
    //console.log(obj.last.toUpperCase());
//'obj.last' is possibly 'undefined'.

  if (obj.last !== undefined) {
    // OK
    console.log(obj.last.toUpperCase());
  }
 
  // A safe alternative using modern JavaScript syntax:
  console.log(obj.last?.toUpperCase());
}